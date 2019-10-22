import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    form: FormGroup;
    returnUrl: string;
    submitted: boolean;
    loading: boolean;
    error: string;

    constructor(private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private authService: AuthService,
        private router: Router) {


        //// redirect to home if already logged in
        //if (this.authService.currentUserValue) {
        //    this.router.navigate(['/']);
        //}
    }


    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        // reset login status
        // this.authService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get f() { return this.form.controls; }

    login() {

        this.submitted = true;

        if (this.form.invalid) {
            return;
        }

        const val = this.form.value;

        if (val.username && val.password) {
            this.authService.login(val.username, val.password)
                .subscribe(
                    data => {
                        this.router.navigate([this.returnUrl]);
                    },
                    error => {

                        this.error = error;
                        this.loading = false;
                    });

        }
    }
}

