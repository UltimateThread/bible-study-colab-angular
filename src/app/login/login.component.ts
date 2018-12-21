import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  returnUrl: string;
  showSpinner = false;
  user: any;

  constructor(
    private auth: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('currentBSCUser')) {
      // logged in so return true
      this.router.navigate(['/']);
    }

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.showSpinner = true;

    this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        data => {
          this.showSpinner = false;
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.showSpinner = false;
          this.toastr.error('Invalid username or password');
        });
  }
}
