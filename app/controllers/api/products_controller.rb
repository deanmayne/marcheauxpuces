class Api::ProductsController < ApplicationController

    def create
        @product = Product.new(product_params)
        if @product.save     
            render '/api/products/show'
        end

    end

    def index
        if params[:category] == "" || params[:category].nil?
            @products = Product.all
            render '/api/products/index'
        else
            @products = Product.where(category: params[:category])
            render '/api/products/index'
        end
        
    end

    def show
        @product = Product.find_by(id: params[:id])
        
        if @product
            render '/api/products/show'
        end
    end


    private
    def product_params
        params.require(:product).permit(:name, :description, :price, :category, :location, :free_shipping, :category, :owner_id)
    end

end
