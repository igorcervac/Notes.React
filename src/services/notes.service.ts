import Note from "../Note";

export default interface INotesService {
    getAll(): Promise<Note[]>;
    add(note: Note): Promise<Note>;
    update(note: Note): Promise<void>;
    delete(id: number): Promise<void>
}