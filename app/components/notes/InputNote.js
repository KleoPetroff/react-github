import React from 'react';

class InputNote extends React.Component {
  setRef(ref) {
    this.note = ref;
  }

  handleSubmit(e) {
    e.preventDefault();
    const newNote = this.note.value;
    this.props.addNote(newNote);
    this.note.value = ''
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Note" ref={(ref) =>( this.setRef(ref) )}/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={() => (this.handleSubmit)}>Submit</button>
        </span>
      </div>
    )
  }
}

InputNote.propTypes = {
  addNote: React.PropTypes.func.isRequired
}

export default InputNote;