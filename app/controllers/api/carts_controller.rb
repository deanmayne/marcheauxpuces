class Api::CartsController < ApplicationController

    def create
        product_id = params[:product_id]
        @product = Cart.new(cart_params)
        if @product.save
            @product = Product.find_by(id: params['cart']['product_id'])
            render '/api/carts/show'
        end

    end

    def index
        @products = Product.joins(:carts).where('carts.shopper_id = ?', params[:shopper_id])
            render '/api/carts/index'
    end

    private
    def cart_params
        params.require(:cart).permit(:product_id, :shopper_id)
    end

end

