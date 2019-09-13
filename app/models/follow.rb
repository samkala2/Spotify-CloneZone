# == Schema Information
#
# Table name: follows
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Follow < ApplicationRecord
  validates :user_id, :artist_id, presence: true

  belongs_to :artist 
  
  belongs_to :user
end
