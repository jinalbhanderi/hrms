import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { ApiUrl } from 'src/app/api.url';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  // private apiUrl = 'http://localhost:3000/employees';
  private apiUrl = environment.apiUrl;
  private employeeUrl = ApiUrl.employee;
  private empFamilyUrl = ApiUrl.empFamilyUrl;
  private employeeDataSource = new BehaviorSubject<any>(null);
  public languageSubject = new Subject<any[]>();

  addEmployee(employee: any): Observable<any> {
    return this.http.post<any[]>(
      `${this.apiUrl}/${this.employeeUrl}`,
      employee
    );
  }

  getEmployeeData(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/${this.employeeUrl}`);
  }

  getEmployeeDataById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${this.employeeUrl}/${id}`;
    return this.http
      .get<any>(url)
      .pipe(tap((data) => this.employeeDataSource.next(data)));
  }

  updateEmployeeData(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${this.employeeUrl}/${id}`, data).pipe(
      tap(() => {
        this.getEmployeeDataById(id).subscribe();
      })
    );
  }

  addEmpFamilyData(employee: any) {
    return this.http.post<any[]>(
      `${this.apiUrl}/${this.empFamilyUrl}`,employee);
  }
  
  getEmpFamilyData() {
    return this.http.get<any[]>(`${this.apiUrl}/${this.empFamilyUrl}`);
  }

  updateEmpFamilyData(id: number, data: any): Observable<any> {
    return this.http
      .put(`${this.apiUrl}/${this.empFamilyUrl}/${id}`, data)
      .pipe(
        tap(() => {
          this.getEmployeeDataById(id).subscribe();
        })
      );
  }

 
}
