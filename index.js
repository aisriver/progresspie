; (function () {
    "use strict"
    var _global;
    var progresspie = function (props) {
        if (!props) { props = {}; }
        var backColor = props.backColor || '#655';
        var percentColor = props.percentColor || 'yellowgreen';
        var width = props.width || '100px';
        var height = props.height || '100px';
        var percent = props.percent || 0;
        var percentBackground = "linear-gradient(to right, rgba(0,0,0,0) 50%, " + backColor + " 50%)";
        if (percent > 180) {
            percentBackground = "linear-gradient(to right, rgba(0,0,0,0) 50%, " + percentColor + " 50%)";
            percent = percent - 180;
        }
        var fDom = document.createElement('div');
        fDom.style.width = width;
        fDom.style.height = height;
        fDom.style['border-radius'] = '50%';
        fDom.style.background = backColor;
        fDom.style.overflow = 'hidden';

        var eDom = document.createElement('div');
        eDom.style.width = '100%';
        eDom.style.height = '100%';
        eDom.style['border-radius'] = '50%';
        eDom.style.background = percentBackground;
        eDom.style.transform = 'rotate(' + percent + 'deg)';
        fDom.appendChild(eDom);
        return fDom;
    }
    _global = (function () { return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = progresspie;
    } else if (typeof define === "function" && define.amd) {
        define(function () { return progresspie; });
    } else {
        !('progresspie' in _global) && (_global.progresspie = progresspie);
    }
}());
