import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import survey1 from './surveys/survey.1';
import survey2 from './surveys/survey.2';
import survey3 from './surveys/survey.3';
import survey4 from './surveys/survey.4';

export default class SurveyCompComponent extends Component {
  survey1 = survey1;
  survey2 = survey2;
  survey3 = survey3;
  survey4 = survey4;
  @computed()
  get activeSurvey() {
    let { survey1, survey2, survey3, survey4 } = this.getProperties(['survey1', 'survey2', 'survey3', 'survey4']);
    return survey1;
  }
}
