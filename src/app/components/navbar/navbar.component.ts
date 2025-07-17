import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { KeycloakService } from '../../services/keycloak/keycloak.service';


@Component({
  selector: 'app-navbar',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private keycloakService: KeycloakService 
  ) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

logout() {
  this.keycloakService.logout({
    redirectUri: window.location.origin + '/login'
  });
}

}
