import { NoteDetails } from "../types";

export class NoteRequest {
  id: number;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;

  constructor(data: NoteDetails) {
    this.title = data.title;
    this.body = data.body;
    this.archived = false;

    const noteId = +new Date();
    this.id = noteId;
    this.createdAt = new Date(noteId).toISOString();
  }
}
