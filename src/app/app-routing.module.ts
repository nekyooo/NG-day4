import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SubmitComponent } from './submit/submit.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "contact", component: ContactPageComponent},
  {path: "submit", component: SubmitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
