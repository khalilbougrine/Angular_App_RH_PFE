import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { KeycloakService } from './app/services/keycloak/keycloak.service';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AuthInterceptor } from './app/interceptors/auth.interceptor';

// 👉 Instanciation manuelle de KeycloakService
const keycloak = new KeycloakService();

keycloak.init().then(() => {
  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes), // ✅ Fournir les routes ici
      provideHttpClient(withInterceptorsFromDi()),
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      { provide: KeycloakService, useValue: keycloak } // ✅ Injecter l'instance manuelle de Keycloak
    ]
  }).catch(err => console.error('❌ Bootstrap error:', err));
});
