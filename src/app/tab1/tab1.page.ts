import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../covid-data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  covidUpdates: any;
  totalDeaths: any;
  totalCases: any;
  totalRateDeaths: any;
  rateDeathsLast7: any;
  rateDeathsLast14: any;

  ontarioData: any;
  totalPresumptivePositive: any
  confirmedPositive: any
  deaths: any
  totalCasesOntario: any
  constructor(private covidDataService: CovidDataService,
            private navController: NavController
  ) { }

  ngOnInit(): void {
    this.covidDataService.getCovidUpdates().subscribe(data => {
      this.covidUpdates = data;
      this.totalDeaths = this.covidUpdates.reduce((acc: any, current: { numdeaths: any; }) => acc + current.numdeaths, 0);
      this.totalCases = this.covidUpdates.reduce((acc: any, current: { totalcases: any; }) => acc + current.totalcases, 0);
      this.totalRateDeaths = this.covidUpdates.reduce((acc: any, current: { ratedeaths: any; }) => acc + current.ratedeaths, 0);
      this.rateDeathsLast7 = this.covidUpdates.reduce((acc: any, current: { ratedeaths_last_7: any; }) => acc + current.ratedeaths_last_7, 0);
      this.rateDeathsLast14 = this.covidUpdates.reduce((acc: any, current: { ratedeaths_last_14: any; }) => acc + current.ratedeaths_last_14, 0);
    });

    this.covidDataService.getOntarioData().subscribe(data => {
      this.ontarioData = data;
      this.totalPresumptivePositive = data.reduce((acc: any, current: { PresumptivePositive: any; }) => acc + (current.PresumptivePositive || 0), 0);
      this.confirmedPositive = data.reduce((acc: any, current: { ConfirmedPositive: any; }) => acc + (current.ConfirmedPositive || 0), 0);
      this.deaths = data.reduce((acc: any, current: { Deaths: any; }) => acc + (current.Deaths || 0), 0);
      this.totalCasesOntario = data.reduce((acc: any, current: { TotalCases: any; }) => acc + (current.TotalCases || 0), 0);
    });
  }

  goToTab2() {
    this.navController.navigateForward('page');
  }

}
