import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-bank',
  templateUrl: './local-bank.component.html',
  styleUrls: ['./local-bank.component.scss']
})
export class LocalBankComponent implements OnInit {

  name = "local"
  nameBank = "bank"
  jane = "jane doe"
  pay = "pay to the"
  order = "order of"
  constructor() { }

  ngOnInit(): void {
  }

}
