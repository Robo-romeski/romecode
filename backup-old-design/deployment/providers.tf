terraform {
  backend "remote" {
    organization = "romecode"
    workspaces {
      name = "romespace"
    }
  }
  required_version = ">= 0.13"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 4.0"
    }
  }
}

provider "aws" {
  alias                       = "main"
  region                      = "us-east-1"
}

provider "aws" {
  alias                       = "acm_provider"
  region                      = "us-east-1"
}