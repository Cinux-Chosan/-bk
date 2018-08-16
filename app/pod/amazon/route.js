import Route from '@ember/routing/route';

export default class AmazonRoute extends Route {
  model(params) {
    if (params.g == '5_6') {
      window.myLocalStorage.clear();
    }
    // window.scrollTo(0, 0);
  }
  activate() {
    window.scrollTo(0, 0);
  }
}
