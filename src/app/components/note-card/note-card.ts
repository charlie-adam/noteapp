import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Note } from '../../models/models';

@Component({
  selector: 'app-note-card',
  imports: [],
  templateUrl: './note-card.html',
  styleUrl: './note-card.scss',
})
export class NoteCard implements OnInit {
  @Input() note!: Note;
  @ViewChild('noteContainer') noteCardRef!: any;
  @ViewChild('noteControls') noteControlsRef!: any;
  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<Note>();
  showControls: boolean = false;

  ngOnInit(): void {
    
  }

  positionItems() {
    const noteElement = this.noteCardRef.nativeElement as HTMLElement;
    const noteConrols = this.noteControlsRef.nativeElement as HTMLElement;
  }

  onMouseEnter() {
    this.showControls = true;
  }

  editNote() {
    this.edit.emit(this.note);
  }
  deleteNote() {
    this.delete.emit(this.note.id);
  }

  onMouseLeave() {
    this.showControls = false;
  }
}
