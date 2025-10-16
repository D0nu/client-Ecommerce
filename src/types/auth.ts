import { User } from "./user";

// src/types/auth.ts
export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  role?: "user" | "admin"; // optional if user role defaults to "user"
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: User;
}
