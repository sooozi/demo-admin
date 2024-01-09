/* *** common.js
    본 파일은 모든 페이지에서 동작해야 하는
    기본 기능 위주로 작성합니다.
*** */

// jQuery
// $(document).ready(function () {
//     $("select").niceSelect();

//     // drag & drop
//     $("#sortable").sortable({
//         cursor: "move",
//         items: $('.dep1_list'),
//         handle: '.sort_handle',
//     }).disableSelection();
// });


// javascript
window.onload = function () {
    //header import
    async function fetchAndApplyContent(url, targetSelector) {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Failed to load ${url}`);
            }

            const content = await response.text();
            document.querySelector(targetSelector).innerHTML = content;
        } catch (error) {
            console.error(`Error loading ${url}:`, error);
        }
    }

    // head에 layout.html 파일을 로드
    fetchAndApplyContent('/pages/common/layout.html', 'head');

    // admin_header에 header.html 파일을 로드
    fetchAndApplyContent('/pages/common/header.html', '.admin_header');

    window.addEventListener('load', function () {
        let navNewsMenu = document.querySelector('.menu_A');
        if (navNewsMenu) {
            console.log('Element found:', navNewsMenu);
            navNewsMenu.classList.add('menu_on');
            console.log('Class added:', navNewsMenu.classList.contains('menu_on'));
        } else {
            console.log('Element not found');
        }
    });
    
    // section tab
    let secTabWrapper = $('.sec_tab_wr:not(.go_link)');
    let secTabContWrapper = secTabWrapper.siblings('.sec_tab_cont_wr');

    secTabWrapper.on('click', '.sec_tab_it', function (e) {
        e.preventDefault();

        let $this = $(this);
        let idx = $this.index();
        let secTabItem = secTabContWrapper.find('.sec_tab_cont');
        secTabItem.hide();
        $this.addClass('act').siblings().removeClass('act');
        secTabItem.hide().eq(idx).show();

        // sticky 있는 경우
        let stickyWrapper = secTabItem.find('.inner_tab_wr');
        if (stickyWrapper.length) {
            secTabItem.find('.inner_tab_cont:first-child').addClass('act').siblings().removeClass('act');
        }

    })


    // drag & drop 콘텐츠가 2개 이상인 경우 적용
    let sortHandle = document.querySelectorAll('.sort_handle'),
        tdDrag = document.querySelectorAll('.td_drag'),
        sortHandleLength = sortHandle.length;

    // 2개 이상일 때만 순서 이미지 표시
    if (sortHandleLength < 2) {
        tdDrag.forEach(element => {
            element.classList.remove('sort_handle');
        });
    } else {
        tdDrag.forEach(element => {
            element.classList.add('sort_handle');
        });
    }

    // 헤더 > 유저 정보 'open' 클래스 추가
    // let userBtn = document.querySelector('.header_menu img'),
    //     userWrap = document.querySelector('.user_info_wrap');

    // userBtn.addEventListener('click', () => {
    //     userWrap.classList.toggle('open');
    //     userBtn.classList.toggle('on');
    // });

    // 서브 메뉴 7개 이상 시 드롭 다운 추가
    let depth02TitList = document.querySelectorAll('.sub_menu_drop .sub_depth02_tit');

    depth02TitList.forEach(function (depth02Tit) {
        let subDrop = depth02Tit.closest('.sub_menu_drop'),
            depth03List = subDrop.querySelectorAll('.sub_menu_depth03 .list_round'),
            count = depth03List.length;

        if (count >= 5) {
            subDrop.classList.add('active');
        } else {
            depth02Tit.classList.add('no_pointer');
        }
    });


    //input_list_wrap checkbox before line
    let listBoxes = document.querySelectorAll(".list_box");

    listBoxes.forEach((listBox, index) => {
        let inputCheckboxes = listBox.querySelectorAll(".list_depth02 input[type='checkbox']"),
            count = inputCheckboxes.length;

        if (count < 1) {
            listBox.className += ' no_line';
        };
    });

    // 230704 popup
    $(".my_main .btn_password_edit").click(function () {
        $('.popup_wrap').addClass('act');
    })

    $(".btn_delete").click(function () {
        $('.popup_wrap.pop_category_delete').addClass('act');
    })
    $(".btn_upload").click(function () {
        $('.popup_wrap.pop_category_edit').addClass('act');
        $('#idx').val(this.dataset.idx)
        $('#edit_category').val(this.dataset.category)
    })
    $(".popup_close").click(function () {
        $('.popup_wrap').removeClass('act');
    })

    //지원자 상세 팝업
    $(".apply .admin_edit_save").click(function () {

        if ($("#pass_yn").val() == 'Y' || $("#pass_yn").val() == 'N') {
            $('.popup_wrap.mail_sand_popup').addClass('act');
        } else {
            mailsend()
        }
    })

    $('.cancel_btn').click(function () {
        $('.popup_wrap.mail_sand_popup').removeClass('act');
    })

    // 230704 password hide & show
    $('.list_cont i').on('click', function () {
        $(this).toggleClass('on');
        if ($(this).hasClass('on')) {
            $(this).siblings('input').attr('type', "text");
        } else {
            $(this).siblings('input').attr('type', 'password');
        }
    });

    // mypage_edit email select
    $('#email_select').click(function () {
        $(this).toggleClass('on')
    })

    // mypage popup savebtn password check
    $('#password1').focusout(function () {
        pwCheck();
    })

    // mypage popup savebtn password check
    $('.save_btn').click(function () {
        pwCheck02();
    })

    // admin_edit password check
    $('#password3').focusout(function () {
        pwFocusout();
    });

    // admin_edit password check
    $('#password4').focusout(function () {
        pwFocusout02();
    });

    // checkbox only one check
    $('.admin_edit input[type="checkbox"][name="chk_list"]').click(function () {

        if ($(this).prop('checked')) {

            $('.admin_edit input[type="checkbox"][name="chk_list"]').prop('checked', false);

            $(this).prop('checked', true);

        }

    });

    $('.admin_edit input[type="checkbox"][name="authority_list"]').click(function () {

        if ($(this).prop('checked')) {

            $('.admin_edit input[type="checkbox"][name="authority_list"]').prop('checked', false);

            $(this).prop('checked', true);

        }

    });

    // 삭제 버튼 클릭 이벤트 핸들러 등록
    document.addEventListener('click', function (event) {
        var target = event.target;
        if (target.classList.contains('cancleBtn')) {
            var hashtagWrap = target.closest('.hashtag_wrap');
            if (hashtagWrap) {
                hashtagWrap.remove();
                console.log("해시태그가 삭제되었습니다.");
            } else {
                console.log("삭제할 해시태그를 찾지 못했습니다.");
            }
        }
    });

    //이미지 미리보기 > 이미지가 있을 때 클래스 on 추가
    // const preview = document.querySelector(".img_preview_box .preview_img");
    // const previewBox = document.querySelector(".img_preview_box");
    // const imgSrc = preview.getAttribute("src");

    // if (imgSrc) {
    //     previewBox.classList.add("on");
    // } else {
    //     previewBox.classList.remove("on");
    // }

    //이미지 미리보기 > 이미지가 있을 때 삭제 버튼 추가
    let imgWrs = document.querySelectorAll(".img_preview_wrap");
    
    imgWrs.forEach(function (imgWr) {
        const preview = imgWr.querySelector(".img_preview_box .preview_img");
        const delBtn = imgWr.querySelector(".del_btn");
        const imgSrc = preview.getAttribute("src");
    
        if (imgSrc) {
            delBtn.classList.remove("dn");
            preview.style.display ='block';
        } else {
            delBtn.classList.add("dn");
            preview.style.display ='none';	
        }
    });


    // let textarea = document.getElementById('textareaCnt');

    // if (textarea) {
    //     let textCountElement = document.querySelector('.txt_cnt');
    //     let maxLength = 100;
    
    //     textarea.addEventListener('input', function() {
    //         let inputVal = this.value;
    //         let currentLength = inputVal.length;
          
    //         if (currentLength > maxLength) {
    //         this.value = inputVal.substring(0, maxLength);
    //         textCountElement.textContent = "(" + maxLength + " / " + maxLength + ")";
    //         } else {
    //         textCountElement.textContent = "(" + currentLength + " / " + maxLength + ")";
    //         }
    //     });
    // }

    //all checkbox
    $("input[name=chk_list]").click(function() {
		var total = $("input[name=chk_list]").length;
		var checked = $("input[name=chk_list]:checked").length;

		if(total != checked) $("#chk_all").prop("checked", false);
		else $("#chk_all").prop("checked", true); 
	});

} //window.onload

// 230704 dim click popup close
$(document).mouseup(function (e) {
    let LayerPopup = $(".popup_wrap");
    if (LayerPopup.has(e.target).length === 0) {
        LayerPopup.removeClass("on");
    }
});

document.ready = function () {

    // admin list - bg cont_box color change
    let contBox = document.querySelector('.cont_box'),
        contInner = document.querySelector('.cont_box > div'),
        adminLayout = document.querySelector('.admin_layout');

    if (contInner.classList.contains('list_wrapper')) {
        adminLayout.classList.add('bg_gray');
        contBox.classList.add('bg_white');
    } else {
    };

}

// textarea 100자까지 작성 & 글자수 카운팅
textAreaCount();




