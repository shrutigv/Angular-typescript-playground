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
	private user: User ;
  	constructor(private router:Router) { 
  	}
	ngOnInit() {}

  onSubmit() {
    this.router.navigate(['home'])
	}
}
