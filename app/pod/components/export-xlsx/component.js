import Component from "@ember/component";
import { computed, action } from "@ember-decorators/object";
import { downloadExl } from "amazon/utils/export-xlsx";

const { localforage: { getItem, setItem } } = window;

export default class ExportXlsxComponent extends Component {
  tagName = 'button';
  classNames = ['btn'];
  exportBtnText = '导出问卷数据';
  async buildXslData(svItemList = [], rt = {}) {
    for (let i = 0; i < svItemList.length; i++) {
      const svItem = svItemList[i];
      if (svItem.type === "radio") {
        rt[svItem.desc] = svItem.result;
      } else if (svItem.type === "group") {
        await this.buildXslData(svItem.items, rt);
      }
    }
    return rt;
  }
  @action
  async doExport() {
    let svUserFills = await getItem("svUserFills");
    let xlsData = [];
    for (let i = 0; i < svUserFills.length; i++) {
      const svResultItem = svUserFills[i];
      let item = {};
      await this.buildXslData(svResultItem.sv1.items, item);
      await this.buildXslData(svResultItem.sv2.items, item);
      await this.buildXslData(svResultItem.sv3.items, item);
      await this.buildXslData(svResultItem.sv4.items, item);
      xlsData.push(item);
    }
    debugger
    downloadExl(xlsData, '问卷记录');
  }
  click() {
    this.send('doExport');
  }
}
