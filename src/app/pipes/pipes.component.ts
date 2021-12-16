import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  name = "Fred";

  messag = "Hello world";

 person =" person";
 date = new Date(Date.now());
 dates = new Date(Date.now()); 

  constructor() { }

  ngOnInit(): void {
  }

}
