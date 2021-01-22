import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getBoolean',
})
export class GetBooleanPipe implements PipeTransform {
  transform(value: unknown): boolean {
    return Boolean(value);
  }
}
