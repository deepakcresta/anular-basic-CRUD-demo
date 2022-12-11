import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterEvent } from '@angular/router';
import { StudentListResponseModel } from '../model/Studen-list-response.model';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
})
export class StudentDetailComponent implements OnInit {
  studentList: Array<StudentListResponseModel> =
    new Array<StudentListResponseModel>();
  constructor(private router: Router, private studentService: StudentService) {}

  ngOnInit(): void {
    this.listAllStudents();
    
  }

  listAllStudents() {
    this.studentService.listAllStudents().subscribe(
      (response: any) => {
        this.studentList = response?.users;
        console.log('Student List listed successfully.', response);
      },
      (error: any) => {
        console.log('Error on listing the student details', error);
      }
    );
  }

  onAddNewStudent() {
    this.router.navigate(['/add-student']);
  }
  onDeleteStudent(id: number) {
    this.studentService.deleteStudentById(id).subscribe({
      next: (response: any) => {
        this.listAllStudents();
        console.log('student deleted successfully of id:', id);
      },
    });
  }
  // onViewStudentDetail(id:number){
  //   this.router.navigate(['/view-student',id]);
  // }
  onViewStudentDetail(id: any) {
    this.router.navigate(['/view-student', id]);
  }
}
