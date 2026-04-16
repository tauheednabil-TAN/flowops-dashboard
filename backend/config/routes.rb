Rails.application.routes.draw do
  namespace :api do
    get "health", to: "health#index"
    get "dashboard/summary", to: "dashboard#summary"
    resources :transactions, only: [:index, :show]
  end
end