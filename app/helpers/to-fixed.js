import { helper } from '@ember/component/helper';

export function toFixed([num, fix]/*, hash*/) {
  return Number(num).toFixed(fix);
}

export default helper(toFixed);
