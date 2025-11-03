import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBar } from "./components/menu-bar/menu-bar";
import { SideBar } from "./components/side-bar/side-bar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBar, SideBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('noteapp');
}
