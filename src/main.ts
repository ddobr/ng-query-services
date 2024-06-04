import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: 'constructor',
        loadComponent: () => import('./app/children/constructor.component').then(m => m.ConstructorComponent),
      },
      {
        path: 'home',
        loadComponent: () => import('./app/children/home.component').then(m => m.HomeComponent),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      }
    ]),
    provideHttpClient()
  ]
})
