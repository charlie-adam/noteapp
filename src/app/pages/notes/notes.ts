import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NoteCard } from "../../components/note-card/note-card";
import { Note } from '../../models/models';
import { Utils } from '../../services/utils';

@Component({
  selector: 'app-notes',
  imports: [NoteCard],
  templateUrl: './notes.html',
  styleUrl: './notes.scss',
})
export class Notes implements OnInit{
  notes: Note[] = [];
  constructor(private utils: Utils) {}

  createNote(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('note'))
      return;
    const newNote: Note = {
      id: this.utils.randomGuid(),
      title: 'New Note',
      content: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      contentHTML: '',
      x: event.offsetX,
      y: event.offsetY
    };
    this.notes.push(newNote);
  }

  deleteNote(noteId: string) {
    this.notes = this.notes.filter(note => note.id !== noteId);
  }

  editNote(editedNote: Note) {
  }

  loadNotes() {
    this.notes = localStorage.getItem('notes')
      ? JSON.parse(localStorage.getItem('notes')!)
      : [];
  }

  ngOnInit() {
    this.loadNotes();
  }

  @HostListener('window:beforeunload', ['$event'])
  onClose(event: Event) {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
