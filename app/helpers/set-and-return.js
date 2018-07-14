import { helper } from '@ember/component/helper';
import { set } from '@ember/object';

export function setAndReturn([o, value]/*, hash*/) {
  set(o, value);
  return o;
}

export default helper(setAndReturn);
