$.fn.bootstrapSize = function (options) {
    function Methods(target, options) {
        var self = this;

        self.getSize = function () {
            return target.find("[data-size]:visible").data("size");
        };

        self.refresh = function () {
            var sz = self.getSize();
            var name = options.sizeNames[sz];

            target.find(".current-size").html(name);

            if (options.console)
                console.log("current size: " + name);

            return sz;
        }
    }

    return this.each(function () {
        var $this = $(this);

        var opt = $.extend({}, {
            "enabled": true,
            "console": false,
            "sizeNames": {
                "lg": "Large",
                "md": "Medium",
                "sm": "Small",
                "xs": "Extra Small"
            }
        }, options, $this.data());

        var appendSpan = function (sz) {
            if ($this.find("[data-size='" + sz + "']").length === 0) {
                $this.append($("<span/>", { "class": "visible-" + sz + "-inline", "data-size": sz }));
        };

        var _currentSize = null;

        var methods = new Methods($this, opt);

        $this.data("methods", methods);

        if (opt.enabled) {
            appendSpan("lg");
            appendSpan("md");
            appendSpan("sm");
            appendSpan("xs");

            $(window).on("resize", function (e) {
                var sz = methods.refresh();
                if (sz !== _currentSize) {
                    var previous = { "size": _currentSize, "name": opt.sizeNames[_currentSize] };
                    var current = { "size": sz, "name": opt.sizeNames[sz] };

                    _currentSize = sz;

                    $this.trigger("changed.bs.size", [previous, current]);
                }
            });

            _currentSize = methods.refresh();
        }
    });
};