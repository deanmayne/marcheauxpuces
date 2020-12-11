class Api::ProductsController < ApplicationController

    def create
        @product = Product.create(product_params)
        render '/api/products/show'
        
    end

    def index
        @products = Product.all
        render '/api/products/index'
    end


    private
    def product_params
        params.require(:product).permit(:name, :description, :location, :price, :free_shipping, :category)
    end

end
