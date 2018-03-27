Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  get '/details', to: 'home#details'
  resources :teams

  namespace :api do
  	namespace :v1 do
  		resources :teams, only: [:index, :create, :destroy, :update, :show]
  	end
  end
  
end
