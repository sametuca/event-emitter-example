import { Component, EventEmitter, Output } from '@angular/core';
import { Customer } from '../../core/customer';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
    /**
     *
     */
    constructor() {
    }

    ngOnInit() {
    }

    @Output() onCustomerSelected = new EventEmitter<Customer>();
    @Output() buttonClicked = new EventEmitter<void>();
    
    public customer:Customer = {
      id: 1,
      name: "John",
      address: "123 Main St",
      phone: "217-555-1212",
      email: ''
    }
    public selectCustomer(customer: Customer) {
        this.customer = customer;
        this.onCustomerSelected.emit(customer);
    }

    clickButton() {
        this.buttonClicked.emit();
    }

}



