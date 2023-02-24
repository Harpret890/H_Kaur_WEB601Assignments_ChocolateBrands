import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Pipe({ 
    name: 'contentsList' 
})

export class ContentListPipe implements PipeTransform {
transform(values: Content[], typeFilter?: string ): Content[] {
if(!typeFilter){
    return values.filter(value => !value.type);
}
return values.filter(value => value.type === typeFilter);
}
}