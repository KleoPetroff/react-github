import React from 'react';

import UserProfile from './github/UserProfile';
import Repos from './github/Repos';
import Notes from './notes/Notes';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';
import helpers from '../utils/helpers';

const Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState() {
    return {
      notes: [],
      bio: {},
      repos: []
    };
  },
  componentWillMount() {
    this.ref = new Firebase('https://react-github.firebaseio.com/');
    let childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');

    helpers.getGithubInfo(this.props.params.username)
      .then(function (data) {
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      }.bind(this));
  },
  componentWillUnmount() {
    this.unbind('notes');
  },
  handleNewNote(newNote) {
    this.ref.child(this.props.params.username)
      .child(this.state.notes.length)
      .set(newNote);
  },
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleNewNote} />
        </div>
      </div>
    );
  }
});

export default Profile;