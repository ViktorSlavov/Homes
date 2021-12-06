import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

const EMAIL_TEXT_HEADER = `Запитване West Village`;
@Injectable({
    providedIn: "root"
})
export class MailingService {

    constructor(private httpClient: HttpClient) {
    }

    submit(form: FormGroup): void {
        if (form.valid) {
            console.log(form.value);
        }
        const formValue = form.value;
        const options = {
            name: `${EMAIL_TEXT_HEADER} - ${formValue.name}, ${formValue.phone}`, replyTo: formValue.email, message: formValue.body
        }
        console.log(options);
        this.httpClient.post('https://formspree.io/f/moqrqaqn', options , {
            headers: new HttpHeaders({ 'Content-Type': 'application.json' })
        }).subscribe((e) => {
            console.log('E-mail successfully sent');
        });
    }
}