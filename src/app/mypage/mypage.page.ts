import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.page.html',
  styleUrls: ['./mypage.page.scss'],
})
export class MypagePage  {

  message: any;

  constructor(private messageService: MessageService, private router: Router) {}

  sendMessage() {
    this.messageService.changeMessage(this.message);
    alert("Message sent: "+this.message)
    this.goToTab2()
  }
  goToTab2() {
    this.router.navigate(['/tabs/tab2']);
  }

}
