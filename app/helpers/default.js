import { helper } from '@ember/component/helper';

export function deft([param, def]/*, hash*/) {
  return typeof param !== 'undefined' ? param : def;
}

export default helper(deft);
