import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  ngOnInit(): void {
  }

  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router) {
      this.form = this.fb.group({
        name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
        birthdate: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
        email: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
        password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
        country: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(2)]))
      });
  }

    signUpUser() {
      this.authService.register(
      this.form.get('name').value,
      this.form.get('birthdate').value,
      this.form.get('email').value,
      this.form.get('password').value,
      this.form.get('country').value.cId
      ).subscribe(
        (result:any) => {
          if(result['status'] == 'success'){
            this.form.reset();
            this.router.navigate(['']);
          }
        }
      )
    }

    countries = [
      new Country('MX', 'Mexico'),
      new Country('AR', 'Argentina')
    ]
}

export class Country {
    constructor(public cId:string, public cName:string) {
    }
}
