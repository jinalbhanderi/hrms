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
  private apiUrl = environment.apiUrl;
  private employeeUrl = ApiUrl.employee;
  private empFamilyUrl = ApiUrl.empFamilyUrl;
  private empAddress = ApiUrl.empAddress;
  private empAducationUrl = ApiUrl.empAducationUrl;
  private employeeDataSource = new BehaviorSubject<any>(null);
  public languageSubject = new Subject<any[]>();

  //  ------------------------- basicInfoData api--------------------------------//

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
    return this.http
      .patch(`${this.apiUrl}/${this.employeeUrl}/${id}`, data)
      .pipe(
        tap(() => {
          this.getEmployeeDataById(id).subscribe();
        })
      );
  }

  //  ------------------------- familydata api--------------------------------//

  // getEmpFamilyData() {
  //   return this.http.get<any[]>(`${this.apiUrl}/${this.empFamilyUrl}`);
  // }

  getempFamilyDataById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${this.empFamilyUrl}`;
    return this.http
      .get<any>(url)
      .pipe(tap((data) => this.employeeDataSource.next(data)));
  }

  addFamilyInfo(employeeId: string, familyInfo: any): Observable<any> {
    const familyInfoCopy = { ...familyInfo };
    familyInfoCopy.id = '';
    return this.http.post<any>(`${this.apiUrl}/${this.empFamilyUrl}`, {
      ...familyInfoCopy,
      employeeId,
    });
  }

  updateEmpFamilyData(
    familyInfoId: string,
    updatedFamilyInfo: any
  ): Observable<any> {
    return this.http.patch<any>(
      `${this.apiUrl}/${this.empFamilyUrl}/${familyInfoId}`,
      updatedFamilyInfo
    );
  }

  //  ------------------------- Addressdata api--------------------------------//

  getempAddressDataById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${this.empAddress}`;
    return this.http
      .get<any>(url)
      .pipe(tap((data) => this.employeeDataSource.next(data)));
  }

  updateEmpAddressData(
    addressInfoId: string,
    updatedAddressInfo: any
  ): Observable<any> {
    const url = `${this.apiUrl}/${this.empAddress}/${addressInfoId}`;
    return this.http.put<any>(url, updatedAddressInfo);
  }

  addEmpAdressData(employeeId: string, address: any): Observable<any> {
    const url = `${this.apiUrl}/${this.empAddress}`;
    const addressInfoCopy = { ...address };
    addressInfoCopy.id = '';

    return this.http.post<any>(url, {
      ...addressInfoCopy,
      employeeId,
    });
  }

  // ---------------------------------------------Education Data APi------------------------------------------------------------

  getempAducationDataById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${this.empAducationUrl}`;
    return this.http.get<any>(url).pipe(tap((data) => this.employeeDataSource.next(data)));
  }

  updateEmpAducationData(
    educationInfoId: string,
    updatedEducationInfo: any
  ): Observable<any> {
    const url = `${this.apiUrl}/${this.empAducationUrl}/${educationInfoId}`;
    return this.http.put<any>(url, updatedEducationInfo);
  }

  addAducationInfo(employeeId: string, education: any): Observable<any> {
    const url = `${this.apiUrl}/${this.empAducationUrl}`;
    const educationInfoCopy = { ...education };
        educationInfoCopy.id = '';

    return this.http.post<any>(url, {
      ...educationInfoCopy,
      employeeId,
    });
  }
}
