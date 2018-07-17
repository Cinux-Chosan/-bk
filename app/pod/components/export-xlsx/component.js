import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import { downloadExl } from 'amazon/utils/export-xlsx';

const { localforage: { getItem } } = window;

export default class ExportXlsxComponent extends Component {
  tagName = 'button';
  classNames = ['btn'];

  exportBtnText = '导出问卷数据';
  async buildXslData(svItemList = [], rt = {}) {
    for (let i = 0; i < svItemList.length; i++) {
      const svItem = svItemList[i];
      if (svItem.type === 'radio') {
        rt[svItem.desc] = svItem.result;
      } else if (svItem.type === 'group') {
        await this.buildXslData(svItem.items, rt);
      }
    }
    return rt;
  }
  @action
  async doExport() {
    debugger
    let svUserFills = JSON.parse(await getItem('svUserFills') || false);
    if (svUserFills) {
      let xlsData = [];
      let heads = {};
      for (let i = 0; i < svUserFills.length; i++) {
        const svResultItem = svUserFills[i];
        let item = {};
        try {
          await this.buildXslData(svResultItem.sv1.items, item);
          await this.buildXslData(svResultItem.sv2.items, item);
          await this.buildXslData(svResultItem.sv3.items, item);
          await this.buildXslData(svResultItem.sv4.items, item);
          heads = { ...heads, ...item, ...svResultItem.goods };
          xlsData.push({ ...item, ...svResultItem.goods });
        } catch (error) {
          console.log(error);
        }
      }
    try {
      downloadExl(xlsData, Object.keys(heads) ,'问卷记录');
    } catch (error) {
      console.log(error);
    }

    } else {
      alert('没有数据');
    }
  }
  click() {
    this.send('doExport');
  }
}
