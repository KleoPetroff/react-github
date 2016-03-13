import React from 'react';

import UserProfile from './github/UserProfile';
import Repos from './github/Repos';
import Notes from './notes/Notes';

const Profile = React.createClass({
  getInitialState() {
    return {
      notes: [],
      bio: {},
      repos: []
    };
  },
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile usename={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes} />
        </div>
      </div>
    );
  }
});

export default Profile;