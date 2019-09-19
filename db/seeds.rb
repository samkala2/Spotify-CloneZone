# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"


ActiveRecord::Base.transaction do 


  User.destroy_all
  Artist.destroy_all
  Album.destroy_all 
  Song.destroy_all
  Playlist.destroy_all
  Follow.destroy_all
  Playlistsong.destroy_all



  user1 = User.create( username: 'sam11', email: 'samh@gmail', password: '111333')
  user2 = User.create( username: 'sam121', email: 'sam2h@gmail', password: '111333')
  user3 = User.create( username: 'sam100', email: 'samh0@gmail', password: '111333')
  user4 = User.create( username: 'sam1121', email: 'samh22@gmail', password: '111333')
  user5 = User.create( username: 'sam7', email: 'sam21h@gmail', password: '111333')
  user6 = User.create( username: 'sam10', email: 'samh02@gmail', password: '111333')





  artist1 = Artist.create(name: 'Eminem')
  artist2 = Artist.create(name: 'Sia')

  artist3 = Artist.create(name: 'Smino')

  artist4 = Artist.create(name: 'Rihanna')
  artist5 = Artist.create(name: 'Janis Joplin')

  artist6 = Artist.create(name: 'Beyonce')
  artist7 = Artist.create(name: '2 Chainz')

  artist8 = Artist.create(name: 'Lil Wayne')
  artist9 = Artist.create(name: 'Frank Sinatra')
  artist10 = Artist.create(name: 'Ella Fitzgerald')
  artist11 = Artist.create(name: 'Ray Charles')
  artist12 = Artist.create(name: 'Dusty Springfield')



  follow1 = Follow.create(user_id: user2.id, artist_id: artist1.id)
  follow2 = Follow.create(user_id: user1.id, artist_id: artist2.id)
  follow3 = Follow.create(user_id: user1.id, artist_id: artist3.id)
  follow4 = Follow.create(user_id: user3.id, artist_id: artist5.id)
  follow5 = Follow.create(user_id: user3.id, artist_id: artist7.id)

  album1 = Album.create(name: 'The Marshall Mathers LP', artist_id: artist1.id)
  album2 = Album.create(name: 'Revival', artist_id: artist1.id)



  song1 = Song.create(title: 'Stan (feat. Dido)', artist_id: artist1.id, album_id: album1.id, length: 330)
  # song1.picture.attach(io: ) 

  song2 = Song.create(title: 'The Real Slim Shady', artist_id: artist1.id, album_id: album1.id, length: 330)
  song3 = Song.create(title: 'Who Knew', artist_id: artist1.id, album_id: album1.id, length: 330)

  song4 = Song.create(title: 'Walk On Water (feat. Beyonce)', artist_id: artist1.id, album_id: album2.id, length: 330)
  song5 = Song.create(title: 'Believe', artist_id: artist1.id, album_id: album2.id, length: 330)
  song6 = Song.create(title: 'River', artist_id: artist1.id, album_id: album2.id, length: 330)
  song7 = Song.create(title: 'Untouchable', artist_id: artist1.id, album_id: album2.id, length: 330)


  album3 = Album.create(name: 'This Is Acting', artist_id: artist2.id)
  album4 = Album.create(name: 'We Are Born', artist_id: artist2.id)


  song8 = Song.create(title: 'Bird Set Free', artist_id: artist2.id, album_id: album3.id, length: 330)
  song9 = Song.create(title: 'Alive', artist_id: artist2.id, album_id: album3.id, length: 330)
  song10 = Song.create(title: 'Unstoppable', artist_id: artist2.id, album_id: album3.id, length: 330)
  song11 = Song.create(title: 'House On Fire', artist_id: artist2.id, album_id: album3.id, length: 330)
  song12 = Song.create(title: 'Clap Your Hands', artist_id: artist2.id, album_id: album4.id, length: 330)
  song13 = Song.create(title: 'Be Good To Me', artist_id: artist2.id, album_id: album4.id, length: 330)
  song14 = Song.create(title: 'The Fight', artist_id: artist2.id, album_id: album4.id, length: 330)
  song15 = Song.create(title: 'Stop Trying', artist_id: artist2.id, album_id: album4.id, length: 330)

  album5 = Album.create(name: 'Noir', artist_id: artist3.id)
  album6 = Album.create(name: 'Blkswn', artist_id: artist3.id)

  song16 = Song.create(title: 'KLINK', artist_id: artist3.id, album_id: album5.id, length: 330)
  song17 = Song.create(title: 'TEQUILA MOCKINGBIRD', artist_id: 3, album_id: album5.id, length: 330)
  song18 = Song.create(title: 'MERLOT', artist_id: artist3.id, album_id: album5.id, length: 330)

  song19 = Song.create(title: 'Maraca', artist_id: artist3.id, album_id: album6.id, length: 330)
  song20 = Song.create(title: 'blkswn', artist_id: artist3.id, album_id: album6.id, length: 330)
  song21 = Song.create(title: 'Long Run', artist_id: artist3.id, album_id: album6.id, length: 330)
  song22 = Song.create(title: 'Anita', artist_id: artist3.id, album_id: album6.id, length: 330)


  album7 = Album.create(name: 'Loud', artist_id: artist4.id)
  album8 = Album.create(name: 'Unapologetic', artist_id: artist4.id)

  album9 = Album.create(name: 'Pearl', artist_id: artist5.id)
  album10 = Album.create(name: 'In Concert', artist_id: artist5.id)

  album11 = Album.create(name: 'Lemonade', artist_id: artist6.id)
  album12 = Album.create(name: 'The Lion King: The Gift', artist_id: artist6.id)



  playlist1 = Playlist.create(name: 'Workout Music', user_id: user2.id)
  playlist2 = Playlist.create(name: 'Favorite Music', user_id: user1.id)
  playlist3 = Playlist.create(name: 'My number 1 playlist', user_id: user3.id)
  playlist4 = Playlist.create(name: 'My Morning playlist', user_id: user4.id)
  playlist5 = Playlist.create(name: 'My Evening playlist', user_id: user1.id)
  playlist6 = Playlist.create(name: 'Relaxing songs', user_id: user3.id)
  


  playlistsong1 = Playlistsong.create(playlist_id: playlist1.id, song_id: song2.id, ord: 1)
  playlistsong2 = Playlistsong.create(playlist_id: playlist1.id, song_id: song4.id, ord: 2)
  playlistsong3 = Playlistsong.create(playlist_id: playlist1.id, song_id: song5.id, ord: 3)
  playlistsong4 = Playlistsong.create(playlist_id: playlist1.id, song_id: song3.id, ord: 4)
  playlistsong5 = Playlistsong.create(playlist_id: playlist1.id, song_id: song6.id, ord: 5)
  playlistsong6 = Playlistsong.create(playlist_id: playlist1.id, song_id: song7.id, ord: 6)

  playlistsong7 = Playlistsong.create(playlist_id: playlist2.id, song_id: song1.id, ord: 1)
  playlistsong8 = Playlistsong.create(playlist_id: playlist2.id, song_id: song4.id, ord: 2)
  playlistsong9 = Playlistsong.create(playlist_id: playlist2.id, song_id: song1.id, ord: 3)
  playlistsong10 = Playlistsong.create(playlist_id: playlist2.id, song_id: song1.id, ord: 4)
  playlistsong11 = Playlistsong.create(playlist_id: playlist2.id, song_id: song9.id, ord: 5)

  playlistsong12 = Playlistsong.create(playlist_id: playlist3.id, song_id: song1.id, ord: 1)
  playlistsong13 = Playlistsong.create(playlist_id: playlist3.id, song_id: song1.id, ord: 2)
  playlistsong14 = Playlistsong.create(playlist_id: playlist3.id, song_id: song1.id, ord: 3)


  playlistsong15 = Playlistsong.create(playlist_id: playlist4.id, song_id: song15.id, ord: 1)
  playlistsong16 = Playlistsong.create(playlist_id: playlist4.id, song_id: song5.id, ord: 2)
  playlistsong17 = Playlistsong.create(playlist_id: playlist4.id, song_id: song20.id, ord: 3)


  playlistsong18 = Playlistsong.create(playlist_id: playlist5.id, song_id: song16.id, ord: 1)
  playlistsong19 = Playlistsong.create(playlist_id: playlist5.id, song_id: song17.id, ord: 2)
  playlistsong20 = Playlistsong.create(playlist_id: playlist5.id, song_id: song4.id, ord: 3)

  playlistsong21 = Playlistsong.create(playlist_id: playlist6.id, song_id: song14.id, ord: 1)
  playlistsong22 = Playlistsong.create(playlist_id: playlist6.id, song_id: song19.id, ord: 2)
  playlistsong23 = Playlistsong.create(playlist_id: playlist6.id, song_id: song3.id, ord: 3)



#  Attaching Photos to each artist 

  j = 0
  Artist.all.each do |artist|
    
    id = j + 1 

    photofile = open("https://craftifybucket.s3.us-east-2.amazonaws.com/#{id}.jpg")

    artist.picture.attach(
      io: photofile,
      filename: "#{id}.jpg"
    )

    j += 1
    end

  
  
    i = 0

    Song.all.each do |song|
        
      id = i + 1

      filesong = open("https://craftifybucket.s3.us-east-2.amazonaws.com/#{id}.mp3")

      song.mp3song.attach(
        io: filesong,
        filename: "#{id}.jpg"
      )

      i += 1

     end


  end  




 