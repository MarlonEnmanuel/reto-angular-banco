import { Component, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DateUtils } from '../../utils/date.utils';
import { FormService } from '../../services/form.service';
import { Product } from '../../services/products-api.models';
import { Location } from '@angular/common';

@Component({
    selector: 'app-product-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './product-form.component.html',
    styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {

    public form: FormGroup;
    public sendProduct = output<Product>();

    constructor(
        private formBuilder: FormBuilder,
        private formService: FormService,
        public location: Location
    ) {
        this.form = this.formBuilder.nonNullable.group({
            id: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)], [this.formService.availableProductValidator()]],
            name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
            description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
            logo: ['', [Validators.required]],
            dateRelease: ['', [Validators.required, this.formService.validDateValidator(), this.formService.todayOrFutureValidator()]],
            dateRevision: [{ value: '', disabled: true }],
        });
    }

    get id() { return this.form.get('id') as FormControl; }
    get name() { return this.form.get('name') as FormControl; }
    get description() { return this.form.get('description') as FormControl; }
    get logo() { return this.form.get('logo') as FormControl; }
    get dateRelease() { return this.form.get('dateRelease') as FormControl; }
    get dateRevision() { return this.form.get('dateRevision') as FormControl; }

    ngOnInit() {
        this.suscribeDateReleaseChanges();
    }

    public handleSubmit() {
        this.form.markAllAsTouched();

        if (this.form.status !== 'VALID') {
            return
        }
        
        this.sendProduct.emit({
            id: this.id.value,
            name: this.name.value,
            description: this.description.value,
            logo: this.logo.value,
            date_release: this.dateRelease.value,
            date_revision: this.dateRevision.value
        });
    }

    public getErrors(control: FormControl) {
        return this.formService.getErrorMessages(control).join(', ');
    }

    private suscribeDateReleaseChanges(){
        this.dateRelease.valueChanges.subscribe(value => {
            const date = DateUtils.getDateOrNull(value);
            if (date) {
                const newDate = DateUtils.addYears(date, 1);
                this.dateRevision.setValue(DateUtils.getDateString(newDate));
            } else {
                this.dateRevision.setValue('');
            }
        });
    }
}
