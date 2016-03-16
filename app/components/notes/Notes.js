import React from 'react';
import NotesList from './NotesList';
import InputNote from './InputNote';

class Notes extends React.Component {
  render() {
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <InputNote addNote={this.props.addNote} />
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
}

export default Notes;