require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  def test_index
    Image.create!(url: 'https://www.google.com/1')
    Image.create!(url: 'https://www.google.com/2')

    get root_path
    assert_response :ok

    assert_select 'img' do |images|
      assert_equal images[0].attr('src'), 'https://www.google.com/2'
      assert_equal images[1].attr('src'), 'https://www.google.com/1'
    end
  end

  def test_new
    get new_image_path

    assert_response :success
    assert_select 'h1', 'Enter URL'
    assert_select 'input[name="image[url]"]'
    assert_select 'input[name="image[tag_list]"]'
  end

  def test_show
    Image.create!(url: 'https://www.google.com')
    get image_path(Image.last)

    assert_response :success
    assert_select 'img[src="https://www.google.com"]'
  end

  def test_show_with_tags
    Image.create!(url: 'https://www.google.com', tag_list: 'dog, web')
    get image_path(Image.last)

    assert_response :success
    assert_select 'img[src="https://www.google.com"]'

    assert_select '.js-tag' do |tags|
      assert_equal tags[0].text, 'dog'
      assert_equal tags[1].text, 'web'
    end
  end

  def test_create
    assert_difference('Image.count', 1) do
      post images_url, params: { image: { url: 'https://www.google.com' } }
    end

    assert_redirected_to image_path(Image.last.id)
  end

  def test_create_fail
    assert_difference('Image.count', 0) do
      post images_url, params: { image: { url: 'BAD_URL_TEST' } }
    end

    assert_response :unprocessable_entity
    assert_select '.error', 'must be a valid URL'
  end
end
