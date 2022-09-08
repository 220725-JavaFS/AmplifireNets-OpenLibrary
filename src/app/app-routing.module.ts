import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout"
import { HomePageComponent } from './component/home-page/home-page.component';
import { CheckoutPageComponent } from './component/checkout-page/checkout-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
{
  path:"",
  component: HomePageComponent

},
{
  path:"home",
  component: HomePageComponent
},
{
  path:"checkout",
  component: CheckoutPageComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
           FlexLayoutModule,
           FormsModule,
           HttpClientModule
          ]
})
export class AppRoutingModule { }
