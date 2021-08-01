import { AbstractControl } from "@angular/forms"

export class MathValidator {
  static addition(target: string, source1: string, source2: string){
    return (form: AbstractControl) =>{
      const sum = form.value[target]
      const firstNumber = form.value[source1]
      const secondNumber = form.value[source2]
      if(firstNumber + secondNumber === +sum) {
        return null
      }else{
        return {additional: true}
      }
    }

  }
}
