"use strict";

angular.module("angular-visible", []).directive("checkVisible", function() {
    return {
        restrct: "A",
        compile: function(tElement, tAttrs) {
            var $ngRepeat = tElement.find("[ng-repeat]");
            if ($ngRepeat) $ngRepeat.attr("on-ng-repeat-finished", "");
            return function(scope, iEl, iAt) {
                var o = {
                    _el: iEl[0],
                    _targets: [],
                    _className: iAt.checkVisible,
                    _isSupportClassName: false,
                    _delay: Number(iAt.checkDelay),
                    _delayTimer: null,
                    refresh: function() {
                        if (this._el && "getElementsByClassName" in this._el) {
                            this._targets = this._el.getElementsByClassName(this._className);
                            this._isSupportClassName = true;
                            this.refresh = function() {};
                        } else this._targets = iEl.find("." + this._className);
                    },
                    check: function() {
                        var self = this;
                        if (this._delayTimer) {
                            clearTimeout(this._delayTimer);
                            this._delayTimer = null;
                        }
                        if (this._delay < 0) this._check(); else this._delayTimer = setTimeout(function() {
                            self._check();
                            self._delayTimer = null;
                        }, this._delay);
                    },
                    _check: function() {
                        var visible = [], area = {
                            top: 0,
                            left: 0,
                            bottom: window.innerHeight,
                            right: window.innerWidth
                        };
                        for (var i = this._targets.length - 1, elTarget, targetArea, isVisible; i >= 0; i--) {
                            elTarget = this._targets[i];
                            targetArea = elTarget.getBoundingClientRect();
                            isVisible = !(targetArea.bottom < area.top || area.bottom < targetArea.top || targetArea.right < area.left || area.right < targetArea.left);
                            if (isVisible) visible.unshift(elTarget);
                        }
                        jQuery(visible).removeClass(this._className);
                        visible.length && scope.$emit("visible", visible);
                    }
                };
                jQuery(window).on("scroll", function() {
                    o.check();
                }).on("resize", function() {
                    o.check();
                });
                scope.$on("ngRepeatFinished", function(e) {
                    o.refresh();
                    o.check();
                });
                scope.$on("destroy", function(e) {
                    clearTimeout(this._delayTimer);
                    jQuery(window).off("resize").off("scroll");
                });
            };
        }
    };
}).directive("onNgRepeatFinished", function($timeout) {
    return {
        link: function(scope, iEl, iAt) {
            if (scope.$last) $timeout(function() {
                scope.$emit("ngRepeatFinished");
            });
        },
        restrct: "A"
    };
});