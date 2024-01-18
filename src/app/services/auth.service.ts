import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'token';
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/user/login`, body);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/user`, user);
  }

  setAuthToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getAuthToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getAuthToken();
  }
}
