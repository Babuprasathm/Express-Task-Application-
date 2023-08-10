import { Component } from '@angular/core';
import { Navbar } from '../navbar';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';
import { NavigationServiceService } from '../Service/navigation-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSidebarOpen = true;
  contentMargin = 350;

  sidebarLinks: Navbar[] = [
    { icon: 'dashboard', label: 'Dashboard  ', route: '/list' },
    { icon: 'home', label: 'Home', route: '/list' },
    { icon: 'insert_chart', label: 'Chart', route: '/chart' },

  ];

  constructor(private authService: AuthService, private router: Router,private navigationService:NavigationServiceService) {}
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    if(!this.isSidebarOpen){
      this.contentMargin = 70;
    }
    else{
      this.contentMargin = 350;
    }
    const sidenavContainer = document.querySelector('.sidenav-container');
    if (sidenavContainer) {
      sidenavContainer.classList.toggle('sidenav-closed');
    }
  }

  logout() {
    alert('hi')
    this.authService.setAuthenticated(false)
    this.navigationService.goToLogin()

  }
}
