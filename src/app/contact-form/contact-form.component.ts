import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Base } from '../base-component/base-component.component';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent extends Base implements OnInit {
  public resourceKey = 'contantForm';
  public contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private _languageService: LanguageService) {
    super(_languageService);
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.contactForm = this.fb.group({
      about: ['', Validators.required],
      name: ['', Validators.required],
      phone: [null, Validators.required],
      body: ['', Validators.required],
      consent: [false, Validators.required] 
    })
  }

}
