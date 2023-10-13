resource "aws_codestarnotifications_notification_rule" "this" {
  name        = var.name
  detail_type = "FULL"
  resource    = aws_codepipeline.this.arn

  event_type_ids = [
    "codepipeline-pipeline-pipeline-execution-failed",
    "codepipeline-pipeline-pipeline-execution-canceled",
    "codepipeline-pipeline-pipeline-execution-started",
    "codepipeline-pipeline-pipeline-execution-resumed",
    "codepipeline-pipeline-pipeline-execution-succeeded",
    "codepipeline-pipeline-pipeline-execution-superseded"
  ]
  target {
    address = var.slack_channel_uri
    type    = "AWSChatbotSlack"
  }
}