Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do  
    resource :session, only: [:create, :destroy, :show] 
    resources :users, only: [:create, :show, :edit, :update ]

    resources :lists do 
      resources :tasks, only: [:create, :index, :update, :destroy, :show]
    end
    resources :tasks, only: [:index, :show, :update, :destroy]
  end

  root to: 'static_pages#root'
end
