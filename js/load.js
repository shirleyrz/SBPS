/**
 * Created by Rong on 4/20/2014.
 */


// Init navigation menu
jQuery(function () {
    // main navigation init
    jQuery('ul.sf-menu').superfish({
        delay: 1000, // the delay in milliseconds that the mouse can remain outside a sub-menu without it closing
        animation: {
            opacity: "show",
            height: "show"
        }, // used to animate the sub-menu open
        speed: "normal", // animation speed
        autoArrows: false, // generation of arrow mark-up (for submenu)
        disableHI: true // to disable hoverIntent detection
    });

    //Zoom fix
    //IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,
        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },
        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };
    scaleFix();
});


var _wpcf7 = {"loaderUrl": "\/img\/ajax-loader.gif", "sending": "Sending ..."};

/* <![CDATA[ */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-7078796-5']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

(function (b) {
    (function (a) {
        "__CF"in b && "DJS"in b.__CF ? b.__CF.DJS.push(a) : "addEventListener"in b ? b.addEventListener("load", a, !1) : b.attachEvent("onload", a)
    })(function () {
        "FB"in b && "Event"in FB && "subscribe"in FB.Event && (FB.Event.subscribe("edge.create", function (a) {
            _gaq.push(["_trackSocial", "facebook", "like", a])
        }), FB.Event.subscribe("edge.remove", function (a) {
            _gaq.push(["_trackSocial", "facebook", "unlike", a])
        }), FB.Event.subscribe("message.send", function (a) {
            _gaq.push(["_trackSocial", "facebook", "send", a])
        }));
        "twttr"in b && "events"in twttr && "bind"in twttr.events && twttr.events.bind("tweet", function (a) {
            if (a) {
                var b;
                if (a.target && a.target.nodeName == "IFRAME")a:{
                    if (a = a.target.src) {
                        a = a.split("#")[0].match(/[^?=&]+=([^&]*)?/g);
                        b = 0;
                        for (var c; c = a[b]; ++b)if (c.indexOf("url") === 0) {
                            b = unescape(c.split("=")[1]);
                            break a
                        }
                    }
                    b = void 0
                }
                _gaq.push(["_trackSocial", "twitter", "tweet", b])
            }
        })
    })
})(window);

