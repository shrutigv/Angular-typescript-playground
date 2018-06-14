import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { User } from '../item-type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	private signupForm: FormGroup;
	private user: User ;
  	constructor(private router:Router) { 
  		this.signupForm = new FormGroup ({
    		emailId:new FormControl(),  
    		userpassword:new FormControl()
  		});
  	}
	ngOnInit() {}

  onFormSubmit(signupForm:NgForm) {
    this.user=this.signupForm.value;
    this.router.navigate(['home'])
	}
}
