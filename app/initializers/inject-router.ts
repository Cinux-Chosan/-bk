import Application from '@ember/application';

export function initialize(application: Application): void {
  application.inject('component', 'appController', 'controller:application');
}

export default {
  initialize
};
