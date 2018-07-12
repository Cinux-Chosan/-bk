import { helper } from '@ember/component/helper';

export function add(params/*, hash*/) {
  return params.reduce((prev, next) => {
    return prev + next;
  });
}

export default helper(add);
