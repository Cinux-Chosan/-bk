import Component from '@ember/component';
import { computed, action } from '@ember-decorators/object';
import goods1 from './goods/clothes.man.1';
import goods2 from './goods/clothes.man.2';
import goods3 from './goods/clothes.woman.1';
import goods4 from './goods/clothes.woman.2';
import goods5 from './goods/phone.1';
import goods6 from './goods/phone.2';

export default class AmazonCompComponent extends Component {
  goods1 = goods1;
  goods2 = goods2;
  goods3 = goods3;
  goods4 = goods4;
  goods5 = goods5;
  goods6 = goods6;
  goods;
  @computed('g')
  get activeGoods() {
    let s = this.getWithDefault('goods', 1);
    return this.get(`goods${s}`);
  }
  @action
  thumbnailHoverOn(thumbnail) {
    this.set('activeThumbnail', thumbnail);
  }
}
