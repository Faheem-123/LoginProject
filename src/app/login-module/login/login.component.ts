import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers:[LoginServiceService]
})
export class LoginComponent implements OnInit {

  error:string;
  data:string;
 
  loginForm:FormGroup;
  result:string;

  constructor(private myservice:LoginServiceService, private router:Router){
  }
  ngOnInit() {
    this.loginForm=new FormGroup({
      username: new FormControl(null, []),
      password: new FormControl(null, [])
    });
  }

  onSubmit() {
    console.log(this.loginForm.value)
    this.myservice.getLoginForm(this.loginForm.value).subscribe(
      (data) => {
       console.log(this.data)
        if (data === true) {
          //this.data = data;
          this.router.navigateByUrl('/home')
        }
        if(data=== false){
          this.data=data;
        }
      },
      (error) => {
        console.log(this.error)
        this.error = error
      })

  }

}
