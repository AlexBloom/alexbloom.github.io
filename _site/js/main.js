/*
https://www.smashingmagazine.com/2016/07/improving-user-flow-through-page-transitions/

You can copy paste this code in your console on smashingmagazine.com
in order to have cross-fade transition when change page.
*/

var cache = {};
function loadPage(url) {
if (cache[url]) {
  return new Promise(function(resolve) {
    resolve(cache[url]);
  });
}
return fetch(url, {
  method: 'GET'
}).then(function(response) {
  cache[url] = response.text();
  return cache[url];
});
}

var main = document.querySelector('main');

function changePage() {
var url = window.location.href;

loadPage(url).then(function(responseText) {
  var wrapper = document.createElement('div');
      wrapper.innerHTML = responseText;

  var oldContent = document.querySelector('.ajaxWrap');
  var newContent = wrapper.querySelector('.ajaxWrap');

  main.appendChild(newContent);
  animate(oldContent, newContent);
});
}

function animate(oldContent, newContent) {
//oldContent.style.position = 'absolute';

//var transOut = oldContent.classList.add('pageTransOut');
var fadeOut = oldContent.animate({
  opacity: [1, 0]
}, 300);


//var transIn = newContent.classlist.add('pageTransIn');
var fadeIn = newContent.animate({
  opacity: [0, 1]
}, 300);

fadeIn.onfinish = function() {
  document.body.scrollTop = 0;
  oldContent.parentNode.removeChild(oldContent);
  //homeBackgroundColor();
};
}

window.addEventListener('popstate', changePage);

document.addEventListener('click', function(e) {
var el = e.target;

while (el && !el.href) {
  el = el.parentNode;
}

if (el) {
  e.preventDefault();
  history.pushState(null, null, el.href);
  changePage();

  return;
}
});
