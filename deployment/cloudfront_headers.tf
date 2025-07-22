# CloudFront Response Headers Policy to fix CSP issues
resource "aws_cloudfront_response_headers_policy" "romecode_headers" {
  provider = aws.main
  
  name    = "romecode-security-headers"
  comment = "Security headers for romecode.com"

  security_headers_config {
    content_type_options {
      override = true
    }

    frame_options {
      frame_option = "SAMEORIGIN"
      override     = true
    }

    referrer_policy {
      referrer_policy = "strict-origin-when-cross-origin"
      override        = true
    }

    xss_protection {
      mode_block = true
      protection = true
      override   = true
    }

    strict_transport_security {
      access_control_max_age_sec = 63072000
      include_subdomains         = true
      preload                    = true
      override                   = true
    }

    # This is the key part - proper CSP for React apps
    content_security_policy {
      content_security_policy = join(" ", [
        "default-src 'self';",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval';",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
        "img-src 'self' data: https: blob:;",
        "font-src 'self' data: https://fonts.gstatic.com https://fonts.googleapis.com;",
        "connect-src 'self' https://calendly.com;",
        "frame-src 'self' https://calendly.com;",
        "media-src 'self' data: blob:;",
        "object-src 'none';",
        "base-uri 'self';",
        "form-action 'self';"
      ])
      override = true
    }
  }
}

# Output the policy ID so it can be manually applied to the CloudFront distribution
output "response_headers_policy_id" {
  value = aws_cloudfront_response_headers_policy.romecode_headers.id
  description = "The ID of the response headers policy to apply to CloudFront distribution"
} 