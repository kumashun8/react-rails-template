Rails.application.routes.draw do
  resources :home, only: :index, format: 'json'
  root to: 'home#index'
end
