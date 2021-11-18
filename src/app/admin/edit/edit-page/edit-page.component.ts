import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Language } from 'src/app/common';
import { AuthService } from '../../auth.service';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {
  @Input()
  public inputData!: any;

  @Input()
  public title!: string;

  @Input()
  public language!: Language;

  public formGroups!: { [key: string]: FormGroup };

  public objectKeys!: string[];

  private timeout!: NodeJS.Timeout;
  private destroy$: Subject<void> = new Subject();

 

  constructor(
    private crudService: CrudService,
    private snackbar: MatSnackBar,
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    
    this.objectKeys = Object.keys(this.inputData);

    for (let pageKey of this.objectKeys) {
      const currentPage = this.inputData[pageKey];
      const groupObj: any = {};
      for (let resourceEntry of this.getKeys(currentPage)) {
        groupObj[resourceEntry] = new FormControl(currentPage[resourceEntry] || '', Validators.required);
      }
      if (!this.formGroups) {
        this.formGroups = {};
      }
      this.formGroups[pageKey] = new FormGroup(groupObj);
    }
  }

  public ngOnDestroy(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.destroy$.next();
    this.destroy$.complete();
  }

  public getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  submit(pageKey: string): void {
    this.crudService.updateContent(this.language, { [pageKey]: this.formGroups[pageKey].getRawValue() }).then((outcome) => {
      this.showSnackbar(outcome.message || "", 'OK');
    }, (outcome) => {
      this.showSnackbar(outcome.message || "" + "\n" + outcome.error, "Cry");
    });
  }

  public updateAll(): void {

  }

  private showSnackbar(message: string, actionString: string, requiresAction = false, action?: any): void {
    const snackbar = this.snackbar.open(message, actionString);
    if (!requiresAction) {
      this.timeout = setTimeout(() => {
        snackbar.dismissWithAction();
      }, 3000);
    } else {
      snackbar.onAction().pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.logout();
      });
    }
  }

  /**
   * Logs the user out and redirects to login page
   */
  private logout(): void {
    this.authService.logout();
    this.router.navigate(['../login'], {  relativeTo: this.route });
  }
}
