import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import survey1 from './surveys/survey.1';
import survey2 from './surveys/survey.2.1';
import survey3 from './surveys/survey.2.2';
import survey4 from './surveys/survey.2.3';

export default class SurveyCompComponent extends Component {
  survey1 = survey1;
  survey2 = survey2;
  survey3 = survey3;
  survey4 = survey4;
  s;
  @computed('s')
  get activeSurvey() {
    let s = this.getWithDefault('s', 1);
    return this.get(`survey${s}`);
  }
}
