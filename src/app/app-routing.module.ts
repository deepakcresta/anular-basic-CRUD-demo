import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path:"add-student",
    component:AddStudentComponent
  },
  {
    path:'edit-student',
    component:EditStudentComponent
  },
  {
    path:'student-detail',
    component:StudentDetailComponent
  },
  {
    path:'view-student',
    component:ViewStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
