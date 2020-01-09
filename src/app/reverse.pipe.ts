import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {
    transform(value: string) {
        let reversedString = '';
        for (let index = value.length - 1; index >= 0; index--) {
            reversedString += String(value).charAt(index);
        }
        return reversedString;
    }
}
