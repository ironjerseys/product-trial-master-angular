import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = "https://localhost:7280/api/Auth";

  constructor(private http: HttpClient, private router: Router) {}

  register(username: string, password: string, email: string) {
    return this.http.post(`${this.apiUrl}/register`, {
      username,
      password,
      email,
    });
  }

  login(email: string, password: string) {
    console.log("Service login called with " + email + " " + password);
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }

  logout(): void {
    localStorage.removeItem("token");
    this.router.navigate(["/home"]);
  }
}
