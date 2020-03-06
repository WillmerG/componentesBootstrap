import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  model2: NgbDateStruct;

  ngOnInit() {
  }

  isDisabled = (date: NgbDate, current: {month: number}) => date.month !== current.month;

  isWeekend(date: NgbDate) {
    const d = new Date(date.year, date.month - 1, date.day );
    return d.getDay() === 0 || d.getDay() === 6;
  }
}
