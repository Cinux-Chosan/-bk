import { helper } from '@ember/component/helper';

export function and(params/*, hash*/) {
  return params.reduce((prev, next) => prev && next);
}

export default helper(and);
