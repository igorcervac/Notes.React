import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import INotesService from './services/notes.service';
import ApiNotesService from './services/api.notes.service';
import NotesContext from './NotesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const apiUrl: string = "https://localhost:7102";
// const apiUrl: string = "https://notes-api-100.azurewebsites.net";
const notesService: INotesService = new ApiNotesService(apiUrl+"/api/notes");

root.render(
  <React.StrictMode>
    <NotesContext.Provider value={notesService}>
      <App />
    </NotesContext.Provider>
  </React.StrictMode>
);