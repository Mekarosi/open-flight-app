Rails.application.routes.draw do
  root 'pages#home'

  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: [:create, :destroy]
    end 
  end  

  get '*path', to: 'pages#home', via: :all 
end
