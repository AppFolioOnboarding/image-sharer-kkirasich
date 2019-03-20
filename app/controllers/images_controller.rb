class ImagesController < ApplicationController
  def index
    @images = if params[:tag].present?
                Image.tagged_with(params[:tag]).order(created_at: :desc)
              else
                Image.order(created_at: :desc)
              end
  end

  def new
    @image = Image.new
  end

  def create
    @image = Image.new(params[:image].permit(:url, :tag_list))

    if @image.save
      redirect_to @image
    else
      render :new, status: :unprocessable_entity
    end
  end

  def show
    @image = Image.find(params[:id])
  end
end
