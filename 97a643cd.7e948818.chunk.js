/*! For license information please see 97a643cd.7e948818.chunk.js.LICENSE.txt */
(self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] = self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] || []).push([
    ["97a643cd", "572dba2c", "1faad75c", "1d36ff76", "0df4acca"], {
        "77a90307": (e, t, n) => {
            "use strict";
            n.d(t, {
                C5: () => s,
                Wx: () => r,
                r8: () => i,
                sk: () => o
            });
            var a = n("dc6d28ff");
            const r = () => (0, a.getRequestContext)().getBPlatformEnvironment && "dqs" === (0, a.getRequestContext)().getBPlatformEnvironment(),
                i = () => (0, a.getRequestContext)().getBPlatformEnvironment && ("dev" === (0, a.getRequestContext)().getBPlatformEnvironment() || !(0, a.getRequestContext)().getBPlatformEnvironment());

            function s() {
                return "undefined" !== typeof window && "undefined" !== typeof window.document
            }

            function o() {
                return !s()
            }
        },
        af1e2b38: (e, t, n) => {
            "use strict";
            n.d(t, {
                NM: () => a.N,
                sv: () => i,
                Z6: () => s
            });
            var a = n("5245e060"),
                r = n("dc6d28ff");
            const i = () => (0, r.getRequestContext)().getSiteType() ? ? a.N.WWW,
                s = () => {
                    const e = i();
                    return {
                        isWWW: e === a.N.WWW,
                        isMDOT: e === a.N.MDOT,
                        isTDOT: e === a.N.TDOT
                    }
                }
        },
        c66f4a5f: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZK: () => i
            });
            n("41c6c66e");
            var a = n("77a90307");
            const r = () => (0, a.r8)() || (0, a.Wx)(),
                i = function() {
                    if (r()) {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        const r = [(0, a.sk)() ? "[Server Warning]" : "[JS Warning]", ...t];
                        console.warn.apply(undefined, r)
                    }
                }
        },
        "261e3243": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => ee
            });
            var a = n("ead71eb0"),
                r = n.n(a),
                i = n("8521b397"),
                s = n.n(i),
                o = n("9a67ad93"),
                c = n("af1e2b38"),
                l = n("6222292b"),
                d = n("dc6d28ff"),
                u = n("d1e54a96");
            const m = ["it", "es", "fr", "de", "gb"];
            var g = n("c44dcb0c");
            const h = "wcu_bh_banner-desktop",
                _ = "wcu_bh_banner_desktop--content",
                p = "wcu_bh_banner_desktop--button",
                v = "wcu_bh_banner-mobile",
                f = "wcu_bh_banner_mobile--content",
                b = "wcu_bh_banner_mobile--button",
                w = "ef0b7bb2bc",
                y = "e8cbc6aefd",
                E = "e5faf9174b",
                k = "b9857d0366",
                N = "ed63acb585",
                x = "e59f2a196f",
                C = "ca626ec590",
                S = "bb3ea02185",
                T = "e83d19ee87",
                B = "e20e230a2e",
                q = "f045480fcd",
                O = "f06d8447c3",
                I = "ffd6a84a4f",
                A = "cce26bf811",
                V = "c341a8089f",
                R = "a25e87d3dd",
                D = "ecc0a1242c",
                M = "cf0cde563e",
                L = "f5d75954ec",
                P = r().createElement("div", {
                    className: x
                }, r().createElement("ul", {
                    className: R
                }, r().createElement("li", {
                    className: D
                }, r().createElement("span", {
                    className: M
                }, r().createElement(g.Trans, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_apartments"
                }))), r().createElement("li", {
                    className: D
                }, r().createElement("span", {
                    className: M
                }, r().createElement(g.Trans, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_villas"
                }))), r().createElement("li", {
                    className: D
                }, r().createElement("span", {
                    className: M
                }, r().createElement(g.Trans, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_aparthotels"
                }))), r().createElement("li", {
                    className: D
                }, r().createElement("span", {
                    className: M
                }, r().createElement(g.Trans, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_holiday_homes"
                }))), r().createElement("li", {
                    className: D
                }, r().createElement("span", {
                    className: M
                }, r().createElement(g.Trans, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_cottages"
                }))), r().createElement("li", {
                    className: D
                }, r().createElement("span", {
                    className: M
                }, r().createElement(g.Trans, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_homes"
                }))), r().createElement("li", {
                    className: D
                }, r().createElement("span", {
                    className: M
                }, r().createElement(g.Trans, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_apartments"
                }))))),
                j = e => {
                    let {
                        userFirstName: t
                    } = e;
                    return r().createElement(r().Fragment, null, r().createElement("div", {
                        className: E
                    }), r().createElement("div", {
                        className: k
                    }, r().createElement(l.Text, {
                        variant: "headline_2",
                        className: N,
                        attributes: {
                            "data-testid": _
                        }
                    }, t ? r().createElement(g.Trans, {
                        tag: "bh_awareness_2_campaign_index_banner_name",
                        variables: {
                            first_name: t,
                            begin: "<0><1>",
                            end: "</1>",
                            property_types: "</1><2></2></0><1>"
                        },
                        components: ["div", "span", P]
                    }) : r().createElement(g.Trans, {
                        tag: "bh_awareness_2_campaign_index_banner",
                        variables: {
                            begin: "<0><1>",
                            end: "</1>",
                            property_types: "</1><2></2></0><1>"
                        },
                        components: ["div", "span", P]
                    })), r().createElement(l.Button, {
                        variant: "secondary",
                        className: C,
                        attributes: {
                            "data-testid": p
                        }
                    }, r().createElement(g.Trans, {
                        tag: "bh_awareness_2_campaign_index_banner_cta"
                    }))), r().createElement("div", {
                        className: S
                    }, r().createElement(l.Image, {
                        src: n("557ecd86")
                    })))
                },
                W = r().createElement("div", {
                    className: V
                }, r().createElement("ul", {
                    className: R
                }, r().createElement("li", {
                    className: D
                }, r().createElement("span", {
                    className: M
                }, r().createElement(g.Trans, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_apartments"
                }))), r().createElement("li", {
                    className: D
                }, r().createElement("span", {
                    className: M
                }, r().createElement(g.Trans, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_villas"
                }))), r().createElement("li", {
                    className: D
                }, r().createElement("span", {
                    className: M
                }, r().createElement(g.Trans, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_aparthotels"
                }))), r().createElement("li", {
                    className: D
                }, r().createElement("span", {
                    className: M
                }, r().createElement(g.Trans, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_holiday_homes"
                }))), r().createElement("li", {
                    className: D
                }, r().createElement("span", {
                    className: M
                }, r().createElement(g.Trans, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_cottages"
                }))), r().createElement("li", {
                    className: D
                }, r().createElement("span", {
                    className: M
                }, r().createElement(g.Trans, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_homes"
                }))), r().createElement("li", {
                    className: D
                }, r().createElement("span", {
                    className: M
                }, r().createElement(g.Trans, {
                    tag: "bh_awareness_2_campaign_index_banner_rotating_apartments"
                }))))),
                G = e => {
                    let {
                        userFirstName: t
                    } = e;
                    return r().createElement(r().Fragment, null, r().createElement(l.Image, {
                        src: n("557ecd86"),
                        className: q
                    }), r().createElement("div", {
                        className: O
                    }, r().createElement(l.Text, {
                        variant: "strong_1",
                        className: I,
                        attributes: {
                            "data-testid": f
                        }
                    }, t ? r().createElement(g.Trans, {
                        tag: "bh_awareness_2_campaign_index_banner_name",
                        variables: {
                            first_name: t,
                            begin: "<0>",
                            end: "</1>",
                            property_types: " </0><2></2><1>"
                        },
                        components: ["div", "div", W]
                    }) : r().createElement(g.Trans, {
                        tag: "bh_awareness_2_campaign_index_banner",
                        variables: {
                            begin: "<0>",
                            end: "</1>",
                            property_types: " </0><2></2><1>"
                        },
                        components: ["div", "div", W]
                    })), r().createElement(l.Button, {
                        variant: "secondary",
                        className: A,
                        size: "medium",
                        attributes: {
                            "data-testid": b
                        }
                    }, r().createElement(g.Trans, {
                        tag: "bh_awareness_2_campaign_index_banner_cta"
                    }))))
                };
            var F = n("28dbd132"),
                Z = n("4933a3e7"),
                z = n("8ebac256");
            const U = (e, t) => {
                    (0, Z.z)("Generic Banner on render", {
                        campaignId: e
                    });
                    var n;
                    n = {
                        campaign_id: e,
                        design_variant: e,
                        banner_action: [{
                            action_index: 0,
                            action_url: t,
                            action_text: "Discover Homes",
                            action_type: "CTA_redirect"
                        }]
                    }, z.Z.sendEvent({
                        action_name: "webcoreux.generic_banner_served",
                        action_version: "1.0.0",
                        content: n
                    })
                },
                Q = (e, t, n, a, r, i, s) => {
                    X(n, a, r, i, s), t || ((0, Z.z)("Generic Banner on view", {
                        campaignId: e
                    }), (e => {
                        z.Z.sendEvent({
                            action_name: "webcoreux.generic_banner_viewed",
                            action_version: "1.0.0",
                            content: {
                                campaign_id: e
                            }
                        })
                    })(e))
                },
                H = (e, t) => {
                    (0, Z.z)("Generic Banner body click", {
                        campaignId: e
                    }), t ? (0, F.trackGoal)("mdot_discover_home_banner_click") : (0, F.trackGoal)("www_discover_home_banner_click"), ((e, t) => {
                        z.Z.sendEvent({
                            action_name: "webcoreux.generic_banner_action_clicked",
                            action_version: "1.0.0",
                            content: {
                                campaign_id: e,
                                action_index: t
                            }
                        })
                    })(e, 0), (0, F.trackCustomGoal)(F.exp `ZOBOSTFZGQDaRNFOSeDVCMIRe`, 1)
                },
                X = (e, t, n, a, r) => {
                    const i = F.exp `ZOBOSTFZGQDaRNFOSeDVCMIRe`;
                    (0, F.trackExperimentStage)(i, 1), e && (0, F.trackExperimentStage)(i, 2), t && (0, F.trackExperimentStage)(i, 3), n && (0, F.trackExperimentStage)(i, 4), a && (0, F.trackExperimentStage)(i, 5), r && (0, F.trackExperimentStage)(i, 6)
                };
            var $ = n("52ffbfd1"),
                J = n("d8fa2ba4"),
                K = n("8e166592"),
                Y = n("c23d1bb3");
            const ee = () => {
                var e;
                const t = "booking_home",
                    {
                        isMDOT: n,
                        isWWW: i
                    } = (0, c.Z6)(),
                    g = (0, d.getRequestContext)().getVisitorCountry() ? ? "",
                    _ = (0, d.getRequestContext)().getLanguage(),
                    p = (0, u.constructUrl)({
                        pathname: `/booking-home/index.${_}.html`
                    }).toString(),
                    f = null === (e = (0, J.Y)()) || void 0 === e ? void 0 : e.firstname;
                (0, K.dg)(), (0, a.useEffect)((() => {
                    U(t, p)
                }), [p]);
                const b = n && (0, $.W$)() ? Y.Z : l.Card;
                return r().createElement(o.df, {
                    triggerOnce: !0,
                    onChange: e => e && Q(t, !1, i, n, "us" === g.toLowerCase(), (e => m.includes(e.toLowerCase()))(g), (e => "au" === e.toLowerCase())(g))
                }, r().createElement(b, {
                    className: s()({
                        [w]: !n,
                        [T]: n,
                        [L]: (0, $.XA)()
                    }),
                    fill: !0,
                    attributes: {
                        "data-testid": n ? v : h
                    }
                }, r().createElement(l.Actionable, {
                    className: n ? B : y,
                    href: p,
                    attributes: {
                        target: "_isblank"
                    },
                    onClick: () => H(t, n)
                }, n ? r().createElement(G, {
                    userFirstName: f
                }) : r().createElement(j, {
                    userFirstName: f
                }))))
            }
        },
        c23d1bb3: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => o
            });
            var a = n("3d054e81"),
                r = n("ead71eb0"),
                i = n.n(r),
                s = n("6222292b");
            const o = e => {
                let {
                    attributes: t,
                    ...n
                } = e;
                const r = { ...t,
                    style: { ...null === t || void 0 === t ? void 0 : t.style,
                        borderRadius: 0
                    }
                };
                return i().createElement(s.Card, (0, a.Z)({}, n, {
                    attributes: r
                }))
            }
        },
        "52ffbfd1": (e, t, n) => {
            "use strict";
            n.d(t, {
                Bb: () => g,
                W$: () => o,
                XA: () => l,
                Y$: () => c,
                _0: () => m,
                zz: () => u
            });
            var a = n("af1e2b38"),
                r = n("28dbd132");
            const i = r.exp `OABBaJcBHQQWcGHVHNEIMUKVBBVYYT`,
                s = r.exp `OABBaJcBHQQWcGHVHNEIMUKALOLOLMO`,
                o = () => (0, r.trackExperiment)(i) > 0,
                c = () => (0, r.trackExperiment)(s) > 0,
                l = () => {
                    const {
                        isMDOT: e
                    } = (0, a.Z6)();
                    return e ? o() : c()
                },
                d = () => {
                    const {
                        isMDOT: e
                    } = (0, a.Z6)();
                    return e ? i : s
                },
                u = () => {
                    (0, r.trackCustomGoal)(d(), 1)
                },
                m = () => {
                    (0, r.trackCustomGoal)(d(), 2)
                },
                g = () => {
                    if ("undefined" === typeof window || "undefined" === typeof document) return;
                    const e = "js_index_queenmab_rendered_components_count",
                        t = l();
                    setTimeout((function() {
                        t ? n() : a()
                    }), 5e3);
                    const n = () => {
                            const t = Array.from(document.querySelectorAll("[data-widgetid]")).map((e => {
                                var t;
                                return (null === e || void 0 === e || null === (t = e.textContent) || void 0 === t ? void 0 : t.trim()) || ""
                            })).filter((e => e.length > 0)).length;
                            (0, r.trackGoalWithValue)(e, t)
                        },
                        a = () => {
                            const t = Array.from(document.querySelectorAll("[data-qmab-component-id]")).map((e => {
                                var t;
                                return (null === e || void 0 === e || null === (t = e.textContent) || void 0 === t ? void 0 : t.trim()) || ""
                            })).filter((e => e.length > 0)).length;
                            (0, r.trackGoalWithValue)(e, t)
                        }
                }
        },
        d8fa2ba4: (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => m
            });
            var a = n("dc6d28ff"),
                r = n("41c6c66e"),
                i = n("cedcabf9");
            const s = {},
                o = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "GeniusGuestData"
                        },
                        variableDefinitions: [],
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
                                            value: "userInfo"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "firstname"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "level"
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
                        end: 116,
                        source: {
                            body: "\n  query GeniusGuestData {\n    geniusGuestData {\n      userInfo {\n        firstname\n        level\n      }\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            var c = n("2bb3685b"),
                l = n("4933a3e7"),
                d = n("e36d8828"),
                u = n("5db8920d");
            const m = () => {
                var e;
                const t = (0, a.getRequestContext)(),
                    n = (0, d.Tz)(),
                    m = null === (e = t.getBasePageUrl()) || void 0 === e || null === (e = e.searchParams) || void 0 === e ? void 0 : e.get(c.q$),
                    {
                        error: g,
                        loading: h,
                        data: _
                    } = function(e) {
                        const t = { ...s,
                            ...e
                        };
                        return i.useQuery(o, t)
                    }({
                        skip: n,
                        context: {
                            headers: { ...(0, u.l)(!0)
                            }
                        }
                    });
                return (0, l.z)("Response for genius guest data query ", {
                    error: g,
                    loading: h,
                    data: _
                }), m && console.log("Response for genius user name query ", JSON.stringify({
                    error: g,
                    loading: h,
                    data: _
                })), h || _ || n || (0, r.reportWarning)("No result for genius guest data query"), g && (0, r.reportError)(g), null === _ || void 0 === _ ? void 0 : _.geniusGuestData.userInfo
            }
        },
        "3d486da1": (e, t, n) => {
            "use strict";
            n.d(t, {
                D6: () => h,
                YV: () => g,
                al: () => m,
                Ie: () => u,
                dU: () => d
            });
            var a = n("dc6d28ff"),
                r = n("c44dcb0c");
            const i = {
                    ar: 1,
                    bg: 1,
                    en: 1,
                    "en-gb": 1,
                    "en-us": 1,
                    "es-mx": 1,
                    he: 1,
                    ja: 1,
                    ko: 1,
                    ms: 1,
                    th: 1,
                    tl: 1,
                    zh: 1,
                    "zh-cn": 1,
                    "zh-tw": 1
                },
                s = {
                    bg: 1,
                    cs: 1,
                    et: 1,
                    fi: 1,
                    fr: 1,
                    hu: 1,
                    lv: 1,
                    lt: 1,
                    no: 1,
                    pl: 1,
                    "pt-pt": 1,
                    ru: 1,
                    sk: 1,
                    sr: 1,
                    sv: 1,
                    uk: 1
                },
                o = /(\d)(?=(\d{3})+(?!\d))/g;

            function c(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                if (isNaN(e)) return "";
                const a = t in i,
                    r = a ? "." : ",";
                let c = a ? "," : ".";
                t in s && (c = " ");
                const l = Math.pow(10, n),
                    d = (Math.round(e * l) / l).toFixed(n),
                    u = d.split(".")[0],
                    m = d.split(".")[1];
                return u.replace(o, `$1${c}`) + (m ? r + m : "")
            }
            const l = e => {
                    const t = [{
                        from: null,
                        to: 3,
                        copy: (0, r.t)("review_adj_very_poor")
                    }, {
                        from: 3,
                        to: 4,
                        copy: (0, r.t)("review_adj_poor")
                    }, {
                        from: 4,
                        to: 5,
                        copy: (0, r.t)("review_adj_disappointing")
                    }, {
                        from: 5,
                        to: 5.6,
                        copy: (0, r.t)("review_adj_average")
                    }, {
                        from: 5.6,
                        to: 6,
                        copy: (0, r.t)("review_adj_above_average")
                    }, {
                        from: 6,
                        to: 7,
                        copy: (0, r.t)("review_adj_pleasant")
                    }, {
                        from: 7,
                        to: 8,
                        copy: (0, r.t)("review_adj_good")
                    }, {
                        from: 8,
                        to: 8.6,
                        copy: (0, r.t)("review_adj_very_good")
                    }, {
                        from: 8.6,
                        to: 9,
                        copy: (0, r.t)("review_adj_fabulous")
                    }, {
                        from: 9,
                        to: 9.5,
                        copy: (0, r.t)("review_adj_superb")
                    }, {
                        from: 9.5,
                        to: null,
                        copy: (0, r.t)("review_adj_exceptional")
                    }];
                    for (const n of t)
                        if (!(n.from && n.from > e) && !(n.to && n.to <= e)) return {
                            ratingAdjective: n.copy
                        };
                    throw new Error("score range is missed")
                },
                d = () => {
                    const e = (0, a.getRequestContext)().getBPlatformEnvironment();
                    return e && "dev" !== e && "dqs" !== e ? "prod" : "dqs"
                },
                u = (e, t, n) => {
                    if (void 0 !== t && void 0 !== n) return {
                        score: t.toFixed(1),
                        rating: e.trans(l(t).ratingAdjective),
                        reviewCount: e.trans((0, r.t)("num_reviews_sr_page", {
                            variables: {
                                num_reviews: c(n, e.language),
                                num_exception: n || ""
                            }
                        }))
                    }
                },
                m = e => ({
                    formattedScore: (null === e || void 0 === e ? void 0 : e.score) || "",
                    formattedReviewCount: null === e || void 0 === e ? void 0 : e.reviewCount,
                    rating: (null === e || void 0 === e ? void 0 : e.rating) || "",
                    ariaLabel: (null === e || void 0 === e ? void 0 : e.score) || "",
                    ratingReviewAriaLabel: (null === e || void 0 === e ? void 0 : e.rating) || ""
                }),
                g = (e, t) => {
                    if (e) return {
                        text: t.trans((0, r.t)("m_sr_distance_from_centre", {
                            variables: {
                                distanceInKmFromCentre: e
                            }
                        })) || "",
                        iconName: "GeoPinIcon"
                    }
                },
                h = e => [null === e || void 0 === e ? void 0 : e.translatedCityName, null === e || void 0 === e ? void 0 : e.translatedDistrictName].filter(Boolean).join(", ") || ""
        },
        "2bb3685b": (e, t, n) => {
            "use strict";
            n.d(t, {
                Jv: () => s,
                gh: () => i,
                nh: () => a,
                q$: () => r
            });
            const a = "b_merch_test_campaign_id",
                r = "b_genius_data_debug",
                i = ["b-webcore-transactional-content-service", "b-merch-platform-campaign-serving-api"],
                s = {
                    threshold: .2,
                    triggerOnce: !0
                }
        },
        "4933a3e7": (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => s,
                z: () => r
            });
            var a = n("dc6d28ff");
            const r = function() {
                const e = (0, a.getRequestContext)(),
                    t = e.getBPlatformEnvironment(),
                    n = e.getBasePageUrl(),
                    r = e.isInternalUser() && "1" === n.searchParams.get("debug");
                if ((!t || "dev" === t || "dqs" === t) && r) {
                    for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++) s[o] = arguments[o];
                    console.log(s)
                }
            };
            let i;

            function s(e, t, n) {
                const r = (0, a.getRequestContext)(),
                    s = r.getBasePageUrl();
                r.isInternalUser() && "1" === s.searchParams.get("debug_merch") && null !== e && void 0 !== e && e.merchComponents && e !== i && (console.groupCollapsed("Merch Platform debug info"), console.log("Merch Platform request variables:", t), console.log("Merch Platform response data:", e), console.log("Metadata:", n), console.groupEnd(), i = e)
            }
        },
        e36d8828: (e, t, n) => {
            "use strict";
            n.d(t, {
                CR: () => o,
                Tz: () => c,
                jl: () => s
            });
            var a = n("43a4d203"),
                r = n("dc6d28ff");
            const i = () => (0, r.getRequestContext)().getUnpackedGuestAccessToken(),
                s = () => {
                    var e;
                    const t = null === (e = i()) || void 0 === e ? void 0 : e.authenticatorAssuranceLevel;
                    return !!t && t >= a.AuthenticatorAssuranceLevel.AAL1
                },
                o = () => {
                    var e;
                    return !(null === (e = i()) || void 0 === e || !e.isMarketingTrackingAllowed)
                },
                c = () => !s()
        },
        "5db8920d": (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => r
            });
            var a = n("3d486da1");
            const r = function() {
                let e = arguments.length > 1 ? arguments[1] : void 0;
                const t = "dqs" === (0, a.dU)() ? 3e4 : 1500;
                return {
                    "X-Booking-Timeout-Ms": e ? ? t,
                    "X-Envoy-Expected-Rq-Timeout-Ms": e ? ? t,
                    "X-Booking-Timeout-Budget-Ms": e ? ? t
                }
            }
        },
        "8e166592": (e, t, n) => {
            "use strict";
            n.d(t, {
                dg: () => s,
                ke: () => o,
                uo: () => c
            });
            var a = n("c66f4a5f"),
                r = n("8ebac256"),
                i = n("dc6d28ff");
            const s = () => {
                var e;
                if ("undefined" === typeof window) return;
                const t = (0, i.getRequestContext)(),
                    n = t.getBPlatformEnvironment(),
                    a = t.getSiteType(),
                    s = String(null === (e = t.getAffiliate()) || void 0 === e ? void 0 : e.id),
                    o = {
                        lang: t.getLanguage(),
                        aid: isNaN(Number(s)) ? void 0 : s,
                        isDev: !n || "dev" === n || "dqs" === n,
                        pageviewId: t.getPageviewId(),
                        platform: null === a || void 0 === a ? void 0 : a.toLowerCase()
                    };
                r.Z.init(o)
            };
            let o = function(e) {
                return e.Click = "CLICK", e.View = "VIEW", e
            }({});
            const c = (e, t) => {
                var n;
                if (!t) return;
                const i = null === (n = t.c360Actions) || void 0 === n ? void 0 : n.find((t => (null === t || void 0 === t ? void 0 : t.actionType) === e));
                if (!i) return;
                let s = {};
                try {
                    s = JSON.parse(i.content)
                } catch (o) {
                    return void(0, a.ZK)("content in C360 tracking action is not a valid JSON")
                }
                r.Z.sendEvent({
                    action_name: i.actionName,
                    action_version: i.actionVersion,
                    content: s
                })
            }
        },
        "8ebac256": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });

            function a(e, t, n, a) {
                return new(n || (n = Promise))((function(r, i) {
                    function s(e) {
                        try {
                            c(a.next(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function o(e) {
                        try {
                            c(a.throw(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, o)
                    }
                    c((a = a.apply(e, t || [])).next())
                }))
            }
            Object.create;
            Object.create;
            class r {
                constructor(e) {
                    this.config = e, this.headers = this.config.API.HEADERS
                }
                get(e, t) {
                    return new Promise(((n, r) => a(this, void 0, void 0, (function*() {
                        try {
                            const a = yield fetch(e, {
                                method: "GET",
                                headers: (null === t || void 0 === t ? void 0 : t.withHeaders) ? this.headers : void 0,
                                credentials: !1 === (null === t || void 0 === t ? void 0 : t.withCredentials) ? "omit" : "include"
                            }), r = yield a.text();
                            n(r ? JSON.parse(r) : null)
                        } catch (a) {
                            return r(a)
                        }
                    }))))
                }
                post(e, t, n) {
                    return new Promise(((r, i) => a(this, void 0, void 0, (function*() {
                        try {
                            const a = yield fetch(e, {
                                method: "POST",
                                headers: (null === n || void 0 === n ? void 0 : n.withHeaders) ? this.headers : void 0,
                                credentials: !1 === (null === n || void 0 === n ? void 0 : n.withCredentials) ? "omit" : "include",
                                body: JSON.stringify(t)
                            }), i = yield a.text();
                            r(i ? JSON.parse(i) : null)
                        } catch (a) {
                            return i(a)
                        }
                    }))))
                }
            }
            var i = new class {
                init(e) {
                    this.client = new r(e)
                }
                get(e) {
                    return a(this, void 0, void 0, (function*() {
                        return this.client.get(e)
                    }))
                }
                post(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return a(this, void 0, void 0, (function*() {
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
            class o {
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
            const c = new class {
                constructor() {
                    this.trackBatch = e => a(this, void 0, void 0, (function*() {
                        this.track({
                            events: e.map((e => function(e, t, n) {
                                const a = {
                                    local: {
                                        currency: t.currency,
                                        language: t.language
                                    },
                                    page: {},
                                    web: {}
                                };
                                "undefined" != typeof window && (a.page = {
                                    page_referrer: document.referrer,
                                    page_url: window.location.href,
                                    page_title: document.title
                                }, a.web = {
                                    browser_language: window.navigator.language
                                });
                                const r = {
                                    tracker_name: "C360ReactTracker",
                                    tracker_type: "Client",
                                    tracker_version: "0.1.0"
                                };
                                return n && (r.tracker_version = "0.1.1"), Object.assign(Object.assign({}, e), {
                                    context: a,
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
                                HEADERS: s(e)
                            },
                            TRACK_BASE_URL: `https://${t}/c360/v1/track`,
                            language: e.lang,
                            currency: e.currency
                        }
                    })(e), this.httpClient = i, this.c360url = this.c360Config.TRACK_BASE_URL, this.props = e, this.batchQueue = this.batchQueue || new o(10, 1e3, this.trackBatch), i.init(this.c360Config)
                }
                track(e) {
                    return a(this, void 0, void 0, (function*() {
                        this.httpClient.post(this.c360url, e, {
                            withHeaders: !0
                        }).catch((e => {
                            this.props.onErrorCallback && this.props.onErrorCallback(new Error(e))
                        }))
                    }))
                }
                sendEvent(e, t) {
                    return a(this, void 0, void 0, (function*() {
                        this.batchQueue.enqueue(e), t && this.batchQueue.flush()
                    }))
                }
            }
        },
        "557ecd86": (e, t, n) => {
            "use strict";
            e.exports = n.p + "static/media/bh_aw_cpg_main_image.ae847bb6.png"
        },
        "8521b397": (e, t) => {
            var n;
            ! function() {
                "use strict";
                var a = {}.hasOwnProperty;

                function r() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        n && (e = s(e, i(n)))
                    }
                    return e
                }

                function i(e) {
                    if ("string" === typeof e || "number" === typeof e) return e;
                    if ("object" !== typeof e) return "";
                    if (Array.isArray(e)) return r.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                    var t = "";
                    for (var n in e) a.call(e, n) && e[n] && (t = s(t, n));
                    return t
                }

                function s(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (r.default = r, e.exports = r) : void 0 === (n = function() {
                    return r
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        "9a67ad93": (e, t, n) => {
            "use strict";
            n.d(t, {
                YD: () => g,
                df: () => m
            });
            var a = n("ead71eb0"),
                r = Object.defineProperty,
                i = (e, t, n) => (((e, t, n) => {
                    t in e ? r(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                })(e, "symbol" !== typeof t ? t + "" : t, n), n),
                s = new Map,
                o = new WeakMap,
                c = 0,
                l = void 0;

            function d(e) {
                return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                    return `${t}_${"root"===t?(n=e.root,n?(o.has(n)||(c+=1,o.set(n,c.toString())),o.get(n)):"0"):e[t]}`;
                    var n
                })).toString()
            }

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l;
                if ("undefined" === typeof window.IntersectionObserver && void 0 !== a) {
                    const r = e.getBoundingClientRect();
                    return t(a, {
                        isIntersecting: a,
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
                    observer: i,
                    elements: o
                } = function(e) {
                    const t = d(e);
                    let n = s.get(t);
                    if (!n) {
                        const a = new Map;
                        let r;
                        const i = new IntersectionObserver((t => {
                            t.forEach((t => {
                                var n;
                                const i = t.isIntersecting && r.some((e => t.intersectionRatio >= e));
                                e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = i), null == (n = a.get(t.target)) || n.forEach((e => {
                                    e(i, t)
                                }))
                            }))
                        }), e);
                        r = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                            id: t,
                            observer: i,
                            elements: a
                        }, s.set(t, n)
                    }
                    return n
                }(n), c = o.get(e) || [];
                return o.has(e) || o.set(e, c), c.push(t), i.observe(e),
                    function() {
                        c.splice(c.indexOf(t), 1), 0 === c.length && (o.delete(e), i.unobserve(e)), 0 === o.size && (i.disconnect(), s.delete(r))
                    }
            }
            var m = class extends a.Component {
                constructor(e) {
                    super(e), i(this, "node", null), i(this, "_unobserveCb", null), i(this, "handleNode", (e => {
                        this.node && (this.unobserve(), e || this.props.triggerOnce || this.props.skip || this.setState({
                            inView: !!this.props.initialInView,
                            entry: void 0
                        })), this.node = e || null, this.observeNode()
                    })), i(this, "handleChange", ((e, t) => {
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
                        trackVisibility: a,
                        delay: r,
                        fallbackInView: i
                    } = this.props;
                    this._unobserveCb = u(this.node, this.handleChange, {
                        threshold: e,
                        root: t,
                        rootMargin: n,
                        trackVisibility: a,
                        delay: r
                    }, i)
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
                        root: i,
                        rootMargin: s,
                        onChange: o,
                        skip: c,
                        trackVisibility: l,
                        delay: d,
                        initialInView: u,
                        fallbackInView: m,
                        ...g
                    } = this.props;
                    return a.createElement(t || "div", {
                        ref: this.handleNode,
                        ...g
                    }, e)
                }
            };

            function g() {
                let {
                    threshold: e,
                    delay: t,
                    trackVisibility: n,
                    rootMargin: r,
                    root: i,
                    triggerOnce: s,
                    skip: o,
                    initialInView: c,
                    fallbackInView: l,
                    onChange: d
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                var m;
                const [g, h] = a.useState(null), _ = a.useRef(), [p, v] = a.useState({
                    inView: !!c,
                    entry: void 0
                });
                _.current = d, a.useEffect((() => {
                    if (o || !g) return;
                    let a;
                    return a = u(g, ((e, t) => {
                        v({
                            inView: e,
                            entry: t
                        }), _.current && _.current(e, t), t.isIntersecting && s && a && (a(), a = void 0)
                    }), {
                        root: i,
                        rootMargin: r,
                        threshold: e,
                        trackVisibility: n,
                        delay: t
                    }, l), () => {
                        a && a()
                    }
                }), [Array.isArray(e) ? e.toString() : e, g, i, r, s, o, n, l, t]);
                const f = null == (m = p.entry) ? void 0 : m.target,
                    b = a.useRef();
                g || !f || s || o || b.current === f || (b.current = f, v({
                    inView: !!c,
                    entry: void 0
                }));
                const w = [h, p.inView, p.entry];
                return w.ref = w[0], w.inView = w[1], w.entry = w[2], w
            }
        }
    }
]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/97a643cd.7e948818.chunk.js.map