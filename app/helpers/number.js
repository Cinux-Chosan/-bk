import { helper } from '@ember/component/helper';

export function number([num]/*, hash*/) {
  return Number(num);
}

export default helper(number);
