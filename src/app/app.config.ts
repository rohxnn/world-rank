import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
//router
import { routes } from './app.routes';
//third-party
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
};
