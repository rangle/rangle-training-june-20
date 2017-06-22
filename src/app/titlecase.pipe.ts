import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(inputText: string): any {
    return inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
  }

}
