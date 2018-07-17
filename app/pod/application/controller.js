import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class ApplicationController extends Controller {
  queryParams = ['export', 'tip'];
  tip;
  export;
  @action
  closeExport() {
    this.set('tip', '');
    this.set('export', '');
  }
}
