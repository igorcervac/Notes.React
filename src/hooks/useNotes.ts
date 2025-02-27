import { useState, useContext, useEffect } from "react";
import Note from "../Note";
import NotesContext from "../NotesContext";

export default function useNotes(){
    const [notes, setNotes] = useState<Note[]>([]);  
    const [loading, setLoading] = useState(true); 
    // const [error, setError] = useState<string | null>(null);     
  
    const notesService = useContext(NotesContext)!;
  
    // useEffect(() => {
    //     // setLoading(true);
        
    //     // try {
    //     const getNotesAsync = async () => {
    //         console.log('Notes');

    //         const notes2 = await notesService.getAll();
    //         setNotes(notes2);
    //         // setLoading(false);
    //     // }
  
    //     getNotesAsync();
    // }
    // // catch (e) {
    // //     const error = e as Error;
    // //     setError(error.message);
    // // }
    // // finally {
    // //     setLoading(false);
    // // }
    // });
    
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