import React from 'react';
import SearchGithub from './SearchGithub';

var Main = React.createClass({
  render() {
    return (
    <div>
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm offset-2" style={{marginTop: 15}}>
            <SearchGithub />
          </div>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          {this.props.children}
        </div>
      </div>
    </div>
    )
  }
});

export default Main;