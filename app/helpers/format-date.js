import { helper } from '@ember/component/helper';
import moment from 'npm:moment';

export function fomatDate([timeStamp, format = 'Y-M-D H:mm:ss']/*, hash*/) {
  return timeStamp && moment(timeStamp).format(format);
}

export default helper(fomatDate);
