var viewport=window.matchMedia('(max-width: 999px)');
var items=$('.menu-item');


$(window).resize(function(){
  location.reload();
});

if(viewport.matches){
  var nav=$('.navigation');
  var btn=$('.btn-menubar');
  var lists=$('menu-list');

  items.addClass('icon-plus');
  items.attr('role','button');
  items.attr('aria-haspopup','true');
  items.attr('aria-expanded','false');
  items.attr('aria-pressed','false');

// 버튼을 클릭했을 때 네비게이션 요소에  nav-act 클래스를 추가한다.
btn.on('click',function(e){
  e.preventDefault();
  nav.toggleClass('nav-act');
  if(nav.hasClass('nav-act')){
    btn.attr('aria-label','메인메뉴 닫기');

  }else{
    btn.attr('aria-label','메인메뉴 열기');
  }
});
  items.on('click',function(e){
    
    lists.removeClass('menu-act');
   $(this).parent().addClass('menu-act');
  });  
}else{
  items.attr('role','presentation');

}


