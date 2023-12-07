import { Component } from '@angular/core';
import { CententsidebarComponent } from './cententsidebar/cententsidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';



export interface RouteInfo {
  path: string;
  title: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard',     title: 'Dashboard',          class: '' },
  { path: '/equipment',         title: 'Equipments',      class: '' },
];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, CententsidebarComponent ,FooterComponent , RouterOutlet, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public menuItems?: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
