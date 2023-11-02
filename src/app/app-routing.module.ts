import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CardComponent } from './card/card.component';
import { ViewComponent } from './view/view.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:"home",
    component:CarouselComponent,

  },
  {
    path:"",
    redirectTo:"home",
    pathMatch:'full'
  },
  {
    path:"cards",
    component:CardComponent
  },
  {
    path:"view/:id",
    component:ViewComponent
  },
  {
    path:"wishlist",
    component:WishlistComponent
  },
  {
    path:"about",
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
