import Component from '@ember/component';
import { computed, action } from '@ember-decorators/object';
import goods1 from './goods/clothes.man.1';
import goods2 from './goods/clothes.man.2';
import goods3 from './goods/clothes.woman.1';
import goods4 from './goods/clothes.woman.2';
import goods5 from './goods/phone.1';
import goods6 from './goods/phone.2';
import { set, get } from '@ember/object';

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

  currentOpt = null;
  currentThumbnailIndex = 0;

  @computed('currentOpt')
  get activeOpt() {
    let { currentOpt } = this.getProperties(['currentOpt']);
    return currentOpt || this.get('activeGoods.goodsInfo.opts.firstObject');
  }

  @computed('currentThumbnailIndex', 'activeOpt')
  get activeThumbnail() {
    let { currentThumbnailIndex = 0, activeOpt } = this.getProperties(['currentThumbnailIndex', 'activeOpt']);
    return get(activeOpt, `thumbnailList.${currentThumbnailIndex}`);
  }

  @action
  setThumbnailIndex(currentThumbnailIndex) {
    this.set('currentThumbnailIndex', currentThumbnailIndex);
  }
  @action
  setActiveOpt(opt) {
    this.set('currentThumbnailIndex', 0);
    this.set('currentOpt', opt);
  }
}
