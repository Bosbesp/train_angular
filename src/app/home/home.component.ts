import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  myName: string = 'Boss Phubet Khomcharoen BUU';
  isDisabled: boolean = false;
  firstname = '';
  showbuttons: boolean = true;
  score: number = 0;
  Fname =  '';
  Lname = '';
  confirm() {
    console.log(this.firstname);
  }
  switch(param: any) {
    this.showbuttons = param;
  }
  books: any = [
    { title: 'Moby dxck', author: 'herman 123' },
    { title: 'Moby asd', author: 'herman 1asd3' },
    { title: 'Moby d12312', author: 'herman 1ewq23' },
  ];
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      Address: [{value: '', disabled: false}, Validators.required],
      phone: [{value: '', disabled: false}, [Validators.required]],
      Name: [{value: 'สวัสดี ไหว้สวย', disabled: true}, Validators.required],
      zipcode: [{value: '', disabled: false}, Validators.required]
    });
  }
  onSubmit() {
    console.log(this.contactForm.value);
    // You can send the form data to your server using an HTTP request here
  }
}
