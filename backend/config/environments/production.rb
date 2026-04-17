require "active_support/core_ext/integer/time"

Rails.application.configure do
  config.enable_reloading = false
  config.eager_load = true

  config.consider_all_requests_local = false
  config.server_timing = false

  config.public_file_server.headers = { "cache-control" => "public, max-age=#{1.year.to_i}" }

  config.active_storage.service = :local

  config.force_ssl = true

  config.log_tags = [ :request_id ]
  config.logger = ActiveSupport::TaggedLogging.logger(STDOUT)

  config.log_level = ENV.fetch("RAILS_LOG_LEVEL", "info")

  config.cache_store = :memory_store

  config.active_job.queue_adapter = :async

  config.action_mailer.default_url_options = { host: ENV.fetch("APP_HOST", "localhost") }

  config.i18n.fallbacks = true
  config.active_support.report_deprecations = false

  config.active_record.dump_schema_after_migration = false
end