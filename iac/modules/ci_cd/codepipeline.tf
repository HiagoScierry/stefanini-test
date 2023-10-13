resource "aws_codepipeline" "this" {
  name     = var.name
  role_arn = var.pipeline_service_role

  artifact_store {
    location = var.artifact_bucket_name
    type     = "S3"
  }

  stage {
    name = "Source"
    action {
      name             = "Source"
      category         = "Source"
      owner            = "AWS"
      provider         = "CodeStarSourceConnection"
      version          = 1
      run_order        = 1
      output_artifacts = ["Source"]

      configuration = {
        FullRepositoryId = var.github.repository_id
        BranchName       = var.github.branch
        ConnectionArn    = var.github.connection_arn
      }
    }

  }


  stage {
    name = "Build"
    action {
      name             = "Build"
      category         = "Build"
      owner            = "AWS"
      provider         = "CodeBuild"
      version          = 1
      run_order        = 1
      input_artifacts  = ["Source"]
      output_artifacts = ["Build"]

      configuration = {
        ProjectName   = var.name
        PrimarySource = "Source"
      }
    }
  }

  dynamic "stage" {
    for_each = var.ecs_config != null ? [var.ecs_config] : []
    content {
      name = "Deploy"

      action {
        name            = "Deploy"
        category        = "Deploy"
        owner           = "AWS"
        provider        = "ECS"
        input_artifacts = ["Build"]
        version         = 1
        configuration = {
          ClusterName = stage.value.cluster_name
          ServiceName = stage.value.service_name
        }
      }
    }
  }
}