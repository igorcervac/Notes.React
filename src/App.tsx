import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Note from './Note';
import notesService from './services/api.notes.service';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedNote, setSelectedNote] = useState<Note | null>();

  useEffect(() => {

    const getNotesAsync = async () => {
      const notes = await notesService.getAll();
      setNotes(notes);
    }

    getNotesAsync();
  })

  const handleNoteClick = (note : Note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  }

  const handleAddNote = async (e : React.FormEvent) => {
    e.preventDefault();

    const newNote: Note = {
      id: notes.length + 1,
      title: title,
      content: content
    };
  
    await notesService.add(newNote);

    setNotes([...notes, newNote]);

    setTitle("");
    setContent("");
  }

  const handleUpdateNote = async ( e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedNote) {
      return;
    }

    const updatedNote: Note = {
      id: selectedNote.id,
      title: title,
      content: content
    };

    await notesService.update(updatedNote);
    setNotes(notes.map(note => note.id === selectedNote.id ? updatedNote : note));

    setSelectedNote(null);
    setTitle("");
    setContent("");
  }

  const handleCancel = () => {
    setSelectedNote(null);
    setTitle("");
    setContent("");
  }

  const handleDeleteNote = async (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    await notesService.delete(id);
    setNotes(notes.filter(note => note.id !== id));
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
           <div key={note.id} className='note-item' onClick={() => handleNoteClick(note) }>
            <div className='note-header'>
              <button onClick={e => handleDeleteNote(e, note.id)}>x</button>
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
