import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { DateUtils } from '../utils/date.utils';
import { ProductsApiService } from './products-api.service';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor(
        private productsApiService: ProductsApiService
    ) { }

    public validDateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.value) return null;
            if (DateUtils.isValidDate(control.value)) return null;
            return { validDate: true };
        };
    };

    public todayOrFutureValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (!control.value) return null;
            const date = DateUtils.getDateOrNull(control.value);
            if (!date) return null;
            if (DateUtils.IsTodayOrFuture(date)) return null;
            return { todayOrFuture: true };
        };
    };

    public availableProductValidator(): (control: AbstractControl) => Observable<ValidationErrors | null> {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            if (!control.value) return of(null);
            return this.productsApiService.existsProduct(control.value).pipe(
                map(exists => exists ? { availableProduct: true } : null),
                catchError(() => of(null))
            );
        }
    }

    public getErrorMessages(control: FormControl) {
        if (!control.errors) {
            return [];
        }
        return Object.entries(control.errors).map(([key, error]) => {
            switch (key) {
                case 'required': return 'Requerido';
                case 'minlength': return `Mínimo ${error.requiredLength} caracteres`;
                case 'maxlength': return `Máximo ${error.requiredLength} caracteres`;
                case 'validDate': return 'Fecha incorrecta';
                case 'todayOrFuture': return 'Debe ser igual o mayor a hoy';
                case 'availableProduct': return 'Código de producto no disponible';
                default: return 'Dato incorrecto';
            };
        });
    }
}
