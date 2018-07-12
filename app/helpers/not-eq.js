import { helper } from '@ember/component/helper';

export function notEq(params = []/*, hash*/) {
  // return params.every((el, index) => !~params.indexOf(el, index + 1));
  params = [...params];
  let bRs, item;
  do {
      item = params.popObject();
      bRs = params.every(el => el != item);
  } while(bRs && params.length);
  return bRs;
}

export default helper(notEq);
