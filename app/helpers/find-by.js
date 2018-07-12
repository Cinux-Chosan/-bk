import { helper } from '@ember/component/helper';

export function findBy([arr = [], valName = '', val]/*, hash*/) {
  return arr.find(el => el[valName] == val);
}

export default helper(findBy);
