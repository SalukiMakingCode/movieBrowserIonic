import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'votesAverage'
})
export class VotesAveragePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
