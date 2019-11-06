/**
 * ui Script
 * --------------------------------
 */

// owl-carousel 대응 (jquery 3.0에서 Deprecated된 이벤트 추가)
jQuery.fn.andSelf= $.fn.addBack;
jQuery.fn.load = $.fn.ready;


(function(exports, $){
	var exports = exports;


	$(document).ready(function() {

		// GBN json 로드
		// jsonLoad();

		// uniform 등록
		// uniformInit();

		// tab large 나누기
		// tabLargeDivide(); // table-layout으로 대체

		// datepicker 등록
		// datepickerInit();

		// Selectric 가동
		// selectricInit();

		// 이벤트팝업 컨트롤
		noticeEventLayerPopupFn();

		// 모바일 네비게이션 작동
		mobileGnbSlide();

		// pc검색영역 작동
		headerSearchDesktop();

		// mobile검색영역 작동
		headerSearchMobile();

		// header notice 연동
		headerNoticeBarFn();

		// 고객센터 사이드바
		csCenterSidebarToggle();

		// 고객센터 사이드바 모바일 토글
		csSidebarMobileFolding();

		// 모바일화면 버튼 스킵
		buttonSkip();

		// 스킵링크 등록
		skipLinkInit();

		// 아코디언 등록
		accordionInit();

		// ballon popup 등록
		ballonBtn();

		// submain(case_01_carousel_01)
		// case_01_carousel_01();

		// submain(case_01_carousel_02)
		// case_01_carousel_02();

		// submain(case_01_2depth_menu)
		// case_01_2depth_menu();

		// submain(customize_selectric)
		// submain_customize_selectric();

		// DetailPage(제품 섬네일 carousel)
		// detail_page_thumbnail();

		// DetailPage(제품 섬네일 carousel2)
		// detail_page_thumbnail2();

		// DetailPage(슬라이드 동영상 action)
		// detail_page_movie_play();

		// DetailPage(인스타 섬네일)
		// detail_instar_thumbnail();

		// DetailPage(모바일 탭 토글)
		// detail_mobile_toggle_tab();

		// DetailPage(PC hash 스크롤)
		// hash_link_scroll();

		// 제품 리스트 사이드(filter toggle)
		product_list_side_nav_filter();

		// 제품 리스트 사이드(side toggle)
		product_list_side_nav_toggle();

		// 제품 리스트 사이드(side toggle mobile)
		product_list_side_nav_mobile();

		// DetailPage(색상 선택)
		detail_page_color_choice();

		// 주문서 작성(도움말 레이어 팝업)
		exPointCircleToggle();

		// 장바구니 사이드 스크롤 에니메이션
		basketSideBox();
		// basketSideBox_02();

		// 장바구니(쇼핑혜택/쿠폰)
		eventNcouponSelect();

		// header 최근본상품 layer popup (모바일)
		headerMobileVerPopup();

		// header layerpopup slide
		// verticallitySlide();

		// 이벤트 상세
		// event_01_carousel_01();

		// 매장안내(PC 토글 버튼)
		shop_pc_side_toggle();

		// 매장안내(검색어 초기화버튼 기능)
		shop_search_txt_del();

		// 매장안내(모바일 tab)
		shop_search_mob_tab();

		// 주문서 작성(쿠폰 & 포인트 선택)
		checkBtn_on_new();

		// 제품상세 제품평으로 이동하는 앵커 에니메이션
		detail_produc_reply_anc();

		// header 띠배너 수직 슬라이드
		header_band_banner();
	});


	/****************
	****************
	* 공통함수 JS
	****************
	****************/

	/*
	 * _________form 유효성체크.
	 */
	// 전화번호 체크.
	function telNum_check() {
		$(".js-tel-check").keyup(function (event) {
			var regexp = /[^0-9]/gi; // 한글입력 시.
			var regexp_f = /\d\d\d\d{2,4}/gi; // 숫자 4자리 넘게 기입 시.

			var v = $(this).val(); // formBox 입력값.

			// 숫자입력 가능하도록 처리.
			if (regexp.test(v)) {
				alert("숫자만 입력가능 합니다.\n-(하이픈)을 제외한 숫자만 입력하여 주세요.");
				$(this).val(v.replace(regexp, ''));
			}

			// 숫자입력 제한 (4자리) - maxlength로도 제한 가능.
			if (regexp_f.test(v)) {
				alert("숫자는 4자리까지만 입력가능 합니다.");
				$(this).val(v.replace(regexp_f, ''));
			}
		});
	}

	// 영문만 입력 가능
	function eng_check() {
		$(".js-eng-check").keyup(function(e) {
			reg = /[^a-zA-Z]/gi;
			v = $(this).val();
			if (reg.test(v)) {
				$(this).val(v.replace(reg, ''));
				$(this).focus();
			}
		});
	}

	// 한글만 입력 가능 (예 : 이름입력)
	function kor_check() {
		$(".js-kor-check").keyup(function(e) {
			regexp = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
			v = $(this).val();
			if (regexp.test(v)) {
				alert("실명을 입력하여 주세요\n한글만 입력가능 합니다.");
				$(this).val(v.replace(regexp, ''));
			}
		});
	}




	/*
	 * _________UI Script.
	 */
	// datepicker JS
	function images_MAP_responsive () {
		var mapTag = $("map");

		if( mapTag.length ) {
			$("map").imageMapWeaver();
		}
	}




	/*
	 * _________UI Script.
	 */
	// datepicker JS
	function datepicker_js() {
		/* 기본 달력 */
		if($('.datepicker').length) {
			$( ".datepicker" ).datepicker({
				dateFormat: 'yy.mm.dd',
				prevText: '이전 달',
				nextText: '다음 달',
				monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
				monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
				dayNames: ['일','월','화','수','목','금','토'],
				dayNamesShort: ['일','월','화','수','목','금','토'],
				dayNamesMin: ['일','월','화','수','목','금','토'],
				showMonthAfterYear: true,
				changeMonth: false,
				changeYear: false,
				yearSuffix: '년'
			});
		}
	}


	// select 꾸며주는 JS
	function select_Make_js() {
		var select = $('.mk-select select');
		select.change(function(){
			var select_name = $(this).children('option:selected').text();
			$(this).siblings("label").text(select_name);
		});
	}

	// radio, checkbox JS
	function formCheck_Modify_js() {
		$('.checkModify-js').on('change', 'input', function() {
			var type = $(this).attr('type');
			var thisCheck = $(this).is(':checked');

			switch (type) {
				case "radio":
					// radio
					$(this).parents('.checkModify-js').find('.mk-fromput').removeClass('checked');
					if (thisCheck == true) {
						$(this).parents('.mk-fromput').addClass('checked');
					}
					break;


				case "checkbox":
					// checkbox script
					if (thisCheck == true) {
						$(this).parents('.mk-fromput').addClass('checked');
					}else{
						$(this).parents('.mk-fromput').removeClass('checked');
					}
					break;
			}
		});
	}

	// file_name js
	function file_name_js() {
		$('.form-file-js input[type=file]').change(function(e){
			$(this).parents('.form-file-js').find('input[type=text]').val(e.target.files[0].name);

			console.log(e.target.files[0].name);
		});
	}

	// tab
	function standard_tab() {
		$('.js-standard-tab .tab').find('a').on('click', function(e) {
			var $this = $(this);
			var $all_tab_nav = $this.parents('.tab').find('li');
			var $tab_contents = $this.parents('.tabmenu-wrap').find('.con-box');
			var id = $this.attr('href');

			e.preventDefault();
			$all_tab_nav.removeClass('on');
			$this.parent().addClass('on');
			$tab_contents.hide();
			$(id).show();
		});
	}






















	function uniformInit () {
		$('input[type="checkbox"], input[type="radio"], input[type="file"]').uniform({
			fileDefaultHtml: '',
			fileButtonHtml: '찾아보기'
		});
	}

	function tabLargeDivide () {
		var $tabLarges = $('.tab.large');

		$.each($tabLarges, function(i) {
			var $tab = $tabLarges.eq(i);
			$tab.addClass('child-'+$tab.children('li').length);
		})
	}

	function datepickerInit () {
		// var $datepicker = $('.datepicker-input');

		// if (!$datepicker.length) return;
		// $datepicker.datepicker({
		// 	format: 'yyyy.mm.dd',
		// 	autoHide: true,
		// 	date: new Date()
		// });
	}

	function selectricInit () {
		$('.select-tric').selectric();
		$('.footer-language select').selectric();
	}

	// 레이어 팝업
	var targetLayer = '';
	var $targetLayer;
	var popupBase = {
		_resize: function() {
			$targetLayer = $(targetLayer);
			var w = $(window).width() / 2 - $targetLayer.width() / 2;
			var h = $(window).height() / 2 - $targetLayer.height() / 2;
			$targetLayer.css({
				'margin-left': -($targetLayer.width() / 2) + 'px',
			});
		},
		layerPopup : function(obj, act, evt, bgc) {
			'use strict'
			var $obj = obj;
			if (typeof $obj === 'string') $obj = $($obj);
			var bgcolor = bgc ? bgc : '#000';
			var opacity = 0.75;
			var zindex = 10990;
			var lzindex = 11000;
			var target = $obj.attr('href');
			var $target = $obj;
			var copyobj = $target;
			var closeBtn = $target.find('.close, .close2');
			var closeTarget = $(closeBtn).attr('href');
			var classList = $target.attr('class');
			var orinHeight = 0;
			var fixable = 'absolute';
			var ofs;
			var ofsPlus;
			$('#wrap').after(copyobj);
			var fixable = "absolute";
			var offsetOpt = false;
			if (evt == "fixable" || evt == "fixable-offset") {
				fixable = "fixed";
			}
			if (evt == "offset" || evt == "fixable-offset") {
				offsetOpt = true;
			}
			var $target = $obj;
			var w = $target.width();
			var h = $target.height();
			var ww = $(window).width();
			var wh = $(window).height();
			var dy = $('body').scrollTop();
			targetLayer = $target;
			ofs = $obj.offset();
			ofsPlus = $obj.outerHeight();
			$target.css({ 'display': 'block', 'z-index': lzindex });
			$target.css('position', fixable);

			$target.css({
				'left': '50%',
				'margin-left': -(parseInt($target.css('width')) * 0.5)
			});
			if (offsetOpt) {
				$target.css('top', ofs.top + ofsPlus);
				if (wh < h) {
				} else {
				}
			}
			if (fixable == "fixed") {
				$target.css({
				});
				$target.addClass('fixed-popup');
			}
			if (act == "dim") {
				var dim = document.createElement('div');
				dim.style.backgroundColor = bgcolor;
				dim.style.position = "fixed";
				dim.style.top = 0;
				dim.style.left = 0;
				dim.style.width = '100%';
				dim.style.height = '100%';
				dim.style.zIndex = zindex;
				dim.style.opacity = opacity;
				dim.style.filter = "alpha(opacity=" + (opacity * 100) + ")";
				dim.style.display = "block";
				dim.id = "use-global-layer";
				$('#wrap').after(dim);

			}
			$(window).bind('resize', popupBase._resize);
			$target.css({
				'opacity': 0,
				'top': 10
			});
			$target.animate({
				opacity: 1,
				top: 0
			}, 250);

			// $(closeBtn).click(function (e) {
			// 	$('body').trigger('layerpop_close_alert');

			// 	e.preventDefault();
			// 	$target.css({ 'display': 'none', 'z-index': 0 });
			// 	$('#use-global-layer').css('height', 0);
			// 	$('#use-global-layer').remove();
			// 	targetLayer = '';
			// });

			$(closeBtn).off('click').on('click', function(e){
				$('body').trigger('layerpop_close_alert');

				e.preventDefault();
				$target.css({ 'display': 'none', 'z-index': 0 });
				$('#use-global-layer').css('height', 0);
				$('#use-global-layer').remove();
				targetLayer = '';
			});
		},
		popupCloseAllFn : function() {
			'use strict'

			$.each( $('.layer-popup'), function() {
				popupBase.closePopup($(this));
			} )
		},
		closePopup : function(obj) {
			var $tg = obj ? obj : $(targetLayer) ;
			$tg.css({ 'display': 'none', 'z-index': 0 });
			$('#use-global-layer').css('height', 0);
			$('#use-global-layer').remove();
			targetLayer = '';
		}
	};

	// 이벤트 레이어 팝업
	function noticeEventLayerPopupFn () {
		var $eventPopup = $('.notice-event-layer-popup');
		var $eventPopupClose = $eventPopup.find('.popup .close');
		$eventPopupClose.on({
			'click': function(e) {
				e.preventDefault();

				var $this = $(this);
				$this.parents('.popup').remove();
				if ( !$eventPopup.find('.popup').length ) $eventPopup.remove();
			}
		})
	}

	// 모바일 네비게이션 작동
	function mobileGnbSlide () {
		var $btn = $('.sticky-header-wrapper-mobile .menu-toggler');
		var $closeBtn = $('.main-navigation-mobile .main-navigation-close');
		var $mobileNavi = $('.main-navigation-mobile');

		$btn.on('click', function(e) {
			e.preventDefault();
			$mobileNavi.addClass('active');
		});
		$closeBtn.on('click', function(e) {
			e.preventDefault();
			$mobileNavi.removeClass('active');
		});
	}

	function headerSearchDesktop () {
		var $searchArea = $('.search-area');
		var $btn = $searchArea.find('.toggle-box');
		var $input = $searchArea.find('.search-input-area');
		var $inputText = $input.find('.input-wrapper input');
		var $inputClear = $input.find('.input-wrapper .search-input-clear');
		var $inputEl = $input.find('.input-wrapper *');
		var interval;

		$btn.on('click', function(e) {
			e.preventDefault();
			$input.show();
			$inputText.focus();
		});
		$inputClear.on('click', function(e) {
			e.preventDefault();
			$inputText[0].value = '';
			$inputText.focus();
		})
		$inputEl.on({
			'focus': function(e) {
				clearTimeout(interval);
			},
			'blur': function(e) {
				interval = setTimeout(function() {
					$inputText[0].value = '';
					$input.hide();
				}, 100);
			}
		});
	}

	function headerSearchMobile () {
		var $btn = $('.search-toggler.toggler');
		var $searchArea = $('.header-search-mobile');
		var $input = $searchArea.find('.input-wrapper');
		var $inputText = $input.find('input');
		var $inputClear = $input.find('.search-input-clear');
		var $inputEl = $input.find('*');
		var interval;

		$btn.on('click', function(e) {
			e.preventDefault();
			$searchArea.show();
			$inputText.focus();
		});
		$inputClear.on('click', function(e) {
			e.preventDefault();
			$inputText[0].value = '';
			$inputText.focus();

			// 170827 검색창닫기기능 추가
			$searchArea.hide();
		})
		$inputEl.on({
			'focus': function(e) {
				clearTimeout(interval);
			},
			'blur': function(e) {
				interval = setTimeout(function() {
					$inputText[0].value = '';
					$searchArea.hide();
				}, 100);
			}
		});
	};

	function headerNoticeBarFn () {
		var $headerNoticeBar = $('.header-login-notice-bar');
		if (!$headerNoticeBar.length) return;

		var $headerNoticeClose = $headerNoticeBar.find('.btn.close');
		var $noticeSpacer = $('.header-notice-spacer');
		var $headerPopupWrap = $('.header-gnb-layer-popup-wrap');
		var $headerMobile = $('.sticky-header-wrapper-mobile');
		var $headerMobileNav = $('.main-navigation-mobile');

		noticeSync();

		$headerNoticeClose.on({
			'click': function(e) {
				e.preventDefault();
				$headerNoticeBar.animate({'height':0 }, {
					duration: 250,
					progress: noticeSync
				});
				// $noticeSpacer.animate({'height':0 }, 250);
				// $headerPopupWrap.animate({'top':0 }, 250);
				// $headerMobile.animate({'top':0 }, 250);

				$(window).off({
					'resize': noticeSync
				});
			}
		})
		$(window).on({
			'resize': noticeSync
		});

		function noticeSync () {
			headerNoticeBarHeightSync($headerNoticeBar, $noticeSpacer, $headerPopupWrap, $headerMobile, $headerMobileNav);
		}
	}
	function headerNoticeBarHeightSync (bar, spacer, wrap, mobile, mobileNav) {
		// var $bar = bar;
		// var $spacer = spacer;
		// var $wrap = wrap;
		// var $mobile = mobile;


		spacer.css('height', bar.outerHeight());
		wrap.css({
			'top': bar.outerHeight(),
			'padding-bottom': bar.outerHeight()
		});
		mobile.css({
			'top': bar.outerHeight()
		});
		mobileNav.css({
			'padding-top': bar.outerHeight()
		});
	}

	function csCenterSidebarToggle() {
		var $fiterNav = $('.js-filter-nav');
		var $toggleBtn = $fiterNav.find('.cs-sidebar-btn');
		var $toggleList = $fiterNav.find('.cs-sidebar-div');

		$toggleBtn.on('click', function(){
			var btn = $(this);
			var li = btn.parent();
			btn.next('.cs-sidebar-div').slideToggle(function(){
				var onCheck = li.hasClass('on');

				if( onCheck === false ){
					li.addClass('on');
				}else{
					li.removeClass('on');
				}
			});
		});
	}

	function csSidebarMobileFolding () {
		var $grouping = $('.cs-sidebar-grouping-btn');
		var $toggleBtn = $grouping.find('.btn');
		var $toggleBox = $('.cs-sidebar-grouping-btn').next();
		$toggleBtn.on({
			'click': function(e) {
				e.preventDefault();
				$toggleBox.slideToggle(250, function() {
					$toggleBtn.toggleClass('on');
				});
			}
		});
	}

	// 스킵링크 등록
	function skipLinkInit () {
		var $links = $('.tab.skip-link');

		$.each($links, function(i) {
			var $link = $links.eq(i);
			var $first = $link.children('li.on');
			if (!$first.length) {
				$first = $link.children().first();
				$first.addClass('on');
			}
			skipContentChange($first);
			$link.find('a').on('click', function(e) {
				e.preventDefault();
				skipContentChange($(this).parent('li'));
			})
		});

		function skipContentChange (btn) {
			var $btn = btn;
			var href = $btn.children('a').attr('href');
			$btn.addClass('on').siblings().removeClass('on');
			$(href).show().siblings().hide();
		}
	}

	// 20170719 수정
	function accordionInit () {
		var $accordionLists = $('.cs-faq-content-list');
		var $btn = $accordionLists.find('.faq-title > a');
		$('body').on('click', '.cs-faq-content-list .faq-title > a, .cs-faq-content-list .faq-title i', function(e) {
			e.preventDefault();
			var $this = $(this);
			var $title = $this.parent();
			$title.next().slideToggle();
			$title.toggleClass('on');
		})
	}

	function ballonBtn () {
		var $btns = $('.ballonpopup-btn-wrap');

		$.each($btns, function(i) {
			var $wrap = $btns.eq(i);
			var $btn = $wrap.find('.btn');
			// var $content = $wrap.find('.btn');
			$btn.on({
				'click': function(e) {
					e.preventDefault();
					$btn.toggleClass('on');
				},
				'blur' : function() {
					$btn.removeClass('on');
				}
			})
		})
	}


	///////////////////////
	// 헤더 영역 레이서 팝업 스크립트 //
	///////////////////////

	// 헤더 레이어 팝업 이벤트 함수
	function buttonSkip () {
		// var $btns = $('.article.function > a, .article.member > a');
		var btn_string = '.article.function > a, .article.member > a';
		var $myBtn = $('.my-btn');
		var $viewBtn = $('.view-btn');
		var $heartBtn = $('.heart-btn');
		var $cartBtn = $('.cart-btn');
		var $loginAfterBtn = $('.cart-btn');
		var type;
		var vw = document.body.clientWidth;

		function heder_pop_e_click(e) {
			var $btn = $(this);

			if ( $btn.hasClass('loginadmin') && !$btn.hasClass('on') ) {
				e.preventDefault;
				personalModalPopup(vw, 'loginadmin');
			}
		}

		// 개발
		// $('body').on({
		// 	'view_mouse_enter' : function() {
		// 		// $('body').css('background', 'red');
		// 		alert('ddd');
		// 	}
		// });

		function heder_pop_e_enter(e) {
			var $btn = $(this);

			if ( $btn.hasClass('my-btn') ) {
				personalModalPopup(vw, 'my-btn');
			} else if ( $btn.hasClass('view-btn') && !$btn.hasClass('on') ) {
				$('body').trigger('latest_view_mouse_enter');
				personalModalPopup(vw, 'view-btn');
			} else if ( $btn.hasClass('heart-btn') ) {
				personalModalPopup(vw, 'heart-btn');
			} else if ( $btn.hasClass('cart-btn') && !$btn.hasClass('on') ) {
				$('body').trigger('basket_view_mouse_enter');
				personalModalPopup(vw, 'cart-btn');
			}
		}

		$('body').on({
			'click': heder_pop_e_click,
			'mouseenter': heder_pop_e_enter
		}, btn_string);

		// $('.article.function > a, .article.member > a').on({
		// 	'click': heder_pop_e_click,
		// 	'mouseenter': heder_pop_e_enter
		// });


		// $('.article.function > a, .article.member > a').trigger('mouseenter', text_alert);

		function text_alert() {
			// console.log('dddd');
		}


		function resize_client_wid() {
			vw = document.body.clientWidth;
		}

		$(window).on({
			'resize': resize_client_wid
		});
	}

	// 헤더 버튼영역 구분 함수
	function personalModalPopup (vw, key) {
		var vw = vw; // 클라이언트 width.
		var key = key; // 클래스 명.

		// PC 일때 실행
		if ( vw >= 1080 ) {
			switch (key) {
				case "loginadmin" :
					// 로그인 아이디
					headerPOP_controll('.hd-me-member-infor-popup', key);
					randomClickPOP_close('.hd-me-member-infor-popup', key);
					break;

				case "my-btn" :
					// 개인정보
					break;

				case "view-btn" :
					// 최근 본 상품
					headerPOP_controll('.hd-me-latest-infor-popup', key);
					randomClickPOP_close('.hd-me-latest-infor-popup', key);
					break;

				case "heart-btn" :
					// 위시리스트
					break;

				case "cart-btn" :
					// 장바구니
					headerPOP_controll('.hd-me-shopbasket-infor-popup', key);
					randomClickPOP_close('.hd-me-shopbasket-infor-popup', key);
					break;
			}
		}
	}

	// 헤더 팝업 On, Off 컨트롤 함수.
	function headerPOP_controll( popup_box, btn ) {
		var popClass = popup_box
		var $header_OR_dim = $('.header-gnb-layer-popup-wrap, .header-laypop-dim')
		var popList_img = $(popClass).find('.pic img');

		$header_OR_dim.hide();


		$( popClass ).stop().fadeIn(500, fade_in_view);
		$('.header-laypop-dim' ).stop().fadeIn(500);

		function fade_in_view() {
			var $openPopup = $(this);
			var $btn_Add_Class = $('.' + btn);

			$('.article.function > a, .article.member > a').removeClass('on');

			$btn_Add_Class.addClass('on');

			// 데이터 영역


			verticallitySlide( popClass );

			$('.hd-g-pop-close').on( 'click', closeBtn_ac );

			function closeBtn_ac(e) {
				e.preventDefault();
				$openPopup.fadeOut(500);
				$('.header-laypop-dim' ).stop().fadeOut(500);
				$btn_Add_Class.removeClass('on');
				$('.hd-g-pop-close').off('click', closeBtn_ac);
			}
		}
	}

	// 헤더 팝업을 제외하고 클릭시 none 처리 함수.
	function randomClickPOP_close( popup_area, btn ) {
		var popClass = popup_area;
		var $btn_Add_Class = $('.' + btn);

		$('body').on( 'click', dim_click_close );

		function dim_click_close(e) {
			var $dimTarget = $(e.target).is('.header-laypop-dim');
			if( $dimTarget === true ){

				$( popClass + ', ' + '.header-laypop-dim' ).fadeOut(500);
				$btn_Add_Class.removeClass('on');

			}
		}
	}

	// header 최근본상품 layer popup (모바일)
	function headerMobileVerPopup () {
		var $headerMobileWrap = $('.sticky-header-mobile');
		var $latestBtn = $headerMobileWrap.find('.view-toggler');

		$('body').trigger('latest_view_mouse_enter');

		$latestBtn.on({
			'click':  function() {
				$('.hd-me-latest-infor-popup, .header-laypop-dim').fadeIn(500, function(){
					var $openPopup = $(this);

					// 데이터 영역

					verticallitySlide( '.hd-me-latest-infor-popup' );

					$('.hd-g-pop-close').on('click', function(){
						$openPopup.fadeOut(500);
					});
				});

				function hd_target_popup_off() {
					$('body').on('click', function(e){
						var $dimTarget = $(e.target).is('.header-laypop-dim');
						if( $dimTarget === false ){
							return false;
						}else{
							$('.hd-me-latest-infor-popup, .header-laypop-dim').fadeOut(500);
						}
					});
				}
			}
		});

		$(window).on({
			'resize': function() {

				vw = document.body.clientWidth;

				var latestPopCheck = $('.hd-me-latest-infor-popup').css('display');
				var hdAllPopCheck = $('.header-gnb-layer-popup-wrap').css('display');

				if ( vw <= 1080 ) {
					if ( latestPopCheck == 'none' ) {
						$('.header-laypop-dim').hide();
						$('.header-gnb-layer-popup-wrap').hide();
					}else{
						$('.header-laypop-dim').show();
					}
				}
			}
		});
	}

	/////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////


	///////////////////////////////////////
	// 헤더 레이어 팝업 (장바구니, 최근 본 상품) 수직 슬라이드 //
	///////////////////////////////////////

	function verticallitySlide ( target_slide ) {
		var $slide_Wrap = $( target_slide ) // 슬라이드 시작 영역
			,$slide_Box = $slide_Wrap.find('.hd-g-my-see-in') // hidden div (ul 감싸고 있는 div)
			,$slide_Ul = $slide_Wrap.find('.see-ul') // ul 영역
			,$slide_List = $slide_Wrap.find('.see-ul').children('li') // li 영역
			,$slide_up = $slide_Wrap.find('.hd-g-see-contr-btn').children('.up')
			,$slide_down = $slide_Wrap.find('.hd-g-see-contr-btn').children('.down')

			,$slide_Box_Height = $slide_Box.innerHeight() // 리스트 감싸고 있는 div 높이
			,list_Height = $slide_List.outerHeight() // 리스트 높이(패딩까지)
			,list_Length = $slide_List.length // 리스트 갯수
			,list_Total_Hei = list_Height * list_Length // 리스트 총 높이
			,list_wrap_Height = 0
			,list_wrap_updown = 0
			,move_Val = 0;

		$slide_Ul.height(list_Total_Hei - 2);

		var load_slide_height = $slide_Ul.height();

		if($slide_Box_Height < load_slide_height) {
			$slide_down.addClass('on');
		}

		eventSlide();

		// 이벤트
		function eventSlide() {

			$slide_up.off('click').on( 'click', clickUp );
			$slide_down.off('click').on( 'click', clickDown );

		}

		// up 클릭 정의
		function clickUp() {

			if ( $slide_Box_Height > load_slide_height ) { return list_wrap_updown = 0; }

			if ( list_wrap_updown >= 0 ) { return list_wrap_updown = 0; }

			list_wrap_updown += list_Height;

			slideAnimation();

		}

		// down 클릭 정의
		function clickDown() {

			if ( $slide_Box_Height > load_slide_height ) { return false; }

			list_wrap_updown -= list_Height;

			if ( list_wrap_updown < ($slide_Box_Height - list_Total_Hei) ) { return list_wrap_updown = $slide_Box_Height - list_Total_Hei + 2; }


			slideAnimation();

		}

		// 에니메이션 정의
		function slideAnimation() {

			var vertical_slide_end = load_slide_height - (list_Height * 3) + 2;
			var vertical_slide_val = Math.abs(list_wrap_updown);

			$slide_Ul.animate({ top: list_wrap_updown }, 200);


			if ( list_wrap_updown < 0 ){

				$slide_up.addClass('on');

			}else{

				$slide_up.removeClass('on');

			}

			if ( vertical_slide_val === vertical_slide_end ) {
				$slide_down.removeClass('on');
			}else{
				$slide_down.addClass('on');
			}
		}

	}
	/////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////


	// submain
	//
	function whatsHotMyhomeCarouselDestroy () {
		$('.js-carousel-product-list.slick-slider').slick('unslick');
	}
	function whatsHotMyhomeCarouselRefreash () {
		case_01_carousel_01();
	}
	function case_01_carousel_01 () {
		if ($('.js-carousel-product-list').hasClass('slick-slider')) return;
		$('.js-carousel-product-list').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}

			}, {
				breakpoint: 600,
				settings: {
					swipeToSlide: true,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}, {
				breakpoint: 330,
				settings: {
					swipeToSlide: true,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}]
		});
	}

	function case_01_carousel_02 () {
		$('.js-detail-recommend-list').slick({
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}

			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					dots: true
				}
			}, {
				breakpoint: 330,
				settings: {
					slidesToShow: 1,
					dots: true
				}
				// settings: "unslick" // destroys slick
			}]
		});
	}

	function case_01_2depth_menu () {
		function list_num_cont() {
			var subcate_leng = $('.submain-cate-menu-ul').children('.submain-cate-menu-li').length;

			if( subcate_leng > 5 ){
				return subcate_leng = 5;
			}else{
				return subcate_leng;
			}
		}

		$('.submain-cate-menu-ul').slick({
			infinite: false,
			slidesToShow: list_num_cont(),
			slidesToScroll: 1,
			arrows: true
		});
	}

	function submain_customize_selectric () {
		$('.custom-mobile-select-wrap').selectric({
			maxHeight: 200,
			nativeOnMobile: false
		});
	}

	function detail_page_thumbnail () {
		var $orderDtail_mainSlick = $('.detail-thum-big').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			swipeToSlide: true,
			asNavFor: '.detail-thum-small',
			responsive: [
				{
					breakpoint: 1080,
					settings: {
						arrows: true
					}
				}

			]
		});

		var orderDtail_subSlick = $('.detail-thum-small').slick({
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 2,
			asNavFor: '.detail-thum-big',
			swipeToSlide: true,
			dots: false,
			// swipeToSlide: true,
			// centerMode: true,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 1080,
					settings: {
						dots: true
					}
				}

			]
		});


	}

	function detail_page_thumbnail2 () {
		var $detailThumbBanner = $('.owl-carousel-detail-thumb');
		$detailThumbBanner.owlCarousel({
			items:3,
			loop:false,
			dots:false,
			nav:true
			// center: true
		});

		// type_01
		var $detailMainBanner = $('.owl-carousel-detail-main');
		$detailMainBanner.owlCarousel({
			items:1,
			loop:false,
			// margin:10,
			video:true,
			// URLhashListener:true,
			autoplayHoverPause:true,
			// startPosition: 'URLHash',
			responsive:{
				0:{
					nav:true
				},
				1080:{
					dots:true
				}
			},
			// callback
			onChange: function(e) {
				$detailMainBanner.find('.owl-item.active iframe').remove();
			},
			onChanged: function(e) {
				var syncIndex = e.item.index;
				var $this = $(this);
				detailThumbSync(syncIndex);
				$detailThumbBanner.trigger('to.owl.carousel', [syncIndex]);

				/*
				var $dim = $detailMainBanner.find('.owl-item.active .iframe-moving-dim');
				if ($dim.length) {
					var src = $dim.attr('data-src');

					// var $iframe = $("<iframe src='' frameborder='no' scrolling='no' marginwidth='0' marginheight='0' allowfullscreen></iframe>");
					var $iframe = $(src);
					// $iframe.attr('src', src);
					$dim.parents('.thum-in-hei-pd').append($iframe);
				}
				*/

			}
			,onInitialized : function(){
				carouselMovDotsConvert(this.$element);
			}
			// ,onInitialized : function(e){

			// 	var $slide = $detailMainBanner.find('.owl-stage-outer .owl-stage').children('.owl-item');

			// 	$slide.each(function(e){
			// 		var movie_Index = $(this).find('.iframe-moving-dim').css('display', 'none');
			// 		console.log(movie_Index);

			// 	});
			// }
		});

		// type_02
		var $detailMainBanner_02 = $('.owl-carousel-detail-main_02');
		$detailMainBanner_02.owlCarousel({
			items:1,
			loop:false,
			// margin:10,
			video:true,
			// URLhashListener:true,
			autoplayHoverPause:true,
			// startPosition: 'URLHash',
			responsive:{
				0:{
					nav:true
				},
				1080:{
					dots:true
				}
			},
			// callback
			onChange: function(e) {
				$detailMainBanner_02.find('.owl-item.active iframe').remove();
			},
			onTranslated : function(e) {
				var syncIndex = e.item.index;
				var $this = $(this);
				detailThumbSync(syncIndex);
				$detailThumbBanner.trigger('to.owl.carousel', [syncIndex]);
				var $dim = $detailMainBanner_02.find('.owl-item.active .iframe-moving-dim');
				if ($dim.length) {
					var src = $dim.attr('data-src');

					// var $iframe = $("<iframe src='' frameborder='no' scrolling='no' marginwidth='0' marginheight='0' allowfullscreen></iframe>");
					var $iframe = $(src);
					// $iframe.attr('src', src);
					$dim.parents('.thum-in-hei-pd').append($iframe);
				}

			},
			onInitialized : function(){
				var $dim = $detailMainBanner_02.find('.owl-item.active .iframe-moving-dim');
				if ($dim.length) {
					var src = $dim.attr('data-src');
					// var $iframe = $("<iframe src='' frameborder='no' scrolling='no' marginwidth='0' marginheight='0' allowfullscreen></iframe>");
					var $iframe = $(src);
					// $iframe.attr('src', src);
					$dim.parents('.thum-in-hei-pd').append($iframe);
				}

				carouselMovDotsConvert(this.$element);
			}
		});

		var $thumbItems = $('.owl-carousel-detail-thumb .owl-item');

		// type_01
		$.each($thumbItems, function(i) {
			var $btn = $thumbItems.eq(i);
			$btn.attr('orderd', i);
			$btn.on({
				'click': $.proxy(function(e) {
					$detailMainBanner.trigger('to.owl.carousel', [this.attr('orderd')]);
				}, $btn)
			})
		});

		// type_02
		$.each($thumbItems, function(i) {
			var $btn = $thumbItems.eq(i);
			$btn.attr('orderd', i);
			$btn.on({
				'click': $.proxy(function(e) {
					$detailMainBanner_02.trigger('to.owl.carousel', [this.attr('orderd')]);
				}, $btn)
			})
		});

		function detailThumbSync(i) {
			var $items = $('.owl-carousel-detail-thumb').find('.owl-item');
			var t = $items.length;
			var i = (i == 0) ? t : i ;
			var tg = i%t;


			$items.eq(tg).addClass('sync').siblings().removeClass('sync');
		}

		function carouselMovDotsConvert (el) {
			var $el = el;
			var $items = $el.find('.owl-item');
			var $dots = $el.find('.owl-dots .owl-dot');

			$.each($items, function(i) {
				var $item = $items.eq(i);
				if ( $item.find('.iframe-moving-dim').length ) {
					$dots.eq(i).addClass('mov-btn');
				}
			})
		}
	}

	function detail_page_movie_play () {
		$('.iframe-moving-playbtn').click(function(e) {
			e.preventDefault();
			var $btn = $(this);
			var src = $btn.attr('data-src');

			// var $iframe = $("<iframe src='' frameborder='no' scrolling='no' marginwidth='0' marginheight='0' allowfullscreen></iframe>");
			var $iframe = $(src);
			// $iframe.attr('src', src);
			$btn.parents('.thum-in-hei-pd').append($iframe);
		});
	}

	// detail
	function detail_instar_thumbnail () {
		$('.instar-thum-ul').slick({
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			arrows: true,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}

			}, {
				breakpoint: 600,
				settings: {
					centerMode: true,
					swipeToSlide: true,
					slidesToShow: 1
				}
			}, {
				breakpoint: 330,
				settings: {
					centerMode: true,
					swipeToSlide: true,
					slidesToShow: 1
				}
			}]
		});
	}

	function detail_mobile_toggle_tab () {
		var $toggleTabBtn = $('.product-detail-h3-accordion');

		var toggleTabFnc = function() {
			var $this = $(this);
			var $toggleContent = $this.parent().find('.product-detail-area');

			var open = $toggleContent.height();
			var el = $toggleContent,
				curHeight = el.height(),
				autoHeight = el.css('height', 'auto').height();

			if( open === 0 ){
				el.height(curHeight).animate({height: autoHeight}, 500);
				$this.addClass('on');
				setTimeout(function(){
					el.css('height', 'auto');
				}, 501);
			}else{
				el.animate({height: 0}, 500);
				$this.removeClass('on');
			}
		}

		$toggleTabBtn.on('click', toggleTabFnc);
	}

	function hash_link_scroll () {
		$(".product-detail-tab a").click(function(event){
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top - 133}, 500);
		});
	}

	function amountCheckPut(maxNum, target) {
		var $jsWrap = $('.js-amount_check');
		var $eaPut = target;
		var put_Val = $eaPut.val();

		if( put_Val === "" ) {
			return false;
		}
		if( put_Val <= 1 ) {
			$jsWrap.children('a').removeClass('stop');
			$jsWrap.find('.minus').addClass('stop');
			return false;
		}
		if( put_Val >= maxNum ) {
			$jsWrap.children('a').removeClass('stop');
			$jsWrap.find('.plus').addClass('stop');
			return false;
		}
		if( put_Val < maxNum && put_Val >= 1 ) {
			$jsWrap.children('a').removeClass('stop');
			return false;
		}
	}

	// 제품상세 수량 체크
	function amountCheckMinus(minNumber, target) {
		var $target = target;
		var $parent_div = $target.parent('div');
		var stat = $parent_div.find('.ea').val();
		// var num = parseInt(stat,10);

		stat--;

		if(stat <= minNumber){
			var minBool =  $parent_div.find('.minus').hasClass('stop');
			if ( minBool == true ) {
				alert('최소 수량 1개 이상을 입력하셔야 합니다.');
				return false;
			}
			$parent_div.find('.minus').addClass('stop');
			stat = minNumber;
		}else{
			$parent_div.find('.plus').removeClass('stop');
		}
		$parent_div.find('.ea').val(stat);
	}
	function amountCheckPlus(maxNumber, target) {
		var $target = target;
		var $parent_div = $target.parent('div');
		var stat = $parent_div.find('.ea').val();
		// var num = parseInt(stat,10);

		stat++;

		if(stat >= maxNumber){
			var maxBool =  $parent_div.find('.plus').hasClass('stop');
			if ( maxBool == true ) {
				alert('1회 최대 '+ (stat - 1) +'개까지 구매 가능합니다.');
				return false;
			}
			$parent_div.find('.plus').addClass('stop');
			stat = maxNumber;
		}else{
			$parent_div.find('.minus').removeClass('stop');
		}
		$parent_div.find('.ea').val(stat);
	}

	// 제품 리스트 사이드(filter toggle)
	function product_list_side_nav_filter() {
		var $fiterNav = $('.js-filter-nav');
		var $toggleBtn = $fiterNav.find('.side-filter-btn');
		var $toggleList = $fiterNav.find('.side-filter-div');

		$toggleBtn.on('click', function(){
			$(this).next('.side-filter-div').slideToggle(function(){
				var onCheck = $(this).parent().hasClass('on');

				if( onCheck === false ){
					$(this).parent().addClass('on');
				}else{
					$(this).parent().removeClass('on');
				}
			});
		});
	}

	function product_list_side_nav_toggle() {
		var $NavBtnWrap = $('.js-list-nav-toggle');
		var $navBtn = $NavBtnWrap.find('.filter-open-btn-pc');

		var sideNavTg = function(e) {
			e.preventDefault();
			var $this = $(this);
			var $toggleContent = $this.parent().find('.product-detail-area');

			var open = $('.side-filter-box').width();
			var el = $('.side-filter-box'),
				curHeight = el.width();
				// autoHeight = el.css('width', 'auto').width();

			if( open === 0 ){
				el.animate({width: 255}, 500);
				$this.removeClass('on');
			}else{
				el.animate({width: 0}, 500);
				$this.addClass('on');
			}
		}

		$navBtn.on('click', sideNavTg);
	}

	function product_list_side_nav_mobile () {
		var $toggleTabBtn = $('.filter-open-btn-mobile');

		$toggleTabBtn.on('click', function(e){
			e.preventDefault();
			$('.side-filter-box').slideToggle(function(){
				var btnOff = $toggleTabBtn.offset().top;
				var header_H = $('.sticky-header-wrapper-mobile').innerHeight();

				$('html,body').animate({scrollTop:btnOff - header_H}, 200);
			});
		});
	}

	function detail_page_color_choice () {
		var $colorWrap = $('.js-color-choice');
		var $palletTitle = $colorWrap.find('.color-pallet-title .color-zone');
		var $palletList = $colorWrap.find('.color-pallet-list ul li button');

		$palletList.on('click', function(){
			var $this = $(this);
			var this_color = $this.attr('style');

			$palletTitle.attr('style', this_color);

			$palletList.parent().removeClass('on');
			$this.parent().addClass('on');
		});
	}

	// 주문서 작성(도움말 레이어 팝업)
	function exPointCircleToggle () {
		var $targetArea = $('.ex-point-area-box');
		var $exPoint = $targetArea.find('.point-ico');

		// $exPoint.on({
		// 	'click': expointLayer,
		// 	'blur': expointLayer_none
		// });

		$('body').on( 'click', '.ex-point-area-box .point-ico', expointLayer);
		$('body').on( 'blur', '.ex-point-area-box .point-ico', expointLayer_none);

		function expointLayer(e){
			$(this).parent().find('.ex-point-layer-list').toggleClass('on');
		}
		function expointLayer_none(){
			$(this).parent().find('.ex-point-layer-list').removeClass('on');
		}
	}

	// 장바구니 사이드 스크롤 에니메이션
	function basketSideBox_old_ver () {
		var animateBoxCheck = $('.js-basketSideBox').length;
		if(animateBoxCheck == 1){
			/* 공통 */
			var headerHei = $('#header').height(); // header 높이
			var contentHei = $('#content').height(); // content 높이

			var $startTarget = $('.js-basketSideBox'); // 타켓
			var $orderSheetBox = $startTarget.find('.order-sheet-left-box'); // 장바구니 내역 리스트
			var $sideQuickBox = $('.myor-side-last-order-box'); // 사이드 메뉴
			var orderSheetBoxHei = $orderSheetBox.height(); // 장바구니 내역 높이
			var sideQuickBoxHei = $sideQuickBox.height(); // 사이드 메뉴 높이
			var aniStartPosition = $sideQuickBox.offset().top; // 사이드 메뉴 좌표 높이값
			var $greenLineSoldout = $('.order-sheet-greenline-soldout-box').height(); // 품절된 제품이 있을 때 나오는 박스
			var $greenBoxhas = $('.order-sheet-greenline-soldout-box').hasClass('order-sheet-greenline-soldout-box');
			var $greenBoxCheck = ($greenBoxhas == true) ? $greenLineSoldout + 20 : 0; // 그린 박스 존재 유무에 따라 값 변경
			var $greenBoxhas = $('.true-choice-area-box').css('display');
			var $couponRdio = ($greenBoxhas == 'block') ? $('.true-choice-area-box').outerHeight() : 0; // 그린 박스 존재 유무에 따라 값 변경
			var endScrollHei = headerHei + (orderSheetBoxHei + $greenBoxCheck + $couponRdio + 115) - sideQuickBoxHei; // 스크롤 끝나는 지점

			if ( orderSheetBoxHei >= sideQuickBoxHei){
				bsAnimateFunc();
				$(this).scroll(bsAnimateFunc);

				function bsAnimateFunc() {
					var scrollVal = $(this).scrollTop(); // 윈도우 스크롤 값

					if ( scrollVal >= aniStartPosition ) {

						$sideQuickBox.stop().animate({top: scrollVal - aniStartPosition + 104 }, 500);

						if ( scrollVal >= endScrollHei ) {

							$sideQuickBox.stop().animate({top: endScrollHei - aniStartPosition + 104 }, 500);

						}

					} else{

						$sideQuickBox.stop().animate({top: 104 }, 500);

					}
				}

			}else {
				$orderSheetBox.height(sideQuickBoxHei + 35);
			}
		}
	}

	function basketSideBox() {
		var animateBoxCheck = $('.js-basketSideBox-new').length;

		if(animateBoxCheck == 1){
			var win_Hei = $(window).height();


			var $target = $('.js-basketSideBox-new'); // 타겟
			var $orderSheetIn = $target.find('.order-sheet-left-box'); // 장바구니 내역 리스트 감싼 div
			var $orderSheet_Box = $target.find('.order-sheet-write-contents'); // 주문내역 리스트
			var $side_box = $target.find('.myor-side-last-order-box'); // 사이드 박스
			var $footer_box = $('#footer'); // 사이드 박스

			var header_Hei = $('#header').height(); // header 높이
			var orderSheet_Box_Hei = $orderSheet_Box.height(); // 주문서 높이
			var side_box_Hei = $side_box.height(); // 사이드 박스 높이

			var side_box_Pos = $side_box.offset().top; // 사이드 박스 절대적 좌표 값 383
			var orderSheet_box_Pos = $orderSheet_Box.offset().top; // 사이드 박스 절대적 좌표 값
			var footer_Pos = $footer_box.offset().top; // footer 절대적 좌표 값

			// var win_Scroll_Val; // 스크롤 값 초기화
			// var start_Scroll = win_Scroll_Val - side_box_Pos + 104; // 스크롤 에니메이션 시작하는 시점
			var end_Scroll = orderSheet_box_Pos + orderSheet_Box_Hei - side_box_Hei - header_Hei; // 스크롤 에니메이션 끝나는 시점

			var not_product_check = $('.order-sheet-greenline-soldout-box').hasClass('order-sheet-greenline-soldout-box');
			var not_product_check_val = ( not_product_check == true ) ? 383 : 283 ;

			var naver_pay_check = $('.naver-pay-wrap').children().hasClass('npay_storebtn_bx') == true ? 742 : 633;
			$orderSheetIn.css('min-height', naver_pay_check);


			if ( orderSheet_Box_Hei >= side_box_Hei){
				basket_Scroll_Event2();
				$(window).scroll( basket_Scroll_Event2 );
			}
		}

		function basket_Scroll_Event() {

			var win_Scroll_Val = $(this).scrollTop(); // 스크롤 값


			// 스크롤 start if
			if ( win_Scroll_Val >= not_product_check_val ) {
				// 스크롤 값이 사이드 박스 좌표값 보다 크면
				$side_box.stop().animate({top : win_Scroll_Val - not_product_check_val + header_Hei + 104 - 68 }, 500);

				if ( win_Scroll_Val >= end_Scroll ) {
					// alert('얍');
					// 스크롤 에니메이션 끝날때
					$side_box.stop().animate({top : end_Scroll - not_product_check_val + header_Hei + 104 - 68 }, 500);  // 278은 스크롤 top 값이 시작하는 위의 높이값
				}
			} else {
				// 스크롤 값이 사이드 박스 좌표값 보다 작으면
				$side_box.stop().animate({top : 104 }, 500);
			}
		}

		function basket_Scroll_Event2() {

			var win_Scroll_Val = $(this).scrollTop(); // 스크롤 값

			// 스크롤 start if
			if ( win_Scroll_Val >= not_product_check_val ) {
				// 스크롤 값이 사이드 박스 좌표값 보다 크면
				$side_box.stop().animate({top : win_Scroll_Val + win_Hei - side_box_Hei - not_product_check_val  + 104 }, 500);

				if ( win_Scroll_Val >= end_Scroll ) {
					// alert('얍');
					// 스크롤 에니메이션 끝날때
					$side_box.stop().animate({top : end_Scroll - not_product_check_val + header_Hei + 104 }, 500);  // 278은 스크롤 top 값이 시작하는 위의 높이값
				}
			} else {
				// 스크롤 값이 사이드 박스 좌표값 보다 작으면
				$side_box.stop().animate({top : 104 }, 500);
			}
		}
	}

	// 쇼핑혜택/쿠폰 사용 체크
	function eventNcouponSelect () {
		var $jsTarget  = $('.js-shop-n-coupon');
		var $radioForm =  $jsTarget.find('.asset input[type=radio]');
		$radioForm.on('change', function(){
			var $thisCheck = $(this).parents('.asset').index();
			var $useZone = $jsTarget.find('.true-choice-area-box');

			if($thisCheck === 0) {
				$useZone.show();
				basketSideBox();
				// basketSideBox_02 = null;
				changeSideBoxHei();
				checkBtn_on();
			}else {
				$useZone.hide();
				basketSideBox();
				// basketSideBox_02 = null;
				changeSideBoxHei();
				$('.all-ranges-wrap').attr('style', false);
			}
		});
	}
	function changeSideBoxHei() {
		// $(window).load(function(){
			var sideBoxHei = $('.myor-side-last-order-box').height();
			var orderList = $('.order-sheet-left-box').height();
			// basketSideBox();
			if ( orderList <= sideBoxHei) {
				$('.all-ranges-wrap').css("margin-top", sideBoxHei - 650);
			}
		// });
	}
	function checkBtn_on() {
		var $jsTarget  = $('.js-shop-n-coupon');
		var $useCateTg = $jsTarget.find('.true-choice-area-box');
		var $useLi = $useCateTg.find('li');
		var $useRadio = $useCateTg.find('li input[type=radio]');

		$useRadio.on('change', function(){
			$useLi.removeClass('on');
			$useLi.find('.btn').attr("disabled", "disabled");
			$useLi.find('.btn').prop("disabled", true);

			$(this).parents('li').addClass('on');
			$(this).parents('label').next('.btn').removeAttr("disabled");
			$(this).parent().next('.btn').prop("disabled", false);
		});
	}
	function checkBtn_on_new() {
		var $jsTarget  = $('.js-shop-n-coupon-new');
		var $useCateTg = $jsTarget.find('.true-choice-area-box');
		var $useLi = $useCateTg.find('li');
		var $useRadio = $useCateTg.find('li input[type=radio]');

		$useRadio.on('change', function(){
			$useLi.removeClass('on');
			$useLi.find('.btn, .point-num-val').attr("disabled", "disabled");
			$useLi.find('.btn, .point-num-val').prop("disabled", true);

			$(this).parents('li').addClass('on');

			var on_check = $(this).parents('li').hasClass('on');
			var all_disable = $(this).parents('li').find('.btn, .point-num-val');

			if( on_check == true ){
				console.log('on 이다!!!');
				all_disable.removeAttr("disabled");
				all_disable.prop("disabled", false);
			}

			// var check_posi = $(this).parents('label').next().hasClass('won') ? true : false;
			// var check_posi = $(this).parents('li').hasClass('on') ? true : false;
			// var $coupon_Btn = $useLi.children('.coupon').find('.btn');
			// var $point_Btn = $useLi.children('.point').find('.btn');
			// var $point_put = $useLi.children('.point').find('.point-num-val');

			// $useLi.removeClass('on');
			// $(this).parents('li').addClass('on');

			// if( check_posi === true ){
			// 	console.log('li on');
			// 	$coupon_Btn.attr("disabled", "disabled");
			// 	$coupon_Btn.prop("disabled", true);

			// 	$point_Btn.removeAttr("disabled");
			// 	$point_Btn.prop("disabled", false);
			// 	$point_put.removeAttr("disabled");
			// 	$point_put.prop("disabled", false);
			// }else {
			// 	console.log('li off');
			// 	$coupon_Btn.removeAttr("disabled");
			// 	$coupon_Btn.prop("disabled", false);

			// 	$point_Btn.attr("disabled", "disabled");
			// 	$point_Btn.prop("disabled", true);
			// 	$point_put.attr("disabled", "disabled");
			// 	$point_put.prop("disabled", true);
			// }
		});
	}

	// 이벤트 상세
	function event_01_carousel_01 () {
		$('.js-carousel-event-list').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true
		});
	}

	// 매장안내(PC 토글 버튼)
	function shop_pc_side_toggle () {
		var $startTarget = $('.js-shop-search');
		var $btn = $startTarget.find('.ssm-detail-box').children('.place-list-toggle-btn');
		var $detail_box = $startTarget.find('.ssm-detail-box').children('.ssm-toggle-left-area-box');

		$btn.on( 'click', shopToggleAni );

		function shopToggleAni () {
			var box_open = $detail_box.width();
			// 380
			if( box_open === 0 ) {
				$detail_box.animate({width: 380}, 500);
				$(this).removeClass('close');
				setTimeout(function(){
					$('body').trigger('shop_maparea-daum');
				}, 501);
			}else {
				$detail_box.animate({width: 0}, 500);
				$(this).addClass('close');
				setTimeout(function(){
					$('body').trigger('shop_maparea-daum');
				}, 501);
			}


		}
	}

	// 매장안내(검색어 초기화버튼 기능)
	function shop_search_txt_del () {
		var $startTarget = $('.js-shop-search-write');
		var $delBtn = $startTarget.find('.sc-word-del');
		var $shop_search_put = $startTarget.find('.sc-word-put');

		$shop_search_put.on( 'keyup', write_key_eve );
		function write_key_eve () {
			var putVal = $(this).val();

			if( putVal == "" ){
				$delBtn.removeClass('on');
			}else{
				$delBtn.addClass('on');
			}
		}

		$delBtn.on( 'click', write_clear );
		function write_clear (e) {
			e.preventDefault();
			$shop_search_put[0].value = '';
			$shop_search_put.focus();
			$delBtn.removeClass('on');
		}
	}

	// 매장안내(모바일 tab)
	function shop_search_mob_tab () {
		var $tapMenu = $(".js-shop-tab li a");
		var $tabMenu_li = $tapMenu.parent();

		$tapMenu.click( shopTapEve );
		function shopTapEve(e) {
			var $this = $(this);
			var $tabMenu_li_index = $this.parent().index() + 1;

			e.preventDefault();
			$tabMenu_li.removeClass("on");
			$this.parent().addClass("on");

			$(".shop-sear-map-box .box-none").css("display", "none");
			$(".shop-sear-map-box .shop-contab-box-" + $tabMenu_li_index).css("display", "block");
		}
	}

	function detail_produc_reply_anc () {
		$(".js-anc-quick").click(function(event){
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top - 133}, 500);

			var $target = $('.detail-contents_03');

			$target.find('.product-detail-h3-accordion').addClass('on');
			$target.find('.product-dt-appraisal-list').css('height', 'auto');
		});
	}

	function header_band_banner() {
		var ticker = function() {
			timer = setTimeout(function() {
				$('.js-band-banner .band-list-ban-wrap li:first').animate({
					marginTop: '-27px'
				}, 400, function() {
					$(this).detach().appendTo('.band-list-ban-wrap').removeAttr('style');
				});
				ticker();
			}, 3000);
		};

		ticker();
	}


	/* Ready */
	$(document).ready(function() {
		// document ready 후 실행할 코드 작성

		/*
		 * _________form 유효성체크
		 * 정규식과 keyup 을 이용한 텍스트 박스에 특정 문자만 입력받을 수 있도록 처리
		 */
		// 전화번호 체크
		telNum_check();

		// 영문만 입력 가능
		eng_check();

		// 한글만 입력 가능 (예 : 이름입력)
		kor_check();




		/*
		 * _________library
		 */
		// 이미지맵 반응형
		images_MAP_responsive();




		/*
		 * _________UI Script.
		 */
		// datepicker JS
		datepicker_js();

		// select 꾸며주는 JS
		select_Make_js();

		// radio, checkbox JS
		formCheck_Modify_js();

		// file_name js
		file_name_js();

		// tab
		standard_tab()
	});


	/* Load */
	$(window).load(function() {
		// window load 후 실행할 코드 작성
	});


	/* Load */
	$(window).scroll(function() {
		// window load 후 실행할 코드 작성
	});




	exports.amountCheckPut = amountCheckPut;
	exports.amountCheckMinus = amountCheckMinus;
	exports.amountCheckPlus = amountCheckPlus;
	exports.popupBase = popupBase;

})(this, this.jQuery);

