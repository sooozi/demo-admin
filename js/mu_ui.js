/* *** mu_ui.js
    [from. M-CMS]
    본 파일은 기능 연동과 전혀 상관없이
    순수하게 화면 변동만 있는 경우 작성합니다.
    220419 강은영 *** */

document.addEventListener("DOMContentLoaded", function(event) {

	//사용자별 채용공고, 입사지원 법인/브랜드 관리
    $.ajax({
        type : "POST",
        url : "/admin/corporation_menu",
        dataType : "text",
        data : {
        },
        error : function() {
            console.log("AJAX ERROR");
			location.href="/admin/user/logout";
        },
        success : function(data) {
            var result = JSON.parse(data);
			
			$(".user_menu").text(result.login_name);
			$(".user_id").text(result.login_id);
			
			var url = $(location).attr('href');
			
			//채용공고
			var InnerHtml = '';
			for(var i=0;i<result.list.length;i++){
				var addclass = '';
				if(url.includes('job_notice_inspiration?cor_idx='+result.list[i].idx)){
					addclass = 'list_round on';
				}else {
					addclass = 'list_round';
				}
				
				InnerHtml += '<li class="'+addclass+'"><a href="/admin/recruit/job_notice_inspiration?cor_idx='+result.list[i].idx+'&name='+result.list[i].name+'">'+result.list[i].name+'</a></li>'
			}
			$(".user_job_notice").append(InnerHtml);
			
			//입사지원
			InnerHtml = '';
			for(var i=0;i<result.list.length;i++){
				var addclass = '';
				if(url.includes('apply_inspiration?cor_idx='+result.list[i].idx)){
					addclass = 'list_round on';
				}else {
					addclass = 'list_round';
				}
				
				InnerHtml += '<li class="'+addclass+'"><a href="/admin/apply/apply_inspiration?cor_idx='+result.list[i].idx+'&name='+result.list[i].name+'">'+result.list[i].name+'</a></li>'
			}
			$(".user_apply").append(InnerHtml);
			
			 // 서브 메뉴 7개 이상 시 드롭 다운 추가
		    let depth02TitList = document.querySelectorAll('.sub_menu_drop .sub_depth02_tit');
		
		    depth02TitList.forEach(function(depth02Tit) {
		        let subDrop = depth02Tit.closest('.sub_menu_drop'),
		            depth03List = subDrop.querySelectorAll('.sub_menu_depth03 .list_round'),
		            count = depth03List.length;
		
		        if (count >= 7) {
		            depth02Tit.addEventListener('click', function() {
		                subDrop.classList.toggle('active');
		            });
		        } else {
		            depth02Tit.classList.add('no_pointer');
		        }
		    });	

			//메뉴 권한 설정
			if(result.master_permission == 'N'){
				$(".menu_yn").css("display","none");
			}
						
			if(result.master_permission == "Y"){
				$("#C1").css("display","list-item");	
			}
			
			//콘텐츠 클릭시 권한에따라 링크 다르게
			if(result.menu_permission.indexOf('A3') != -1){
				$(".menu_banner").attr('href','/admin/content/news')
			}else if(result.menu_permission.indexOf('A1') != -1){
				$(".menu_banner").attr('href','/admin/content/bi')
			}else if(result.menu_permission.indexOf('A2') != -1){
				$(".menu_banner").attr('href','/admin/content/history')
			}else if(result.menu_permission.indexOf('A4') != -1){
				$(".menu_banner").attr('href','/admin/content/business')
			}
				
			for(i=0;i<result.menu_permission.length;i++){				
				$("#"+result.menu_permission[i]).css("display","block");
				
				if(result.menu_permission[i].substring(0,1) == "A"){
					$(".menu_A").css("display","list-item");	
				}	
				if(result.menu_permission[i].substring(0,1) == "B"){
					$(".menu_B").css("display","list-item");
				}
			}
	    }
	});


    /*let gnbDepth1 = document.querySelectorAll('.sub_menu_depth2 a');
    gnbDepth1.forEach(function(item, index, arr){    
        gnb.init(item);
    })*/

    if(document.querySelector('.list_search .popup_detail')){
        let searchPopupDetail = new muPopup('.list_search .popup_detail', {
            'triggerEl': '.search_detail_btn'
        });
    }
    if(document.querySelector('.list_setting_time .popup_detail')){
        let timePopupDetail = new muPopup('.list_setting_time .popup_detail', {
            'triggerEl': '.list_btn_time',
            'layerFl' : true
        });
    }
    document.querySelectorAll('.input_file input[type="file"]').forEach(function(item, index, arr){
        item.addEventListener('change', function(){
			if(item.id == 'resume' || item.id == 'attach_file1') return;
            let val = item.value ? item.files[0].name : '',
                fakeInput = item.previousElementSibling,
                hasLimit = item.getAttribute('data-limit') ? item.getAttribute('data-limit').toLowerCase() : null,
                limitSize = hasLimit ? Number(hasLimit.replace(/[^0-9]/g,"")) : null,
                fileSize = item.value ? item.files[0].size : 0;
            //용량 제한이 있는 경우
            if(hasLimit){
                let sizeUnit = hasLimit.substring(hasLimit.length - 2, hasLimit.length);
                switch(sizeUnit){
                    case 'kb': limitSize = limitSize * 1024; break;
                    case 'mb': limitSize = limitSize * 1024 * 1024; break;
                    case 'gb': limitSize = limitSize * 1024 * 1024 * 1024; break;
                }
                //용량 검증
                if(limitSize < fileSize){
                    alert('용량 초과');
                    item.value = '';
                    fakeInput.value = '';
                    return false;
                }
            }
            fakeInput.value = val;
        })
    });
    
    document.querySelectorAll('.input_content_count').forEach(function(item, index, arr){    
        item.addEventListener('keyup', function(){
            textCount(item);
        });
    })

    // 관리자 목록
    const headeradmins = document.querySelectorAll('.container_top .admin_list');
    const tableadmins = document.querySelectorAll('table .admin_list');
    if(headeradmins){
        adminCount(headeradmins, 4)
    }
    if(tableadmins){
        adminCount(tableadmins, 3)
    }    
});

function adminCount(adminLists, max){
    adminLists.forEach((adminList) => {
        const admins = adminList.querySelectorAll('li');
        const moreLi = document.createElement('li');
        let count = 0;
        moreLi.classList.add('more');

        admins.forEach((admin, idx) => {
            if(idx > max-1){
                admins[idx].style.display = 'none';
                admin.closest('.admin_list').appendChild(moreLi);
                count++;
            }
        })
        moreLi.textContent = `+${count+1}`;
    })
}

function muPopup(selector, option){
    try{
        //변수 정의
        const _popup = document.querySelector(selector),
            _popupWrapper = option.layerFl ? null : _popup.parentElement,
            basicStatus = _popup.style.display,
            _this = this;
        let popupStatus = 'close'; //초기에는 팝업이 닫힌 상태


        //메소드
        this.options = {
            triggerEl: option.triggerEl ? option.triggerEl : null,
            layerFl: option.layerFl ? true : false
        },
        this.init = function(){
        }
        this.open = function(){
            _popup.style.display = basicStatus;
            popupStatus = 'open';
        },
        this.close = function(){
            _popup.style.display = 'none';
            popupStatus = 'close';
        }

        //시동
        _this.close();
        _popup.classList.add('muPopup_content'); //본인에게 클래스 추가
        if(this.options.triggerEl){
            document.querySelector(this.options.triggerEl).addEventListener('click', function(){
                if(popupStatus === 'close'){
                    _this.open();
                    if(_popupWrapper !== null){
                        _popupWrapper.classList.add('on')
                    }
                }else{
                    _this.close();
                    if(_popupWrapper !== null){
                        _popupWrapper.classList.remove('on')
                    }
                }
            })
        }

        if(this.options.layerFl){
            _popup.querySelector('.popup_close').addEventListener('click', function(){
                _this.close();
            })
        }
        if(!this.options.layerFl && _popupWrapper){
            _popupWrapper.classList.add('muPopup_wrapper'); //부모 요소에 클래스 추가
            // _popupWrapper.querySelector('.popup_close').addEventListener('click', function(){
            //     _this.close();
            // })
        }
    } catch(error){
        console.log(error);
    }
}

function textCount(_input){
    let inputName = _input.getAttribute('id'),
        cnt = _input.parentElement.querySelector('[data-target=' + inputName + ']');

    this.count = function(){
        let currentCount = _input.value.length,
            maxCount = Number(_input.getAttribute('data-max-count'));
        cnt.querySelector('b').innerText = currentCount;
    }
    
    try{
        this.count();
    }catch(error){
        console.log(error.message);
    }
}

function muTab(tab){
    let _this = this,
        tabWrapper = document.querySelector(tab),
        tabBtn = tabWrapper.querySelectorAll('.tab_btn'),
        tabContent = tabWrapper.querySelectorAll('.tab_content');

    this.data = {
        length: tabBtn.length,
        initialTab: 0
    }

    this.init = function(){
        for(a=0;a<this.data.length;a++){
            if(a === this.data.initialTab){
                tabBtn[a].classList.add('act');
            }else{
                tabContent[a].style.display = 'none';
                //tabContent[a].getAttribute('')
            }

            tabBtn[a].addEventListener('click', this.tabClick);
        }
    },
    this.tabClick = function(event){
        let targetTab = this.getAttribute('href');
        
        event.preventDefault();
        for(i=0;i<_this.data.length;i++){
            tabBtn[i].classList.remove('act');
            tabContent[i].style.display = 'none';
        }
        this.classList.add('act');
        document.querySelector(targetTab).style.display = 'block';
        //window.location = targetTab;
    }

    this.init();
}