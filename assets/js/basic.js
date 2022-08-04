//==================================
//  Social iframe
//==================================
//for GooglePlus Like
window.___gcfg = {lang: 'zh-TW'};
(function() {
  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
  po.src = 'https://apis.google.com/js/plusone.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

//for facebook fanspage
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/zh_TW/all.js#xfbml=1&appId=154708571390754";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//==================================
//  Login Modal
//==================================
function showModal(target) {
  $("#" + target).foundation('reveal', 'open');
}

function closeModal() {
  $(".reveal-modal").foundation('reveal', 'close');
}

$(".login").bind("click",function(e){
  e.preventDefault();
  showModal('loginModal');
});
