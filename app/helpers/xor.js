import { helper } from '@ember/component/helper';

export function xor(params/*, hash*/) {
  return params.reduce((prev, next) => !prev ^ !next);
}

export default helper(xor);
