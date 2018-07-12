import { helper } from '@ember/component/helper';

export function gt([first, second]/*, hash*/) {
  return first > second;
}

export default helper(gt);
