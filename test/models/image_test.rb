require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  test 'Valid image' do
    url = 'https://www.google.com'
    image = Image.new(url: url)

    assert_predicate image, :valid?
  end

  test 'Invalid image' do
    url = 'NOT_A_URL'
    image = Image.new(url: url)

    assert_not_predicate image, :valid?
  end

  test 'Null image' do
    url = ''
    image = Image.new(url: url)

    assert_not_predicate image, :valid?
  end
end
