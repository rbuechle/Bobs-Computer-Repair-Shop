/*
============================================
; Title:  user-details.component.ts
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: user-detail component
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;
  userId: any;
  form: FormGroup;
  roles: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder, private router: Router) {
    this.userId = this.route.snapshot.paramMap.get('userId');

    this.http.get('/api/users/' + this.userId).subscribe(res => {
      this.user = res;
    }, err => {
      console.log(err);
    }, () => {
      this.form.controls.firstname.setValue(this.user.firstname);
      this.form.controls.lastname.setValue(this.user.lastname);
      this.form.controls.username.setValue(this.user.username);
      this.form.controls.password.setValue(this.user.password);
      this.form.controls.phoneNumber.setValue(this.user.phoneNumber);
      this.form.controls.address.setValue(this.user.address);
      this.form.controls.email.setValue(this.user.email);
      this.form.controls.role.setValue(this.user.role);

    });
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstname: [null, Validators.compose([Validators.required])],
      lastname: [null, Validators.compose([Validators.required])],
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
      phoneNumber: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      role: [null, Validators.compose([Validators.required])]
    });
  }

  saveUser() {
    this.http.put('/api/users/' + this.userId, {
      firstname: this.form.controls.firstname.value,
      lastname: this.form.controls.lastname.value,
      username: this.form.controls.username.value,
      password: this.form.controls.password.value,
      phoneNumber: this.form.controls.phoneNumber.value,
      address: this.form.controls.address.value,
      email: this.form.controls.email.value,
      role: this.form.controls.role.value,
  
    }).subscribe(res => {
      this.router.navigate(['/user-list']);
    });
  }

  cancel() {
    this.router.navigate(['/user-list']);
  }
}
