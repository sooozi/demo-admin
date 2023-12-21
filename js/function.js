// input chk all
function allChk(checked){
    const target = document.querySelectorAll("input[name='chk_list']");
    for(let i=0; i < target.length; i++){
        if(checked === true){
            target[i].checked = true;
        }else{
            target[i].checked = false;
        }
    }

    // $("input[name=chk_list]").click(function() {
	// 	var total = $("input[name=chk_list]").length;
	// 	var checked = $("input[name=chk_list]:checked").length;

	// 	if(total != checked) $("#chk_all").prop("checked", false);
	// 	else $("#chk_all").prop("checked", true); 
	// });
}

// input chk all faq
function allChk_faq(checked){
    const target = document.querySelectorAll("input[name='chk_list']");
    for(let i=0; i < target.length; i++){
        if(checked === true){
            target[i].checked = true;
        }else{
            target[i].checked = false;
        }
    }

    $("input[name=chk_list]").click(function() {
		var total = $("input[name=chk_list]").length;
		var checked = $("input[name=chk_list]:checked").length;

		if(total != checked) {
			$("input[name=chk_all").each( function(){
				$(this).prop("checked", false);
			});
		}else {
			$("input[name=chk_all").each( function(){
				$(this).prop("checked", true);
			});			
		} 
	});
}

// function allChk01(checked){
//     const target = document.querySelectorAll("input[name='chk_list_01']");
//     for(let i=0; i < target.length; i++){
//         if(checked === true){
//             target[i].checked = true;
//         }else{
//             target[i].checked = false;
//         }
//     }

//     $("input[name=chk_list_01]").click(function() {
// 		var total = $("input[name=chk_list_01]").length;
// 		var checked = $("input[name=chk_list_01]:checked").length;

// 		if(total != checked) $("#chk_cont_manage").prop("checked", false);
// 		else $("#chk_cont_manage").prop("checked", true); 
// 	});
// }

function allChk01(checked) {
    const target = document.querySelectorAll("input[name='chk_list_01']");
    for (let i = 0; i < target.length; i++) {
        if (checked === true) {
            target[i].checked = true;
        } else {
            target[i].checked = false;
        }
    }

    $("input[name=chk_list_01]").click(function () {
        var total = $("input[name=chk_list_01]").length;
        var checked = $("input[name=chk_list_01]:checked").length;

        if (total != checked) {
            $("#chk_cont_manage").prop("checked", false);
        } else {
            $("#chk_cont_manage").prop("checked", true);
        }

        // 체크박스 상태에 따라 list_depth01 체크박스 상태 변경
        var listDepth02Total = $("input[name=chk_list_02]").length;
        var listDepth02Checked = $("input[name=chk_list_01]:checked").length;

        if (listDepth02Total === listDepth02Checked) {
            $("#chk_cont_manage").prop("checked", true);
        } else {
            $("#chk_achk_cont_managell02").prop("checked", false);
        }
    });
}

// function allChk02(checked){
//     const target = document.querySelectorAll("input[name='chk_list_02']");
//     for(let i=0; i < target.length; i++){
//         if(checked === true){
//             target[i].checked = true;
//         }else{
//             target[i].checked = false;
//         }
//     }

//     $("input[name=chk_list_02]").click(function() {
// 		var total = $("input[name=chk_list_02]").length;
// 		var checked = $("input[name=chk_list_02]:checked").length;

// 		if(total != checked) $("#chk_all02").prop("checked", false);
// 		else $("#chk_all02").prop("checked", true); 
// 	});
// }

function allChk02(checked) {
    const target = document.querySelectorAll("input[name='chk_list_02']");
    for (let i = 0; i < target.length; i++) {
        if (checked === true) {
            target[i].checked = true;
        } else {
            target[i].checked = false;
        }
    }

    $("input[name=chk_list_02]").click(function () {
        var total = $("input[name=chk_list_02]").length;
        var checked = $("input[name=chk_list_02]:checked").length;

        if (total != checked) {
            $("#chk_all02").prop("checked", false);
        } else {
            $("#chk_all02").prop("checked", true);
        }

        // 체크박스 상태에 따라 list_depth01 체크박스 상태 변경
        var listDepth02Total = $("input[name=chk_list_02]").length;
        var listDepth02Checked = $("input[name=chk_list_02]:checked").length;

        if (listDepth02Total === listDepth02Checked) {
            $("#chk_all02").prop("checked", true);
        } else {
            $("#chk_all02").prop("checked", false);
        }
    });
}

function allChk03(checked){
     const target = document.querySelectorAll("input[name='chk_list_03']");
     for(let i=0; i < target.length; i++){
        if(checked === true){
            target[i].checked = true;
        }else{
            target[i].checked = false;
        }
    }

    $("input[name=chk_list_03]").click(function() {
		var total = $("input[name=chk_list_03]").length;
		var checked = $("input[name=chk_list_03]:checked").length;

		if(total != checked) $("#chk_admin_manage").prop("checked", false);
		else $("#chk_admin_manage").prop("checked", true); 
	});
}

function pwCheck() {
    let p1 = document.getElementById('password1').value;
    let num = p1.search(/[0-9]/g);
    let eng = p1.search(/[a-z]/ig);
    let spe = p1.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if(p1.length < 8 || p1.length > 15){

        // alert("8자리 ~ 15자리 이내로 입력해주세요.");
        document.getElementById('same01').innerHTML='8자리 ~ 15자리 이내로 입력해주세요.';
        document.getElementById('same01').style.color='red';
        return false;
    }else if(p1.search(/\s/) != -1){
        // alert("비밀번호는 공백 없이 입력해주세요.");
        document.getElementById('same01').innerHTML='비밀번호는 공백 없이 입력해주세요.';
        document.getElementById('same01').style.color='red';
        return false;
    }else if(num < 0 || eng < 0 || spe < 0 ){
        // alert("영문, 숫자, 특수문자를 혼합하여 입력해주세요.");
        document.getElementById('same01').innerHTML='영문, 숫자, 특수문자를 혼합하여 입력해주세요.';
        document.getElementById('same01').style.color='red';
        return false;
    }else {
      
        document.getElementById('same01').innerHTML='사용 가능한 비밀번호 입니다.';
        document.getElementById('same01').style.color='blue';
        return true;
    }
}

function pwCheck02() {
    let p1 = document.getElementById('password1').value;
    let p2 = document.getElementById('password2').value;

    if( p1 != p2 ) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    } else{
        alert("비밀번호가 변경되었습니다.");
        return true;
    }
}

function pwFocusout(){
    let p1 = document.getElementById('password3').value;
    let num = p1.search(/[0-9]/g);
    let eng = p1.search(/[a-z]/ig);
    let spe = p1.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if(p1.length < 8 || p1.length > 15){

        // alert("8자리 ~ 15자리 이내로 입력해주세요.");
        document.getElementById('same').innerHTML='8자리 ~ 15자리 이내로 입력해주세요.';
        document.getElementById('same').style.color='red';
        return false;
    }else if(p1.search(/\s/) != -1){
        // alert("비밀번호는 공백 없이 입력해주세요.");
        document.getElementById('same').innerHTML='비밀번호는 공백 없이 입력해주세요.';
        document.getElementById('same').style.color='red';
        return false;
    }else if(num < 0 || eng < 0 || spe < 0 ){
        // alert("영문, 숫자, 특수문자를 혼합하여 입력해주세요.");
        document.getElementById('same').innerHTML='영문, 숫자, 특수문자를 혼합하여 입력해주세요.';
        document.getElementById('same').style.color='red';
        return false;
    }else {
        // alert("사용 가능한 비밀번호 입니다.");
        document.getElementById('same').innerHTML='사용 가능한 비밀번호 입니다.';
        document.getElementById('same').style.color='blue';
        return false;
    }
}

function pwFocusout02(){
    let p1 = document.getElementById('password3').value;
    let p2 = document.getElementById('password4').value;

    if( p1 != p2 ) {
        // alert("비밀번호가 일치하지 않습니다.");
        document.getElementById('same').innerHTML='비밀번호가 일치하지 않습니다.';
        document.getElementById('same').style.color='red';
        return false;
    } else{
        // alert("비밀번호가 일치합니다.");
        document.getElementById('same').innerHTML='비밀번호가 일치합니다.';
        document.getElementById('same').style.color='blue';
    }
}

// 채용 카테고리 / 필터 관리 > 테이블 추가 버튼 동작
var baseCamp = 0;
const userAdd = ()=> {	

    var trCnt = document.getElementsByTagName('tr').length;
    var inner = "";

    if(baseCamp != 0){
      trCnt = baseCamp;
    } 

    inner += '<tr id = "no'+trCnt+'" style="z-index: calc(100 - '+trCnt+')">';
    inner += '    <td class="td_num sort" align ="center">'+ trCnt +'</td>';
    inner += `  <td>
					<input type="hidden" id="idx" name="idx" value="0">
                    <input type="text" id="category" name="category" class="td_cate_inp">
                </td>`;
    inner += `    <td class="td_exposure add_tr">
                    <div class="">
                        <select id="show_yn" name="show_yn" class="job_category  nice-select">
                            <option value="Y">노출</option>
                            <option value="N">미노출</option>
                        </select>
                    </div>
                </td>`;
    inner += '    <td class="td_minus"><button type="button" class="cancleBtn" onClick="onClickCancle('+trCnt+')">삭제 -</button></td>';
    inner += `</tr>`;
    
    
    $('#t_first').append(inner);

    $("select").niceSelect();
    // $('#t_first tr:first').after(inner); // 첫번째 tr 아래 추가
}

// 채용 카테고리 / 필터 관리 > 테이블 삭제 버튼 동작
function onClickCancle(trCnt){
    var row = document.querySelectorAll('.updateRow');
    $("#no"+trCnt).remove();
      
      if(trCnt == 11){
          $('#no1').show();
      }
    if(row.length > 0){
          $('.updateRow').show();
          $('tr').removeClass('updateRow');
    }
}

//마이페이지 수정 - 셀렉트 이메일 input에 추가
function ChangeValue(){
    let valueStr = document.getElementById('email_select'),
        emailAdd = document.getElementById('emailAdd');

    emailAdd.value= valueStr.options[valueStr.selectedIndex].text;
}

// 채용 공고 등록/수정 > 해시태그 추가 버튼 동작
const hashtagAdd = () => {
    $('.cont_box').off().on('click', '.btn_black', function(ev) {
        var $hashtagWrap = $(this).closest('.hashtag_wrap'); // 현재의 hashtag_wrap 선택
        var $allHashtagWraps = $hashtagWrap.parent().find('.hashtag_wrap'); // 모든 hashtag_wrap 요소 선택

        var trCnt = $allHashtagWraps.length; // 모든 hashtag_wrap 요소의 개수
        var inner = "";

        if (baseCamp != 0) {
            trCnt = baseCamp;
        }

        if (trCnt < 6) { // 기존 코드에서 `<=`를 `<`로 변경하여 최대 5개까지 등록 가능하도록 수정
            inner += '<div class="hashtag_wrap f_c">';
            inner += '<span>#</span>';
            inner += '<div class="input_hashtag_box">';
            inner += '<input type="text" id="hashtag" name="hashtag" value="" placeholder="입력해주세요.">';
            inner += '<button type="button" class="cancleBtn btn" onClick="onClickDelete(' + trCnt + ')"></button>';
            inner += '</div>';
            inner += '</div>';
            
            // 마지막 hashtag_wrap 뒤에 내용 추가
            $allHashtagWraps.last().after(inner);
        } else {
            alert('해시태그는 최대 5개까지 등록 가능합니다.');
        }

        // ev.stopPropagtion();

        $("#sortable").sortable({
            cursor: "move",
            items: $('.dep1_list'),
            handle: '.sort_handle',
        }).disableSelection();
    });
}

// history 등록/수정 > 해시태그 추가 버튼 동작
const historyHashtagAdd = () => {
    $('.cont_box').off().on('click', '.btn_black', function(ev) {
        var $hashtagWrap = $(this).closest('.hashtag_wrap'); // 현재의 hashtag_wrap 선택
        var $allHashtagWraps = $hashtagWrap.parent().find('.hashtag_wrap'); // 모든 hashtag_wrap 요소 선택

        var trCnt = $allHashtagWraps.length; // 모든 hashtag_wrap 요소의 개수
        var inner = "";
		var lang = "";

        if (baseCamp != 0) {
            trCnt = baseCamp;
        }

		if(this.classList.contains("ko")){
			lang = "ko";
		}else if(this.classList.contains("en")){
			lang = "en";
		}

        if (trCnt < 3) { // 기존 코드에서 `<=`를 `<`로 변경하여 최대 5개까지 등록 가능하도록 수정
            inner += '<div class="hashtag_wrap f_c">';
            inner += '<span>#</span>';
            inner += '<div class="input_hashtag_box">';
            inner += '<input type="text" id="hashtag" name="hashtag_'+lang+'" value="" placeholder="입력해주세요.">';
            inner += '<button type="button" class="cancleBtn btn" onClick="onClickDelete(' + trCnt + ')"></button>';
            inner += '</div>';
            inner += '</div>';
            
            // 마지막 hashtag_wrap 뒤에 내용 추가
            $allHashtagWraps.last().after(inner);
        } else {
            alert('해시태그는 최대 3개까지 등록 가능합니다.');
        }

        // ev.stopPropagtion();

        $("#sortable").sortable({
            cursor: "move",
            items: $('.dep1_list'),
            handle: '.sort_handle',
        }).disableSelection();
    });
}

// 채용 공고 등록/수정 > 테이블 삭제 버튼 동작
// function onClickDelete(trCnt){
//     console.log('dddddd')
//     var row = document.querySelectorAll('.updateRow');
//     $("#no"+trCnt).remove();
      
//       if(trCnt == 11){
//           $('#no1').show();
//       }
//     if(row.length > 0){
//           $('.updateRow').show();
//           $('tr').removeClass('updateRow');
//     }
// }


// 콘텐츠 관리 -> 연력 등록/수정 연혁 추가 버튼 동작
var baseCamp = 0;
const yearHistoryAdd = ()=> {	

    var trCnt = document.getElementsByClassName('dep1_list').length;
    var inner = "";
    var trCntRadio = document.getElementsByClassName('cont_box').length + 1;
    var trCntRadio02 = trCntRadio + 2;

    if(baseCamp == 0){
     baseCamp = trCnt;
    } 
	baseCamp++;
	//연혁 최대 10개
    if(trCnt < 10) {
		inner += '<div class="cont_box dep1_list">';
		inner += '<button type="button" class="btn_close"><img src="/img/icon/icon_close.png" alt="close" onclick="closeDep1List(this)"></button>';
		inner += '    <div class="input_list_wrap">';
		inner += '        <div class="td_drag sort_handle opc_0"><img src="/img/admin/icon/icon_menu_dark.png" alt="icon_line"></div>';
		inner += '        <div class="history_box ko_ver">';
		inner += '            <dl class="input_long_ver">';
		inner += '                <dt class="list_sub_tit">국문 내용</dt>';
		inner += '                <dd class="list_cont">';
		inner += '                    <div class="textarea_box">';
		inner += '                        <textarea name="content_ko" id="" cols="30" rows="10" placeholder="내용을 입력해주세요."></textarea>';
		inner += '                    </div>';
		inner += '                </dd>';
		inner += '            </dl>';
		inner += '            <dl class="input_hashtag_wrap">';
		inner += '                <dt class="list_sub_tit">국문 해시태그</dt>';
		inner += '                <dd class="list_cont">';
		inner += '                    <div id="hashtag_first" class="hashtag_wrap f_c">';
		inner += '                        <span>#</span>';
		inner += '                        <div class="input_hashtag_box">';
		inner += '                            <input type="text" id="hashtag" name="hashtag_ko" value="" class="first" placeholder="입력해주세요." maxlength="13">';
		inner += '                        </div>';
		inner += '                        <button type="button" class="btn btn_black hash_btn ko" onclick="historyHashtagAdd()">추가</button>';
		inner += '                    </div>';
		inner += '                </dd>';
		inner += '            </dl>';
		inner += '            <dl class="use_box txt_on_off">';
		inner += '                <dt class="list_tit">국문 노출여부</dt>';
		inner += '                <dd class="list_cont">'; 
		inner += '                    <label for="ko_show_y'+baseCamp+'">노출';
		inner += '                        <input type="radio" id="ko_show_y'+baseCamp+'" value="Y" name="ko_show_yn'+baseCamp+'" class="radio-button" checked/>';
		inner += '                        <span class="custom-radio"></span>';
		inner += '                    </label>';
		
		inner += '                    <label for="ko_show_n'+baseCamp+'">숨김';
		inner += '                        <input type="radio" id="ko_show_n'+baseCamp+'" value="N" name="ko_show_yn'+baseCamp+'" class="radio-button"/>';
		inner += '                        <span class="custom-radio"></span>';
		inner += '                    </label>';
		inner += '                </dd>';
		inner += '            </dl>';
		inner += '        </div>';
		inner += '        <div class="history_box en_ver">';
		inner += '            <dl class="input_long_ver">';
		inner += '                <dt class="list_sub_tit">영문 내용</dt>';
		inner += '                <dd class="list_cont">';
		inner += '                    <div class="textarea_box">';
		inner += '                        <textarea name="content_en" id="" cols="30" rows="10" placeholder="내용을 입력해주세요."></textarea>';
		inner += '                    </div>';
		inner += '                </dd>';
		inner += '            </dl>';
		inner += '            <dl class="input_hashtag_wrap">';
		inner += '                <dt class="list_sub_tit">영문 해시태그</dt>';
		inner += '                <dd class="list_cont">';
		inner += '                    <div id="hashtag_first" class="hashtag_wrap f_c">';
		inner += '                        <span>#</span>';
		inner += '                        <div class="input_hashtag_box">';
		inner += '                            <input type="text" id="hashtag" name="hashtag_en" value="" class="first" placeholder="입력해주세요." maxlength="13">';
		inner += '                        </div>';
		inner += '                        <button type="button" class="btn btn_black hash_btn en" onclick="historyHashtagAdd()">추가</button>';
		inner += '                    </div>';
		inner += '                </dd>';
		inner += '            </dl>';
		inner += '            <dl class="use_box txt_on_off">';
		inner += '                <dt class="list_tit">영문 노출여부</dt>';
		inner += '                <dd class="list_cont">'; 
		inner += '                    <label for="en_show_y'+baseCamp+'">노출';
		inner += '                        <input type="radio" id="en_show_y'+baseCamp+'" value="Y" name="en_show_yn'+baseCamp+'" class="radio-button" checked/>';
		inner += '                        <span class="custom-radio"></span>';
		inner += '                    </label>';
		
		inner += '                    <label for="en_show_n'+baseCamp+'">숨김';
		inner += '                        <input type="radio" id="en_show_n'+baseCamp+'" value="N" name="en_show_yn'+baseCamp+'" class="radio-button"/>';
		inner += '                        <span class="custom-radio"></span>';
		inner += '                    </label>';
		inner += '                </dd>';
		inner += '            </dl>';
		inner += '        </div>';
		inner += '    </div>';
		inner += '</div>';
    }
    
    $('.cont_list').append(inner); // 첫번째 tr 아래 추가
    $('.sort_handle').removeClass("dis-no"); // 첫번째 sort_handle 보이기
    $('.td_drag').addClass("sort_handle");
    $('.td_drag').removeClass("opc_0");

    $("#sortable").sortable({
        cursor: "move",
        items: $('.dep1_list'),
        handle: '.sort_handle',
    }).disableSelection();
}

function onClickPreview(fileDOM) {
    const preview = fileDOM.closest(".list_cont").querySelector(".img_preview_box .preview_img");
    const previewBox = fileDOM.closest(".list_cont").querySelector(".img_preview_box");
    const inputBox = fileDOM.closest(".list_cont").querySelector(".input_file_box");
    const delBtn = fileDOM.closest(".list_cont").querySelector(".del_btn");

    const reader = new FileReader();

    // del_btn에 클릭 이벤트 리스너 추가하여 이미지 제거 처리
    delBtn.addEventListener("click", () => {
        previewBox.classList.remove("on");
        preview.src = ""; // 미리보기 이미지의 소스 제거
        inputBox.value = ""; // input_file_box 값 비우기
        delBtn.classList.add('dn'); // del_btn 숨기기
    });

    reader.onload = ({ target }) => {
        preview.src = target.result;
        delBtn.classList.remove('dn'); // 이미지 소스가 설정되면 del_btn 보이기
    };
    reader.readAsDataURL(fileDOM.files[0]);
    
    
    // 새 파일 이름으로 input_file_box 업데이트
    if (fileDOM.files.length > 0) {
        inputBox.value = fileDOM.files[0].name;
        previewBox.classList.add("on");
    } else {
        inputBox.value = "";
    }

    // mail form
    if (document.querySelector('.mali_form')) {
        document.querySelector('.admin_header').classList.add("dis-no");
    }

}

//content > bi '추가 bi 다운로드 파일'
function biOnClickPreview(fileDOM) {
    const preview = fileDOM.closest(".bi_input_wrap").querySelector(".img_preview_box .preview_img");
    const inputBox = fileDOM.closest(".bi_input_wrap").querySelector(".input_file_box");
    const delBtn = fileDOM.closest(".bi_input_wrap").querySelector(".del_btn");

    const reader = new FileReader();

    //  이미지 제거를 위해 del_btn 이벤트 리스너 추가
    delBtn.addEventListener("click", () => {
        preview.src = ""; // 이미지 미리보기(preview_img) 이미지 소스 제거
        inputBox.value = ""; // input_file_box 값 비우기
        delBtn.classList.add('dn'); // 다시 del_btn 숨기기
    });

    reader.onload = ({ target }) => {
        preview.src = target.result;
        delBtn.classList.remove('dn'); // 이미지 소스가 설정되면 del_btn 보이기
    };

	if(fileDOM.files.length > 0){
	    reader.readAsDataURL(fileDOM.files[0]);
	
	    // 새 파일 이름으로 input_file_box 업데이트
	    if (fileDOM.files.length > 0) {
	        inputBox.value = fileDOM.files[0].name;
	    } else {
	        inputBox.value = "";
	    }
	}
	
    // 메일 폼이 존재할 경우 admin_header에 dis-no 클래스 추가
    if (document.querySelector('.mali_form')) {
        document.querySelector('.admin_header').classList.add("dis-no");
    }
}

//content > business '추가 이미지 업로드 파일'
function bsnsOnClickPreview(fileDOM) {
    const preview = fileDOM.closest(".bsns_input_wrap").querySelector(".img_preview_box .preview_img");
    const inputBox = fileDOM.closest(".bsns_input_wrap").querySelector(".input_file_box");
    const delBtn = fileDOM.closest(".bsns_input_wrap").querySelector(".del_btn");

    const reader = new FileReader();

    //  이미지 제거를 위해 del_btn 이벤트 리스너 추가
    delBtn.addEventListener("click", () => {
        preview.src = ""; // 이미지 미리보기(preview_img) 이미지 소스 제거
        inputBox.value = ""; // input_file_box 값 비우기
        delBtn.classList.add('dn'); // 다시 del_btn 숨기기
        preview.style.display ='none';	
    });

    reader.onload = ({ target }) => {
        preview.src = target.result;
        delBtn.classList.remove('dn'); // 이미지 소스가 설정되면 del_btn 보이기
        preview.style.display ='block';
    };

	if(fileDOM.files.length > 0){
	    reader.readAsDataURL(fileDOM.files[0]);
	
	    // 새 파일 이름으로 input_file_box 업데이트
	    if (fileDOM.files.length > 0) {
	        inputBox.value = fileDOM.files[0].name;
	    } else {
	        inputBox.value = "";
    	}
	}
	
    // 메일 폼이 존재할 경우 admin_header에 dis-no 클래스 추가
    if (document.querySelector('.mali_form')) {
        document.querySelector('.admin_header').classList.add("dis-no");
    }
}

//content > news '썸네일 등록/수정' > 썸네일 등록 팝업
function popThumb(){
    const popThumb = document.querySelector('.pop_thumbnail_edit');

    popThumb.classList.add('act');

}

function cutDate(dd)
{
	if(dd == "" || dd == null || dd == 'null' || dd == undefined)
	{
		return "";
	}
	else
	{
		if(trim(dd).length == 6)
		{
			var year = dd.substring(0,4);
			var month = dd.substring(4,6);
			return year+"-"+month;
		}
		else if(trim(dd).length == 8)
		{
			var year = dd.substring(0,4);
			var month = dd.substring(4,6);
			var day = dd.substring(6,8);
			return year+"-"+month+"-"+day;
		}
		else if(trim(dd).length == 12)
		{
			var year = dd.substring(0,4);
			var month = dd.substring(4,6);
			var day = dd.substring(6,8);
			var hour = dd.substring(8,10);
			var min = dd.substring(10,12);
			return year+"-"+month+"-"+day+" "+hour+":"+min;
		}
		else if(trim(dd).length == 14)
		{
			var year = dd.substring(0,4);
			var month = dd.substring(4,6);
			var day = dd.substring(6,8);
			var hour = dd.substring(8,10);
			var min = dd.substring(10,12);
			var sec = dd.substring(12,14);
			return year+"-"+month+"-"+day+" "+hour+":"+min+":"+sec;
		}
		else
		{
			return dd;
		}
	}
}

function trim(stringToTrim) {
    return nullChk(stringToTrim).toString().replace(/^\s+|\s+$/g,"");
}

function nullChk(d)
{
	if(d == "" || d == null || d == 'null' || d == undefined)
	{
		return "";
	}
	else
	{
		return d;
	}
}

function fileEv(el) {
    const plat = el.name;
    const file = el.files[0];
    let file_nm = "";
    const inputDls = document.querySelectorAll("dl.input_long_ver");

    inputDls.forEach(inputDl => {
        const targetImg = inputDl.querySelector(".upload_img_thumb");
        const dlImgChildren = targetImg.children;

        if (dlImgChildren.length > 1) {
            dlImgChildren[1].remove();
        }

        for (var i = 0; i < el.files.length; i++) {
            if (i != 0) { file_nm += ","; }
            file_nm += el.files[i].name;
        }

        if (file) {
            inputDl.querySelector("#" + plat + "_file").value = file_nm;
            // 파일 업로드 시
            if (!file_nm == "") {
                const siblings = (el) => [...el.parentElement.children].filter(node => node != el);
                const del_btn = siblings(inputDl.querySelector("#" + plat + "_file"))[0];

                // del_btn show
                if (del_btn.classList.contains('dn')) {
                    del_btn.classList.remove('dn')
                }
                // del_btn click > hide
                del_btn.onclick = function () {
                    inputDl.querySelector("#" + plat + "_file").value = "";
                    del_btn.classList.add('dn')
                    targetImg.children[1].remove();
                    document.querySelector("div#sns_thumb").classList.remove("on");
                }
            } else {
                return;
            }

        } else {
            inputDl.querySelector("#" + plat + "_file").value = "";
        }

        // 파일 업로드시 미리보기 이미지 첨부
        const reader = new FileReader();

        // 업로드가 잘 되었을 때
        reader.onload = function (event) {
            let img = document.createElement("img");
            img.setAttribute("src", event.target.result);
            targetImg.appendChild(img).classList.add("target_img");
            targetImg.classList.add("on");

            // 파일 이름 변경시 썸네일 이미지 변경
            $("input[type=file]").on('change', function () {
                if (dlImgChildren.length > 1) {
                    dlImgChildren[1].remove();
                }
            });
        };

        reader.readAsDataURL(el.files[0]);
    });
}

//지원자 상세 > 제출하기 클릭 후 로딩화면 
function loadingPage() {
	// 스크롤 막기 (바디)
	//document.body.removeEventListener('scroll', preventScroll, { passive: true });
	//document.body.removeEventListener('touchmove', preventScroll, { passive: true });
	//document.body.removeEventListener('mousewheel', preventScroll, { passive: true });    
	
	let popupLoading = document.querySelector('.popup_loading');
	let popupSubmit = document.querySelector('.mail_sand_popup');

	if(popupSubmit != null){
    	popupSubmit.classList.remove('act');
	}
    popupLoading.classList.add('act');
}

//채용공고 > 제출하기 클릭 후 로딩화면 
function loadingPage() {
	// 스크롤 막기 (바디)
	// document.body.removeEventListener('scroll', preventScroll, { passive: true });
	// document.body.removeEventListener('touchmove', preventScroll, { passive: true });
	// document.body.removeEventListener('mousewheel', preventScroll, { passive: true });    
	userAdd
	let popupLoading = document.querySelector('.popup_loading');
	let popupSubmit = document.querySelector('.pop_submit_apply');

	if(popupSubmit != null){
    	popupSubmit.classList.remove('act');
	}
    popupLoading.classList.add('act');
}

function onlyAlphabet(ele) {
    ele.value = ele.value.replace(/[^\\!-z]/gi,"");
}

//채용공고 지원자 등록
//input 파일 클릭 (파일명)
function onClickInput(fileDOM) {
    let inputBox = fileDOM.closest(".file_box").querySelector(".input_file_box");

	var mb = 1024 * 1024; //1mb(메가)
	var limit_size = mb * 5;
	var resume_size = '';
	
		
    // Update input_file_box with the new file name
    if (fileDOM.files.length > 0) {	
		let ext = fileDOM.files[0].name.substring(fileDOM.files[0].name.lastIndexOf(".") + 1);
		//이력서, 추가파일 확장자 체크
		if(fileDOM.id == "resume"){
			if(ext != 'hwp' && ext != 'docx' && ext != 'ppt' && ext != 'pptx' && ext != 'pdf'){
				alert('이력서 확장자 '+ext+"은/는 지원하지 않습니다")
				return;
			}
			
			//이력서
			/* 파일용량 제한*/
			resume_size = fileDOM.files[0].size;
			 
			if(limit_size < resume_size){
				alert('이력서 파일은 최대 5MB까지 업로드하실 수 있습니다.');
				$('#resume').focus();
			    window.scrollTo({top: $('#resume').offset().top - sctAnimate, behavior: 'smooth'});
			    scrollReset();
				return false;	 
			}			
			}else {
			if(ext != 'hwp' && ext != 'docx' && ext != 'ppt' && ext != 'pptx' && ext != 'pdf' && ext != 'zip'){
				alert('추가파일 확장자 '+ext+"은/는 지원하지 않습니다")
				return;
			}
			 
			//추가자료
			/* 파일용량 제한*/				
			let fileSizeChk = false;
			$("input[name=attach_file").each( function(){
				if(this.files.length != 0){
					let fileSize = this.files[0].size; //업로드한 파일용량
						if(fileSize > limit_size*10){
							alert("추가자료 파일은 최대 50MB까지 업로드하실 수 있습니다.");
							this.focus();
	                        scrollReset();
							fileSizeChk = true;
							return;
						}
				}
			});
			if(fileSizeChk) return;
		}
		
        inputBox.value = fileDOM.files[0].name;		
    } else {
        inputBox.value = "";
    }
}

// input 파일 클릭 시 input 삭제
function onClickDelete(span) {
	var fileBox = span.closest('.file_box');
	if (fileBox) {
		fileBox.remove();
		console.log("file_box가 삭제되었습니다.");
	} else {
		console.log("삭제할 file_box를 찾지 못했습니다.");
	}
}

let fileAdd = (function () {
    let cnt = 2; // 함수 내부에서만 유효한 변수 cnt
  
    return function () {
        // 최대 4개까지만 추가
        if (cnt < 6) {
            // 다음에 생성될 파일 업로드 입력 필드의 ID를 계산
            cnt++;
            console.log(cnt);
    
            // 새로운 파일 업로드 입력 필드를 생성
            var newFileInput = document.createElement("div");
            newFileInput.innerHTML = `
            <div class="file_box">
                <div class="input_file input_upload">
                <input type="text" id="attach_file_ori${cnt}" name="attach_file_ori" class="input_file_box" placeholder="이곳에 파일을 업로드 해주세요.">
                <div class="del_btn cancleBtn"><span onclick="onClickDelete(this)"></span></div>
                <input type="file" class="real_file file_input" id="attach_file${cnt}" name="attach_file" onchange="onClickInput(this);" onclick="fileClear(this);" accept=".hwp, .word, .docx, .ppt, .pptx, .pdf, .zip" data-limit="50mb">
                </div>
            </div>
            `;

            // 생성한 파일 업로드 입력 필드를 first_file 아이디 아래에 추가
            var firstFileDiv = document.getElementById("first_file");
            firstFileDiv.appendChild(newFileInput);

            // 4개에 도달하면 "추가" 버튼 비활성화
            if (cnt === 6) {
            var addButton = document.querySelector(".circle_btn");
            addButton.disabled = true;
            }
        }
    };
})();


//히스토리 삭제 버튼
function closeDep1List(button) {
    var dep1List = button.closest('.dep1_list');
    if (dep1List) {
        dep1List.remove();
    }
}


//2차 오픈
// Business(bz) 등록/수정 > 팝업 템플릿 > 이미지/영상 추가 버튼 동작
const bzPopContAdd = () => {
    $('.cont_box').off().on('click', '.btn_cont_add', function() {
        var thisListCont = $(this).parents('.list_cont');
        var allDlAdd = thisListCont.find('.copy_list_cont'); //여기 마지막에 추가
        var scrollActive = thisListCont.find('.add_scroll_box'); //여기 마지막에 추가
        
        var trCnt = allDlAdd.length + 1;
        var inner = "";

        if (baseCamp != 0) {
            trCnt = baseCamp;
        }

        if (trCnt > 2) {
            scrollActive.addClass('active');
        }

        if (trCnt < 11) {

            inner += '<div class="copy_list_cont radio_select_ver pop_n' + trCnt + '">'
            inner += '<div class="left_cont_box">'
            inner += '<span class="pop_cont_tit">콘텐츠 ' + trCnt + '</span>'
            inner += '<div class="input_radio_wrap">'
            inner += '<label for="imgPopShow0' + trCnt + '">이미지'
            inner += '<input type="radio" id="imgPopShow0' + trCnt + '" name="contPopShow0' + trCnt + '" class="radio-button" value="img" checked="checked">'
            inner += '<span class="custom-radio"></span>'
            inner += '</label>'
            inner += '<label for="videoPopShow0' + trCnt + '">영상'
            inner += '<input type="radio" id="videoPopShow0' + trCnt + '" name="contPopShow0' + trCnt + '" class="radio-button" value="video">'
            inner += '<span class="custom-radio"></span>'
            inner += '</label>'
            inner += '</div>'
            inner += '<div class="cont_wrap">'
            inner += '<div class="cont_inner cont_img img_preview_wrap bsns_input_wrap on">'
            inner += '<div class="input_file">'
            inner += '<input type="text" id="file_pop_ori' + trCnt + '" name="file_pop_ori" class="input_file_box" value="" placeholder="이미지를 등록해주세요.">'
            inner += '<div class="del_btn dn"><span></span></div>'
            inner += '<input type="file" id="file_pop' + trCnt + '" class="real_file file_input file_input" name="file_pop" onchange="bsnsOnClickPreview(this);" onclick="this.value=null;" accept=".gif, .jpg, .jpeg, .png, .webp" data-limit="10mb">'
            inner += '<label class="circle_btn" for="img"><img src="/img/admin/icon/file_upload.png" width="14" alt="첨부파일 업로드"></label>'
            inner += '</div>'
            inner += '<div class="img_preview_box">'
            inner += '<img id="" class="preview_img" name="preview" src="" style="display: none;">'
            inner += '</div>'
            inner += '<p class="file_noti">*권장 이미지 : 000 x 000 / jpg, png, webp</p>'
            inner += '</div>'
            inner += '<div class="cont_inner cont_video">'
            inner += '<div class="textarea_box">'
            inner += '<textarea name="vimeo_pop_' + trCnt + '" id="vimeo_pop_' + trCnt + '" cols="30" rows="10" data-reg="비메오 임베드 코드를 입력하세요." placeholder="비메오 임베드 코드를 입력하세요."></textarea>'
            inner += '</div>'
            inner += '</div>'
            inner += '</div>'
            inner += '<p class="file_noti">*슬라이드는 최대 10개까지 등록할 수 있습니다.</p>'
            inner += '</div>'       
            inner += '</div>'       
            
            allDlAdd.last().after(inner);
            trCnt++;
        } else {
            alert('팝업 템플릿 슬라이드는 최대 10개까지 등록 가능합니다.');
        }

        radioSelect();
    });
}

// Business(bz) 등록/수정 > 팝업 템플릿 > 이미지/영상 + 텍스츠 추가 버튼 동작
const bzAllContAdd = () => {
    $('.cont_box').off().on('click', '.btn_cont_add', function() {
        var thisListCont = $(this).parents('.list_cont');
        var allDlAdd = thisListCont.find('.copy_list_cont'); //여기 마지막에 추가
        var scrollActive = thisListCont.find('.add_scroll_box'); //여기 마지막에 추가
        
        var trCnt = allDlAdd.length + 1;
        var inner = "";

        if (baseCamp != 0) {
            trCnt = baseCamp;
        }

        if (trCnt > 2) {
            scrollActive.addClass('active');
        }

        if (trCnt < 11) {

            inner += '<div class="copy_list_cont radio_select_ver pop_n' + trCnt + '">'
            inner += '<div class="left_cont_box">'
            inner += '<span class="pop_cont_tit">콘텐츠 ' + trCnt + '</span>'
            inner += '<div class="input_radio_wrap">'
            inner += '<label for="imgAllShow0' + trCnt + '">이미지'
            inner += '<input type="radio" id="imgAllShow0' + trCnt + '" name="contAllShow0' + trCnt + '" class="radio-button" value="img" checked="checked">'
            inner += '<span class="custom-radio"></span>'
            inner += '</label>'
            inner += '<label for="videoAllShow0' + trCnt + '">영상'
            inner += '<input type="radio" id="videoAllShow0' + trCnt + '" name="contAllShow0' + trCnt + '" class="radio-button" value="video">'
            inner += '<span class="custom-radio"></span>'
            inner += '</label>'
            inner += '</div>'
            inner += '<div class="cont_wrap">'
            inner += '<div class="cont_inner cont_img img_preview_wrap bsns_input_wrap on">'
            inner += '<div class="input_file">'
            inner += '<input type="text" id="file_pop_ori' + trCnt + '" name="file_pop_ori' + trCnt + '" class="input_file_box" value="" placeholder="이미지를 등록해주세요.">'
            inner += '<div class="del_btn dn"><span></span></div>'
            inner += '<input type="file" id="fileAll' + trCnt + '" class="real_file file_input file_input" name="img_all_file" onchange="bsnsOnClickPreview(this);" onclick="this.value=null;" accept=".gif, .jpg, .jpeg, .png, .webp" data-limit="10mb">'
            inner += '<label class="circle_btn" for="img"><img src="/img/admin/icon/file_upload.png" width="14" alt="첨부파일 업로드"></label>'
            inner += '</div>'
            inner += '<div class="img_preview_box">'
            inner += '<img id="" class="preview_img" name="preview" src="" style="display: none;">'
            inner += '</div>'
            inner += '<p class="file_noti">*권장 이미지 : 000 x 000 / jpg, png, webp</p>'
            inner += '</div>'
            inner += '<div class="cont_inner cont_video">'
            inner += '<div class="textarea_box">'
            inner += '<textarea name="vimeo_all" id="vimeo_all' + trCnt + '" cols="30" rows="10" data-reg="비메오 임베드 코드를 입력하세요." placeholder="비메오 임베드 코드를 입력하세요."></textarea>'
            inner += '</div>'
            inner += '</div>'
            inner += '</div>'
            inner += '<p class="file_noti">*슬라이드는 최대 10개까지 등록할 수 있습니다.</p>'
            inner += '<div class="textarea_box">'
            inner += '<textarea name="pop_all_content' + trCnt + '" id="pop_all_content" cols="30" rows="10" placeholder="내용을 입력해주세요."></textarea>'
            inner += '<p class="txt_file_noti_right txt_cnt">(0/100)</p>'
            inner += '</div>'
            inner += '</div>'       
            inner += '</div>'       
            
            allDlAdd.last().after(inner);
            trCnt++;
        } else {
            alert('팝업 템플릿 슬라이드는 최대 10개까지 등록 가능합니다.');
        }

        radioSelect();
        textAreaCount();
    });
}

// Business(bz) 등록/수정 > 추가 콘텐츠 > 이미지/영상 추가 버튼 동작
const bzContAdd = () => {
    $('.cont_box').off().on('click', '.btn_cont_add', function() {
        var thisListCont = $(this).parents('.list_cont');
        var allDlAdd = thisListCont.find('.copy_list_cont'); //여기 마지막에 추가
        var scrollBox = thisListCont.find('.add_scroll_box'); //여기 마지막에 추가
        
        var cnt = 3;
        var trCnt = allDlAdd.length + 1;
        var inner = "";

        if (baseCamp != 0) {
            trCnt = baseCamp;
        }

        if (trCnt > 2) {
            scrollBox.addClass('active');
        }

        if (trCnt < 4) {
            cnt++;

            inner += '<div class="copy_list_cont radio_select_ver">'
            inner += '<div class="left_cont_box">'
            inner += '<div class="input_radio_wrap">'
            inner += '<label for="imgShow0' + trCnt + '">이미지'
            inner += '<input type="radio" id="imgShow0' + trCnt + '" name="contShow0' + trCnt + '" class="radio-button" value="img" checked="checked">'
            inner += '<span class="custom-radio"></span>'
            inner += '</label>'
            inner += '<label for="videoShow0' + trCnt + '">영상'
            inner += '<input type="radio" id="videoShow0' + trCnt + '" name="contShow0' + trCnt + '" class="radio-button" value="video">'
            inner += '<span class="custom-radio"></span>'
            inner += '</label>'
            inner += '</div>'
            inner += '<div class="cont_wrap">'
            inner += '<div class="cont_inner cont_img img_preview_wrap bsns_input_wrap on">'
            inner += '<div class="input_file">'
            inner += '<input type="text" id="file_ori' + cnt + '" name="file_ori' + cnt + '" class="input_file_box" value="" placeholder="이미지를 등록해주세요.">'
            inner += '<div class="del_btn dn"><span></span></div>'
            inner += '<input type="file" id="file' + cnt + '" class="real_file file_input file_input" name="img_file' + cnt + '" onchange="bsnsOnClickPreview(this);" onclick="this.value=null;" accept=".gif, .jpg, .jpeg, .png, .webp" data-limit="10mb">'
            inner += '<label class="circle_btn" for="img"><img src="/img/admin/icon/file_upload.png" width="14" alt="첨부파일 업로드"></label>'
            inner += '</div>'
            inner += '<div class="img_preview_box">'
            inner += '<img id="" class="preview_img" name="preview" src="" style="display: none;">'
            inner += '</div>'
            inner += '<p class="file_noti">*권장 이미지 : 000 x 000 / jpg, png, webp</p>'
            inner += '</div>'
            inner += '<div class="cont_inner cont_video">'
            inner += '<div class="textarea_box">'
            inner += '<textarea name="vimeo' + trCnt + '" id="vimeo' + trCnt + '" cols="30" rows="10" data-reg="비메오 임베드 코드를 입력하세요." placeholder="비메오 임베드 코드를 입력하세요."></textarea>'
            inner += '</div>'
            inner += '</div>'
            inner += '</div>'
            inner += '<p class="file_noti">*이미지 또는 영상은 최대 3개까지 등록할 수 있습니다.</p>'
            inner += '</div>'       
            inner += '</div>'       
            
            allDlAdd.last().after(inner);
            trCnt++;
        } else {
            alert('추가 콘텐츠는 최대 3개까지 등록 가능합니다.');
        }

        radioSelect();
    });
}


// 라디오 버튼 클릭 시 이미지 또는 링크 텍스트 입력란 노출 (radio_select_ver)
function radioSelect() {
    let radioSelectVers = document.querySelectorAll('.radio_select_ver');
    
    radioSelectVers.forEach(radioSelectVer => {
        let imgRadio = radioSelectVer.querySelector('input[value="img"]');
        let videoRadio = radioSelectVer.querySelector('input[value="video"]');
        
        imgRadio.addEventListener('change', function () {
            if (imgRadio.checked) {
                radioSelectVer.querySelector('.cont_img').classList.add('on');
                radioSelectVer.querySelector('.cont_video').classList.remove('on');
            }
        });
    
        videoRadio.addEventListener('change', function () {
            if (videoRadio.checked) {
                radioSelectVer.querySelector('.cont_video').classList.add('on');
                radioSelectVer.querySelector('.cont_img').classList.remove('on');
            }
        });
    });
}

function textAreaCount() {
    let textareas = document.querySelectorAll("textarea");

    textareas.forEach(function (textarea) {
        let nextElementSibling = textarea.nextElementSibling;

        if (nextElementSibling) {
            let maxLength = 100;

            textarea.addEventListener('input', function () {
                let inputVal = this.value;
                let currentLength = inputVal.length;

                if (currentLength > maxLength) {
                    this.value = inputVal.substring(0, maxLength);
                    nextElementSibling.textContent = "(" + maxLength + " / " + maxLength + ")";
                } else {
                    nextElementSibling.textContent = "(" + currentLength + " / " + maxLength + ")";
                }
            });
        }
    });
}
