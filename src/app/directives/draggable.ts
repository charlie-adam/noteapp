import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class Draggable implements OnInit {
  @Input() dragHandle?: string; // Optional CSS selector for drag handle
  @Output() dragged = new EventEmitter<{ left: number; top: number }>();

  private isDragging = false;
  private offsetX = 0;
  private offsetY = 0;
  private dragElement: HTMLElement;
  private handleElement?: HTMLElement;

  constructor(private el: ElementRef<HTMLElement>) {
    this.dragElement = this.el.nativeElement;
  }

  ngOnInit() {
    // Ensure absolute positioning
    if (window.getComputedStyle(this.dragElement).position !== 'absolute') {
      this.dragElement.style.position = 'absolute';
    }

    // Set up the drag handle or fallback to the whole element
    this.handleElement = this.dragHandle
      ? (this.dragElement.querySelector(this.dragHandle) as HTMLElement)
      : this.dragElement;

    if (this.handleElement) {
      // this.handleElement.style.cursor = 'move';
    }
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (this.handleElement && !this.handleElement.contains(event.target as Node)) {
      return;
    }

    event.preventDefault();
    this.isDragging = true;

    const rect = this.dragElement.getBoundingClientRect();
    this.offsetX = event.clientX - rect.left + 48;
    this.offsetY = event.clientY - rect.top + 37;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;

    event.preventDefault();

    console.log('Dragging...', event.clientX, event.clientY);
    console.log('Offset:', this.offsetX, this.offsetY);
    const left = event.clientX - this.offsetX;
    const top = event.clientY - this.offsetY;

    this.dragElement.style.left = `${left}px`;
    this.dragElement.style.top = `${top}px`;

    this.dragged.emit({ left, top });
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }
}