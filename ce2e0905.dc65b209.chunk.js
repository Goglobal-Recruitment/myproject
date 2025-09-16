/*! For license information please see ce2e0905.dc65b209.chunk.js.LICENSE.txt */
(self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] = self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] || []).push([
    ["ce2e0905", "72fdb30a", "f975fe98", "463abe5f", "638ba920", "19eaf603"], {
        f3c8bee5: (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => c
            });
            var n = a("3d054e81"),
                r = a("af1e2b38"),
                E = a("5245e060"),
                i = a("ead71eb0"),
                s = a.n(i);
            const _ = e => {
                    if ("number" === typeof e) return e;
                    return e[(0, r.sv)() || E.N.MDOT]
                },
                c = e => {
                    let {
                        queenMabId: t,
                        ...a
                    } = e;
                    return s().createElement("div", (0, n.Z)({}, a, {
                        "data-qmab-component-id": _(t)
                    }))
                }
        },
        "085688b1": (e, t, a) => {
            "use strict";
            a.d(t, {
                L: () => p,
                d: () => x
            });
            var n = a("ead71eb0"),
                r = a.n(n),
                E = a("8521b397"),
                i = a.n(E),
                s = a("69cfa14e"),
                _ = a("6222292b"),
                c = a("c44dcb0c"),
                l = a("5ec5fa07"),
                d = a("204297eb");
            const o = "f8c2ff6c78",
                R = "f6087f0e63",
                u = "bb2378923a",
                A = "c3f0eaa626",
                p = e => {
                    let {
                        title: t,
                        text: a,
                        asset: n,
                        icon: E,
                        designVariant: p = d.C.DEFAULT,
                        hasTitle: m,
                        onClick: S
                    } = e;
                    const N = (0, c.useI18n)();
                    return p === d.C.COMPACT_MDOT && E ? r().createElement(_.Stack, {
                        gap: 4,
                        direction: "row",
                        wrap: "nowrap",
                        attributes: {
                            onClick: S,
                            "data-testid": l.Z.compactDesignId
                        }
                    }, r().createElement(_.Icon, {
                        svg: E,
                        size: "larger",
                        color: "action",
                        className: A
                    }), r().createElement(_.Stack.Item, {
                        grow: !0,
                        shrink: !0
                    }, r().createElement(_.Text, {
                        variant: "strong_1",
                        tagName: "h3",
                        mixin: {
                            margin: 0
                        }
                    }, N.trans(t)), r().createElement(_.Text, {
                        variant: "body_2",
                        tagName: "p",
                        mixin: {
                            margin: 0
                        }
                    }, N.trans(a)))) : p === d.C.EXPANDED_WWW && n ? r().createElement(_.Box, {
                        padding: 4,
                        className: u,
                        attributes: {
                            onClick: S,
                            "data-testid": l.Z.expandedDesignId
                        }
                    }, r().createElement(_.Image, {
                        asset: {
                            setName: "illustrations-traveller",
                            assetName: n
                        },
                        width: "64px",
                        height: "64px",
                        contentMode: "fit",
                        mixin: {
                            marginBlockEnd: 4
                        }
                    }), r().createElement(_.Text, {
                        variant: "strong_1",
                        tagName: "h3",
                        mixin: {
                            margin: 0
                        }
                    }, N.trans(t)), r().createElement(_.Text, {
                        variant: "body_2",
                        tagName: "p",
                        mixin: {
                            marginBlockStart: 2
                        }
                    }, N.trans(a))) : n ? r().createElement(_.Banner, {
                        dismissible: !1,
                        title: N.trans(t),
                        text: N.trans(a),
                        className: i()(o, m && R),
                        attributes: {
                            onClick: S,
                            "data-testid": l.Z.defaultDesignId
                        },
                        startImage: {
                            src: (0, s.hX)({
                                setName: "illustrations-traveller",
                                assetName: n
                            }),
                            alt: N.trans(t),
                            contentMode: "fit"
                        }
                    }) : null
                };
            var m = a("3d054e81"),
                S = a("9a67ad93"),
                N = a("af1e2b38"),
                f = a("dc6d28ff"),
                D = a("7ba12574"),
                O = a("2bb3685b"),
                b = a("43a4d203"),
                W = a("7fa013e2"),
                T = a("74dfe7dd");
            const C = e => () => {
                    const t = e + 1;
                    if (t > 0 && t <= 5) {
                        const {
                            isMDOT: e
                        } = (0, N.Z6)();
                        e ? (0, T.oL)(t) : (0, T.vA)(t)
                    }
                },
                g = "ae0ecebe1e",
                v = "c73ed867e7",
                x = e => {
                    let {
                        data: t
                    } = e;
                    const {
                        banners: a,
                        designVariant: E,
                        title: i,
                        disclaimer: s
                    } = t, {
                        ref: o,
                        inView: R
                    } = (0, S.YD)(O.Jv), u = (0, f.getRequestContext)(), A = (0, c.useI18n)(), {
                        isMDOT: x
                    } = (0, N.Z6)(), I = !(0, D.r)(), V = E === d.C.COMPACT_MDOT;
                    return (0, n.useEffect)((() => {
                        ((e, t) => {
                            t.getSiteType() === b.SiteType.MDOT && e && (0, T.$t)(), (0, W.$C)()
                        })(I, u)
                    }), []), (0, n.useEffect)((() => {
                        R && ((e, t) => {
                            t.getSiteType() === b.SiteType.MDOT && e && ((0, T.bO)(), "us" === t.getVisitorCountry() && (0, T.XD)()), (0, W.Bt)()
                        })(I, u)
                    }), [R]), r().createElement(r().Fragment, null, r().createElement(_.Stack, {
                        gap: {
                            s: V ? 4 : 0,
                            l: 4
                        },
                        direction: {
                            s: "column",
                            l: "row"
                        },
                        alignItems: "stretch",
                        attributes: {
                            ref: o,
                            "data-testid": l.Z.uspContainerId
                        },
                        mixin: V ? {
                            padding: 4
                        } : void 0,
                        className: V ? g : void 0
                    }, i && r().createElement(_.Title, {
                        title: A.trans(i),
                        variant: x ? "headline_3" : "headline_2",
                        className: v
                    }), a.map(((e, t) => r().createElement(p, (0, m.Z)({}, e, {
                        key: e.id,
                        hasTitle: !!i,
                        designVariant: E,
                        onClick: C(t)
                    }))))), s && r().createElement(_.Text, {
                        variant: "small_1",
                        color: "neutral_alt",
                        mixin: {
                            marginBlockStart: 3,
                            marginInlineStart: {
                                s: 4,
                                l: 0
                            },
                            marginInlineEnd: {
                                s: 4,
                                l: 0
                            }
                        }
                    }, A.trans(s)))
                }
        },
        "74dfe7dd": (e, t, a) => {
            "use strict";
            a.d(t, {
                Sv: () => _,
                Fv: () => l,
                Zm: () => E,
                vA: () => i,
                oL: () => u,
                $t: () => d,
                bO: () => o,
                XD: () => R
            });
            var n = a("28dbd132");
            const r = () => n.exp `OABBaJdeUfMSPIeKTBJFIBHAUNSTALOLOLMO`,
                E = () => 1 === (0, n.trackExperiment)(r()),
                i = e => {
                    (0, n.trackCustomGoal)(r(), e)
                };
            var s = function(e) {
                return e[e.ON_RENDER_NEW_USERS = 1] = "ON_RENDER_NEW_USERS", e[e.ON_VIEW_NEW_USERS = 2] = "ON_VIEW_NEW_USERS", e[e.ON_VIEW_NEW_US_USERS = 3] = "ON_VIEW_NEW_US_USERS", e
            }(s || {});
            let _ = function(e) {
                return e[e.COPY_CHANGE = 1] = "COPY_CHANGE", e[e.UI_CHANGE = 2] = "UI_CHANGE", e
            }({});
            const c = () => n.exp `OABBaJdeUfJaAKDbUdSUHTRLBBVYYT`,
                l = () => (0, n.trackExperiment)(c()),
                d = () => {
                    (0, n.trackExperimentStage)(c(), s.ON_RENDER_NEW_USERS)
                },
                o = () => {
                    (0, n.trackExperimentStage)(c(), s.ON_VIEW_NEW_USERS)
                },
                R = () => {
                    (0, n.trackExperimentStage)(c(), s.ON_VIEW_NEW_US_USERS)
                },
                u = e => {
                    (0, n.trackCustomGoal)(c(), e)
                }
        },
        58508755: (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => F
            });
            var n = a("ead71eb0"),
                r = a.n(n),
                E = a("8521b397"),
                i = a.n(E),
                s = a("f3c8bee5"),
                _ = a("af1e2b38"),
                c = a("085688b1"),
                l = a("74dfe7dd"),
                d = a("5ec5fa07"),
                o = a("6222292b"),
                R = a("5245e060"),
                u = a("dc6d28ff"),
                A = a("fa98a3d3"),
                p = a("c44dcb0c"),
                m = a("25fcc640"),
                S = a("7befb1a5"),
                N = a("03705a9d"),
                f = a("2524cf20");
            const D = {
                    title: (0, p.t)("webcore_nex_usp_1_pay_later_head"),
                    text: (0, p.t)("webcore_nex_usp_1_pay_later_subhead"),
                    asset: "FreeCancellation"
                },
                O = {
                    title: (0, p.t)("webcore_nex_usp_2_num_properties_head"),
                    text: (0, p.t)("webcore_nex_usp_2_num_properties_subhead"),
                    asset: "TripsGlobe"
                },
                b = {
                    title: (0, p.t)("webcore_nex_usp_3_customer_service_head"),
                    text: (0, p.t)("webcore_nex_usp_3_customer_service_subhead"),
                    asset: "CustomerSupport"
                },
                W = {
                    title: (0, p.t)("ahs_usps_reviews_title"),
                    text: (0, p.t)("ahs_usps_reviews_body"),
                    asset: "Reviews"
                },
                T = {
                    title: (0, p.t)("whs_new_usps_title_mob_only_pricing"),
                    text: (0, p.t)("whs_new_usps_body_mob_only_pricing"),
                    asset: "PromotionPercent"
                },
                C = {
                    title: (0, p.t)("webcore_nex_usp_1_pay_later_head"),
                    text: (0, p.t)("webcore_nex_usp_1_pay_later_subhead"),
                    icon: m.default
                },
                g = {
                    title: (0, p.t)("whs_new_usps_title_mob_only_pricing"),
                    text: (0, p.t)("whs_new_usps_body_mob_only_pricing"),
                    icon: S.default
                },
                v = {
                    title: (0, p.t)("webcore_nex_usp_2_num_properties_head"),
                    text: (0, p.t)("webcore_nex_usp_2_num_properties_subhead"),
                    icon: N.default
                },
                x = {
                    title: (0, p.t)("webcore_nex_usp_3_customer_service_head"),
                    text: (0, p.t)("webcore_nex_usp_3_customer_service_subhead"),
                    icon: f.default
                },
                I = {
                    title: (0, p.t)("flights_index_usp1_header"),
                    text: (0, p.t)("flights_index_usp1_copy"),
                    asset: "MagnifyingGlassUsp"
                },
                V = {
                    title: (0, p.t)("flights_index_usp3_header"),
                    text: (0, p.t)("flights_index_usp3_copy"),
                    asset: "TicketsUsp"
                };
            var B = a("204297eb");
            const M = {
                    STAYS: [{
                        banners: [D, O, b]
                    }],
                    FLIGHTS: [{
                        disclaimer: (0, p.t)("flights_index_usp3_disclaimer"),
                        banners: [I, e => "br" !== e.country ? {
                            title: (0, p.t)("flights_index_usp2_header"),
                            text: (0, p.t)("flights_index_usp2_copy"),
                            asset: "MoneyUsp"
                        } : {
                            title: (0, p.t)("flights_index_instalment_usp_header"),
                            text: (0, p.t)("flights_index_instalment_usp_copy"),
                            asset: "MoneyUsp"
                        }, V]
                    }]
                },
                H = {
                    STAYS: [{
                        siteType: R.N.WWW,
                        isActive: (0, l.Zm)(),
                        designVariant: B.C.EXPANDED_WWW,
                        title: (0, p.t)("ahs_usps_title"),
                        banners: [D, W, O, b]
                    }, {
                        siteType: R.N.MDOT,
                        isActive: (0, l.Fv)() === l.Sv.COPY_CHANGE,
                        designVariant: B.C.DEFAULT,
                        banners: [D, T, b]
                    }, {
                        siteType: R.N.MDOT,
                        isActive: (0, l.Fv)() === l.Sv.UI_CHANGE,
                        designVariant: B.C.COMPACT_MDOT,
                        banners: [C, g, v, x]
                    }]
                },
                h = () => {
                    const e = (0, u.getRequestContext)(),
                        t = e.getSiteType(),
                        a = (0, A.ZP)().currentTab,
                        {
                            isLarge: r
                        } = (0, o.useViewport)(),
                        E = (0, n.useMemo)((() => ({
                            country: e.getVisitorCountry()
                        })), [e]);
                    return (0, n.useMemo)((() => {
                        const e = e => e.find((e => e.siteType === t)) ? ? e.find((e => !e.siteType)),
                            n = e => e ? e.map(((e, t) => {
                                const n = "function" === typeof e ? e(E) : e;
                                return { ...n,
                                    id: `${a}-${n.asset??"icon"}-${t}`
                                }
                            })) : [],
                            i = M[a] ? ? M.STAYS,
                            s = (H[a] ? ? []).filter((e => e.isActive)),
                            _ = e(i),
                            c = e(s);
                        let l = null === _ || void 0 === _ ? void 0 : _.title,
                            d = null === _ || void 0 === _ ? void 0 : _.disclaimer,
                            o = n(null === _ || void 0 === _ ? void 0 : _.banners),
                            u = B.C.DEFAULT;
                        c && (l = c.title, d = c.disclaimer, o = n(c.banners), u = c.designVariant ? ? B.C.DEFAULT);
                        const A = t === R.N.WWW && !r;
                        return {
                            title: A ? void 0 : l,
                            disclaimer: d,
                            banners: o,
                            vertical: a,
                            designVariant: A ? B.C.DEFAULT : u
                        }
                    }), [t, a, E, r])
                };
            var P = a("e0c9dd7b"),
                w = a("401a4dbc"),
                y = a("52ffbfd1"),
                L = a("7ba12574"),
                U = a("e36d8828");
            const k = "b8f3ed733d",
                Z = "febf12e0ea",
                Y = "bb67b22c43",
                F = e => {
                    var t;
                    let {
                        renderWWWOutsideQmab: a = !1
                    } = e;
                    const {
                        vertical: n,
                        ...E
                    } = h(), {
                        isMDOT: o,
                        isWWW: R
                    } = (0, _.Z6)(), u = !(0, L.r)(), p = (0, l.Zm)() && u && (0, U.Tz)(), m = p && a, S = !p && !a, N = n === A.N8.FLIGHTS;
                    if (0 === (null === (t = E.banners) || void 0 === t ? void 0 : t.length)) return null;
                    const f = r().createElement(c.d, {
                        data: E
                    });
                    if (o && u) return r().createElement("div", {
                        className: i()(k, {
                            [Y]: (0, w.w)()
                        }),
                        "data-testid": d.Z.mdotWrapperId
                    }, f);
                    if (R) {
                        const e = i()({
                            [k]: !E.disclaimer,
                            [Z]: E.disclaimer,
                            [Y]: (0, P.m)() && !S || (0, y.Y$)()
                        });
                        if (m || N) return r().createElement("div", {
                            className: e,
                            "data-testid": d.Z.ddotWrapperId
                        }, f);
                        if (S) return r().createElement(s.Z, {
                            className: e,
                            queenMabId: 63,
                            "data-testid": d.Z.qmabWrapperId
                        }, f)
                    }
                    return null
                }
        },
        "5ec5fa07": (e, t, a) => {
            "use strict";
            a.d(t, {
                Z: () => n
            });
            const n = {
                mdotWrapperId: "mdot-unique-selling-points-wrapper",
                ddotWrapperId: "ddot-unique-selling-points-wrapper",
                qmabWrapperId: "qmab-unique-selling-points-wrapper",
                compactDesignId: "usp-compact-design",
                expandedDesignId: "usp-expanded-design",
                defaultDesignId: "usp-default-design",
                uspContainerId: "usp-container"
            }
        },
        "204297eb": (e, t, a) => {
            "use strict";
            a.d(t, {
                C: () => n
            });
            let n = function(e) {
                return e[e.DEFAULT = 0] = "DEFAULT", e[e.COMPACT_MDOT = 1] = "COMPACT_MDOT", e[e.EXPANDED_WWW = 2] = "EXPANDED_WWW", e
            }({})
        },
        e0c9dd7b: (e, t, a) => {
            "use strict";
            a.d(t, {
                m: () => E
            });
            var n = a("28dbd132");
            const r = n.exp `OABBaJePebeKSERLPWYNZRIIGLae`,
                E = () => !!(0, n.trackExperiment)(r)
        },
        "401a4dbc": (e, t, a) => {
            "use strict";
            a.d(t, {
                w: () => E
            });
            var n = a("28dbd132");
            const r = n.exp `OABBaJePebeKSERLPWYNHePTOdYXfCDWOOC`,
                E = () => !!(0, n.trackExperiment)(r)
        },
        "7fa013e2": (e, t, a) => {
            "use strict";
            a.d(t, {
                $7: () => b,
                $C: () => m,
                $f: () => f,
                A6: () => A,
                Bt: () => g,
                IH: () => H,
                Kq: () => v,
                M$: () => N,
                MZ: () => T,
                Pi: () => p,
                R: () => C,
                Wp: () => O,
                do: () => I,
                eT: () => B,
                gu: () => S,
                hz: () => M,
                kI: () => V,
                lP: () => W,
                yi: () => x,
                zq: () => D
            });
            var n = a("af1e2b38"),
                r = a("28dbd132");
            let E = function(e) {
                    return e[e.RENDER_WHERE_TO_NEXT = 1] = "RENDER_WHERE_TO_NEXT", e[e.RENDER_HERO = 2] = "RENDER_HERO", e[e.RENDER_SECONDARY_BANNERS = 3] = "RENDER_SECONDARY_BANNERS", e[e.RENDER_USPS = 4] = "RENDER_USPS", e[e.RENDER_RECENT_SEARCHES = 5] = "RENDER_RECENT_SEARCHES", e[e.RENDER_RVP = 6] = "RENDER_RVP", e[e.RENDER_PROMO_AREA = 7] = "RENDER_PROMO_AREA", e[e.RENDER_BELOW_SEARCH_AREA = 8] = "RENDER_BELOW_SEARCH_AREA", e[e.RENDER_QUEENMAB = 9] = "RENDER_QUEENMAB", e
                }({}),
                i = function(e) {
                    return e[e.VIEW_WHERE_TO_NEXT = 1] = "VIEW_WHERE_TO_NEXT", e[e.VIEW_HERO = 2] = "VIEW_HERO", e[e.VIEW_SECONDARY_BANNERS = 3] = "VIEW_SECONDARY_BANNERS", e[e.VIEW_USPS = 4] = "VIEW_USPS", e[e.VIEW_RECENT_SEARCHES = 5] = "VIEW_RECENT_SEARCHES", e[e.VIEW_RVP = 6] = "VIEW_RVP", e[e.VIEW_PROMO_AREA = 7] = "VIEW_PROMO_AREA", e[e.VIEW_BELOW_SEARCH_AREA = 8] = "VIEW_BELOW_SEARCH_AREA", e[e.VIEW_QUEENMAB = 9] = "VIEW_QUEENMAB", e
                }({}),
                s = function(e) {
                    return e[e.RENDER_HERO = 1] = "RENDER_HERO", e[e.RENDER_SECONDARY_BANNERS = 2] = "RENDER_SECONDARY_BANNERS", e[e.RENDER_USPS = 3] = "RENDER_USPS", e[e.RENDER_RECENT_SEARCHES = 4] = "RENDER_RECENT_SEARCHES", e[e.RENDER_RVP = 5] = "RENDER_RVP", e[e.RENDER_ABOVE_FEED_AREA = 6] = "RENDER_ABOVE_FEED_AREA", e[e.RENDER_BELOW_SEARCH_AREA = 7] = "RENDER_BELOW_SEARCH_AREA", e[e.RENDER_QUEENMAB = 8] = "RENDER_QUEENMAB", e
                }({}),
                _ = function(e) {
                    return e[e.VIEW_HERO = 1] = "VIEW_HERO", e[e.VIEW_SECONDARY_BANNERS = 2] = "VIEW_SECONDARY_BANNERS", e[e.VIEW_USPS = 3] = "VIEW_USPS", e[e.VIEW_RECENT_SEARCHES = 4] = "VIEW_RECENT_SEARCHES", e[e.VIEW_RVP = 5] = "VIEW_RVP", e[e.VIEW_ABOVE_FEED_AREA = 6] = "VIEW_ABOVE_FEED_AREA", e[e.VIEW_BELOW_SEARCH_AREA = 7] = "VIEW_BELOW_SEARCH_AREA", e[e.VIEW_QUEENMAB = 8] = "VIEW_QUEENMAB", e
                }({});
            const c = r.exp `OABBaJePefMPSXHYaYLfDfEFEKCDWOOC`,
                l = r.exp `OABBaJePefMPSXHYaYLfDfEFEKdKNKNKWe`,
                d = r.exp `OABBaJePefMPSXHYaYLfDbdUWBLHIOOIBBO`,
                o = r.exp `OABBaJePefMPSXHYaYLfDbdUWBLHIcCcCcCC`,
                R = () => (0, n.Z6)().isMDOT ? d : o,
                u = () => (0, n.Z6)().isMDOT ? c : l,
                A = () => {
                    (0, r.trackExperimentStage)(R(), (0, n.Z6)().isMDOT ? E.RENDER_HERO : s.RENDER_HERO)
                },
                p = () => {
                    (0, r.trackExperimentStage)(R(), (0, n.Z6)().isMDOT ? E.RENDER_SECONDARY_BANNERS : s.RENDER_SECONDARY_BANNERS)
                },
                m = () => {
                    (0, r.trackExperimentStage)(R(), (0, n.Z6)().isMDOT ? E.RENDER_USPS : s.RENDER_USPS)
                },
                S = () => {
                    (0, r.trackExperimentStage)(R(), (0, n.Z6)().isMDOT ? E.RENDER_RECENT_SEARCHES : s.RENDER_RECENT_SEARCHES)
                },
                N = () => {
                    (0, r.trackExperimentStage)(R(), (0, n.Z6)().isMDOT ? E.RENDER_RVP : s.RENDER_RVP)
                },
                f = () => {
                    (0, n.Z6)().isMDOT && (0, r.trackExperimentStage)(R(), E.RENDER_WHERE_TO_NEXT)
                },
                D = () => {
                    (0, n.Z6)().isMDOT && (0, r.trackExperimentStage)(R(), E.RENDER_PROMO_AREA)
                },
                O = () => {
                    (0, n.Z6)().isWWW && (0, r.trackExperimentStage)(R(), s.RENDER_QUEENMAB)
                },
                b = () => {
                    (0, n.Z6)().isWWW && (0, r.trackExperimentStage)(R(), s.RENDER_ABOVE_FEED_AREA)
                },
                W = () => {
                    (0, r.trackExperimentStage)(R(), (0, n.Z6)().isMDOT ? E.RENDER_BELOW_SEARCH_AREA : s.RENDER_BELOW_SEARCH_AREA)
                },
                T = () => {
                    (0, r.trackExperimentStage)(u(), (0, n.Z6)().isMDOT ? i.VIEW_HERO : _.VIEW_HERO)
                },
                C = () => {
                    (0, r.trackExperimentStage)(u(), (0, n.Z6)().isMDOT ? i.VIEW_SECONDARY_BANNERS : _.VIEW_SECONDARY_BANNERS)
                },
                g = () => {
                    (0, r.trackExperimentStage)(u(), (0, n.Z6)().isMDOT ? i.VIEW_USPS : _.VIEW_USPS)
                },
                v = () => {
                    (0, r.trackExperimentStage)(u(), (0, n.Z6)().isMDOT ? i.VIEW_RECENT_SEARCHES : _.VIEW_RECENT_SEARCHES)
                },
                x = () => {
                    (0, r.trackExperimentStage)(u(), (0, n.Z6)().isMDOT ? i.VIEW_RVP : _.VIEW_RVP)
                },
                I = () => {
                    (0, n.Z6)().isMDOT && (0, r.trackExperimentStage)(u(), i.VIEW_WHERE_TO_NEXT)
                },
                V = () => {
                    (0, n.Z6)().isMDOT && (0, r.trackExperimentStage)(u(), i.VIEW_PROMO_AREA)
                },
                B = () => {
                    (0, n.Z6)().isWWW && (0, r.trackExperimentStage)(u(), _.VIEW_QUEENMAB)
                },
                M = () => {
                    (0, n.Z6)().isWWW && (0, r.trackExperimentStage)(u(), _.VIEW_ABOVE_FEED_AREA)
                },
                H = () => {
                    (0, r.trackExperimentStage)(u(), (0, n.Z6)().isMDOT ? i.VIEW_BELOW_SEARCH_AREA : _.VIEW_BELOW_SEARCH_AREA)
                }
        },
        "52ffbfd1": (e, t, a) => {
            "use strict";
            a.d(t, {
                Bb: () => R,
                W$: () => s,
                XA: () => c,
                Y$: () => _,
                _0: () => o,
                zz: () => d
            });
            var n = a("af1e2b38"),
                r = a("28dbd132");
            const E = r.exp `OABBaJcBHQQWcGHVHNEIMUKVBBVYYT`,
                i = r.exp `OABBaJcBHQQWcGHVHNEIMUKALOLOLMO`,
                s = () => (0, r.trackExperiment)(E) > 0,
                _ = () => (0, r.trackExperiment)(i) > 0,
                c = () => {
                    const {
                        isMDOT: e
                    } = (0, n.Z6)();
                    return e ? s() : _()
                },
                l = () => {
                    const {
                        isMDOT: e
                    } = (0, n.Z6)();
                    return e ? E : i
                },
                d = () => {
                    (0, r.trackCustomGoal)(l(), 1)
                },
                o = () => {
                    (0, r.trackCustomGoal)(l(), 2)
                },
                R = () => {
                    if ("undefined" === typeof window || "undefined" === typeof document) return;
                    const e = "js_index_queenmab_rendered_components_count",
                        t = c();
                    setTimeout((function() {
                        t ? a() : n()
                    }), 5e3);
                    const a = () => {
                            const t = Array.from(document.querySelectorAll("[data-widgetid]")).map((e => {
                                var t;
                                return (null === e || void 0 === e || null === (t = e.textContent) || void 0 === t ? void 0 : t.trim()) || ""
                            })).filter((e => e.length > 0)).length;
                            (0, r.trackGoalWithValue)(e, t)
                        },
                        n = () => {
                            const t = Array.from(document.querySelectorAll("[data-qmab-component-id]")).map((e => {
                                var t;
                                return (null === e || void 0 === e || null === (t = e.textContent) || void 0 === t ? void 0 : t.trim()) || ""
                            })).filter((e => e.length > 0)).length;
                            (0, r.trackGoalWithValue)(e, t)
                        }
                }
        },
        "7ba12574": (e, t, a) => {
            "use strict";
            a.d(t, {
                r: () => _
            });
            var n = a("239beb17"),
                r = a("41c6c66e"),
                E = a("cedcabf9");
            const i = {},
                s = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "UserReturnType"
                        },
                        variableDefinitions: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "userReturnTypeQuery"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }],
                    loc: {
                        start: 0,
                        end: 73,
                        source: {
                            body: "\n  query UserReturnType {\n    userReturnTypeQuery {\n      type\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            const _ = () => {
                var e;
                const t = !(0, n.isFeatureRunning)(n.feature `OABBaJePefTFBaMJYIPNZFZeaPLfYCeHHQC`),
                    {
                        loading: a,
                        data: _,
                        error: c
                    } = function(e) {
                        const t = { ...i,
                            ...e
                        };
                        return E.useQuery(s, t)
                    }({
                        skip: t
                    });
                return a || _ || t || (0, r.reportWarning)("No result for new/returning user status query"), c && (0, r.reportError)(c), 2 === (null === _ || void 0 === _ || null === (e = _.userReturnTypeQuery) || void 0 === e ? void 0 : e.type)
            }
        },
        fa98a3d3: (e, t, a) => {
            "use strict";
            a.d(t, {
                N8: () => _,
                ZP: () => c
            });
            var n = a("ead71eb0"),
                r = a("d0fefcf5");
            const E = "CAPLA_EVENT_index-lp_web-mfe_LAUNCHPAD_STAYS_TAB_CLICKED",
                i = "CAPLA_EVENT_index-lp_web-mfe_LAUNCHPAD_FLIGHTS_TAB_CLICKED",
                s = "CAPLA_EVENT_index-lp_web-mfe_LAUNCHPAD_CARS_TAB_CLICKED";
            let _ = function(e) {
                return e.STAYS = "STAYS", e.FLIGHTS = "FLIGHTS", e.CARS = "CARS", e.ATTRACTIONS = "ATTRACTIONS", e.TAXI = "TAXI", e
            }({});
            const c = () => {
                const [e, t] = (0, n.useState)(_.STAYS);
                return (0, n.useEffect)((() => {
                    const e = {
                            [E]: _.STAYS,
                            [i]: _.FLIGHTS,
                            [s]: _.CARS
                        },
                        a = Object.entries(e).map((e => {
                            let [a, n] = e;
                            return r.eventBus.subscribe(a, (() => t(n)))
                        }));
                    return () => a.forEach((e => r.eventBus.unsubscribe(e)))
                }), []), {
                    currentTab: e
                }
            }
        },
        "7befb1a5": (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => r
            });
            var n = a("ead71eb0");
            const r = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, n.createElement("path", {
                    d: "M22.875 12.008a4.24 4.24 0 0 0-2.862-4.055l.427 1.044a4.35 4.35 0 0 0-.737-4.938 4.036 4.036 0 0 0-4.84-.776l1.077.458a4.091 4.091 0 0 0-7.88 0l1.077-.459a4.04 4.04 0 0 0-4.84.777 4.35 4.35 0 0 0-.737 4.938l.42-1.042a4.292 4.292 0 0 0 0 8.089l-.42-1.042a4.35 4.35 0 0 0 .736 4.938 4.04 4.04 0 0 0 4.841.778l-1.077-.46a4.091 4.091 0 0 0 7.88 0l-1.077.46a4.036 4.036 0 0 0 4.84-.778 4.35 4.35 0 0 0 .737-4.938l-.427 1.044a4.24 4.24 0 0 0 2.862-4.054zm-1.5 0a2.74 2.74 0 0 1-1.85 2.62.75.75 0 0 0-.427 1.044 2.85 2.85 0 0 1-.483 3.236 2.536 2.536 0 0 1-3.042.488.75.75 0 0 0-1.077.46 2.59 2.59 0 0 1-4.992 0 .75.75 0 0 0-1.077-.46 2.54 2.54 0 0 1-3.043-.488 2.85 2.85 0 0 1-.482-3.236.75.75 0 0 0-.42-1.042 2.792 2.792 0 0 1 0-5.261.75.75 0 0 0 .42-1.042 2.85 2.85 0 0 1 .482-3.236 2.54 2.54 0 0 1 3.043-.487.75.75 0 0 0 1.077-.46 2.59 2.59 0 0 1 4.992 0 .75.75 0 0 0 1.077.46 2.536 2.536 0 0 1 3.042.487 2.85 2.85 0 0 1 .483 3.236.75.75 0 0 0 .427 1.044 2.74 2.74 0 0 1 1.85 2.621zM9.155 16.28l7.5-7.5a.75.75 0 0 0-1.06-1.06l-7.5 7.5a.75.75 0 1 0 1.06 1.06m.97-7.28a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0m4.5 6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"
                }))
            }
        },
        "03705a9d": (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => r
            });
            var n = a("ead71eb0");
            const r = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, n.createElement("path", {
                    d: "m20.538 12.078-8.886 2.987.768.179-1.191-1.183a.75.75 0 0 0-.768-.179l-1.766.594a1.5 1.5 0 0 0-.64 2.421l2.389 2.674a2.25 2.25 0 0 0 2.4.632l2.615-.878-.982-.815-.53 3.78a1.5 1.5 0 0 0 1.962 1.631l1.362-.458c.422-.142.758-.463.92-.877l1.994-5.134-.46.439 2.488-.836a2.626 2.626 0 1 0-1.679-4.977c-.804.272-.61 1.461.24 1.461h.003v-.75l-.239-.71zm.478 1.422c.805-.27.61-1.461-.239-1.461h-.003v.75l.24.71a1.126 1.126 0 1 1 .72 2.134l-2.487.836a.75.75 0 0 0-.46.44l-1.994 5.132-1.361.458.53-3.78a.75.75 0 0 0-.98-.816l-2.618.879a.75.75 0 0 1-.802-.21l-2.389-2.675v.001l1.766-.594-.768-.179 1.192 1.183c.2.2.498.27.767.179zm-2.301-.492-2.78-1.915a1.5 1.5 0 0 0-1.328-.186l-1.34.45a1.5 1.5 0 0 0-.578 2.485l1.516 1.51a.75.75 0 0 0 1.058-1.064l-1.517-1.51-.001.001 1.34-.45 2.778 1.915a.75.75 0 1 0 .852-1.236M6.313 17.25A8.25 8.25 0 1 1 18 9.75a.75.75 0 1 0 1.5 0A9.75 9.75 0 0 0 13.812.887C8.918-1.357 3.13.793.887 5.688s-.095 10.682 4.8 12.926a.75.75 0 0 0 .625-1.364zM3.759 3.506l5.281 2a.75.75 0 0 1 .475.851L9.2 7.921a.75.75 0 0 1-.554.581l-2.079.52a.75.75 0 0 0-.515.45l-1.15 2.884a2.24 2.24 0 0 1-.84 1.036L2.22 14.654a.75.75 0 1 0 .848 1.238l1.835-1.257a3.73 3.73 0 0 0 1.394-1.723l1.15-2.884-.515.45 2.079-.52a2.25 2.25 0 0 0 1.66-1.742l.314-1.563a2.25 2.25 0 0 0-1.416-2.55l-5.278-2a.75.75 0 0 0-.532 1.403m11.571-.574-1.472 2.925a2.25 2.25 0 0 0-.124 1.719l.555 1.661a.75.75 0 0 0 1.422-.474l-.553-1.661a.75.75 0 0 1 .04-.572l1.472-2.924a.75.75 0 1 0-1.34-.674"
                }))
            }
        },
        "25fcc640": (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => r
            });
            var n = a("ead71eb0");
            const r = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, n.createElement("path", {
                    d: "M1.5 17.25a6.003 6.003 0 0 1 8.356-5.518.75.75 0 0 0 .588-1.38A7.504 7.504 0 0 0 0 17.25a.75.75 0 0 0 1.5 0m9.375-12.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0m1.5 0a4.875 4.875 0 1 0-9.75 0 4.875 4.875 0 0 0 9.75 0M18.75 13.5h-2.034a2.092 2.092 0 0 0-.78 4.033l2.064.825a.592.592 0 0 1-.22 1.142h-2.03a.75.75 0 0 0 0 1.5h2.029a2.092 2.092 0 0 0 .779-4.034l-2.064-.825A.591.591 0 0 1 16.717 15h2.033a.75.75 0 0 0 0-1.5m-.75.75v-.75a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0M18 21v-.75a.75.75 0 0 0-1.5 0V21a.75.75 0 0 0 1.5 0m4.5-3.75a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0m1.5 0a6.75 6.75 0 1 0-13.5 0 6.75 6.75 0 0 0 13.5 0"
                }))
            }
        },
        "2524cf20": (e, t, a) => {
            "use strict";
            a.r(t), a.d(t, {
                default: () => r
            });
            var n = a("ead71eb0");
            const r = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, n.createElement("path", {
                    d: "M14.44 15a.62.62 0 0 0 0-.85.58.58 0 0 0-.83 0c-.367.33-.847.506-1.34.49a1.9 1.9 0 0 1-1.34-.49.58.58 0 0 0-.83 0 .61.61 0 0 0 0 .85c.58.57 1.367.88 2.18.86a3 3 0 0 0 2.16-.86m7.17-6.49a2 2 0 0 0-.22 0l-.14-.32C19.245 3.091 13.487.583 8.388 2.588A9.92 9.92 0 0 0 2.67 8.5h-.28a2.16 2.16 0 0 0-2.16 2.17v2.82a2.16 2.16 0 0 0 4.32 0v-2.82A2.2 2.2 0 0 0 4 9.27a8.41 8.41 0 0 1 15.85-.45l.17.39a2 2 0 0 0-.59 1.46v2.82c.002.466.157.92.44 1.29a8.4 8.4 0 0 1-5.29 5.06 2.63 2.63 0 0 0-4.715 2.332 2.63 2.63 0 0 0 4.965-.822 10 10 0 0 0 6.32-5.75q.218.048.44.05a2.16 2.16 0 0 0 2.16-2.16v-2.82a2.16 2.16 0 0 0-2.14-2.16m-18.56 5a.66.66 0 0 1-1.32 0v-2.84a.66.66 0 0 1 1.32 0zm9.2 8.65a1.13 1.13 0 0 1 0-2.26 1.13 1.13 0 0 1 1.13 1.1 1.14 1.14 0 0 1-1.13 1.14zm10-8.65a.66.66 0 0 1-1.32 0v-2.84a.67.67 0 0 1 .66-.66.66.66 0 0 1 .66.66zM7.33 8.88c-.21.21-.328.494-.33.79.002.224.068.443.19.63.124.186.302.329.51.41.205.088.431.112.65.07.215-.049.412-.156.57-.31.16-.157.268-.36.31-.58.04-.218.02-.443-.06-.65a1.13 1.13 0 0 0-1.84-.36m7.88 0a1.12 1.12 0 0 0-.14 1.42 1.14 1.14 0 0 0 1.15.48 1.17 1.17 0 0 0 .58-.31c.153-.16.258-.362.3-.58.04-.222.006-.45-.1-.65a1.1 1.1 0 0 0-.41-.5 1.2 1.2 0 0 0-.59-.19c-.297 0-.581.119-.79.33"
                }))
            }
        },
        "8521b397": (e, t) => {
            var a;
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function r() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var a = arguments[t];
                        a && (e = i(e, E(a)))
                    }
                    return e
                }

                function E(e) {
                    if ("string" === typeof e || "number" === typeof e) return e;
                    if ("object" !== typeof e) return "";
                    if (Array.isArray(e)) return r.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                    var t = "";
                    for (var a in e) n.call(e, a) && e[a] && (t = i(t, a));
                    return t
                }

                function i(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (r.default = r, e.exports = r) : void 0 === (a = function() {
                    return r
                }.apply(t, [])) || (e.exports = a)
            }()
        }
    }
]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/ce2e0905.dc65b209.chunk.js.map