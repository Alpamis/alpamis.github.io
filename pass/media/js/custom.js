$(document).ready(function(){

	$('input:radio,input:checkbox,input:file, select').styler({
	});


// burger------------------------------------------------------------
	$('.click-menu').on('click', function() {
		

		$('.center-menu').slideToggle(300, function(){

			if($(this).css('display')==='none'){
				$(this).removeAttr('style');
			}
		});
	});

	$(".click-menu").click(function(){
			$(this).toggleClass("close");
	});


//Topsearch--------------------------------------
	  $('.center-ico .icon-search2').click(function(){
	  	
	    if ( $(this).hasClass('current')) {
	      $(this).removeClass('current');
	      $('.search').slideUp(400);
	    } else {
	      $(this).addClass('current');
	        $('.search').slideDown(400);
	    }
	    return false;
	  });

// Модальное окно----------------------------------------------

	//Modal age 
	$('.user').click(function(){
		$('body').addClass('overflow');
		$('.fader').fadeIn(1000);
		$('.modalfade').fadeIn(1000);
	});


	//Modal age close
	$('.modalfade .btn').click(function(){
		$('body').removeClass('overflow');
		$('.fader').fadeOut();
		$('.modalfade').fadeOut();
	});



// вкладки------------------------------------------------
	$( "#tabs" ).tabs();


//Accordion-----------------------------------------------------
    $('.br_sidelist > li > a').click(function(){
        if ($(this).parent('li').hasClass('current')){
            $(this).parent('li').removeClass('current');
            $(this).next().slideUp();
        }else{
            $('.br_sidelist > li').removeClass('current');
            $(this).parent('li').addClass('current');
            $('.br_sideblock .br_sidelist li ul').slideUp();
            $(this).next().slideDown();
        }
    });

    $('.br_input input').focus(function(){
        $(this).parent().addClass('current');
    });


    $('.br_input input').blur(function(){
        if($(this).val()!=''){
            
        }else{
            //$(this).parent().find('label').hide();
            $(this).parent().removeClass('current');
        }
    });

// ============================================================
	  $('.lang-btn').click(function(){
	  	
	    if ( $(this).hasClass('current')) {
	      $(this).removeClass('current');
	      $('.in-lang').slideUp(400);
	    } else {
	      $(this).addClass('current');
	        $('.in-lang').slideDown(400);
	    }
	    return false;
	  });

//===================================================

	  	  $('.nav-btn').click(function(){
	  	
	    if ( $(this).hasClass('current')) {
	      $(this).removeClass('current');
	      $('.in-nav').slideUp(400);
	    } else {
	      $(this).addClass('current');
	        $('.in-nav').slideDown(400);
	    }
	    return false;
	  });








});

// input:radio  - пример как подключить инпуты с (type)ом
// input:checkbox - пример как подключить инпуты с (type)ом
// input:file - пример как подключить инпуты с (type)ом
// <option data-placeholder="Выберите город"></option> - текст по умолчанию