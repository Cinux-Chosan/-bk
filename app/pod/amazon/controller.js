import Controller from '@ember/controller';
import { computed, action } from '@ember-decorators/object';

const GOODS = {
  CLOTHES_MAN_1: 1,
  CLOTHES_MAN_2: 2,
  CLOTHES_WOMAN_1: 3,
  CLOTHES_WOMAN_2: 4,
  PHONE_1: 5,
  PHONE_2: 6,
}

export default class SurveyController extends Controller {
  queryParams = ['g'];
  g;
  @computed('g')
  get gList() {
    let gList = this.getWithDefault('g', '1_2');
    return gList.split('_');
  }
  @action
  onAdding2Cart(goods) {
    switch (Number(goods)) {
      case GOODS.CLOTHES_MAN_1:
      case GOODS.CLOTHES_MAN_2:
        this.transitionToRoute('survey', { queryParams: { s: 3 }});
      break;
      case GOODS.CLOTHES_WOMAN_1:
      case GOODS.CLOTHES_WOMAN_2:
        this.transitionToRoute('survey', { queryParams: { s: 3 }});
      break;
      case GOODS.PHONE_1:
      case GOODS.PHONE_2:
        this.transitionToRoute('survey', { queryParams: { s: 2 }});
      break;
      default:
        break;
    }
  }
}
