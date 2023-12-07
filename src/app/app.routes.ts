import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { EquipmentComponent } from './pages/Equipment/equipment/equipment.component';
import { EquipmentItemsComponent } from './pages/Equipment/equipment-items/equipment-items.component';
import { CententsidebarComponent } from './pages/sidebar/cententsidebar/cententsidebar.component';

export const routes: Routes = [
    {
        path : 'home',
        component: HomeComponent,
        title : 'Home'
    }, 
    {
         path: 'dashboard',   
         component: CententsidebarComponent,
         title : 'Dashboard'
    },
    {
        path: "equipment",
        component: EquipmentComponent ,
        title : "Equipment"      
    }, 
    {
        path: "",
        redirectTo: 'home' ,
        pathMatch: 'full',       
    }
];
