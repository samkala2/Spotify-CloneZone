Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]

    resources :songs, only: [:index]
    get '/songs/all', to: 'songs#getall'
    get 'songs/artist', to: 'songs#songs_for_artist'
    get 'songs/image', to: 'songs#get_artist_image'



    resources :albums, only: [:index]
    get '/albums/all', to: 'albums#getall'
    get 'songs/album', to: 'albums#songs_for_album'
    get '/album/info', to: 'albums#get_album_info'

    resources :artists, only: [:index]
    get 'artists/all', to: 'artists#getall'
    

    resources :playlists, only: [:index, :show, :destroy]
    get '/playlists-for-user', to: 'playlists#user_playlists'
    # get '/playlists/id', to: 'playlists#playlist_by_id'
    post '/playlists/new', to: 'playlists#create_playlist'

    resources :playlistsongs, only: [:create]

    resources :follows 

  end
  
  root to: "static_pages#root"

end
