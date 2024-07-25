import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export interface FamilyInfo {
  empId: any;
  id: number | null;
  relationship: string | null;
  name: string;
  dob: NgbDateStruct | null;
  occupation: string;
}

export interface EmployeeForm {
  dp: any;
  startProcess: string;
  sendWelcomeKit: string;
  sendEmail: string;
  onboardingField: any;
  companyName: string | null;
  legalEntityCompany: string | null;
  employeeId: number;
  displayName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string | null;
  maritalStatus: string | null;
  dob: string;
  bloodGroup: string | null;
  ledgerCode: string;
  moNumber: string;
  userName: string;
  workEmail: string;
  password: string;
  joiningDate: string | null;
  location: string | null;
  jobTitle: string | null;
  category: string | null;
  department: string | null;
  subDepartment: string | null;
  reportingManager: string | null;
  lineManager: string | null;
  lineManager2: string | null;
  employmentStatus: string | null;
  comments: string;
  startDate: string;
  endDate: string;
  compensationPeriod: string;
  newSalary: string;
  payFrequency: string | null;
  noticePeriod: string;
  compPeriod: string;
  salaryMode: string;
  compensationDescription: string;
  isLeaveBonusBenefit: boolean;
  applyBonus: boolean;
  taxRegime: string;
  skipFromPayroll: boolean;
  payrollType: boolean;
  isEPF: boolean;
  isESIC: boolean;
  businessUnit: string | null;
  costCenter: string | null;
  bands: string | null;
  segment: string | null;
  hub: string | null;
  territory: string | null;
  region: string | null;
  timezone: string | null;
  leavePolicy: string;
  documentPolicy: string | null;
  costCenterData: string | null;
  overtimePolicy: string | null;
  holiday: string | null;
  clockInPolicy: string | null;
  compOffPolicy: string | null;
  weekendPolicy: string | null;
  penalisationPolicy: string | null;
  onDutyPolicy: string | null;
  isAssignWorkDiary: boolean;
  deviceList: string | null;
}

// src/app/core/interfaces/address.interface.ts

export interface Address {
  empId: any;
  id?: string | null;
  addressOne: string;
  addressTwo: string;
  city: string;
  country: string;
  state: string;
  pincode: string;
  pAddressOne: string;
  pAddressTwo: string;
  pcity: string;
  pCountry: string;
  pState: string;
  ppcode: string;
}
