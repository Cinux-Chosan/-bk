import { helper } from '@ember/component/helper';

export function toPercent([number = 0]/*, hash*/) {
  return number * 100 + '%';
}

export default helper(toPercent);
