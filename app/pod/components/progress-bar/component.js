import Component from '@ember/component';
import { computed } from '@ember-decorators/object';

export default class ProgressBarComponent extends Component {
  ratio;
  @computed('ratio')
  get width() {
    let ratio = this.getWithDefault('ratio', 0);
    return ratio * 100 + '%';
  }
}
