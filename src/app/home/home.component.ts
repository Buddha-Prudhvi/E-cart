import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
@Input() public dataarray:any = [{name:'product1',price:1200},
{name:'product2',price:1300},
{name:'product3',price:1400}] ;
public receiveparent = [" "];

  constructor(private route:Router) { }
  to_details(){
    this.route.navigate(['/details'])
  }
  ngOnInit(): void {  

  }

}
