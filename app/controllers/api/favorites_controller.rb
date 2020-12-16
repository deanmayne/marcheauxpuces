class Api::FavoritesController < ApplicationController

    def create
        @product = Favorite.new(favorite_params)
        if @product.save!
            @product = Product.find_by(id: params['cart']['product_id'])
            render '/api/favorites/show'
        end

    end

    def index
        @products = Product.joins(:favorites).where('favorites.liker_id = ?', params[:liker_id])
            render '/api/favorites/index'
    end

    def destroy
        @product = Cart.find_by(shopper_id: current_user.id, product_id: params[:id])
        if @product && @product.delete
            render '/api/favorites/destroy'
        end
      end

    private

    def favorite_params
        params.require(:favorites).permit(:product_id, :liker_id)
    end
end
