import React from 'react';

class NotesList extends React.Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.notes.map((note, index) => (
          <li key={index} className="list-group-item">{note['.value']}</li>
        ))}
      </ul>
    );
  }
}
;

export default NotesList;