import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "celcius"
})
export class CelciusPipe implements PipeTransform{
    transform(value: any): any{
        return (value-273+"").substr(0,5);
        //console.log(value); 
    }
}