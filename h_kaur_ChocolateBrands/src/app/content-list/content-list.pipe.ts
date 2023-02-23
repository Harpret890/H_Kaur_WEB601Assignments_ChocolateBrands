import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Pipe({ name: 'ContentListPipe' })

export class ContentListPipe implements PipeTransform {
transform(content: Content, dType: string ): string {
return content.type || dType || "News";
}
}