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
  async doExportLast(fileName) {
    let svUserFills = JSON.parse(await getItem('svUserFills') || false);
    if (svUserFills) {
      let xlsData = [];
      let heads = {};
      const svResultItem = svUserFills[svUserFills.length - 1];
      let item = {};
      try {
        let sv1 = this.buildXslData(svResultItem.sv1.items, item, 1);
        let sv2 = this.buildXslData(svResultItem.sv2.items, item, 2);
        let sv3 = this.buildXslData(svResultItem.sv3.items, item, 3);
        let sv4 = this.buildXslData(svResultItem.sv4.items, item, 4);
        await Promise.all([sv1, sv2, sv3, sv4]);
        heads = { ...heads, ...item, ...svResultItem.goods, ...svResultItem.meta };
        xlsData.push({ ...item, ...svResultItem.goods, ...svResultItem.meta });
      } catch (error) {
        console.log(error);
      }
    try {
      downloadExl(xlsData, Object.keys(heads), fileName || '问卷记录');
    } catch (error) {
      console.log(error);
    }

    } else {
      alert('没有数据');
    }
  }
  @action
  async doExport() {
    let svUserFills = JSON.parse(await getItem('svUserFills') || false);
    if (svUserFills) {
      let xlsData = [];
      let heads = {};
      for (let i = 0; i < svUserFills.length; i++) {
        const svResultItem = svUserFills[i];
        let item = {};
        try {
          let sv1 = this.buildXslData(svResultItem.sv1.items, item);
          let sv2 = this.buildXslData(svResultItem.sv2.items, item);
          let sv3 = this.buildXslData(svResultItem.sv3.items, item);
          let sv4 = this.buildXslData(svResultItem.sv4.items, item);
          await Promise.all([sv1, sv2, sv3, sv4]);
          heads = { ...heads, ...item, ...svResultItem.goods, ...svResultItem.meta };
          xlsData.push({ ...item, ...svResultItem.goods, ...svResultItem.meta });
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
