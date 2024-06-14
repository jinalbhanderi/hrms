import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/employees';
  private employeeDataSource = new BehaviorSubject<any>(null);
  currentEmployeeData = this.employeeDataSource.asObservable();

  changeEmployeeData(employee: any) {
    this.employeeDataSource.next(employee);
  }
  
  addEmployee(employee: any): Observable<any> {
    return this.http.post<any[]>(this.apiUrl, employee);
  }

  getEmployeeData(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getEmployeeDataById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
