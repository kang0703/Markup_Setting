// progress list
function progressList() {
	var table = $("#progressList");
	var tableTr = table.find('tbody tr');

	// line number
	table.find("tr td:first-child").each(function(i, v) {
		$(v).text(i + 1);
	});

	var stateFields = table.find("td.state");

	stateFields.each(function(i, v) {
		var current = $(v);
		var fields = current.parent().children();

		var prop = {
			type: "../../html",
			directory: fields.eq(-3).text(),
			pageId: fields.eq(-2).text()
		};

		var wrapAnchor = $("<a>")
			.attr("target", "_blank")
			// .attr("target", "_self")
			.attr("href", prop.type + "/" + prop.directory + "/" + prop.pageId + ".html")
			.text(current.text());

		if(current.text() == "미정") {
			current.addClass("undecided");
			wrapAnchor = current.text();
		}
		else if(current.text() == "진행") {
			current.addClass("working");
		}
		else if(current.text() == "완료") {
			current.addClass("complete");

		}
		else if(current.text() == "수정") {
			current.addClass("modify");
		}
		else if(current.text() == "대기") {
			current.addClass("hold");
		}
		else if(current.text() == "삭제") {
			current.addClass("delete");
			wrapAnchor = current.text();
		}
		else if(current.text() == "검증") {
			current.addClass("validation");
		}
		current.html(wrapAnchor);
	});


	tableTr.each(function(i) {
		var tr = tableTr.eq(i);
		var txt = tr.find('td').eq(1).text();
		if ( txt === ' ' || txt === '' ) {
		} else if ( txt != '영문' && txt != '불문' ) {
			tr.addClass('line');
		}
	})
}

function imageList() {
	$('.image-list tbody tr').each(function(){
		var image = $(this).find('td').eq(0).find('img');
		var image_src = $(image).attr('src');
		var image_alt = $(image).attr('alt');
		var code = $('<pre></pre>').text('<img src="' + image_src + '" ' + 'alt="' + image_alt + '" ' + '/>');
		var elem = $('<td></td>').append(code);
		$(this).append(elem);
	});
}

function projectName() {
	$('#footer span').text('BRAVEINNO TX GROUP');
}

function globalNavigation() {
	$('#wrap').wrap('<div id="overflow"></div>');
	$('.wsg-h-aside-menu-btn-box a').click(function(e){
		e.preventDefault();
		// $(this).toggleClass('active');
		// $(this).toggleClass('change');
		// $('#overflow').toggleClass('active');
		$('.wsg-all-sitemap-wrap').addClass('on');
	});
	$('.wsg-sitemap-close').on('click', function(e){
		e.preventDefault();
		$(this).parents('.wsg-all-sitemap-wrap').removeClass('on');
	});
}

/**
 * String.trim()
 * trim method가 없는 경우 구현해줌
 */
if(!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g,'');
    };
}

/**
 * 예제소스를 표시하기 위한 HtmlEditor를 관리한다
 * editor는 CodeMirror를 사용함
 * @type {{codeMirror: Array, create: Function}}
 * @see http://codemirror.net/
 */
var HtmlEditor = {
	/**
	 * 생성한 codemirror editor의 object를 저장한다
	 */
	codeMirror: [],

	/**
	 * editor를 생성한다
	 * target과 preview selector는 선택된 대상의 수가 서로 같아야한다
	 * @param target (required) 소스코드가 있는 대상 컨테이너
	 * @param preview (optional) 소스코드의 미리보기가 나타날 대상
	 */
	create: function(target, preview) {
		preview = $(preview);

		$(target).each(function(i, v) {
			v.codeMirror = HtmlEditor.codeMirror[i] = new CodeMirror(function(elt) {
				$(v).replaceWith(elt);		// 소스코드 원본이 있는 컨테이너를 editor로 replace
			}, {
				mode : "text/html",
				lineNumbers : true,
				value: v.innerText.trim(),
				theme: "eclipse",
				indentWithTabs: true,
				tabSize: 4,
				indentUnit: 4
			});

			$(v).remove();

			// 미리보기 대상이 없는 경우 패스
			if(preview.length <= 0) {
				return;
			}

			v.codeMirror.preview = preview.eq(i);
			v.codeMirror.preview.html(v.codeMirror.getValue());

			v.codeMirror.on("change", function() {		// 소스코드가 변경된 경우 preview에 출력
				clearTimeout(v.codeMirror.timer);
				v.codeMirror.timer = setTimeout(function() {
					v.codeMirror.preview.html(v.codeMirror.getValue());
				}, 300);
			});
		});

	}
};


// call function
jQuery(function(){

	// SyntaxHighlighter
//	SyntaxHighlighter.config.bloggerMode = true;
//	SyntaxHighlighter.defaults['toolbar'] = false;
//	SyntaxHighlighter.all();

	//CodeMirror
	HtmlEditor.create(".code-editor", ".code-preview");
	HtmlEditor.create(".code", ".code-no-preview");

	// static
	progressList();
	imageList();
	globalNavigation();
});

//접속 핸드폰 정보
var userAgent = navigator.userAgent.toLowerCase();

//모바일 홈페이지 바로가기 링크 생성
if(userAgent.match('iphone')) {
	document.write('<link rel="apple-touch-icon-precomposed" href="/res/images/favicon.png" />');
	document.write('<meta name="viewport" content="user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width" />');

} else if(userAgent.match('ipad')) {
	document.write('<link rel="apple-touch-icon-precomposed" href="/res/images/favicon.png" />');
	document.write('<meta name="viewport" content="user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width" />');

} else if(userAgent.match('android')) {
	document.write('<meta name="viewport" content="user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width, target-densitydpi=medium-dpi" />');

}













