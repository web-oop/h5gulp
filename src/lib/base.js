;(function(doc, win) {//页面rem切图，渲染
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            var p = clientWidth / 750;//页面的最大长度设置为750px
            p = p > 1 ? 1 : p < 0.426 ? 0.426 : p;
            docEl.style.fontSize = 100 * p + 'px';//fontSize最大值设置为100px
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
var base_url="//back.ddlyd.com/";
//var base_url="//testv3.qinghejiaoyu.com/";