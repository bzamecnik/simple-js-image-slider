Simple JS Image Slider
======================

This is a very simple image slider written as a jQuery plugin.

It turns a set of images into a video-like slide show. You can let it loop once or infinitely. You can stop it and return to the first image.

It automatically adds a Play/Stop button with some nice icons.

How to use it?
--------------

Put some images into a div with class "slider".

```html
...
  <link href="slider.css" media="screen" rel="stylesheet" type="text/css" />
  <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet" type="text/css">
</head>
```

Download the slider JS and CSS and put them somewhere on your site or a CDN.

```html
<div class="slider">
  <img src="image1.jpg" alt="First image">
  <img src="image2.jpg" alt="Second image">
  <img src="image3.jpg" alt="Third image">
</div>
```

Link the required resources.

- slider and Font Awesome CSS into the head element
- jQuery and slider JS before the end of the body element


```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="slider.js" type="text/javascript"></script>
```

Call the slider from you page.

```html
<script type="text/javascript">
$(window).load(function(){
	 $(".slider").slider();
});
</script>
```

You can have as many sliders on a page as you want.

FAQ
---

### How to enable the infinite loop mode?

By default the slideshow stops after one complete loop. To enable an infinite loop add the "infinite" class to the slider div.

```html
<div class="slider infinite">
  ...
</div>
```

### How to go without Font Awesome?

In case you don't want to use the icons provided by Font Awesome, please redefine them in thee CSS. Example:

```css
.slider .icon-play-sign {
  /* ... you code here ... */
}
.slider .icon-stop {
  /* ... you code here ... */
}
```

### How to change the time interval?

The time interval between the images is fixed now. You can fork the repo and change the script, eg. parametrize it.

### Can't do _put for feature here_?

Probably not. There's a ton of similar script on the net. I just wanted something embarassingly simple and it was easier to write one than to tailor the existing ones. You may extend it as you with.

### Can I see it in action?

- [Demo](http://bzamecnik.github.io/simple-js-image-slider/)
- [A real-world page with multiple sliders](http://harmoneye.tumblr.com/post/56697720142/scale-based-pitch-class-circle)

Requirements
------------
- jQuery - required
- Font Awesome (for the Play and Stop icons) - optional

About
-----

- Author: Bohumir Zamecnik <bohumir.zamecnik@gmail.com>
- License: MIT
