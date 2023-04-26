import { FormControl } from "@angular/forms";


export const canBeStrider = (control : FormControl) => {

    const value : string = control.value.trimp().toLowerCase()

    if(value === 'strider'){
        return {
            noStrider: true
        }
    }

    return null;
}