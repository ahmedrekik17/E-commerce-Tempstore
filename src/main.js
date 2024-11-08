var siteMenuClone = function () {
  '<div class="site-mobile-menu"></div>'.prependTo(".site-wrap");

  '<div class="site-mobile-menu-header"></div>'.prependTo(".site-mobile-menu");
  '<div class="site-mobile-menu-close "></div>'.prependTo(
    ".site-mobile-menu-header"
  );
  '<div class="site-mobile-menu-logo"></div>'.prependTo(
    ".site-mobile-menu-header"
  );

  '<div class="site-mobile-menu-body"></div>'.appendTo(".site-mobile-menu");

  ".js-logo-clone".clone().appendTo(".site-mobile-menu-logo");

  '<span class="ion-ios-close js-menu-toggle"></div>'.prependTo(
    ".site-mobile-menu-close"
  );

  ".js-clone-nav".each(function () {
    this.clone()
      .attr("class", "site-nav-wrap")
      .appendTo(".site-mobile-menu-body");
  });

  setTimeout(function () {
    var counter = 0;
    ".site-mobile-menu .has-children".each(function () {
      this.prepend('<span class="arrow-collapse collapsed">');

      this.find(".arrow-collapse").attr({
        "data-toggle": "collapse",
        "data-target": "#collapseItem" + counter,
      });

      this.find("> ul").attr({
        class: "collapse",
        id: "collapseItem" + counter,
      });

      counter++;
    });
  }, 1000);

  "body".on("click", ".arrow-collapse", function (e) {
    if (this.closest("li").find(".collapse").hasClass("show")) {
      this.removeClass("active");
    } else {
      this.addClass("active");
    }
    e.preventDefault();
  });

  window
    .resize(function () {
      var w = this.width();

      if (w > 768) {
        if ("body".hasClass("offcanvas-menu")) {
          "body".removeClass("offcanvas-menu");
        }
      }
    })("body")
    .on("click", ".js-menu-toggle", function (e) {
      e.preventDefault();

      if ("body".hasClass("offcanvas-menu")) {
        "body".removeClass("offcanvas-menu");
        this.removeClass("active");
      } else {
        "body".addClass("offcanvas-menu");
        this.addClass("active");
      }
    })(
      // click outisde offcanvas
      document
    )
    .mouseup(function (e) {
      var container = ".site-mobile-menu";
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ("body".hasClass("offcanvas-menu")) {
          "body".removeClass("offcanvas-menu");
        }
      }
    });
};
siteMenuClone();
