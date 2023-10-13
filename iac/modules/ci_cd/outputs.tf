output "build_arn" {
  value = aws_codebuild_project.this.arn
}

output "pipeline_arn" {
  value = aws_codepipeline.this.arn
}
