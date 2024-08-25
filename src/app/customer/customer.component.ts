import { Component } from '@angular/core';
import { DetailComponent } from "./detail/detail.component";
import { Customer } from '../core/customer';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [DetailComponent],
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

}
