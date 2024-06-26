// tab2.page.ts
import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../covid-data.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  covidData: any;
  message: string | undefined;
  totalPresumptivePositive: any;
  constructor(private covidDataService: CovidDataService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.currentMessage.subscribe(message => this.message = message);
    this.covidDataService.getOntarioData().subscribe(data => {
      this.covidData = data;

    });

    console.log(this.message);



  }



}
