Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :products, only: [:new, :create, :show, :delete, :update, :index]
    resources :users, only: [:new, :create, :show, :delete]
    resources :reviews, only: [:create, :show]

    resource :cart, only: [:create, :destroy]

    resource :session, only: [:new, :create, :destroy]
  end


end
