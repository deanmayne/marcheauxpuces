class Api::ProductsController < ApplicationController

    def create
        @product = Product.new(product_params)
        if @product.save     
            render '/api/products/show'
        end


        
    end

    def index
        if params[:category] == ""
            @products = Product.all
            render '/api/products/index'
        else
            @products = Product.where(category: params[:category])
            render '/api/products/index'
        end
        
    end


    private
    def product_params
        params.require(:product).permit(:name, :description, :price, :category, :location, :free_shipping, :category, :owner_id)
    end

end

# // "/jewelry-accessories"
# // "/clothing-shoes"
# // "/home-living"
# // "/wedding-party"
# // "/toys-enterainment"
# // "/arts-collectibles"
# // "/craft-supplies"
# // "/gifts-gift-cards"