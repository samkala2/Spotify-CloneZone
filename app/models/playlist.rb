# == Schema Information
#
# Table name: playlists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null

class Playlist < ApplicationRecord

  validates :name, :user_id, presence: true

  belongs_to :user

  has_many :playlistsongs

  has_many :songs,
  through: :playlistsongs

end
