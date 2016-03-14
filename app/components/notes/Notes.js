import React from 'react';
import NotesList from './NotesList';
import InputNote from './InputNote';

const Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <InputNote addNote={this.props.addNote} />
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
});

export default Notes;