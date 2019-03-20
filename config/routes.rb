Rails.application.routes.draw do
  resources :images
  root 'application#home'
end
