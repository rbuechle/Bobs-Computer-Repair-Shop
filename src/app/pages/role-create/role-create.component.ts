/*
============================================
; Title:  role-create.component.ts
; Author: Professor Krasso
; Date:   17 January 2021
; Modified By: Becca Buechle, Rochelle Markham, Rhonda Rivas, King Major
; Description: Create role page
;===========================================
*/

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      text: [null, Validators.compose([Validators.required])]
    });
  }

  create() {
    const role = this.form.controls['text'].value;

    this.http.post('/api/roles', {
      text: role
    }).subscribe(res => {
      this.router.navigate(['/role-list']);
    }, err => {
      console.log(err);
    });
  }

  cancel() {
    this.router.navigate(['/roles']);
  }
}
