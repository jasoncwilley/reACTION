import React, { Component } from 'react';
import logo from './logo.svg';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.addNote.bind(this);

    this.state = {
    notes: [
      {id: 1, noteContent: "Note 1 here"},
      {id: 2, noteContent: "Note 2 here"},
    ],
    }
  }
  addNote(note){
    const previousNotes = this.state.notes;
    previousNotes.push({id: previousNotes.lenght + 1, noteContent: note  });
    this.setState({
      notes: previousNotes
    });
  }
  render() {
    return (
 <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">React & Firebase To-Do List</div>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent} 
                noteId={note.id} 
                key={note.id} 
                removeNote ={this.removeNote}/>
              )
            })
          }
        </div>
        <div className="notesFooter">
          <NoteForm addMpte={this.addNote}/>
        </div>
   </div>
    );
  }
}

export default App;