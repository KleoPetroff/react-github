import React from 'react';

const InputNote = React.createClass({
  propTypes: {
    addNote: React.PropTypes.func.isRequired
  },
  setRef(ref) {
    this.note = ref;
  },
  handleSubmit(e) {
    e.preventDefault();
    const newNote = this.note.value;
    this.props.addNote(newNote);
    this.note.value = ''
  },
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add New Note" ref={this.setRef}/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    );
  }
});

export default InputNote;