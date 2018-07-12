import { helper } from '@ember/component/helper';

export function gte([first, second]/*, hash*/) {
  return first >= second;
}

export default helper(gte);
