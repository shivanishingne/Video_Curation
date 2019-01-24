import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoCenterComponent } from './video-center/video-center.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'videos', component: VideoCenterComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
