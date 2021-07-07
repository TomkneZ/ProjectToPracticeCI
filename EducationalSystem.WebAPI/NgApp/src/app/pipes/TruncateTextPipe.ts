import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'truncatetext'
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, length: number): string {
    const biggestWord = 50;
    const elipses = '...';
    const searchValue = /[!,.?;:]$/;
    if (typeof value === 'undefined') {
      return value;
    }
    if (value.length <= length) {
      return value;
    }
    let truncatedText = value.slice(0, length + biggestWord);
    while (truncatedText.length > length - elipses.length) {
      const lastSpace = truncatedText.lastIndexOf(' ');
      if (lastSpace === -1) {break; }
      truncatedText = truncatedText.slice(0, lastSpace).replace(searchValue, '');
    }
    return truncatedText + elipses;
  }
}
