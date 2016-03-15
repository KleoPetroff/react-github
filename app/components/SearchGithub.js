import React from 'react';

const SearchGithub = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  setRef(ref) {
    this.usernameRef = ref;
  },
  handleSubmit(e) {
    e.preventDefault();
    const username = this.usernameRef.value;
    this.usernameRef.value = '';
    this.context.router.push('/profile/' + username)
  },
  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={this.setRef}/>
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    );
  }
});

export default SearchGithub;