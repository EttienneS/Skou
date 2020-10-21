import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseItemContainerComponent } from './showcase-item-container/showcase-item-container.component';
import { ShowcaseItemExpandedComponent } from './showcase-item-expanded/showcase-item-expanded.component';

const routes: Routes = [
  { 
    path: 'all', 
    component: ShowcaseItemContainerComponent
  },
  {
    path: 'detail',
    component: ShowcaseItemExpandedComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'all'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
