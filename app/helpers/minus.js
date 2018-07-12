import { helper } from '@ember/component/helper';

export function minus([minuend = 0, ...subtrahend]/*, hash*/) {
  return subtrahend.reduce((prev = 0, next = 0) => prev - next, minuend);
}

export default helper(minus);
