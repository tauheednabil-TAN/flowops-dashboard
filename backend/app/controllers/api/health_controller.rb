class Api::HealthController < ApplicationController
  def index
    render json: { status: "ok", service: "flowops-api" }
  end
end