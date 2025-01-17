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
  
  return (
    <div className='container'>
      <form className='note-form'>
        <input type='text' required placeholder='Title'></input>
        <textarea placeholder='Content' required rows={3}></textarea>
        <button type='submit'>Add note</button>
      </form>
      <div className='notes-grid'>
        {notes.map(note => (
           <div className='note-item'>
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
