import { Injectable } from '@angular/core';

@Injectable()
export class GlobalWindowService {
  openInNewTab(url: string) {
    try {
      window.open(url, '_blank');
    } catch (e) {
      console.warn('ERROR - GlobalWindowService - openInNewTab: ', e.message);
    }
  }
}
