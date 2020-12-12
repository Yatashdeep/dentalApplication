import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import{FormBuilder,FormGroup,Validator, Validators,AbstractControl }from'@angular/forms'
import { LoadingController,IonicPage, NavParams ,Tabs,Events } from 'ionic-angular';
import { Observable } from 'rxjs';
import{SecurityProvider}from'../../providers/security/security'
import { from } from 'rxjs/observable/from';
import { DashboardPage } from '../dashboard/dashboard';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  signupform
  constructor(public service:SecurityProvider,public navCtrl: NavController,public alertCtrl:AlertController,public formBuilder:FormBuilder,public loadingCtrl:LoadingController) {

    let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
    this.signupform=formBuilder.group({
    email:['',Validators.compose([Validators.maxLength(50),Validators.minLength(1),Validators.required])],
    password:['',Validators.compose([Validators.maxLength(30),Validators.minLength(1),Validators.required])],
    
  }) 
  } 
   checkalert(){
    let alert = this.alertCtrl.create({
     title: 'Forget Password',
     inputs: [
       {
         name: 'Email',
         placeholder: 'Email'
       }
     ],
     buttons: [
       {
         text: 'Send',
         handler: data => {
          
         }
       }
      
     ]
   });
   alert.present();
 }
 loginuser()
 {

  let loading=this.loadingCtrl.create({
    spinner:'hide',
     content:'<img src="https://satsangiconsultancy.files.wordpress.com/2019/01/gif-final.gif">',
   
    cssClass:'transparent'
  })
 loading.present()
 Observable.of(loading).flatMap(loading=>loading.present())
 .flatMap(()=>this.service.login(this.signupform.get('email').value,this.signupform.get('password').value)).subscribe(data=>{
  loading.dismiss()
  console.log(data['status'])
  if(data['status']==1)
  {
    this.navCtrl.setRoot(DashboardPage)
    localStorage.setItem('user_name',data['user_name'])
  }
  else
  {
    let alert = this.alertCtrl.create({
      title: 'Invalid Username/Password !',
    
      buttons: [
        {
          text: 'OK',
          handler: data => {
           
          }
        }
       
      ]
    });
    alert.present();
  }
  
  })
   }
}
