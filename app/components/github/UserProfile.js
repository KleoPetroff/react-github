import React from 'react';

const UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <div>
        User Profile Component
      </div>
    );
  }
});

export default UserProfile;