!function(t) {
    var n = {};
    function i(e) {
        if (n[e])
            return n[e].exports;
        var o = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, i),
        o.l = !0,
        o.exports
    }
    return i.m = t,
    i.c = n,
    i.d = function(t, n, e) {
        i.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: e
        })
    }
    ,
    i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(t, n) {
        if (1 & n && (t = i(t)),
        8 & n)
            return t;
        if (4 & n && "object" == typeof t && t && t.__esModule)
            return t;
        var e = Object.create(null);
        if (i.r(e),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        }),
        2 & n && "string" != typeof t)
            for (var o in t)
                i.d(e, o, function(n) {
                    return t[n]
                }
                .bind(null, o));
        return e
    }
    ,
    i.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return i.d(n, "a", n),
        n
    }
    ,
    i.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }
    ,
    i.p = "",
    i(i.s = 626)
}({
    28: function(t, n, i) {
        "use strict";
        i.d(n, "a", function() {
            return o
        }),
        i.d(n, "c", function() {
            return _
        });
        var e = "grd-message";
        function o(t) {
            window.addEventListener(e, t)
        }
        function r(t) {
            window.removeEventListener(e, t)
        }
        function _(t) {
            window.setTimeout(function() {
                return window.dispatchEvent(new CustomEvent(e,{
                    detail: t
                }))
            }, 0)
        }
        n.b = {
            addEventListener: o,
            removeEventListener: r,
            postMessage: _
        }
    },
    33: function(t, n, i) {
        "use strict";
        i.d(n, "a", function() {
            return e
        });
        var e = function() {
            return function() {
                return !0
            }
        }
    },
    5: function(t, n, i) {
        "use strict";
        var e, o, r, _, c, E, u;
        i.d(n, "d", function() {
            return e
        }),
        i.d(n, "c", function() {
            return o
        }),
        i.d(n, "a", function() {
            return _
        }),
        i.d(n, "b", function() {
            return c
        }),
        i.d(n, "f", function() {
            return E
        }),
        i.d(n, "e", function() {
            return u
        }),
        function(t) {
            t[t.HIT = 0] = "HIT",
            t[t.KB_MESSAGE = 1] = "KB_MESSAGE",
            t[t.KB_INJECTED_MESSAGE = 2] = "KB_INJECTED_MESSAGE",
            t[t.STATE_REQUEST = 3] = "STATE_REQUEST",
            t[t.STATE_UPDATE = 4] = "STATE_UPDATE",
            t[t.STATE_UPDATE_REQUEST = 5] = "STATE_UPDATE_REQUEST",
            t[t.REQUEST_PERMISSION = 6] = "REQUEST_PERMISSION",
            t[t.CHECK_PERMISSION = 7] = "CHECK_PERMISSION",
            t[t.PING = 8] = "PING",
            t[t.CLIENT_HIT = 9] = "CLIENT_HIT",
            t[t.PAGE_IMAGES = 10] = "PAGE_IMAGES",
            t[t.INPUT_FOCUS = 11] = "INPUT_FOCUS",
            t[t.GET_INJECTED_CONFIG = 12] = "GET_INJECTED_CONFIG",
            t[t.NOTIFICATION = 13] = "NOTIFICATION",
            t[t.PAGE_HIT = 14] = "PAGE_HIT",
            t[t.CLEAR_EXTENSIONS = 15] = "CLEAR_EXTENSIONS",
            t[t.SECURE_LINK = 16] = "SECURE_LINK",
            t[t.PERM_PROXY_MESSAGE = 17] = "PERM_PROXY_MESSAGE",
            t[t.TOGGLE_EXTENSION_STATE = 18] = "TOGGLE_EXTENSION_STATE",
            t[t.FETCH_SITE_ASSETS = 19] = "FETCH_SITE_ASSETS",
            t[t.DOM_EXTRACTOR_ASSETS = 20] = "DOM_EXTRACTOR_ASSETS",
            t[t.CLIENT_SIDE_REDIRECT = 21] = "CLIENT_SIDE_REDIRECT",
            t[t.PROTECTION_SETTINGS_CHANGE = 22] = "PROTECTION_SETTINGS_CHANGE",
            t[t.READY = 23] = "READY",
            t[t.UI_HIT = 24] = "UI_HIT",
            t[t.DISPLAY_NOTIF = 25] = "DISPLAY_NOTIF",
            t[t.DISPLAY_NOTIF_BADGE = 26] = "DISPLAY_NOTIF_BADGE"
        }(e || (e = {})),
        function(t) {
            t[t.UI = 0] = "UI",
            t[t.BACK = 1] = "BACK",
            t[t.UI_V2 = 2] = "UI_V2",
            t[t.GUARDIO_CONTENT = 3] = "GUARDIO_CONTENT",
            t[t.LINKS_INJECTED = 4] = "LINKS_INJECTED",
            t[t.PERMISSION_PROXY = 5] = "PERMISSION_PROXY",
            t[t.KB = 6] = "KB"
        }(o || (o = {})),
        function(t) {
            t.NORMAL = "NORMAL",
            t.WARNING = "WARNING",
            t.DANGER = "DANGER"
        }(r || (r = {})),
        function(t) {
            t.SUCCESS = "SUCCESS",
            t.WARNING = "WARNING",
            t.ERROR = "ERROR"
        }(_ || (_ = {})),
        function(t) {
            t.REDIRECT = "REDIRECT",
            t.NEW_TAB = "NEW_TAB",
            t.DISMISS = "DISMISS"
        }(c || (c = {})),
        function(t) {
            t.SEEN = "ui_notification_seen",
            t.CLICK = "ui_notification_clicked",
            t.CLICK_DISMISS = "ui_notification_clicked_dismiss",
            t.CLICK_BTN = "ui_notification_btn_clicked",
            t.MOUSE_OVER = "ui_notification_mouse_over",
            t.CLICK_TOOLBAR = "ui_notification_clicked_dismiss_toolbar",
            t.CLICK_TOOLBAR_SETTINGS = "ui_notification_clicked_toolbar_settings",
            t.CLICK_ACTION_1_LABEL = "ui_notification_clicked_action_1",
            t.CLICK_ACTION_2_LABEL = "ui_notification_clicked_action_2",
            t.BADGE_CLOSE_EVENT = "ui_notification_clicked_badge_close",
            t.BADGE_OPEN_EVENT = "ui_notification_clicked_badge_open",
            t.ERROR = "ui_notification_error"
        }(E || (E = {})),
        function(t) {
            t.LOADING_GOOGLE_FONTS_ERROR = "loading_google_fonts",
            t.INIT_FAILED = "init_failed"
        }(u || (u = {}))
    },
    626: function(t, n, i) {
        "use strict";
        i.r(n);
        var e = i(33)
          , o = i(78)
          , r = i(5)
          , _ = i(28);
        try {
            if (window.GUARDIO_PERMISSION_PROXY)
                void 0;
            else {
                window.GUARDIO_PERMISSION_PROXY = !0;
                var c = function(t, n) {
                    var i = {
                        type: "GRD_PERM_PROXY",
                        transparent: !1,
                        name: t,
                        data: n
                    };
                    _.b.postMessage(i)
                }
                  , E = function() {
                    return localStorage.setItem("guardio_notification_permission_state", "asked")
                }
                  , u = function() {
                    return !!localStorage.getItem("guardio_notification_permission_state")
                }
                  , a = function(t, n, i) {
                    return new Promise(function(e, o) {
                        if (void 0,
                        "granted" === Notification.permission)
                            return void 0,
                            e("granted"),
                            void 0;
                        var u = function(t) {
                            void 0,
                            E(),
                            c("permission_api_result", t),
                            e(t)
                        };
                        _.b.addEventListener(function(_) {
                            var c = _.detail;
                            if ((null == c ? void 0 : c.dest) == r.c.PERMISSION_PROXY)
                                switch (c.setting) {
                                case "ask":
                                    void 0,
                                    t.apply(n, i).then(u).catch(o);
                                    break;
                                case "block":
                                    void 0,
                                    E(),
                                    e("denied")
                                }
                        }),
                        c("permission_request", null)
                    }
                    )
                };
                if (window.Notification) {
                    Object(o.b)(window.Notification, "requestPermission", "permission_proxy", Object(e.a)(), null, a);
                    var f = {
                        get: function(t, n) {
                            return "permission" !== n ? t[n] : u() ? t[n] : "ask"
                        }
                    }
                      , I = new Proxy(window.Notification,f);
                    window.Notification = I
                }
            }
        } catch (t) {
            void 0
        }
    },
    78: function(t, n, i) {
        "use strict";
        i.d(n, "b", function() {
            return r
        }),
        i.d(n, "a", function() {
            return _
        });
        var e = i(88)
          , o = i.n(e)
          , r = function(t, n, i, e, o, r) {
            try {
                var _ = t[n];
                t[n] = function() {
                    for (var t = arguments.length, c = new Array(t), E = 0; E < t; E++)
                        c[E] = arguments[E];
                    try {
                        (null == e ? void 0 : e.apply(void 0, c)) && (null == o ? void 0 : o(n, i, c))
                    } catch (t) {
                        void 0
                    }
                    return r(_, this, c)
                }
            } catch (t) {
                void 0
            }
        }
          , _ = function(t, n, i, e, r) {
            var _ = t[n];
            t[n] = function() {
                for (var t = arguments.length, c = new Array(t), E = 0; E < t; E++)
                    c[E] = arguments[E];
                try {
                    r.apply(void 0, c) && (null == e ? void 0 : e(n, i, c))
                } catch (t) {
                    void 0
                }
                return o()(_, c)
            }
            ,
            t[n].prototype = _.prototype
        }
    },
    88: function(t, n, i) {
        var e = i(94);
        function o() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                !0
            } catch (t) {
                return !1
            }
        }
        function r(n, i, _) {
            return o() ? t.exports = r = Reflect.construct : t.exports = r = function(t, n, i) {
                var o = [null];
                o.push.apply(o, n);
                var r = new (Function.bind.apply(t, o));
                return i && e(r, i.prototype),
                r
            }
            ,
            r.apply(null, arguments)
        }
        t.exports = r
    },
    94: function(t, n) {
        function i(n, e) {
            return t.exports = i = Object.setPrototypeOf || function(t, n) {
                return t.__proto__ = n,
                t
            }
            ,
            i(n, e)
        }
        t.exports = i
    }
});
//# sourceMappingURL=permissionProxy.bundle.js.map
