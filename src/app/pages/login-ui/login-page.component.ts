import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  error: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

loading = false;

login() {
  this.loading = true;
  const body = new URLSearchParams();
  body.set('client_id', 'frontend-client');
  body.set('grant_type', 'password');
  body.set('username', this.username);
  body.set('password', this.password);

  this.http.post('http://localhost:5000/realms/rh-app/protocol/openid-connect/token', body.toString(), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }).subscribe({
    next: (res: any) => {
      localStorage.setItem('token', res.access_token);
      this.router.navigate(['/cv-list']);
      this.loading = false;
    },
    error: () => {
      this.error = 'Identifiants incorrects';
      this.loading = false;
    }
  });
}

}
