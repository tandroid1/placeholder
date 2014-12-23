!function($){
  "use strict";

  $.fn.placeholder = function(options) {

    var settings = $.extend({
      textColor: ''
    }, options);

    if (!Modernizr.placeholder) {
      return this.each(function() {

        var base = this,
            $base = $(base);

        if ($base.attr('type') === "text" || $base.is("textarea")) {

          var placeholder,
            label,
            $container,
            paddingTop,
            paddingBottom,
            paddingLeft,
            paddingRight,
            color;

          placeholder = $base.attr('placeholder');

          $base.wrap('<div class="hasPlaceholder">');

          $container = $base.parent();

          $container.css({
            position: "relative"
          });

          $container.append('<span class="placeholder">' + placeholder + '</span>');

          label = $container.find(".placeholder");

          if ( base.value.length != 0 ) {
            label.hide();
          }

          paddingTop = $base.css("padding-top");
          paddingBottom = $base.css("padding-bottom");
          paddingLeft = $base.css("padding-left");
          paddingRight = $base.css("padding-right");
          color = settings.textColor || $base.css('color');

          label.css({
            position: "absolute",
            top: "0",
            left: "0",
            paddingTop: paddingTop,
            paddingBottom: paddingBottom,
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
            color: color
          });

          $base.keypress(function(e) {
            if (isNumeric(e.keyCode)) {
              label.hide();
            }
          });

          $base.keyup(function() {
            if (this.value.length == 0) {
              label.show();
            }

          });

          label.click(function() {
            $base.focus();
          });
        }
      });
    }

    function isNumeric(char){
      return !/[^a-zA-Z0-9]/.test(char);
    }

  };
}(jQuery);