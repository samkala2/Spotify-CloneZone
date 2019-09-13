# == Schema Information
#
# Table name: playlistsongs
#
#  id          :bigint           not null, primary key
#  playlist_id :integer          not null
#  song_id     :integer          not null
#  ord         :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Playlistsong < ApplicationRecord

  validates :playlist_id, :song_id, :ord, presence: true

  belongs_to :song 
  belongs_to :playlist

end
