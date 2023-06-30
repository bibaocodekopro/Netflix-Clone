import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'movie/:id', component: MoviesComponent},
  {path:'search', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
