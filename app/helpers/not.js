import { helper } from '@ember/component/helper';

export function not([truthy]/*, hash*/) {
  return !truthy;
}

export default helper(not);
