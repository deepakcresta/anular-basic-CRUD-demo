import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StudentListResponseModel } from '../model/Studen-list-response.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentApiUrlEndPoint:string = 'students/'
  baseUrl:string =environment.baseUrl;

  constructor(
    private httpClient: HttpClient,
  ) { }

//adding the students
  addStudent(student:any):Observable<StudentListResponseModel[]>{
    return this.httpClient.post<StudentListResponseModel[]>(
      this.baseUrl.concat(this.studentApiUrlEndPoint),
      student
    )
  }
  //listing  all the students
  listAllStudents():Observable<StudentListResponseModel[]>{
    return this.httpClient.get<StudentListResponseModel[]>(
      this.baseUrl.concat(this.studentApiUrlEndPoint)
    )
  }
  // Deleting the students by id
  deleteStudentById(id:number):Observable<StudentListResponseModel[]>{
    return this.httpClient.delete<StudentListResponseModel[]>(
      this.baseUrl.concat(this.studentApiUrlEndPoint+`${id}`)
    )
  }

  getStudentDetailById(id:any):Observable<any>{
  return this.httpClient.get<any>(
    this.baseUrl.concat(this.studentApiUrlEndPoint+`${id}`)
  )
}

editUserDetailsByUserId(id: number, userDetails: any) : Observable<any> {
  return this.httpClient.put(environment.baseUrl + 'users/' + `${id}`, userDetails);
}
}

