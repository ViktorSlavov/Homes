import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailingService } from '../mailing.service';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public resourceKey = 'contantForm';
  public contactForm!: FormGroup;

  constructor(private fb: FormBuilder, public modal: ModalService, private mailService: MailingService) {
  }

  public ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [null, Validators.required],
      body: ['', Validators.required],
      consent: [false, Validators.requiredTrue] 
    });
  }

  public handleSubmit(): void {
    this.mailService.submit(this.contactForm);
  }

}
