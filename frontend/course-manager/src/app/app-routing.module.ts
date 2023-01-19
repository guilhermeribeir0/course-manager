import { CourseRegistrationComponent } from './course/components/course-registration/course-registration.component';
import { CourseInfoComponent } from './course/components/course-info/course-info.component';
import { CourseListComponent } from './course/components/course-list/course-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'courses',
  component: CourseListComponent
}, {
  path: 'info/:id',
  component: CourseInfoComponent
}, {
  path: 'registration',
  component: CourseRegistrationComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
