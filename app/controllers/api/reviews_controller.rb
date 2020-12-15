class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def create
    @review = Review.create(review_params)
    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  def index
    @reviews = Review.where(product_id: params[:product_id])
    render '/api/reviews/index'
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :product_id, :author_id)
  end
end
