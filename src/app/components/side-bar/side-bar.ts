import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SidebarItem } from '../../models/models';
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";
import { gsap } from "gsap";

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar {
  @ViewChild('sidebar') sidebarElement!: ElementRef;
  isExpanded: boolean = false;
  sidebarItems: SidebarItem[] = [
    { icon: 'stickies', label: 'Notes', routerLink: '/notes' },
    { icon: 'search', label: 'Search', routerLink: '/search' },
  ];
  toggleSidebar() {
    // gsap.to(this.sidebarElement.nativeElement, {
    //   width: this.isExpanded ? '50px' : '150px',
    //   duration: 0.3,
    // });
    this.isExpanded = !this.isExpanded;
  }
}