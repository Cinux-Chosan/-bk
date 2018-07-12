import { helper } from '@ember/component/helper';

export function isIn([first, ...rest]/*, hash*/) {
  return rest.some(el => (el && typeof el === 'object') ? first in el : el === first);
}

export default helper(isIn);
