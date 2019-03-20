class ImagesController < ApplicationController
  def new
    @image = Image.new
  end

  def create
    @image = Image.new(params[:image].permit(:url))

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
