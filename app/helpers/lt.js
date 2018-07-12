import { helper } from '@ember/component/helper';

export function lt([first, second]/*, hash*/) {
  return first < second;
}

export default helper(lt);
