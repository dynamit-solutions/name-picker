import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NameComponent } from './components/name/name.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'name-picker', component: NameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
