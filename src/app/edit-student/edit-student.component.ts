import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  studentForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  studentDetails:any;

  isSubmitting: boolean | undefined;

  constructor(
    private router: Router,
    private location:Location,
    private formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute,
  ) {}
  ngOnInit(): void {
    this.initFormDetails();
    // this.activatedRoute.params.subscribe((res: any) => {
    //   console.log("current route details: ", res);
    //   this.getStudentDetailsByUserId(res?.id);
    // });
  }
  

  initFormDetails(){
    this.studentForm = this.formBuilder.group({
      name: [
        undefined,
        [
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(3),
          Validators.pattern('^[a-z A-Z]{3,60}$'),
        ],
      ],
      mobileNumber: [
        undefined,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      email: [
        undefined,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$'),
          Validators.maxLength(80),
          Validators.minLength(8),
        ],
      ],
      password: [undefined, Validators.required],
    });
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.studentForm.controls;
  }
  
  onEditStudent(){}

onGoBack() {
  this.location.back();
}
getStudentDetailsByUserId(){}
}