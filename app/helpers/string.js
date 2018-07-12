import { helper } from '@ember/component/helper';

export function string(params/*, hash*/) {
  if(params.length === 1 && !Array.isArray(params[0])) {
    return params[0] + '';
  } else {
    return params[0].map(el => el + '');
  }
}

export default helper(string);
