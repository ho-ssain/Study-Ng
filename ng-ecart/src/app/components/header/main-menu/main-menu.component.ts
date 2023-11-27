import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent {
  menuItems: string[] = [
    'Home',
    'Products',
    'Sale',
    'New-Arival',
    'About',
    'Services',
    'Contact',
  ];
}
