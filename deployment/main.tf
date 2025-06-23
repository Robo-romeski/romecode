module "s3-static-website_example_complete" {
  source  = "cn-terraform/s3-static-website/aws"
  version = "1.0.4"
  name_prefix = "romecode"

  providers = {
    aws.main         = aws.main
    aws.acm_provider = aws.acm_provider
  }

  website_domain_name = "romecode.com"

  create_acm_certificate = true

  create_route53_hosted_zone = true

  aws_accounts_with_read_view_log_bucket = ["866497823744"]

  website_server_side_encryption_configuration = {
    rule = {
      apply_server_side_encryption_by_default = {
        sse_algorithm = "AES256"
      }
    }
  }

  log_bucket_force_destroy = false
}