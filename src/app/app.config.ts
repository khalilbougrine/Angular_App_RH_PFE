import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component'; // Ensure AppComponent is correctly imported
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations()
  ]
};

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimations()]
});