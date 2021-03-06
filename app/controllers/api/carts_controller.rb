class Api::CartsController < ApplicationController

    def create
        @product = Cart.new(cart_params)
        if @product.save!
            @product = Product.find_by(id: params['cart']['product_id'])
            render '/api/carts/show'
        end

    end

    def index
        @products = Product.joins(:carts).where('carts.shopper_id = ?', params[:shopper_id])
            render '/api/carts/index'
    end

    def destroy
        @product = Cart.find_by(shopper_id: current_user.id, product_id: params[:id])
        if @product && @product.delete
            render '/api/carts/destroy'
        end
      end


    private
    def cart_params
        params.require(:cart).permit(:product_id, :shopper_id)
    end

end

