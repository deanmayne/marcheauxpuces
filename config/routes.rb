Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :products, only: [:create, :show, :destroy, :update, :index]
    resources :users, only: [:new, :create, :show, :destroy]
    resources :reviews, only: [:create, :index]
    resources :carts, only: [:create, :index, :destroy]
    resources :favorites, only: [:create, :index, :destroy]
    resource :session, only: [:new, :create, :destroy]
  end

  get '/search/:searchTerm', to: 'api/products#search', defaults: {format: :json}
  get '/me', to: 'api/products#me', defaults: {format: :json}

end
