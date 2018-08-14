import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }

play()
{
  let profileModal = this.modalCtrl.create(LoginPage);
   profileModal.present();
 };

}
