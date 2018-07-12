import { helper } from '@ember/component/helper';

export function inc([baseCount, nInc = 1]/*, hash*/) {
  return +baseCount + +nInc;
}

export default helper(inc);
