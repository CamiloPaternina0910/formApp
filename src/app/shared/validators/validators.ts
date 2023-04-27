import { FormControl } from "@angular/forms";

export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const canBeStrider = (control : FormControl) => {

    const value : string = control.value.trimp().toLowerCase()

    if(value === 'strider'){
        return {
            noStrider: true
        }
    }

    return null;
}