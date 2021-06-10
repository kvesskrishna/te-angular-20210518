import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createPwdStrengthValidator():ValidatorFn {
    return (control: AbstractControl):ValidationErrors|null=>{
        const value = control.value; //capture user vale
        console.log(control);
        if(!value) {

            return null;
        }
        //rules
        const hasUpperCase = /[A-Z]+/.test(value); // check if condition is satisfied
        const hasLowerCase = /[a-z]+/.test(value);
        const hasNumeric = /[0-9]+/.test(value);
// combining rules
        const passwordValidator = hasUpperCase && hasLowerCase && hasNumeric;

        return !passwordValidator? {passwordStrength: {
            hasUpperCase: !hasUpperCase, // boolean representing the error
            hasLowerCase: !hasLowerCase,
            hasNumeric: !hasNumeric
        }}: null;
    }
}