import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours'
})
export class MinutesToHoursPipe implements PipeTransform {

  transform(value: number): string {
    let textMinute : string;
    let textHours : string;

    if (value < 60) return value + " minutes";

    let minute = value % 60;
    let hours = Math.floor(value / 60);

    minute === 1 || minute === 0 ? textMinute = "minute" : textMinute = "minutes";
    hours === 1 ? textHours = "heure" : textHours = "heures";

    return `${hours} ${textHours} ${minute} ${textMinute}`;
  }

}
