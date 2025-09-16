"use strict";
(self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] = self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] || []).push([
    ["2f19556a"], {
        bfa30f11: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            var a = n("d16e9636"),
                i = n.n(a);
            const r = (0, a.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bIndexLpWebMfe-GenericCarouselComponent"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e("782ad794").then(n.bind(n, "5e570cdb")),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "5e570cdb"
                    }
                }),
                o = (0, a.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bIndexLpWebMfe-GenericCarouselWithoutFilters"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e("c1da76b9").then(n.bind(n, "3c4cb0d2")),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "3c4cb0d2"
                    }
                })
        },
        ddd7e1e7: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => K
            });
            var a = n("3d054e81"),
                i = n("ead71eb0"),
                r = n.n(i),
                o = n("8521b397"),
                l = n.n(o),
                c = n("9a67ad93");
            const s = n("bfa30f11").Z;
            var d = n("f3c8bee5"),
                m = n("6222292b"),
                u = n("5cb0d6cc"),
                v = n("dc6d28ff"),
                k = n("c44dcb0c");
            let g = function(e) {
                    return e.GOOD = "GOOD", e.VERY_GOOD = "VERY_GOOD", e.WONDERFUL = "WONDERFUL", e.EXCEPTIONAL = "EXCEPTIONAL", e
                }({}),
                p = function(e) {
                    return e[e.GOOD = 3.5] = "GOOD", e[e.VERY_GOOD = 4] = "VERY_GOOD", e[e.WONDERFUL = 4.4] = "WONDERFUL", e[e.EXCEPTIONAL = 4.7] = "EXCEPTIONAL", e
                }({});
            const _ = "d4b31b7601",
                f = e => {
                    let {
                        score: t,
                        count: n
                    } = e;
                    if (n < 5 || t < 3.5) return null;
                    const a = (0, v.getRequestContext)().getLanguage() || k.SupportedLocales["en-gb"],
                        i = new Intl.NumberFormat(a, {
                            maximumSignificantDigits: 2
                        }).format(t),
                        o = (l = (e => !e || e < p.GOOD ? null : e >= p.EXCEPTIONAL ? g.EXCEPTIONAL : e >= p.WONDERFUL ? g.WONDERFUL : e >= p.VERY_GOOD ? g.VERY_GOOD : g.GOOD)(t), l ? {
                            [g.GOOD]: r().createElement(k.Trans, {
                                tag: "attractions_product_review_score_adjectives_good"
                            }),
                            [g.VERY_GOOD]: r().createElement(k.Trans, {
                                tag: "attractions_product_review_score_adjectives_very_good"
                            }),
                            [g.WONDERFUL]: r().createElement(k.Trans, {
                                tag: "attractions_product_review_score_adjectives_wonderful"
                            }),
                            [g.EXCEPTIONAL]: r().createElement(k.Trans, {
                                tag: "attractions_product_review_score_adjectives_exceptional"
                            })
                        }[l] : null);
                    var l;
                    return r().createElement(m.Stack, {
                        gap: 2,
                        direction: "row",
                        alignItems: "center"
                    }, r().createElement(m.Icon, {
                        svg: u.default,
                        size: "smaller",
                        color: "brand_genius_secondary"
                    }), r().createElement(m.Stack, {
                        direction: "row",
                        gap: 0
                    }, r().createElement(m.Text, {
                        variant: "small_1",
                        color: "neutral"
                    }, r().createElement("span", null, i), " \xb7 ", o, " \xb7\xa0"), r().createElement(m.Text, {
                        className: _,
                        variant: "small_1"
                    }, r().createElement(k.Trans, {
                        tag: "num_reviews_sr_page",
                        variables: {
                            num_reviews: n
                        },
                        num_exception: n
                    }))))
                };
            var N = n("6229d898"),
                b = n("633e4f6b"),
                E = n("6356c4a8"),
                S = n("c91f1a4c");
            const C = "d94b3acc36",
                F = "d933b2ecd8",
                O = "dc9c7fea0e",
                I = "e10ece1559",
                h = "b0f0506d7f",
                A = "c228134e4d",
                x = e => {
                    let {
                        title: t,
                        subTitle: n,
                        caption: o,
                        priceText: l,
                        priceTextDirection: s = "column",
                        titleLineClamp: d = 2,
                        url: u,
                        img: v,
                        formattedPrice: k,
                        id: g,
                        itemIndex: p,
                        aspectRatio: _,
                        isElevated: x = !1,
                        onClickHandler: y,
                        onViewHandler: D,
                        onImageErrorHandler: R,
                        onClickOpenInSameTab: T = !1,
                        attractionScore: L,
                        attractionScoreCount: w,
                        footerIcon: U,
                        footerText: G,
                        footerCTAs: P = []
                    } = e;
                    const [V, W] = (0, c.YD)({
                        threshold: 0,
                        triggerOnce: !0
                    });
                    (0, i.useEffect)((() => {
                        W && D && D(g, p)
                    }), [W]);
                    const M = [...G ? [{
                        icon: U,
                        text: G
                    }] : [], ...P];
                    return r().createElement(m.Card, {
                        variant: x ? "elevated" : "neutral",
                        fill: !0,
                        className: C
                    }, r().createElement(m.Actionable, {
                        href: u,
                        ref: V,
                        className: F,
                        onClick: e => {
                            y && y(g, p, e)
                        },
                        attributes: {
                            target: T ? "" : "_blank",
                            "data-testid": S.AU
                        }
                    }, r().createElement(m.AspectRatio, {
                        ratio: _ || E.vr,
                        attributes: {
                            "data-testid": S.Yq
                        }
                    }, r().createElement(m.Image, (0, a.Z)({}, v, {
                        fallback: "icon",
                        fallbackIcon: (0, N.uI)(null === v || void 0 === v ? void 0 : v.imageType),
                        onError: () => {
                            R && R(g, p)
                        }
                    }))), r().createElement(m.Stack, {
                        justifyContent: "space-between",
                        className: O
                    }, r().createElement(m.Stack, {
                        gap: 0
                    }, o && r().createElement(m.Text, {
                        variant: "small_1",
                        color: "neutral",
                        className: h
                    }, o), r().createElement(m.Title, {
                        className: I,
                        variant: "strong_1",
                        title: t,
                        titleAttributes: {
                            "data-testid": S.kr
                        },
                        attributes: {
                            style: {
                                WebkitLineClamp: d
                            }
                        }
                    }), n && r().createElement(m.Text, {
                        variant: "small_1",
                        className: I,
                        color: "neutral"
                    }, n), L && w && r().createElement(f, {
                        score: L,
                        count: w
                    })), k && r().createElement(m.Stack, {
                        alignItems: "column" === s ? "end" : "center",
                        justifyContent: "end",
                        gap: 1,
                        direction: s,
                        attributes: {
                            "data-testid": S.tt
                        }
                    }, l && r().createElement(m.Text, {
                        variant: "small_1",
                        color: "neutral_alt",
                        className: A
                    }, l), r().createElement(m.Text, {
                        variant: "strong_1",
                        color: "neutral",
                        attributes: {
                            "data-testid": S.Qc
                        }
                    }, k))), M.length > 0 && r().createElement(b.o, null, r().createElement(b.I, {
                        footerCTAs: M
                    }))))
                };
            var y = n("3ed3b648"),
                D = n("28dbd132"),
                R = n("9f43804b"),
                T = n("1f177249");
            const L = e => {
                    let {
                        i18n: t,
                        priceFormatted: n,
                        item: a
                    } = e;
                    return n ? { ...a,
                        priceText: t.trans((0, k.t)("m_sr_autoextend_carousel_starting_from")),
                        formattedPrice: n,
                        priceTextDirection: "row",
                        titleLineClamp: 3
                    } : { ...a,
                        titleLineClamp: 3
                    }
                },
                w = e => {
                    let {
                        i18n: t,
                        priceFormatted: n,
                        item: a
                    } = e;
                    return n ? { ...a,
                        price: {
                            priceText: t.trans((0, k.t)("m_sr_autoextend_carousel_starting_from")),
                            priceFormatted: n
                        }
                    } : a
                };
            var U = n("cedcabf9");
            const G = {},
                P = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "MvRexWebRecPlatformAttractionCards"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "attractionCardsInput"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "AttractionCardsInput"
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
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "attractionCards"
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
                                                    value: "attractionCardsInput"
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
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "shortDescription"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "freeCancellation"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "linksInfo"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "searchResultsUrl"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "deepLink"
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
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "locationInfo"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "ufi"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "locationName"
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
                                                                    value: "countryName"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "locationInName"
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
                                                                    value: "smallUrl"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "mediumUrl"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "largeUrl"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "priceInfo"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "minPriceBeforeDiscount"
                                                                },
                                                                arguments: [],
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
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "currency"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "amount"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "minPrice"
                                                                },
                                                                arguments: [],
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
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "currency"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "amount"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "ratingInfo"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "starRating"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "starRatingCount"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "trackingActions"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "c360Actions"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "actionName"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "actionVersion"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "actionType"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "content"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
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
                                                    value: "searchResultsUrl"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "trackingActions"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "c360Actions"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "actionName"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "actionVersion"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "actionType"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "content"
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
                        end: 1362,
                        source: {
                            body: "\n  query MvRexWebRecPlatformAttractionCards(\n    $attractionCardsInput: AttractionCardsInput!\n  ) {\n    recommendationPlatform {\n      attractionCards(input: $attractionCardsInput) {\n        recommendations {\n          name\n          shortDescription\n          freeCancellation\n          linksInfo {\n            searchResultsUrl\n            deepLink\n            url\n          }\n          locationInfo {\n            ufi\n            locationName\n            countryCode\n            countryName\n            locationInName\n          }\n          mainImage {\n            smallUrl\n            mediumUrl\n            largeUrl\n          }\n          priceInfo {\n            minPriceBeforeDiscount {\n              value\n              currency\n              amount\n            }\n            minPrice {\n              value\n              currency\n              amount\n            }\n          }\n          ratingInfo {\n            starRating\n            starRatingCount\n          }\n          trackingActions {\n            c360Actions {\n              actionName\n              actionVersion\n              actionType\n              content\n            }\n          }\n        }\n        searchResultsUrl\n        trackingActions {\n          c360Actions {\n            actionName\n            actionVersion\n            actionType\n            content\n          }\n        }\n      }\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };

            function V(e) {
                let {
                    isMdot: t,
                    shouldSkip: n
                } = e;
                const [a, r] = function(e) {
                    const t = { ...G,
                        ...e
                    };
                    return U.useLazyQuery(P, t)
                }();
                return (0, i.useEffect)((() => {
                    n || a({
                        variables: {
                            attractionCardsInput: {
                                useCase: t ? "mdot_index_recent_search_attractions_carousel" : "www_index_recent_search_attractions_carousel",
                                strategyIds: ["503"],
                                tracking: {
                                    source: "apps_index_page",
                                    medium: "apps_index_page",
                                    campaign: "apps_popular_attractions_index_page"
                                },
                                pagination: {
                                    limit: 10
                                }
                            }
                        }
                    })
                }), [a, t, n]), r
            }
            var W = n("52ffbfd1"),
                M = n("d0989236");
            var Y = n("0fc8afc9"),
                q = n("017725b3");
            const Z = ["da", "de", "en-gb", "en-us", "es", "es-ar", "es-mx", "fr", "it", "ja", "ko", "nl", "no", "pt-br", "pt-pt", "sv", "zh-cn", "zh-tw"],
                H = () => {
                    const {
                        visitorCountry: e,
                        language: t
                    } = (0, M.B)(), n = (0, Y.et)(), a = ! function(e) {
                        const [t, n] = (0, i.useState)();
                        return (0, i.useEffect)((() => {
                            var t;
                            "undefined" !== typeof window && null !== (t = window) && void 0 !== t && null !== (t = t.B) && void 0 !== t && t.env && window.B.env[e] && n(window.B.env[e])
                        }), [n, e]), t
                    }("b_user_has_upcoming_bookings");
                    if (n.isLoading) return {
                        isReady: !1
                    };
                    const r = Z.includes(t),
                        o = !!n.lastSearch;
                    let l, c;
                    if (o) {
                        const e = n.lastSearch,
                            t = Date.now() / 1e3 - (e.createdAt || 0) < 15552e3;
                        l = e.destType === q.z5K.CITY && t, c = e.nbAdults <= 2 && 0 === (e.nbChildren || 0)
                    } else l = !!e;
                    return {
                        isReady: !0,
                        isEligible: r && a && l,
                        isUS: "us" === e,
                        warmStartFlags: {
                            isWarmStart: o,
                            isSoloAndCouple: c
                        }
                    }
                };
            var B = n("8e166592");
            const X = "c12223ca7d",
                j = "ea2c2c881c",
                K = () => {
                    var e;
                    const t = (0, k.useI18n)(),
                        n = "MDOT" === (0, v.getRequestContext)().getSiteType(),
                        [o, m] = (0, i.useState)(!1),
                        u = n ? "6d15784b-3a88-4423-86ae-d1e3813f7070" : "8d1a1af1-d376-4c38-b4be-3448d8f15a6c",
                        g = n ? "popular_attractions_index_mdot" : "popular_attractions_index_www",
                        p = n ? D.exp `OAYRKHMZKZPHcHWAJLGbbeLDEZREBBVYYT` : D.exp `OAYRKHMZKZPHcHWAJLGbbeLDEZRdLOLOLMO`;
                    let _ = !1;
                    const f = H(),
                        N = V({
                            isMdot: n,
                            shouldSkip: !(f.isReady && f.isEligible)
                        });
                    if ((0, i.useEffect)((() => {
                            o && _ && ((0, D.trackCustomGoal)(p, 1), (0, D.trackExperimentStage)(p, 2), f.warmStartFlags && f.warmStartFlags.isWarmStart ? ((0, D.trackExperimentStage)(p, 3), f.warmStartFlags.isSoloAndCouple ? (0, D.trackExperimentStage)(p, 5) : (0, D.trackExperimentStage)(p, 6)) : (0, D.trackExperimentStage)(p, 4), f.isUS && (0, D.trackExperimentStage)(p, 7))
                        }), [o, _, p, f]), !N.called || N.loading || !f.isReady || !f.isEligible) return null;
                    if ((0, D.trackExperimentStage)(p, 1), N.error) return (0, D.trackCustomGoal)(p, 4), null;
                    const b = (0, D.trackExperiment)(p);
                    let E = b > 0;
                    const S = 1 === b ? x : y.Z,
                        C = 1 === b ? L : w,
                        F = (e => {
                            var t, n;
                            const {
                                queryData: a,
                                i18n: i,
                                isMdot: r,
                                cardComponentItemAdapter: o
                            } = e;
                            let l = "",
                                c = "",
                                s = 0;
                            const d = (null === a || void 0 === a || null === (t = a.recommendationPlatform) || void 0 === t ? void 0 : t.attractionCards.recommendations.map((e => {
                                var t, n, a, d, m;
                                return l || (l = (null === e || void 0 === e || null === (d = e.locationInfo) || void 0 === d ? void 0 : d.locationName) ? ? ""), c || (c = (null === e || void 0 === e || null === (m = e.locationInfo) || void 0 === m ? void 0 : m.locationInName) ? ? ""), o({
                                    i18n: i,
                                    priceFormatted: null === (t = e.priceInfo) || void 0 === t || null === (t = t.minPrice) || void 0 === t ? void 0 : t.value,
                                    item: {
                                        id: "",
                                        title: e.name || "",
                                        titleVariant: "strong_1",
                                        img: {
                                            src: null === (n = e.mainImage) || void 0 === n ? void 0 : n.largeUrl
                                        },
                                        aspectRatio: T.L["4:3"],
                                        itemIndex: s++,
                                        url: (null === (a = e.linksInfo) || void 0 === a ? void 0 : a.searchResultsUrl) ? ? "",
                                        onClickOpenInSameTab: r
                                    }
                                })
                            }))) || [];
                            return {
                                heading: i.trans((0, k.t)("mvrex_carousel_attractions_head", {
                                    variables: {
                                        in_city_name: c,
                                        city_name: l
                                    }
                                })),
                                subHeading: i.trans((0, k.t)("mvrex_carousel_attractions_subhead")),
                                isMdot: r,
                                items: d,
                                action: {
                                    text: r ? i.trans((0, k.t)("mvrex_carousel_attractions_cta_2")) : i.trans((0, k.t)("mvrex_carousel_attractions_cta")),
                                    href: (null === a || void 0 === a || null === (n = a.recommendationPlatform) || void 0 === n ? void 0 : n.attractionCards.searchResultsUrl) || void 0,
                                    disabled: !1,
                                    position: "header",
                                    attributes: {
                                        target: r ? "_self" : "_blank"
                                    }
                                },
                                size: r ? R.C.LARGER : R.C.MEDIUM
                            }
                        })({
                            queryData: N.data,
                            i18n: t,
                            isMdot: n,
                            cardComponentItemAdapter: C
                        });
                    !F.items || (null === (e = F.items) || void 0 === e ? void 0 : e.length) < 4 ? ((0, D.trackCustomGoal)(p, 3), E = !1) : ((0, D.trackCustomGoal)(p, 5), _ = !0, (0, B.dg)());
                    const O = (e, t) => {
                            var n;
                            (0, B.uo)(B.ke.Click, null === (n = N.data) || void 0 === n || null === (n = n.recommendationPlatform) || void 0 === n || null === (n = n.attractionCards) || void 0 === n || null === (n = n.recommendations[t]) || void 0 === n ? void 0 : n.trackingActions), (0, D.trackCustomGoal)(p, 2)
                        },
                        I = (e, t) => {
                            var n;
                            (0, B.uo)(B.ke.View, null === (n = N.data) || void 0 === n || null === (n = n.recommendationPlatform) || void 0 === n || null === (n = n.attractionCards) || void 0 === n || null === (n = n.recommendations[t]) || void 0 === n ? void 0 : n.trackingActions)
                        },
                        h = () => {
                            var e;
                            (0, B.uo)(B.ke.View, null === (e = N.data) || void 0 === e || null === (e = e.recommendationPlatform) || void 0 === e || null === (e = e.attractionCards) || void 0 === e ? void 0 : e.trackingActions), m(!0)
                        };
                    return (0, W.XA)() ? r().createElement(c.df, {
                        onChange: e => e && h(),
                        triggerOnce: !0,
                        className: "keep"
                    }, E && r().createElement(s, (0, a.Z)({}, F, {
                        onCardClick: O,
                        onCardView: I,
                        CardComponent: S,
                        containerClassName: l()({
                            [j]: n,
                            [X]: !n && !(0, W.Y$)()
                        }),
                        c360Tracking: {
                            carouselName: g,
                            componentId: u
                        }
                    }))) : r().createElement(c.df, {
                        onChange: e => e && h(),
                        triggerOnce: !0,
                        className: "keep"
                    }, E && r().createElement(d.Z, {
                        queenMabId: {
                            MDOT: 1058,
                            WWW: 64
                        }
                    }, r().createElement(s, (0, a.Z)({}, F, {
                        onCardClick: O,
                        onCardView: I,
                        CardComponent: S,
                        containerClassName: l()({
                            [j]: n,
                            [X]: !n && !(0, W.Y$)()
                        }),
                        c360Tracking: {
                            carouselName: g,
                            componentId: u
                        }
                    }))))
                }
        }
    }
]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/2f19556a.49eec89a.chunk.js.map