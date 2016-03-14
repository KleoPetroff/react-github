import React from 'react';

const Repos = React.createClass({
  propTypes: {
    repos: React.PropTypes.array.isRequired,
    username: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <div>
        User Reposs
      </div>
    );
  }
});

export default Repos;