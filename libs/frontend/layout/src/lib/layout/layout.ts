import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackdropComponent } from '../../components/backdrop/backdrop.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'lib-layout',
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    SidebarComponent,
    BackdropComponent,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  sidebar = inject(SidebarService);
}
