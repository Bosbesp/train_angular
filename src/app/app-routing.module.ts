import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'child',
    component: ChildComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'movie',
    component: MovieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
