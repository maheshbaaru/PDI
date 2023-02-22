import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DropdownModel, SimpleUnit } from '@pdi/platform-angular-template/src/lib/pdi-dropdown/model/dropdown.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
 dataRange:any;
    // controller
    customBreadcrumbs = [
      {label: 'Home', path: '/'},
      {label: 'Details', path: 'details'},
      {label: 'Order', path: 'order'},
    ];
  
    simpleMenuConfig: DropdownModel<any>[] = [
      {
        label: 'Details',
        key: 'details',
      },
      {
        label: 'Customers',
        key: 'customers',
      }
    ];

    form = new FormGroup({
      testControl: new FormControl(null, Validators.required),
    })
    
    basicOptions: SimpleUnit[] = [
      { key: 'Some Label', label: 'Some Label' },
      { key: 'Another Label', label: 'Another Label' },
    ];
    click(){
      
    }
}
