import Route from '@ember/routing/route';
import { action } from '@ember-decorators/object';

export default class SurveyRoute extends Route {
  queryParams = {
    s: {
      refreshModel: true
    }
  }
  model(params) {
    if (params.s == 1) {
      window.myLocalStorage.clear();
    }
    window.scrollTo(0, 0);
  }
  @action
  willTransition(/*trans*/) {
    // if (confirm('是否要离开当前页面？')) {
    //   return true;
    // } else {
    //   trans.abort();
    // }
  }
}
