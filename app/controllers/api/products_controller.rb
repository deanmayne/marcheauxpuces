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

    def update
        @product = Product.find_by(id: params[:id])

        if @product && @product.update(product_params)
            render '/api/products/show'
        end
    end

    def destroy
        @product = Product.find_by(id: params[:id])

        if @product.delete
            render '/api/products/show'
        end
    end

    def me
        @products = current_user.products
        render '/api/products/index'
    end

    def search
            @products = Product.where("name LIKE ?", "%#{params[:searchTerm]}%")
            render '/api/products/index'
    end

    def favorites

        @products = Favorite.joins(:user).where(liker_id: params[:liker_id])
            render '/api/products/index'

    end


    private
    def product_params
        params.require(:product).permit(:name, :description, :price, :category, :location, :free_shipping, :category, :owner_id, :img_url)
    end

end
