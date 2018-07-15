import Component from '@ember/component';
import { computed, action } from '@ember-decorators/object';
import survey1 from './surveys/survey.1';
import survey2 from './surveys/survey.2.1';
import survey3 from './surveys/survey.2.2';
import survey4 from './surveys/survey.2.3';

const SURVEY = {
  SURVEY_1: 1,
  SURVEY_2: 2,
  SURVEY_3: 3,
  SURVEY_4: 4
}

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
  @action
  surveySubmitAction1() {
    this.get('appController').transitionToRoute('amazon', { queryParams: {
      g: '1_2'
    }});
  }

  @action
  submit() {
    let s = this.getWithDefault('s', 1);
    switch (s) {
      case SURVEY.SURVEY_1:
        this.send('surveySubmitAction1');
      break;
      case SURVEY.SURVEY_2:
        this.send('surveySubmitAction2');
      break;
      case SURVEY.SURVEY_3:
        this.send('surveySubmitAction3');
      break;
      case SURVEY.SURVEY_4:
        this.send('surveySubmitAction4');
      break;
      default:
        break;
    }
  }
}
