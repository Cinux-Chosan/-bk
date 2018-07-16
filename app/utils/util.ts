import $ from 'jquery';

function scrollTo(el:any) {
  el = $(el);
  if (el.length) {
    window.scrollTo(0, el.offset().top - 150);
  }
}

export {
  scrollTo
}