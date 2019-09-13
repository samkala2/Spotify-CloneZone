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

require 'test_helper'

class PlaylistsongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
