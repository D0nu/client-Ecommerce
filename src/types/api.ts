// src/types/api.ts
export interface ApiError {
  success: false;
  message: string;
  statusCode?: number;
}
