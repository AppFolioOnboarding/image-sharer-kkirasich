require 'test_helper'
module Api
  class FeedbacksControllerTest < ActionDispatch::IntegrationTest
    def test_create_success
      post api_feedbacks_path, params: { name: 'Kait', comments: 'fdgzd' }

      assert_response :created
    end

    def test_create_fail
      post api_feedbacks_path

      assert_response :unprocessable_entity
    end
  end
end
