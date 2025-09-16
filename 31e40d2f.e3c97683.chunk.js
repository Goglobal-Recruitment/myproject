/*! For license information please see 31e40d2f.e3c97683.chunk.js.LICENSE.txt */
(self["b-seo-core-components__LOADABLE_LOADED_CHUNKS__"] = self["b-seo-core-components__LOADABLE_LOADED_CHUNKS__"] || []).push([
    ["31e40d2f"], {
        d0989236: (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => i
            });
            var r = n("dc6d28ff");

            function i() {
                const e = (0, r.getRequestContext)();
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
        e7cd08ba: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n("ead71eb0");
            const i = "c6e55be300",
                a = () => {
                    const e = (0, r.useRef)(null);
                    let t = +new Date;
                    return {
                        cardAttributes: {
                            onClick: n => {
                                var r;
                                if (null === (r = e.current) || void 0 === r ? void 0 : r.contains(n.target)) return;
                                if (+new Date - t < 200) {
                                    var i;
                                    var a;
                                    if (n.altKey || n.ctrlKey || n.shiftKey || n.metaKey) return void(null === (a = e.current) || void 0 === a || a.dispatchEvent(new MouseEvent("click", {
                                        altKey: n.altKey,
                                        ctrlKey: n.ctrlKey,
                                        shiftKey: n.shiftKey,
                                        metaKey: n.metaKey
                                    })));
                                    null === (i = e.current) || void 0 === i || i.click()
                                }
                            },
                            onMouseDown: () => {
                                t = +new Date
                            }
                        },
                        cardClassName: i,
                        ctaRef: e
                    }
                }
        },
        "17d7b138": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n("dc6d28ff");
            const i = function() {
                let {
                    experiments: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {
                    originalUri: (0, r.getRequestContext)().getBasePageUrl().pathname.toString(),
                    ...e ? {
                        experiments: e
                    } : {}
                }
            }
        },
        "2b27046d": (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => u
            });
            var r = n("ead71eb0"),
                i = n("90018b64"),
                a = n("4952d39e"),
                o = n.n(a),
                l = n("baae01e7"),
                s = n.n(l);
            const d = {
                    small: `(max-width: ${i.Z.MEDIUM-1}px)`,
                    medium: `(min-width: ${i.Z.MEDIUM}px) and (max-width: ${i.Z.LARGE-1}px)`,
                    large: `(min-width: ${i.Z.LARGE}px) and (max-width: ${i.Z.XLARGE-1}px)`,
                    xlarge: `(min-width: ${i.Z.XLARGE}px)`
                },
                c = e => {
                    const t = (0, r.useContext)(o()),
                        [n, i] = (0, r.useState)(e || t.defaultViewportSize);
                    return s()((() => {
                        const e = Object.keys(d).map((e => {
                            const t = d[e],
                                n = window.matchMedia(t);
                            return {
                                mq: n,
                                handler: () => n.matches && i(e)
                            }
                        }));
                        return e.forEach((e => {
                            let {
                                handler: t,
                                mq: n
                            } = e;
                            t(), n.addListener(t)
                        })), () => {
                            e.forEach((e => {
                                let {
                                    handler: t,
                                    mq: n
                                } = e;
                                n.removeListener(t)
                            }))
                        }
                    }), []), {
                        size: n,
                        isSmall: "small" === n,
                        isMedium: "medium" === n,
                        isLarge: "large" === n,
                        isXLarge: "xlarge" === n
                    }
                },
                u = () => {
                    const {
                        size: e
                    } = c();
                    return t => {
                        let {
                            s: n,
                            m: r,
                            l: i,
                            xl: a
                        } = t;
                        const o = n,
                            l = r ? ? o,
                            s = i ? ? l,
                            d = a ? ? s;
                        switch (e) {
                            case "xlarge":
                                return d;
                            case "large":
                                return s;
                            case "medium":
                                return l;
                            default:
                                return o
                        }
                    }
                }
        },
        "4f8c06a5": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n("6222292b");
            const i = e => {
                let {
                    allItemsLoadedText: t,
                    renderItemsLoadedText: n
                } = e;
                return (e, i) => {
                    const a = `${n(e)}. ${i?t:""}`;
                    (0, r.screenReaderAnnounce)(a, "polite")
                }
            }
        },
        "07ee7421": (e, t, n) => {
            "use strict";
            n.d(t, {
                nI: () => l,
                tq: () => o
            });
            var r = n("43a4d203"),
                i = n("dc6d28ff");
            const a = () => {
                    switch ((0, i.getRequestContext)().getSiteType()) {
                        case r.SiteType.MDOT:
                        case r.SiteType.ANDROID:
                        case r.SiteType.IOS:
                            return "mobile";
                        case r.SiteType.TDOT:
                            return "tablet";
                        case r.SiteType.WWW:
                        default:
                            return "desktop"
                    }
                },
                o = () => "mobile" === a(),
                l = () => "desktop" === a()
        },
        "84bb43f2": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a,
                K: () => o
            });
            var r = n("b77791ba");
            const i = (e, t) => function() {
                    if (!(0, r.Z)() && (!t || t())) return e(...arguments)
                },
                a = i,
                o = e => t => i(t, e)
        },
        b77791ba: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n("dc6d28ff");
            const i = ["dragonbot", "https://whatis.contentkingapp.com", "siteauditbot", "bot.html", "bot.htm", "google-ads", "adsbot-google", "google-safety", "bytespider", "spider-feedback@bytedance.com", "petalbot", "facebot", "twitterbot", "amazonbot", "bingbot", "pangubot", "bytedance"],
                a = () => {
                    var e;
                    const t = (0, r.getRequestContext)(),
                        n = t.isRobotRequest(),
                        a = (null === (e = t.getUserAgent()) || void 0 === e ? void 0 : e.userAgent) ? ? "";
                    return n || i.some((e => a && a.toLowerCase().includes(e.toLowerCase())))
                }
        },
        af1e2b38: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z6: () => o
            });
            var r = n("0321416a"),
                i = n("dc6d28ff");
            const a = () => (0, i.getRequestContext)().getSiteType() ? ? r.N.WWW,
                o = () => {
                    const e = a();
                    return {
                        isWWW: e === r.N.WWW,
                        isMDOT: e === r.N.MDOT,
                        isTDOT: e === r.N.TDOT
                    }
                }
        },
        f7dd1c71: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            var r = n("3d054e81"),
                i = n("ead71eb0"),
                a = n.n(i),
                o = n("6222292b"),
                l = n("2b27046d");
            const s = e => {
                const t = {
                    titleTagName: "h2",
                    variant: (0, l.$)()({
                        s: "headline_3",
                        l: "headline_2"
                    }),
                    subtitleTagName: "p"
                };
                return e.title || e.subtitle ? a().createElement(o.Title, (0, r.Z)({}, t, e)) : null
            }
        },
        "8a7deb88": (e, t, n) => {
            "use strict";
            n.d(t, {
                V: () => r
            });
            const r = e => null !== e && void 0 !== e
        },
        "70bf9a6e": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => R
            });
            var r = n("3d054e81"),
                i = n("ead71eb0"),
                a = n.n(i),
                o = n("f7dd1c71"),
                l = n("6222292b"),
                s = n("c44dcb0c"),
                d = n("8521b397"),
                c = n.n(d);
            const u = e => e.openInNewTab ? {
                    target: "_blank",
                    rel: "noreferrer"
                } : {},
                g = e => e.robotNoFollow ? {
                    rel: "nofollow"
                } : {},
                m = (0, i.forwardRef)(((e, t) => {
                    const {
                        attributes: n,
                        openInNewTab: i,
                        title: o,
                        robotNoFollow: s,
                        ...d
                    } = e;
                    return a().createElement(l.Actionable, (0, r.Z)({}, d, {
                        ref: t,
                        attributes: {
                            title: o,
                            ...n,
                            ...u(e),
                            ...g(e)
                        }
                    }))
                }));
            m.displayName = "SeoLink", m.defaultProps = {
                openInNewTab: !1,
                robotNoFollow: !1
            };
            const b = m;
            var p = n("e7cd08ba");
            const h = .5,
                v = e => {
                    let {
                        titleProps: t,
                        subtitleProps: n,
                        imageProps: i,
                        linkProps: o,
                        contentProps: s,
                        className: d,
                        fallbackIcon: u,
                        onClick: g,
                        row: m,
                        column: v,
                        textGap: f = h
                    } = e;
                    const {
                        cardAttributes: k,
                        cardClassName: I,
                        ctaRef: y
                    } = (0, p.Z)();
                    return a().createElement(l.Stack, {
                        gap: 4,
                        direction: "row",
                        alignItems: "center",
                        className: c()(I, d),
                        attributes: { ...k,
                            "data-testid": "in-product-interlinking-item"
                        }
                    }, !!i && a().createElement(l.Stack.Item, null, a().createElement(l.Image, (0, r.Z)({
                        width: "64px",
                        height: "64px",
                        borderRadius: 100,
                        contentMode: "fit",
                        fallback: u ? "image" : void 0,
                        fallbackImage: u ? a().createElement(l.Icon, {
                            svg: u,
                            color: "disabled",
                            size: "medium"
                        }) : void 0
                    }, i))), a().createElement(l.Stack.Item, {
                        grow: !0
                    }, a().createElement(l.Stack, {
                        gap: f,
                        alignItems: "start"
                    }, a().createElement(b, (0, r.Z)({
                        ref: y
                    }, o, {
                        onClick: e => {
                            var t;
                            null === g || void 0 === g || g(m, v), null === (t = o.onClick) || void 0 === t || t.call(o, e)
                        }
                    }), a().createElement(l.Text, (0, r.Z)({
                        variant: "strong_2",
                        color: "neutral"
                    }, t))), !!n && a().createElement(l.Text, (0, r.Z)({
                        variant: "body_2",
                        color: "neutral_alt"
                    }, n)), !!s && a().createElement(l.Text, (0, r.Z)({
                        variant: "body_2",
                        color: "neutral_alt"
                    }, s)))))
                };
            var f = n("ef0aef99");
            const k = e => {
                let {
                    onClick: t,
                    showMoreCopy: n,
                    disabled: r
                } = e;
                return a().createElement(l.Button.Aligner, {
                    alignment: "start"
                }, a().createElement(l.Button, {
                    text: n,
                    icon: r ? void 0 : f.Z,
                    variant: "tertiary",
                    type: "button",
                    onClick: t,
                    disabled: r
                }))
            };
            var I = n("4f8c06a5");
            const y = "a42180b064",
                E = "d98b13273d",
                w = 6,
                S = () => {
                    const {
                        trans: e
                    } = (0, s.useI18n)();
                    return (0, I.Z)({
                        renderItemsLoadedText: t => e((0, s.t)("a11y_lp_interlinking_items_loading", {
                            variables: {
                                num_items: t
                            },
                            num_exception: t
                        })),
                        allItemsLoadedText: e((0, s.t)("a11y_lp_interlinking_items_loaded"))
                    })
                },
                C = e => {
                    const {
                        linkCards: t,
                        numOfColumns: n,
                        numOfRowsPerLoad: o,
                        expandGrid: d,
                        fallbackIcon: c,
                        onShowMoreClick: u,
                        linkCardsGap: g = w
                    } = e, {
                        trans: m
                    } = (0, s.useI18n)(), b = S(), p = d ? Math.ceil(t.length / n) : o, [h, f] = (0, i.useState)(p), I = h * n, y = p * n < t.length, C = t.map(((e, t) => a().createElement(l.Grid.Column, {
                        size: 1,
                        key: e.linkProps.href,
                        className: t > I - 1 ? E : void 0,
                        tagName: "li"
                    }, a().createElement(v, (0, r.Z)({}, e, {
                        fallbackIcon: c
                    }, (e => ({
                        row: Math.floor(e / n),
                        column: e % n
                    }))(t)))))), N = I >= t.length;
                    return a().createElement(l.Stack, {
                        gap: 4
                    }, a().createElement(l.Grid, {
                        align: "center",
                        columns: n,
                        gap: g,
                        tagName: "ul"
                    }, C), y && a().createElement(k, {
                        showMoreCopy: N ? m((0, s.t)("a11y_lp_interlinking_items_loaded")) : e.showMoreCopy,
                        onClick: () => {
                            const e = h + o;
                            f(e), null === u || void 0 === u || u(I);
                            const r = Math.min(e * n, t.length),
                                i = r >= t.length;
                            b(r - I, i)
                        },
                        disabled: N
                    }))
                },
                N = e => {
                    const {
                        linkCards: t,
                        numOfColumns: n,
                        numOfRowsPerLoad: o,
                        carouselSize: d = "largest",
                        expandGrid: c,
                        fallbackIcon: u,
                        onShowMoreClick: g,
                        linkCardsGap: m = w
                    } = e, b = (0, s.useI18n)(), p = c ? Math.ceil(t.length / n) : o, [h, f] = (0, i.useState)(p), I = S(), y = h * n > t.length ? h * n - 1 : h * n, C = t.length > y, N = t.length <= p * n, O = [];
                    for (let r = 0; r < y; r += n) {
                        const e = t.slice(r, r + n);
                        e.length && O.push(e)
                    }
                    const M = () => {
                        const e = h + o;
                        f(e), null === g || void 0 === g || g(y);
                        const r = Math.min(e * n, t.length),
                            i = r >= t.length;
                        I(r - y, i)
                    };
                    return 0 === t.length ? null : a().createElement(a().Fragment, null, a().createElement(l.Carousel, {
                        size: d,
                        previousButtonAriaLabel: b.trans((0, s.t)("a11y_lp_carousel_arrow_back")),
                        nextButtonAriaLabel: b.trans((0, s.t)("a11y_lp_carousel_arrow_forward"))
                    }, O.map(((t, i) => a().createElement(l.Stack, {
                        key: i,
                        gap: m
                    }, t.map(((e, t) => a().createElement(l.Stack.Item, {
                        key: e.linkProps.href,
                        className: n * i + t >= y - 1 ? E : void 0
                    }, a().createElement(v, (0, r.Z)({}, e, {
                        fallbackIcon: u,
                        column: i,
                        row: t
                    }))))), !N && i === O.length - 1 && a().createElement(k, {
                        showMoreCopy: C ? e.showMoreCopy : b.trans((0, s.t)("a11y_lp_interlinking_items_loaded")),
                        onClick: M,
                        disabled: !C
                    }))))))
                },
                O = e => (0, l.useViewport)().isLarge ? a().createElement(C, e) : a().createElement(N, e),
                M = !1,
                T = "in-product-interlinking-tab",
                A = e => {
                    const {
                        cardPanels: t = [],
                        numOfColumns: n,
                        numOfRowsPerLoad: o,
                        carouselSize: s,
                        expandGrid: d = M,
                        showMoreCopy: c,
                        defaultActiveTabId: u,
                        tabsVariant: g = "rounded",
                        onShowMoreClick: m,
                        tabsMoreBtnLabel: b
                    } = e, [p, h] = (0, i.useState)((() => u || t[0].tabId)), v = t.map((e => ({
                        id: e.tabId,
                        text: e.tabLabel,
                        linkAttributes: e.tabAttributes
                    })));
                    return a().createElement(a().Fragment, null, a().createElement(l.Tab, {
                        variant: g,
                        activeTabId: p,
                        onTabChange: e => {
                            var n;
                            h(e);
                            const r = t.findIndex((t => {
                                    let {
                                        tabId: n
                                    } = t;
                                    return n === e
                                })),
                                i = t[r];
                            null === i || void 0 === i || null === (n = i.onClick) || void 0 === n || n.call(i, r)
                        },
                        moreLabel: b
                    }, a().createElement(l.Tab.TriggerList, null, v.map((e => a().createElement(l.Tab.Trigger, (0, r.Z)({
                        key: e.id
                    }, e, {
                        linkAttributes: { ...e.linkAttributes,
                            "data-testid": `${T}-${e.id}`
                        }
                    }))))), a().createElement("div", {
                        className: y
                    }, t.map((e => {
                        var t;
                        return a().createElement(l.Tab.Panel, {
                            key: e.tabId,
                            id: e.tabId,
                            attributes: {
                                "aria-labelledby": null === e || void 0 === e || null === (t = e.tabAttributes) || void 0 === t ? void 0 : t.id
                            },
                            keepMounted: !0
                        }, a().createElement(O, {
                            numOfColumns: L(n),
                            numOfRowsPerLoad: x(o),
                            carouselSize: s,
                            fallbackIcon: e.fallbackIcon,
                            expandGrid: d,
                            showMoreCopy: c,
                            onShowMoreClick: m,
                            linkCards: e.linkCards,
                            linkCardsGap: e.linkCardsGap,
                            key: e.tabId
                        }))
                    })))))
                },
                _ = e => {
                    const t = e.cardPanels.flatMap((e => {
                            let {
                                linkCards: t
                            } = e;
                            return t
                        })),
                        n = e.cardPanels[0].fallbackIcon,
                        r = e.cardPanels[0].linkCardsGap;
                    return a().createElement("div", {
                        className: y
                    }, a().createElement(O, {
                        numOfColumns: L(e.numOfColumns),
                        numOfRowsPerLoad: x(e.numOfRowsPerLoad),
                        carouselSize: e.carouselSize,
                        expandGrid: !!e.expandGrid,
                        showMoreCopy: e.showMoreCopy,
                        onShowMoreClick: e.onShowMoreClick,
                        linkCards: t,
                        linkCardsGap: r,
                        fallbackIcon: n
                    }))
                },
                x = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
                    return e < 1 ? 3 : e
                },
                L = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
                    return e < 1 ? 3 : e
                },
                R = e => {
                    const {
                        titleProps: t,
                        hideTabs: n
                    } = e;
                    return a().createElement(l.Stack, {
                        gap: 4,
                        attributes: {
                            "data-testid": "in-product-interlinking"
                        }
                    }, a().createElement(o.Z, t), n ? a().createElement(_, e) : a().createElement(A, e))
                }
        },
        cd2462a7: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => x
            });
            var r = n("ead71eb0"),
                i = n.n(r),
                a = n("8521b397"),
                o = n.n(a),
                l = n("9a67ad93"),
                s = n("d0989236"),
                d = n("17d7b138");
            const c = n("70bf9a6e").Z;
            var u = n("dc6d28ff");

            function g() {
                var e;
                const t = (0, u.getRequestContext)(),
                    n = null === (e = t.getBasePageUrl()) || void 0 === e ? void 0 : e.hostname,
                    r = t.getAffiliate();
                return n && /booking\.cn$/.test(n) || 1662037 === (null === r || void 0 === r ? void 0 : r.id)
            }
            var m = n("af1e2b38"),
                b = n("239beb17"),
                p = n("c44dcb0c"),
                h = n("8a7deb88"),
                v = n("58ff1375"),
                f = n("41c6c66e"),
                k = n("d1e54a96");
            const I = e => e && e.title && e.url ? {
                    titleProps: {
                        children: e.title,
                        variant: "small_1"
                    },
                    linkProps: {
                        href: (0, k.constructUrl)({
                            pathname: e.url
                        }).toString(),
                        title: null === e || void 0 === e ? void 0 : e.anchorTagTitle
                    },
                    ...null !== e && void 0 !== e && e.subtitle ? {
                        subtitleProps: {
                            children: e.subtitle,
                            variant: "small_2"
                        }
                    } : {},
                    textGap: 0
                } : ((0, f.reportGrumble)("[SEO IndexPageInterlinking] encountered an interlinking item with invalid title or url", {
                    item: e
                }), null),
                y = e => {
                    var t;
                    return {
                        title: (null === e || void 0 === e ? void 0 : e.title) ? ? "",
                        panels: (null === e || void 0 === e || null === (t = e.tabs) || void 0 === t ? void 0 : t.map(((e, t) => {
                            var n;
                            let {
                                title: r,
                                tabOrderId: i,
                                links: a
                            } = e;
                            return {
                                tabLabel: r,
                                tabId: `mainIndexInterlinkingTab-${i||`i-${t}`}`,
                                fallbackIcon: v.Z,
                                linkCards: (null === a || void 0 === a || null === (n = a.map(I)) || void 0 === n ? void 0 : n.filter(h.V)) ? ? [],
                                linkCardsGap: 3
                            }
                        }))) ? ? []
                    }
                };
            var E = n("cedcabf9");
            const w = {},
                S = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "IndexPageInterlinking"
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
                                        value: "LandingQueriesInput"
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
                                    value: "landingContent"
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
                                            value: "mainIndexInterlinking"
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
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "tabs"
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
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "tabOrderId"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "links"
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
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "anchorTagTitle"
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
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "url"
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
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 335,
                        source: {
                            body: "\n  query IndexPageInterlinking($input: LandingQueriesInput!) {\n    landingContent(input: $input) {\n      mainIndexInterlinking {\n        title\n        tabs {\n          title\n          tabOrderId\n          links {\n            title\n            anchorTagTitle\n            subtitle\n            url\n          }\n        }\n      }\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            var C = n("07ee7421"),
                N = n("84bb43f2"),
                O = n("28dbd132");
            const M = O.exp `IZVDEZRdUOFZeFYWfDdMfHHVPZC`;
            var T = function(e) {
                return e[e.ON_RENDER = 1] = "ON_RENDER", e[e.DESKTOP = 2] = "DESKTOP", e[e.MOBILE = 3] = "MOBILE", e[e.IN_VIEW = 4] = "IN_VIEW", e
            }(T || {});
            const A = {
                    onRender: (0, N.Z)((() => {
                        g() && ((0, O.trackExperimentStage)(M, T.ON_RENDER), (0, C.nI)() ? (0, O.trackExperimentStage)(M, T.DESKTOP) : (0, O.trackExperimentStage)(M, T.MOBILE))
                    })),
                    inView: (0, N.Z)((() => {
                        g() && (0, O.trackExperimentStage)(M, T.IN_VIEW)
                    }))
                },
                _ = "b04cfda1aa",
                x = () => {
                    var e;
                    const {
                        isWWW: t
                    } = (0, m.Z6)(), {
                        isRobotRequest: n
                    } = (0, s.B)(), {
                        translate: r
                    } = (0, p.useTranslations)(), {
                        data: a
                    } = function(e) {
                        const t = { ...w,
                            ...e
                        };
                        return E.useQuery(S, t)
                    }({
                        variables: {
                            input: (0, d.Z)()
                        },
                        errorPolicy: "all"
                    }), u = null === a || void 0 === a || null === (e = a.landingContent) || void 0 === e ? void 0 : e.mainIndexInterlinking, {
                        title: h,
                        panels: v
                    } = y(u);
                    if (!h || 0 === v.length) return null;
                    const f = !t;
                    A.onRender();
                    let k = !0;
                    return (g() && (0, O.trackExperiment)(M) > 0 || g() && (0, b.isFeatureRunning)(b.feature `IZVDEZREBAUOFZeFYWbMSUHHVPZC`)) && (k = !1), i().createElement("div", {
                        className: o()({
                            [_]: f
                        })
                    }, i().createElement(l.df, {
                        triggerOnce: !0,
                        onChange: e => {
                            e && A.inView()
                        }
                    }), k && i().createElement(c, {
                        titleProps: {
                            title: h
                        },
                        cardPanels: v,
                        numOfColumns: 5,
                        numOfRowsPerLoad: 5,
                        carouselSize: "medium",
                        expandGrid: f || n,
                        showMoreCopy: r("seocore_index_popular_destinations_show_more")
                    }))
                }
        },
        "0321416a": (e, t, n) => {
            "use strict";
            var r, i;
            n.d(t, {
                    N: () => r,
                    p: () => i
                }),
                function(e) {
                    e.UNKNOWN = "UNKNOWN", e.WWW = "WWW", e.MDOT = "MDOT", e.TDOT = "TDOT", e.ANDROID = "ANDROID", e.IOS = "IOS", e.XML = "XML", e.MG_FAMILY = "MG_FAMILY", e.AFFILIATE_BASE = "AFFILIATE_BASE", e.EMK_FAMILY = "EMK_FAMILY", e.JOINAPP = "JOINAPP", e.PULSE = "PULSE", e.EXTRANET = "EXTRANET", e.CHAT2BOOK = "CHAT2BOOK"
                }(r || (r = {})),
                function(e) {
                    e[e.UNKNOWN = 0] = "UNKNOWN", e[e.WWW = 1] = "WWW", e[e.MDOT = 2] = "MDOT", e[e.TDOT = 3] = "TDOT", e[e.ANDROID = 4] = "ANDROID", e[e.IOS = 5] = "IOS", e[e.XML = 13] = "XML", e[e.MG_FAMILY = 15] = "MG_FAMILY", e[e.AFFILIATE_BASE = 22] = "AFFILIATE_BASE", e[e.EMK_FAMILY = 23] = "EMK_FAMILY", e[e.JOINAPP = 24] = "JOINAPP", e[e.PULSE = 27] = "PULSE", e[e.EXTRANET = 31] = "EXTRANET", e[e.CHAT2BOOK = 87] = "CHAT2BOOK"
                }(i || (i = {}))
        },
        "58ff1375": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n("ead71eb0");
            const i = function() {
                return r.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, r.createElement("path", {
                    d: "M2.75 6h9.5a.25.25 0 0 1-.25-.25v17.5l.75-.75H2.25l.75.75V5.75a.25.25 0 0 1-.25.25m0-1.5c-.69 0-1.25.56-1.25 1.25v17.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V5.75c0-.69-.56-1.25-1.25-1.25zm3-1.5h3.5A.25.25 0 0 1 9 2.75v2.5l.75-.75h-4.5l.75.75v-2.5a.25.25 0 0 1-.25.25m0-1.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-2.5c0-.69-.56-1.25-1.25-1.25zM5.25 9h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5m0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5m0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5m0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5m0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5M7.5.75v1.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0M15.75 24h6a.75.75 0 0 0 .75-.75V10.5A1.5 1.5 0 0 0 21 9h-4.5a1.5 1.5 0 0 0-1.5 1.5v12.75a.75.75 0 0 0 1.5 0V10.5H21v12.75l.75-.75h-6a.75.75 0 0 0 0 1.5M19.5 8.25v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0M.75 24h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5"
                }))
            }
        },
        ef0aef99: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n("ead71eb0");
            const i = function() {
                return r.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, r.createElement("path", {
                    d: "M20.25 11.25h-7.5v-7.5a.75.75 0 0 0-1.5 0v7.5h-7.5a.75.75 0 0 0 0 1.5h7.5v7.5a.75.75 0 0 0 1.5 0v-7.5h7.5a.75.75 0 0 0 0-1.5"
                }))
            }
        },
        "90018b64": (e, t, n) => {
            "use strict";
            var r;
            n.d(t, {
                    Z: () => i
                }),
                function(e) {
                    e[e.MEDIUM = 576] = "MEDIUM", e[e.LARGE = 1024] = "LARGE", e[e.XLARGE = 1280] = "XLARGE"
                }(r || (r = {}));
            const i = r
        },
        "8521b397": (e, t) => {
            var n;
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function i() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        n && (e = o(e, a(n)))
                    }
                    return e
                }

                function a(e) {
                    if ("string" === typeof e || "number" === typeof e) return e;
                    if ("object" !== typeof e) return "";
                    if (Array.isArray(e)) return i.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                    var t = "";
                    for (var n in e) r.call(e, n) && e[n] && (t = o(t, n));
                    return t
                }

                function o(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (i.default = i, e.exports = i) : void 0 === (n = function() {
                    return i
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        "9a67ad93": (e, t, n) => {
            "use strict";
            n.d(t, {
                YD: () => m,
                df: () => g
            });
            var r = n("ead71eb0"),
                i = Object.defineProperty,
                a = (e, t, n) => (((e, t, n) => {
                    t in e ? i(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                })(e, "symbol" !== typeof t ? t + "" : t, n), n),
                o = new Map,
                l = new WeakMap,
                s = 0,
                d = void 0;

            function c(e) {
                return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                    return `${t}_${"root"===t?(n=e.root,n?(l.has(n)||(s+=1,l.set(n,s.toString())),l.get(n)):"0"):e[t]}`;
                    var n
                })).toString()
            }

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d;
                if ("undefined" === typeof window.IntersectionObserver && void 0 !== r) {
                    const i = e.getBoundingClientRect();
                    return t(r, {
                        isIntersecting: r,
                        target: e,
                        intersectionRatio: "number" === typeof n.threshold ? n.threshold : 0,
                        time: 0,
                        boundingClientRect: i,
                        intersectionRect: i,
                        rootBounds: i
                    }), () => {}
                }
                const {
                    id: i,
                    observer: a,
                    elements: l
                } = function(e) {
                    const t = c(e);
                    let n = o.get(t);
                    if (!n) {
                        const r = new Map;
                        let i;
                        const a = new IntersectionObserver((t => {
                            t.forEach((t => {
                                var n;
                                const a = t.isIntersecting && i.some((e => t.intersectionRatio >= e));
                                e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = a), null == (n = r.get(t.target)) || n.forEach((e => {
                                    e(a, t)
                                }))
                            }))
                        }), e);
                        i = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                            id: t,
                            observer: a,
                            elements: r
                        }, o.set(t, n)
                    }
                    return n
                }(n), s = l.get(e) || [];
                return l.has(e) || l.set(e, s), s.push(t), a.observe(e),
                    function() {
                        s.splice(s.indexOf(t), 1), 0 === s.length && (l.delete(e), a.unobserve(e)), 0 === l.size && (a.disconnect(), o.delete(i))
                    }
            }
            var g = class extends r.Component {
                constructor(e) {
                    super(e), a(this, "node", null), a(this, "_unobserveCb", null), a(this, "handleNode", (e => {
                        this.node && (this.unobserve(), e || this.props.triggerOnce || this.props.skip || this.setState({
                            inView: !!this.props.initialInView,
                            entry: void 0
                        })), this.node = e || null, this.observeNode()
                    })), a(this, "handleChange", ((e, t) => {
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
                        trackVisibility: r,
                        delay: i,
                        fallbackInView: a
                    } = this.props;
                    this._unobserveCb = u(this.node, this.handleChange, {
                        threshold: e,
                        root: t,
                        rootMargin: n,
                        trackVisibility: r,
                        delay: i
                    }, a)
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
                        threshold: i,
                        root: a,
                        rootMargin: o,
                        onChange: l,
                        skip: s,
                        trackVisibility: d,
                        delay: c,
                        initialInView: u,
                        fallbackInView: g,
                        ...m
                    } = this.props;
                    return r.createElement(t || "div", {
                        ref: this.handleNode,
                        ...m
                    }, e)
                }
            };

            function m() {
                let {
                    threshold: e,
                    delay: t,
                    trackVisibility: n,
                    rootMargin: i,
                    root: a,
                    triggerOnce: o,
                    skip: l,
                    initialInView: s,
                    fallbackInView: d,
                    onChange: c
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                var g;
                const [m, b] = r.useState(null), p = r.useRef(), [h, v] = r.useState({
                    inView: !!s,
                    entry: void 0
                });
                p.current = c, r.useEffect((() => {
                    if (l || !m) return;
                    let r;
                    return r = u(m, ((e, t) => {
                        v({
                            inView: e,
                            entry: t
                        }), p.current && p.current(e, t), t.isIntersecting && o && r && (r(), r = void 0)
                    }), {
                        root: a,
                        rootMargin: i,
                        threshold: e,
                        trackVisibility: n,
                        delay: t
                    }, d), () => {
                        r && r()
                    }
                }), [Array.isArray(e) ? e.toString() : e, m, a, i, o, l, n, d, t]);
                const f = null == (g = h.entry) ? void 0 : g.target,
                    k = r.useRef();
                m || !f || o || l || k.current === f || (k.current = f, v({
                    inView: !!s,
                    entry: void 0
                }));
                const I = [b, h.inView, h.entry];
                return I.ref = I[0], I.inView = I[1], I.entry = I[2], I
            }
        },
        "3d054e81": (e, t, n) => {
            "use strict";

            function r() {
                return r = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, r.apply(null, arguments)
            }
            n.d(t, {
                Z: () => r
            })
        }
    }
]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/31e40d2f.e3c97683.chunk.js.map