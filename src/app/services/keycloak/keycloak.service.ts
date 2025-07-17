import { Injectable } from '@angular/core';
import Keycloak, { KeycloakInstance } from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private keycloak!: KeycloakInstance;

  constructor() {
    this.keycloak = new Keycloak({
      url: 'http://localhost:5000',
      realm: 'rh-app',
      clientId: 'frontend-client'
    });
  }

init(): Promise<boolean> {
  return this.keycloak.init({
    onLoad: 'check-sso', // 👈 NE PAS rediriger automatiquement
    silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
    checkLoginIframe: false
  });
}


 getToken(): string | null {
  return this.keycloak?.token || null;
}

logout(options?: { redirectUri: string }): void {
  this.keycloak.logout(options);
}



  getUsername(): string | undefined {
    return this.keycloak.tokenParsed?.['preferred_username'];
  }

  isRH(): boolean {
    return this.keycloak.tokenParsed?.realm_access?.roles.includes('RH') || false;
  }

  isLoggedIn(): boolean {
    return !!this.keycloak.token;
  }


}
