import { Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { CourseDetailComponent } from './course-detail.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
