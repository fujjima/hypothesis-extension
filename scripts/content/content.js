import { format } from 'date-fns'

import { test } from '../../func-test.js'

window.addEventListener('load', async () => {
  test();
  console.log(format(new Date(), "'Today is a' eeee"))
  // let targetElement = document.querySelector('#blog-title-content');

  // if (targetElement) {
  //   console.log('find element');
  // } else {
  //   console.log('not find element');
  // }
});
