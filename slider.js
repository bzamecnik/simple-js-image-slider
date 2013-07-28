(function($) {
	
	function initSlider(slider, settings) {
		slider.width($("img", slider).width());
		slider.height($("img", slider).height());
		
		createPlaybackButton();
		$("img:first-child", slider).addClass("active");
		slider.click(toggleCycling);
		
		function createPlaybackButton() {
			slider.append("<div class='playback-button-bg'></div>");
			slider.append("<i class='playback-button icon-play-sign'></i>");
			var button = $(".playback-button", slider);
			button.css("font-size", slider.width() / 4);
			button.css("left", (slider.width() - button.width()) / 2);
			button.css("top", (slider.height() - button.height()) / 2);
		}
		
		function toggleCycling() {
			togglePlayback(!slider.hasClass("playing"));
		}

		function rotateForward() {
			if (!slider.hasClass("playing")) {
				toggleActiveImage($("img.active", slider), $("img:first-child", slider));
				return;
			}
			var $active = $("img.active", slider);
			var $next = $active.next("img");
			var isLastImage = $next.length == 0;
			if (isLastImage) {
					$next = $("img:first-child", slider);
			}
			$next.css('z-index', 2);
		  $active.fadeOut(250, function() {
				toggleActiveImage($active, $next);
			});
			if (isLastImage && !settings.infiniteLoop) {
				togglePlayback(false);
			}
			if (slider.hasClass("playing")) {
				setTimeout(rotateForward, 1000);
			}
		}
		
		function toggleActiveImage($old, $new) {
			$old.css('z-index', 1).show().removeClass('active');
			$new.css('z-index', 3).addClass('active');
		}
		
		function togglePlayback(isPlaying) {
			slider.toggleClass("playing", isPlaying);
			if (isPlaying) {
				setTimeout(rotateForward, 750);
			}
			var button = $(".playback-button", slider);
			button.toggleClass("icon-play-sign", !isPlaying)
				.toggleClass("icon-pause", isPlaying);
		}
	}

	$.fn.slider = function(options) {
		var settings = $.extend({
	      // the defaults.
	      inifiniteLoop: false
	  }, options);
		
		return this.each(function() {
			$this = $(this);
			var settings = {
				infiniteLoop: $this.hasClass("infinite")
			};
			initSlider($this, settings);
		});
	}
})(jQuery);
