import Note from "../Note";
import INotesService from "./notes.service";

class ApiNotesService implements INotesService {
    apiUrl: string = "";
   
    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;        
    }

    async getAll():Promise<Note[]> {
        const response = await fetch(this.apiUrl);
        const notes = await response.json();
        return notes;
    }

    async add(note: Note): Promise<void> {
        await fetch(this.apiUrl, {
            method: 'POST', 
            headers: { "content-type": "application/json" },
            body: JSON.stringify(note)
        });        
    }
    
    async update(note: Note): Promise<void>{
        await fetch(`${this.apiUrl}/${note.id}`, {
            method: 'PUT', 
            headers: { "content-type": "application/json" },
            body: JSON.stringify(note)
        });
    }

    async delete(id: number): Promise<void>{
        await fetch(`${this.apiUrl}/${id}`, {
            method: 'DELETE'
        });
    }
}

const notesService: INotesService = new ApiNotesService("https://localhost:7102/api/notes");
export default notesService;