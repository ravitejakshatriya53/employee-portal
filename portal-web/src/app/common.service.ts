import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient) { }

  addEmployees(data){
    return this.http.post<Employee>('addEmp', data);
  }
  empList = [{"firstName":"Ravi"},
  {"firstName":"Teja"},
  {"firstName":"ABC"},
  {"firstName":"XYZ"},
  {"firstName":"Kiran"}]

  HttpHeaders
  getAllEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>('/getAllEmployee');
  }
}
