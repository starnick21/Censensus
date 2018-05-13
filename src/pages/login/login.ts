import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private loginErrorString: string;
  
    constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  
      
    }
  
    // Attempt to login in through our User service
    doLogin() {
      
        this.navCtrl.push(HomePage);
      
    }
  
  

}
