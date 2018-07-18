import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import Component from '@ember/component';
import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import 'amazon/utils/local-storage';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

let base = {
  localClassNames: 'root',
  _uid: computed(function() { return guidFor(this); }),
  _subId: computed(function () { return this.get('_uid') + '_'; })
}

Component.reopen(base)
Controller.reopen(base);

let env = window.env = {};
let isIE = env.isIE = 'msSaveOrOpenBlob' in window.navigator;
let isLocalFile = env.isLocalFile = !window.location.host;

if (isIE && isLocalFile) {  // 通过本地文件方式在 IE 中打开
  window.localforage = window.myLocalStorage;
} else {
  // 配置 localforage
  window.localforage.config({
    name        : 'amazon',
    version     : 1.0,
    storeName   : 'amazon', // Should be alphanumeric, with underscores.
    description : 'for amazon use'
  });
}

