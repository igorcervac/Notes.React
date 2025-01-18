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

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();

    const newNote: Note = {
      id: notes.length+1,
      title: title,
      content: content
    };
  
    setNotes([newNote, ...notes]);

    setTitle("");
    setContent("");
  }

  return (
    <div className='container'>
      <form className='note-form' onSubmit={e => handleSubmit(e)}>
        <input type='text' required placeholder='Title' onChange={e => setTitle(e.target.value)} value={title}></input>
        <textarea placeholder='Content' required rows={3} onChange={e => setContent(e.target.value)} value={content}></textarea>
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
