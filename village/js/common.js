$(document).ready(function() {

	$(window).load(function() {

	

}); 

	$(".people div").hide().prev().click(function() {
	$(this).parents(".people").find("div").not(this).slideUp().prev().removeClass("active");
	$(this).next().not(":visible").slideDown().prev().addClass("active");
});

	$(".menu_top_button").click(function() {
		$(".top_menu ul").slideToggle();
	});
	$(".hidden_photo").click(function() {
		$(".sider_container").slideToggle();
	});
	$(".hidden_photo_2").click(function() {
		$(".sider_container_2").slideToggle();
	});
	$(".weather_hidden").click(function() {
		$(".show_weather").slideToggle();
	});
	$(".loader_inner").fadeOut();
	$(".loader").delay(200).fadeOut("slow");
	$(".top_line h1").animated("fadeInDown", "fadeOutUp");
	$(".top_line p").animated("fadeInUp", "fadeOutDown");
	

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	$(window).scroll(function() {
		if($(this).scrollTop() !=0) {
			$('#up').fadeIn();
		} else {
			$('#up').fadeOut();
		}
	});
	$('#up').click(function() {
		$('body,html').animate({scrollTop:0}, 1500);
	});

	//Stellar - Parallax Plugin
	//Документация: https://github.com/markdalgleish/stellar.js
	//HTML: <div class="parallax" data-stellar-background-ratio="0.5"></div>
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});

	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".down_down"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});

	//Masked Input Plugin
	//Документация: http://digitalbush.com/projects/masked-input-plugin/
	//$("#date").mask("99/99/9999", {placeholder : "mm/dd/yyyy"});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	//$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});
	//Скролл до id, указанного в hash URL
	var elem = window.location.hash;
	if(elem) {
		$.scrollTo(elem, 800, {
			offset: -90
		});
	};

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 3,
		autoHeight : false,
		loop: true,
		autoWidth: false
	});

	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function() {
		owl.trigger("owl.prev");
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#contact").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("#contact").serialize()
		}).done(function() {
			alert("Спасибо за заявку! Мы скоро с вами свяжемся");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");

}); 

// Адаптивные скрипты, которые срабатывают только при определенном разрешении экрана
// Документация: https://github.com/maciej-gurban/responsive-bootstrap-toolkit
(function($, document, window, viewport) {
	function resizeWindow() {
		// $("a").click(function() {
		// 	if (viewport.is("lg")) {
		// 		return false;
		// 	};
		// });
};
$(document).ready(function() {
	resizeWindow();
});
$(window).bind("resize", function() {
	viewport.changed(function(){
		resizeWindow();
	});
});
})(jQuery, document, window, ResponsiveBootstrapToolkit);