import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class ApplicationController extends Controller {
  queryParams = ['export', 'tip', 'clean', 'unclosable'];
  tip;
  unclosable;
  export;
  clean;
  @action
  closeExport() {
    let unclosable = this.get('unclosable');
    if (!unclosable) {
      this.set('tip', '');
      this.set('export', '');
    }
  }
  @action
  async cleanStorage() {
    await window.localforage.clear();
    this.set('clean', '');
    this.set('tip', 'Cleaned up!');
  }
}
