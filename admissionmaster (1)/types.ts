
export interface User {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  grade?: string;
  goals?: string[];
  interests?: string[];
}

export enum DossierStatus {
  PENDING = 'PENDING',
  WARNING = 'WARNING',
  COMPLETED = 'COMPLETED',
  MISSING = 'MISSING'
}

export interface ChecklistItem {
  id: string;
  title: string;
  status: DossierStatus;
  notes?: string;
  required: boolean;
  fileUrl?: string;
}

export interface Dossier {
  id: string;
  schoolName: string;
  major: string;
  method: string;
  deadline: string;
  progress: number;
  items: ChecklistItem[];
}

export interface University {
  id: string;
  name: string;
  logo: string;
  description: string;
  majors: string[];
  methods: string[];
  requirements: string[];
}

export type ViewState = 
  | 'SPLASH' 
  | 'AUTH_LANDING' 
  | 'LOGIN_PHONE' 
  | 'LOGIN_OTP' 
  | 'LOGIN_EMAIL' 
  | 'SIGNUP' 
  | 'FORGOT_PASSWORD' 
  | 'ONBOARDING' 
  | 'DASHBOARD' 
  | 'DOSSIER_DETAIL' 
  | 'ITEM_DETAIL'
  | 'DATABASE'
  | 'TIMELINE'
  | 'AI_CHAT'
  | 'SETTINGS';
