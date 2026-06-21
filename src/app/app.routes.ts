import { AboutComponent } from './about.component';
import { Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { CourseDetailComponent } from './course-detail.component';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
