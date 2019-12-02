import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import SideBar from './sidebar_launcher';
import { logoutThunk } from '../../actions/session_actions';
import { createPlaylist } from '../../util/playlist_api_util'

import {fetchPlaylistsThunk } from '../../actions/playlists_actions';


const mapStateToProps = (state, ownProps) => ({
    userId:  Object.values(state.entities.users),
    playlists: Object.values(state.entities.playlists)
})


const mapDispatchToProps = (dispatch, ownProps) => ({
    logout: () => dispatch(logoutThunk()),
    getUserPlaylists: (id) => dispatch(fetchPlaylistsThunk(id)),
    createPlaylist: (playlist) => createPlaylist(playlist)
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);