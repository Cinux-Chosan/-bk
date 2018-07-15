import Route from '@ember/routing/route';

export default class AmazonRoute extends Route {
  activate() {
    window.scrollTo(0, 0);
  }
}
