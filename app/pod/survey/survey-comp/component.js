import $ from 'jquery';
import Component from '@ember/component';
import { computed, action } from '@ember-decorators/object';
import survey1 from './surveys/survey.1';
import survey2 from './surveys/survey.2.1';
import survey3 from './surveys/survey.2.2';
import survey4 from './surveys/survey.2.3';
import { copy } from '@ember/object/internals';
import { scrollTo } from 'amazon/utils/util';
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
    this.getinvestigateCount();
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


  async getinvestigateCount () {
    let svUserFills = JSON.parse(await getItem('svUserFills') || '[]');
    let { isIE, isLocalFile } = window.env;
    if (isIE && isLocalFile) {
      try {
        // throw new Error('跳过此步！');
        let { data } = await $.get(`http://mlo.kim:8888/queryCount?t=${Date.now()}`);
        this.set('investigateCount', + data + 1);
      } catch (error) {
        this.set('investigateCount', svUserFills.length ? svUserFills.length + 1 : ((window.investigateCount || 0) + 1));
      }
    } else {
      this.set('investigateCount', svUserFills.length + 1);
    }
  }

  @computed('investigateCount')
  get formattedInvestigateCount() {
    let investigateCount = this.getWithDefault('investigateCount', 1);
    return String(investigateCount).padStart(4, '0');
  }

  formatDate(seconds) {
    let time = new Date;
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    let hour = time.getHours();
    let min = time.getMinutes();
    let strDate = `${year + String(month).padStart(2, '0') +  String(day).padStart(2, '0')}`;
    return seconds ? `${strDate + String(hour).padStart(2, '0') + String(min).padStart(2, '0')}` : strDate;
  }


  @computed('s', 'formattedInvestigateCount')
  get investigateInfo() {
    let date = this.formatDate();
    let formattedInvestigateCount = this.get('formattedInvestigateCount');
    return `${date}/${formattedInvestigateCount}`;
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
    if (false && +random().toFixed()) {  // 随机跳手机、衣服
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
    appController.transitionToRoute({ queryParams: { s: 1 }});

    // if (myLocalStorage.getItem('survey3')) {
    //   // 如果 survey3 有记录， 则证明衣服问卷已经填写， 则跳最后一个问卷
    //   appController.transitionToRoute({ queryParams: { s: 4 }});
    // } else {
    //   // 否则跳转到衣服
    //   let survey1 = JSON.parse(myLocalStorage.getItem('survey1'));
    //   let genderSelected = survey1.items.findBy('desc', 'Gerder').opts.findBy('isChecked', true);
    //   if (genderSelected.optText === 'Male') {
    //     appController.transitionToRoute('amazon', { queryParams: { g: '1_2' }});
    //   } else {
    //     appController.transitionToRoute('amazon', { queryParams: { g: '3_4' }});
    //   }
    // }
  }

  @action
  surveySubmitAction3() {
    let appController  = this.get('appController');
    appController.transitionToRoute({ queryParams: { s: 4 }});

    // if (myLocalStorage.getItem('survey2')) {
    //   // 如果 survey2 有记录， 则证明手机问卷已经填写， 则跳最后一个问卷
    //   appController.transitionToRoute({ queryParams: { s: 4 }});
    // } else {
    //   // 否则跳手机购买页面
    //   appController.transitionToRoute('amazon', { queryParams: { g: '5_6' }});
    // }
  }

  @action
  async surveySubmitAction4() {
    // 存储数据到 indexDB 和 excel

    // this.set('showshowSaveDialog', true);
    this.send('showSaveDialog');

    // 之前的自动调整逻辑，甲方需要手动确认进行跳转
    // let redirectTime = 3;
    // appController.set('tip', `Thanks for your filling out, Redirecting after ${redirectTime} seconds...`);
    // let task_id = setInterval(async () => {
    //   appController.set('tip', `Thanks for your filling out, Redirecting after ${--redirectTime} seconds...`);
    //   if (redirectTime <= 0) {
    //     clearInterval(task_id);
    //     await wait(100);
    //     appController.transitionToRoute({ queryParams: { s: 1, tip: '' }});
    //   }
    // }, 1000);
  }

  @action
  submitSurvey(s) {
    if (s == 4) {
      this.send('submit');
    } else {
      this.set('showNextPageDialog', true);
    }
  }

  @action
  nextPageDialogConfirm() {
    this.send('submit');
    this.set('showNextPageDialog', false);
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

  @action
  async showSaveDialog() {
    this.set('showSaveTip', '');
    let appController  = this.get('appController');
    // appController.set('unclosable', true);
    // appController.set('tip', 'Saving...');
    this.set('disableConfirm', true);
    await this.updateStorage();
    let { isIE, isLocalFile } = window.env;
    if (true || isIE && isLocalFile) {  // 客户后来要求所有浏览器都填完了导出当前条, 不再将所有数据导出到一个 excel
      let exportXlsx = appController.get('exportXlsx');
      // await exportXlsx.actions.doExport.call(exportXlsx);
      let fileName = `${this.formatDate(true)}/${this.get('formattedInvestigateCount')}`;
      await exportXlsx.actions.doExportLast.call(exportXlsx, fileName);
    }
    this.set('disableConfirm', false);
    this.set('showSaveTip', true);
    // appController.transitionToRoute({ queryParams: { s: 1, tip: '', unclosable: '' }});
  }

  @action
  async showSaveConfirmDialog() {
    this.set('showSaveTip', false);
    this.set('showSaveConfirm', true);
  }

  @action
  saveConfirmed() {
    this.set('showSaveConfirm', false);
    this.set('appController.unclosable', true);
    this.set('appController.tip', 'The experiment is over, thank you for your cooperation.');
    this.set('showNextStepBtn', true);
  }

  @action
  startNewExperiment() {
    let appController = this.get('appController');
    this.set('showNextStepBtn', false);
    appController.transitionToRoute('amazon', { queryParams: { g: '5_6', tip: '', unclosable: '' }});
  }

  @action
  Quit() {
    const browserName = navigator.appName;
    if (browserName == "Netscape") {
        window.location.href = "about:blank";                    //关键是这句话
        window.close();
    } else if (browserName == "Microsoft Internet Explorer") {
      window.opener = null;
      window.open('','_self');
      window.close();
    }
  }

  async updateStorage() {
    let survey1 = JSON.parse(myLocalStorage.getItem('survey1'));
    let survey2 = JSON.parse(myLocalStorage.getItem('survey2'));
    let survey3 = JSON.parse(myLocalStorage.getItem('survey3'));
    let survey4 = JSON.parse(myLocalStorage.getItem('survey4'));
    let goods = JSON.parse(myLocalStorage.getItem('goods'));
    let sv1 = { title: survey1.title, items: this.formatSurveyData(survey1.items, 1) };
    let sv2 = { title: survey2.title, items: this.formatSurveyData(survey2.items, 2) };
    let sv3 = { title: survey3.title, items: this.formatSurveyData(survey3.items, 3) };
    let sv4 = { title: survey4.title, items: this.formatSurveyData(survey4.items, 4) };
    try {
      let svUserFills = JSON.parse(await getItem('svUserFills') || '[]');
      let formattedInvestigateCount = this.get('formattedInvestigateCount');
      let meta = { date: new Date().toLocaleString(), 'No.': formattedInvestigateCount };
      let data = { sv1, sv2, sv3, sv4, goods, meta };
      $.post(`http://mlo.kim:8888/surveies?t=${Date.now()}`, data).then(result => console.log(result), reason => console.error(reason));
      window.investigateCount = window.investigateCount || 0;
      window.investigateCount += 1;
      svUserFills.pushObject(data);
      await setItem('svUserFills', JSON.stringify(svUserFills));
    } catch (error) {
      // console.error(error);
    }
  }

  formatSurveyData(svItem = [], No) {
    svItem.forEach((item, index) => {
      if (item.type === 'radio') {
        // radio
        item.result = item.opts.findBy('isChecked', true).optText;
        if (typeof No !== undefined) {
          item.desc = `${No}.${index + 1}、${item.desc}`
        }
        delete item.opts;
      } else if (item.type === 'group') {
        // group
        this.formatSurveyData(item.items, No);
      }
    })
    return svItem;
  }
}