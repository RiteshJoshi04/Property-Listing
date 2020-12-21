import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  //Will come from Database
  propertyType: Array<string> = ["House", "Apartment", "Duplex"];
  furnishedType: Array<string> = ["Fully", "Semi", "UnFurnished"];

  propertyView: IProperty = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    Type: null
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit(Form: NgForm) {
    console.log('form submitted');
    console.log(Form);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
