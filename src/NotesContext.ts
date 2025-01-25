import { createContext } from "react";
import INotesService from "./services/notes.service"

const NotesContext = createContext<INotesService | null>(null);
export default NotesContext;