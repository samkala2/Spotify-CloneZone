# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  validates :name, :artist_id, presence: true

  belongs_to :artist

  has_many :songs

  has_one_attached :album_image

end
