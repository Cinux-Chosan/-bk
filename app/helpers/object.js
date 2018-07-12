import { helper } from '@ember/component/helper';

export function object(/*, hash*/) {  // 废弃, 请使用 hash
  return {};
}

export default helper(object);
