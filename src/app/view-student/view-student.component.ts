import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  studentDetail: any;
  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      console.log("current route details: ", res);
      this.getStudentDetailsByUserId(res?.id);
    });
  }

  onGoBack() {
    this.location.back();
  }

  getStudentDetailsByUserId(id: number) {
    console.log("this is ",id)
    this.studentService.getStudentDetailById(id).subscribe({
      next: (response: any) => {
        this.studentDetail = response?.id;
      }
    });
  }
}