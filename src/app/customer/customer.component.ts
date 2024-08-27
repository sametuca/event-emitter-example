import { Component } from '@angular/core';
import { DetailComponent } from "./detail/detail.component";
import { Customer } from '../core/customer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [DetailComponent, CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  /**
   *
   */
  constructor() {
    
  }

  ngOnInit() {
    
  }
  customerListener!: Customer;
  onCustomerSelected($event: Customer) {
  this.customerListener = $event;
}
buttonWasClicked:boolean = false;
handleChildButtonClicked(){
  this.buttonWasClicked = true;
  console.log('Button was clicked');
}

}
