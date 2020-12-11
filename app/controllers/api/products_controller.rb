class Api::ProductsController < ApplicationController

    def create
        @product = Product.new(product_params)
        if @product.save     
            render '/api/products/show'
        end


        
    end

    def index
        @products = Product.all
        render '/api/products/index'
    end


    private
    def product_params
        params.require(:product).permit(:name, :description, :price, :category, :location, :free_shipping, :category, :owner_id)
    end

end
