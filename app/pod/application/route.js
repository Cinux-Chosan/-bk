import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  redirect(model, trans) {
    if (trans.targetName === 'index') {
      this.transitionTo('survey');
      // this.transitionTo('amazon');
    }
  }
}
