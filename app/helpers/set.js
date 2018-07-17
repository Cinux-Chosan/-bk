import { helper } from '@ember/component/helper';
import { set } from '@ember/object';

export function mySet([o, key, val]/*, hash*/) {
  return set(o, key, val);
}

export default helper(mySet);
