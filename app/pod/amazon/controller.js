import Controller from '@ember/controller';
import { computed } from '@ember-decorators/object';

export default class SurveyController extends Controller {
  queryParams = ['g'];
  g = '1';
  @computed('g')
  get gList() {
    let gList = this.getWithDefault('g', '1_2');
    return gList.split('_');
  }
}
