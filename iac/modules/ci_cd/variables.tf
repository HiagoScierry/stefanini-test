variable "name" {
  type        = string
  description = "Nome da automação"
}

variable "pipeline_service_role" {
  type        = string
  description = "ARN da role de execução da pipeline"
}

variable "build" {
  type = object({
    execution_role_arn = string,
    environment        = map(string),
    buildspec_location = string,
  })

  description = "Configurações de build"
}

variable "artifact_bucket_name" {
  type        = string
  description = "Bucket que guarda os artefatos das pipelines"
}


variable "github" {
  type = object({
    repository_id  = string,
    branch         = string,
    connection_arn = string,
  })
}

variable "ecs_config" {
  type = object({
    cluster_name = string
    service_name = string
  })
  description = "OPCIONAL: Cluster de deployment"

  default = null
}


variable "slack_channel_uri" {
  type    = string
  default = null
}
