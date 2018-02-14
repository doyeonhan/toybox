import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpRequestService} from "../../app/services/http-request.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  message;
  constructor(public navCtrl: NavController, public httpService: HttpRequestService) {}

  ngOnInit() {
      this.httpService.test().subscribe(data => this.message = data.message);
  }

}
