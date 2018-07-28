import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class ApplicationController extends Controller {
  queryParams = ['export', 'tip', 'clean'];
  tip;
  export;
  clean;
  @action
  closeExport() {
    this.set('tip', '');
    this.set('export', '');
  }
  @action
  async cleanStorage() {
    await window.localforage.clear();
    this.set('clean', '');
    this.set('tip', 'Cleaned up!');
  }
}
