Rails.application.routes.draw do
  resources :images
  root 'images#index'

  namespace :api do
    resource :feedbacks, only: [:create]
  end
end
