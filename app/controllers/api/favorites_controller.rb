class Api::FavoritesController < ApplicationController

    def create
        @favorite = Favorite.create(product_id: params[:product][:id], liker_id: current_user.id)
        if @favorite.save!
            render '/api/favorites/show'
        end

    end

    def index
        @products = current_user.liked_products
            render '/api/favorites/index'
    end

    def destroy
        @favorite = Favorite.find_by(liker_id: current_user.id, product_id: params[:id])
        if @favorite && @favorite.delete
            render '/api/favorites/destroy'
        end
      end

    private

    def favorite_params
        params.require(:favorites).permit(:product_id, :liker_id)
    end
end
