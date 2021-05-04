import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  accountDetails:any = {

    userone: { acno: 1000, balance: 10000, username: "userone", password: "testuser0" },
    usertwo: { acno: 1001, balance: 11000, username: "usertwo", password: "testuser1" },
    userthree: { acno: 1002, balance: 12000, username: "userthree", password: "testuser2" },
    userfour: { acno: 1003, balance: 13000, username: "userfour", password: "testuser3" },
    userfive: { acno: 1004, balance: 14000, username: "userfive", password: "testuser4" },
    usersix: { acno: 1005, balance: 15000, username: "usersix", password: "testuser5" },
    userseven: { acno: 1006, balance: 16000, username: "userseven", password: "testuser6" },
    usereight: { acno: 1007, balance: 17000, username: "usereight", password: "testuser7" }
}
  constructor() { }

  ngOnInit(): void {
  }

  onUsernameChange(event: any) {
    this.username = (event.target.value)
  }

  onPasswordChange(event: any) {
    this.password = (event.target.value)
  }

  login(){
    let user=this.authenticateUser(this.username,this.password)
    if(user==1){
      alert("Login Successful")
      window.location.href = "bankuserinterface.html"
  }
  else if(user==0){
      // let ilab = document.querySelector("#pinvalid")
      // ilab.textContent = "the password entered does not match the username"
      // ilab.style.color = "red"
      alert("Password does not Match")
  }
  else if(user==-1){
      // let ulab = document.querySelector("#uinvalid")
      // ulab.textContent = "invalid username, pleae enter a valid username"
      // ulab.style.color = "red"
      alert("No Username found Matching !!")
  }
  }

  authenticateUser=(uname:string,pwd:string)=>{
    let dataset =this.accountDetails;
    if(uname in dataset){
        if (dataset[uname].password === pwd) {
            return 1; //valid username & pwd
        }
        else {
            return 0; //incorrect password
        }
    }
    else {
        return -1; //wrong username
    }
}


}
