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
		// uniform 등록
		uniformInit();

		// tab large 나누기
		// tabLargeDivide(); // table-layout으로 대체

		// datepicker 등록
		datepickerInit();

		// Selectric 가동
		selectricInit();

		// 모바일 네비게이션 작동
		mobileGnbSlide();

		// pc검색영역 작동
		headerSearchDesktop();

		// mobile검색영역 작동
		headerSearchMobile();

		// 회원가입 멤버쉽 전환
		memberJoinPointChange();

		// 고객센터 사이드바
		csCenterSidebarToggle();

		// 모바일화면 버튼 스킵
		buttonSkip();

		// submain(case_01_carousel_01)
		case_01_carousel_01();

		// submain(case_01_carousel_02)
		case_01_carousel_02();

		// submain(case_01_2depth_menu)
		case_01_2depth_menu();

		// submain(customize_selectric)
		submain_customize_selectric();

		// DetailPage(제품 섬네일 carousel)
		detail_page_thumbnail();

		// DetailPage(제품 섬네일 carousel2)
		detail_page_thumbnail2();

		// DetailPage(인스타 섬네일)
		detail_instar_thumbnail();

		// DetailPage(모바일 탭 토글)
		detail_mobile_toggle_tab();

		// DetailPage(PC hash 스크롤)
		hash_link_scroll();

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

		// 장바구니(쇼핑혜택/쿠폰)
		eventNcouponSelect();

		// header 최근본상품 layer popup (모바일)
		headerMobileVerPopup();

	});

	function uniformInit () {
		$('input[type="checkbox"], input[type="radio"]').uniform();
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
				'margin-top': -($targetLayer.height() / 2) + 'px',
				'margin-left': -($targetLayer.width() / 2) + 'px',
				// 'top': h + 'px'
			});
			// $('#use-global-layer').css({
			// 	'height': $(document).height()
			// });
		},
		layerPopup : function(obj, act, evt) {
			'use strict'
			var $obj = obj;
			if (typeof $obj === 'string') $obj = $($obj);
			var bgcolor = '#000';
			var opacity = 0.75;
			var zindex = 1099;
			var lzindex = 1100;
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
			// $target.remove();
			$('#wrap').after(copyobj);
			var fixable = "absolute";
			var offsetOpt = false;
			if (evt == "fixable" || evt == "fixable-offset") {
				fixable = "fixed";
			}
			if (evt == "offset" || evt == "fixable-offset") {
				offsetOpt = true;
			}
					// console.log(offsetOpt);
			// e.preventDefault();
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
			// $target.focus();
			// $target.find('a').eq(0).focus();
			// var w = $(window).width() / 2 - $target.width() / 2;
			if (offsetOpt) {
				$target.css('top', ofs.top + ofsPlus);
				if (wh < h) {
					$target.css('top', dy + 30);
				} else {
					$target.css('top', ((wh-h)/2) + dy);
				}
			}
			if (fixable == "fixed") {
				$target.css({
					'top':'50%',
					'left':'50%',
				});
				$target.addClass('fixed-popup');
			}
			if (act == "dim") {
				$target.css('margin-top', -(h)/2);
				$target.css('margin-left', -(w)/2);
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
			// $(window).bind('resize', popupBase._resize);
			$target.find('img').load(popupBase._resize);

			$(closeBtn).click(function (e) {
				e.preventDefault();
				//dimmed close event
				$target.css({ 'display': 'none', 'z-index': 0 });
				// $(window).unbind('resize', popupBase._resize);
				$('#use-global-layer').css('height', 0);
				$('#use-global-layer').remove();
				targetLayer = '';
				// $obj.focus();
			});
		},
		noticeLayerPopup : function(tg, act, evt) {
			'use strict'

			var bgcolor = '#000';
			var opacity = 0.6;
			var zindex = 8999;
			var lzindex = 9000;
			var target = (typeof tg === 'string') ? $(tg) : tg ;
			var $target = $(target);
			var copyobj = $target;
			var closeBtn = $target.find('.close');
			var closeTarget = $(closeBtn).attr('href');
			var classList = $target.attr('class');
			var orinHeight = 0;
			var fixable = 'absolute';
			$target.remove();
			$('#wrap').after(copyobj);
			var fixable = "absolute";
			var offsetOpt = false;
			if (evt == "fixable" || evt == "fixable-offset") {
				fixable = "fixed";
			}
			if (evt == "offset" || evt == "fixable-offset") {
				offsetOpt = true;
			}
			var h = $target.height();
			var dh = $(document).height();
			var dy = $('body').scrollTop();
			targetLayer = target;
			$target.css({ 'display': 'block', 'z-index': lzindex });
			$target.css('position', fixable);
			// $target.attr('tabindex', '0');
			$target.focus();
			// $target.find('a').eq(0).focus();
			var w = $(window).width() / 2 - $target.width() / 2;
			var wh = $(window).height();
			if (act == "dim") {
				// console.log($('#use-global-layer').length);
				$target.css('top', (wh-h)/2);
				$target.css('margin-left', w);
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
			if (offsetOpt) {
				// $target.css('top', ofs.top + ofsPlus);
				if (wh < h) {
					$target.css('top', dy + 30);
				} else {
					$target.css('top', ((wh-h)/2) + dy);
				}
			}
			// $(window).bind('resize', popupBase._resize);
			// $target.find('img').load(popupBase._resize);
			$(closeBtn).click(function (e) {
				e.preventDefault();

				popupBase.closePopup($target);
				// popupBase.closePopup();
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
			// $(window).unbind('resize', popupBase._resize);
			$('#use-global-layer').css('height', 0);
			$('#use-global-layer').remove();
			targetLayer = '';
		}
	};

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
				// console.log(e);
				clearTimeout(interval);
			},
			'blur': function(e) {
				// console.log(e);
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
		})
		$inputEl.on({
			'focus': function(e) {
				// console.log(e);
				clearTimeout(interval);
			},
			'blur': function(e) {
				// console.log(e);
				interval = setTimeout(function() {
					$inputText[0].value = '';
					$searchArea.hide();
				}, 100);
			}
		});
	};

	function memberJoinPointChange () {
		var $membershipStatus = $('.membership-status-select input[type=radio]');
		var $membershipAlready = $('.membership-already');
		var $membershipNewface = $('.membership-newface');

		if ( !$membershipStatus.length ) return;

		console.log("1");

		$.each($membershipStatus, function(i) {
			var $radio = $membershipStatus.eq(i);
			// console.log($radio.val());
			if ($radio[0].checked == true) {
				membershipShowChange($radio[0]);
			}
		})

		$membershipStatus.on({
			'change': function(e) {
				var radio = e.target;
				// console.log( $(radio).val() );
				// console.log( radio.className );
				membershipShowChange(radio);
			}
		});

		function membershipShowChange (radio) {
			if (radio.className == 'already-member') {
				$membershipAlready.show();
				$membershipNewface.hide();
			} else {
				$membershipAlready.hide();
				$membershipNewface.show();
			}
		}
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

	function buttonSkip () {
		var $btns = $('.article.function > a, .article.member > a');
		var $myBtn = $('.my-btn');
		var $viewBtn = $('.view-btn');
		var $heartBtn = $('.heart-btn');
		var $cartBtn = $('.cart-btn');
		var $loginAfterBtn = $('.cart-btn');
		var type;
		var vw = document.body.clientWidth;

		$btns.on({
			'click': function(e) {
				var $btn = $(this);
				if ( $btn.hasClass('loginadmin') ) {
					e.preventDefault;
					personalModalPopup(vw, 'loginadmin');
				}
			},
			'mouseenter': function(e) {
				var $btn = $(this);
				if ( $btn.hasClass('my-btn') ) {
					personalModalPopup(vw, 'my-btn');
				} else if ( $btn.hasClass('view-btn') ) {
					personalModalPopup(vw, 'view-btn');
				} else if ( $btn.hasClass('heart-btn') ) {
					personalModalPopup(vw, 'heart-btn');
				} else if ( $btn.hasClass('cart-btn') ) {
					personalModalPopup(vw, 'cart-btn');
				}
			}
		});
		$(window).on({
			'resize': function() {
				// $('.header-laypop-dim').hide();
				vw = document.body.clientWidth;
			}
		});
	}

	function personalModalPopup (vw, key) {
		var vw = vw;
		var key = key;

		if ( vw >= 1080 ) { //pc
			console.log( vw, key );
			switch (key) {
				case "loginadmin" :
					$('.header-gnb-layer-popup-wrap, .header-laypop-dim').hide();
					$('.hd-me-member-infor-popup, .header-laypop-dim').fadeIn(500, function(){
						var $openPopup = $(this);
						$('.hd-g-pop-close').on('click', function(){
							// console.log($(e.target));
							$openPopup.fadeOut(500);
						});
					});
					$('body').on('click', function(e){
						var $dimTarget = $(e.target).is('.header-laypop-dim');
						// console.log($dimTarget);
						if( $dimTarget === true ){
							$('.hd-me-member-infor-popup, .header-laypop-dim').fadeOut(500);
						}
					});
					break;
				case "my-btn" : console.log('개인정보');
								break;
				case "view-btn" :
					$('.header-gnb-layer-popup-wrap, .header-laypop-dim').hide();
					$('.hd-me-latest-infor-popup, .header-laypop-dim').fadeIn(500, function(){
						var $openPopup = $(this);
						$('.hd-g-pop-close').on('click', function(){
							$openPopup.fadeOut(500);
						});
					});
					$('body').on('click', function(e){
						var $dimTarget = $(e.target).is('.header-laypop-dim');
						// console.log($dimTarget);
						if( $dimTarget === true ){
							$('.hd-me-latest-infor-popup, .header-laypop-dim').fadeOut(500);
						}
					});
					break;
				case "heart-btn" : console.log('위시리스트');
								break;
				case "cart-btn" :
					$('.header-gnb-layer-popup-wrap, .header-laypop-dim').hide();
					$('.hd-me-shopbasket-infor-popup, .header-laypop-dim').fadeIn(500, function(){
						var $openPopup = $(this);
						$('.hd-g-pop-close').on('click', function(){
							$openPopup.fadeOut(500);
						});
					});
					$('body').on('click', function(e){
						var $dimTarget = $(e.target).is('.header-laypop-dim');
						// console.log($dimTarget);
						if( $dimTarget === true ){
							$('.hd-me-shopbasket-infor-popup, .header-laypop-dim').fadeOut(500);
						}
					});
					break;
			}
		} else { // mobile

		}
	}

	// header 최근본상품 layer popup (모바일)
	function headerMobileVerPopup () {
		var $headerMobileWrap = $('.sticky-header-mobile');
		var $latestBtn = $headerMobileWrap.find('.view-toggler');

		$latestBtn.on({
			'click':  function() {
				$('.hd-me-latest-infor-popup, .header-laypop-dim').fadeIn(500, function(){
					var $openPopup = $(this);
					// hd_target_popup_off()
					$('.hd-g-pop-close').on('click', function(){
						$openPopup.fadeOut(500);
					});
				});

				// uniformInit();

				function hd_target_popup_off() {
					$('body').on('click', function(e){
						console.log('bodyCheck');
						var $dimTarget = $(e.target).is('.header-laypop-dim');
						// console.log($dimTarget);
						if( $dimTarget === false ){
							return false;
						}else{
							$('.hd-me-latest-infor-popup, .header-laypop-dim').fadeOut(500);
						}
					});
				}
				// $('body').on('click', function(e){
				// 	var $dimTarget = $(e.target).is('.header-laypop-dim');
				// 	// console.log($dimTarget);
				// 	if( $dimTarget === false ){
				// 		return false;
				// 	}else{
				// 		$('.hd-me-latest-infor-popup, .header-laypop-dim').fadeOut(500);
				// 	}
				// });
			}
		});

		$(window).on({
			'resize': function() {
				// $('.header-laypop-dim').hide();
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

	// submain
	function case_01_carousel_01 () {
		$('.js-carousel-product-list').slick({
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 4,
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
		$('.detail-recommend-lsit-ul').slick({
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
		$('.submain-cate-menu-ul').slick({
			infinite: false,
			slidesToShow: 7,
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
		$('.detail-thum-big').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			// swipeToSlide: true,
			asNavFor: '.detail-thum-small'
		});
		$('.detail-thum-small').slick({
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.detail-thum-big',
			dots: true,
			// swipeToSlide: true,
			// centerMode: true,
			focusOnSelect: true
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
				1080:{
					dots:false
				}
			},
			// callback
			onChanged: function(e) {
				var syncIndex = e.item.index;
				// console.log(e.item.index);
				var $this = $(this);
				// console.log($this);
				detailThumbSync(syncIndex);
				$detailThumbBanner.trigger('to.owl.carousel', [syncIndex]);
			}
		});

		var $thumbItems = $('.owl-carousel-detail-thumb .owl-item');

		$.each($thumbItems, function(i) {
			var $btn = $thumbItems.eq(i);
			$btn.attr('orderd', i);
			$btn.on({
				'click': $.proxy(function(e) {
					// console.log(this.attr('orderd'))
					$detailMainBanner.trigger('to.owl.carousel', [this.attr('orderd')]);
				}, $btn)
			})
		});

		function detailThumbSync(i) {
			// console.log(i);
			var $items = $('.owl-carousel-detail-thumb').find('.owl-item');
			var t = $items.length;
			var i = (i == 0) ? t : i ;
			var tg = i%t;

			// console.log(t,i,tg);

			$items.eq(tg).addClass('sync').siblings().removeClass('sync');
		}
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
			$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
		});
	}

	// 제품상세 수량 체크
	function amountCheckMinus(minNumber) {
		var stat = $('.js-amount_check').find('.ea').val();
		console.log(stat);
		var num = parseInt(stat,10);
		stat--;

		if(stat <= minNumber){
			var minBool =  $('.js-amount_check').find('.minus').hasClass('stop');
			if ( minBool == true ) {
				alert('최소 1이상을 입력하셔야 합니다.');
				return false;
			}
			$('.js-amount_check').find('.minus').addClass('stop');
			stat = minNumber;
		}else{
			$('.js-amount_check').find('.plus').removeClass('stop');
		}
		$('.ea').val(stat);
	}
	function amountCheckPlus(maxNumber) {
		var stat = $('.js-amount_check').find('.ea').val();
		console.log(stat);
		var num = parseInt(stat,10);
		stat++;

		if(stat >= maxNumber){
			var maxBool =  $('.js-amount_check').find('.plus').hasClass('stop');
			if ( maxBool == true ) {
				alert('1회 최대 '+ (stat - 1) +'개까지 구매 가능합니다.');
				return false;
			}
			$('.js-amount_check').find('.plus').addClass('stop');
			stat = maxNumber;
		}else{
			$('.js-amount_check').find('.minus').removeClass('stop');
		}
		$('.ea').val(stat);
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

		$exPoint.on({
			'click': expointLayer,
			'blur': expointLayer_none
		});

		function expointLayer(e){
			$(this).parent().find('.ex-point-layer-list').toggleClass('on');
		}
		function expointLayer_none(){
			$(this).parent().find('.ex-point-layer-list').removeClass('on');
		}
	}

	// 장바구니 사이드 스크롤 에니메이션
	function basketSideBox () {
		var animateBoxCheck = $('.js-basketSideBox').length;
		if(animateBoxCheck == 1){
			/* 공통 */
			var headerHei = $('#header').height(); // header 높이
			var contentHei = $('#content').height(); // content 높이

			var $startTarget = $('.js-basketSideBox'); // 타켓
			var $orderSheetBox = $startTarget.find('.order-sheet-left-box'); // 장바구니 내역 리스트
			var $sideQuickBox = $('.myor-side-last-order-box'); // 사이드 메뉴
			var $orderSheetBoxHei = $orderSheetBox.height(); // 장바구니 내역 높이
			var $sideQuickBoxHei = $sideQuickBox.height(); // 사이드 메뉴 높이
			var $aniStartPosition = $sideQuickBox.offset().top; // 사이드 메뉴 좌표 높이값
			var $greenLineSoldout = $('.order-sheet-greenline-soldout-box').height(); // 품절된 제품이 있을 때 나오는 박스
			var $greenBoxhas = $('.order-sheet-greenline-soldout-box').hasClass('order-sheet-greenline-soldout-box');
			var $greenBoxCheck = ($greenBoxhas == true) ? $greenLineSoldout + 20 : 0; // 그린 박스 존재 유무에 따라 값 변경
			var endScrollHei = headerHei + ($orderSheetBoxHei + $greenBoxCheck + 115) - $sideQuickBoxHei; // 스크롤 끝나는 지점


			if ( $orderSheetBoxHei >= $sideQuickBoxHei){
				bsAnimateFunc();
				$(this).scroll(bsAnimateFunc);

				function bsAnimateFunc() {
					var scrollVal = $(this).scrollTop(); // 윈도우 스크롤 값

					if ( scrollVal >= $aniStartPosition ) {

						$sideQuickBox.stop().animate({top: scrollVal - $aniStartPosition + 104 }, 500);

						if ( scrollVal >= endScrollHei ) {

							$sideQuickBox.stop().animate({top: endScrollHei - $aniStartPosition + 104 }, 500);

						}

					} else{

						$sideQuickBox.stop().animate({top: 104 }, 500);

					}
				}

			}else {
				$orderSheetBox.height($sideQuickBoxHei + 35);
			}
		}
	}

	// 쇼핑혜택/쿠폰 사용 체크
	function eventNcouponSelect () {
		var $jsTarget  = $('.js-shop-n-coupon');
		var $radioForm =  $jsTarget.find('.asset input[type=radio]');
		// console.log($radioForm);
		$radioForm.on('change', function(){
			var $thisCheck = $(this).parents('.asset').index();
			var $useZone = $jsTarget.find('.true-choice-area-box');

			if($thisCheck === 0) {
				$useZone.show();
				changeSideBoxHei();
				checkBtn_on();
			}else {
				$useZone.hide();
				changeSideBoxHei();
				$('.all-ranges-wrap').attr('style', false);
			}
		});
	}
	function changeSideBoxHei() {
		$(window).load(function(){
			var sideBoxHei = $('.myor-side-last-order-box').height();
			var orderList = $('.order-sheet-left-box').height();
			// basketSideBox();
			if ( orderList <= sideBoxHei) {
				$('.all-ranges-wrap').css("margin-top", sideBoxHei - 650);
				// console.log(parseInt($('.all-ranges-wrap').css("margin-top")));
			}
		});
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



	exports.amountCheckMinus = amountCheckMinus;
	exports.amountCheckPlus = amountCheckPlus;
	exports.popupBase = popupBase;
	exports.submain_customize_selectric = submain_customize_selectric;
	exports.uniformInit = uniformInit;
})(this, this.jQuery)
