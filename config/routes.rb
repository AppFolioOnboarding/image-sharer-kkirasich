Rails.application.routes.draw do
  resources :images
  root 'images#index'

  resources :feedbacks, only: [:new]

  namespace :api do
    resource :feedbacks, only: [:create]
  end
end
