import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false

  setAuthenticated(status:boolean){
    this.isAuthenticated = status
  }

  checkAuthenticated(){
    return this.isAuthenticated
  }

  constructor() { }
}
