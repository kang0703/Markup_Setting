function tableColunmCtr() {
	// display:none 방식
	$('#depth-cont').on('click', 'button', function(){
		var eqNum = $(this).attr('data-depth');
		var $table = $('.data-table.wsg');
		var $colgroup = $('.data-table.wsg colgroup');
		var $thead = $table.children('thead');
		var $tbody = $table.children('tbody');
		var $thead_Tr = $thead.find('tr');
		var $tbody_Tr = $tbody.find('tr');

		var here_depth = Number(eqNum) + 1;
		var tr_length = $tbody_Tr.length + 1;

		$colgroup.children('col').eq(eqNum).toggleClass('none');
		$thead_Tr.children('th').eq(eqNum).toggleClass('none');
		for (var i=0; i<tr_length; i++){
			$tbody_Tr.eq(i).children('td:nth-child(' + here_depth + ')').toggleClass('none');;
		}
	});
}


function tableColunmCtrFold() {
	// 크기 조정 방식
	$('#depth-cont-fold').on('click', '.tb-toggle-btn', function(){
		var eqNum = $(this).attr('data-depth');
		var $colgroup = $('.data-table.wsg colgroup');

		$colgroup.children('col').eq(eqNum).toggleClass('small');
		$(this).toggleClass('on');
	});
}


function allFoldOpen() {
	// 접은 컬럼 전체 열기
	$('.tb-open-btn').on('click', function(){
		var $colgroup = $('.data-table.wsg colgroup');

		$colgroup.children('col').removeClass('small');
		$('.tb-toggle-btn').removeClass('on');
	});
}

$(document).ready(function(){
	// tableColunmCtr();
	tableColunmCtrFold();
	allFoldOpen();
});