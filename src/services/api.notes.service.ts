import Note from "../Note";
import INotesService from "./notes.service";

class ApiNotesService implements INotesService {
    apiUrl: string = "";
   
    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;        
    }

    async getAll():Promise<Note[]> {
        const response = await fetch(this.apiUrl, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });
        const notes = await response.json();
        return notes;
    }

    async add(note: Note): Promise<Note> {
        const response = await fetch(this.apiUrl, {
            method: 'POST', 
            headers: { 
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json" },
            body: JSON.stringify(note)
        });  
        return await response.json();      
    }
    
    async update(note: Note): Promise<void>{
        await fetch(`${this.apiUrl}/${note.id}`, {
            method: 'PUT', 
            headers: { 
                "Access-Control-Allow-Origin": "*",
                "content-type": "application/json" },
            body: JSON.stringify(note)
        });
    }

    async delete(id: number): Promise<void>{
        await fetch(`${this.apiUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });
    }
}

// const apiUrl: string = "https://localhost:7102";
const apiUrl: string = "https://notes-api-100.azurewebsites.net";

const notesService: INotesService = new ApiNotesService(apiUrl+"/api/notes");
export default notesService;