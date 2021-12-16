import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-test03',
  templateUrl: './test03.component.html',
  styleUrls: ['./test03.component.scss']
})
export class Test03Component implements OnInit {

  public arr : any =[];
  constructor() {
    let temp: any = new Cat();
    let temp1: any = new User();
    this.arr.push(temp1);
    this.arr.push(temp);
   
  }
 

  ngOnInit(): void {
  }

}
class Cat{
  public name :string | undefined;

  public sleep1(){
    return "Я сплю " + Math.random()*24 +"годин"
  }
  
}
