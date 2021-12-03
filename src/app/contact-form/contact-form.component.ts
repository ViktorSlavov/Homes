import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public resourceKey = 'contantForm';
  public contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.contactForm = this.fb.group({
      about: ['', Validators.required],
      name: ['', Validators.required],
      phone: [null, Validators.required],
      body: ['', Validators.required],
      consent: [false, Validators.required] 
    })
  }

}
