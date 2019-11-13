(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./frontend/components/web_launcher/web_laucher_homecontainer.js":
/*!***********************************************************************!*\
  !*** ./frontend/components/web_launcher/web_laucher_homecontainer.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_all_songs_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/all_songs_actions */ "./frontend/actions/all_songs_actions.js");
/* harmony import */ var _actions_album_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/album_actions */ "./frontend/actions/album_actions.js");
/* harmony import */ var _actions_artist_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/artist_actions */ "./frontend/actions/artist_actions.js");
/* harmony import */ var _actions_song_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/song_actions */ "./frontend/actions/song_actions.js");
/* harmony import */ var _web_launcher_midhome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web_launcher_midhome */ "./frontend/components/web_launcher/web_launcher_midhome.jsx");
/* harmony import */ var _actions_currently_playing_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/currently_playing_actions */ "./frontend/actions/currently_playing_actions.js");





 // import LazyMidHome from './web_launcher_lazy_home';



var mapStateToProps = function mapStateToProps(state) {
  return {
    songs: Object.values(state.entities.allsongs),
    albums: Object.values(state.entities.allAlbums),
    artists: Object.values(state.entities.allArtists)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getAllSongs: function getAllSongs() {
      return dispatch(Object(_actions_all_songs_actions__WEBPACK_IMPORTED_MODULE_1__["fetchAllSongsThunk"])());
    },
    getAllAlbums: function getAllAlbums() {
      return dispatch(Object(_actions_album_actions__WEBPACK_IMPORTED_MODULE_2__["fetchAllAlbumsThunk"])());
    },
    getAllArtists: function getAllArtists() {
      return dispatch(Object(_actions_artist_actions__WEBPACK_IMPORTED_MODULE_3__["fetchAllArtistsThunk"])());
    },
    zeroSongsAlbum: function zeroSongsAlbum() {
      return dispatch(Object(_actions_song_actions__WEBPACK_IMPORTED_MODULE_4__["zeroAlbumSongs"])());
    },
    zeroSongsArtist: function zeroSongsArtist() {
      return dispatch(Object(_actions_song_actions__WEBPACK_IMPORTED_MODULE_4__["zeroArtistSongs"])());
    },
    receiveArtistSong: function receiveArtistSong(artistId) {
      return dispatch(Object(_actions_song_actions__WEBPACK_IMPORTED_MODULE_4__["fetchArtistSongsThunk"])(artistId));
    },
    receiveCurrentSong: function receiveCurrentSong(songId, songUrl, artist, title, songImageUrl) {
      return dispatch(Object(_actions_currently_playing_actions__WEBPACK_IMPORTED_MODULE_6__["receiveCurrentSong"])(songId, songUrl, artist, title, songImageUrl));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_web_launcher_midhome__WEBPACK_IMPORTED_MODULE_5__["default"]));

/***/ }),

/***/ "./frontend/components/web_launcher/web_launcher_midhome.jsx":
/*!*******************************************************************!*\
  !*** ./frontend/components/web_launcher/web_launcher_midhome.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var WebLauncherHome =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WebLauncherHome, _React$Component);

  function WebLauncherHome(props) {
    var _this;

    _classCallCheck(this, WebLauncherHome);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WebLauncherHome).call(this, props));
    _this.handleSongs = _this.handleSongs.bind(_assertThisInitialized(_this));
    _this.handleAlbums = _this.handleAlbums.bind(_assertThisInitialized(_this));
    _this.toggleResults = _this.toggleResults.bind(_assertThisInitialized(_this));
    _this.state = {
      name: "",
      songUrl: "https://craftifybucket.s3.us-east-2.amazonaws.com/1.mp3",
      songTitle: "Stan",
      songArtist: "Eminem",
      filters: {
        AllSongs: false,
        AllArtists: false,
        AllAlbums: true
      }
    };
    return _this;
  }

  _createClass(WebLauncherHome, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getAllAlbums();
      this.props.getAllSongs();
      this.props.getAllArtists();
      this.props.zeroSongsAlbum();
      this.props.zeroSongsArtist();
    }
  }, {
    key: "highlightTitle",
    value: function highlightTitle(filter) {
      var songsButton = document.getElementsByClassName("songsb")[0];
      var albumsButton = document.getElementsByClassName("albumsb")[0];
      var artistsButton = document.getElementsByClassName("artistsb")[0];

      if (songsButton && albumsButton && artistsButton) {
        if (filter === 'AllArtists') {
          albumsButton.classList.remove("white-on");
          artistsButton.classList.add("white-on");
          songsButton.classList.remove("white-on");
        } else if (filter === 'AllSongs') {
          albumsButton.classList.remove("white-on");
          artistsButton.classList.remove("white-on");
          songsButton.classList.add("white-on");
        } else if (filter === 'AllAlbums') {
          albumsButton.classList.add("white-on");
          artistsButton.classList.remove("white-on");
          songsButton.classList.remove("white-on");
        }
      }
    }
  }, {
    key: "toggleResults",
    value: function toggleResults(filter) {
      var _this2 = this;

      var resetedFilters = {
        AllSongs: false,
        AllArtists: false,
        AllAlbums: false
      }; // debugger;

      this.highlightTitle(filter);
      setTimeout(function () {
        _this2.setState({
          filters: resetedFilters
        }, function () {
          _this2.setState({
            filters: _objectSpread({}, _this2.state.filters, _defineProperty({}, filter, true))
          });
        });
      }, 100); // console.log(this.state.filters)
    }
  }, {
    key: "displayPlayButton",
    value: function displayPlayButton(song) {
      var playButton = document.getElementById(song.id.toString());
      playButton.classList.remove("display-n");
    }
  }, {
    key: "hidePlayButton",
    value: function hidePlayButton(song) {
      var playButton = document.getElementById(song.id.toString());
      playButton.classList.add("display-n");
    }
  }, {
    key: "playSongios",
    value: function playSongios(song) {
      this.setState({
        songUrl: song.songUrl,
        songTitle: song.title,
        songArtist: song.artist
      });
      var songGet = document.getElementsByClassName('audio-footer')[0];
      songGet.autoplay = true;
      songGet.play();
      this.props.receiveCurrentSong(song.id, song.songUrl, song.artist, song.title, song.songImageUrl);
    }
  }, {
    key: "handleSongs",
    value: function handleSongs() {
      var songsbutton = document.getElementsByClassName("songsb")[0];
      songsbutton.classList.remove("opacity");
    }
  }, {
    key: "handleAlbums",
    value: function handleAlbums() {
      this.toggleResults("AllAlbums");
      var albumsButton = document.getElementsByClassName("albumsb")[0];
      albumsButton.classList.remove("opacity");
    }
  }, {
    key: "goToArtistPage",
    value: function goToArtistPage(artistId) {
      this.props.receiveArtistSong(artistId);
    }
  }, {
    key: "handlePlayHover",
    value: function handlePlayHover(id) {
      var imageSong = document.getElementsByClassName(id.toString())[0];
      imageSong.classList.add("cover-background");
    }
  }, {
    key: "handlePlayMouseOut",
    value: function handlePlayMouseOut(id) {
      var imageSong = document.getElementsByClassName(id.toString())[0];
      imageSong.classList.remove("cover-background");
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state$filters = this.state.filters,
          AllSongs = _this$state$filters.AllSongs,
          AllArtists = _this$state$filters.AllArtists,
          AllAlbums = _this$state$filters.AllAlbums;
      window.albumstate = this.state.filters; // debugger;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mid-home-cont"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "upper-links"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "opacity albumsb white-on",
        onClick: function onClick() {
          return _this3.toggleResults("AllAlbums");
        }
      }, " ALBUMS "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "opacity artistsb",
        onClick: function onClick() {
          return _this3.toggleResults("AllArtists");
        }
      }, " ARTISTS "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "opacity songsb",
        onClick: function onClick() {
          return _this3.toggleResults("AllSongs");
        }
      }, " SONGS ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "all-songs-cont"
      }, AllSongs && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "all-songs-results"
      }, this.props.songs.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, " Songs "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "all-songs"
      }, this.props.songs.slice(0).reverse().map(function (song) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          onMouseEnter: function onMouseEnter() {
            return _this3.displayPlayButton(song);
          },
          onMouseLeave: function onMouseLeave() {
            return _this3.hidePlayButton(song);
          },
          id: "each-song-opacity",
          className: "each-song-res"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          id: song.id,
          onMouseEnter: function onMouseEnter() {
            return _this3.handlePlayHover(song.id);
          },
          onMouseLeave: function onMouseLeave() {
            return _this3.handlePlayMouseOut(song.id);
          },
          onClick: function onClick() {
            _this3.playSongios(song);
          },
          className: "play-button-2" + " " + "display-n",
          src: "https://craftifybucket.s3.us-east-2.amazonaws.com/play_white.png"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "image-song" + " " + song.id + " " + "overlay" + " " + "gray",
          src: song.songImageUrl
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "song-info-allsongs"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "song-title"
        }, "  ", song.title, "      "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "song-artist"
        }, "  ", song.artist, "    ")));
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "all-albums-cont"
      }, AllAlbums && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "all-album-results"
      }, this.props.albums.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, " Albums "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "all-albums"
      }, this.props.albums.slice(0).reverse().map(function (album) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          className: "",
          to: "/weblauncher/".concat(album.id, "/albumsongs")
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "image-album",
          src: album.albumImageUrl
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "album-info"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "album-title"
        }, "  ", album.name, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "album-artist"
        }, "  ", album.artistName, " ")));
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "all-artists-cont"
      }, AllArtists && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "all-artists-result artists-result"
      }, this.props.artists.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, " Artists "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.props.artists.map(function (artist) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          onClick: function onClick() {
            return _this3.goToArtistPage(artist.id);
          },
          className: "",
          to: "/weblauncher/".concat(artist.id, "/songs")
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "artist-photo",
          src: artist.photoUrl
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "artist-name"
        }, "  ", artist.name, "  "));
      }))))));
    }
  }]);

  return WebLauncherHome;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (WebLauncherHome);

/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map