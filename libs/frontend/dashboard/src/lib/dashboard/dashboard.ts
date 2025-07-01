import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackdropComponent } from '../../components/backdrop/backdrop.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'lib-dashboard',

  imports: [
    RouterModule,
    HeaderComponent,
    SidebarComponent,
    BackdropComponent,
    CommonModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  title = 'admin-end';
  sidebar = inject(SidebarService);

}
