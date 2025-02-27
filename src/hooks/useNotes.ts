import { useState, useContext, useEffect } from "react";
import Note from "../Note";
import NotesContext from "../NotesContext";

export default function useNotes(){
    const [notes, setNotes] = useState<Note[]>([]);  
    const [loading, setLoading] = useState(true); 
  
    const notesService = useContext(NotesContext)!; 
    
    useEffect(() => {

        const getNotesAsync = async () => {
            setLoading(true);

            const notes = await notesService.getAll();
            setNotes(notes);

            setLoading(false);
        }

        getNotesAsync();
        
    }, [notesService]);

    return {notes, setNotes, loading};
}