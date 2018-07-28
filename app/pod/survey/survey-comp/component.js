import $ from 'jquery';
import Component from '@ember/component';
import { computed, action } from '@ember-decorators/object';
import survey1 from './surveys/survey.1';
import survey2 from './surveys/survey.2.1';
import survey3 from './surveys/survey.2.2';
import survey4 from './surveys/survey.2.3';
import { copy } from '@ember/object/internals';
import { scrollTo, wait } from 'amazon/utils/util';
import styles from './styles';
import { get } from '@ember/object';

const { localforage: { getItem, setItem }, myLocalStorage } = window;
const { random } = Math;

const SURVEY = {
  SURVEY_1: 1,
  SURVEY_2: 2,
  SURVEY_3: 3,
  SURVEY_4: 4
}

export default class SurveyCompComponent extends Component {
  survey1 = copy(survey1, true);
  survey2 = copy(survey2, true);
  survey3 = copy(survey3, true);
  survey4 = copy(survey4, true);
  s;
  @computed('s')
  get activeSurvey() {
    let s = this.getWithDefault('s', 1);
    return this.get(`survey${s}`);
  }

  didRender() {
    let activeSurvey = this.get('activeSurvey');
    document.title = get(activeSurvey, 'title');
  }

  didInsertElement() {
    let radios = this.$('[id^="i-check"]');
    let ctx = this;
    radios.on('ifToggled', function() {
      if (this.checked) {
        ctx.$(this).closest(`.${styles['error']}`).removeClass(styles['error']);
      }
    })
  }

  validate(surveyItems) {
    return surveyItems.every(el => {
      if (el.type === 'radio') {
        if (!el.opts.some(opEl => opEl.isChecked)) {
          // 该选项都没有选中
          let selector = `[data-desc="${el.desc}"]`;
          scrollTo(selector);
          this.$(selector).addClass(styles['error']);
          return false;
        } else {
          return true;
        }
      } else if (el.type === 'group') {
        return this.validate(el.items);
      }
    })
  }

  @action
  surveySubmitAction1() {
    let appController  = this.get('appController');
    if (+random().toFixed()) {  // 随机跳手机、衣服
      appController.transitionToRoute('amazon', { queryParams: { g: '5_6' }});  // 跳手机页面
    } else {
      let survey1 = JSON.parse(myLocalStorage.getItem('survey1'));
      let genderSelected = survey1.items.findBy('desc', 'Gerder').opts.findBy('isChecked', true);
      if (genderSelected.optText === 'Male') {
        appController.transitionToRoute('amazon', { queryParams: { g: '1_2' }});  // 跳男装
      } else {
        appController.transitionToRoute('amazon', { queryParams: { g: '3_4' }});  // 跳女装
      }
    }
  }

  @action
  surveySubmitAction2() {
    let { appController } = this.getProperties(['appController']);
    if (myLocalStorage.getItem('survey3')) {
      // 如果 survey3 有记录， 则证明衣服问卷已经填写， 则跳最后一个问卷
      appController.transitionToRoute({ queryParams: { s: 4 }});
    } else {
      // 否则跳转到衣服
      let survey1 = JSON.parse(myLocalStorage.getItem('survey1'));
      let genderSelected = survey1.items.findBy('desc', 'Gerder').opts.findBy('isChecked', true);
      if (genderSelected.optText === 'Male') {
        appController.transitionToRoute('amazon', { queryParams: { g: '1_2' }});
      } else {
        appController.transitionToRoute('amazon', { queryParams: { g: '3_4' }});
      }
    }
  }

  @action
  surveySubmitAction3() {
    let appController  = this.get('appController');
    if (myLocalStorage.getItem('survey2')) {
      // 如果 survey2 有记录， 则证明手机问卷已经填写， 则跳最后一个问卷
      appController.transitionToRoute({ queryParams: { s: 4 }});
    } else {
      // 否则跳手机购买页面
      appController.transitionToRoute('amazon', { queryParams: { g: '5_6' }});
    }
  }

  @action
  async surveySubmitAction4() {
    // 存储数据到 indexDB 和 excel
    let appController  = this.get('appController');
    await this.updateStorage();
    let { isIE, isLocalFile } = window.env;
    if (isIE && isLocalFile) {
      // appController.get('exportXlsx').send('doExport');
      let exportXlsx = appController.get('exportXlsx');
      await exportXlsx.actions.doExport.call(exportXlsx);
    }
    let redirectTime = 3;
    appController.set('tip', `Thanks for your filling out, Redirecting after ${redirectTime} seconds...`);
    let task_id = setInterval(async () => {
      appController.set('tip', `Thanks for your filling out, Redirecting after ${--redirectTime} seconds...`);
      if (redirectTime <= 0) {
        clearInterval(task_id);
        await wait(100);
        appController.transitionToRoute({ queryParams: { s: 1, tip: '' }});
      }
    }, 1000);
  }

  @action
  submit() {
    let activeSurvey = this.get('activeSurvey');
    let s = this.getWithDefault('s', 1);
    if (this.validate(activeSurvey.items)) {
      myLocalStorage.setItem(`survey${s}`, JSON.stringify(activeSurvey)); // 存储当前问卷数据
    } else {
      return;
    }
    switch (Number(s)) {
      case SURVEY.SURVEY_1:
        this.send('surveySubmitAction1');  // 填完第一个问卷
      break;
      case SURVEY.SURVEY_2:
        this.send('surveySubmitAction2');  // 填完手机问卷
      break;
      case SURVEY.SURVEY_3:
        this.send('surveySubmitAction3');  // 填完衣服问卷
      break;
      case SURVEY.SURVEY_4:
        this.send('surveySubmitAction4');  // 填完最终问卷
      break;
      default:
        break;
    }
  }

  async updateStorage() {
    let survey1 = JSON.parse(myLocalStorage.getItem('survey1'));
    let survey2 = JSON.parse(myLocalStorage.getItem('survey2'));
    let survey3 = JSON.parse(myLocalStorage.getItem('survey3'));
    let survey4 = JSON.parse(myLocalStorage.getItem('survey4'));
    let goods = JSON.parse(myLocalStorage.getItem('goods'));
    let sv1 = { title: survey1.title, items: this.formatSurveyData(survey1.items) };
    let sv2 = { title: survey2.title, items: this.formatSurveyData(survey2.items) };
    let sv3 = { title: survey3.title, items: this.formatSurveyData(survey3.items) };
    let sv4 = { title: survey4.title, items: this.formatSurveyData(survey4.items) };
    try {
      let svUserFills = JSON.parse(await getItem('svUserFills') || '[]');
      let meta = { date: new Date().toLocaleString() };
      let data = { sv1, sv2, sv3, sv4, goods, meta  };
      $.post(`http://${location.hostname}:8888/surveies`, data).then(res => console.log(res), rej => console.log(rej));
      svUserFills.pushObject(data);
      await setItem('svUserFills', JSON.stringify(svUserFills));
    } catch (error) {
      // console.log(error);
    }
  }

  formatSurveyData(svItem = []) {
    svItem.forEach(item => {
      if (item.type === 'radio') {
        // radio
        item.result = item.opts.findBy('isChecked', true).optText;
        delete item.opts;
      } else if (item.type === 'group') {
        // group
        this.formatSurveyData(item.items);
      }
    })
    return svItem;
  }
}