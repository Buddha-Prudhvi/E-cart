import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {

@Output() public childData = new EventEmitter()

toparent(){
  this.childData.emit("prudhvi")
}
  constructor() { }

  ngOnInit(): void {
  }

}
