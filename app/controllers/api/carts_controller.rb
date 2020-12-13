class Api::CartsController < ApplicationController

    def create
        @product = Cart.new(cart_params)
        if @product.save     
            render '/api/carts/index'
        end

    end

    def index
        @products = Cart.where(shopper_id: params[:shopper_id])
        render '/api/carts/index'
    end


    private
    def cart_params
        params.require(:cart).permit(:product_id, :shopper_id)
    end

end

