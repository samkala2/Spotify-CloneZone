# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)

require "open-uri"


ActiveRecord::Base.transaction do 


  User.destroy_all
  Artist.destroy_all
  Album.destroy_all 
  Song.destroy_all
  Playlist.destroy_all
  Follow.destroy_all
  Playlistsong.destroy_all



  user1 = User.create!( username: 'sam11', email: 'samh@gmail', password: '111333')
  user2 = User.create!( username: 'sam121', email: 'sam2h@gmail', password: '111333')
  user3 = User.create!( username: 'sam100', email: 'samh0@gmail', password: '111333')
  user4 = User.create!( username: 'sam1121', email: 'samh22@gmail', password: '111333')
  user5 = User.create!( username: 'sam7', email: 'sam21h@gmail', password: '111333')
  user6 = User.create!( username: 'sam10', email: 'samh02@gmail', password: '111333')



  artist1 = Artist.create!(name: 'Eminem')
  artist2 = Artist.create!(name: 'Sia')

  artist3 = Artist.create!(name: 'Smino')

  artist4 = Artist.create!(name: 'Rihanna')
  artist5 = Artist.create!(name: 'Janis Joplin')

  artist6 = Artist.create!(name: 'Beyonce')
  artist7 = Artist.create!(name: '2 Chainz')

  artist8 = Artist.create!(name: 'Lil Wayne')


  artist9 = Artist.create!(name: 'Frank Sinatra')
  artist10 = Artist.create!(name: 'Ella Fitzgerald')
  artist11 = Artist.create!(name: 'Ray Charles')
  artist12 = Artist.create!(name: 'Dusty Springfield')
  artist13 = Artist.create!(name: 'SiR')



  follow1 = Follow.create!(user_id: user2.id, artist_id: artist1.id)
  follow2 = Follow.create!(user_id: user1.id, artist_id: artist2.id)
  follow3 = Follow.create!(user_id: user1.id, artist_id: artist3.id)
  follow4 = Follow.create!(user_id: user3.id, artist_id: artist5.id)
  follow5 = Follow.create!(user_id: user3.id, artist_id: artist7.id)


  album1 = Album.create!(name: 'The Marshall Mathers LP', artist_id: artist1.id)
  album2 = Album.create!(name: 'Revival', artist_id: artist1.id)


  album1.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/1song.jpg"),
      filename: "1song.jpg"
  )


  album2.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/2song.jpg"),
      filename: "2song.jpg"
  )


  song1 = Song.create!(title: 'Stan (feat. Dido)', artist_id: artist1.id, album_id: album1.id, length: 330)
  song2 = Song.create!(title: 'The Real Slim Shady', artist_id: artist1.id, album_id: album1.id, length: 330)
  song3 = Song.create!(title: 'Who Knew', artist_id: artist1.id, album_id: album1.id, length: 330)

  song4 = Song.create!(title: 'Walk On Water (feat. Beyonce)', artist_id: artist1.id, album_id: album2.id, length: 330)
  song5 = Song.create!(title: 'Believe', artist_id: artist1.id, album_id: album2.id, length: 330)
  song6 = Song.create!(title: 'River', artist_id: artist1.id, album_id: album2.id, length: 330)
  song7 = Song.create!(title: 'Untouchable', artist_id: artist1.id, album_id: album2.id, length: 330)

  # SIA
  album3 = Album.create!(name: 'This Is Acting', artist_id: artist2.id)
  album4 = Album.create!(name: 'We Are Born', artist_id: artist2.id)



  album3.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/3song.jpg"),
      filename: "3song.jpg"
  )


  album4.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/4song.jpg"),
      filename: "4song.jpg"
  )


  #SONG IMAGES:

    song1.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/1song.jpg"),
      filename: "1song.jpg"
    )
    
    song2.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/1song.jpg"),
      filename: "1song.jpg"
    )

     song3.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/1song.jpg"),
      filename: "1song.jpg"
    )



    song4.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/2song.jpg"),
      filename: "2song.jpg"
    )

    song5.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/2song.jpg"),
      filename: "2song.jpg"
    )

    song6.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/2song.jpg"),
      filename: "2song.jpg"
    )

    song7.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/2song.jpg"),
      filename: "2song.jpg"
    )



  song8 = Song.create!(title: 'Bird Set Free', artist_id: artist2.id, album_id: album3.id, length: 330)
  song9 = Song.create!(title: 'Alive', artist_id: artist2.id, album_id: album3.id, length: 330)
  song10 = Song.create!(title: 'Unstoppable', artist_id: artist2.id, album_id: album3.id, length: 330)
  song11 = Song.create!(title: 'House On Fire', artist_id: artist2.id, album_id: album3.id, length: 330)
  song12 = Song.create!(title: 'Clap Your Hands', artist_id: artist2.id, album_id: album4.id, length: 330)
  song13 = Song.create!(title: 'Be Good To Me', artist_id: artist2.id, album_id: album4.id, length: 330)
  song14 = Song.create!(title: 'The Fight', artist_id: artist2.id, album_id: album4.id, length: 330)
  song15 = Song.create!(title: 'Stop Trying', artist_id: artist2.id, album_id: album4.id, length: 330)



   song8.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/3song.jpg"),
      filename: "3song.jpg"
    )

    song9.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/3song.jpg"),
      filename: "3song.jpg"
    )

    song10.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/3song.jpg"),
      filename: "3song.jpg"
    )

    song11.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/3song.jpg"),
      filename: "3song.jpg"
    )


    song12.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/4song.jpg"),
      filename: "4song.jpg"
    )

    song13.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/4song.jpg"),
      filename: "4song.jpg"
    )


    song14.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/4song.jpg"),
      filename: "4song.jpg"
    )


    song15.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/4song.jpg"),
      filename: "4song.jpg"
    )





    

  album5 = Album.create!(name: 'Noir', artist_id: artist3.id)
  album6 = Album.create!(name: 'Blkswn', artist_id: artist3.id)

  album5.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/5song.jpg"),
      filename: "5song.jpg"
  )

  album6.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/6song.jpg"),
      filename: "6song.jpg"
  )



  song16 = Song.create!(title: 'KLINK', artist_id: artist3.id, album_id: album5.id, length: 330)
  song17 = Song.create!(title: 'TEQUILA MOCKINGBIRD', artist_id: artist3.id, album_id: album5.id, length: 330)
  song18 = Song.create!(title: 'MERLOT', artist_id: artist3.id, album_id: album5.id, length: 330)

  song19 = Song.create!(title: 'Maraca', artist_id: artist3.id, album_id: album6.id, length: 330)
  song20 = Song.create!(title: 'blkswn', artist_id: artist3.id, album_id: album6.id, length: 330)
  song21 = Song.create!(title: 'Long Run', artist_id: artist3.id, album_id: album6.id, length: 330)
  song22 = Song.create!(title: 'Anita', artist_id: artist3.id, album_id: album6.id, length: 330)
  song23 = Song.create!(title: 'Reverend', artist_id: artist3.id, album_id: album6.id, length: 330)




     song16.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/5song.jpg"),
      filename: "5song.jpg"
    )

    song17.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/5song.jpg"),
      filename: "5song.jpg"
    )

    song18.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/5song.jpg"),
      filename: "5song.jpg"
    )


    song19.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/6song.jpg"),
      filename: "6song.jpg"
    )

    song20.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/6song.jpg"),
      filename: "6song.jpg"
    )

    song21.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/6song.jpg"),
      filename: "6song.jpg"
    )

    song22.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/6song.jpg"),
      filename: "6song.jpg"
    )

    song23.songimage.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/6song.jpg"),
      filename: "6song.jpg"
    )






    # RIHANNA ################ artist 4

  album7 = Album.create!(name: 'Anti', artist_id: artist4.id)
  album8 = Album.create!(name: 'Unapologetic', artist_id: artist4.id)


  album7.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/7song.jpg"),
      filename: "anti.jpg"
  )


  album8.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/8song.jpg"),
      filename: "8song.jpg"
  )



song24 = Song.create!(title: 'Desperado', artist_id: artist4.id, album_id: album7.id, length: 330)
song25 = Song.create!(title: 'Love On The Brain', artist_id: artist4.id, album_id: album7.id, length: 330)
song26 = Song.create!(title: 'Needed Me', artist_id: artist4.id, album_id: album7.id, length: 330)


song27 = Song.create!(title: 'Diamonds', artist_id: artist4.id, album_id: album8.id, length: 330)
song28 = Song.create!(title: 'Pour It Up', artist_id: artist4.id, album_id: album8.id, length: 330)
song29 = Song.create!(title: 'Right Now', artist_id: artist4.id, album_id: album8.id, length: 330)


song24.songimage.attach(
io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/anti.jpg"),
filename: "anti.jpg"
)

song25.songimage.attach(
io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/anti.jpg"),
filename: "anti.jpg"
)

song26.songimage.attach(
io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/anti.jpg"),
filename: "anti.jpg"
)


song27.songimage.attach(
io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/8song.jpg"),
filename: "8song.jpg"
)

song28.songimage.attach(
io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/8song.jpg"),
filename: "8song.jpg"
)

song29.songimage.attach(
io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/8song.jpg"),
filename: "8song.jpg"
)



  # JANIS  artist 5
  album9 = Album.create!(name: 'Pearl', artist_id: artist5.id)
  album10 = Album.create!(name: 'In Concert', artist_id: artist5.id)


  album9.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/9song.jpg"),
      filename: "9song.jpg"
  )

  album10.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/10song.jpg"),
      filename: "10song.jpg"
  )


  song30 = Song.create!(title: 'Cry Baby', artist_id: artist5.id, album_id: album9.id, length: 330)
  song31 = Song.create!(title: 'Me & Bobby McGee', artist_id: artist5.id, album_id: album9.id, length: 330)

  song32 = Song.create!(title: 'Half Moon', artist_id: artist5.id, album_id: album10.id, length: 330)
  song33 = Song.create!(title: 'Kozmic Blues', artist_id: artist5.id, album_id: album10.id, length: 330)





  song30.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/9song.jpg"),
  filename: "9song.jpg"
  )

  song31.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/9song.jpg"),
  filename: "9song.jpg"
  )

  song32.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/10song.jpg"),
  filename: "10song.jpg"
  )

  song33.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/10song.jpg"),
  filename: "10song.jpg"
  )




  # Beyonce  artist 6
  album11 = Album.create!(name: 'Lemonade', artist_id: artist6.id)


  album11.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/11song.jpg"),
      filename: "11song.jpg"
  )

  song34 = Song.create!(title: 'Sorry', artist_id: artist6.id, album_id: album11.id, length: 330)
  song35 = Song.create!(title: 'Freedom', artist_id: artist6.id, album_id: album11.id, length: 330)
  song36 = Song.create!(title: "Don't hurt yourself", artist_id: artist6.id, album_id: album11.id, length: 330)



  song34.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/11song.jpg"),
  filename: "11song.jpg"
  )

  song35.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/11song.jpg"),
  filename: "11song.jpg"
  )

  song36.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/11song.jpg"),
  filename: "11song.jpg"
  )



  # 2 Chainz  artist 7
  album12 = Album.create!(name: 'Rap or Go to the League', artist_id: artist7.id)

  album12.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/rapor.jpg"),
      filename: "rapor.jpg"
  )

  song37 = Song.create!(title: "2 Dollar Bill ft. Lil Wayne", artist_id: artist7.id, album_id: album12.id, length: 330)
  song38 = Song.create!(title: "Money In The Way", artist_id: artist7.id, album_id: album12.id, length: 330)
  song39 = Song.create!(title: "Rule The World ft. Ariana Grande", artist_id: artist7.id, album_id: album12.id, length: 330)


  song37.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/rapor.jpg"),
  filename: "rapor.jpg"
  )

  song38.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/rapor.jpg"),
  filename: "rapor.jpg"
  )

  song39.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/rapor.jpg"),
  filename: "rapor.jpg"
  )


  # Lil wayne artist 8
  album13 = Album.create!(name: 'Tha Carter V', artist_id: artist8.id)

  album13.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/carter.jpg"),
      filename: "carter.jpg"
  )

  song40 = Song.create!(title: "Don’t Cry ft. XXXTENTACION", artist_id: artist8.id, album_id: album13.id, length: 330)
  song41 = Song.create!(title: "Open Letter", artist_id: artist8.id, album_id: album13.id, length: 330)
  song42 = Song.create!(title: "Mona Lisa", artist_id: artist8.id, album_id: album13.id, length: 330)

  song40.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/carter.jpg"),
  filename: "carter.jpg"
  )

  song41.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/carter.jpg"),
  filename: "carter.jpg"
  )

  song42.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/carter.jpg"),
  filename: "carter.jpg"
  )



# Frank Sinatra artist 9

  album14 = Album.create!(name: "That's Life", artist_id: artist9.id)

  album14.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/frank.jpg"),
      filename: "frank.jpg"
  )

  song43 = Song.create!(title: "That's Life", artist_id: artist9.id, album_id: album14.id, length: 330)
  song44 = Song.create!(title: "Somewhere, My Love", artist_id: artist9.id, album_id: album14.id, length: 330)


  song43.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/frank.jpg"),
  filename: "frank.jpg"
  )

  song44.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/frank.jpg"),
  filename: "frank.jpg"
  )


  # Ella Fitz artist 10
  album15 = Album.create!(name: "Porgy and Bess", artist_id: artist10.id)

  album15.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/porgy.jpg"),
      filename: "porgy.jpg"
  )

  song45 = Song.create!(title: "Summertime", artist_id: artist10.id, album_id: album15.id, length: 330)
  song46 = Song.create!(title: "Buzzard Song", artist_id: artist10.id, album_id: album15.id, length: 330)


  song45.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/porgy.jpg"),
  filename: "porgy.jpg"
  )

  song46.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/porgy.jpg"),
  filename: "porgy.jpg"
  )


  # Ray Charles artist 11
  album16 = Album.create!(name: "Hallelujah I Love Her So!", artist_id: artist11.id)

  album16.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/charles.jpg"),
      filename: "charles.jpg"
  )

  song47 = Song.create!(title: "Aint That Love", artist_id: artist11.id, album_id: album16.id, length: 330)
  song48 = Song.create!(title: "I Got A Woman", artist_id: artist11.id, album_id: album16.id, length: 330)


  song47.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/charles.jpg"),
  filename: "charles.jpg"
  )

  song48.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/charles.jpg"),
  filename: "charles.jpg"
  )




  # Dusty Springfield artist 12
  album17 = Album.create!(name: "Where Am I Going?", artist_id: artist12.id)

  album17.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/dusty.jpg"),
      filename: "dusty.jpg"
  )

  song49 = Song.create!(title: "If You Go Away", artist_id: artist12.id, album_id: album17.id, length: 330)
  song50 = Song.create!(title: "Time After Time", artist_id: artist12.id, album_id: album17.id, length: 330)


  song49.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/dusty.jpg"),
  filename: "dusty.jpg"
  )

  song50.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/dusty.jpg"),
  filename: "dusty.jpg"
  )


  # SiR artist 13
  album18 = Album.create!(name: "November", artist_id: artist13.id)

  album18.album_image.attach(
      io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/sir.jpg"),
      filename: "sir.jpg"
  )

  song51 = Song.create!(title: "Hair Down ft. Kendrick Lamar", artist_id: artist13.id, album_id: album18.id, length: 330)
  song52 = Song.create!(title: "Something Foreign ft. ScHoolboy Q", artist_id: artist13.id, album_id: album18.id, length: 330)


  song51.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/sir.jpg"),
  filename: "sir.jpg"
  )

  song52.songimage.attach(
  io: open("https://craftifybucket.s3.us-east-2.amazonaws.com/sir.jpg"),
  filename: "sir.jpg"
  )





  playlist1 = Playlist.create!(name: 'Workout Music', user_id: user2.id)
  playlist2 = Playlist.create!(name: 'Favorite Music', user_id: user1.id)
  playlist3 = Playlist.create!(name: 'My number 1 playlist', user_id: user3.id)
  playlist4 = Playlist.create!(name: 'My Morning playlist', user_id: user4.id)
  playlist5 = Playlist.create!(name: 'My Evening playlist', user_id: user1.id)
  playlist6 = Playlist.create!(name: 'Relaxing songs', user_id: user3.id)
  


  playlistsong1 = Playlistsong.create!(playlist_id: playlist1.id, song_id: song2.id, ord: 1)
  playlistsong2 = Playlistsong.create!(playlist_id: playlist1.id, song_id: song4.id, ord: 2)
  playlistsong3 = Playlistsong.create!(playlist_id: playlist1.id, song_id: song5.id, ord: 3)
  playlistsong4 = Playlistsong.create!(playlist_id: playlist1.id, song_id: song3.id, ord: 4)
  playlistsong5 = Playlistsong.create!(playlist_id: playlist1.id, song_id: song6.id, ord: 5)
  playlistsong6 = Playlistsong.create!(playlist_id: playlist1.id, song_id: song7.id, ord: 6)

  playlistsong7 = Playlistsong.create!(playlist_id: playlist2.id, song_id: song1.id, ord: 1)
  playlistsong8 = Playlistsong.create!(playlist_id: playlist2.id, song_id: song4.id, ord: 2)
  playlistsong9 = Playlistsong.create!(playlist_id: playlist2.id, song_id: song1.id, ord: 3)
  playlistsong10 = Playlistsong.create!(playlist_id: playlist2.id, song_id: song1.id, ord: 4)
  playlistsong11 = Playlistsong.create!(playlist_id: playlist2.id, song_id: song9.id, ord: 5)

  playlistsong12 = Playlistsong.create!(playlist_id: playlist3.id, song_id: song1.id, ord: 1)
  playlistsong13 = Playlistsong.create!(playlist_id: playlist3.id, song_id: song1.id, ord: 2)
  playlistsong14 = Playlistsong.create!(playlist_id: playlist3.id, song_id: song1.id, ord: 3)


  playlistsong15 = Playlistsong.create!(playlist_id: playlist4.id, song_id: song15.id, ord: 1)
  playlistsong16 = Playlistsong.create!(playlist_id: playlist4.id, song_id: song5.id, ord: 2)
  playlistsong17 = Playlistsong.create!(playlist_id: playlist4.id, song_id: song20.id, ord: 3)


  playlistsong18 = Playlistsong.create!(playlist_id: playlist5.id, song_id: song16.id, ord: 1)
  playlistsong19 = Playlistsong.create!(playlist_id: playlist5.id, song_id: song17.id, ord: 2)
  playlistsong20 = Playlistsong.create!(playlist_id: playlist5.id, song_id: song4.id, ord: 3)

  playlistsong21 = Playlistsong.create!(playlist_id: playlist6.id, song_id: song14.id, ord: 1)
  playlistsong22 = Playlistsong.create!(playlist_id: playlist6.id, song_id: song19.id, ord: 2)
  playlistsong23 = Playlistsong.create!(playlist_id: playlist6.id, song_id: song3.id, ord: 3)



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




 