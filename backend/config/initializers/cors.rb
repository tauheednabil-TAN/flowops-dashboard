allowed_origins = ENV
  .fetch("FRONTEND_URLS", "http://localhost:5173,http://localhost:5174")
  .split(",")
  .map(&:strip)

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins(*allowed_origins)

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end