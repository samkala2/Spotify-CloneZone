# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


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



  follow1 = Follow.create(user_id: 2, artist_id: 4)
  follow2 = Follow.create(user_id: 1, artist_id: 2)
  follow3 = Follow.create(user_id: 1, artist_id: 3)
  follow4 = Follow.create(user_id: 3, artist_id: 5)
  follow5 = Follow.create(user_id: 3, artist_id: 7)

  album1 = Album.create(name: 'The Marshall Mathers LP', artist_id: 1)
  album2 = Album.create(name: 'Revival', artist_id: 1)

    song1 = Song.create(title: 'Stan (feat. Dido)', artist_id: 1, album_id: 1, length: 330)
    song2 = Song.create(title: 'The Real Slim Shady', artist_id: 1, album_id: 1, length: 330)
    song3 = Song.create(title: 'Who Knew', artist_id: 1, album_id: 1, length: 330)

    song4 = Song.create(title: 'Walk On Water (feat. Beyonce)', artist_id: 1, album_id: 2, length: 330)
    song5 = Song.create(title: 'Believe', artist_id: 1, album_id: 2, length: 330)
    song6 = Song.create(title: 'River', artist_id: 1, album_id: 2, length: 330)
    song7 = Song.create(title: 'Untouchable', artist_id: 1, album_id: 2, length: 330)


  album3 = Album.create(name: 'This Is Acting', artist_id: 2)
  album4 = Album.create(name: 'We Are Born', artist_id: 2)


    song8 = Song.create(title: 'Bird Set Free', artist_id: 2, album_id: 3, length: 330)
    song9 = Song.create(title: 'Alive', artist_id: 2, album_id: 3, length: 330)
    song10 = Song.create(title: 'Unstoppable', artist_id: 2, album_id: 3, length: 330)
    song11 = Song.create(title: 'House On Fire', artist_id: 2, album_id: 3, length: 330)

    song12 = Song.create(title: 'Clap Your Hands', artist_id: 2, album_id: 4, length: 330)
    song13 = Song.create(title: 'Be Good To Me', artist_id: 2, album_id: 4, length: 330)
    song14 = Song.create(title: 'The Fight', artist_id: 2, album_id: 4, length: 330)
    song15 = Song.create(title: 'Stop Trying', artist_id: 2, album_id: 4, length: 330)

  album5 = Album.create(name: 'Noir', artist_id: 3)
  album6 = Album.create(name: 'Blkswn', artist_id: 3)

    song16 = Song.create(title: 'KLINK', artist_id: 3, album_id: 5, length: 330)
    song17 = Song.create(title: 'TEQUILA MOCKINGBIRD', artist_id: 3, album_id: 5, length: 330)
    song18 = Song.create(title: 'MERLOT', artist_id: 3, album_id: 5, length: 330)

    song19 = Song.create(title: 'Maraca', artist_id: 3, album_id: 6, length: 330)
    song20 = Song.create(title: 'blkswn', artist_id: 3, album_id: 6, length: 330)
    song21 = Song.create(title: 'Long Run', artist_id: 3, album_id: 6, length: 330)
    song22 = Song.create(title: 'Anita', artist_id: 3, album_id: 6, length: 330)


  album7 = Album.create(name: 'Loud', artist_id: 4)
  album8 = Album.create(name: 'Unapologetic', artist_id: 4)

  album9 = Album.create(name: 'Pearl', artist_id: 5)
  album10 = Album.create(name: 'In Concert', artist_id: 5)

  album11 = Album.create(name: 'Lemonade', artist_id: 6)
  album12 = Album.create(name: 'The Lion King: The Gift', artist_id: 6)



  playlist1 = Playlist.create(name: 'Workout Music', user_id: 2)
  playlist2 = Playlist.create(name: 'Favorite Music', user_id: 1)
  playlist3 = Playlist.create(name: 'My number 1 playlist', user_id: 4)
  playlist4 = Playlist.create(name: 'My Morning playlist', user_id: 4)
  playlist5 = Playlist.create(name: 'My Evening playlist', user_id: 1)
  playlist6 = Playlist.create(name: 'Relaxing songs', user_id: 3)
  


  playlistsong1 = Playlistsong.create(playlist_id: 1, song_id: 2, ord: 1)
  playlistsong2 = Playlistsong.create(playlist_id: 1, song_id: 4, ord: 2)
  playlistsong3 = Playlistsong.create(playlist_id: 1, song_id: 5, ord: 3)
  playlistsong4 = Playlistsong.create(playlist_id: 1, song_id: 3, ord: 4)
  playlistsong5 = Playlistsong.create(playlist_id: 1, song_id: 6, ord: 5)
  playlistsong6 = Playlistsong.create(playlist_id: 1, song_id: 7, ord: 6)


  playlistsong7 = Playlistsong.create(playlist_id: 2, song_id: 1, ord: 1)
  playlistsong8 = Playlistsong.create(playlist_id: 2, song_id: 4, ord: 2)
  playlistsong9 = Playlistsong.create(playlist_id: 2, song_id: 11, ord: 3)
  playlistsong10 = Playlistsong.create(playlist_id: 2, song_id: 14, ord: 4)
  playlistsong11 = Playlistsong.create(playlist_id: 2, song_id: 9, ord: 5)

  playlistsong12 = Playlistsong.create(playlist_id: 3, song_id: 10, ord: 1)
  playlistsong13 = Playlistsong.create(playlist_id: 3, song_id: 14, ord: 2)
  playlistsong14 = Playlistsong.create(playlist_id: 3, song_id: 17, ord: 3)


  playlistsong15 = Playlistsong.create(playlist_id: 4, song_id: 15, ord: 1)
  playlistsong16 = Playlistsong.create(playlist_id: 4, song_id: 5, ord: 2)
  playlistsong17 = Playlistsong.create(playlist_id: 4, song_id: 20, ord: 3)


  playlistsong18 = Playlistsong.create(playlist_id: 5, song_id: 16, ord: 1)
  playlistsong19 = Playlistsong.create(playlist_id: 5, song_id: 17, ord: 2)
  playlistsong20 = Playlistsong.create(playlist_id: 5, song_id: 4, ord: 3)

  playlistsong21 = Playlistsong.create(playlist_id: 6, song_id: 14, ord: 1)
  playlistsong22 = Playlistsong.create(playlist_id: 6, song_id: 19, ord: 2)
  playlistsong23 = Playlistsong.create(playlist_id: 6, song_id: 3, ord: 3)



