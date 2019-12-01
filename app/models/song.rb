# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  album_id   :integer          not null
#  artist_id  :integer          not null
#  length     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord

  validates :title, :album_id, :artist_id, :length, presence: true

  belongs_to :album 

  belongs_to :artist

  has_many :playlistsongs
  

  has_one_attached :mp3song

  has_one_attached :songimage
end
