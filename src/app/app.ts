import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import {Navbar} from './components/navbar/navbar';
import {DropdownMenu} from './components/dropdown-menu/dropdown-menu';
import {Footer} from './components/footer/footer';
import {Form} from './components/form/form';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Navbar, RouterOutlet, Footer, DropdownMenu, Form],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Image-Platform-Project');
}

