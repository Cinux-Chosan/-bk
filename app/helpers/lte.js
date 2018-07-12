import { helper } from '@ember/component/helper';

export function lte([first, second]/*, hash*/) {
  return first <= second;
}

export default helper(lte);
