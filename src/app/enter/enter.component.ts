import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(ref){

    let userLoginObj=ref.value;
   
    //if username & pw are admin , then only navigate to admin component
     if(userLoginObj.username!='admin' && userLoginObj.password!='admin'){
       alert("Invalid credentials")
     }
     else{
      //navigate to admin component
      this.router.navigateByUrl("/admin")
     }
}

}
