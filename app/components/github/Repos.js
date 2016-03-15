import React from 'react';

const Repos = React.createClass({
  propTypes: {
    repos: React.PropTypes.array.isRequired,
    username: React.PropTypes.string.isRequired
  },
  render() {
    const repoList = this.props.repos.map((repo, index) => {
      return (
        <li className="list-group-item" key={index}>
          {repo.html_url && <h4><a href={repo.html_url} target="_blank">{repo.name}</a></h4>}
          {repo.description && <p> { repo.description } </p>}
        </li>
      )
    });
    return (
      <div>
        <h3>User Repos </h3>
        <ul className="list-group">
          {repoList}
        </ul>
      </div>
    );
  }
});

export default Repos;