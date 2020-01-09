import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform(value: any[], attribute: string) {
        return value.slice().sort((a, b) => {
            const nameA: string = a[attribute];
            const nameB: string = b[attribute];

            return (nameA).localeCompare(nameB);
        });
    }
}
