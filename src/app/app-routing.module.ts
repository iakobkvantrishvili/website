import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './shared_component/contact_component/contact/contact.component';
import { MainComponent } from './shared_component/main_component/main/main.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'app-contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
