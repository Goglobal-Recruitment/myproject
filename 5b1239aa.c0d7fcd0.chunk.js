/*! For license information please see 5b1239aa.c0d7fcd0.chunk.js.LICENSE.txt */
(self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] = self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] || []).push([
    ["5b1239aa", "572dba2c", "1faad75c", "bf5d442e", "1d36ff76", "9b239c5b", "0be056c3", "9c8b1144", "04710df6", "c3fcdc78", "226f4dfc", "b6814541", "0f0c076a", "85d4a1a2"], {
        "77a90307": (e, t, n) => {
            "use strict";
            n.d(t, {
                C5: () => s,
                Wx: () => a,
                r8: () => r,
                sk: () => l
            });
            var i = n("dc6d28ff");
            const a = () => (0, i.getRequestContext)().getBPlatformEnvironment && "dqs" === (0, i.getRequestContext)().getBPlatformEnvironment(),
                r = () => (0, i.getRequestContext)().getBPlatformEnvironment && ("dev" === (0, i.getRequestContext)().getBPlatformEnvironment() || !(0, i.getRequestContext)().getBPlatformEnvironment());

            function s() {
                return "undefined" !== typeof window && "undefined" !== typeof window.document
            }

            function l() {
                return !s()
            }
        },
        af1e2b38: (e, t, n) => {
            "use strict";
            n.d(t, {
                NM: () => i.N,
                sv: () => r,
                Z6: () => s
            });
            var i = n("5245e060"),
                a = n("dc6d28ff");
            const r = () => (0, a.getRequestContext)().getSiteType() ? ? i.N.WWW,
                s = () => {
                    const e = r();
                    return {
                        isWWW: e === i.N.WWW,
                        isMDOT: e === i.N.MDOT,
                        isTDOT: e === i.N.TDOT
                    }
                }
        },
        c66f4a5f: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZK: () => r
            });
            n("41c6c66e");
            var i = n("77a90307");
            const a = () => (0, i.r8)() || (0, i.Wx)(),
                r = function() {
                    if (a()) {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        const a = [(0, i.sk)() ? "[Server Warning]" : "[JS Warning]", ...t];
                        console.warn.apply(undefined, a)
                    }
                }
        },
        "017725b3": (e, t, n) => {
            "use strict";
            n.d(t, {
                HeM: () => s,
                ICm: () => N,
                SCr: () => m,
                TDH: () => R,
                XIF: () => v,
                cP1: () => o,
                cbr: () => E,
                ccX: () => g,
                fFi: () => d,
                i3w: () => c,
                leS: () => i,
                nN3: () => r,
                pNy: () => a,
                smO: () => u,
                z5K: () => l,
                zrT: () => _
            });
            let i = function(e) {
                    return e.APARTHOTEL = "APARTHOTEL", e.APARTMENT = "APARTMENT", e.BED_AND_BREAKFAST = "BED_AND_BREAKFAST", e.BOAT = "BOAT", e.CAMPING = "CAMPING", e.CAPSULE_HOTEL = "CAPSULE_HOTEL", e.CHALET = "CHALET", e.CONDO = "CONDO", e.COTTAGE = "COTTAGE", e.COUNTRY_HOUSE = "COUNTRY_HOUSE", e.CRUISE = "CRUISE", e.FARM_STAY = "FARM_STAY", e.GITE = "GITE", e.GUEST_ACCOMMODATION = "GUEST_ACCOMMODATION", e.GUEST_HOUSE = "GUEST_HOUSE", e.HOLIDAY_HOME = "HOLIDAY_HOME", e.HOLIDAY_PARK = "HOLIDAY_PARK", e.HOMESTAY = "HOMESTAY", e.HOSTEL = "HOSTEL", e.HOTEL = "HOTEL", e.INN = "INN", e.JAPANESE_STYLE_BUSINESS_HOTEL = "JAPANESE_STYLE_BUSINESS_HOTEL", e.LODGE = "LODGE", e.LOVE_HOTEL = "LOVE_HOTEL", e.MOTEL = "MOTEL", e.NO_ACCOMMODATION_TYPE = "NO_ACCOMMODATION_TYPE", e.RESIDENCE = "RESIDENCE", e.RESORT = "RESORT", e.RIAD = "RIAD", e.RYOKAN = "RYOKAN", e.SANATORIUM = "SANATORIUM", e.STUDENT_ACCOMMODATION = "STUDENT_ACCOMMODATION", e.TENTED_CAMP = "TENTED_CAMP", e.UNCERTAIN = "UNCERTAIN", e.VILLA = "VILLA", e
                }({}),
                a = function(e) {
                    return e.CABINCLASS_BUSINESS = "CABINCLASS_BUSINESS", e.CABINCLASS_CLASS_TYPE_UNKNOWN = "CABINCLASS_CLASS_TYPE_UNKNOWN", e.CABINCLASS_ECONOMY = "CABINCLASS_ECONOMY", e.CABINCLASS_FIRST = "CABINCLASS_FIRST", e.CABINCLASS_PREMIUM_BUSINESS = "CABINCLASS_PREMIUM_BUSINESS", e.CABINCLASS_PREMIUM_ECONOMY = "CABINCLASS_PREMIUM_ECONOMY", e.CABINCLASS_PREMIUM_FIRST = "CABINCLASS_PREMIUM_FIRST", e.ECONOMY = "ECONOMY", e
                }({}),
                r = function(e) {
                    return e.APP_LARGE = "APP_LARGE", e.APP_LARGER = "APP_LARGER", e.APP_MEDIUM = "APP_MEDIUM", e.DESKTOP_LARGE = "DESKTOP_LARGE", e.DESKTOP_MEDIUM = "DESKTOP_MEDIUM", e.DESKTOP_SMALL = "DESKTOP_SMALL", e.MDOT_LARGE = "MDOT_LARGE", e.MDOT_MEDIUM = "MDOT_MEDIUM", e.MDOT_SMALL = "MDOT_SMALL", e
                }({}),
                s = function(e) {
                    return e.INDEPENDENCE_DAY = "INDEPENDENCE_DAY", e
                }({}),
                l = function(e) {
                    return e.AIRPORT = "AIRPORT", e.BOUNDING_BOX = "BOUNDING_BOX", e.CHAIN = "CHAIN", e.CITY = "CITY", e.COUNTRY = "COUNTRY", e.DISTRICT = "DISTRICT", e.HOTEL = "HOTEL", e.IATA = "IATA", e.LANDMARK = "LANDMARK", e.LATLONG = "LATLONG", e.NO_DEST_TYPE = "NO_DEST_TYPE", e.REGION = "REGION", e.SUB_REGION = "SUB_REGION", e.UNRECOGNIZED = "UNRECOGNIZED", e
                }({}),
                o = function(e) {
                    return e.ELIGIBLE = "ELIGIBLE", e.EXPIRED = "EXPIRED", e.INELIGIBLE = "INELIGIBLE", e.REACH_UPPER_LIMIT = "REACH_UPPER_LIMIT", e
                }({}),
                d = function(e) {
                    return e.COMPONENT = "COMPONENT", e.COMPONENT_UNIT = "COMPONENT_UNIT", e.REGION = "REGION", e
                }({}),
                c = function(e) {
                    return e.LINK = "LINK", e.PRIMARY = "PRIMARY", e.SECONDARY = "SECONDARY", e.TERTIARY = "TERTIARY", e.WHITE = "WHITE", e
                }({}),
                u = function(e) {
                    return e.BRAND_PRIMARY = "BRAND_PRIMARY", e.CONSTRUCTIVE = "CONSTRUCTIVE", e.NEUTRAL = "NEUTRAL", e
                }({}),
                m = function(e) {
                    return e.CHARGE_INFO = "CHARGE_INFO", e.FREE_CANCELLATION = "FREE_CANCELLATION", e.NO_PREPAYMENT_REQUIRED = "NO_PREPAYMENT_REQUIRED", e.PAY_AT_PROPERTY = "PAY_AT_PROPERTY", e.PAY_WITH_WALLET = "PAY_WITH_WALLET", e.TAX_CHARGE_INCLUDED = "TAX_CHARGE_INCLUDED", e
                }({}),
                E = function(e) {
                    return e.DOTS = "DOTS", e.STARS = "STARS", e.TILES = "TILES", e
                }({}),
                v = function(e) {
                    return e.EU5 = "EU5", e.GLOBAL = "GLOBAL", e.ROW = "ROW", e.US = "US", e
                }({}),
                _ = function(e) {
                    return e.Expired = "Expired", e.Running = "Running", e
                }({}),
                N = function(e) {
                    return e.ATTRACTIONS = "ATTRACTIONS", e.CARS = "CARS", e.FLIGHTS = "FLIGHTS", e.STAYS = "STAYS", e
                }({}),
                g = function(e) {
                    return e.ATTRACTIONS_SR = "ATTRACTIONS_SR", e.BOOKING_DETAIL = "BOOKING_DETAIL", e.BOOKING_PROCESS_1 = "BOOKING_PROCESS_1", e.BOOKING_PROCESS_2 = "BOOKING_PROCESS_2", e.CONFIRMATION_EMAIL = "CONFIRMATION_EMAIL", e.CONFIRMATION_PAGE = "CONFIRMATION_PAGE", e.GENIUS_LANDING_PAGE = "GENIUS_LANDING_PAGE", e.INDEX = "INDEX", e.INVITATION_EMAIL = "INVITATION_EMAIL", e.LANDING_PAGE = "LANDING_PAGE", e.PROPERTY_DISPLAY = "PROPERTY_DISPLAY", e.PROPERTY_PAGE = "PROPERTY_PAGE", e.ROOM_DETAIL = "ROOM_DETAIL", e.ROOM_LIST = "ROOM_LIST", e.SEARCH_RESULTS = "SEARCH_RESULTS", e.WALLET = "WALLET", e
                }({}),
                R = function(e) {
                    return e.BRAND_PRIMARY = "BRAND_PRIMARY", e.CONSTRUCTIVE = "CONSTRUCTIVE", e.NEUTRAL = "NEUTRAL", e
                }({})
        },
        fbd45436: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => Me
            });
            var i = n("3d054e81"),
                a = n("ead71eb0"),
                r = n.n(a),
                s = n("8521b397"),
                l = n.n(s),
                o = n("9a67ad93"),
                d = n("af1e2b38"),
                c = n("dc6d28ff"),
                u = n("28dbd132"),
                m = n("cb670354"),
                E = n("6222292b");
            const v = "webcore-recent-search-card-subtitle",
                _ = "webcore-recent-search-card-title",
                N = "webcore-recent-search-card-image",
                g = "webcore-recent-search-card",
                R = u.exp `OABBaJePeaXTeEWGPdJcPBdBLQLOLOLMO`,
                S = u.exp `OABBaJePeaXTeEWGPdJcPBdBLLBBVYYT`;
            var h = function(e) {
                return e[e.RECENT_SEARCHES = 1] = "RECENT_SEARCHES", e[e.UPCOMING_BOOKING = 2] = "UPCOMING_BOOKING", e[e.GENIUS_USER = 3] = "GENIUS_USER", e[e.LOGGED_OUT_USER = 4] = "LOGGED_OUT_USER", e[e.USER_FROM_US = 5] = "USER_FROM_US", e[e.RS_1_3 = 6] = "RS_1_3", e[e.MORE_THAN_3_RS = 7] = "MORE_THAN_3_RS", e
            }(h || {});
            const I = () => (0, d.sv)() === d.NM.MDOT ? S : R,
                x = () => (0, u.trackExperiment)(I());
            var p = n("eef1968a"),
                k = n("58ff1375"),
                A = n("814bd9d3"),
                O = n("0788da83"),
                f = n("a70d6b8e"),
                T = n("337dc83a"),
                C = n("bca4b277"),
                b = n("1c0fcf2b"),
                L = n("1424d033"),
                D = n("abe1c127"),
                M = n("73a0d57d");
            const P = {
                    City: r().createElement(k.default, null),
                    District: r().createElement(A.default, null),
                    Region: r().createElement(A.default, null),
                    Country: r().createElement(O.default, null),
                    Airport: r().createElement(f.default, null),
                    Hotel: r().createElement(T.default, null),
                    Beach: r().createElement(C.default, null),
                    Landmark: r().createElement(b.default, null),
                    LatLong: r().createElement(L.default, null),
                    Landscape: r().createElement(D.default, null),
                    Group: r().createElement(M.default, null)
                },
                w = e => {
                    let {
                        text: t,
                        icon: n,
                        biggerVariant: i = !1
                    } = e;
                    return t ? r().createElement(E.ListItem, {
                        spacing: "small",
                        icon: r().createElement(E.Icon, {
                            svg: n,
                            color: "neutral_alt",
                            size: i ? "small" : "smaller"
                        })
                    }, r().createElement(E.Text, {
                        variant: i ? "body_2" : "small_1",
                        color: "neutral_alt"
                    }, t)) : null
                };
            var y = n("4cb53b04"),
                V = n("2dfbfe1f"),
                F = n("017725b3");
            const W = "a4eccdd164",
                H = "bd3481de2d",
                B = "b4c680cde1",
                U = {
                    [F.ICm.STAYS]: T.default,
                    [F.ICm.FLIGHTS]: f.default,
                    [F.ICm.ATTRACTIONS]: y.default,
                    [F.ICm.CARS]: V.default
                },
                G = e => {
                    let {
                        image: t,
                        vertical: n,
                        onImageError: a
                    } = e;
                    const s = !!n && !(null === t || void 0 === t || !t.src);
                    return r().createElement("div", {
                        className: W
                    }, s && r().createElement("div", {
                        className: H
                    }, r().createElement(E.Icon, {
                        size: "small",
                        color: "action",
                        svg: U[n]
                    })), r().createElement(E.Image, (0, i.Z)({}, t, {
                        height: "100%",
                        width: "80px",
                        src: n === F.ICm.FLIGHTS ? "https://paste.booking.com/data/images/d/dfq2mm.png" : null === t || void 0 === t ? void 0 : t.src,
                        fallback: "icon",
                        fallbackIcon: r().createElement(E.Icon, {
                            size: "largest",
                            color: "action",
                            svg: (l = null === t || void 0 === t ? void 0 : t.imageType, l && P[l] || r().createElement(T.default, null))
                        }),
                        onError: a,
                        attributes: {
                            "data-testid": N
                        },
                        className: B
                    })));
                    var l
                };
            var Y = n("08b473e0"),
                K = n("434d016f");
            const q = "ec8ae69847",
                Z = "b5671b1774",
                z = e => {
                    let {
                        title: t,
                        dates: n,
                        groupComposition: i,
                        filters: a
                    } = e;
                    return r().createElement(r().Fragment, null, r().createElement(E.Text, {
                        variant: "strong_2",
                        attributes: {
                            "data-testid": _
                        },
                        className: q
                    }, t), r().createElement(w, {
                        text: n,
                        icon: Y.default,
                        "data-testid": v
                    }), r().createElement(w, {
                        text: i,
                        icon: K.default
                    }), r().createElement(w, {
                        text: a,
                        icon: m.default
                    }))
                };
            var X = n("a0be29fc"),
                Q = n("6d3d763b");
            const $ = e => {
                    let {
                        flightsInfo: t,
                        dates: n,
                        groupComposition: i
                    } = e;
                    if (!t) return null;
                    const a = t.origin.title,
                        s = t.origin.airports,
                        l = t.destination.title,
                        o = t.destination.airports,
                        d = !!t.isRoundTrip,
                        {
                            growLeft: c,
                            growRight: u,
                            growValue: m
                        } = (() => {
                            const e = a.length + ((null === s || void 0 === s ? void 0 : s.length) ? ? 0),
                                t = l.length + ((null === o || void 0 === o ? void 0 : o.length) ? ? 0),
                                n = Math.abs(e - t) / Math.max(e, t),
                                i = n > .5;
                            return {
                                growLeft: e > t && i,
                                growRight: t > e && i,
                                growValue: 1 + n
                            }
                        })();
                    return r().createElement(r().Fragment, null, r().createElement(E.Stack, {
                        alignItems: "end",
                        gap: 2,
                        direction: "row",
                        attributes: {
                            "data-testid": _
                        }
                    }, r().createElement("div", {
                        className: Z,
                        style: c ? {
                            flexGrow: m
                        } : void 0
                    }, s && r().createElement(E.Text, {
                        variant: "small_1",
                        color: "neutral_alt",
                        className: q
                    }, a), r().createElement(E.Text, {
                        variant: "strong_2",
                        className: q
                    }, s ? ? a)), d ? r().createElement(E.Icon, {
                        svg: X.default
                    }) : r().createElement(E.Icon, {
                        svg: Q.default
                    }), r().createElement("div", {
                        className: Z,
                        style: u ? {
                            flexGrow: m
                        } : void 0
                    }, o && r().createElement(E.Text, {
                        variant: "small_1",
                        color: "neutral_alt",
                        className: q
                    }, l), r().createElement(E.Text, {
                        variant: "strong_2",
                        className: q
                    }, o ? ? l))), r().createElement(w, {
                        text: n,
                        icon: Y.default,
                        "data-testid": v
                    }), r().createElement(w, {
                        text: i,
                        icon: K.default
                    }))
                },
                J = "f6bf771d5c",
                j = "a594ed574f",
                ee = "f8f0d4d313",
                te = "e86443303f",
                ne = "d02f7da068",
                ie = "ca7af4ad81",
                ae = "dc416eb894",
                re = "fa40c1d23f",
                se = "cf6acb910b",
                le = "f055d0b5f9",
                oe = e => {
                    let {
                        title: t,
                        subTitle: n,
                        url: s,
                        img: c,
                        id: R,
                        itemIndex: S,
                        onClickHandler: h,
                        onViewHandler: I,
                        onImageErrorHandler: k,
                        searchParams: A,
                        numFilters: O
                    } = e;
                    const {
                        isMDOT: f
                    } = (0, d.Z6)(), T = (0, u.trackExperiment)((0, p.uE)()), [C, b] = (0, o.YD)({
                        threshold: 0,
                        triggerOnce: !0
                    });
                    (0, a.useEffect)((() => {
                        b && I && I(R, S)
                    }), [b]);
                    const L = T > 0,
                        M = l()(J, [L && le]),
                        y = l()({
                            [se]: 0 === T || !!A
                        });
                    return r().createElement("div", {
                        className: f ? "" : M
                    }, r().createElement(E.Actionable, {
                        href: s,
                        ref: C,
                        onClick: () => {
                            h && h(R, S)
                        },
                        className: ne,
                        attributes: {
                            target: x() > 0 ? "_self" : "_blank",
                            "data-testid": g
                        }
                    }, r().createElement(E.Card, {
                        className: te
                    }, r().createElement(E.Stack, {
                        direction: "row",
                        gap: 4,
                        className: ae
                    }, r().createElement(E.Stack.Item, {
                        alignSelf: "center"
                    }, r().createElement(E.AspectRatio, {
                        ratio: "1:1",
                        width: "64px",
                        attributes: {
                            "data-testid": N
                        }
                    }, r().createElement(E.Image, (0, i.Z)({}, c, {
                        className: ie,
                        fallback: "icon",
                        fallbackIcon: (V = null === c || void 0 === c ? void 0 : c.imageType, V && P[V] || r().createElement(D.default, null)),
                        onError: () => {
                            k && k(R, S)
                        }
                    })))), r().createElement(E.Stack.Item, {
                        grow: !0,
                        alignSelf: "center",
                        className: re
                    }, r().createElement(E.Stack, {
                        gap: 0
                    }, r().createElement(E.Text, {
                        variant: "strong_2",
                        attributes: {
                            "data-testid": _
                        },
                        className: se
                    }, t), r().createElement(E.Text, {
                        variant: "body_2",
                        color: "neutral_alt",
                        attributes: {
                            "data-testid": v
                        },
                        className: y
                    }, n), r().createElement(w, {
                        text: O,
                        icon: m.default,
                        biggerVariant: !0
                    })))))));
                    var V
                },
                de = e => {
                    let {
                        title: t,
                        subTitle: n,
                        numFilters: i,
                        groupComposition: s,
                        flightsInfo: c,
                        vertical: u,
                        img: m,
                        url: v,
                        id: _,
                        itemIndex: N,
                        onClickHandler: R,
                        onViewHandler: S,
                        onImageErrorHandler: h
                    } = e;
                    const {
                        isWWW: I
                    } = (0, d.Z6)(), [p, k] = (0, o.YD)({
                        threshold: 0,
                        triggerOnce: !0
                    });
                    return (0, a.useEffect)((() => {
                        k && S && S(_, N)
                    }), [k]), r().createElement("div", {
                        className: l()(le, [I && J])
                    }, r().createElement(E.Actionable, {
                        href: v,
                        ref: p,
                        onClick: () => {
                            R && R(_, N)
                        },
                        className: ne,
                        attributes: {
                            target: x() > 0 ? "_self" : "_blank",
                            "data-testid": g
                        }
                    }, r().createElement(E.Card, {
                        className: j
                    }, r().createElement(E.Stack, {
                        gap: 3,
                        wrap: "nowrap",
                        direction: "row",
                        alignItems: "stretch",
                        mixin: {
                            height: "100%"
                        }
                    }, r().createElement(G, {
                        image: m,
                        vertical: u,
                        onImageError: () => {
                            h && h(_, N)
                        }
                    }), r().createElement(E.Stack, {
                        gap: 1,
                        className: ee
                    }, u === F.ICm.STAYS && r().createElement(z, {
                        title: t,
                        dates: n,
                        groupComposition: s,
                        filters: i
                    }), u === F.ICm.FLIGHTS && c && r().createElement($, {
                        flightsInfo: c,
                        dates: n,
                        groupComposition: s
                    }))))))
                };
            var ce = n("0fc8afc9"),
                ue = n("b7559b80"),
                me = n("2e53aec9"),
                Ee = n("c44dcb0c"),
                ve = n("8e166592"),
                _e = n("8ebac256");
            const Ne = e => e ? {
                trackOnCardClick: (t, n, i) => function(e, t, n, i) {
                    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    _e.Z.sendEvent({
                        action_name: "webcoreux.carousel_tile_clicked",
                        action_version: "3.0.0",
                        content: {
                            common_carousel_data: {
                                tile_id: t,
                                carousel_name: e,
                                component_id: n,
                                position: i
                            },
                            undefined: void 0
                        }
                    }, a)
                }(e.carouselName, t, e.componentId, n, i),
                trackOnCardView: (t, n) => ((e, t, n, i) => {
                    _e.Z.sendEvent({
                        action_name: "webcoreux.carousel_tile_viewed",
                        action_version: "3.0.0",
                        content: {
                            common_carousel_data: {
                                tile_id: t,
                                carousel_name: e,
                                component_id: n,
                                position: i
                            },
                            undefined: void 0
                        }
                    })
                })(e.carouselName, t, e.componentId, n),
                trackOnLastCardView: (t, n) => ((e, t, n, i) => {
                    _e.Z.sendEvent({
                        action_name: "webcoreux.carousel_last_tile_viewed",
                        action_version: "2.0.0",
                        content: {
                            common_carousel_data: {
                                tile_id: t,
                                carousel_name: e,
                                component_id: n,
                                position: i
                            },
                            undefined: void 0
                        }
                    })
                })(e.carouselName, t, e.componentId, n),
                trackOnCarouselNavigation: t => ((e, t, n) => {
                    _e.Z.sendEvent({
                        action_name: "webcoreux.carousel_arrow_clicked",
                        action_version: "2.1.0",
                        content: {
                            common_carousel_data: {
                                direction: `${t}`,
                                carousel_name: e,
                                component_id: n
                            }
                        }
                    })
                })(e.carouselName, t, e.componentId)
            } : {
                trackOnCardClick: e => null,
                trackOnCardView: e => null,
                trackOnLastCardView: e => null,
                trackOnCarouselNavigation: e => null
            };
            var ge = n("11a12aca");
            const Re = e => {
                    let {
                        isMDOT: t,
                        heading: n,
                        subHeading: i,
                        className: a
                    } = e;
                    return r().createElement(E.Title, {
                        variant: t ? "headline_3" : "headline_2",
                        title: n,
                        titleTagName: "h2",
                        subtitle: i,
                        className: a
                    })
                },
                Se = e => {
                    let {
                        className: t,
                        variant: n
                    } = e;
                    return "list" === n ? r().createElement("div", {
                        className: t,
                        "data-testid": "recent-searches-skeleton-loader-list"
                    }, r().createElement(E.Stack, {
                        gap: 4
                    }, r().createElement(E.SkeletonLoader, {
                        variant: "two-lines"
                    }), r().createElement(E.Stack, {
                        gap: 3
                    }, [1, 2, 3].map((e => r().createElement(E.Stack.Item, {
                        key: e
                    }, r().createElement(E.Stack, {
                        gap: 3
                    }, r().createElement(E.SkeletonLoader, {
                        variant: "box",
                        width: "100%",
                        aspectRatio: "6:1"
                    }), r().createElement(E.SkeletonLoader, {
                        variant: "title"
                    })))))))) : r().createElement("div", {
                        className: t,
                        "data-testid": "recent-searches-skeleton-loader-carousel"
                    }, r().createElement(E.Stack, {
                        gap: 6
                    }, r().createElement(E.SkeletonLoader, {
                        variant: "two-lines"
                    }), r().createElement(E.Stack, {
                        gap: 3,
                        direction: "row"
                    }, [1, 2, 3].map((e => r().createElement(E.Stack.Item, {
                        key: e,
                        grow: !0
                    }, r().createElement(E.Stack, {
                        gap: 3
                    }, r().createElement(E.SkeletonLoader, {
                        variant: "box",
                        width: "100%",
                        aspectRatio: "6:1"
                    }), r().createElement(E.SkeletonLoader, {
                        variant: "title"
                    }))))))))
                },
                he = "a3c56fc6bf",
                Ie = e => {
                    let {
                        isLoading: t,
                        heading: n,
                        subHeading: s,
                        items: l,
                        CardComponent: o,
                        isMDOT: d,
                        c360Tracking: c,
                        onCardView: u,
                        onCardClick: m,
                        onAfterNavigate: v,
                        nextButtonAriaLabel: _,
                        previousButtonAriaLabel: N,
                        containerClassName: g,
                        size: R
                    } = e;
                    (0, ve.dg)();
                    const {
                        onCardViewHandler: S,
                        onCardClickHandler: h,
                        onAfterNavigateHandler: I,
                        i18n: x
                    } = ((e, t, n, i, r) => {
                        const s = (0, a.useRef)(0),
                            [l] = (0, E.useRTL)(),
                            o = (0, Ee.useI18n)(),
                            {
                                trackOnCardClick: d,
                                trackOnCardView: c,
                                trackOnLastCardView: u,
                                trackOnCarouselNavigation: m
                            } = Ne(t);
                        return {
                            onCardViewHandler: (t, i) => {
                                c(t, i), null !== e && void 0 !== e && e.length && (null === e || void 0 === e ? void 0 : e.length) - 1 === i && u(t, i), n && n(t, i)
                            },
                            onCardClickHandler: (t, n) => {
                                var a;
                                const r = !(null === e || void 0 === e || !e.length || null === (a = e[n]) || void 0 === a || !a.onClickOpenInSameTab);
                                d(t, n, r), i && i(t, n)
                            },
                            onAfterNavigateHandler: e => {
                                let {
                                    index: t
                                } = e, n = t > s.current ? ge.fE.Right : ge.fE.Left;
                                l && (n = n === ge.fE.Left ? ge.fE.Right : ge.fE.Left), s.current = t, m(n), r && r(n, t)
                            },
                            i18n: o
                        }
                    })(l, c, u, m, v);
                    return t ? r().createElement(Se, {
                        className: he
                    }) : null !== l && void 0 !== l && l.length ? r().createElement("div", {
                        "data-testid": "recent-search-carousel-container",
                        className: g
                    }, r().createElement(E.Carousel, {
                        attributes: {
                            "data-testid": "recent-searches-default-carousel"
                        },
                        title: r().createElement(Re, {
                            heading: n,
                            subHeading: s,
                            isMDOT: d
                        }),
                        onAfterNavigate: I,
                        nextButtonAriaLabel: _ || x.trans((0, Ee.t)("sxp_carousel_accessibility_next")),
                        previousButtonAriaLabel: N || x.trans((0, Ee.t)("sxp_carousel_accessibility_previous")),
                        size: R
                    }, l.map(((e, t) => r().createElement(o, (0, i.Z)({}, e, {
                        onViewHandler: S,
                        onClickHandler: h,
                        itemIndex: t,
                        key: e.id
                    })))))) : null
                };
            var xe = n("7fa013e2"),
                pe = n("e36d8828");
            const ke = (e, t, n, i, a) => {
                    const r = null === n || void 0 === n ? void 0 : n[t];
                    if (!r) return;
                    r.vertical === F.ICm.FLIGHTS && (0, me.Xt)();
                    !!r.searchParams && (0, p.yY)();
                    ((e, t, n, i) => {
                        const a = I();
                        (0, u.trackExperimentStage)(a, h.RECENT_SEARCHES), i && (0, u.trackExperimentStage)(a, h.UPCOMING_BOOKING), e ? (0, u.trackExperimentStage)(a, h.GENIUS_USER) : (0, u.trackExperimentStage)(a, h.LOGGED_OUT_USER), t && (0, u.trackExperimentStage)(a, h.USER_FROM_US), n > 0 && n < 4 ? (0, u.trackExperimentStage)(a, h.RS_1_3) : n > 3 && (0, u.trackExperimentStage)(a, h.MORE_THAN_3_RS)
                    })((0, pe.jl)(), "us" === i.getVisitorCountry(), n.length, a)
                },
                Ae = e => {};
            var Oe = n("e0c9dd7b"),
                fe = n("401a4dbc"),
                Te = n("c1a8b9b7");
            const Ce = "da505d36e9",
                be = "deb3381c78",
                Le = "b08976516c",
                De = "fcb18aca5d",
                Me = () => {
                    var e;
                    const {
                        isMDOT: t,
                        isWWW: n
                    } = (0, d.Z6)(), s = (0, ce.et)(), m = "undefined" === typeof window, E = (0, c.getRequestContext)(), {
                        value: v
                    } = (0, Te.b)();
                    (0, a.useEffect)((() => {
                        (0, ue.OE)(), (0, xe.gu)(), (0, me.kd)(s.hasFlightsData)
                    }), [s.hasFlightsData]), ((e, t) => {
                        e && (null === t || void 0 === t ? void 0 : t.length) && (0, u.trackGoalWithValue)("wcu_recent_searches_number_of_items_returned", null === t || void 0 === t ? void 0 : t.length)
                    })(m, s.items);
                    const _ = (0, u.trackExperiment)((0, p.uE)()) > 0,
                        N = (0, me.bZ)();
                    return null !== s && void 0 !== s && null !== (e = s.items) && void 0 !== e && e.length ? r().createElement(o.df, {
                        triggerOnce: !0,
                        onChange: e => e && ((e, t) => {
                            const n = (0, pe.jl)(),
                                i = (0, d.sv)(),
                                a = "us" === e.getVisitorCountry();
                            null !== t && void 0 !== t && t.length && ((0, p.$_)(n, a, t.length), (0, ue.DZ)(n, t.length, i)), (0, xe.Kq)()
                        })(E, s.items)
                    }, r().createElement("div", {
                        onClick: () => (e => {
                            const t = e ? "mdot_index_recent_searches_click" : "www_index_recent_searches_click";
                            (0, u.trackGoal)(t)
                        })(t),
                        role: "none"
                    }, r().createElement(Ie, (0, i.Z)({}, s, {
                        items: null === s || void 0 === s ? void 0 : s.items,
                        onCardClick: (e, t) => {
                            ke(0, t, s.items, E, v)
                        },
                        onAfterNavigate: Ae,
                        CardComponent: N ? de : oe,
                        isMDOT: t,
                        containerClassName: l()({
                            [be]: t,
                            [Le]: t && (0, fe.w)(),
                            [Ce]: n && !(0, Oe.m)(),
                            [De]: n && _
                        }),
                        c360Tracking: {
                            carouselName: s.carouselName,
                            componentId: s.componentId
                        }
                    })))) : null
                }
        },
        "0fc8afc9": (e, t, n) => {
            "use strict";
            n.d(t, {
                et: () => G
            });
            var i = n("43a4d203"),
                a = n("dc6d28ff"),
                r = n("239beb17"),
                s = n("41c6c66e"),
                l = n("017725b3");
            l.pNy.ECONOMY;
            var o = n("d1e54a96");
            const d = () => {
                    const e = "prod" === (0, a.getRequestContext)().getBPlatformEnvironment();
                    return {
                        flightsHostname: e ? "flights.booking.com" : "flights.dqs.booking.com",
                        flightsSearchAutocompleteBaseUrl: e ? "https://flights.booking.com" : "https://flights.dqs.booking.com"
                    }
                },
                c = "ViewFlight",
                u = "Anywhere",
                m = (e, t, n, i, r, l) => {
                    let m;
                    const E = (0, a.getRequestContext)(),
                        v = E.getAffiliate();
                    null !== v && void 0 !== v && v.id || ((0, s.reportWarning)("Flights LP: adding default aid as there was no aid present"), i.set("aid", "304142"));
                    const _ = n.includes("COUNTRY"),
                        N = n.includes(u);
                    if (N && (i.set("to", u), i.set("toCountryCode", u)), _) {
                        const e = n.split(".")[0];
                        i.set("toCountryCode", e), i.set("to", n)
                    }
                    return N || _ ? (l && i.set("ca_source", l), m = (0, o.constructUrl)({
                        pathname: "fly-anywhere/",
                        searchParams: i
                    })) : m = e === c ? (0, o.constructUrl)({
                        pathname: `flights/${t}-${n}/${r}/`,
                        searchParams: i
                    }) : (0, o.constructUrl)({
                        pathname: `flights/${t}-${n}/`,
                        searchParams: i
                    }), E.isRobotRequest() && function(e, t) {
                        const n = new Set;
                        null === t || void 0 === t || t.forEach((function(t, i) {
                            n.has(i) ? e.append(i, t) : (e.set(i, t), n.add(i))
                        }))
                    }(m.searchParams, i), m.host = d().flightsHostname, m.port = "", m.toString()
                };
            var E = n("28dbd132"),
                v = n("dd6086f7"),
                _ = n("2db41414"),
                N = n("b7559b80"),
                g = n("2e53aec9"),
                R = n("eef1968a"),
                S = n("11a12aca");
            const h = "https://paste.booking.com/data/images/g/gvgokh.gif",
                I = (e, t) => e.cards.flatMap((e => x(e, t))).filter((e => w(e))),
                x = (e, t) => {
                    var n, i;
                    const a = e.searchHistoryItem;
                    if (!a) return [];
                    const r = L(a),
                        s = b(a),
                        o = (null === (n = a.destinations) || void 0 === n || null === (n = n[0]) || void 0 === n ? void 0 : n.type) ? ? l.z5K.CITY,
                        {
                            subTitle: d,
                            groupOccupancy: c
                        } = A(e.uxLabels || []);
                    return [{
                        id: a.originalId,
                        vertical: a.vertical,
                        title: r,
                        subTitle: d,
                        groupComposition: c,
                        createdAt: a.createdAt,
                        flightsInfo: s,
                        searchParams: a.searchParams ? ? "",
                        img: {
                            src: t({
                                destType: o,
                                imageUrl: null === a || void 0 === a || null === (i = a.mainImage) || void 0 === i ? void 0 : i.genericUrl
                            })
                        },
                        countryCode: (null === a || void 0 === a ? void 0 : a.countryCode) ? ? "",
                        aspectRatio: S.Lz["1:1"],
                        url: p(a, s)
                    }]
                },
                p = (e, t) => e.vertical === l.ICm.FLIGHTS ? M(e, t) : P(e),
                k = e => {
                    var t;
                    return (null === e || void 0 === e || null === (t = e[0]) || void 0 === t || null === (t = t.uxLabels) || void 0 === t || null === (t = t.find((e => "title" === (null === e || void 0 === e ? void 0 : e.name)))) || void 0 === t ? void 0 : t.value) ? ? ""
                },
                A = e => {
                    var t;
                    if ((0, g.bZ)()) {
                        var n, i;
                        return {
                            subTitle: (null === e || void 0 === e || null === (n = e.find((e => "subtitle_dates" === (null === e || void 0 === e ? void 0 : e.name)))) || void 0 === n ? void 0 : n.value) ? ? "",
                            groupOccupancy: (null === e || void 0 === e || null === (i = e.find((e => "subtitle_occupancy" === (null === e || void 0 === e ? void 0 : e.name)))) || void 0 === i ? void 0 : i.value) ? ? ""
                        }
                    }
                    return {
                        subTitle: (null === e || void 0 === e || null === (t = e.find((e => "subtitle" === (null === e || void 0 === e ? void 0 : e.name)))) || void 0 === t ? void 0 : t.value) ? ? "",
                        groupOccupancy: ""
                    }
                },
                O = e => {
                    var t, n;
                    const i = (0, g.bZ)(),
                        a = (null === e || void 0 === e || null === (t = e.recommendationPlatform) || void 0 === t || null === (t = t.flightsRecommendations) || void 0 === t ? void 0 : t.recommendations) || [],
                        r = (null === e || void 0 === e || null === (n = e.recommendationPlatform) || void 0 === n || null === (n = n.staysRecommendations) || void 0 === n ? void 0 : n.recommendations) || [],
                        s = D(r),
                        l = a.length > 0;
                    return i && l ? {
                        recentSearches: [...r, ...a],
                        lastSearch: s,
                        hasFlightsData: l
                    } : {
                        recentSearches: r,
                        lastSearch: s,
                        hasFlightsData: l
                    }
                },
                f = () => {
                    const e = (0, a.getRequestContext)().getCDNOrigin(),
                        t = (0, g.bZ)() ? "256x256" : "64x64";
                    return n => {
                        const i = (n ? (0, _.Z)(n, t, e) : h) ? ? h;
                        return i === h && (0, N.qe)(), i
                    }
                },
                T = () => {
                    const e = f();
                    return t => (null === t || void 0 === t ? void 0 : t.destType) === l.z5K.AIRPORT ? "https://paste.booking.com/data/images/e/e7uinl.jpg" : e(null === t || void 0 === t ? void 0 : t.imageUrl)
                },
                C = () => {
                    var e;
                    const t = (0, a.getRequestContext)(),
                        n = t.getSiteType() === i.SiteType.MDOT,
                        r = "tablet" === (null === (e = t.getUserAgent()) || void 0 === e ? void 0 : e.deviceType);
                    return n && !r ? S.B.MEDIUM : S.B.LARGE
                },
                b = e => {
                    var t, n;
                    if (e.vertical !== l.ICm.FLIGHTS) return;
                    const i = null === e || void 0 === e || null === (t = e.origins) || void 0 === t ? void 0 : t[0],
                        a = null === e || void 0 === e || null === (n = e.destinations) || void 0 === n ? void 0 : n[0];
                    return i && a && null !== i && void 0 !== i && i.id && null !== a && void 0 !== a && a.id && null !== i && void 0 !== i && i.name && null !== a && void 0 !== a && a.name ? {
                        isRoundTrip: "ROUNDTRIP" === (null === e || void 0 === e ? void 0 : e.type),
                        origin: {
                            title: null === i || void 0 === i ? void 0 : i.name,
                            airports: null === i || void 0 === i ? void 0 : i.id,
                            type: l.z5K.AIRPORT
                        },
                        destination: {
                            title: null === a || void 0 === a ? void 0 : a.name,
                            airports: null === a || void 0 === a ? void 0 : a.id,
                            type: l.z5K.AIRPORT
                        }
                    } : void 0
                },
                L = e => {
                    var t;
                    return e.vertical !== l.ICm.STAYS ? "" : (null === (t = e.destinations) || void 0 === t || null === (t = t[0]) || void 0 === t ? void 0 : t.name) ? ? ""
                },
                D = e => {
                    var t, n, i, a, r, s, l;
                    if (!e || 0 === e.length) return;
                    const o = e[0].cards;
                    if (!o || 0 === o.length) return;
                    const d = o[0].searchHistoryItem;
                    return d ? {
                        checkin: null === d || void 0 === d || null === (t = d.bookingWindow) || void 0 === t ? void 0 : t.checkinDate,
                        checkout: null === d || void 0 === d || null === (n = d.bookingWindow) || void 0 === n ? void 0 : n.checkoutDate,
                        nbAdults: null === d || void 0 === d || null === (i = d.guests) || void 0 === i ? void 0 : i.adults,
                        nbChildren: (null === d || void 0 === d || null === (a = d.guests) || void 0 === a || null === (a = a.children) || void 0 === a ? void 0 : a.length) ? ? 0,
                        nbRooms: null === d || void 0 === d || null === (r = d.rooms) || void 0 === r ? void 0 : r.total,
                        childrenAges: null === d || void 0 === d || null === (s = d.guests) || void 0 === s ? void 0 : s.children,
                        destType: null === d || void 0 === d || null === (l = d.destinations) || void 0 === l || null === (l = l[0]) || void 0 === l ? void 0 : l.type,
                        createdAt: null === d || void 0 === d ? void 0 : d.createdAt
                    } : void 0
                },
                M = (e, t) => {
                    var n;
                    if (!t) return "";
                    const i = new URLSearchParams;
                    null === (n = e.searchParams) || void 0 === n || n.split("&").forEach((e => {
                        const [t, n] = e.split("=");
                        i.set(t, n)
                    })), i.set("locale", (0, a.getRequestContext)().getLanguage()), i.set("sort", "BEST"), i.set("showLoader", "1"), i.set("cabinClass", "ECONOMY");
                    const r = t.origin.airports.replace(/,/g, "_"),
                        s = t.destination.airports.replace(/,/g, "_");
                    return m("SearchResults", `${r}.${t.origin.type}`, `${s}.${t.destination.type}`, i, void 0, void 0)
                },
                P = e => {
                    var t, n, i, a, r, s, l, o, d, c;
                    const u = (null === (t = e.guests) || void 0 === t || null === (t = t.children) || void 0 === t ? void 0 : t.filter((e => "number" === typeof e))) || [];
                    return (0, v.d)({
                        checkin: null === (n = e.bookingWindow) || void 0 === n ? void 0 : n.checkinDate,
                        checkout: null === (i = e.bookingWindow) || void 0 === i ? void 0 : i.checkoutDate,
                        nbAdults: null === (a = e.guests) || void 0 === a ? void 0 : a.adults,
                        nbChildren: null === (r = e.guests) || void 0 === r || null === (r = r.children) || void 0 === r ? void 0 : r.length,
                        nbRooms: null === (s = e.rooms) || void 0 === s ? void 0 : s.total,
                        childrenAges: u,
                        destId: null !== (l = e.destinations) && void 0 !== l && null !== (l = l[0]) && void 0 !== l && l.id ? parseInt(null === (o = e.destinations) || void 0 === o || null === (o = o[0]) || void 0 === o ? void 0 : o.id, 10) : void 0,
                        destType: null === (d = e.destinations) || void 0 === d || null === (d = d[0]) || void 0 === d ? void 0 : d.type,
                        highlightedPropertyId: null !== (c = e.highlightedProducts) && void 0 !== c && c[0] ? parseInt(e.highlightedProducts[0]) : void 0,
                        sorter: e.order ? ? "popularity",
                        selectedFilters: void 0
                    }).toString()
                },
                w = e => !!e.subTitle && (!(e.vertical === l.ICm.STAYS && !e.title) && !(e.vertical === l.ICm.FLIGHTS && (!e.flightsInfo || !e.groupComposition))),
                y = e => e.sort(((e, t) => e.createdAt && t.createdAt ? t.createdAt - e.createdAt : 0));
            var V = n("cedcabf9");
            const F = {},
                W = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "RecentSearchesCarousel"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "staysRecommendationInput"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "RecommendationElementCardsInput"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "flightsRecommendationInput"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "RecommendationElementCardsInput"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "includeRecommendations"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Boolean"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "includeFlights"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "Boolean"
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
                                    value: "recommendationPlatform"
                                },
                                arguments: [],
                                directives: [{
                                    kind: "Directive",
                                    name: {
                                        kind: "Name",
                                        value: "include"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "if"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "includeRecommendations"
                                            }
                                        }
                                    }]
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: {
                                            kind: "Name",
                                            value: "staysRecommendations"
                                        },
                                        name: {
                                            kind: "Name",
                                            value: "recommendationElementCards"
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
                                                    value: "staysRecommendationInput"
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
                                                    value: "recommendations"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "uxLabels"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "value"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "cards"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "searchHistoryItem"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "originalId"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "vertical"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "destinations"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "id"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "name"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "type"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "countryCode"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "countryName"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "highlightedProducts"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "searchParams"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "order"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "bookingWindow"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "checkinDate"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "checkoutDate"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "guests"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "adults"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "children"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "mainImage"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "genericUrl"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "id"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "rooms"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "total"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "createdAt"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "uxLabels"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "name"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "value"
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
                                    }, {
                                        kind: "Field",
                                        alias: {
                                            kind: "Name",
                                            value: "flightsRecommendations"
                                        },
                                        name: {
                                            kind: "Name",
                                            value: "recommendationElementCards"
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
                                                    value: "flightsRecommendationInput"
                                                }
                                            }
                                        }],
                                        directives: [{
                                            kind: "Directive",
                                            name: {
                                                kind: "Name",
                                                value: "include"
                                            },
                                            arguments: [{
                                                kind: "Argument",
                                                name: {
                                                    kind: "Name",
                                                    value: "if"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "includeFlights"
                                                    }
                                                }
                                            }]
                                        }],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "recommendations"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "uxLabels"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "value"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "cards"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "searchHistoryItem"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "originalId"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "vertical"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "createdAt"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "type"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "origins"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "id"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "name"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "type"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "destinations"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "id"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "name"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "type"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "bookingWindow"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "checkinDate"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "checkoutDate"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "guests"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "adults"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "children"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "searchParams"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "uxLabels"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "name"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "value"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "recentSearches"
                                },
                                arguments: [],
                                directives: [{
                                    kind: "Directive",
                                    name: {
                                        kind: "Name",
                                        value: "skip"
                                    },
                                    arguments: [{
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "if"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "includeRecommendations"
                                            }
                                        }
                                    }]
                                }],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "campaignId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "carouselName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
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
                                            value: "searches"
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
                                                    value: "subtitle"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "subtitle2"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "numFilters"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "destType"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "destId"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "countryCode"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "nbRooms"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "checkin"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "checkout"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "nbAdults"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "nbChildren"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "childrenAges"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "imageUrl"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "highlightedHotel"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "order"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "nflt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "previousSearchId"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "filters"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "value"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "createdAt"
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
                        end: 2786,
                        source: {
                            body: "\n  query RecentSearchesCarousel(\n    $staysRecommendationInput: RecommendationElementCardsInput!\n    $flightsRecommendationInput: RecommendationElementCardsInput!\n    $includeRecommendations: Boolean!\n    $includeFlights: Boolean!\n  ) {\n    recommendationPlatform @include(if: $includeRecommendations) {\n      staysRecommendations: recommendationElementCards(\n        input: $staysRecommendationInput\n      ) {\n        recommendations {\n          uxLabels {\n            name\n            value\n          }\n          cards {\n            searchHistoryItem {\n              originalId\n              vertical\n              destinations {\n                id\n                name\n                type\n              }\n              countryCode\n              countryName\n              highlightedProducts\n              searchParams\n              order\n              bookingWindow {\n                checkinDate\n                checkoutDate\n              }\n              guests {\n                adults\n                children\n              }\n              mainImage {\n                genericUrl\n                id\n              }\n              rooms {\n                total\n              }\n              createdAt\n            }\n            uxLabels {\n              name\n              value\n            }\n          }\n        }\n      }\n      flightsRecommendations: recommendationElementCards(\n        input: $flightsRecommendationInput\n      ) @include(if: $includeFlights) {\n        recommendations {\n          uxLabels {\n            name\n            value\n          }\n          cards {\n            searchHistoryItem {\n              originalId\n              vertical\n              createdAt\n              type\n              origins {\n                id\n                name\n                type\n              }\n              destinations {\n                id\n                name\n                type\n              }\n              bookingWindow {\n                checkinDate\n                checkoutDate\n              }\n              guests {\n                adults\n                children\n              }\n              searchParams\n            }\n            uxLabels {\n              name\n              value\n            }\n          }\n        }\n      }\n    }\n    recentSearches @skip(if: $includeRecommendations) {\n      campaignId\n      carouselName\n      title\n      searches {\n        title\n        subtitle\n        subtitle2\n        numFilters\n        destType\n        destId\n        countryCode\n        nbRooms\n        checkin\n        checkout\n        nbAdults\n        nbChildren\n        childrenAges\n        imageUrl\n        highlightedHotel\n        order\n        nflt\n        previousSearchId\n        filters {\n          name\n          value\n        }\n        createdAt\n      }\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            var H = n("e36d8828");
            const B = {
                    source: "index",
                    medium: "web",
                    campaign: "recent_searches_carousel"
                },
                U = function() {
                    const e = !!(!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (0, N.Hg)(),
                        t = (0, r.isFeatureRunning)(r.feature `OABBaJePefWJaWQOcPIQDNYRMeRT`),
                        n = (0, a.getRequestContext)().getSiteType() === i.SiteType.MDOT;
                    return {
                        staysRecommendationInput: {
                            useCase: n ? "mvsf_mdot_stays_recent_searches" : "mvsf_www_stays_recent_searches",
                            strategyIds: ["901"],
                            tracking: B,
                            pagination: {
                                limit: 10
                            }
                        },
                        flightsRecommendationInput: {
                            useCase: n ? "mvsf_mdot_flights_recent_searches" : "mvsf_www_flights_recent_searches",
                            strategyIds: ["902"],
                            tracking: B,
                            pagination: {
                                limit: 10
                            }
                        },
                        includeRecommendations: e,
                        includeFlights: t
                    }
                },
                G = () => {
                    const e = Y(),
                        {
                            loading: t,
                            data: n,
                            error: r
                        } = function(e) {
                            const t = { ...F,
                                ...e
                            };
                            return V.useQuery(W, t)
                        }({
                            variables: U(),
                            skip: e,
                            fetchPolicy: "cache-first",
                            errorPolicy: "all"
                        });
                    return t || n || e || (0, s.reportWarning)("No result for recent searches data query"), r && (0, s.reportError)(r), (0, N.Hg)() ? (e => {
                        let {
                            carouselDML: t,
                            isLoading: n
                        } = e;
                        const r = (0, a.getRequestContext)().getSiteType() === i.SiteType.MDOT,
                            {
                                recentSearches: s,
                                lastSearch: l,
                                hasFlightsData: o
                            } = O(t),
                            d = k(s),
                            c = T(),
                            u = s.flatMap((e => I(e, c)));
                        return {
                            isLoading: n,
                            items: o ? y(u) : u,
                            heading: d,
                            size: C(),
                            isMdot: r,
                            componentId: "4d22cffe-4332-4c0e-ba0e-656240f7ebd8",
                            carouselName: "recent_searches_carousel",
                            hasFlightsData: o,
                            lastSearch: l
                        }
                    })({
                        carouselDML: n,
                        isLoading: t
                    }) : (e => {
                        let {
                            carouselDML: t,
                            isLoading: n
                        } = e;
                        const r = (0, a.getRequestContext)().getSiteType() === i.SiteType.MDOT,
                            s = T(),
                            o = null === t || void 0 === t ? void 0 : t.recentSearches,
                            d = null === o || void 0 === o ? void 0 : o.searches,
                            c = null === o || void 0 === o ? void 0 : o.title,
                            u = [],
                            m = (0, E.trackExperiment)((0, R.uE)());
                        return null === d || void 0 === d || d.forEach((e => {
                            u.push({
                                id: String(e.previousSearchId),
                                title: e.title,
                                subTitle: e.subtitle,
                                vertical: l.ICm.STAYS,
                                createdAt: e.createdAt,
                                groupComposition: e.subtitle2 || "",
                                numFilters: e.numFilters ? ? "",
                                searchParams: m > 0 && e.nflt || void 0,
                                img: {
                                    src: s(e)
                                },
                                countryCode: e.countryCode || "",
                                aspectRatio: S.Lz["1:1"],
                                url: (0, v.d)({
                                    checkin: e.checkin,
                                    checkout: e.checkout,
                                    nbAdults: e.nbAdults,
                                    nbChildren: e.nbChildren,
                                    nbRooms: e.nbRooms,
                                    childrenAges: e.childrenAges,
                                    destId: e.destId,
                                    destType: e.destType,
                                    highlightedPropertyId: e.highlightedHotel,
                                    sorter: e.order,
                                    selectedFilters: m > 0 ? e.nflt : void 0,
                                    previousSearchId: e.previousSearchId
                                }).toString()
                            })
                        })), {
                            isLoading: n,
                            items: u.length ? u : void 0,
                            heading: c || "",
                            size: C(),
                            isMdot: r,
                            componentId: (null === o || void 0 === o ? void 0 : o.campaignId) || "",
                            carouselName: (null === o || void 0 === o ? void 0 : o.carouselName) || "",
                            lastSearch: d && (null === d || void 0 === d ? void 0 : d.length) > 0 ? d[0] : void 0
                        }
                    })({
                        carouselDML: n,
                        isLoading: t
                    })
                },
                Y = () => !(!(0, N.Hg)() || (0, H.CR)())
        },
        b7559b80: (e, t, n) => {
            "use strict";
            n.d(t, {
                DZ: () => c,
                Hg: () => o,
                OE: () => d,
                qe: () => m
            });
            var i = n("af1e2b38"),
                a = n("28dbd132");
            let r = function(e) {
                    return e[e.ON_RENDER = 1] = "ON_RENDER", e[e.ON_VIEW = 2] = "ON_VIEW", e[e.ON_VIEW_WWW = 3] = "ON_VIEW_WWW", e[e.ON_VIEW_MDOT = 4] = "ON_VIEW_MDOT", e[e.ON_VIEW_ANON = 5] = "ON_VIEW_ANON", e[e.ON_VIEW_GENIUS = 6] = "ON_VIEW_GENIUS", e[e.ON_VIEW_RS_1_3 = 7] = "ON_VIEW_RS_1_3", e[e.ON_VIEW_RS_4_PLUS = 8] = "ON_VIEW_RS_4_PLUS", e
                }({}),
                s = function(e) {
                    return e[e.ONE_RS = 1] = "ONE_RS", e[e.TWO_RS = 2] = "TWO_RS", e[e.THREE_RS = 3] = "THREE_RS", e[e.FOUR_PLUS_RS = 4] = "FOUR_PLUS_RS", e[e.MISSING_IMAGE = 5] = "MISSING_IMAGE", e
                }({});
            const l = () => a.exp `OABBaJXCeZVGFTSJXZUKe`,
                o = () => 1 === (0, a.trackExperiment)(l()),
                d = () => {
                    const e = l();
                    (0, a.trackExperimentStage)(e, r.ON_RENDER)
                },
                c = (e, t, n) => {
                    const s = l();
                    (0, a.trackExperimentStage)(s, r.ON_VIEW), u(t), n === i.NM.MDOT ? (0, a.trackExperimentStage)(s, r.ON_VIEW_MDOT) : (0, a.trackExperimentStage)(s, r.ON_VIEW_WWW), t > 0 && t < 4 && (0, a.trackExperimentStage)(s, r.ON_VIEW_RS_1_3), t >= 4 && (0, a.trackExperimentStage)(s, r.ON_VIEW_RS_4_PLUS), e ? (0, a.trackExperimentStage)(s, r.ON_VIEW_GENIUS) : (0, a.trackExperimentStage)(s, r.ON_VIEW_ANON)
                },
                u = e => {
                    const t = l();
                    1 === e ? (0, a.trackCustomGoal)(t, s.ONE_RS) : 2 === e ? (0, a.trackCustomGoal)(t, s.TWO_RS) : 3 === e ? (0, a.trackCustomGoal)(t, s.THREE_RS) : e > 3 && (0, a.trackCustomGoal)(t, s.FOUR_PLUS_RS)
                },
                m = () => {
                    const e = l();
                    (0, a.trackCustomGoal)(e, s.MISSING_IMAGE)
                }
        },
        "2e53aec9": (e, t, n) => {
            "use strict";
            n.d(t, {
                Xt: () => u,
                bZ: () => d,
                kd: () => c
            });
            var i = n("af1e2b38"),
                a = n("dc6d28ff"),
                r = n("28dbd132");
            let s = function(e) {
                    return e[e.RS_ONRENDER = 1] = "RS_ONRENDER", e[e.RS_ONRENDER_WITH_FLIGHTS = 2] = "RS_ONRENDER_WITH_FLIGHTS", e[e.RS_ONVIEW = 3] = "RS_ONVIEW", e
                }({}),
                l = function(e) {
                    return e[e.FLIGHT_CARD_CLICK = 1] = "FLIGHT_CARD_CLICK", e
                }({});
            const o = e => e === i.NM.MDOT ? r.exp `OABBaJePeaXTeEWGHWYWCGTLBBVYYT` : r.exp `OABBaJePeaXTeEWGHWYWCGTQLOLOLMO`,
                d = () => (e => (0, r.trackExperiment)(o(e)))((0, a.getRequestContext)().getSiteType() || i.NM.WWW) >= 1,
                c = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    const t = (0, a.getRequestContext)().getSiteType() || i.NM.WWW,
                        n = o(t);
                    (0, r.trackExperimentStage)(n, s.RS_ONRENDER), e && (0, r.trackExperimentStage)(n, s.RS_ONRENDER_WITH_FLIGHTS)
                },
                u = () => {
                    const e = (0, a.getRequestContext)().getSiteType() || i.NM.WWW,
                        t = o(e);
                    (0, r.trackCustomGoal)(t, l.FLIGHT_CARD_CLICK)
                }
        },
        eef1968a: (e, t, n) => {
            "use strict";
            n.d(t, {
                $_: () => c,
                uE: () => d,
                yY: () => u
            });
            var i = n("af1e2b38"),
                a = n("28dbd132");
            let r = function(e) {
                    return e[e.ON_VIEW = 1] = "ON_VIEW", e[e.ON_VIEW_ANON = 2] = "ON_VIEW_ANON", e[e.ON_VIEW_GENIUS = 3] = "ON_VIEW_GENIUS", e[e.ON_VIEW_RS_1_3 = 4] = "ON_VIEW_RS_1_3", e[e.ON_VIEW_RS_4_PLUS = 5] = "ON_VIEW_RS_4_PLUS", e[e.ON_VIEW_US_VISITOR = 6] = "ON_VIEW_US_VISITOR", e
                }({}),
                s = function(e) {
                    return e[e.ON_CLICK_WITH_FILTER = 1] = "ON_CLICK_WITH_FILTER", e
                }({});
            const l = a.exp `cCHObKdPHMXCeZVWQIORe`,
                o = a.exp `cCHObKdPHMXCeZVWQIOLBBVYYT`,
                d = () => (0, i.sv)() === i.NM.MDOT ? o : l,
                c = ((0, a.trackExperiment)(d()), (e, t, n) => {
                    const i = d();
                    (0, a.trackExperimentStage)(i, r.ON_VIEW), n > 0 && n < 4 && (0, a.trackExperimentStage)(i, r.ON_VIEW_RS_1_3), n >= 4 && (0, a.trackExperimentStage)(i, r.ON_VIEW_RS_4_PLUS), t && (0, a.trackExperimentStage)(i, r.ON_VIEW_US_VISITOR), e ? (0, a.trackExperimentStage)(i, r.ON_VIEW_GENIUS) : (0, a.trackExperimentStage)(i, r.ON_VIEW_ANON)
                }),
                u = () => {
                    const e = d();
                    (0, a.trackCustomGoal)(e, s.ON_CLICK_WITH_FILTER)
                }
        },
        "11a12aca": (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => a,
                Lz: () => i,
                fE: () => r
            });
            let i = function(e) {
                    return e["5:4"] = "5:4", e["1:1"] = "1:1", e["3:4"] = "3:4", e["3:2"] = "3:2", e["2:3"] = "2:3", e["4:3"] = "4:3", e["2:1"] = "2:1", e["16:9"] = "16:9", e["21:9"] = "21:9", e["4:5"] = "4:5", e["9:16"] = "9:16", e
                }({}),
                a = function(e) {
                    return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e.LARGER = "larger", e.LARGEST = "largest", e
                }({}),
                r = function(e) {
                    return e.Left = "left", e.Right = "right", e
                }({})
        },
        a751efe9: (e, t, n) => {
            "use strict";
            n.d(t, {
                q: () => _
            });
            var i = n("ead71eb0"),
                a = n.n(i),
                r = n("5245e060"),
                s = n("dc6d28ff"),
                l = n.n(s),
                o = n("d16e9636"),
                d = n.n(o),
                c = n("9629c9e4"),
                u = n("0b7caa8b"),
                m = n("fbd45436");
            const E = (0, o.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bIndexLpWebMfe-RecentlyViewedCarousel-RecentlyViewedCarouselDesktop"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e("598830f4").then(n.bind(n, "1c99d994")),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "1c99d994"
                    }
                }),
                v = (0, o.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bIndexLpWebMfe-RecentlyViewedCarousel-RecentlyViewedCarouselMobile"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e("c6c242b7").then(n.bind(n, "52385bc4")),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "52385bc4"
                    }
                }),
                _ = () => {
                    const e = (0, s.getRequestContext)().getSiteType(),
                        t = e === r.N.WWW,
                        n = e === r.N.MDOT && ((0, c.dE)() > 0 || (0, u.mK)() > 0);
                    return a().createElement(a().Fragment, null, a().createElement(m.default, null), n && a().createElement(v, {
                        disableQMab: !0
                    }), t && a().createElement(E, {
                        disableQMab: !0
                    }))
                }
        },
        "9629c9e4": (e, t, n) => {
            "use strict";
            n.d(t, {
                QN: () => s,
                c$: () => l,
                dE: () => r
            });
            var i = n("28dbd132");
            const a = i.exp `OABBaJeWKNKNNBZELXOeEVJPbHWEYZLPNCDWOOC`,
                r = () => (0, i.trackExperiment)(a),
                s = () => {
                    (0, i.trackCustomGoal)(a, 1)
                },
                l = () => {
                    (0, i.trackCustomGoal)(a, 2)
                }
        },
        "9dab079f": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => i.q
            });
            var i = n("a751efe9")
        },
        e0c9dd7b: (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => r
            });
            var i = n("28dbd132");
            const a = i.exp `OABBaJePebeKSERLPWYNZRIIGLae`,
                r = () => !!(0, i.trackExperiment)(a)
        },
        "401a4dbc": (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => r
            });
            var i = n("28dbd132");
            const a = i.exp `OABBaJePebeKSERLPWYNHePTOdYXfCDWOOC`,
                r = () => !!(0, i.trackExperiment)(a)
        },
        "7fa013e2": (e, t, n) => {
            "use strict";
            n.d(t, {
                $7: () => p,
                $C: () => g,
                $f: () => h,
                A6: () => _,
                Bt: () => f,
                IH: () => P,
                Kq: () => T,
                M$: () => S,
                MZ: () => A,
                Pi: () => N,
                R: () => O,
                Wp: () => x,
                do: () => b,
                eT: () => D,
                gu: () => R,
                hz: () => M,
                kI: () => L,
                lP: () => k,
                yi: () => C,
                zq: () => I
            });
            var i = n("af1e2b38"),
                a = n("28dbd132");
            let r = function(e) {
                    return e[e.RENDER_WHERE_TO_NEXT = 1] = "RENDER_WHERE_TO_NEXT", e[e.RENDER_HERO = 2] = "RENDER_HERO", e[e.RENDER_SECONDARY_BANNERS = 3] = "RENDER_SECONDARY_BANNERS", e[e.RENDER_USPS = 4] = "RENDER_USPS", e[e.RENDER_RECENT_SEARCHES = 5] = "RENDER_RECENT_SEARCHES", e[e.RENDER_RVP = 6] = "RENDER_RVP", e[e.RENDER_PROMO_AREA = 7] = "RENDER_PROMO_AREA", e[e.RENDER_BELOW_SEARCH_AREA = 8] = "RENDER_BELOW_SEARCH_AREA", e[e.RENDER_QUEENMAB = 9] = "RENDER_QUEENMAB", e
                }({}),
                s = function(e) {
                    return e[e.VIEW_WHERE_TO_NEXT = 1] = "VIEW_WHERE_TO_NEXT", e[e.VIEW_HERO = 2] = "VIEW_HERO", e[e.VIEW_SECONDARY_BANNERS = 3] = "VIEW_SECONDARY_BANNERS", e[e.VIEW_USPS = 4] = "VIEW_USPS", e[e.VIEW_RECENT_SEARCHES = 5] = "VIEW_RECENT_SEARCHES", e[e.VIEW_RVP = 6] = "VIEW_RVP", e[e.VIEW_PROMO_AREA = 7] = "VIEW_PROMO_AREA", e[e.VIEW_BELOW_SEARCH_AREA = 8] = "VIEW_BELOW_SEARCH_AREA", e[e.VIEW_QUEENMAB = 9] = "VIEW_QUEENMAB", e
                }({}),
                l = function(e) {
                    return e[e.RENDER_HERO = 1] = "RENDER_HERO", e[e.RENDER_SECONDARY_BANNERS = 2] = "RENDER_SECONDARY_BANNERS", e[e.RENDER_USPS = 3] = "RENDER_USPS", e[e.RENDER_RECENT_SEARCHES = 4] = "RENDER_RECENT_SEARCHES", e[e.RENDER_RVP = 5] = "RENDER_RVP", e[e.RENDER_ABOVE_FEED_AREA = 6] = "RENDER_ABOVE_FEED_AREA", e[e.RENDER_BELOW_SEARCH_AREA = 7] = "RENDER_BELOW_SEARCH_AREA", e[e.RENDER_QUEENMAB = 8] = "RENDER_QUEENMAB", e
                }({}),
                o = function(e) {
                    return e[e.VIEW_HERO = 1] = "VIEW_HERO", e[e.VIEW_SECONDARY_BANNERS = 2] = "VIEW_SECONDARY_BANNERS", e[e.VIEW_USPS = 3] = "VIEW_USPS", e[e.VIEW_RECENT_SEARCHES = 4] = "VIEW_RECENT_SEARCHES", e[e.VIEW_RVP = 5] = "VIEW_RVP", e[e.VIEW_ABOVE_FEED_AREA = 6] = "VIEW_ABOVE_FEED_AREA", e[e.VIEW_BELOW_SEARCH_AREA = 7] = "VIEW_BELOW_SEARCH_AREA", e[e.VIEW_QUEENMAB = 8] = "VIEW_QUEENMAB", e
                }({});
            const d = a.exp `OABBaJePefMPSXHYaYLfDfEFEKCDWOOC`,
                c = a.exp `OABBaJePefMPSXHYaYLfDfEFEKdKNKNKWe`,
                u = a.exp `OABBaJePefMPSXHYaYLfDbdUWBLHIOOIBBO`,
                m = a.exp `OABBaJePefMPSXHYaYLfDbdUWBLHIcCcCcCC`,
                E = () => (0, i.Z6)().isMDOT ? u : m,
                v = () => (0, i.Z6)().isMDOT ? d : c,
                _ = () => {
                    (0, a.trackExperimentStage)(E(), (0, i.Z6)().isMDOT ? r.RENDER_HERO : l.RENDER_HERO)
                },
                N = () => {
                    (0, a.trackExperimentStage)(E(), (0, i.Z6)().isMDOT ? r.RENDER_SECONDARY_BANNERS : l.RENDER_SECONDARY_BANNERS)
                },
                g = () => {
                    (0, a.trackExperimentStage)(E(), (0, i.Z6)().isMDOT ? r.RENDER_USPS : l.RENDER_USPS)
                },
                R = () => {
                    (0, a.trackExperimentStage)(E(), (0, i.Z6)().isMDOT ? r.RENDER_RECENT_SEARCHES : l.RENDER_RECENT_SEARCHES)
                },
                S = () => {
                    (0, a.trackExperimentStage)(E(), (0, i.Z6)().isMDOT ? r.RENDER_RVP : l.RENDER_RVP)
                },
                h = () => {
                    (0, i.Z6)().isMDOT && (0, a.trackExperimentStage)(E(), r.RENDER_WHERE_TO_NEXT)
                },
                I = () => {
                    (0, i.Z6)().isMDOT && (0, a.trackExperimentStage)(E(), r.RENDER_PROMO_AREA)
                },
                x = () => {
                    (0, i.Z6)().isWWW && (0, a.trackExperimentStage)(E(), l.RENDER_QUEENMAB)
                },
                p = () => {
                    (0, i.Z6)().isWWW && (0, a.trackExperimentStage)(E(), l.RENDER_ABOVE_FEED_AREA)
                },
                k = () => {
                    (0, a.trackExperimentStage)(E(), (0, i.Z6)().isMDOT ? r.RENDER_BELOW_SEARCH_AREA : l.RENDER_BELOW_SEARCH_AREA)
                },
                A = () => {
                    (0, a.trackExperimentStage)(v(), (0, i.Z6)().isMDOT ? s.VIEW_HERO : o.VIEW_HERO)
                },
                O = () => {
                    (0, a.trackExperimentStage)(v(), (0, i.Z6)().isMDOT ? s.VIEW_SECONDARY_BANNERS : o.VIEW_SECONDARY_BANNERS)
                },
                f = () => {
                    (0, a.trackExperimentStage)(v(), (0, i.Z6)().isMDOT ? s.VIEW_USPS : o.VIEW_USPS)
                },
                T = () => {
                    (0, a.trackExperimentStage)(v(), (0, i.Z6)().isMDOT ? s.VIEW_RECENT_SEARCHES : o.VIEW_RECENT_SEARCHES)
                },
                C = () => {
                    (0, a.trackExperimentStage)(v(), (0, i.Z6)().isMDOT ? s.VIEW_RVP : o.VIEW_RVP)
                },
                b = () => {
                    (0, i.Z6)().isMDOT && (0, a.trackExperimentStage)(v(), s.VIEW_WHERE_TO_NEXT)
                },
                L = () => {
                    (0, i.Z6)().isMDOT && (0, a.trackExperimentStage)(v(), s.VIEW_PROMO_AREA)
                },
                D = () => {
                    (0, i.Z6)().isWWW && (0, a.trackExperimentStage)(v(), o.VIEW_QUEENMAB)
                },
                M = () => {
                    (0, i.Z6)().isWWW && (0, a.trackExperimentStage)(v(), o.VIEW_ABOVE_FEED_AREA)
                },
                P = () => {
                    (0, a.trackExperimentStage)(v(), (0, i.Z6)().isMDOT ? s.VIEW_BELOW_SEARCH_AREA : o.VIEW_BELOW_SEARCH_AREA)
                }
        },
        "0b7caa8b": (e, t, n) => {
            "use strict";
            n.d(t, {
                AY: () => l,
                CX: () => S,
                Y8: () => d,
                eJ: () => N,
                if: () => s,
                mK: () => v,
                q1: () => h,
                q_: () => o,
                tJ: () => R,
                x6: () => g
            });
            var i = n("af1e2b38"),
                a = n("dc6d28ff"),
                r = n("28dbd132");
            const s = (e, t, n) => {
                    t && (0, r.trackExperimentStage)(e, u.AT_LEAST_ONE_MISS_MATCH), n && (0, r.trackExperimentStage)(e, u.NO_MATCH)
                },
                l = () => r.exp `OABBaJeWKNKNNBZELXOeEVJPbHWEYZLPNCDWOOC`,
                o = e => {
                    if (e && e.length > 0) {
                        return c(e).length < e.length
                    }
                    return !1
                },
                d = e => {
                    if (e && e.length > 0) {
                        return !(0 === c(e).length)
                    }
                    return !1
                },
                c = e => e.filter(((e, t) => {
                    const n = e;
                    return n.checkin === n.latestSearchCheckin && n.checkout === n.latestSearchCheckout
                }));
            let u = function(e) {
                    return e[e.ON_RENDER = 1] = "ON_RENDER", e[e.ON_RENDER_US = 2] = "ON_RENDER_US", e[e.ON_RENDER_UPCOMING_BOOKING = 3] = "ON_RENDER_UPCOMING_BOOKING", e[e.ON_VIEW = 4] = "ON_VIEW", e[e.ON_VIEW_US = 5] = "ON_VIEW_US", e[e.ON_VIEW_UPCOMING_BOOKING = 6] = "ON_VIEW_UPCOMING_BOOKING", e[e.AT_LEAST_ONE_MISS_MATCH = 7] = "AT_LEAST_ONE_MISS_MATCH", e[e.NO_MATCH = 8] = "NO_MATCH", e
                }({}),
                m = function(e) {
                    return e[e.ON_CARD_CLICK = 1] = "ON_CARD_CLICK", e[e.ON_CAROUSEL_NAVIGATION = 2] = "ON_CAROUSEL_NAVIGATION", e
                }({}),
                E = function(e) {
                    return e[e.ON_RENDER_RV_MFE = 8] = "ON_RENDER_RV_MFE", e[e.ON_RENDER_RV_RS_MFE = 9] = "ON_RENDER_RV_RS_MFE", e
                }({});
            const v = () => (0, r.trackExperiment)(_()),
                _ = () => {
                    const e = r.exp `OABBaJeWKNKNNBZEQFZPTPALSIHUWPHDDWe`,
                        t = r.exp `OABBaJeWKNKNNBZEQFZPTPALSIHUFRURURHe`,
                        {
                            isWWW: n
                        } = (0, i.Z6)();
                    return n ? t : e
                },
                N = e => {
                    const t = _();
                    (0, r.trackExperimentStage)(t, u.ON_RENDER);
                    "us" === (0, a.getRequestContext)().getVisitorCountry() && (0, r.trackExperimentStage)(t, u.ON_RENDER_US), e.hasUpcomingBookings && (0, r.trackExperimentStage)(t, u.ON_RENDER_UPCOMING_BOOKING), s(l(), o(e.items), d(e.items))
                },
                g = e => {
                    const t = _();
                    (0, r.trackExperimentStage)(t, u.ON_VIEW);
                    "us" === (0, a.getRequestContext)().getVisitorCountry() && (0, r.trackExperimentStage)(t, u.ON_VIEW_US), e.hasUpcomingBookings && (0, r.trackExperimentStage)(t, u.ON_VIEW_UPCOMING_BOOKING)
                },
                R = () => {
                    (0, r.trackCustomGoal)(_(), m.ON_CARD_CLICK)
                },
                S = () => {
                    (0, r.trackCustomGoal)(_(), m.ON_CAROUSEL_NAVIGATION)
                },
                h = (e, t) => {
                    var n;
                    const i = _();
                    null !== (n = e.items) && void 0 !== n && n.length && ((0, r.trackExperimentStage)(i, E.ON_RENDER_RV_MFE), t > 0 && (0, r.trackExperimentStage)(i, E.ON_RENDER_RV_RS_MFE))
                }
        },
        c1a8b9b7: (e, t, n) => {
            "use strict";
            n.d(t, {
                b: () => d
            });
            var i = n("ead71eb0"),
                a = n("41c6c66e"),
                r = n("cedcabf9");
            const s = {},
                l = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "UpcomingBookings"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "caller"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "useCase"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
                                    }
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "timeWindow"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CDPTimeWindow"
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
                                    value: "cdpUserFeatures"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "caller"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "caller"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "useCases"
                                    },
                                    value: {
                                        kind: "ListValue",
                                        values: [{
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "useCase"
                                            }
                                        }]
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "upcomingBookingExists"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "timeWindow"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "timeWindow"
                                                }
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "CDPBooleanResult"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "value"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "CDPErrorResult"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "message"
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
                        end: 361,
                        source: {
                            body: "\n  query UpcomingBookings(\n    $caller: String\n    $useCase: String!\n    $timeWindow: CDPTimeWindow!\n  ) {\n    cdpUserFeatures(caller: $caller, useCases: [$useCase]) {\n      upcomingBookingExists(timeWindow: $timeWindow) {\n        ... on CDPBooleanResult {\n          value\n        }\n        ... on CDPErrorResult {\n          message\n        }\n      }\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            var o = n("e36d8828");
            const d = () => {
                var e;
                const t = !(0, o.jl)(),
                    {
                        loading: n,
                        data: d,
                        error: c
                    } = function(e) {
                        const t = { ...s,
                            ...e
                        };
                        return r.useQuery(l, t)
                    }({
                        variables: {
                            useCase: "ALL_IndexPage_Flag_ExperimentTracking_UserswithUpcomingBooking",
                            caller: "index-lp-web-mfe",
                            timeWindow: {
                                type: "MOVING",
                                durationInDays: 1e3,
                                offsetInDays: 0
                            }
                        },
                        fetchPolicy: "cache-first",
                        skip: t
                    }),
                    u = null === d || void 0 === d || null === (e = d.cdpUserFeatures) || void 0 === e ? void 0 : e.upcomingBookingExists;
                return (0, i.useEffect)((() => {
                    t || n || (d || (0, a.reportWarning)("No data for upcoming bookings"), c && (0, a.reportError)(c), "CDPErrorResult" === (null === u || void 0 === u ? void 0 : u.__typename) && (0, a.reportWarning)(u.message))
                }), [t, n, d, c, u]), t ? {
                    value: !1,
                    loading: !1
                } : "CDPBooleanResult" === (null === u || void 0 === u ? void 0 : u.__typename) ? {
                    value: u.value,
                    loading: !1
                } : {
                    value: !1,
                    loading: n
                }
            }
        },
        "2db41414": (e, t, n) => {
            "use strict";
            n.d(t, {
                X: () => a,
                Z: () => r
            });
            var i = n("5c4eda5e");
            const a = (e, t, n, a) => {
                    const r = i.J[a][t][n];
                    return e ? {
                        "1x": e.replace("<SIZE>", r["1x"]),
                        "2x": e.replace("<SIZE>", r["2x"])
                    } : null
                },
                r = (e, t, n) => e && n + e.replace("<SIZE>", t)
        },
        "5c4eda5e": (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => a,
                y: () => i
            });
            let i = function(e) {
                return e.IndexQmabDesktop = "IndexQmabDesktop", e.IndexQmabMdot = "IndexQmabMdot", e
            }({});
            const a = {
                IndexQmabDesktop: {
                    small: {
                        "1:1": {
                            "1x": "170x170",
                            "2x": "340x340"
                        },
                        "16:9": {
                            "1x": "170x96",
                            "2x": "340x192"
                        },
                        "9:16": {
                            "1x": "96x170",
                            "2x": "192x340"
                        },
                        "21:9": {
                            "1x": "170x73",
                            "2x": "340x146"
                        },
                        "2:1": {
                            "1x": "170x85",
                            "2x": "340x170"
                        },
                        "3:4": {
                            "1x": "170x227",
                            "2x": "340x454"
                        },
                        "4:3": {
                            "1x": "170x128",
                            "2x": "340x256"
                        },
                        "5:4": {
                            "1x": "170x136",
                            "2x": "340x272"
                        },
                        "3:2": {
                            "1x": "170x113",
                            "2x": "340x226"
                        },
                        "2:3": {
                            "1x": "170x255",
                            "2x": "340x510"
                        },
                        "4:5": {
                            "1x": "170x212",
                            "2x": "340x424"
                        }
                    },
                    medium: {
                        "1:1": {
                            "1x": "263x263",
                            "2x": "526x526"
                        },
                        "16:9": {
                            "1x": "263x148",
                            "2x": "526x296"
                        },
                        "9:16": {
                            "1x": "148x263",
                            "2x": "296x526"
                        },
                        "21:9": {
                            "1x": "263x113",
                            "2x": "526x226"
                        },
                        "2:1": {
                            "1x": "263x132",
                            "2x": "526x264"
                        },
                        "3:4": {
                            "1x": "263x351",
                            "2x": "526x702"
                        },
                        "4:3": {
                            "1x": "263x197",
                            "2x": "526x394"
                        },
                        "5:4": {
                            "1x": "263x210",
                            "2x": "526x420"
                        },
                        "3:2": {
                            "1x": "263x175",
                            "2x": "526x350"
                        },
                        "2:3": {
                            "1x": "263x394",
                            "2x": "526x789"
                        },
                        "4:5": {
                            "1x": "263x329",
                            "2x": "526x658"
                        }
                    },
                    large: {
                        "1:1": {
                            "1x": "356x356",
                            "2x": "712x712"
                        },
                        "16:9": {
                            "1x": "356x200",
                            "2x": "712x400"
                        },
                        "9:16": {
                            "1x": "200x356",
                            "2x": "400x712"
                        },
                        "21:9": {
                            "1x": "356x153",
                            "2x": "712x306"
                        },
                        "2:1": {
                            "1x": "356x178",
                            "2x": "712x356"
                        },
                        "3:4": {
                            "1x": "356x475",
                            "2x": "712x950"
                        },
                        "4:3": {
                            "1x": "356x267",
                            "2x": "712x534"
                        },
                        "5:4": {
                            "1x": "356x285",
                            "2x": "712x570"
                        },
                        "3:2": {
                            "1x": "356x237",
                            "2x": "712x474"
                        },
                        "2:3": {
                            "1x": "356x534",
                            "2x": "712x1068"
                        },
                        "4:5": {
                            "1x": "356x445",
                            "2x": "712x890"
                        }
                    },
                    larger: {
                        "1:1": {
                            "1x": "356x356",
                            "2x": "712x712"
                        },
                        "16:9": {
                            "1x": "356x200",
                            "2x": "712x400"
                        },
                        "9:16": {
                            "1x": "200x356",
                            "2x": "400x712"
                        },
                        "21:9": {
                            "1x": "356x153",
                            "2x": "712x306"
                        },
                        "2:1": {
                            "1x": "356x178",
                            "2x": "712x356"
                        },
                        "3:4": {
                            "1x": "356x475",
                            "2x": "712x950"
                        },
                        "4:3": {
                            "1x": "356x267",
                            "2x": "712x534"
                        },
                        "5:4": {
                            "1x": "356x285",
                            "2x": "712x570"
                        },
                        "3:2": {
                            "1x": "356x237",
                            "2x": "712x474"
                        },
                        "2:3": {
                            "1x": "356x534",
                            "2x": "712x1068"
                        },
                        "4:5": {
                            "1x": "356x445",
                            "2x": "712x890"
                        }
                    }
                },
                IndexQmabMdot: {
                    small: {
                        "1:1": {
                            "1x": "170x170",
                            "2x": "340x340"
                        },
                        "16:9": {
                            "1x": "170x96",
                            "2x": "340x192"
                        },
                        "9:16": {
                            "1x": "96x170",
                            "2x": "192x340"
                        },
                        "21:9": {
                            "1x": "170x73",
                            "2x": "340x146"
                        },
                        "2:1": {
                            "1x": "170x85",
                            "2x": "340x170"
                        },
                        "3:4": {
                            "1x": "170x227",
                            "2x": "340x454"
                        },
                        "4:3": {
                            "1x": "170x128",
                            "2x": "340x256"
                        },
                        "5:4": {
                            "1x": "170x136",
                            "2x": "340x272"
                        },
                        "3:2": {
                            "1x": "170x113",
                            "2x": "340x226"
                        },
                        "2:3": {
                            "1x": "170x255",
                            "2x": "340x510"
                        },
                        "4:5": {
                            "1x": "170x212",
                            "2x": "340x424"
                        }
                    },
                    medium: {
                        "1:1": {
                            "1x": "263x263",
                            "2x": "526x526"
                        },
                        "16:9": {
                            "1x": "263x148",
                            "2x": "526x296"
                        },
                        "9:16": {
                            "1x": "148x263",
                            "2x": "296x526"
                        },
                        "21:9": {
                            "1x": "263x113",
                            "2x": "526x226"
                        },
                        "2:1": {
                            "1x": "263x132",
                            "2x": "526x264"
                        },
                        "3:4": {
                            "1x": "263x351",
                            "2x": "526x702"
                        },
                        "4:3": {
                            "1x": "263x197",
                            "2x": "526x394"
                        },
                        "5:4": {
                            "1x": "263x210",
                            "2x": "526x420"
                        },
                        "3:2": {
                            "1x": "263x175",
                            "2x": "526x350"
                        },
                        "2:3": {
                            "1x": "263x394",
                            "2x": "526x789"
                        },
                        "4:5": {
                            "1x": "263x329",
                            "2x": "526x658"
                        }
                    },
                    large: {
                        "1:1": {
                            "1x": "356x356",
                            "2x": "712x712"
                        },
                        "16:9": {
                            "1x": "356x200",
                            "2x": "712x400"
                        },
                        "9:16": {
                            "1x": "200x356",
                            "2x": "400x712"
                        },
                        "21:9": {
                            "1x": "356x153",
                            "2x": "712x306"
                        },
                        "2:1": {
                            "1x": "356x178",
                            "2x": "712x356"
                        },
                        "3:4": {
                            "1x": "356x475",
                            "2x": "712x950"
                        },
                        "4:3": {
                            "1x": "356x267",
                            "2x": "712x534"
                        },
                        "5:4": {
                            "1x": "356x285",
                            "2x": "712x570"
                        },
                        "3:2": {
                            "1x": "356x237",
                            "2x": "712x474"
                        },
                        "2:3": {
                            "1x": "356x534",
                            "2x": "712x1068"
                        },
                        "4:5": {
                            "1x": "356x445",
                            "2x": "712x890"
                        }
                    },
                    larger: {
                        "1:1": {
                            "1x": "356x356",
                            "2x": "712x712"
                        },
                        "16:9": {
                            "1x": "356x200",
                            "2x": "712x400"
                        },
                        "9:16": {
                            "1x": "200x356",
                            "2x": "400x712"
                        },
                        "21:9": {
                            "1x": "356x153",
                            "2x": "712x306"
                        },
                        "2:1": {
                            "1x": "356x178",
                            "2x": "712x356"
                        },
                        "3:4": {
                            "1x": "356x475",
                            "2x": "712x950"
                        },
                        "4:3": {
                            "1x": "356x267",
                            "2x": "712x534"
                        },
                        "5:4": {
                            "1x": "356x285",
                            "2x": "712x570"
                        },
                        "3:2": {
                            "1x": "356x237",
                            "2x": "712x474"
                        },
                        "2:3": {
                            "1x": "356x534",
                            "2x": "712x1068"
                        },
                        "4:5": {
                            "1x": "356x445",
                            "2x": "712x890"
                        }
                    }
                }
            }
        },
        e36d8828: (e, t, n) => {
            "use strict";
            n.d(t, {
                CR: () => l,
                Tz: () => o,
                jl: () => s
            });
            var i = n("43a4d203"),
                a = n("dc6d28ff");
            const r = () => (0, a.getRequestContext)().getUnpackedGuestAccessToken(),
                s = () => {
                    var e;
                    const t = null === (e = r()) || void 0 === e ? void 0 : e.authenticatorAssuranceLevel;
                    return !!t && t >= i.AuthenticatorAssuranceLevel.AAL1
                },
                l = () => {
                    var e;
                    return !(null === (e = r()) || void 0 === e || !e.isMarketingTrackingAllowed)
                },
                o = () => !s()
        },
        "8e166592": (e, t, n) => {
            "use strict";
            n.d(t, {
                dg: () => s,
                ke: () => l,
                uo: () => o
            });
            var i = n("c66f4a5f"),
                a = n("8ebac256"),
                r = n("dc6d28ff");
            const s = () => {
                var e;
                if ("undefined" === typeof window) return;
                const t = (0, r.getRequestContext)(),
                    n = t.getBPlatformEnvironment(),
                    i = t.getSiteType(),
                    s = String(null === (e = t.getAffiliate()) || void 0 === e ? void 0 : e.id),
                    l = {
                        lang: t.getLanguage(),
                        aid: isNaN(Number(s)) ? void 0 : s,
                        isDev: !n || "dev" === n || "dqs" === n,
                        pageviewId: t.getPageviewId(),
                        platform: null === i || void 0 === i ? void 0 : i.toLowerCase()
                    };
                a.Z.init(l)
            };
            let l = function(e) {
                return e.Click = "CLICK", e.View = "VIEW", e
            }({});
            const o = (e, t) => {
                var n;
                if (!t) return;
                const r = null === (n = t.c360Actions) || void 0 === n ? void 0 : n.find((t => (null === t || void 0 === t ? void 0 : t.actionType) === e));
                if (!r) return;
                let s = {};
                try {
                    s = JSON.parse(r.content)
                } catch (l) {
                    return void(0, i.ZK)("content in C360 tracking action is not a valid JSON")
                }
                a.Z.sendEvent({
                    action_name: r.actionName,
                    action_version: r.actionVersion,
                    content: s
                })
            }
        },
        "8ebac256": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });

            function i(e, t, n, i) {
                return new(n || (n = Promise))((function(a, r) {
                    function s(e) {
                        try {
                            o(i.next(e))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function l(e) {
                        try {
                            o(i.throw(e))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function o(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, l)
                    }
                    o((i = i.apply(e, t || [])).next())
                }))
            }
            Object.create;
            Object.create;
            class a {
                constructor(e) {
                    this.config = e, this.headers = this.config.API.HEADERS
                }
                get(e, t) {
                    return new Promise(((n, a) => i(this, void 0, void 0, (function*() {
                        try {
                            const i = yield fetch(e, {
                                method: "GET",
                                headers: (null === t || void 0 === t ? void 0 : t.withHeaders) ? this.headers : void 0,
                                credentials: !1 === (null === t || void 0 === t ? void 0 : t.withCredentials) ? "omit" : "include"
                            }), a = yield i.text();
                            n(a ? JSON.parse(a) : null)
                        } catch (i) {
                            return a(i)
                        }
                    }))))
                }
                post(e, t, n) {
                    return new Promise(((a, r) => i(this, void 0, void 0, (function*() {
                        try {
                            const i = yield fetch(e, {
                                method: "POST",
                                headers: (null === n || void 0 === n ? void 0 : n.withHeaders) ? this.headers : void 0,
                                credentials: !1 === (null === n || void 0 === n ? void 0 : n.withCredentials) ? "omit" : "include",
                                body: JSON.stringify(t)
                            }), r = yield i.text();
                            a(r ? JSON.parse(r) : null)
                        } catch (i) {
                            return r(i)
                        }
                    }))))
                }
            }
            var r = new class {
                init(e) {
                    this.client = new a(e)
                }
                get(e) {
                    return i(this, void 0, void 0, (function*() {
                        return this.client.get(e)
                    }))
                }
                post(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return i(this, void 0, void 0, (function*() {
                        return this.client.post(e, t, n)
                    }))
                }
            };
            const s = e => {
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
            class l {
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
            const o = new class {
                constructor() {
                    this.trackBatch = e => i(this, void 0, void 0, (function*() {
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
                                const a = {
                                    tracker_name: "C360ReactTracker",
                                    tracker_type: "Client",
                                    tracker_version: "0.1.0"
                                };
                                return n && (a.tracker_version = "0.1.1"), Object.assign(Object.assign({}, e), {
                                    context: i,
                                    tracker: a
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
                                HEADERS: s(e)
                            },
                            TRACK_BASE_URL: `https://${t}/c360/v1/track`,
                            language: e.lang,
                            currency: e.currency
                        }
                    })(e), this.httpClient = r, this.c360url = this.c360Config.TRACK_BASE_URL, this.props = e, this.batchQueue = this.batchQueue || new l(10, 1e3, this.trackBatch), r.init(this.c360Config)
                }
                track(e) {
                    return i(this, void 0, void 0, (function*() {
                        this.httpClient.post(this.c360url, e, {
                            withHeaders: !0
                        }).catch((e => {
                            this.props.onErrorCallback && this.props.onErrorCallback(new Error(e))
                        }))
                    }))
                }
                sendEvent(e, t) {
                    return i(this, void 0, void 0, (function*() {
                        this.batchQueue.enqueue(e), t && this.batchQueue.flush()
                    }))
                }
            }
        },
        b1f34e95: (e, t, n) => {
            "use strict";
            n.d(t, {
                $O: () => r,
                G1: () => d,
                Oq: () => l,
                RS: () => m,
                _Q: () => c,
                _g: () => o,
                ge: () => a,
                jP: () => s,
                mT: () => i,
                yn: () => u
            });
            const i = "nflt",
                a = ";",
                r = "ac_meta",
                s = "previous_search_id",
                l = {
                    FILTER_CLASS: "class",
                    FILTER_HOTEL_TYPE: "ht_id",
                    FILTER_24HR_RECEPTION: "hr_24",
                    FILTER_FACILITIES: "hotelfacility",
                    FILTER_ROOM_FACILITIES: "roomfacility",
                    FILTER_DISTRICT: "di",
                    FILTER_CHAINS: "chaincode",
                    FILTER_CHAIN: "chain",
                    FILTER_DEALS: "any_deal",
                    FILTER_DEALS_V2: "deals_filter_v2",
                    FILTER_FREE_CANCELLATION: "fc",
                    FILTER_PAYMENT_METHOD: "pmt",
                    FILTER_MEALPLAN: "mealplan",
                    FILTER_PRICE_SLIDER: "price",
                    FILTER_HT_BEACH: "ht_beach",
                    FILTER_TWIN_DOUBLE: "tdb",
                    FILTER_POPULAR_ACTIVITIES: "popular_activities",
                    FILTER_REVIEW_SCORE: "review_score",
                    FILTER_FAMILY_FRIENDLY_PROPERTY: "family_friendly_property",
                    FILTER_OUT_OF_STOCK: "oos",
                    FILTER_PRIVATE_BRAND: "ibr",
                    FILTER_ACCESSIBLE_FACILITIES: "accessible_facilities",
                    FILTER_ACCESSIBLE_ROOM_FACILITIES: "accessible_room_facilities",
                    FILTER_DISTANCE_TO_SKI_LIFT_FILTER: "distanceToSkiliftFilter",
                    FILTER_MIN_BATHROOMS: "min_bathrooms",
                    FILTER_UFI: "uf",
                    FILTER_POPULAR_NEARBY_LANDMARKS: "popular_nearby_landmarks",
                    FILTER_DISTANCE: "distance",
                    FILTER_SEO_THEME: "sth",
                    FILTER_HEALTH_AND_HYGIENE: "health_and_hygiene",
                    FILTER_NUM_BEDS: "num_beds",
                    FILTER_TOP_DESTINATIONS: "top_destinations",
                    FILTER_POPULAR: "popular",
                    FILTER_POPULAR_STICKY: "popular_sticky",
                    FILTER_NO_DORMS: "rpt",
                    FILTER_PRIVACY_TYPE: "privacy_type",
                    FILTER_PRIVACY_TYPE_NO_DATE: "privacy_type_no_date",
                    FILTER_GENIUS_BENEFITS: "genius_benefits",
                    FILTER_PREVIOUSLY_USED: "used_filters",
                    FILTER_BEACH_ACCESS_FACILITY: "BeachAccessFacilityFilter",
                    FILTER_SUSTAINABLE_PROPERTY: "SustainablePropertyFilter",
                    FILTER_SUSTAINABLE_LEVEL_PROPERTY: "SustainablePropertyLevelFilter",
                    FILTER_THAI_PASS: "thai_pass",
                    FILTER_UNIT_CONFIG: "unit_config_grouped",
                    FILTER_RATED_HIGH: "rated_high",
                    FILTER_DISTANCE_TO_POI: "distance_to_poi",
                    FILTER_EPU_BEDROOM_COUNT: "entire_place_bedroom_count",
                    FILTER_DISTRICT_THEME: "dti"
                },
                o = ["offset", "activeTab", "sb", "src_elem", "hstrmdl"],
                d = "min",
                c = "max",
                u = new RegExp(`^.+-(${d}|[0-9]+)-(${c}|[0-9]+)-1`, "i"),
                m = "sr_sfu"
        },
        dd6086f7: (e, t, n) => {
            "use strict";
            n.d(t, {
                d: () => l
            });
            var i = n("dc6d28ff"),
                a = n("d1e54a96"),
                r = n("67934118"),
                s = n("b1f34e95");

            function l(e) {
                let {
                    ucfac: t,
                    ucfgff: n,
                    ffsau: l,
                    highlightedPropertyId: o,
                    tripThemeId: d,
                    destType: c,
                    destId: u,
                    isAroundme: m,
                    latitude: E,
                    longitude: v,
                    travelPurpose: _,
                    sorter: N,
                    selectedFilters: g,
                    checkin: R,
                    checkout: S,
                    nbAdults: h,
                    nbChildren: I,
                    childrenAges: x,
                    nbRooms: p,
                    postcard: k,
                    sleepingRoomMatch: A,
                    showApartHotels: O,
                    loginRedirect: f,
                    fromSearchHistorySearchbox: T,
                    lpThemeId: C,
                    previousSearchId: b,
                    srView: L,
                    sourceLabel: D
                } = e;
                const M = (0, i.getRequestContext)().getLanguage(),
                    P = (0, a.constructUrl)({
                        pathname: `/searchresults${"en-us"===M?"":"."+M}.html`
                    }),
                    w = P.searchParams;
                if (R && S && (w.set("checkin", R), w.set("checkout", S)), u && c && (w.set("dest_id", String(u)), w.set("dest_type", String(c).toLowerCase())), "boolean" === typeof m && w.set("is_aroundme", m ? "1" : "0"), "undefined" !== typeof E && "undefined" !== typeof v && (w.set("latitude", String(E)), w.set("longitude", String(v))), "undefined" !== typeof _) {
                    const e = (0, r.DT)(parseInt(String(_), 10));
                    e && w.set(r.w3, e)
                }
                return g && w.set(s.mT, g), N && w.set("order", N), "undefined" !== typeof h && (w.set("group_adults", String(h)), w.set("req_adults", String(h))), "undefined" !== typeof p && w.set("no_rooms", String(p)), "undefined" !== typeof I && (w.set("group_children", String(I)), w.set("req_children", String(I))), x && x.forEach((e => {
                    w.append("age", String(e)), w.append("req_age", String(e))
                })), o && w.set("highlighted_hotels", String(o)), d && w.set("trip_theme", String(d)), t && w.set("ucfac", t), n && w.set("ucfgff", n), l && w.set("ffsau", l), k && w.set("postcard", k), A && w.set("slp_r_match_to", A), O && w.set("shw_aparth", O), f && w.set("login_redirect", f), T && w.set("fshsb", "1"), C && w.set("theme_id", String(C)), b && w.set(s.jP, b), L && w.set("sr_view", L), D && w.set("source_label", D), P
            }
        },
        67934118: (e, t, n) => {
            "use strict";
            n.d(t, {
                C3: () => o,
                DT: () => d,
                H: () => i,
                w3: () => r
            });
            const i = "business",
                a = "leisure",
                r = "sb_travel_purpose",
                s = 1,
                l = 2;

            function o(e) {
                return e.get(r) === i
            }

            function d(e) {
                return e === s ? i : e === l ? a : void 0
            }
        },
        "4cb53b04": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0");
            const a = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "M22.5 9.75C22.5 12.522 17.854 15 12 15S1.5 12.522 1.5 9.75 6.146 4.5 12 4.5s10.5 2.478 10.5 5.25m1.5 0C24 5.895 18.573 3 12 3S0 5.895 0 9.75s5.427 6.75 12 6.75 12-2.895 12-6.75m-24 0v7.5C0 21.105 5.427 24 12 24s12-2.895 12-6.75v-7.5a.75.75 0 0 0-1.5 0v7.5c0 2.772-4.646 5.25-10.5 5.25S1.5 20.022 1.5 17.25v-7.5a.75.75 0 0 0-1.5 0m19.5 1.875C19.5 13.348 16.195 15 12 15s-7.5-1.652-7.5-3.375S7.805 8.25 12 8.25s7.5 1.652 7.5 3.375m1.5 0c0-2.834-4.083-4.875-9-4.875s-9 2.041-9 4.875S7.083 16.5 12 16.5s9-2.041 9-4.875M15.75 13.5c0 .687-1.626 1.5-3.75 1.5s-3.75-.813-3.75-1.5S9.876 12 12 12s3.75.813 3.75 1.5m1.5 0c0-1.798-2.404-3-5.25-3s-5.25 1.202-5.25 3 2.404 3 5.25 3 5.25-1.202 5.25-3m-6 9.7v-2.95a.75.75 0 0 1 1.5 0v2.95a.75.75 0 0 0 1.5 0v-2.95a2.25 2.25 0 0 0-4.5 0v2.95a.75.75 0 0 0 1.5 0M3 6.755V3a.75.75 0 0 0-1.5 0v3.755a.75.75 0 0 0 1.5 0m19.5 0V3A.75.75 0 0 0 21 3v3.755a.75.75 0 0 0 1.5 0M9 4.091V.75a.75.75 0 0 0-1.5 0v3.341a.75.75 0 0 0 1.5 0m7.5 0V.75a.75.75 0 0 0-1.5 0v3.341a.75.75 0 0 0 1.5 0"
                }))
            }
        },
        "6d3d763b": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0");
            const a = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px",
                    "data-rtl-flip": "true"
                }, i.createElement("path", {
                    d: "M23.25 11.747H.75a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5m-3.22 5.03 3.75-3.75a.75.75 0 0 0 0-1.06l-3.75-3.75a.75.75 0 1 0-1.06 1.06l3.75 3.75v-1.06l-3.75 3.75a.75.75 0 1 0 1.06 1.06"
                }))
            }
        },
        a0be29fc: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0");
            const a = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "M10.5 15.75h12.75a.75.75 0 0 0 0-1.5H10.5a.75.75 0 0 0 0 1.5m9.22-3.22 3 3v-1.06l-3 3a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06M13.5 8.25H.75a.75.75 0 0 0 0 1.5H13.5a.75.75 0 0 0 0-1.5m-9.22 3.22-3-3v1.06l3-3a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06"
                }))
            }
        },
        bca4b277: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0");
            const a = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "m.153 22.237.85 1.117c.634.76 1.724.856 2.456.244q.117-.099.216-.217l.944-1.132a.228.228 0 0 1 .349.001l.944 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.95 1.132a1.728 1.728 0 0 0 2.65 0l.942-1.133a.228.228 0 0 1 .349.001l.942 1.13a1.728 1.728 0 0 0 2.651.001l.944-1.132a.228.228 0 0 1 .349.001l.94 1.13a1.728 1.728 0 0 0 2.652.001l.585-.7a.75.75 0 1 0-1.15-.962l-.585.7a.228.228 0 0 1-.35 0l-.94-1.13a1.728 1.728 0 0 0-2.652-.001l-.944 1.132a.228.228 0 0 1-.349-.001l-.942-1.13a1.728 1.728 0 0 0-2.651-.001l-.943 1.132a.228.228 0 0 1-.348-.001l-.95-1.132a1.726 1.726 0 0 0-2.65 0l-.944 1.133a.228.228 0 0 1-.349-.001l-.944-1.13a1.728 1.728 0 0 0-2.65 0l-.945 1.13a.228.228 0 0 1-.349-.001l-.828-1.09a.75.75 0 1 0-1.194.91zm11.335-2.68A7.16 7.16 0 0 1 15.77 18h7.481a.75.75 0 0 0 0-1.5h-7.5a8.67 8.67 0 0 0-5.196 1.884.75.75 0 1 0 .934 1.174zM22.285 7.969a1.73 1.73 0 0 0 .781-2.711C19.43.713 12.8-.022 8.256 3.614a10.54 10.54 0 0 0-3.952 8.171A1.73 1.73 0 0 0 6.6 13.427l15.684-5.459zm-.494-1.416L6.107 12.01a.23.23 0 0 1-.304-.218 9.036 9.036 0 0 1 16.09-5.599.228.228 0 0 1-.102.359zm-9.459-4.2L11.69.504a.75.75 0 1 0-1.416.492l.643 1.848a.75.75 0 1 0 1.416-.492zm1.156 7.883 2.527 7.262a.75.75 0 1 0 1.416-.494l-2.527-7.26a.75.75 0 1 0-1.416.492"
                }))
            }
        },
        "337dc83a": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0");
            const a = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25m0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18m22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0m-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0m-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25m0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75z"
                }))
            }
        },
        "08b473e0": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0");
            const a = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5M7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0m10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0"
                }))
            }
        },
        "2dfbfe1f": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0");
            const a = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "M10.5 3.745a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0m-.75.75h7.5l-.75-.75v2.25a.75.75 0 0 0 1.5 0v-2.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5m3.75-.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0m2.579 5.25H6.421a2.25 2.25 0 0 0-2.183 1.704L3.045 13.99a.75.75 0 0 0 .705 1.005h16.5a.75.75 0 0 0 .705-1.005l-1.216-3.364c-.228-.928-1.128-1.63-2.16-1.631m0 1.5a.75.75 0 0 1 .727.568l1.239 3.437.705-1.005H3.75l.705 1.005 1.216-3.364c.106-.407.406-.641.75-.641zm3.421 9H3v-3.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 .75.75zm0 1.5a1.5 1.5 0 0 0 1.5-1.49v-3.76a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v3.75a1.5 1.5 0 0 0 1.5 1.5zm-18.75-3h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5m16.5 0h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0 0 1.5m-9 0h4.5l-.75-.75v3l.75-.75h-4.5l.75.75v-3zm0-1.5a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75zm7.5 7.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v1.5a2.25 2.25 0 0 0 2.25 2.25m0-1.5a.75.75 0 0 1-.75-.75v-1.5l-.75.75h4.5l-.75-.75v1.5a.75.75 0 0 1-.75.75zm-12 1.5h1.5A2.25 2.25 0 0 0 9 21.745v-1.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v1.5a2.25 2.25 0 0 0 2.25 2.25m0-1.5a.75.75 0 0 1-.75-.75v-1.5l-.75.75h4.5l-.75-.75v1.5a.75.75 0 0 1-.75.75z"
                }))
            }
        },
        "58ff1375": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0");
            const a = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "M2.75 6h9.5a.25.25 0 0 1-.25-.25v17.5l.75-.75H2.25l.75.75V5.75a.25.25 0 0 1-.25.25m0-1.5c-.69 0-1.25.56-1.25 1.25v17.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V5.75c0-.69-.56-1.25-1.25-1.25zm3-1.5h3.5A.25.25 0 0 1 9 2.75v2.5l.75-.75h-4.5l.75.75v-2.5a.25.25 0 0 1-.25.25m0-1.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-2.5c0-.69-.56-1.25-1.25-1.25zM5.25 9h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5m0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5m0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5m0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5m0 3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5M7.5.75v1.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0M15.75 24h6a.75.75 0 0 0 .75-.75V10.5A1.5 1.5 0 0 0 21 9h-4.5a1.5 1.5 0 0 0-1.5 1.5v12.75a.75.75 0 0 0 1.5 0V10.5H21v12.75l.75-.75h-6a.75.75 0 0 0 0 1.5M19.5 8.25v1.5a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0M.75 24h22.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5"
                }))
            }
        },
        "1424d033": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0");
            const a = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "M15 8.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0m1.5 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0M12 1.5a6.75 6.75 0 0 1 6.75 6.75c0 2.537-3.537 9.406-6.75 14.25-3.214-4.844-6.75-11.713-6.75-14.25A6.75 6.75 0 0 1 12 1.5M12 0a8.25 8.25 0 0 0-8.25 8.25c0 2.965 3.594 9.945 7 15.08a1.5 1.5 0 0 0 2.5 0c3.406-5.135 7-12.115 7-15.08A8.25 8.25 0 0 0 12 0"
                }))
            }
        },
        "73a0d57d": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0");
            const a = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "M6 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0m-3 3A4.5 4.5 0 0 0 0 13.5v2.25c0 .414.336.75.75.75h1.5l-.744-.657.75 6A.75.75 0 0 0 3 22.5h3A.75.75 0 0 0 6 21H3l.744.657-.75-6A.75.75 0 0 0 2.25 15H.75l.75.75V13.5a3 3 0 0 1 3-3 .75.75 0 0 0 0-1.5M21 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0m-3 4.5a3 3 0 0 1 3 3v2.25l.75-.75h-1.5a.75.75 0 0 0-.744.657l-.75 6L21 21h-3a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .744-.657l.75-6-.744.657h1.5a.75.75 0 0 0 .75-.75V13.5A4.5 4.5 0 0 0 19.5 9a.75.75 0 0 0 0 1.5m-5.25-6.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0M18 13.5a6 6 0 0 0-12 0v2.25c0 .414.336.75.75.75H9l-.746-.675.75 7.5A.75.75 0 0 0 9.75 24h4.5a.75.75 0 0 0 .746-.675l.75-7.5L15 16.5h2.25a.75.75 0 0 0 .75-.75zm-1.5 0v2.25l.75-.75H15a.75.75 0 0 0-.746.675l-.75 7.5.746-.675h-4.5l.746.675-.75-7.5A.75.75 0 0 0 9 15H6.75l.75.75V13.5a4.5 4.5 0 1 1 9 0"
                }))
            }
        },
        "1c0fcf2b": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0");
            const a = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "M4.5 8.911h3l-.75-.75v9l.75-.75h-3l.75.75v-9zm0-1.5a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75zm6 1.5h3l-.75-.75v9l.75-.75h-3l.75.75v-9zm0-1.5a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75zm6 1.5h3l-.75-.75v9l.75-.75h-3l.75.75v-9zm0-1.5a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75zm4.5 12H3l.75.75v-2.25h16.5v2.25zm0 1.5a.75.75 0 0 0 .75-.75v-2.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v2.25c0 .414.336.75.75.75zm-19.5 3h21a.75.75 0 0 0 0-1.5h-21a.75.75 0 0 0 0 1.5m0-3h21a.75.75 0 0 0 0-1.5h-21a.75.75 0 0 0 0 1.5m18.75-15.75v2.25H3.75v-2.25l-.415.67L12 1.5l8.665 4.332zm1.5 0a.75.75 0 0 0-.415-.67L12.67.157a1.5 1.5 0 0 0-1.34 0L2.666 4.49a.75.75 0 0 0-.415.671v2.25a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5v-2.25zM3 5.911h18a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5"
                }))
            }
        },
        "434d016f": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0");
            const a = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "M16.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M18 6A6 6 0 1 0 6 6a6 6 0 0 0 12 0M3 23.25a9 9 0 1 1 18 0 .75.75 0 0 0 1.5 0c0-5.799-4.701-10.5-10.5-10.5S1.5 17.451 1.5 23.25a.75.75 0 0 0 1.5 0"
                }))
            }
        },
        "814bd9d3": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0");
            const a = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "M10.439.75v1.5a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-1.5 0m0 7.5v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0m0 9v6a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-1.5 0m9.75-9.75h-16.5l.75.75v-6l-.75.75h16.5l-.53-.22 2.47 2.47-2.47 2.47zm0 1.5a.75.75 0 0 0 .53-.22l2.47-2.47a1.5 1.5 0 0 0 0-2.121l-2.47-2.47a.75.75 0 0 0-.53-.219h-16.5a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75zm-16.5 3h16.5l-.75-.75v6l.75-.75h-16.5l.53.22-2.469-2.47 2.47-2.47zm0-1.5a.75.75 0 0 0-.53.22l-2.47 2.469a1.5 1.5 0 0 0 0 2.121l2.47 2.47c.14.14.331.22.53.22h16.5a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75z"
                }))
            }
        },
        cb670354: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0");
            const a = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px",
                    "data-rtl-flip": "true"
                }, i.createElement("path", {
                    d: "M.75 4.5h16.34a3.5 3.5 0 1 0 0-1.5H.75a.75.75 0 0 0 0 1.5M20.5 1.75a2 2 0 1 1-2 2 2 2 0 0 1 2-2m2.75 17.75H9.46a3.5 3.5 0 0 0-6.83 0H.75a.75.75 0 0 0 0 1.5h1.88a3.5 3.5 0 0 0 6.83 0h13.79a.75.75 0 0 0 0-1.5m-17.2 2.75a2 2 0 1 1 2-2 2 2 0 0 1-2 2M23.25 11h-7.84a3.49 3.49 0 0 0-6.82 0H.75a.75.75 0 0 0 0 1.5h7.84a3.49 3.49 0 0 0 6.82 0h7.84a.75.75 0 0 0 0-1.5M12 13.75a2 2 0 1 1 2-2 2 2 0 0 1-2 2"
                }))
            }
        },
        a70d6b8e: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0");
            const a = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "m20.505 7.5-15.266.022.672.415-1.1-2.2a.75.75 0 0 0-.638-.414l-2.293-.1C.82 5.228-.003 6.06.003 7.083c.002.243.051.484.146.709l2.072 4.68a2.95 2.95 0 0 0 2.701 1.778h4.043l-.676-1.075-2.484 5.168A1.83 1.83 0 0 0 7.449 21h2.099a1.85 1.85 0 0 0 1.419-.664l5.165-6.363-.582.277h4.956c1.82.09 3.399-1.341 3.49-3.198l.004-.134a3.426 3.426 0 0 0-3.44-3.419l-.074.001zm.02 1.5h.042a1.924 1.924 0 0 1 1.933 1.914l-.002.065a1.866 1.866 0 0 1-1.955 1.772l-4.993-.001a.75.75 0 0 0-.582.277l-5.16 6.355a.35.35 0 0 1-.26.118h-2.1a.336.336 0 0 1-.3-.49l2.493-5.185a.75.75 0 0 0-.676-1.075H4.924a1.45 1.45 0 0 1-1.328-.878l-2.07-4.676a.35.35 0 0 1 .326-.474l2.255.1-.638-.415 1.1 2.2a.75.75 0 0 0 .672.415L20.507 9zm-4.202-1.24-2.992-4.02A1.85 1.85 0 0 0 11.85 3H9.783a1.85 1.85 0 0 0-1.654 2.672l1.439 2.91a.75.75 0 0 0 1.344-.664l-1.44-2.911a.35.35 0 0 1 .312-.507h2.066a.35.35 0 0 1 .279.14l2.99 4.017a.75.75 0 1 0 1.203-.896z"
                }))
            }
        },
        "0788da83": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => a
            });
            var i = n("ead71eb0");
            const a = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12m1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12M7.08 16.5a2.25 2.25 0 0 0 2.182-2.796l-.75-3A2.25 2.25 0 0 0 6.329 9H.976a.75.75 0 0 0-.735.6c-.9 4.42.755 8.97 4.284 11.779a.75.75 0 0 0 1.202-.44l1.008-5.042L6 16.5h1.079zM7.078 15H6a.75.75 0 0 0-.735.603l-1.008 5.042 1.202-.44A10.5 10.5 0 0 1 1.711 9.9l-.735.6h5.353a.75.75 0 0 1 .727.568l.75 3A.75.75 0 0 1 7.08 15zM20.985 4.5h-4.064a2.25 2.25 0 0 0-2.183 1.704l-.75 3A2.25 2.25 0 0 0 16.171 12h1.579l-.74-.627.791 4.75a2.25 2.25 0 0 0 2.22 1.88h1.925a.75.75 0 0 0 .663-.399 11.95 11.95 0 0 0-1.026-12.803l-.598.452h.75V5.25a.75.75 0 0 0-.75-.75m0 1.5v-.75h-.75v.003a.75.75 0 0 0 .152.452 10.45 10.45 0 0 1 .896 11.197l.663-.399h-1.925a.75.75 0 0 1-.74-.627l-.791-4.75a.75.75 0 0 0-.74-.626h-1.579a.75.75 0 0 1-.727-.932l.75-3A.75.75 0 0 1 16.92 6z"
                }))
            }
        },
        "8521b397": (e, t) => {
            var n;
            ! function() {
                "use strict";
                var i = {}.hasOwnProperty;

                function a() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        n && (e = s(e, r(n)))
                    }
                    return e
                }

                function r(e) {
                    if ("string" === typeof e || "number" === typeof e) return e;
                    if ("object" !== typeof e) return "";
                    if (Array.isArray(e)) return a.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                    var t = "";
                    for (var n in e) i.call(e, n) && e[n] && (t = s(t, n));
                    return t
                }

                function s(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (a.default = a, e.exports = a) : void 0 === (n = function() {
                    return a
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        "9a67ad93": (e, t, n) => {
            "use strict";
            n.d(t, {
                YD: () => E,
                df: () => m
            });
            var i = n("ead71eb0"),
                a = Object.defineProperty,
                r = (e, t, n) => (((e, t, n) => {
                    t in e ? a(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                })(e, "symbol" !== typeof t ? t + "" : t, n), n),
                s = new Map,
                l = new WeakMap,
                o = 0,
                d = void 0;

            function c(e) {
                return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                    return `${t}_${"root"===t?(n=e.root,n?(l.has(n)||(o+=1,l.set(n,o.toString())),l.get(n)):"0"):e[t]}`;
                    var n
                })).toString()
            }

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d;
                if ("undefined" === typeof window.IntersectionObserver && void 0 !== i) {
                    const a = e.getBoundingClientRect();
                    return t(i, {
                        isIntersecting: i,
                        target: e,
                        intersectionRatio: "number" === typeof n.threshold ? n.threshold : 0,
                        time: 0,
                        boundingClientRect: a,
                        intersectionRect: a,
                        rootBounds: a
                    }), () => {}
                }
                const {
                    id: a,
                    observer: r,
                    elements: l
                } = function(e) {
                    const t = c(e);
                    let n = s.get(t);
                    if (!n) {
                        const i = new Map;
                        let a;
                        const r = new IntersectionObserver((t => {
                            t.forEach((t => {
                                var n;
                                const r = t.isIntersecting && a.some((e => t.intersectionRatio >= e));
                                e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = r), null == (n = i.get(t.target)) || n.forEach((e => {
                                    e(r, t)
                                }))
                            }))
                        }), e);
                        a = r.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                            id: t,
                            observer: r,
                            elements: i
                        }, s.set(t, n)
                    }
                    return n
                }(n), o = l.get(e) || [];
                return l.has(e) || l.set(e, o), o.push(t), r.observe(e),
                    function() {
                        o.splice(o.indexOf(t), 1), 0 === o.length && (l.delete(e), r.unobserve(e)), 0 === l.size && (r.disconnect(), s.delete(a))
                    }
            }
            var m = class extends i.Component {
                constructor(e) {
                    super(e), r(this, "node", null), r(this, "_unobserveCb", null), r(this, "handleNode", (e => {
                        this.node && (this.unobserve(), e || this.props.triggerOnce || this.props.skip || this.setState({
                            inView: !!this.props.initialInView,
                            entry: void 0
                        })), this.node = e || null, this.observeNode()
                    })), r(this, "handleChange", ((e, t) => {
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
                        delay: a,
                        fallbackInView: r
                    } = this.props;
                    this._unobserveCb = u(this.node, this.handleChange, {
                        threshold: e,
                        root: t,
                        rootMargin: n,
                        trackVisibility: i,
                        delay: a
                    }, r)
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
                        threshold: a,
                        root: r,
                        rootMargin: s,
                        onChange: l,
                        skip: o,
                        trackVisibility: d,
                        delay: c,
                        initialInView: u,
                        fallbackInView: m,
                        ...E
                    } = this.props;
                    return i.createElement(t || "div", {
                        ref: this.handleNode,
                        ...E
                    }, e)
                }
            };

            function E() {
                let {
                    threshold: e,
                    delay: t,
                    trackVisibility: n,
                    rootMargin: a,
                    root: r,
                    triggerOnce: s,
                    skip: l,
                    initialInView: o,
                    fallbackInView: d,
                    onChange: c
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                var m;
                const [E, v] = i.useState(null), _ = i.useRef(), [N, g] = i.useState({
                    inView: !!o,
                    entry: void 0
                });
                _.current = c, i.useEffect((() => {
                    if (l || !E) return;
                    let i;
                    return i = u(E, ((e, t) => {
                        g({
                            inView: e,
                            entry: t
                        }), _.current && _.current(e, t), t.isIntersecting && s && i && (i(), i = void 0)
                    }), {
                        root: r,
                        rootMargin: a,
                        threshold: e,
                        trackVisibility: n,
                        delay: t
                    }, d), () => {
                        i && i()
                    }
                }), [Array.isArray(e) ? e.toString() : e, E, r, a, s, l, n, d, t]);
                const R = null == (m = N.entry) ? void 0 : m.target,
                    S = i.useRef();
                E || !R || s || l || S.current === R || (S.current = R, g({
                    inView: !!o,
                    entry: void 0
                }));
                const h = [v, N.inView, N.entry];
                return h.ref = h[0], h.inView = h[1], h.entry = h[2], h
            }
        }
    }
]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/5b1239aa.c0d7fcd0.chunk.js.map