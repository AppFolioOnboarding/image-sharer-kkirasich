class Image < ApplicationRecord
  validate :must_be_valid_url
  acts_as_taggable

  def must_be_valid_url
    errors.add(:url, 'must be a valid URL') unless URI.parse(url).is_a?(URI::HTTP) ||
                                                   URI.parse(url).is_a?(URI::HTTPS)
  end
end
