import Controller from '@ember/controller';
import { computed, action } from '@ember-decorators/object';

const { myLocalStorage } = window;

const GOODS = {
  CLOTHES_MAN_1: 1,
  CLOTHES_MAN_2: 2,
  CLOTHES_WOMAN_1: 3,
  CLOTHES_WOMAN_2: 4,
  PHONE_1: 5,
  PHONE_2: 6,
}

export default class SurveyController extends Controller {
  queryParams = ['g', 'linkUrl'];
  g;
  linkUrl;
  showConfirm = false;

  @computed('g')
  get gList() {
    let gList = this.getWithDefault('g', '1_2');
    return gList.split('_');
  }

  @computed('gList')
  get isPhone() {
    let goods = this.get('gList');
    return ~goods.indexOf('5') || ~goods.indexOf('6');
  }

  @action
  onAdding2Cart(goods) {
    let linkUrl = this.get('linkUrl');
    return location.href = linkUrl;
    
    let goodsList = JSON.parse(myLocalStorage.getItem('goods') || '{}');
    switch (Number(goods)) {
      case GOODS.CLOTHES_MAN_1:
        goodsList.clothes_man_1 = 1;
        this.transitionToRoute('survey', { queryParams: { s: 3 }});
      break;
      case GOODS.CLOTHES_MAN_2:
        goodsList.clothes_man_2 = 1;
        this.transitionToRoute('survey', { queryParams: { s: 3 }});
      break;
      case GOODS.CLOTHES_WOMAN_1:
        goodsList.clothes_woman_1 = 1;
        this.transitionToRoute('survey', { queryParams: { s: 3 }});
      break;
      case GOODS.CLOTHES_WOMAN_2:
        goodsList.clothes_woman_2 = 1;
        this.transitionToRoute('survey', { queryParams: { s: 3 }});
      break;
      case GOODS.PHONE_1:
        goodsList.phone_1 = 1;
        this.transitionToRoute('survey', { queryParams: { s: 2 }});
      break;
      case GOODS.PHONE_2:
        goodsList.phone_2 = 1;
        this.transitionToRoute('survey', { queryParams: { s: 2 }});
      break;
      default:
        break;
    }
    // switch (Number(goods)) {
    //   case GOODS.CLOTHES_MAN_1:
    //     goodsList.clothes_man_1 = 1;
    //     this.transitionToRoute('survey', { queryParams: { s: 3 }});
    //   break;
    //   case GOODS.CLOTHES_MAN_2:
    //     goodsList.clothes_man_2 = 1;
    //     this.transitionToRoute('survey', { queryParams: { s: 3 }});
    //   break;
    //   case GOODS.CLOTHES_WOMAN_1:
    //     goodsList.clothes_woman_1 = 1;
    //     this.transitionToRoute('survey', { queryParams: { s: 3 }});
    //   break;
    //   case GOODS.CLOTHES_WOMAN_2:
    //     goodsList.clothes_woman_2 = 1;
    //     this.transitionToRoute('survey', { queryParams: { s: 3 }});
    //   break;
    //   case GOODS.PHONE_1:
    //     goodsList.phone_1 = 1;
    //     this.transitionToRoute('survey', { queryParams: { s: 2 }});
    //   break;
    //   case GOODS.PHONE_2:
    //     goodsList.phone_2 = 1;
    //     this.transitionToRoute('survey', { queryParams: { s: 2 }});
    //   break;
    //   default:
    //     break;
    // }
    myLocalStorage.setItem('goods', JSON.stringify(goodsList));
  }

  @action
  showConfirm(activeGoodsNumber, activeThumbnail, activeOpts, activeGoods) {
    return location.href = this.get('linkUrl');   // 现在用户不需要显示弹窗了，直接跳转，改得心累
    this.set('activeGoodsNumber', activeGoodsNumber);
    this.set('activeThumbnail', activeThumbnail);
    this.set('activeGoods', activeGoods);
    this.set('activeOpts', activeOpts);
    this.set('showConfirm', true);
  }

  @action
  confirm(g) {
    this.send('onAdding2Cart', g);
    this.set('showConfirm', false);
  }
}
