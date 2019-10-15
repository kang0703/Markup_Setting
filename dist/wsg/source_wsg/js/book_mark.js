function sideBookMark(e) {
	e.preventDefault();

	var title = document.title; //현재 보고 있는 페이지의 Title
	var url = location.href; //현재 보고 있는 페이지의 Url
	var agent = navigator.userAgent.toLowerCase(); // 접속 브라우저 확인

	var browser_IE = (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1);
	var browser_Chrome = agent.indexOf("chrome") != -1;
	var browser_Firefox = agent.indexOf("firefox") != -1;
	var browser_Safari = agent.indexOf("safari") != -1;
	var browser_Opera = agent.indexOf('opr') > -1;

	// console.log(agent.indexOf("chrome")); // 브라우저 내용에서 chrome index 넘버값 찾기

	if ( browser_IE ) {
		window.external.AddFavorite(url, title);
	} else if( browser_Chrome ){
		alert("Ctrl+D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.");
	} else if( browser_Firefox ){
		alert("Firefox 입니다");
	} else if( browser_Safari ){
		alert("Safari 입니다");
	} else if( browser_Opera ){
		alert("Opera 입니다");
	}
}

$(document).ready(function() {
	$("#bookmark_bt").click( sideBookMark );
});
