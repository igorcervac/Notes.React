import React from 'react';
import './App.css';
import { useState } from 'react';

type Note = {
  id: number,
  title: string,
  content:string
}

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title:'title',
      content:'content'
    },
    {
      id: 2,
      title:'title 2',
      content:'content 2'
    },
    {
      id: 3,
      title:'title 3',
      content:'content 3'
    },
    {
      id: 4,
      title:'title 4',
      content:'content 4'
    }
  ]);
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedNote, setSelectedNote] = useState<Note | null>();

  const handleNoteClick = (note : Note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  }

  const handleAddNote = (e : React.FormEvent) => {
    e.preventDefault();

    const newNote: Note = {
      id: notes.length+1,
      title: title,
      content: content
    };
  
    setNotes([...notes, newNote]);

    setTitle("");
    setContent("");
  }

  const handleUpdateNote = ( e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedNote) {
      return;
    }

    const updatedNote: Note = {
      id: selectedNote.id,
      title: title,
      content: content
    };

    setNotes(notes.map(note => note.id == selectedNote.id ? updatedNote : note));

    setSelectedNote(null);
    setTitle("");
    setContent("");
  }

  const handleCancel = () => {
    setSelectedNote(null);
    setTitle("");
    setContent("");
  }

  return (
    <div className='container'>
      <form className='note-form' onSubmit={e => selectedNote ? handleUpdateNote(e) : handleAddNote(e)}>
        <input type='text' required placeholder='Title' onChange={e => setTitle(e.target.value)} value={title}></input>
        <textarea placeholder='Content' required rows={3} onChange={e => setContent(e.target.value)} value={content}></textarea>
        {!selectedNote ? 
          (<button type='submit'>Add note</button>)
          : 
          (
          <div className='edit-buttons'>
            <button type='submit'>Save</button>
            <button type='button' onClick={() => handleCancel()}>Cancel</button>
          </div>
        )}        
      </form>
      <div className='notes-grid'>
        {notes.map(note => (
           <div className='note-item' onClick={() => handleNoteClick(note) }>
           <div className='note-header'>
             <button>x</button>
           </div>
           <h2>{note.title}</h2>
           <p>{note.content}</p>
         </div>
        ))}       
      </div>
    </div>
  );
}

export default App;
