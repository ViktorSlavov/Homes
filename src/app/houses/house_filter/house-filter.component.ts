import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { Base } from "src/app/base-component/base-component.component";
import { House } from "src/app/common";
import { LanguageService } from "src/app/language.service";

@Component({
    selector: 'app-house-filter',
    templateUrl: './house-filter.component.html',
    styleUrls: ['./house-filter.component.scss']
})
export class HouseFilterComponent extends Base {
    public resourceKey = 'houses';

    @Input()
    public priceOptions!: string[];

    @Input()
    public filterForm!: FormGroup;
}