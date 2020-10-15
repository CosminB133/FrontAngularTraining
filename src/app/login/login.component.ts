import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(input) {
    this.http.post<{ access_token: string }>('http://127.0.0.1:8000/login',{
      email: input.email,
      password: input.password
    }).subscribe(
      response => {
        localStorage.setItem('jwt', response.access_token);
        this.router.navigate(['/products']);
      },
      () => this.error = true);
  }
}
