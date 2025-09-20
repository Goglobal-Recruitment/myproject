/*! For license information please see 3c29a897.22b25f39.chunk.js.LICENSE.txt */
"use strict";
(self["b-genius-web-component-service__LOADABLE_LOADED_CHUNKS__"] = self["b-genius-web-component-service__LOADABLE_LOADED_CHUNKS__"] || []).push([
    ["3c29a897"], {
        d0989236: (e, t, n) => {
            n.d(t, {
                B: () => r
            });
            var i = n("dc6d28ff");

            function r() {
                const e = (0, i.getRequestContext)();
                return {
                    get acceptHeader() {
                        return e.getAcceptHeader()
                    },
                    get actionName() {
                        return e.getActionName()
                    },
                    get affiliate() {
                        return e.getAffiliate()
                    },
                    get basePageUrl() {
                        return e.getBasePageUrl()
                    },
                    get body() {
                        return e.getBody()
                    },
                    get bPlatformEnvironment() {
                        return e.getBPlatformEnvironment()
                    },
                    get CDNOrigin() {
                        return e.getCDNOrigin()
                    },
                    get CSPNonce() {
                        return e.getCSPNonce()
                    },
                    get CSRFToken() {
                        return e.getCSRFToken()
                    },
                    get currency() {
                        return e.getCurrency()
                    },
                    get encryptedCommonOauthState() {
                        return e.getEncryptedCommonOauthState()
                    },
                    get ETSerializedState() {
                        return e.getETSerializedState()
                    },
                    get isInternalIp() {
                        return e.isInternalIp()
                    },
                    get isInternalUser() {
                        return e.isInternalUser()
                    },
                    get isLanding() {
                        return e.isLanding()
                    },
                    get isNormalRequest() {
                        return e.isNormalRequest()
                    },
                    get isRobotRequest() {
                        return e.isRobotRequest()
                    },
                    get language() {
                        return e.getLanguage()
                    },
                    get pageviewId() {
                        return e.getPageviewId()
                    },
                    get partnerIdentity() {
                        return e.getPartnerIdentity()
                    },
                    get publicPath() {
                        return e.getPublicPath()
                    },
                    get sessions() {
                        return e.getSessions()
                    },
                    get siteId() {
                        return e.getSiteId()
                    },
                    get siteType() {
                        return e.getSiteType()
                    },
                    get staffIdentity() {
                        return e.getStaffIdentity()
                    },
                    get userAgent() {
                        return e.getUserAgent()
                    },
                    get userIdentity() {
                        return e.getUserIdentity()
                    },
                    get visitorCountry() {
                        return e.getVisitorCountry()
                    },
                    get visitorCountryRegion() {
                        return e.getVisitorCountryRegion()
                    },
                    get visitorIP() {
                        return e.getVisitorIP()
                    },
                    get visitorUfi() {
                        return e.getVisitorUfi()
                    },
                    get isCnDomain() {
                        var t;
                        return null === e || void 0 === e || null === (t = e.getBasePageUrl()) || void 0 === t || null === (t = t.host) || void 0 === t ? void 0 : t.endsWith("booking.cn")
                    }
                }
            }
        },
        "0f5c0451": (e, t, n) => {
            n.d(t, {
                Z: () => M
            });
            var i = n("ead71eb0"),
                r = n.n(i),
                o = n("3d054e81"),
                a = Object.defineProperty,
                s = (e, t, n) => (((e, t, n) => {
                    t in e ? a(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                })(e, "symbol" !== typeof t ? t + "" : t, n), n),
                c = new Map,
                l = new WeakMap,
                u = 0,
                d = void 0;

            function _(e) {
                return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                    return `${t}_${"root"===t?(n=e.root,n?(l.has(n)||(u+=1,l.set(n,u.toString())),l.get(n)):"0"):e[t]}`;
                    var n
                })).toString()
            }

            function g(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d;
                if ("undefined" === typeof window.IntersectionObserver && void 0 !== i) {
                    const r = e.getBoundingClientRect();
                    return t(i, {
                        isIntersecting: i,
                        target: e,
                        intersectionRatio: "number" === typeof n.threshold ? n.threshold : 0,
                        time: 0,
                        boundingClientRect: r,
                        intersectionRect: r,
                        rootBounds: r
                    }), () => {}
                }
                const {
                    id: r,
                    observer: o,
                    elements: a
                } = function(e) {
                    const t = _(e);
                    let n = c.get(t);
                    if (!n) {
                        const i = new Map;
                        let r;
                        const o = new IntersectionObserver((t => {
                            t.forEach((t => {
                                var n;
                                const o = t.isIntersecting && r.some((e => t.intersectionRatio >= e));
                                e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = o), null == (n = i.get(t.target)) || n.forEach((e => {
                                    e(o, t)
                                }))
                            }))
                        }), e);
                        r = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                            id: t,
                            observer: o,
                            elements: i
                        }, c.set(t, n)
                    }
                    return n
                }(n), s = a.get(e) || [];
                return a.has(e) || a.set(e, s), s.push(t), o.observe(e),
                    function() {
                        s.splice(s.indexOf(t), 1), 0 === s.length && (a.delete(e), o.unobserve(e)), 0 === a.size && (o.disconnect(), c.delete(r))
                    }
            }
            var h = class extends i.Component {
                constructor(e) {
                    super(e), s(this, "node", null), s(this, "_unobserveCb", null), s(this, "handleNode", (e => {
                        this.node && (this.unobserve(), e || this.props.triggerOnce || this.props.skip || this.setState({
                            inView: !!this.props.initialInView,
                            entry: void 0
                        })), this.node = e || null, this.observeNode()
                    })), s(this, "handleChange", ((e, t) => {
                        e && this.props.triggerOnce && this.unobserve(),
                            function(e) {
                                return "function" !== typeof e.children
                            }(this.props) || this.setState({
                                inView: e,
                                entry: t
                            }), this.props.onChange && this.props.onChange(e, t)
                    })), this.state = {
                        inView: !!e.initialInView,
                        entry: void 0
                    }
                }
                componentDidMount() {
                    this.unobserve(), this.observeNode()
                }
                componentDidUpdate(e) {
                    e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold && e.skip === this.props.skip && e.trackVisibility === this.props.trackVisibility && e.delay === this.props.delay || (this.unobserve(), this.observeNode())
                }
                componentWillUnmount() {
                    this.unobserve()
                }
                observeNode() {
                    if (!this.node || this.props.skip) return;
                    const {
                        threshold: e,
                        root: t,
                        rootMargin: n,
                        trackVisibility: i,
                        delay: r,
                        fallbackInView: o
                    } = this.props;
                    this._unobserveCb = g(this.node, this.handleChange, {
                        threshold: e,
                        root: t,
                        rootMargin: n,
                        trackVisibility: i,
                        delay: r
                    }, o)
                }
                unobserve() {
                    this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
                }
                render() {
                    const {
                        children: e
                    } = this.props;
                    if ("function" === typeof e) {
                        const {
                            inView: t,
                            entry: n
                        } = this.state;
                        return e({
                            inView: t,
                            entry: n,
                            ref: this.handleNode
                        })
                    }
                    const {
                        as: t,
                        triggerOnce: n,
                        threshold: r,
                        root: o,
                        rootMargin: a,
                        onChange: s,
                        skip: c,
                        trackVisibility: l,
                        delay: u,
                        initialInView: d,
                        fallbackInView: _,
                        ...g
                    } = this.props;
                    return i.createElement(t || "div", {
                        ref: this.handleNode,
                        ...g
                    }, e)
                }
            };
            var m = n("8cbf371c");

            function f(e, t, n, i) {
                return new(n || (n = Promise))((function(r, o) {
                    function a(e) {
                        try {
                            c(i.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function s(e) {
                        try {
                            c(i.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((i = i.apply(e, t || [])).next())
                }))
            }
            Object.create;
            Object.create;
            class p {
                constructor(e) {
                    this.config = e, this.headers = this.config.API.HEADERS
                }
                get(e, t) {
                    return new Promise(((n, i) => f(this, void 0, void 0, (function*() {
                        try {
                            const i = yield fetch(e, {
                                method: "GET",
                                headers: (null === t || void 0 === t ? void 0 : t.withHeaders) ? this.headers : void 0,
                                credentials: !1 === (null === t || void 0 === t ? void 0 : t.withCredentials) ? "omit" : "include"
                            }), r = yield i.text();
                            n(r ? JSON.parse(r) : null)
                        } catch (r) {
                            return i(r)
                        }
                    }))))
                }
                post(e, t, n) {
                    return new Promise(((i, r) => f(this, void 0, void 0, (function*() {
                        try {
                            const r = yield fetch(e, {
                                method: "POST",
                                headers: (null === n || void 0 === n ? void 0 : n.withHeaders) ? this.headers : void 0,
                                credentials: !1 === (null === n || void 0 === n ? void 0 : n.withCredentials) ? "omit" : "include",
                                body: JSON.stringify(t)
                            }), o = yield r.text();
                            i(o ? JSON.parse(o) : null)
                        } catch (o) {
                            return r(o)
                        }
                    }))))
                }
            }
            var v = new class {
                init(e) {
                    this.client = new p(e)
                }
                get(e) {
                    return f(this, void 0, void 0, (function*() {
                        return this.client.get(e)
                    }))
                }
                post(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return f(this, void 0, void 0, (function*() {
                        return this.client.post(e, t, n)
                    }))
                }
            };
            const E = e => {
                var t = void 0;
                e.platform || (e.platform = ""), e.platform = e.platform.toLowerCase(), "mdot" == e.platform && (t = 2), "ddot" != e.platform && "www" != e.platform || (t = 1);
                return {
                    "Content-Type": "application/json",
                    "X-Booking-Platform": e.platform,
                    "X-Booking-SiteType-Id": t,
                    "X-Booking-Pageview-Id": e.pageviewId,
                    "X-Booking-Session-Id": e.sessionId,
                    "X-Booking-ET-Seed": e.etSeed,
                    "X-Booking-AID": e.aid,
                    "X-Booking-Label": e.label,
                    "X-Booking-CSRF": e.csrfToken,
                    "X-Booking-Language-Code": e.lang
                }
            };
            class b {
                constructor(e, t, n) {
                    this.batchSize = e, this.queueLimit = t, this.queue = [], this.timeoutId = null, this.sendBatchFn = n
                }
                enqueue(e) {
                    this.queue.push(e), this.queue.length >= this.batchSize ? this.flush() : 1 !== this.queue.length || this.timeoutId || (this.timeoutId = setTimeout((() => {
                        this.processQueue()
                    }), this.queueLimit))
                }
                flush(e) {
                    clearTimeout(this.timeoutId), this.processQueue(e)
                }
                processQueue(e) {
                    let t = [];
                    t = this.queue.length >= this.queueLimit ? this.queue.splice(0) : this.queue.splice(0, this.batchSize), this.sendBatchFn(t), this.queue.length > 0 ? this.processQueue() : this.timeoutId = null
                }
            }
            const S = new class {
                constructor() {
                    this.trackBatch = e => f(this, void 0, void 0, (function*() {
                        this.track({
                            events: e.map((e => function(e, t, n) {
                                const i = {
                                    local: {
                                        currency: t.currency,
                                        language: t.language
                                    },
                                    page: {},
                                    web: {}
                                };
                                "undefined" != typeof window && (i.page = {
                                    page_referrer: document.referrer,
                                    page_url: window.location.href,
                                    page_title: document.title
                                }, i.web = {
                                    browser_language: window.navigator.language
                                });
                                const r = {
                                    tracker_name: "C360ReactTracker",
                                    tracker_type: "Client",
                                    tracker_version: "0.1.0"
                                };
                                return n && (r.tracker_version = "0.1.1"), Object.assign(Object.assign({}, e), {
                                    context: i,
                                    tracker: r
                                })
                            }(e, this.c360Config, !0)))
                        })
                    }))
                }
                init(e) {
                    this.c360Config = (e => {
                        const t = e.hostname || (e.isDev ? "app.dqs.booking.com" : "www.booking.com");
                        return {
                            IS_DEV: Boolean(e.isDev),
                            API: {
                                HEADERS: E(e)
                            },
                            TRACK_BASE_URL: `https://${t}/c360/v1/track`,
                            language: e.lang,
                            currency: e.currency
                        }
                    })(e), this.httpClient = v, this.c360url = this.c360Config.TRACK_BASE_URL, this.props = e, this.batchQueue = this.batchQueue || new b(10, 1e3, this.trackBatch), v.init(this.c360Config)
                }
                track(e) {
                    return f(this, void 0, void 0, (function*() {
                        this.httpClient.post(this.c360url, e, {
                            withHeaders: !0
                        }).catch((e => {
                            this.props.onErrorCallback && this.props.onErrorCallback(new Error(e))
                        }))
                    }))
                }
                sendEvent(e, t) {
                    return f(this, void 0, void 0, (function*() {
                        this.batchQueue.enqueue(e), t && this.batchQueue.flush()
                    }))
                }
            };
            var I = n("77a90307"),
                N = n("d0989236");
            var L = n("cf8fa355"),
                O = n("6222292b"),
                C = n("dc6d28ff");
            let k = function(e) {
                return e.SERVED = "served", e.VIEWED = "viewed", e.CLICKED = "clicked", e
            }({});
            const A = "b88f649033",
                T = e => {
                    let {
                        children: t,
                        onClick: n,
                        componentId: a,
                        containerId: s,
                        ...c
                    } = e;
                    const l = (0, C.getRequestContext)(),
                        {
                            init: u,
                            trackBehavior: d
                        } = (() => {
                            const e = (0, i.useCallback)((() => {
                                    var e;
                                    const {
                                        affiliate: t,
                                        currency: n,
                                        CSRFToken: i,
                                        ETSerializedState: r,
                                        language: o,
                                        pageviewId: a,
                                        siteType: s,
                                        sessions: c
                                    } = (0, N.B)();
                                    S.init({
                                        aid: null !== t && void 0 !== t && t.id ? `${t.id}` : void 0,
                                        csrfToken: i,
                                        currency: n,
                                        etSeed: r,
                                        hostname: window.location.hostname,
                                        isDev: (0, I.r8)(),
                                        label: null !== t && void 0 !== t && t.label ? `${t.label}` : void 0,
                                        lang: o,
                                        pageviewId: a,
                                        platform: null === s || void 0 === s ? void 0 : s.toLowerCase(),
                                        sessionId: null === c || void 0 === c || null === (e = c[0]) || void 0 === e ? void 0 : e.id
                                    })
                                }), []),
                                t = (0, i.useCallback)(((e, t, n) => {
                                    if (!S.c360Config) return void console.error("[c360 tracker] C360 has not been initialized. Event is not sent.");
                                    const i = {
                                        action_name: e,
                                        action_version: t,
                                        content: n
                                    };
                                    S.sendEvent(i)
                                }), []);
                            return (0, i.useMemo)((() => ({
                                init: e,
                                trackBehavior: t
                            })), [e, t])
                        })(),
                        _ = (0, L.Kq)(),
                        g = (0, m.Z)(),
                        f = (0, i.useCallback)((e => {
                            d("identity_mobile_auth__auth_component_engagement", "1.1.0", {
                                metadata: {
                                    country_code: l.getVisitorCountry(),
                                    build_flavor: _ ? "china" : "global"
                                },
                                state: e,
                                component_id: a,
                                container_id: s || ""
                            })
                        }), [a, s, l, _, d]);
                    (0, i.useEffect)((() => {
                        u(), f(k.SERVED)
                    }), [u, f]);
                    const p = e => {
                        f(k.CLICKED), n && n(e)
                    };
                    return r().createElement(h, {
                        className: A,
                        onChange: () => {
                            f(k.VIEWED)
                        },
                        triggerOnce: !0,
                        "data-testid": "auth-link-in-view"
                    }, t ? r().createElement(O.Button, (0, o.Z)({
                        onClick: p
                    }, c, {
                        loading: c.loading,
                        loadingAriaLabel: c.loadingAriaLabel ? ? g
                    }), t) : r().createElement(O.Button, (0, o.Z)({
                        onClick: p
                    }, c, {
                        loading: c.loading,
                        loadingAriaLabel: c.loadingAriaLabel ? ? g
                    })))
                };
            n("30190550");
            const y = T;
            var B = n("c44dcb0c"),
                w = n("04fa1900");
            const P = "c4b02e9bdd",
                R = "b58069a581",
                D = "aee2fac107",
                W = "f6cb2cf9de";
            const M = e => {
                let {
                    title: t,
                    header: n,
                    subtitle: o,
                    secondaryCta: a,
                    primaryCta: s,
                    closeAriaLabel: c,
                    onClose: l,
                    onCloseTrigger: u,
                    onAfterOpen: d,
                    ariaLabel: _,
                    position: g,
                    size: h,
                    trackingIdentifiers: m
                } = e;
                const [f, p] = (0, i.useState)(!0), v = (0, B.useI18n)(), E = {
                    closeBottomSheet: () => p(!1)
                };
                return r().createElement(O.SheetContainer, {
                    size: h,
                    position: g,
                    closeAriaLabel: c || v.trans((0, B.t)("close")),
                    active: f,
                    onCloseTrigger: () => {
                        p(!1), u && u()
                    },
                    onClose: l,
                    onAfterOpen: d,
                    ariaLabel: _,
                    footer: s ? r().createElement(O.Stack, {
                        className: D,
                        alignItems: "center",
                        gap: 3
                    }, m && m.componentId ? r().createElement(y, {
                        componentId: m.componentId,
                        containerId: null === m || void 0 === m ? void 0 : m.containerId,
                        href: s.link,
                        size: "large",
                        onClick: () => s.onClick && s.onClick(E),
                        wide: !0,
                        attributes: s.attributes
                    }, r().createElement(w.Z, {
                        text: s.title
                    })) : r().createElement(O.Button, {
                        href: s.link,
                        size: "large",
                        onClick: () => s.onClick && s.onClick(E),
                        wide: !0,
                        attributes: s.attributes
                    }, r().createElement(w.Z, {
                        text: s.title
                    }))) : null
                }, r().createElement(O.Stack, {
                    alignItems: "center",
                    gap: 3
                }, n, r().createElement(O.Title, {
                    variant: "headline_2",
                    align: "center",
                    title: t,
                    tagName: "h2"
                }), o && o.map((e => r().createElement(O.Text, {
                    align: "center",
                    key: e,
                    variant: "body_1",
                    tagName: "p",
                    className: P
                }, r().createElement(w.Z, {
                    text: e,
                    variables: {
                        start_bold: "<0>",
                        end_bold: "</0>"
                    },
                    components: [r().createElement("b", {
                        className: W,
                        key: "not used"
                    })]
                })))), a && r().createElement(O.Button, {
                    href: a.link,
                    onClick: () => a.onClick && a.onClick(E),
                    variant: "tertiary",
                    className: R,
                    wide: !0,
                    attributes: a.attributes
                }, r().createElement(w.Z, {
                    text: a.title
                }))))
            }
        },
        "22b0f37c": (e, t, n) => {
            n.d(t, {
                Z: () => _
            });
            var i = n("3d054e81"),
                r = n("ead71eb0"),
                o = n.n(r);
            const a = function() {
                return r.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 121 32"
                }, r.createElement("g", {
                    fill: "none"
                }, r.createElement("path", {
                    fill: "#fff",
                    d: "m115.546514 25.2308571c0 .6226286-.299657 1.1181715-.905828 1.4864-.602743.3650286-1.398857.5492572-2.381257.5492572-1.1824 0-2.194743-.2813714-3.037486-.8470857-.842514-.5659429-1.432-1.2857143-1.771886-2.1629715-.1664-.4219428-.462857-.5357714-.885714-.3380571l-3.204114 1.4395429c-.4496.2009142-.576.5090285-.379658.9341714.646172 1.5837714 1.765258 2.8893714 3.353829 3.9206857 1.5888 1.0310857 3.603657 1.5467429 6.051657 1.5467429 2.361143 0 4.356114-.6059429 5.988114-1.8212572 1.628572-1.2153143 2.444572-2.8694857 2.444572-4.9586286 0-3.4485257-2.417829-5.58464-7.253714-6.4015771-1.771886-.31136-3.040915-.6595657-3.816915-1.0378971-.772571-.3816915-1.158857-.8705143-1.158857-1.4631315 0-.5089143.303086-.9140343.905829-1.2086628.606171-.2979886 1.415543-.4453029 2.424685-.4453029 1.631772 0 3.050743.6361372 4.259658 1.9084114.336228.3381715.676114.3816915 1.012342.1272458l2.278172-2.11936c.392914-.3113829.436343-.6528915.126628-1.0178286-1.771885-2.1762743-4.373028-3.2644114-7.803428-3.2644114-2.444572 0-4.399543.5591314-5.858286 1.6740571-1.462171 1.1149257-2.194743 2.6215771-2.194743 4.5132571 0 1.5836572.582629 2.9061486 1.751772 3.96416 1.165714 1.0613486 2.747657 1.7744915 4.742628 2.1427886 1.968229.36496 3.343772.7601372 4.133029 1.18528.786057.4251429 1.178971.9876572 1.178971 1.6941714z"
                }), r.createElement("path", {
                    fill: "#fff",
                    d: "m82.0909714 23.7168c0 2.5412571.6893715 4.5433143 2.0649143 5.9965714 1.3787429 1.4562286 3.2473143 2.1828572 5.6086857 2.1828572.8992 0 1.7218286-.1204572 2.4678857-.3581715.7458286-.2411428 1.3220572-.5024 1.7284572-.7869714.4061714-.2811428.8925714-.6761143 1.4553143-1.1851428l.5062857 1.2288c.1666286.3949714.4930286.5926857.9691428.5926857h3.4571429c.4496 0 .676114-.2244572.676114-.6763429v-19.2885714c0-.4519772-.226514-.6796572-.676114-.6796572h-4.2596571c-.4496 0-.6729143.22768-.6729143.6796572v13.1413714c-1.0690286 1.5536-2.4745143 2.3302857-4.2162286 2.3302857-1.0957714 0-1.9483429-.3515428-2.5513143-1.0580571-.6061714-.7065143-.9058286-1.6404572-.9058286-2.7990857v-11.6145143c0-.4519772-.2397714-.6796572-.7193142-.6796572h-4.2164572c-.4763428 0-.7161143.22768-.7161143.6796572z"
                }), r.createElement("path", {
                    fill: "#febb02",
                    d: "m72.7899429 4.10043429c0 1.10098285.3952 2.04852571 1.1890285 2.84262857.7940572.79026285 1.7414857 1.18923428 2.8425143 1.18923428 1.1008 0 2.0482286-.39897143 2.8422857-1.18923428.7901715-.79410286 1.1890286-1.74164572 1.1890286-2.84262857 0-1.10100572-.3988571-2.048544-1.1890286-2.84264-.7940571-.794096-1.7414857-1.1892256-2.8422857-1.1892256-1.1010286 0-2.0484571.3951296-2.8425143 1.1892256-.7938285.794096-1.1890285 1.74163428-1.1890285 2.84264z"
                }), r.createElement("g", {
                    fill: "#fff"
                }, r.createElement("path", {
                    d: "m74.0096 30.5380571c0 .4518858.2365714.6763429.7161143.6763429h4.2162286c.4797714 0 .7161142-.2244571.7161142-.6763429v-19.2885028c0-.452-.2363428-.67968-.7161142-.67968h-4.2162286c-.4795429 0-.7161143.22768-.7161143.67968z"
                }), r.createElement("path", {
                    d: "m71.7677714 17.4330286c0-2.3470172-.6395428-4.1616915-1.9184-5.4473829-1.2788571-1.2856686-3.1008-1.9285028-5.4619428-1.9285028-2.1348572 0-4.1033143.7901485-5.9017143 2.3738057l-.5494857-1.1885715c-.1398857-.4218742-.4496-.6361371-.9259429-.6361371h-3.4603428c-.4763429 0-.7161143.2276571-.7161143.6796571v19.2885029c0 .4518857.2397714.6763429.7161143.6763429h4.2164571c.4795429 0 .7193143-.2244572.7193143-.6763429v-13.1848914c.4196571-.5658286 1.0258286-1.0881372 1.8118857-1.5669257.7858286-.4821258 1.5753143-.7231772 2.3611429-.7231772 2.3346285 0 3.5003428 1.2722743 3.5003428 3.8168457v11.6581486c0 .4518857.2265143.6763429.6761143.6763429h4.2564571c.4496 0 .6761143-.2244572.6761143-.6763429z"
                }), r.createElement("path", {
                    d: "m50.9942857 21.7554514c0 .452-.2233143.6796572-.6729143.6796572h-14.5074285c.3097142 1.2990628.9225142 2.3436343 1.8349714 3.1372343.9126857.7901714 2.0749714 1.1851428 3.4804571 1.1851428 1.9115429 0 3.3702857-.7901714 4.3828572-2.3737143.1698285-.2544.4363428-.2946285.8027428-.1273143l3.6267429 1.5268572c.4196571.1405714.5195428.3949714.2930286.7632-2.0514286 3.4754286-5.0854858 5.2130286-9.1053715 5.2130286-3.0374857 0-5.6153143-1.0178286-7.7401143-3.0500572-2.1216-2.0356571-3.184-4.6372571-3.184-7.80112 0-3.1639543 1.0557715-5.76544 3.1641143-7.8010971 2.1081143-2.0322972 4.5958857-3.0501257 7.4635429-3.0501257 3.1773714 0 5.6651428.9810057 7.4635428 2.9463314 1.7986286 1.9620114 2.6978286 4.4295543 2.6978286 7.3959771zm-6.9974857-5.9127771c-.9024-.6629257-1.9549714-.9943772-3.1638857-.9943772-1.2356572 0-2.2713143.31472-3.1008.9508572-.8292572.6361371-1.4253714 1.4631314-1.7917714 2.48096h9.6985142c-.1965714-.9609143-.7428571-1.7745143-1.6420571-2.43744z"
                }), r.createElement("path", {
                    d: "m28.3577143 26.8957714c0 .4032-.1746286.7794286-.4905143 1.0416-2.9492571 2.3581715-6.792 3.7826286-10.9774171 3.7826286-9.30468576 0-16.85591021-7.0548571-16.85591021-15.7423314 0-8.69426289 7.55122445-15.9776686 16.85591021-15.9776686 4.1786971 0 8.0080457 1.42440686 10.9506742 3.78274286.1410286.11421714.2283429.27547428.2418286.45017143.0201143.18139428-.0336.35609142-.1478857.49718857-.7524571.90704-2.3177143 2.79506285-3.0902857 3.72226285-.1142857.14109715-.2822857.22845715-.4635429.24187429-.1814857.01344-.3561143-.04701714-.4905143-.16123429-1.8541485-1.57222857-4.3062857-2.52630857-7.0002742-2.52630857-5.7574858 0-10.42660576 4.59583996-10.42660576 9.97097146 0 5.3751085 4.66911996 9.7423314 10.42660576 9.7423314 2.2371428 0 4.3063542-.6582857 6.0059885-1.7803429v-4.3539428s-3.4396571 0-4.9310857 0c-.1746743 0-.3493486-.0672-.4769828-.1948572-.1209372-.1276571-.1948343-.2956342-.1948343-.4770285 0-1.06832 0-3.1511772 0-4.2194743 0-.1814172.0738971-.3493714.1948343-.4770514.1276342-.1209372.3023085-.1948343.4769828-.1948343h9.7212572c.3693714 0 .6717714.3023543.6717714.6718857z"
                }))))
            };
            const s = function() {
                return r.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 121 32"
                }, r.createElement("g", {
                    fill: "none"
                }, r.createElement("path", {
                    fill: "#004cb8",
                    d: "m115.594598 25.2307874c0 .6227491-.299956 1.1182695-.906535 1.4865619-.603245.3649442-1.399796.5490905-2.382987.5490905-1.183161 0-2.196347-.2812414-3.039557-.8470725-.843211-.5658308-1.433125-1.285675-1.773076-2.1628804-.166642-.4218622-.463266-.5356981-.886538-.3381594l-3.2062 1.4396883c-.449935.2008866-.576583.5089131-.379945.9341232.646573 1.5836571 1.76641 2.889421 3.356179 3.9206395s3.606142 1.5468279 6.055786 1.5468279c2.362989 0 4.359366-.6060085 5.992462-1.821373 1.629762-1.2153648 2.44631-2.8693324 2.44631-4.9585543 0-3.4485556-2.419648-5.5846512-7.258944-6.4015906-1.773075-.3113744-3.042891-.6595781-3.819444-1.0379148-.773221-.3816848-1.159832-.8705092-1.159832-1.4631251 0-.508913.303289-.9140346.906535-1.2086685.606579-.297982 1.416461-.4452989 2.426314-.4452989 1.633096 0 3.052889.6361413 4.262713 1.908424.336618.3381593.676569.3816848 1.013186.1272282l2.279669-2.119355c.393276-.3113744.436603-.6528819.126648-1.0178261-1.773076-2.176273-4.37603-3.2644094-7.808864-3.2644094-2.446311 0-4.402694.5591347-5.862481 1.6740561-1.463121 1.1149213-2.196347 2.6215719-2.196347 4.5132553 0 1.583657.583248 2.9061614 1.753078 3.9641648 1.166497 1.0613516 2.7496 1.7744995 4.745976 2.1427919 1.969714.3649442 3.34618.7600215 4.136066 1.1852317.786552.4252103 1.179828.9876931 1.179828 1.6941447z"
                }), r.createElement("path", {
                    fill: "#004cb8",
                    d: "m82.1153119 23.716792c0 2.5412171.6898997 4.5433883 2.0663662 5.996469 1.3797994 1.4564288 3.2495273 2.1829692 5.6125171 2.1829692.8998692 0 1.7230827-.1205319 2.4696408-.358248.7465581-.241064 1.323141-.5022167 1.7297483-.7868064.4066076-.2812414.8932035-.6763187 1.4564551-1.1852318l.5065929 1.2287573c.1666424.3950772.4932616.592616.9698589.592616h3.4594968c.449935 0 .676568-.2243237.676568-.6763189v-19.2884745c0-.4519951-.226633-.6796668-.676568-.6796668h-4.2627133c-.4499345 0-.6732353.2276717-.6732353.6796668v13.1413406c-1.0698445 1.5535241-2.4763067 2.3302861-4.2193865 2.3302861-1.0965072 0-1.9497164-.3515517-2.552962-1.0580036-.6065785-.7064517-.9065348-1.6405749-.9065348-2.7990217v-11.6146014c0-.4519951-.2399652-.6796668-.7198953-.6796668h-4.2193864c-.4765973 0-.7165625.2276717-.7165625.6796668z"
                }), r.createElement("path", {
                    fill: "#febb02",
                    d: "m0 4.03185943c0 1.100993.39536721 2.04853751 1.18994015 2.84263351.79457294.79025979 1.74268653 1.18922589 2.8443408 1.18922589 1.10165426 0 2.04976788-.3989661 2.84434082-1.18922589.79073441-.794096 1.18994014-1.74164051 1.18994014-2.84263351 0-1.10099301-.39920573-2.04853753-1.18994014-2.84263353-.79457294-.794096-1.74268656-1.1892259-2.84434082-1.1892259-1.10165427 0-2.04976786.3951299-2.8443408 1.1892259s-1.18994015 1.74164052-1.18994015 2.84263353z",
                    transform: "translate(72.808 .069)"
                }), r.createElement("path", {
                    fill: "#004cb8",
                    d: "m1.22053066 30.4694485c0 .4519952.23663225.6763188.71656245.6763188h4.21938636c.4799302 0 .71656246-.2243236.71656246-.6763188v-19.2884745c0-.4519952-.23663226-.6796668-.71656246-.6796668h-4.21938636c-.4799302 0-.71656245.2276716-.71656245.6796668z",
                    transform: "translate(72.808 .069)"
                }), r.createElement("g", {
                    fill: "#004cb8"
                }, r.createElement("path", {
                    d: "m71.7846736 17.4330341c0-2.3470267-.639907-4.1617035-1.9197208-5.4473786-1.279814-1.2856751-3.1028821-1.9285126-5.4658719-1.9285126-2.1363559 0-4.1060694.7901544-5.9058076 2.3738115l-.54992-1.1885798c-.1399797-.4218621-.4499348-.6361413-.926532-.6361413h-3.4628297c-.4765973 0-.7165625.2276716-.7165625.6796667v19.2884746c0 .4519952.2399652.6763187.7165625.6763187h4.2193864c.4799301 0 .7198953-.2243235.7198953-.6763187v-13.184866c.4199389-.5658309 1.0265174-1.0881364 1.8130695-1.5669165.7865524-.4821281 1.5764374-.7231922 2.3629898-.7231922 2.3363268 0 3.502824 1.2722826 3.502824 3.8168479v11.6581268c0 .4519952.2266337.6763187.6765682.6763187h4.2593804c.4499345 0 .6765684-.2243235.6765684-.6763187z"
                }), r.createElement("path", {
                    d: "m50.3232223 22.4351138c.4499347 0 .6732355-.2276717.6732355-.6796668v-1.3559855c0-2.9664274-.8998692-5.4339861-2.6996074-7.3959799-1.7997383-1.9653419-4.2893762-2.9463387-7.4689137-2.9463387-2.8695828 0-5.3592207 1.0178261-7.468914 3.0501302-2.1096931 2.0356522-3.1662061 4.6371354-3.1662061 7.8011015 0 3.163966 1.0631788 5.7654492 3.1862034 7.8011015 2.1263574 2.032304 4.7059821 3.0501303 7.74554 3.0501303 4.0227484 0 7.0589735-1.7376704 9.1120082-5.2130107.2266337-.3682924.1266483-.6227491-.2932905-.7633696l-3.6294723-1.5267392c-.3666133-.1674058-.6332413-.1272284-.8032166.1272283-1.0131858 1.5836569-2.4729735 2.3738114-4.3860288 2.3738114-1.4064621 0-2.5696262-.3950772-3.4828267-1.1852317-.9132005-.7935027-1.5264447-1.8381136-1.8363996-3.1371811zm-9.4952856-7.5868223c1.2098241 0 2.2630042.3314631 3.166206.9943893.8998693.6629262 1.4464565 1.4765175 1.6430945 2.4374257h-9.7052552c.3666133-1.0178261.9631932-1.8448098 1.7930725-2.4809512.8298793-.6361413 1.8663953-.9508638 3.1028822-.9508638z"
                }), r.createElement("path", {
                    d: "m28.3439154 26.8958695c0 .4031337-.1747965.779392-.4907747 1.041429-2.9513707 2.3583324-6.7968924 3.7827383-10.9852841 3.7827383-9.31127197 0-16.8678566-7.0548407-16.8678566-15.7423732 0-8.69425139 7.55658463-15.9776636 16.8678566-15.9776636 4.1816688 0 8.0137446 1.42440595 10.9583924 3.78273842.1411816.11422124.22858.27547475.2420258.45016604.0201688.18141019-.0336146.35610148-.1479047.49719831-.7529693.90705094-2.3194143 2.79506073-3.0925523 3.72226836-.1142901.14109682-.2823635.22844247-.4638829.24188025-.1815195.01343781-.356316-.04703227-.4907747-.16125351-1.8555315-1.57222164-4.3094046-2.52630486-7.0053036-2.52630486-5.7615596 0-10.43400295 4.59585379-10.43400295 9.97097059s4.67244335 9.7423993 10.43400295 9.7423993c2.2387391 0 4.3094046-.6584519 6.0103085-1.7805075v-4.3538447s-3.4421454 0-4.934638 0c-.1747965 0-.3495929-.0671889-.4773288-.194848-.1210129-.127659-.1949653-.2956314-.1949653-.4770416 0-1.0683044 0-3.1511622 0-4.2194666 0-.1814102.0739524-.3493826.1949653-.4770417.1277359-.1209401.3025323-.1948479.4773288-.1948479h9.7280942c.3697618 0 .6722941.3023503.6722941.6718896z"
                }))))
            };
            var c = n("6222292b"),
                l = n("abab1afe"),
                u = n("c44dcb0c"),
                d = n("43bedd84");
            const _ = e => {
                let {
                    inverted: t = !1,
                    ariaLabel: n,
                    size: r,
                    ..._
                } = e;
                const {
                    trans: g
                } = (0, u.useI18n)();
                return o().createElement(c.Icon, (0, i.Z)({
                    ariaLabel: n || g((0, l.t)("www_ge_screenreader_generic_logo", {
                        variables: {
                            b_companyname: d.p
                        }
                    })),
                    size: r || "small"
                }, _, {
                    svg: t ? a : s
                }))
            }
        },
        "04fa1900": (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var i = n("ead71eb0"),
                r = n.n(i),
                o = n("10db3f9d");
            const a = /<(\d+)>(.*?)<\/\1>|<(\d+)\/>/,
                s = /(?:\r\n|\r|\n)/g;

            function c(e, t) {
                const n = e.replace(s, "").split(a);
                if (1 === n.length) return e;
                const r = [],
                    u = n.shift();
                u && r.push(u);
                let d = 0;
                for (const [a, s, _] of l(n)) {
                    if (t && t[a]) {
                        d += 1;
                        const e = t[a];
                        if ((0, o.isElement)(e)) r.push((0, i.cloneElement)(e, {
                            key: d
                        }, s ? c(s, t) : e.props.children));
                        else {
                            if (!(0, o.isValidElementType)(e)) {
                                r.push("\ud83d\udca2");
                                continue
                            }
                            r.push((0, i.createElement)(e, {
                                key: d
                            }, s && c(s, t)))
                        }
                    } else r.push("\ud83d\udca2");
                    _ && r.push(_)
                }
                return r
            }

            function l(e) {
                if (!e.length) return [];
                const [t, n, i, r] = e.slice(0, 4);
                return [
                    [parseInt(t || i, 10), n || "", r]
                ].concat(l(e.slice(4, e.length)))
            }
            const u = function(e) {
                let {
                    text: t,
                    variables: n,
                    components: i
                } = e;
                const o = function(e, t) {
                    if (!t) return e;
                    return Object.keys(t).reduce(((e, n) => e.split(`[${n}]`).join(t[n] + "")), e)
                }(t, n);
                return r().createElement(r().Fragment, null, c(o, i))
            }
        },
        30190550: (e, t, n) => {
            n.d(t, {
                au: () => s,
                L4: () => c,
                wd: () => a
            });
            var i = n("dc6d28ff"),
                r = n("af1e2b38");
            const o = /^(b_feature_.*|exp_.*|i_am_from)$/;
            const a = function(e) {
                var t;
                const n = (0, i.getRequestContext)(),
                    a = n.getBPlatformEnvironment(),
                    s = !(!a || "prod" !== a),
                    c = n.getBasePageUrl(),
                    l = n.getEncryptedCommonOauthState(),
                    u = null === (t = n.getAffiliate()) || void 0 === t ? void 0 : t.id,
                    d = n.getLanguage(),
                    _ = n.getActionName(),
                    g = n.isInternalIp(),
                    {
                        isMDOT: h
                    } = (0, r.Z6)(),
                    {
                        componentId: m,
                        iframe: f,
                        experiments: p,
                        customParams: v,
                        devHosts: E
                    } = e,
                    b = null === c || void 0 === c ? void 0 : c.host.endsWith("booking.cn"),
                    S = v || {},
                    I = `https://${function(e,t,n){return e?"account.booking."+(t?"cn":"com"):n&&n.ap?n.ap:"account.dqs.booking.com"}(s,b,E)}/auth/oauth2`,
                    N = `https://${function(e,t,n){return e?"secure.booking."+(t?"cn":"com"):n&&n.book?n.book:"book.dqs.booking.com"}(s,b,E)}/login.html?op=oauth_return`,
                    L = new URL(I),
                    O = function(e) {
                        return e ? "vO1Kblk7xX9tUn2cpZLS" : "b_test_fe"
                    }(s);
                ((e, t, n, i) => {
                    e.searchParams.set("client_id", i), e.searchParams.set("redirect_uri", n), e.searchParams.set("response_type", t.anon ? "anon_session" : "code")
                })(L, e, N, O), f && (L.searchParams.set("iframe", h ? "2" : "1"), S.iframe = h ? "2" : "1"), ((e, t, n, i, r) => {
                    n && e.searchParams.set("lang", n), i && e.searchParams.set("aid", i.toString()), r && e.searchParams.set("bkng_action", r), t.popup && e.searchParams.set("popup", "1"), t.prompt && e.searchParams.set("prompt", t.prompt), t.experimentVariant && e.searchParams.set("variant", t.experimentVariant.toString()), t.canShowGeniusMessaging && e.searchParams.set("genius", "1")
                })(L, e, d, u, _), s && !g || function(e, t) {
                    t.searchParams.forEach(((t, n) => {
                        o.test(n) && e.searchParams.set(n, t)
                    }))
                }(L, c);
                const C = {
                    id: m
                };
                if (p && (C.data = function(e) {
                        const t = {};
                        return Object.keys(e).forEach((n => {
                            var i, r, o, a;
                            const s = {};
                            null !== (i = e[n]) && void 0 !== i && i.variant && (s.v = e[n].variant), null !== (r = e[n]) && void 0 !== r && r.auth_request_goal && (s.g1 = e[n].auth_request_goal), null !== (o = e[n]) && void 0 !== o && o.auth_page_loaded_goal && (s.g2 = e[n].auth_page_loaded_goal), null !== (a = e[n]) && void 0 !== a && a.auth_page_interaction_goal && (s.g3 = e[n].auth_page_interaction_goal), t[n] = s
                        })), t
                    }(p)), Object.keys(S).length && (C.params = S), l) {
                    const e = function(e, t) {
                        try {
                            let n;
                            const i = JSON.stringify(t);
                            return n = btoa(i), `${e}*${n}`
                        } catch (n) {
                            return `${e}*`
                        }
                    }(l, C);
                    e && L.searchParams.set("state", e)
                }
                return L.toString()
            };
            let s = function(e) {
                    return e.BP_AUTH_CHECKBOX = "bp_auth_checkbox", e.BP_AUTH_CHECKBOX_GENIUS = "bp_auth_checkbox_genius", e.BP_AUTH_CHECKBOX_GENIUS_MDOT = "bp_auth_checkbox_genius_mdot", e.BP_AUTH_CHECKBOX_MDOT = "bp_auth_checkbox_mdot", e.BP_GENIUS_INLINE = "bp_genius_inline", e.BP_GENIUS_INLINE_MDOT = "bp_genius_inline_mdot", e.BP_INLINE = "bp_inline", e.BP_INLINE_MDOT = "bp_inline_mdot", e.BS2_AUTH_LOW = "bs2_auth_low", e.BS2_AUTH_LOW_MDOT = "bs2_auth_low_mdot", e.CARS_INDEX_LP = "cars_index_lp", e.CBCC_LANDING_PAGE = "cbcc_landing_page", e.CO_BRAND_PRODUCTS_SIGNUP = "co_brand_products_signup", e.GENIUSVIP_ENROLLMENT = "geniusvip_enrollment", e.GENIUS_INDEX_BANNER = "genius_index_banner", e.GENIUS_INDEX_CAROUSEL = "genius_index_carousel", e.GENIUS_INDEX_SHEET = "genius_index_sheet", e.GENIUS_LANDING_PAGE = "genius_landing_page", e.GENIUS_LANDING_PAGE_INCENTIVE_CAMPAIGN = "genius_lp_incentive_campaign", e.GENIUS_ROOM_TABLE_BANNER_MDOT = "genius_rt_mdot_banner", e.GENIUS_ROOM_TABLE_BANNER_WWW = "genius_room_table_banner_www", e.GENIUS_SEARCHRESULTS_SHEET = "genius_searchresults_sheet", e.GENIUS_SHEET = "genius_sheet", e.GENIUS_SIGN_IN_EMAIL_POPOVER = "genius_sign_in_email_popover", e.HELP_CENTER = "help_center", e.INDEX = "index", e.LANDING_PAGES = "landing_pages", e.LANDING_PAGES_HOLIDAYS = "landing_pages_holidays", e.LOGIN_CARD = "login_card", e.LOGIN_CARD_SOCIAL = "login_card_social", e.MEMBERSHIP_HUB_REDIRECT = "membership_hub_redirect", e.MERCH_PLATFORM_INDEX = "merch_platform_index", e.MERCH_PLATFORM_INDEX_CTA = "merch_platform_index_cta", e.MERCH_PLATFORM_PROPERTY_PAGE_CTA = "merch_platform_property_page_cta", e.MERCH_PLATFORM_SEARCH_RESULTS_PAGE_CTA = "merch_platform_search_results_page_cta", e.MERCH_PLATFORM_SR = "merch_platform_sr", e.PAYMENT_TRANSACTIONS = "payment_transactions", e.PROPERY_PAGE = "propery_page", e.REACT_SHELL_GOOGLE_ONE_TAP = "react_shell_google_one_tap", e.SEARCH_RESULTS = "search_results", e.SEARCH_RESULTS_MDOT_PROPERTY_LIST_CTA_MDOT = "search_results_mdot_property_list_cta", e.SEARCH_RESULTS_WWW_PROPERTY_LIST_CTA_MDOT = "search_results_www_property_list_cta", e.SELF_SERVICE_BANNER = "self_service_banner", e.TRAVELLER_HEADER = "traveller_header", e.WISHLIST_BTN = "wishlist_btn", e.WISHLIST_BTN_SR = "wishlist_btn_sr", e.WISHLIST_DETAILS = "wishlist_details", e
                }({}),
                c = function(e) {
                    return e.SIGN_IN = "signin", e.IFRAME_WITH_EMAIL = "iframe-with-email", e.REGISTER = "register", e.NONE = "none", e
                }({})
        },
        "77a90307": (e, t, n) => {
            n.d(t, {
                C5: () => a,
                Wx: () => r,
                r8: () => o,
                sk: () => s
            });
            var i = n("dc6d28ff");
            const r = () => (0, i.getRequestContext)().getBPlatformEnvironment && "dqs" === (0, i.getRequestContext)().getBPlatformEnvironment(),
                o = () => (0, i.getRequestContext)().getBPlatformEnvironment && ("dev" === (0, i.getRequestContext)().getBPlatformEnvironment() || !(0, i.getRequestContext)().getBPlatformEnvironment());

            function a() {
                return "undefined" !== typeof window && "undefined" !== typeof window.document
            }

            function s() {
                return !a()
            }
        },
        cf8fa355: (e, t, n) => {
            n.d(t, {
                Kq: () => i.Kq,
                uJ: () => i.uJ
            });
            var i = n("172e758c")
        },
        af1e2b38: (e, t, n) => {
            n.d(t, {
                NM: () => i.NM,
                Z6: () => i.Z6
            });
            var i = n("3c820981")
        },
        "8cbf371c": (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            var i = n("c44dcb0c");
            const r = function() {
                return (0, i.useI18n)().trans((0, i.t)("a11y_lp_spinner_loading_generic"))
            }
        },
        "43bedd84": (e, t, n) => {
            n.d(t, {
                p: () => i
            });
            const i = 
        },
        "172e758c": (e, t, n) => {
            n.d(t, {
                Kq: () => r,
                uJ: () => o
            });
            n("ead71eb0");
            var i = n("dc6d28ff");

            function r() {
                var e;
                const t = (0, i.getRequestContext)(),
                    n = null === (e = t.getBasePageUrl()) || void 0 === e ? void 0 : e.hostname,
                    r = t.getAffiliate();
                return n && /booking\.cn$/.test(n) || 1662037 === (null === r || void 0 === r ? void 0 : r.id)
            }

            function o() {
                var e;
                if (!r()) return !1;
                const t = null === (e = (0, i.getRequestContext)().getUserAgent()) || void 0 === e ? void 0 : e.userAgent;
                return Boolean(t && t.toLowerCase().includes("bookingharmonyos"))
            }
        },
        "3c820981": (e, t, n) => {
            n.d(t, {
                NM: () => i.N,
                Z6: () => a
            });
            var i = n("5245e060"),
                r = n("dc6d28ff");
            const o = () => (0, r.getRequestContext)().getSiteType() ? ? i.N.WWW,
                a = () => {
                    const e = o();
                    return {
                        isWWW: e === i.N.WWW,
                        isMDOT: e === i.N.MDOT,
                        isTDOT: e === i.N.TDOT
                    }
                }
        },
        e4c672be: (e, t, n) => {
            n.d(t, {
                Z: () => R
            });
            var i = n("3d054e81"),
                r = n("ead71eb0"),
                o = n.n(r),
                a = n("0f5c0451"),
                s = n("22b0f37c"),
                c = n("6222292b"),
                l = n("43bedd84"),
                u = n("30190550"),
                d = n("af1e2b38"),
                _ = n("28dbd132"),
                g = n("239beb17"),
                h = n("c44dcb0c"),
                m = n("cedcabf9");
            const f = {},
                p = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "mutation",
                        name: {
                            kind: "Name",
                            value: "DismissGeniusSignInSheet"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "DismissGeniusSignInBottomSheetInput"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "geniusGuestMutation"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "dismissSignInBottomSheet"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "input"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "input"
                                                }
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isSuccess"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "errorMessage"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 224,
                        source: {
                            body: "\n  mutation DismissGeniusSignInSheet(\n    $input: DismissGeniusSignInBottomSheetInput!\n  ) {\n    geniusGuestMutation {\n      dismissSignInBottomSheet(input: $input) {\n        isSuccess\n        errorMessage\n      }\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            const v = {},
                E = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "GeniusSignInSheet"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "input"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "GeniusSignInBottomSheetInput"
                                    }
                                }
                            },
                            directives: []
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "geniusGuestData"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "signInBottomSheet"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "input"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "input"
                                                }
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "title"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "subtitle"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                alias: {
                                                    kind: "Name",
                                                    value: "closeAriaLabel"
                                                },
                                                name: {
                                                    kind: "Name",
                                                    value: "closeAccessibilityText"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "signInCta"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 273,
                        source: {
                            body: "\n  query GeniusSignInSheet($input: GeniusSignInBottomSheetInput!) {\n    geniusGuestData {\n      signInBottomSheet(input: $input) {\n        title\n        subtitle\n        closeAriaLabel: closeAccessibilityText\n        signInCta {\n          title\n        }\n      }\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            var b = n("d0fefcf5");
            let S = function(e) {
                return e.WILL_BE_SHOWN = "WILL_BE_SHOWN", e.WILL_NOT_BE_SHOWN = "WILL_NOT_BE_SHOWN", e.LOADING = "LOADING", e
            }({});

            function I() {
                const e = function(e) {
                    const [t, n] = (0, r.useState)();
                    return (0, r.useEffect)((() => {
                        let i = !0;
                        return async function() {
                                if (!t) try {
                                    const t = await new Promise((t => {
                                        b.eventBus.publish(e, {
                                            resolve: t
                                        })
                                    }));
                                    i && n(t)
                                } catch (r) {}
                            }(),
                            function() {
                                i = !1
                            }
                    }), []), t
                }("CAPLA_EVENT_app_banner_will_be_displayed");
                return void 0 === e ? S.LOADING : e ? S.WILL_BE_SHOWN : S.WILL_NOT_BE_SHOWN
            }
            let N = function(e) {
                return e.WILL_BE_SHOWN = "WILL_BE_SHOWN", e.WILL_NOT_BE_SHOWN = "WILL_NOT_BE_SHOWN", e.LOADING = "LOADING", e
            }({});
            const L = () => {
                const [e, t] = (0, r.useState)(N.LOADING);
                return (0, r.useEffect)((() => {
                    function e(e) {
                        const n = e.detail.willBannerBeShown ? N.WILL_BE_SHOWN : N.WILL_NOT_BE_SHOWN;
                        t(n)
                    }
                    return document.addEventListener("cookie_banner_loaded", e), (() => {
                        let e = !0;
                        return window.PCM && 1 === window.PCM.isCountryNeedCookieBanner && window.PCM.isUserGaveConsent instanceof Function && !window.PCM.isUserGaveConsent() && (e = !1), e
                    })() && t(N.WILL_NOT_BE_SHOWN), () => document.removeEventListener("cookie_banner_loaded", e)
                }), []), e
            };
            var O = n("dc6d28ff");
            let C = function(e) {
                return e.WILL_BE_SHOWN = "WILL_BE_SHOWN", e.WILL_NOT_BE_SHOWN = "WILL_NOT_BE_SHOWN", e.LOADING = "LOADING", e
            }({});
            var k = n("77a90307");
            n("41c6c66e");
            const A = () => (0, k.r8)() || (0, k.Wx)();

            function T(e) {
                if ((0, k.C5)()) {
                    const n = ("; " + document.cookie).split("; " + e + "=");
                    var t;
                    if (2 === n.length) return null === (t = n.pop()) || void 0 === t ? void 0 : t.split(";").shift()
                } else ! function() {
                    if (A()) {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        const i = [(0, k.sk)() ? "[Server Warning]" : "[JS Warning]", ...t];
                        console.warn.apply(void 0, i)
                    }
                }("[getCookie] Function only works in client-side, don't use it in Server side rendering!")
            }

            function y(e) {
                var t, n, i;
                const o = L(),
                    a = I(),
                    s = function() {
                        const e = (0, d.Z6)().isMDOT,
                            [t, n] = (0, r.useState)(e ? C.LOADING : C.WILL_NOT_BE_SHOWN);
                        return (0, r.useEffect)((() => {
                            if (e) {
                                const e = T("fscag01");
                                n(e ? C.WILL_BE_SHOWN : C.WILL_NOT_BE_SHOWN)
                            }
                        }), []), t
                    }(),
                    c = (0, O.getRequestContext)(),
                    l = (null === (t = c.getUserIdentity()) || void 0 === t ? void 0 : t.authLevel) ? ? 0,
                    u = null === (n = c.getAffiliate()) || void 0 === n ? void 0 : n.isGeniusAffiliate,
                    g = [2393080, 2393079].includes(null === (i = c.getAffiliate()) || void 0 === i ? void 0 : i.id),
                    h = Boolean(0 === l && u && !g && a === S.WILL_NOT_BE_SHOWN && o === N.WILL_NOT_BE_SHOWN && s === C.WILL_NOT_BE_SHOWN),
                    m = _.exp `TDXbdLOLOLOCcTaJBHKZYQNTREWaddEHFZMC`,
                    f = "searchresults" === e,
                    p = "us" === c.getVisitorCountry(),
                    v = (0, _.trackExperiment)(m) > 0;
                h && ((0, _.trackExperimentStage)(m, 1), f && (0, _.trackExperimentStage)(m, 2), f && p && (0, _.trackExperimentStage)(m, 3));
                return h && !(f && p && v)
            }
            const B = _.exp `TDXbdLOLOLOCcTaJBHKZYQNTREWaddEHFZMC`,
                w = g.feature `dDfPSCZJKSCYZBGfCDATBbDDUWe`,
                P = e => {
                    const t = y(e),
                        n = (0, h.useI18n)(),
                        i = {
                            index: u.au.GENIUS_INDEX_SHEET,
                            searchresults: u.au.GENIUS_SEARCHRESULTS_SHEET
                        }[e],
                        o = (0, u.wd)({
                            componentId: i,
                            prompt: "signin"
                        }),
                        {
                            data: a
                        } = function(e) {
                            const t = { ...v,
                                ...e
                            };
                            return m.useQuery(E, t)
                        }({
                            variables: {
                                input: {
                                    dismissedSince: void 0
                                }
                            },
                            skip: !1 === t
                        }),
                        [s] = function(e) {
                            const t = { ...f,
                                ...e
                            };
                            return m.useMutation(p, t)
                        }();
                    if ((0, r.useEffect)((() => {
                            t && null !== a && void 0 !== a && a.geniusGuestData.signInBottomSheet && (0, _.trackCustomGoal)(B, 1)
                        }), [null === a || void 0 === a ? void 0 : a.geniusGuestData.signInBottomSheet, t]), null === a || void 0 === a || !a.geniusGuestData.signInBottomSheet) return null;
                    const c = (0, d.Z6)().isMDOT ? "bottom" : "center",
                        {
                            title: b,
                            subtitle: S,
                            signInCta: {
                                title: I
                            },
                            closeAriaLabel: N
                        } = a.geniusGuestData.signInBottomSheet;
                    return {
                        onAfterOpen: () => {
                            s({
                                variables: {
                                    input: {
                                        actionPage: e
                                    }
                                }
                            })
                        },
                        closeAriaLabel: N,
                        primaryCta: {
                            onClick: e => {
                                let {
                                    closeBottomSheet: t
                                } = e;
                                return t()
                            },
                            title: I,
                            link: o
                        },
                        trackingIdentifiers: (0, g.isFeatureRunning)(w) ? {
                            componentId: i,
                            containerId: e
                        } : void 0,
                        position: c,
                        subtitle: S,
                        ariaLabel: n.trans((0, h.t)("a11y_genius_web_sign_in_modal_hint", {
                            variables: {
                                b_companyname: l.p
                            }
                        })),
                        title: b
                    }
                },
                R = e => {
                    let {
                        actionPage: t
                    } = e;
                    const n = P(t);
                    return n ? o().createElement(a.Z, (0, i.Z)({}, n, {
                        header: o().createElement(c.Box, {
                            padding: 6
                        }, o().createElement(s.Z, {
                            size: "larger"
                        }))
                    })) : null
                }
        },
        "7db18251": (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0"),
                r = n.n(i),
                o = n("e4c672be");
            const a = function() {
                return r().createElement(o.Z, {
                    actionPage: "index"
                })
            }
        },
        "5245e060": (e, t, n) => {
            var i, r;
            n.d(t, {
                    N: () => i,
                    p: () => r
                }),
                function(e) {
                    e.UNKNOWN = "UNKNOWN", e.WWW = "WWW", e.MDOT = "MDOT", e.TDOT = "TDOT", e.ANDROID = "ANDROID", e.IOS = "IOS", e.XML = "XML", e.MG_FAMILY = "MG_FAMILY", e.AFFILIATE_BASE = "AFFILIATE_BASE", e.EMK_FAMILY = "EMK_FAMILY", e.JOINAPP = "JOINAPP", e.PULSE = "PULSE", e.EXTRANET = "EXTRANET", e.CHAT2BOOK = "CHAT2BOOK"
                }(i || (i = {})),
                function(e) {
                    e[e.UNKNOWN = 0] = "UNKNOWN", e[e.WWW = 1] = "WWW", e[e.MDOT = 2] = "MDOT", e[e.TDOT = 3] = "TDOT", e[e.ANDROID = 4] = "ANDROID", e[e.IOS = 5] = "IOS", e[e.XML = 13] = "XML", e[e.MG_FAMILY = 15] = "MG_FAMILY", e[e.AFFILIATE_BASE = 22] = "AFFILIATE_BASE", e[e.EMK_FAMILY = 23] = "EMK_FAMILY", e[e.JOINAPP = 24] = "JOINAPP", e[e.PULSE = 27] = "PULSE", e[e.EXTRANET = 31] = "EXTRANET", e[e.CHAT2BOOK = 87] = "CHAT2BOOK"
                }(r || (r = {}))
        },
        "82a3b6da": (e, t) => {
            var n = 60103,
                i = 60106,
                r = 60107,
                o = 60108,
                a = 60114,
                s = 60109,
                c = 60110,
                l = 60112,
                u = 60113,
                d = 60120,
                _ = 60115,
                g = 60116,
                h = 60121,
                m = 60122,
                f = 60117,
                p = 60129,
                v = 60131;
            if ("function" === typeof Symbol && Symbol.for) {
                var E = Symbol.for;
                n = E("react.element"), i = E("react.portal"), r = E("react.fragment"), o = E("react.strict_mode"), a = E("react.profiler"), s = E("react.provider"), c = E("react.context"), l = E("react.forward_ref"), u = E("react.suspense"), d = E("react.suspense_list"), _ = E("react.memo"), g = E("react.lazy"), h = E("react.block"), m = E("react.server.block"), f = E("react.fundamental"), p = E("react.debug_trace_mode"), v = E("react.legacy_hidden")
            }

            function b(e) {
                if ("object" === typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case n:
                            switch (e = e.type) {
                                case r:
                                case a:
                                case o:
                                case u:
                                case d:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case c:
                                        case l:
                                        case g:
                                        case _:
                                        case s:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case i:
                            return t
                    }
                }
            }
            var S = s,
                I = n,
                N = l,
                L = r,
                O = g,
                C = _,
                k = i,
                A = a,
                T = o,
                y = u;
            t.ContextConsumer = c, t.ContextProvider = S, t.Element = I, t.ForwardRef = N, t.Fragment = L, t.Lazy = O, t.Memo = C, t.Portal = k, t.Profiler = A, t.StrictMode = T, t.Suspense = y, t.isAsyncMode = function() {
                return !1
            }, t.isConcurrentMode = function() {
                return !1
            }, t.isContextConsumer = function(e) {
                return b(e) === c
            }, t.isContextProvider = function(e) {
                return b(e) === s
            }, t.isElement = function(e) {
                return "object" === typeof e && null !== e && e.$$typeof === n
            }, t.isForwardRef = function(e) {
                return b(e) === l
            }, t.isFragment = function(e) {
                return b(e) === r
            }, t.isLazy = function(e) {
                return b(e) === g
            }, t.isMemo = function(e) {
                return b(e) === _
            }, t.isPortal = function(e) {
                return b(e) === i
            }, t.isProfiler = function(e) {
                return b(e) === a
            }, t.isStrictMode = function(e) {
                return b(e) === o
            }, t.isSuspense = function(e) {
                return b(e) === u
            }, t.isValidElementType = function(e) {
                return "string" === typeof e || "function" === typeof e || e === r || e === a || e === p || e === o || e === u || e === d || e === v || "object" === typeof e && null !== e && (e.$$typeof === g || e.$$typeof === _ || e.$$typeof === s || e.$$typeof === c || e.$$typeof === l || e.$$typeof === f || e.$$typeof === h || e[0] === m)
            }, t.typeOf = b
        },
        "10db3f9d": (e, t, n) => {
            e.exports = n("82a3b6da")
        },
        "3d054e81": (e, t, n) => {
            function i() {
                return i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n)({}).hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }, i.apply(null, arguments)
            }
            n.d(t, {
                Z: () => i
            })
        }
    }
]);
