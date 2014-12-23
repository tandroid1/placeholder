!function($){
  "use strict";

  $.fn.placeholder = function(options) {

    var settings = $.extend({
      textColor: ''
    }, options);

    if (!Modernizr.placeholder) {
      return this.each(function() {

        var $base = $(this);

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
          
          if ( $base.val().length != 0 ) {
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

          $base.keyup(function() {
            if ($(this).val().length > 0) {
              label.hide();
            } else {
              label.show();
            }
          });

          label.click(function() {
            $base.focus();
          });
        }
      });
    }
  };


}(jQuery);