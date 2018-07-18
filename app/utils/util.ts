import $ from 'jquery';

export function scrollTo(el:any) {
  el = $(el);
  if (el.length) {
    window.scrollTo(0, el.offset().top - 150);
  }
}

export function wait(time: number, data?: any): Promise<any> {
  return new Promise(res => setTimeout(res.bind({}, data), time));
}
