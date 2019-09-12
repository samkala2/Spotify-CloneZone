class CreatePlaylistsongs < ActiveRecord::Migration[5.2]
  def change
    create_table :playlistsongs do |t|
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false
      t.integer :ord, null: false
      t.timestamps
    end
    add_index :playlistsongs, :playlist_id
    add_index :playlistsongs, :song_id
  end
end
