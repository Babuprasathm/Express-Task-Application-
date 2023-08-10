import { Component } from '@angular/core';
import { NavigationServiceService } from '../Service/navigation-service.service';
import { AuthService } from '../Service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signUp:any[]=[];
  signUpData:any={
    name:'',
    email:'',
    password:'',
  }
  loginData:any={
   name:'',
   password:'',
  }
  constructor(private authService:AuthService,private navigationService:NavigationServiceService,private formBuilder: FormBuilder){
    this.loginData = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void{
    const localData = localStorage.getItem('signUp')
    if(localData != null){
      this.signUp = JSON.parse(localData);
    }
  }
  onSignUp(){
    if (this.signUpData.name.trim() === '' || this.signUpData.email.trim() === '' || this.signUpData.password.trim() === '') {
      alert('Please fill in all fields');
    }
    if(this.signUpData.name.trim() !== '' || this.signUpData.email.trim() !== '' || this.signUpData.password.trim() !== '') {
      this.signUp.push(this.signUpData)
      localStorage.setItem('signUp',JSON.stringify(this.signUp))
      this.signUpData = {
        name:'',
        email:'',
        password:'',
      }
      alert('Successfully registered')
    }   
  }

  onLogin(){
    const userExist =  this.signUp.find(s => s.name === this.loginData.name && s.password === this.loginData.password)
    if(userExist != undefined){
      this.authService.setAuthenticated(true)
      this.navigationService.goToSecond();
      this.loginData = {
        name:'',
        password:'',
      }
      this.navigationService.goToSecond()
    }
    
    else {
      alert('Please check the credentials')
    }

}
}
