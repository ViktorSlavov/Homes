import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.authService.login(this.form.value).then(e => {
        console.log(e);
        if (e) {
          this.router.navigate(['../edit'], {  relativeTo: this.route });
        }
      });
    }
  }
  @Input()
  public error!: string | null;

  @Output()
  submitEM = new EventEmitter();

}
