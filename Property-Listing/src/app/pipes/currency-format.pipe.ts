import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'currencyFormat',
})
export class CurrencyFormatPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: unknown, ...args: unknown[]): unknown {
    // return "$" + value + "/-";

    return value > 14999
      ? this.domSanitizer.bypassSecurityTrustHtml(
          "<span style='color: blue'> " + '$' + value + '/-' + ' </span>'
        )
      : this.domSanitizer.bypassSecurityTrustHtml(
          "<span style='color: red'> " + '$' + value + '/-' + ' </span>'
        );
  }
}
