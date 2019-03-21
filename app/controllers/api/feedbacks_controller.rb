module Api
  class FeedbacksController < ApplicationController
    def create
      if params[:name].present? && params[:comments].present?
        render json: {}, status: :created
      else
        render json: { error: 'some error' }, status: :unprocessable_entity
      end
    end
  end
end
