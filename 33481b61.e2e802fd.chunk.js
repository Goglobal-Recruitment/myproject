"use strict";
(self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] = self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] || []).push([
    ["33481b61"], {
        84451606: (e, n, i) => {
            i.d(n, {
                Z: () => o
            });
            var a = i("ead71eb0"),
                t = i.n(a),
                d = i("6222292b");
            const r = "abb411a687",
                l = "f45d6fffc8",
                m = "fd814929a2",
                s = e => {
                    let {
                        buttons: n,
                        onCloseAction: i
                    } = e;
                    return t().createElement(d.Stack, {
                        className: r,
                        gap: 2
                    }, n.map((e => {
                        let {
                            text: n,
                            url: a,
                            variant: r,
                            ariaLabel: l,
                            onClickHandler: m
                        } = e;
                        return t().createElement(d.Button, {
                            key: n,
                            text: n,
                            href: a,
                            variant: r,
                            size: "large",
                            attributes: {
                                "aria-label": l,
                                "data-testid": "context-modal-content-cta"
                            },
                            preventDefault: !1,
                            onClick: m ? () => m({
                                closeContextSheet: i
                            }) : void 0
                        })
                    })))
                },
                o = e => {
                    let {
                        contentItems: n,
                        buttons: i,
                        onCloseAction: a
                    } = e;
                    return t().createElement(d.Stack, {
                        className: l,
                        direction: "column",
                        alignItems: "start",
                        justifyContent: "start"
                    }, n.map(((e, n) => "list" === e.type ? t().createElement(d.List, {
                        key: n,
                        attributes: {
                            "data-testid": "context-modal-content-list"
                        },
                        variant: "unordered",
                        rowSpacing: "small",
                        className: m
                    }, e.items.map((e => t().createElement(d.Text, {
                        key: e.text
                    }, e.text)))) : t().createElement(d.Text, {
                        variant: "body_1",
                        key: n
                    }, e.text))), i && t().createElement(s, {
                        buttons: i,
                        onCloseAction: a
                    }))
                }
        },
        30190550: (e, n, i) => {
            i.d(n, {
                au: () => l,
                L4: () => m,
                wd: () => r
            });
            var a = i("dc6d28ff"),
                t = i("af1e2b38");
            const d = /^(b_feature_.*|exp_.*|i_am_from)$/;
            const r = function(e) {
                var n;
                const i = (0, a.getRequestContext)(),
                    r = i.getBPlatformEnvironment(),
                    l = !(!r || "prod" !== r),
                    m = i.getBasePageUrl(),
                    s = i.getEncryptedCommonOauthState(),
                    o = null === (n = i.getAffiliate()) || void 0 === n ? void 0 : n.id,
                    c = i.getLanguage(),
                    u = i.getActionName(),
                    k = i.isInternalIp(),
                    {
                        isMDOT: v
                    } = (0, t.Z6)(),
                    {
                        componentId: g,
                        iframe: N,
                        experiments: S,
                        customParams: p,
                        devHosts: F
                    } = e,
                    C = null === m || void 0 === m ? void 0 : m.host.endsWith("booking.cn"),
                    h = p || {},
                    I = `https://${function(e,n,i){return e?"account.booking."+(n?"cn":"com"):i&&i.ap?i.ap:"account.dqs.booking.com"}(l,C,F)}/auth/oauth2`,
                    b = `https://${function(e,n,i){return e?"secure.booking."+(n?"cn":"com"):i&&i.book?i.book:"book.dqs.booking.com"}(l,C,F)}/login.html?op=oauth_return`,
                    f = new URL(I),
                    L = function(e) {
                        return e ? "vO1Kblk7xX9tUn2cpZLS" : "b_test_fe"
                    }(l);
                ((e, n, i, a) => {
                    e.searchParams.set("client_id", a), e.searchParams.set("redirect_uri", i), e.searchParams.set("response_type", n.anon ? "anon_session" : "code")
                })(f, e, b, L), N && (f.searchParams.set("iframe", v ? "2" : "1"), h.iframe = v ? "2" : "1"), ((e, n, i, a, t) => {
                    i && e.searchParams.set("lang", i), a && e.searchParams.set("aid", a.toString()), t && e.searchParams.set("bkng_action", t), n.popup && e.searchParams.set("popup", "1"), n.prompt && e.searchParams.set("prompt", n.prompt), n.experimentVariant && e.searchParams.set("variant", n.experimentVariant.toString()), n.canShowGeniusMessaging && e.searchParams.set("genius", "1")
                })(f, e, c, o, u), l && !k || function(e, n) {
                    n.searchParams.forEach(((n, i) => {
                        d.test(i) && e.searchParams.set(i, n)
                    }))
                }(f, m);
                const y = {
                    id: g
                };
                if (S && (y.data = function(e) {
                        const n = {};
                        return Object.keys(e).forEach((i => {
                            var a, t, d, r;
                            const l = {};
                            null !== (a = e[i]) && void 0 !== a && a.variant && (l.v = e[i].variant), null !== (t = e[i]) && void 0 !== t && t.auth_request_goal && (l.g1 = e[i].auth_request_goal), null !== (d = e[i]) && void 0 !== d && d.auth_page_loaded_goal && (l.g2 = e[i].auth_page_loaded_goal), null !== (r = e[i]) && void 0 !== r && r.auth_page_interaction_goal && (l.g3 = e[i].auth_page_interaction_goal), n[i] = l
                        })), n
                    }(S)), Object.keys(h).length && (y.params = h), s) {
                    const e = function(e, n) {
                        try {
                            let i;
                            const a = JSON.stringify(n);
                            return i = btoa(a), `${e}*${i}`
                        } catch (i) {
                            return `${e}*`
                        }
                    }(s, y);
                    e && f.searchParams.set("state", e)
                }
                return f.toString()
            };
            let l = function(e) {
                    return e.BP_AUTH_CHECKBOX = "bp_auth_checkbox", e.BP_AUTH_CHECKBOX_GENIUS = "bp_auth_checkbox_genius", e.BP_AUTH_CHECKBOX_GENIUS_MDOT = "bp_auth_checkbox_genius_mdot", e.BP_AUTH_CHECKBOX_MDOT = "bp_auth_checkbox_mdot", e.BP_GENIUS_INLINE = "bp_genius_inline", e.BP_GENIUS_INLINE_MDOT = "bp_genius_inline_mdot", e.BP_INLINE = "bp_inline", e.BP_INLINE_MDOT = "bp_inline_mdot", e.BS2_AUTH_LOW = "bs2_auth_low", e.BS2_AUTH_LOW_MDOT = "bs2_auth_low_mdot", e.CARS_INDEX_LP = "cars_index_lp", e.CBCC_LANDING_PAGE = "cbcc_landing_page", e.CO_BRAND_PRODUCTS_SIGNUP = "co_brand_products_signup", e.GENIUSVIP_ENROLLMENT = "geniusvip_enrollment", e.GENIUS_INDEX_BANNER = "genius_index_banner", e.GENIUS_INDEX_CAROUSEL = "genius_index_carousel", e.GENIUS_INDEX_SHEET = "genius_index_sheet", e.GENIUS_LANDING_PAGE = "genius_landing_page", e.GENIUS_LANDING_PAGE_INCENTIVE_CAMPAIGN = "genius_lp_incentive_campaign", e.GENIUS_ROOM_TABLE_BANNER_MDOT = "genius_rt_mdot_banner", e.GENIUS_ROOM_TABLE_BANNER_WWW = "genius_room_table_banner_www", e.GENIUS_SEARCHRESULTS_SHEET = "genius_searchresults_sheet", e.GENIUS_SHEET = "genius_sheet", e.GENIUS_SIGN_IN_EMAIL_POPOVER = "genius_sign_in_email_popover", e.HELP_CENTER = "help_center", e.INDEX = "index", e.LANDING_PAGES = "landing_pages", e.LANDING_PAGES_HOLIDAYS = "landing_pages_holidays", e.LOGIN_CARD = "login_card", e.LOGIN_CARD_SOCIAL = "login_card_social", e.MEMBERSHIP_HUB_REDIRECT = "membership_hub_redirect", e.MERCH_PLATFORM_INDEX = "merch_platform_index", e.MERCH_PLATFORM_INDEX_CTA = "merch_platform_index_cta", e.MERCH_PLATFORM_PROPERTY_PAGE_CTA = "merch_platform_property_page_cta", e.MERCH_PLATFORM_SEARCH_RESULTS_PAGE_CTA = "merch_platform_search_results_page_cta", e.MERCH_PLATFORM_SR = "merch_platform_sr", e.PAYMENT_TRANSACTIONS = "payment_transactions", e.PROPERY_PAGE = "propery_page", e.REACT_SHELL_GOOGLE_ONE_TAP = "react_shell_google_one_tap", e.SEARCH_RESULTS = "search_results", e.SEARCH_RESULTS_MDOT_PROPERTY_LIST_CTA_MDOT = "search_results_mdot_property_list_cta", e.SEARCH_RESULTS_WWW_PROPERTY_LIST_CTA_MDOT = "search_results_www_property_list_cta", e.SELF_SERVICE_BANNER = "self_service_banner", e.TRAVELLER_HEADER = "traveller_header", e.WISHLIST_BTN = "wishlist_btn", e.WISHLIST_BTN_SR = "wishlist_btn_sr", e.WISHLIST_DETAILS = "wishlist_details", e
                }({}),
                m = function(e) {
                    return e.SIGN_IN = "signin", e.IFRAME_WITH_EMAIL = "iframe-with-email", e.REGISTER = "register", e.NONE = "none", e
                }({})
        },
        "20df4cd3": (e, n, i) => {
            i.d(n, {
                Z: () => v
            });
            var a = i("3d054e81"),
                t = i("ead71eb0"),
                d = i.n(t),
                r = i("9a67ad93"),
                l = i("8521b397"),
                m = i.n(l),
                s = i("6222292b");
            const o = "ff29d350d4",
                c = "d73c9abe7b";
            var u = i("6229d898"),
                k = i("c91f1a4c");
            const v = e => {
                let {
                    aspectRatio: n,
                    img: i,
                    title: l,
                    subTitle: v,
                    context: g,
                    formattedPrice: N,
                    priceText: S,
                    url: p,
                    id: F,
                    itemIndex: C,
                    isMdot: h,
                    onClickHandler: I,
                    onViewHandler: b,
                    shouldAriaHideImages: f = !1
                } = e;
                const [L, y] = (0, r.YD)({
                    threshold: 0,
                    triggerOnce: !0
                });
                (0, t.useEffect)((() => {
                    y && b && b(F, C)
                }), [y]);
                return d().createElement(s.Actionable, {
                    href: p,
                    className: o,
                    onClick: () => {
                        I && I(F, C)
                    },
                    ref: L,
                    attributes: {
                        "data-testid": k.oK
                    }
                }, d().createElement(s.AspectRatio, {
                    ratio: n
                }, d().createElement(s.Image, (0, a.Z)({
                    src: null === i || void 0 === i ? void 0 : i.src,
                    fallback: "icon",
                    fallbackIcon: (0, u.uI)(null === i || void 0 === i ? void 0 : i.imageType)
                }, f && {
                    alt: ""
                })), g && d().createElement(s.Scrim, {
                    position: "top",
                    className: m()({
                        [c]: !h
                    })
                }, d().createElement(s.Text, {
                    variant: "body_2"
                }, g)), d().createElement(s.Scrim, {
                    position: "bottom"
                }, d().createElement(s.Stack, {
                    gap: .5
                }, d().createElement(s.Text, {
                    variant: "strong_1",
                    tagName: "h3"
                }, l), v && d().createElement(s.Text, {
                    variant: "body_2"
                }, v), N && d().createElement(s.Stack, {
                    alignItems: "center",
                    gap: 1,
                    direction: "row"
                }, d().createElement(s.Text, {
                    tagName: "span",
                    variant: "body_2"
                }, S), d().createElement(s.Text, {
                    variant: "strong_2",
                    tagName: "span"
                }, N))))))
            }
        },
        "36c60bcb": (e, n, i) => {
            i.d(n, {
                W: () => X,
                _: () => J
            });
            var a = i("28dbd132"),
                t = i("fb62a8c9");
            const d = {
                    campaignId: "12443493-fe75-4d0d-8801-7fa6eded0a98",
                    campaignName: t._.AttractionsActiveBookingMdot,
                    queenMabId: 1047,
                    openCardLinkInNewTab: !1,
                    onCarouselView: () => {
                        (0, a.trackCustomGoal)(a.exp `HWAJLGbbeLHAFPRWPHDDWe`, 1)
                    },
                    onCardClick: () => {
                        (0, a.trackCustomGoal)(a.exp `HWAJLGbbeLHAFPRWPHDDWe`, 3)
                    },
                    onCardView: () => {
                        (0, a.trackCustomGoal)(a.exp `HWAJLGbbeLHAFPRWPHDDWe`, 2)
                    },
                    onCtaClick: () => {
                        (0, a.trackCustomGoal)(a.exp `HWAJLGbbeLHAFPRWPHDDWe`, 4)
                    }
                },
                r = {
                    prod: d,
                    dqs: { ...d
                    }
                },
                l = {
                    campaignId: "11791b5b-c27a-4cd4-a2f7-9cdcaeffdc8f",
                    campaignName: t._.AttractionsActiveBookingWww,
                    queenMabId: 53,
                    openCardLinkInNewTab: !1,
                    onCarouselView: () => {
                        (0, a.trackCustomGoal)(a.exp `HWAJLGbbeLHAFPRFRURURHe`, 1)
                    },
                    onCardClick: () => {
                        (0, a.trackCustomGoal)(a.exp `HWAJLGbbeLHAFPRFRURURHe`, 3)
                    },
                    onCardView: () => {
                        (0, a.trackCustomGoal)(a.exp `HWAJLGbbeLHAFPRFRURURHe`, 2)
                    },
                    onCtaClick: () => {
                        (0, a.trackCustomGoal)(a.exp `HWAJLGbbeLHAFPRFRURURHe`, 4)
                    }
                },
                m = {
                    prod: l,
                    dqs: { ...l
                    }
                },
                s = {
                    campaignId: "88011831-bd27-49ad-8aaa-f79f025874fd",
                    campaignName: t._.AttractionsTopCitiesMdot,
                    queenMabId: 1054,
                    openCardLinkInNewTab: !1,
                    onCarouselView: () => {
                        (0, a.trackCustomGoal)(a.exp `HWAJLGbbeLHAFPRFDEYScEUWBZEWaSdCDWOOC`, 1)
                    },
                    onCardClick: () => {
                        (0, a.trackCustomGoal)(a.exp `HWAJLGbbeLHAFPRFDEYScEUWBZEWaSdCDWOOC`, 3)
                    },
                    onCardView: () => {
                        (0, a.trackCustomGoal)(a.exp `HWAJLGbbeLHAFPRFDEYScEUWBZEWaSdCDWOOC`, 2)
                    },
                    onCtaClick: () => {
                        (0, a.trackCustomGoal)(a.exp `HWAJLGbbeLHAFPRFDEYScEUWBZEWaSdCDWOOC`, 4)
                    }
                },
                o = {
                    prod: s,
                    dqs: { ...s
                    }
                },
                c = {
                    campaignId: "4d041367-1c0b-4678-9a0e-b1bce43c6477",
                    campaignName: t._.AttractionsTopCitiesWww,
                    queenMabId: 60,
                    openCardLinkInNewTab: !1,
                    onCarouselView: () => {
                        (0, a.trackCustomGoal)(a.exp `HWAJLGbbeLHAFPRFDEYScEUWBZEWaSddKNKNKWe`, 1)
                    },
                    onCardClick: () => {
                        (0, a.trackCustomGoal)(a.exp `HWAJLGbbeLHAFPRFDEYScEUWBZEWaSddKNKNKWe`, 3)
                    },
                    onCardView: () => {
                        (0, a.trackCustomGoal)(a.exp `HWAJLGbbeLHAFPRFDEYScEUWBZEWaSddKNKNKWe`, 2)
                    },
                    onCtaClick: () => {
                        (0, a.trackCustomGoal)(a.exp `HWAJLGbbeLHAFPRFDEYScEUWBZEWaSddKNKNKWe`, 4)
                    }
                },
                u = {
                    prod: c,
                    dqs: { ...c
                    }
                },
                k = {
                    campaignId: "TODO",
                    campaignName: t._.BookingHomesMdot,
                    openCardLinkInNewTab: !0,
                    onCardClick: () => {
                        (0, a.trackCustomGoal)(a.exp `cCHObCcEIZEHbDNQGGFVIZdRJOOIBBO`, 1)
                    }
                },
                v = {
                    prod: k,
                    dqs: { ...k
                    }
                };
            var g = i("8ebac256"),
                N = i("dc6d28ff"),
                S = i("6ff170fe");
            const p = {
                    campaignId: "995ed19b-1160-4c67-8d26-e4565f9f0ae6",
                    campaignName: t._.DomesticDestinationsMdot,
                    queenMabId: 1034,
                    openCardLinkInNewTab: !1,
                    onCardClick: () => {
                        (0, a.trackGoal)("mdot_index_domestic_destination_click"), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREScXQOVZQOQCXNWARfeSAATULHfNCDWOOC`, 1), (0, S.fR)()
                    },
                    onCarouselView() {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREScXQOVZQOQCXNWARfeSAATULHfNCDWOOC`, 2)
                    },
                    onCardImageError: e => {
                        const n = (0, N.getRequestContext)().getVisitorCountry();
                        g.Z.sendEvent({
                            action_name: "recommendations_ux.domestic_destinations_carousel_image_error",
                            action_version: "1.0.0",
                            content: {
                                ufi: parseInt(e),
                                country_code: n
                            }
                        }), (0, a.trackCustomGoal)(a.exp `HCRNQWARfeSAAINFPIWBcaWWCZEDEZRae`, 1)
                    }
                },
                F = {
                    prod: p,
                    dqs: { ...p
                    }
                },
                C = {
                    campaignId: "1b20dab5-f371-4259-9e9d-18b63e11a3f5",
                    campaignName: t._.DomesticDestinationsWww,
                    queenMabId: 27,
                    openCardLinkInNewTab: !1,
                    onCardClick: () => {
                        (0, a.trackGoal)("www_nearby_destination_click"), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZRdZcNRbDfRFfaNbEYAbZZdKNKNKWe`, 1), (0, S.fR)()
                    },
                    onCardImageError: e => {
                        const n = (0, N.getRequestContext)().getVisitorCountry();
                        g.Z.sendEvent({
                            action_name: "recommendations_ux.domestic_destinations_carousel_image_error",
                            action_version: "1.0.0",
                            content: {
                                ufi: parseInt(e),
                                country_code: n
                            }
                        }), (0, a.trackCustomGoal)(a.exp `HCRNQWARfeSAAINFPIWBcaWWCZEDEZRae`, 1)
                    },
                    onCarouselViewWithData: () => {
                        "us" !== (0, N.getRequestContext)().getVisitorCountry() && (0, a.trackExperimentStage)(a.exp `OAYRKHMdReLDEZRdZcNRbDfRFfaNbEYAbZZdKNKNKWe`, 3), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZRdZcNRbDfRFfaNbEYAbZZdKNKNKWe`, 2)
                    }
                },
                h = {
                    prod: C,
                    dqs: { ...C
                    }
                },
                I = {
                    campaignId: "49b424c2-4c48-47e0-bf44-242168721c61",
                    campaignName: t._.FlightsCrossSellMdot,
                    queenMabId: 1048,
                    openCardLinkInNewTab: !0,
                    onCarouselView: () => {
                        (0, a.trackCustomGoal)(a.exp `aWQOcbJfEDBOSMKdFEAeRRYDEZREBBVYYT`, 1)
                    },
                    onCardView: () => {
                        (0, a.trackCustomGoal)(a.exp `aWQOcbJfEDBOSMKdFEAeRRYDEZREBBVYYT`, 2)
                    },
                    onCardClick: () => {
                        (0, a.trackCustomGoal)(a.exp `aWQOcbJfEDBOSMKdFEAeRRYDEZREBBVYYT`, 3)
                    },
                    onAfterNavigate: () => {
                        (0, a.trackCustomGoal)(a.exp `aWQOcbJfEDBOSMKdFEAeRRYDEZREBBVYYT`, 4)
                    }
                },
                b = {
                    prod: I,
                    dqs: { ...I
                    }
                },
                f = {
                    campaignId: "878d2883-e78c-4ea7-8c2f-83c2fe27dbef",
                    campaignName: t._.FlightsCrossSellWww,
                    queenMabId: 54,
                    openCardLinkInNewTab: !0,
                    onCarouselView: () => {
                        (0, a.trackCustomGoal)(a.exp `aWQOcbJfEDBOSMKdFEAeRRYDEZRdLOLOLMO`, 1)
                    },
                    onCardView: () => {
                        (0, a.trackCustomGoal)(a.exp `aWQOcbJfEDBOSMKdFEAeRRYDEZRdLOLOLMO`, 2)
                    },
                    onCardClick: () => {
                        (0, a.trackCustomGoal)(a.exp `aWQOcbJfEDBOSMKdFEAeRRYDEZRdLOLOLMO`, 3)
                    },
                    onAfterNavigate: () => {
                        (0, a.trackCustomGoal)(a.exp `aWQOcbJfEDBOSMKdFEAeRRYDEZRdLOLOLMO`, 4)
                    }
                },
                L = {
                    prod: f,
                    dqs: { ...f
                    }
                },
                y = {
                    campaignId: "e681313d-90d4-4c54-b394-13e60cae2496",
                    campaignName: t._.HotelHistoryWww,
                    openCardLinkInNewTab: !0,
                    onCardClick: () => {
                        (0, a.trackCustomGoal)(a.exp `cCHObCcEIZEHaOAXSPIfIKdFHfdKNKNKWe`, 1)
                    }
                },
                R = {
                    prod: y,
                    dqs: { ...y
                    }
                },
                T = {
                    campaignId: "02cb1d88-b3ac-4a9a-92cb-a1b7711e8fcd",
                    campaignName: t._.PropertyTypesLoginMdot,
                    queenMabId: 1061,
                    onCardClick() {
                        (0, a.trackGoal)("mdot_property_type_click"), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREbOMFcZSbcOOIBBO`, 2)
                    },
                    onAfterNavigate() {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREbOMFcZSbcOOIBBO`, 3)
                    },
                    onCarouselView() {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREbOMFcZSbcOOIBBO`, 1)
                    }
                },
                _ = {
                    prod: T,
                    dqs: { ...T
                    }
                },
                E = {
                    campaignId: "dd5958b7-9f4e-498c-b394-691f494babee",
                    campaignName: t._.PropertyTypesLogoutMdot,
                    queenMabId: 1061,
                    onCardClick() {
                        (0, a.trackGoal)("mdot_property_type_click"), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREbOMFcZSbcOOIBBO`, 2)
                    },
                    onAfterNavigate() {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREbOMFcZSbcOOIBBO`, 3)
                    },
                    onCarouselView() {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREbOMFcZSbcOOIBBO`, 1)
                    }
                },
                A = {
                    prod: E,
                    dqs: { ...E
                    }
                },
                O = {
                    campaignId: "a928d9f8-e4fe-4954-9085-fad1950455f2",
                    campaignName: t._.PropertyTypesWww,
                    queenMabId: 5,
                    onCardClick() {
                        (0, a.trackGoal)("www_property_type_click"), (0, a.trackCustomGoal)(a.exp `OAYRKHMADDbddZQNAHTQLOLOLMO`, 1), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREbOMFcZSbccCcCcCC`, 2)
                    },
                    onAfterNavigate() {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMADDbddZQNAHTQLOLOLMO`, 2), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREbOMFcZSbccCcCcCC`, 3)
                    },
                    onCarouselView() {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREbOMFcZSbccCcCcCC`, 1)
                    }
                },
                M = {
                    prod: O,
                    dqs: { ...O
                    }
                };
            var D = i("9f43804b");
            const P = {
                    campaignId: "3c636621-7111-4889-9e40-93bfcc45141d",
                    campaignName: t._.SimilarPropertiesMdot,
                    queenMabId: 1023,
                    openCardLinkInNewTab: !0,
                    onCardClick: () => {
                        (0, a.trackCustomGoal)(a.exp `cCHObCBWaEdIPPSfDcISQZDdMMNIRHZSJOOIBBO`, 1), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREdcAKWLbCWUZOdKNKNKHYYfPHe`, 1), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREbOMFcZGNVMYCKbUZdcLTQLOLOLOCDWOOC`, 2), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREdcAKWLbOMNMTbWDDZQYaYYfPHe`, 1), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREdcAKWLbOMNMTbYHUWPHDDWe`, 2)
                    },
                    onCardView: () => {
                        (0, a.trackCustomGoal)(a.exp `cCHObCBWaEdIPPSfDcISQZDdMMNIRHZSJOOIBBO`, 2)
                    },
                    onCarouselView: () => {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREdcAKWLbCWUZOdKNKNKHYYfPHe`, 2), (0, a.trackExperimentStage)(a.exp `OAYRKHMdReLDEZREdcAKWLbOMNMTbWDDZQYaYYfPHe`, 3), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREdcAKWLbOMNMTbWDDZQYaYYfPHe`, 2), (0, a.trackExperimentStage)(a.exp `OAYRKHMdReLDEZREdcAKWLbOMNMTbYHUWPHDDWe`, 4), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREdcAKWLbOMNMTbYHUWPHDDWe`, 1)
                    },
                    onAfterNavigate(e) {
                        e === D.f.Right ? (0, a.trackCustomGoal)(a.exp `cCHObCBWaEdIPPSfDcISQZDdMMNIRHZSJOOIBBO`, 3) : e === D.f.Left && (0, a.trackCustomGoal)(a.exp `cCHObCBWaEdIPPSfDcISQZDdMMNIRHZSJOOIBBO`, 4), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREdcAKWLbCWUZOdKNKNKHYYfPHe`, 3)
                    },
                    carouselTestId: "similar-properties-carousel"
                },
                H = {
                    prod: P,
                    dqs: { ...P
                    }
                },
                x = {
                    campaignId: "2e1d1e44-692c-4e96-98f4-3f02831ee551",
                    campaignName: t._.SimilarPropertiesWww,
                    queenMabId: 32,
                    openCardLinkInNewTab: !0,
                    onCardClick: () => {
                        (0, a.trackCustomGoal)(a.exp `cCHObCBWaEdIPPSfDcISQZDdMMNIRHZSJcCcCcCC`, 1), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREdcAKWLbCWUZOdKNKNKHYYfPHe`, 1), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREbOMFcZGNVMYCKbUZdcLTQLOLOLOCDWOOC`, 2), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREdcAKWLbOMNMTbWDDZQYbaTaTaET`, 1), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREdcAKWLbOMNMTbYHUFRURURHe`, 2)
                    },
                    onCardView: () => {
                        (0, a.trackCustomGoal)(a.exp `cCHObCBWaEdIPPSfDcISQZDdMMNIRHZSJcCcCcCC`, 2)
                    },
                    onCarouselView: () => {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREdcAKWLbCWUZOdKNKNKHYYfPHe`, 2), (0, a.trackExperimentStage)(a.exp `OAYRKHMdReLDEZREdcAKWLbOMNMTbWDDZQYbaTaTaET`, 3), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREdcAKWLbOMNMTbWDDZQYbaTaTaET`, 2), (0, a.trackExperimentStage)(a.exp `OAYRKHMdReLDEZREdcAKWLbOMNMTbYHUFRURURHe`, 4), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREdcAKWLbOMNMTbYHUFRURURHe`, 1)
                    },
                    onAfterNavigate(e) {
                        e === D.f.Right ? (0, a.trackCustomGoal)(a.exp `cCHObCBWaEdIPPSfDcISQZDdMMNIRHZSJcCcCcCC`, 3) : e === D.f.Left && (0, a.trackCustomGoal)(a.exp `cCHObCBWaEdIPPSfDcISQZDdMMNIRHZSJcCcCcCC`, 4), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZREdcAKWLbCWUZOdKNKNKHYYfPHe`, 3)
                    },
                    carouselTestId: "similar-properties-carousel"
                },
                w = {
                    prod: x,
                    dqs: { ...x
                    }
                },
                B = e => {
                    const n = (0, N.getRequestContext)().getLanguage();
                    return e.has(n)
                },
                W = new Set(["en-us", "en-gb"]),
                G = {
                    campaignId: "2372b8ab-c724-4212-8164-c6e4dc5e163b",
                    campaignName: t._.TripTypesMdot,
                    queenMabId: 1062,
                    openCardLinkInNewTab: !0,
                    onCarouselView: () => {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMaXbSbcVIZdRJbYTceMaCTPCDWOOC`, 1), B(W) && (0, a.trackExperimentStage)(a.exp `OAYRKHMdReLDEZRERXSBSLKMBEBBVYYT`, 8)
                    },
                    onCarouselViewWithData: () => {
                        B(W) && ((0, a.trackExperimentStage)(a.exp `OAYRKHMdReLDEZRERXSBSLKMBEBBVYYT`, 9), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZRERXSBSLKMBEBBVYYT`, 1))
                    },
                    onCardClick: () => {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMaXbSbcVIZdRJbYTceMaCTPCDWOOC`, 2), B(W) && (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZRERXSBSLKMBEBBVYYT`, 3)
                    },
                    onAfterNavigate() {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMaXbSbcVIZdRJbYTceMaCTPCDWOOC`, 3)
                    },
                    onFilterChange() {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMaXbSbcVIZdRJbYTceMaCTPCDWOOC`, 4), B(W) && (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZRERXSBSLKMBEBBVYYT`, 2)
                    },
                    onCtaClick() {
                        B(W) && (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZRERXSBSLKMBEBBVYYT`, 4)
                    },
                    onCarouselDataError: () => {
                        B(W) && (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZRERXSBSLKMBEBBVYYT`, 5)
                    }
                },
                K = {
                    prod: G,
                    dqs: { ...G
                    }
                },
                Z = new Set(["en-us", "en-gb"]),
                V = {
                    campaignId: "abb158bf-e7ac-4c7e-bbcd-46f0a513f7fa",
                    campaignName: t._.TripTypesWww,
                    queenMabId: 66,
                    openCardLinkInNewTab: !0,
                    onCarouselView: () => {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMaXbSbcVIZdRJbYTceMaCTPdKNKNKWe`, 1), B(Z) && (0, a.trackExperimentStage)(a.exp `OAYRKHMdReLDEZRERXSBSLKMBdLOLOLMO`, 8)
                    },
                    onCarouselViewWithData: () => {
                        B(Z) && ((0, a.trackExperimentStage)(a.exp `OAYRKHMdReLDEZRERXSBSLKMBdLOLOLMO`, 9), (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZRERXSBSLKMBdLOLOLMO`, 1))
                    },
                    onCardClick: () => {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMaXbSbcVIZdRJbYTceMaCTPdKNKNKWe`, 2), B(Z) && (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZRERXSBSLKMBdLOLOLMO`, 3)
                    },
                    onAfterNavigate() {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMaXbSbcVIZdRJbYTceMaCTPdKNKNKWe`, 3)
                    },
                    onFilterChange() {
                        (0, a.trackCustomGoal)(a.exp `OAYRKHMaXbSbcVIZdRJbYTceMaCTPdKNKNKWe`, 4), B(Z) && (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZRERXSBSLKMBdLOLOLMO`, 2)
                    },
                    onCtaClick() {
                        B(Z) && (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZRERXSBSLKMBdLOLOLMO`, 4)
                    },
                    onCarouselDataError: () => {
                        B(Z) && (0, a.trackCustomGoal)(a.exp `OAYRKHMdReLDEZRERXSBSLKMBdLOLOLMO`, 5)
                    }
                },
                Y = [h, F, M, _, A, m, r, L, b, v, R, u, o, w, H, {
                    prod: V,
                    dqs: { ...V
                    }
                }, K];
            var U = i("3d486da1");
            const q = Y.reduce(((e, n) => ({ ...e,
                    [n.prod.campaignName]: n
                })), {}),
                Q = Y.reduce(((e, n) => ({ ...e,
                    [n.prod.campaignId]: n
                })), {});

            function X(e) {
                const n = (0, U.dU)();
                if (!q[e]) throw new Error(`Config for campaign with name ${e} is not found. Check if it was added to configRegistry.`);
                return q[e][n]
            }

            function J(e) {
                const n = (0, U.dU)();
                if (!Q[e]) throw new Error(`Config for campaign with ID ${e} is not found. Check if it was added to configRegistry.`);
                return Q[e][n]
            }
        },
        "76def127": (e, n, i) => {
            i.r(n), i.d(n, {
                default: () => s
            });
            var a = i("ead71eb0"),
                t = i.n(a),
                d = i("36c60bcb"),
                r = i("dc9c2eaa"),
                l = i("2ea30c97"),
                m = i("3c69c6dc");
            const s = e => {
                let {
                    campaignName: n
                } = e;
                const i = (0, d.W)(n),
                    a = (0, l.Z)(i.campaignId, !1),
                    s = (0, m.q)();
                return t().createElement(r.Z, {
                    isEligibleToRender: a,
                    campaignName: n,
                    shouldRenderWishlistWidget: s
                })
            }
        },
        dc9c2eaa: (e, n, i) => {
            i.d(n, {
                Z: () => he
            });
            var a = i("3d054e81"),
                t = i("ead71eb0"),
                d = i.n(t),
                r = i("36c60bcb"),
                l = i("8521b397"),
                m = i.n(l),
                s = i("9a67ad93"),
                o = i("f3c8bee5"),
                c = i("af1e2b38");
            const u = "98a40736-4843-456e-a0f3-7db54322fc0e";
            var k = i("20df4cd3"),
                v = i("e908bbd3"),
                g = i("51a388c3"),
                N = i("28dbd132");
            let S = function(e) {
                return e.StackedCard = "StackedCard", e.OverlayCard = "OverlayCard", e.PropertyCard = "PropertyCard", e
            }({});
            var p = i("23b1c2ae");

            function F(e) {
                let {
                    cardDesignVariant: n,
                    ...i
                } = e;
                const t = N.exp `OAYRKHMdReLDEZREbOMFcZGNVMYCKbUZdcLTQLOLOLOCDWOOC`,
                    r = !!(0, N.trackExperiment)(t) ? v.o : v.Z;
                switch (n) {
                    case S.StackedCard:
                        return d().createElement(p.Z, (0, a.Z)({}, i, {
                            CardComponent: g.Z
                        }));
                    case S.OverlayCard:
                        return d().createElement(p.Z, (0, a.Z)({}, i, {
                            CardComponent: k.Z
                        }));
                    case S.PropertyCard:
                        return d().createElement(p.Z, (0, a.Z)({}, i, {
                            CardComponent: r
                        }));
                    default:
                        throw new Error(`MerchCarousel does not support design variant ${n}`)
                }
            }
            var C = i("52ffbfd1");
            const h = "a29523f495",
                I = "dcbb25ca0e",
                b = "bd318d6853",
                f = "beed942bdc",
                L = e => {
                    var n, i;
                    let {
                        campaignId: a,
                        campaignName: r,
                        queenMabId: l,
                        regionId: k,
                        onCarouselView: v,
                        onCarouselViewWithData: g,
                        items: N,
                        filtersInfo: S,
                        onFilterChange: p,
                        carouselTestId: L,
                        ...y
                    } = e;
                    const {
                        isWWW: R,
                        isMDOT: T
                    } = (0, c.Z6)(), _ = {
                        carouselName: r,
                        componentId: a
                    }, E = e => null === N || void 0 === N ? void 0 : N.filter((n => n.filterValues.includes(e))), A = null === S || void 0 === S || null === (n = S.filters.find((e => e.isDefault))) || void 0 === n ? void 0 : n.id, O = () => A ? E(A) : N, [M, D] = (0, t.useState)(O), [P, H] = (0, t.useState)(!1);
                    N && !M && D(O);
                    const x = { ...y,
                            containerClassName: m()({
                                [b]: T,
                                [h]: R,
                                [I]: k === u,
                                [f]: (0, C.XA)()
                            }),
                            c360Tracking: _,
                            onTabChange: e => {
                                D(E(e)), p && p(e)
                            },
                            items: M,
                            filters: null === S || void 0 === S ? void 0 : S.filters,
                            testId: L
                        },
                        w = (null === (i = x.items) || void 0 === i ? void 0 : i.length) && !x.isLoading;
                    (0, t.useEffect)((() => {
                        P && w && g && g()
                    }), [P, w, g]);
                    const B = !(0, C.XA)() && l;
                    return d().createElement(s.df, {
                        onChange: e => {
                            var n;
                            e && ((null === (n = x.items) || void 0 === n ? void 0 : n.length) || x.isLoading) && v && v(), H(e)
                        },
                        "data-testid": "merch-carousel"
                    }, B ? d().createElement(o.Z, {
                        queenMabId: l,
                        "data-testid": "merch-queen-mab-widget-id",
                        role: "none"
                    }, d().createElement(F, x)) : d().createElement(F, x))
                };
            var y = i("dc6d28ff"),
                R = i("41c6c66e"),
                T = i("c44dcb0c"),
                _ = i("9f43804b"),
                E = i("43a4d203"),
                A = i("2db41414"),
                O = i("d1e54a96"),
                M = i("01be079e"),
                D = i("dd6086f7");
            const P = e => {
                var n;
                const i = (0, y.getRequestContext)();
                switch (e.__typename) {
                    case "DirectLinkLanding":
                        const a = new URLSearchParams;
                        for (const n of e.queryParams ? ? []) a.set(n.name, n.value);
                        return (0, O.constructUrl)({
                            pathname: e.urlPath,
                            searchParams: a
                        }).toString();
                    case "SearchResultsLanding":
                        return (0, D.d)({ ...e,
                            nbAdults: e.nrAdults,
                            nbChildren: e.nrChildren,
                            nbRooms: e.nrRooms,
                            selectedFilters: e.filters && (null === (n = e.filters[0]) || void 0 === n ? void 0 : n.value)
                        }).toString();
                    case "PropertyPageLanding":
                        return (0, M.y)(i.getBasePageUrl(), { ...e,
                            countryCode: e.countryCode,
                            lang: e.lang || i.getLanguage(),
                            pageViewId: i.getPageviewId(),
                            dates: {
                                checkin: e.checkin,
                                checkout: e.checkout
                            },
                            group: {
                                nbAdults: null === e || void 0 === e ? void 0 : e.nrAdults,
                                nbChildren: null === e || void 0 === e ? void 0 : e.nrChildren,
                                nbRooms: null === e || void 0 === e ? void 0 : e.nrRooms,
                                childrenAges: null === e || void 0 === e ? void 0 : e.childrenAges
                            }
                        }).toString();
                    case "ResolvedLinkLanding":
                        return e.url;
                    default:
                        return ""
                }
            };

            function H(e, n, i, a) {
                var t, d;
                if (e.filters && e.filters.length > 1) throw Error("Not implemented. MerchCarousel does not support multi-dimension filter");
                return {
                    filterValues: (null === (t = e.filters) || void 0 === t ? void 0 : t[0].filterValues) || [],
                    title: e.title,
                    subTitle: e.subtitle || void 0,
                    img: {
                        src: null === (d = (0, A.X)(e.image.urlTemplate, i, n, a)) || void 0 === d ? void 0 : d["1x"]
                    },
                    url: P(e.targetLanding),
                    id: e.itemId,
                    aspectRatio: n
                }
            }
            var x = i("aa1ede20"),
                w = i("427ac7ba"),
                B = i("3d486da1"),
                W = i("017725b3");
            const G = {
                [W.cbr.DOTS]: x.M.DOTS,
                [W.cbr.STARS]: x.M.STARS,
                [W.cbr.TILES]: x.M.TILES
            };

            function K(e) {
                if (e && e.symbol) return {
                    symbol: G[e.symbol],
                    value: e.value,
                    popoverContentCtaUrl: e.popOverContentCtaUrl ? P(e.popOverContentCtaUrl) : void 0,
                    popoverContentCtaText: e.popOverContentCtaText || void 0,
                    popoverContent: e.popOverContent || void 0
                }
            }

            function Z(e) {
                if (e) return e.map((e => {
                    let {
                        value: n,
                        ariaLabel: i,
                        badgeVariation: a
                    } = e;
                    return {
                        text: n,
                        variant: a === W.smO.BRAND_PRIMARY ? "brand-primary" : "constructive",
                        ariaLabel: i
                    }
                }))
            }

            function V(e) {
                if (e) return {
                    text: e.value,
                    iconName: e.icon
                }
            }

            function Y(e) {
                if (e && e.length) return e.filter((e => e.pricingPolicyType !== W.SCr.TAX_CHARGE_INCLUDED)).map((e => ({
                    text: e.value,
                    variant: "constructive"
                })))
            }

            function U(e) {
                var n;
                if (e) return {
                    formattedPrice: e.regularPrice.formattedPrice,
                    formattedCrossedOutPrice: null === (n = e.strikeThroughPrice) || void 0 === n ? void 0 : n.formattedPrice,
                    priceText: e.prefixPriceText || void 0,
                    priceTextEnd: e.suffixPriceText || void 0
                }
            }

            function q(e) {
                var n;
                if (!e || !e.featurePrefix && (!e.features || !e.features.length)) return;
                const i = e.featurePrefix && e.features && e.features.length ? ": " : "";
                return `${e.featurePrefix||""}${i}${(null===(n=e.features)||void 0===n?void 0:n.join(" \xb7 "))||""}`
            }

            function Q(e, n, i, a, t, d, r, l, m) {
                return null === d || void 0 === d ? void 0 : d.map((d => {
                    const s = d.__typename;
                    switch (s) {
                        case "MerchCarouselOverlayItem":
                            return function(e, n, i, a, t, d) {
                                var r;
                                return { ...H(e, n, i, a),
                                    context: e.contextualInformation || void 0,
                                    isMdot: t,
                                    formattedPrice: null === (r = e.price) || void 0 === r ? void 0 : r.formattedPrice,
                                    priceText: d,
                                    shouldAriaHideImages: !0
                                }
                            }(d, e, n, i, a, r);
                        case "MerchCarouselStackedItem":
                            return function(e, n, i, a, t, d) {
                                var r;
                                return { ...H(e, n, i, a),
                                    subTitle2: e.extraSubtitle || void 0,
                                    onClickOpenInSameTab: !t,
                                    reviewScore: e.reviewScore ? {
                                        reviewCount: e.reviewScore.reviewCount ? String(e.reviewScore.reviewCount) : void 0,
                                        score: String(e.reviewScore.score),
                                        rating: e.reviewScore.rating || void 0
                                    } : void 0,
                                    formattedPrice: null === (r = e.price) || void 0 === r ? void 0 : r.formattedPrice,
                                    priceText: d,
                                    shouldAriaHideImages: !0
                                }
                            }(d, e, n, i, t, r);
                        case "MerchCarouselWebPropertyStackedItem":
                            return function(e, n, i, a, t, d, r) {
                                var l, m, s;
                                const o = d && null !== e && void 0 !== e && e.reviewScore && e.reviewScore.reviewCount ? (0, B.Ie)(d, e.reviewScore.score, e.reviewScore.reviewCount) : void 0;
                                return { ...H(e, n, i, a),
                                    propertyType: e.accommodationType || void 0,
                                    roomType: (null === (l = e.feature) || void 0 === l ? void 0 : l.roomType) || void 0,
                                    isPreferredProperty: !!e.isPreferred,
                                    isGenius: !!e.isGenius,
                                    onClickOpenInSameTab: !t,
                                    urgencyTag: e.urgencyText ? {
                                        text: e.urgencyText,
                                        variant: "destructive"
                                    } : void 0,
                                    starRating: K(e.rating),
                                    roomFeature: q(e.feature),
                                    badges: Z(e.badges),
                                    iconField1: V(e.iconField1),
                                    iconField2: V(e.iconField2),
                                    iconField3: V(e.iconField3),
                                    footer: V(e.lastSeenIconField),
                                    price: U(e.priceInfo),
                                    reviewScore: {
                                        formattedScore: (null === o || void 0 === o ? void 0 : o.score) || "",
                                        formattedReviewCount: null === o || void 0 === o ? void 0 : o.reviewCount,
                                        rating: (null === o || void 0 === o ? void 0 : o.rating) || "",
                                        ariaLabel: (null === o || void 0 === o ? void 0 : o.score) || "",
                                        ratingReviewAriaLabel: (null === o || void 0 === o ? void 0 : o.rating) || ""
                                    },
                                    priceSubtext: null === (m = e.priceInfo) || void 0 === m || null === (m = m.pricingPolicies) || void 0 === m || null === (m = m.find((e => e.pricingPolicyType === W.SCr.TAX_CHARGE_INCLUDED))) || void 0 === m ? void 0 : m.value,
                                    pricingTags: Y(null === (s = e.priceInfo) || void 0 === s ? void 0 : s.pricingPolicies),
                                    shouldAriaHideImages: !0,
                                    wishlistWidget: r ? (0, w.e)({
                                        propertyId: parseInt(e.itemId)
                                    }, e.numOfWishlists ? ? void 0) : void 0
                                }
                            }(d, e, n, i, t, l, m);
                        default:
                            throw new Error(`carouselCardDataAdapter does not support the item type ${s}`)
                    }
                }))
            }
            const X = "DesktopCarouselStackedCards",
                J = "DesktopCarouselOverlayCards",
                $ = "MdotCarouselOverlayCards",
                z = "MdotCarouselStackedCards",
                j = "DesktopCarouselPropertyCards",
                ee = "MdotCarouselPropertyCards";
            var ne = i("75c11388");
            var ie = i("5c4eda5e");
            const ae = {
                [z]: S.StackedCard,
                [X]: S.StackedCard,
                [$]: S.OverlayCard,
                [J]: S.OverlayCard,
                [j]: S.PropertyCard,
                [ee]: S.PropertyCard
            };
            const te = e => {
                    let {
                        carouselData: n,
                        isLoading: i,
                        i18n: a,
                        regionId: t,
                        shouldRenderWishlistWidget: d
                    } = e;
                    const {
                        designVariant: l,
                        filtersInfo: m
                    } = n || {}, s = (0, y.getRequestContext)().getSiteType() === E.SiteType.MDOT, o = s ? ie.y.IndexQmabMdot : ie.y.IndexQmabDesktop;
                    if (!n || !l) return {
                        isLoading: i,
                        items: void 0,
                        heading: "",
                        subHeading: void 0,
                        size: _.C.SMALL,
                        isMdot: s,
                        cardDesignVariant: S.StackedCard
                    };
                    if (l.__typename === X || l.__typename === J || l.__typename === $ || l.__typename === z || l.__typename === j || l.__typename === ee) {
                        const e = (c = l.carouselLayout, {
                                [W.nN3.DESKTOP_LARGE]: _.C.LARGE,
                                [W.nN3.DESKTOP_MEDIUM]: _.C.MEDIUM,
                                [W.nN3.DESKTOP_SMALL]: _.C.SMALL,
                                [W.nN3.MDOT_LARGE]: _.C.LARGE,
                                [W.nN3.MDOT_MEDIUM]: _.C.MEDIUM,
                                [W.nN3.MDOT_SMALL]: _.C.SMALL,
                                [W.nN3.APP_LARGE]: _.C.MEDIUM,
                                [W.nN3.APP_MEDIUM]: _.C.MEDIUM,
                                [W.nN3.APP_LARGER]: _.C.LARGE
                            }[c]),
                            k = n.carouselCampaignId,
                            {
                                openCardLinkInNewTab: v,
                                onCtaClick: g
                            } = (0, r._)(k);
                        let N;
                        l.__typename !== X && l.__typename !== J && l.__typename !== $ && l.__typename !== z || (N = l.priceText || void 0);
                        const S = Q(l.aspectRatio, e, o, s, v, l.items, N, a, d),
                            p = l.heading || "",
                            F = l.subHeading || void 0,
                            C = ((e, n) => {
                                if (!e) return;
                                const i = (0, ne.zD)(e.targetLanding);
                                return i ? {
                                    text: e.text,
                                    href: i,
                                    onClick: n
                                } : void 0
                            })(l.carouselCta, g),
                            h = ae[l.__typename];
                        if (m && m.filters.length > 1) throw Error("Not implemented. Multple filters is supported by MerchCarousel");
                        return {
                            isLoading: i,
                            items: S,
                            heading: p,
                            subHeading: F,
                            action: C,
                            size: e,
                            isMdot: s,
                            filtersInfo: m ? {
                                isClientSideFiltering: m.isClientSideFiltering,
                                filters: m.filters[0].values.map((e => ({
                                    id: e.value,
                                    icon: e.icon || void 0,
                                    text: e.title,
                                    isDefault: e.isDefault
                                })))
                            } : void 0,
                            cardDesignVariant: h,
                            titleSize: t === u ? "strong_1" : void 0,
                            regionId: t
                        }
                    }
                    var c;
                    throw new Error(`Data adapter doesn't support deprecated type ${l.__typename}`)
                },
                de = e => {
                    const n = {};
                    return e.filter((e => {
                        if ("FragmentDefinition" !== e.kind) return !0;
                        const i = e.name.value;
                        return !n[i] && (n[i] = !0, !0)
                    }))
                },
                re = [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "Price"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "MerchCarouselItemPrice"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "formattedPrice"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                le = [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "SearchResultsLanding"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "SearchResultsLanding"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
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
                                value: "nrAdults"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "nrChildren"
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
                                value: "nrRooms"
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
                        }]
                    }
                }],
                me = [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ResolvedLinkLanding"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ResolvedLinkLanding"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "url"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                se = [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "DirectLinkLanding"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "DirectLinkLanding"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "urlPath"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "role"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "hash"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "queryParams"
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
                }],
                oe = [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "Image"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "MerchCarouselItemImage"
                        }
                    },
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
                                value: "url"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "width"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "imageWidth"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "height"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "imageHeight"
                                    }
                                }
                            }],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "urlTemplate"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "alt"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                ce = [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "Filter"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "MerchCarouselItemFilter"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "filterId"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "filterValues"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                ue = [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "ReviewScore"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "MerchCarouselItemReview"
                        }
                    },
                    directives: [],
                    selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "score"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "rating"
                            },
                            arguments: [],
                            directives: []
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "reviewCount"
                            },
                            arguments: [],
                            directives: []
                        }]
                    }
                }],
                ke = {
                    kind: "Document",
                    definitions: de([{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "MerchCarouselDesignVariantFragment"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "MerchCarousel"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "designVariant"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "DesktopCarouselStackedCards"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "heading"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "subHeading"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "priceText"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "cardType"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "carouselLayout"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "aspectRatio"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "carouselCta"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "MerchCarouselCTAFragment"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "items"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "StackedCardItem"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "MdotCarouselStackedCards"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "heading"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "subHeading"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "priceText"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "cardType"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "carouselLayout"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "aspectRatio"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "carouselCta"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "MerchCarouselCTAFragment"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "items"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "StackedCardItem"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "DesktopCarouselOverlayCards"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "heading"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "subHeading"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "priceText"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "cardType"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "carouselLayout"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "aspectRatio"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "carouselCta"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "MerchCarouselCTAFragment"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "items"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "OverlayCardItem"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "MdotCarouselOverlayCards"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "heading"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "subHeading"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "priceText"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "cardType"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "carouselLayout"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "aspectRatio"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "carouselCta"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "MerchCarouselCTAFragment"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "items"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "OverlayCardItem"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "DesktopCarouselPropertyCards"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "heading"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "subHeading"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "carouselLayout"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "aspectRatio"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "carouselCta"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "MerchCarouselCTAFragment"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "items"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "PropertyCardItem"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "MdotCarouselPropertyCards"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "heading"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "subHeading"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "carouselLayout"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "aspectRatio"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "carouselCta"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "MerchCarouselCTAFragment"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "items"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "PropertyCardItem"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }].concat([{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "MerchCarouselCTAFragment"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "MerchCTA"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "ariaLabel"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "text"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "targetLanding"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "DirectLinkLanding"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "urlPath"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "role"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "hash"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "queryParams"
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
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "LoginLanding"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "stub"
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
                                                value: "DeeplinkLanding"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "urlPath"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "queryParams"
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
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ResolvedLinkLanding"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
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
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "OpenContextSheet"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sheet"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "WebContextSheet"
                                                            }
                                                        },
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
                                                                    value: "body"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "items"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "InlineFragment",
                                                                                typeCondition: {
                                                                                    kind: "NamedType",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "ContextSheetTextItem"
                                                                                    }
                                                                                },
                                                                                directives: [],
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [{
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "text"
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
                                                                                        value: "ContextSheetList"
                                                                                    }
                                                                                },
                                                                                directives: [],
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [{
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "items"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: [],
                                                                                        selectionSet: {
                                                                                            kind: "SelectionSet",
                                                                                            selections: [{
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "text"
                                                                                                },
                                                                                                arguments: [],
                                                                                                directives: []
                                                                                            }]
                                                                                        }
                                                                                    }]
                                                                                }
                                                                            }, {
                                                                                kind: "InlineFragment",
                                                                                typeCondition: {
                                                                                    kind: "NamedType",
                                                                                    name: {
                                                                                        kind: "Name",
                                                                                        value: "ContextSheetIllustratedTextList"
                                                                                    }
                                                                                },
                                                                                directives: [],
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [{
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "items"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: [],
                                                                                        selectionSet: {
                                                                                            kind: "SelectionSet",
                                                                                            selections: [{
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "text"
                                                                                                },
                                                                                                arguments: [],
                                                                                                directives: []
                                                                                            }, {
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "illustration"
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
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "buttons"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "variant"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "cta"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "text"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "ariaLabel"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "targetLanding"
                                                                                },
                                                                                arguments: [],
                                                                                directives: [],
                                                                                selectionSet: {
                                                                                    kind: "SelectionSet",
                                                                                    selections: [{
                                                                                        kind: "InlineFragment",
                                                                                        typeCondition: {
                                                                                            kind: "NamedType",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "DirectLinkLanding"
                                                                                            }
                                                                                        },
                                                                                        directives: [],
                                                                                        selectionSet: {
                                                                                            kind: "SelectionSet",
                                                                                            selections: [{
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "urlPath"
                                                                                                },
                                                                                                arguments: [],
                                                                                                directives: []
                                                                                            }, {
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "role"
                                                                                                },
                                                                                                arguments: [],
                                                                                                directives: []
                                                                                            }, {
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "hash"
                                                                                                },
                                                                                                arguments: [],
                                                                                                directives: []
                                                                                            }, {
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "queryParams"
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
                                                                                    }, {
                                                                                        kind: "InlineFragment",
                                                                                        typeCondition: {
                                                                                            kind: "NamedType",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "LoginLanding"
                                                                                            }
                                                                                        },
                                                                                        directives: [],
                                                                                        selectionSet: {
                                                                                            kind: "SelectionSet",
                                                                                            selections: [{
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "stub"
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
                                                                                                value: "DeeplinkLanding"
                                                                                            }
                                                                                        },
                                                                                        directives: [],
                                                                                        selectionSet: {
                                                                                            kind: "SelectionSet",
                                                                                            selections: [{
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "urlPath"
                                                                                                },
                                                                                                arguments: [],
                                                                                                directives: []
                                                                                            }, {
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "queryParams"
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
                                                                                    }, {
                                                                                        kind: "InlineFragment",
                                                                                        typeCondition: {
                                                                                            kind: "NamedType",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "ResolvedLinkLanding"
                                                                                            }
                                                                                        },
                                                                                        directives: [],
                                                                                        selectionSet: {
                                                                                            kind: "SelectionSet",
                                                                                            selections: [{
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
                                                                                        kind: "InlineFragment",
                                                                                        typeCondition: {
                                                                                            kind: "NamedType",
                                                                                            name: {
                                                                                                kind: "Name",
                                                                                                value: "ScrollToAnchor"
                                                                                            }
                                                                                        },
                                                                                        directives: [],
                                                                                        selectionSet: {
                                                                                            kind: "SelectionSet",
                                                                                            selections: [{
                                                                                                kind: "Field",
                                                                                                name: {
                                                                                                    kind: "Name",
                                                                                                    value: "anchor"
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
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "ScrollToAnchor"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "anchor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }], {
                        kind: "Document",
                        definitions: de([{
                            kind: "FragmentDefinition",
                            name: {
                                kind: "Name",
                                value: "StackedCardItem"
                            },
                            typeCondition: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "MerchCarouselStackedItem"
                                }
                            },
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "itemId"
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
                                        value: "subtitle"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "extraSubtitle"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "price"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "Price"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "targetLanding"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "SearchResultsLanding"
                                            },
                                            directives: []
                                        }, {
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ResolvedLinkLanding"
                                            },
                                            directives: []
                                        }, {
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "DirectLinkLanding"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "image"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "Image"
                                            },
                                            directives: []
                                        }]
                                    }
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
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "Filter"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "reviewScore"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ReviewScore"
                                            },
                                            directives: []
                                        }]
                                    }
                                }]
                            }
                        }].concat(re, le, me, se, oe, ce, ue)),
                        loc: {
                            start: 0,
                            end: 394,
                            source: {
                                body: "\n  fragment StackedCardItem on MerchCarouselStackedItem {\n    itemId\n    title\n    subtitle\n    extraSubtitle\n    price {\n      ...Price\n    }\n    targetLanding {\n      ...SearchResultsLanding\n      ...ResolvedLinkLanding\n      ...DirectLinkLanding\n    }\n    image {\n      ...Image\n    }\n    filters {\n      ...Filter\n    }\n    reviewScore {\n      ...ReviewScore\n    }\n  }\n  \n  \n  \n  \n  \n  \n  \n",
                                name: "GraphQL request",
                                locationOffset: {
                                    line: 1,
                                    column: 1
                                }
                            }
                        }
                    }.definitions, {
                        kind: "Document",
                        definitions: de([{
                            kind: "FragmentDefinition",
                            name: {
                                kind: "Name",
                                value: "OverlayCardItem"
                            },
                            typeCondition: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "MerchCarouselOverlayItem"
                                }
                            },
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "itemId"
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
                                        value: "subtitle"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "price"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "Price"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "targetLanding"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "SearchResultsLanding"
                                            },
                                            directives: []
                                        }, {
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ResolvedLinkLanding"
                                            },
                                            directives: []
                                        }, {
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "DirectLinkLanding"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "image"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "Image"
                                            },
                                            directives: []
                                        }]
                                    }
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
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "Filter"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "contextualInformation"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }].concat(re, le, me, se, oe, ce)),
                        loc: {
                            start: 0,
                            end: 354,
                            source: {
                                body: "\n  fragment OverlayCardItem on MerchCarouselOverlayItem {\n    itemId\n    title\n    subtitle\n    price {\n      ...Price\n    }\n    targetLanding {\n      ...SearchResultsLanding\n      ...ResolvedLinkLanding\n      ...DirectLinkLanding\n    }\n    image {\n      ...Image\n    }\n    filters {\n      ...Filter\n    }\n    contextualInformation\n  }\n  \n  \n  \n  \n  \n  \n",
                                name: "GraphQL request",
                                locationOffset: {
                                    line: 1,
                                    column: 1
                                }
                            }
                        }
                    }.definitions, {
                        kind: "Document",
                        definitions: de([{
                            kind: "FragmentDefinition",
                            name: {
                                kind: "Name",
                                value: "PropertyCardItem"
                            },
                            typeCondition: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "MerchCarouselWebPropertyStackedItem"
                                }
                            },
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "itemId"
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
                                        value: "subtitle"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "accommodationType"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "reviewScore"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ReviewScore"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "rating"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "Rating"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isPreferred"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isGenius"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "iconField1"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "Icon"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "iconField2"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "Icon"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "iconField3"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "Icon"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "lastSeenIconField"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "Icon"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "badges"
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
                                                value: "ariaLabel"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "badgeVariation"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "feature"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "roomType"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "featurePrefix"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "features"
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
                                                value: "regularPrice"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "Price"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "strikeThroughPrice"
                                            },
                                            arguments: [],
                                            directives: [],
                                            selectionSet: {
                                                kind: "SelectionSet",
                                                selections: [{
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "Price"
                                                    },
                                                    directives: []
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "pricingPolicies"
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
                                                }]
                                            }
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "prefixPriceText"
                                            },
                                            arguments: [],
                                            directives: []
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "suffixPriceText"
                                            },
                                            arguments: [],
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "targetLanding"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "SearchResultsLanding"
                                            },
                                            directives: []
                                        }, {
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "ResolvedLinkLanding"
                                            },
                                            directives: []
                                        }, {
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "DirectLinkLanding"
                                            },
                                            directives: []
                                        }, {
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "PropertyPageLanding"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "image"
                                    },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                        kind: "SelectionSet",
                                        selections: [{
                                            kind: "FragmentSpread",
                                            name: {
                                                kind: "Name",
                                                value: "Image"
                                            },
                                            directives: []
                                        }]
                                    }
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "urgencyText"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "numOfWishlists"
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
                                                    value: "shouldFetchNumOfWishlists"
                                                }
                                            }
                                        }]
                                    }]
                                }]
                            }
                        }].concat(ue, {
                            kind: "Document",
                            definitions: de([{
                                kind: "FragmentDefinition",
                                name: {
                                    kind: "Name",
                                    value: "Rating"
                                },
                                typeCondition: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "MerchCarouselRating"
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
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "symbol"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "popOverContent"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "popOverContentCtaText"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "popOverContentCtaUrl"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "SearchResultsLanding"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "ResolvedLinkLanding"
                                                },
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "DirectLinkLanding"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }].concat(le, me, se)),
                            loc: {
                                start: 0,
                                end: 242,
                                source: {
                                    body: "\n  fragment Rating on MerchCarouselRating {\n    value\n    symbol\n    popOverContent\n    popOverContentCtaText\n    popOverContentCtaUrl {\n      ...SearchResultsLanding\n      ...ResolvedLinkLanding\n      ...DirectLinkLanding\n    }\n  }\n  \n  \n  \n",
                                    name: "GraphQL request",
                                    locationOffset: {
                                        line: 1,
                                        column: 1
                                    }
                                }
                            }
                        }.definitions, [{
                            kind: "FragmentDefinition",
                            name: {
                                kind: "Name",
                                value: "Icon"
                            },
                            typeCondition: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "MerchCarouselIconField"
                                }
                            },
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "icon"
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
                        }], re, le, me, se, [{
                            kind: "FragmentDefinition",
                            name: {
                                kind: "Name",
                                value: "PropertyPageLanding"
                            },
                            typeCondition: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "PropertyPageLanding"
                                }
                            },
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
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
                                        value: "childrenAges"
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
                                        value: "lang"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "nrAdults"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "nrChildren"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "nrRooms"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "pageName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "urlParams"
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
                        }], oe)),
                        loc: {
                            start: 0,
                            end: 1019,
                            source: {
                                body: "\n  fragment PropertyCardItem on MerchCarouselWebPropertyStackedItem {\n    itemId\n    title\n    subtitle\n    accommodationType\n    reviewScore {\n      ...ReviewScore\n    }\n    rating {\n      ...Rating\n    }\n    isPreferred\n    isGenius\n    iconField1 {\n      ...Icon\n    }\n    iconField2 {\n      ...Icon\n    }\n    iconField3 {\n      ...Icon\n    }\n    lastSeenIconField {\n      ...Icon\n    }\n    badges {\n      value\n      ariaLabel\n      badgeVariation\n    }\n    feature {\n      roomType\n      featurePrefix\n      features\n    }\n    priceInfo {\n      regularPrice {\n        ...Price\n      }\n      strikeThroughPrice {\n        ...Price\n      }\n      pricingPolicies {\n        value\n      }\n      prefixPriceText\n      suffixPriceText\n    }\n    targetLanding {\n      ...SearchResultsLanding\n      ...ResolvedLinkLanding\n      ...DirectLinkLanding\n      ...PropertyPageLanding\n    }\n    image {\n      ...Image\n    }\n    urgencyText\n    numOfWishlists @include(if: $shouldFetchNumOfWishlists)\n  }\n  \n  \n  \n  \n  \n  \n  \n  \n  \n",
                                name: "GraphQL request",
                                locationOffset: {
                                    line: 1,
                                    column: 1
                                }
                            }
                        }
                    }.definitions)),
                    loc: {
                        start: 0,
                        end: 1767,
                        source: {
                            body: "\n  fragment MerchCarouselDesignVariantFragment on MerchCarousel {\n    designVariant {\n      ... on DesktopCarouselStackedCards {\n        heading\n        subHeading\n        priceText\n        cardType\n        carouselLayout\n        aspectRatio\n        carouselCta {\n          ...MerchCarouselCTAFragment\n        }\n        items {\n          ...StackedCardItem\n        }\n      }\n      ... on MdotCarouselStackedCards {\n        heading\n        subHeading\n        priceText\n        cardType\n        carouselLayout\n        aspectRatio\n        carouselCta {\n          ...MerchCarouselCTAFragment\n        }\n        items {\n          ...StackedCardItem\n        }\n      }\n      ... on DesktopCarouselOverlayCards {\n        heading\n        subHeading\n        priceText\n        cardType\n        carouselLayout\n        aspectRatio\n        carouselCta {\n          ...MerchCarouselCTAFragment\n        }\n        items {\n          ...OverlayCardItem\n        }\n      }\n      ... on MdotCarouselOverlayCards {\n        heading\n        subHeading\n        priceText\n        cardType\n        carouselLayout\n        aspectRatio\n        carouselCta {\n          ...MerchCarouselCTAFragment\n        }\n        items {\n          ...OverlayCardItem\n        }\n      }\n      ... on DesktopCarouselPropertyCards {\n        heading\n        subHeading\n        carouselLayout\n        aspectRatio\n        carouselCta {\n          ...MerchCarouselCTAFragment\n        }\n        items {\n          ...PropertyCardItem\n        }\n      }\n      ... on MdotCarouselPropertyCards {\n        heading\n        subHeading\n        carouselLayout\n        aspectRatio\n        carouselCta {\n          ...MerchCarouselCTAFragment\n        }\n        items {\n          ...PropertyCardItem\n        }\n      }\n    }\n  }\n  \n  \n  \n  \n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            var ve = i("cedcabf9");
            const ge = {},
                Ne = {
                    kind: "Document",
                    definitions: (e => {
                        const n = {};
                        return e.filter((e => {
                            if ("FragmentDefinition" !== e.kind) return !0;
                            const i = e.name.value;
                            return !n[i] && (n[i] = !0, !0)
                        }))
                    })([{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "MerchComponentsData"
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
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "MerchComponentsDataInput"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "imageWidth"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int"
                                }
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "320"
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "imageHeight"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Int"
                                }
                            },
                            defaultValue: {
                                kind: "IntValue",
                                value: "400"
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "shouldFetchNumOfWishlists"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Boolean"
                                }
                            },
                            defaultValue: {
                                kind: "BooleanValue",
                                value: !1
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
                                    value: "merchComponentsData"
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
                                            value: "components"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "__typename"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "MerchCarousel"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "carouselCampaignId"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "heading"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "subHeading"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "filtersInfo"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
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
                                                                            value: "__typename"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "MerchCarouselTabFilter"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "filterId"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "values"
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
                                                                                            value: "title"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: []
                                                                                    }, {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "icon"
                                                                                        },
                                                                                        arguments: [],
                                                                                        directives: []
                                                                                    }, {
                                                                                        kind: "Field",
                                                                                        name: {
                                                                                            kind: "Name",
                                                                                            value: "isDefault"
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
                                                                    value: "isClientSideFiltering"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "MerchCarouselDesignVariantFragment"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }].concat(ke.definitions)),
                    loc: {
                        start: 0,
                        end: 793,
                        source: {
                            body: "\n  query MerchComponentsData(\n    $input: MerchComponentsDataInput\n    $imageWidth: Int = 320\n    $imageHeight: Int = 400\n    $shouldFetchNumOfWishlists: Boolean = false\n  ) {\n    merchComponentsData(input: $input) {\n      components {\n        __typename\n        ... on MerchCarousel {\n          carouselCampaignId\n          heading\n          subHeading\n          filtersInfo {\n            filters {\n              __typename\n              ... on MerchCarouselTabFilter {\n                filterId\n                values {\n                  value\n                  title\n                  icon\n                  isDefault\n                }\n              }\n            }\n            isClientSideFiltering\n          }\n          ...MerchCarouselDesignVariantFragment\n        }\n      }\n    }\n  }\n  \n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            var Se = i("2bb3685b"),
                pe = i("4933a3e7"),
                Fe = i("5db8920d");

            function Ce(e) {
                var n;
                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    a = arguments.length > 2 ? arguments[2] : void 0,
                    d = arguments.length > 3 ? arguments[3] : void 0,
                    r = arguments.length > 4 ? arguments[4] : void 0,
                    l = arguments.length > 5 ? arguments[5] : void 0,
                    m = arguments.length > 6 ? arguments[6] : void 0,
                    s = arguments.length > 7 ? arguments[7] : void 0;
                const o = {
                        input: {
                            testCampaignIds: (0, y.getRequestContext)().getBasePageUrl().searchParams.getAll(Se.nh),
                            campaignIds: [e],
                            carouselInput: {
                                campaignInput: [{
                                    campaignId: e,
                                    parameters: a
                                }]
                            },
                            ...d && {
                                pageInput: {
                                    searchResultsPageInput: d
                                }
                            }
                        },
                        shouldFetchNumOfWishlists: s ? ? !1
                    },
                    c = (0, T.useI18n)(),
                    [u, {
                        loading: k,
                        data: v,
                        error: g
                    }] = function(e) {
                        const n = { ...ge,
                            ...e
                        };
                        return ve.useLazyQuery(Ne, n)
                    }({
                        context: {
                            headers: { ...(0, Fe.l)(!1, l)
                            }
                        },
                        variables: o
                    });
                (0, t.useEffect)((() => {
                    !i && u()
                }), [u, i]), g && ((0, pe.z)(g), (0, R.reportError)(g), m && m(g));
                const N = null === v || void 0 === v || null === (n = v.merchComponentsData) || void 0 === n || null === (n = n.components) || void 0 === n ? void 0 : n.find((n => "MerchCarousel" === n.__typename && n.carouselCampaignId === e));
                return te({
                    carouselData: N,
                    isLoading: k,
                    i18n: c,
                    regionId: r,
                    shouldRenderWishlistWidget: s
                })
            }
            const he = e => {
                let {
                    campaignName: n,
                    campaignParameters: i,
                    isEligibleToRender: t,
                    searchResultsPageInput: l,
                    regionId: m,
                    shouldRenderWishlistWidget: s
                } = e;
                const o = (0, r.W)(n),
                    c = Ce(o.campaignId, !t, i, l, m, o.timeout, o.onCarouselDataError, s);
                return t ? d().createElement(L, (0, a.Z)({}, c, o)) : null
            }
        },
        "2ea30c97": (e, n, i) => {
            i.d(n, {
                Z: () => d
            });
            var a = i("27fe0528");
            const t = e => {
                var n;
                const i = new Set;
                return null === e || void 0 === e || null === (n = e.merchComponents) || void 0 === n || null === (n = n.components) || void 0 === n || n.forEach((e => {
                    "MerchCarousel" === e.__typename && i.add(e.carouselCampaignId)
                })), [i, e]
            };

            function d(e, n) {
                const [i] = (0, a.Z)(t, n);
                return i.has(e)
            }
        },
        "27fe0528": (e, n, i) => {
            i.d(n, {
                Z: () => C
            });
            var a = i("dc6d28ff"),
                t = i("41c6c66e"),
                d = i("c9d78bdd"),
                r = i("017725b3");
            var l = i("011fe5de");
            const m = {
                    kind: "Document",
                    definitions: (e => {
                        const n = {};
                        return e.filter((e => {
                            if ("FragmentDefinition" !== e.kind) return !0;
                            const i = e.name.value;
                            return !n[i] && (n[i] = !0, !0)
                        }))
                    })([{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "HeroCTAFragment"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "HeroCTA"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "ariaLabel"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "text"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "targetLanding"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "CTATargetLandingFragment"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }].concat(l.u.definitions)),
                    loc: {
                        start: 0,
                        end: 131,
                        source: {
                            body: "\n  fragment HeroCTAFragment on HeroCTA {\n    ariaLabel\n    text\n    targetLanding {\n      ...CTATargetLandingFragment\n    }\n  }\n  \n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                },
                s = {
                    kind: "Document",
                    definitions: (e => {
                        const n = {};
                        return e.filter((e => {
                            if ("FragmentDefinition" !== e.kind) return !0;
                            const i = e.name.value;
                            return !n[i] && (n[i] = !0, !0)
                        }))
                    })([{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "HeroBannerFragment"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "HeroBanner"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "heroCampaignId"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "designVariant"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "InlineFragment",
                                        typeCondition: {
                                            kind: "NamedType",
                                            name: {
                                                kind: "Name",
                                                value: "DesktopHeroIllustration"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "titleFirstLine"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "titleSecondLine"
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
                                                    value: "cta"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "HeroCTAFragment"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "caption"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "HeroTextCaption"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "text"
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
                                                                value: "HeroCountdownCaption"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "campaignEnd"
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
                                                    value: "signature"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "illustration"
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
                                                        alias: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "300"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "300"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "alt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "colorScheme"
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
                                                value: "DesktopHeroFullImage"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "titleFirstLine"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "titleSecondLine"
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
                                                    value: "cta"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "HeroCTAFragment"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "caption"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "HeroTextCaption"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "text"
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
                                                                value: "HeroCountdownCaption"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "campaignEnd"
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
                                                    value: "signature"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "backgroundImage"
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
                                                        alias: {
                                                            kind: "Name",
                                                            value: "smallImageUrl"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "720"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "217"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "mediumImageUrl"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "1440"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "434"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "bigImageUrl"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "2880"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "868"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "alt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "colorScheme"
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
                                                value: "DesktopHeroSolidBg"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "titleFirstLine"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "titleSecondLine"
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
                                                    value: "cta"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "HeroCTAFragment"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "caption"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "HeroTextCaption"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "text"
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
                                                                value: "HeroCountdownCaption"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "campaignEnd"
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
                                                    value: "signature"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "colorScheme"
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
                                                value: "MdotHeroIllustration"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "titleFirstLine"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "cta"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "HeroCTAFragment"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "caption"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "HeroTextCaption"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "text"
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
                                                                value: "HeroCountdownCaption"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "campaignEnd"
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
                                                    value: "signature"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "illustration"
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
                                                        alias: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "300"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "300"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "alt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "colorScheme"
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
                                                value: "MdotHeroImageFullAlignTop"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "titleFirstLine"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "cta"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "HeroCTAFragment"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "caption"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "HeroTextCaption"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "text"
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
                                                                value: "HeroCountdownCaption"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "campaignEnd"
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
                                                    value: "signature"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "backgroundImage"
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
                                                        alias: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "900"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "900"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "smallImageUrl"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "400"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "400"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "mediumImageUrl"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "600"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "600"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "bigImageUrl"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "800"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "800"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "alt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "colorScheme"
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
                                                value: "MdotHeroImageFullAlignBottom"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "titleFirstLine"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "cta"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "HeroCTAFragment"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "caption"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "HeroTextCaption"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "text"
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
                                                                value: "HeroCountdownCaption"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "campaignEnd"
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
                                                    value: "signature"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "backgroundImage"
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
                                                        alias: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "900"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "900"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "smallImageUrl"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "400"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "400"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "mediumImageUrl"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "600"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "600"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "bigImageUrl"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "800"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "800"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "alt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "colorScheme"
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
                                                value: "MdotHeroImageFullAlignLeft"
                                            }
                                        },
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "titleFirstLine"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "cta"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "HeroCTAFragment"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "caption"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "HeroTextCaption"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "text"
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
                                                                value: "HeroCountdownCaption"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "campaignEnd"
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
                                                    value: "signature"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "backgroundImage"
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
                                                        alias: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "900"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "900"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "smallImageUrl"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "400"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "400"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "mediumImageUrl"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "600"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "600"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "bigImageUrl"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "url"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "800"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "800"
                                                            }
                                                        }],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "alt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "colorScheme"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }].concat(m.definitions)),
                    loc: {
                        start: 0,
                        end: 3762,
                        source: {
                            body: "\n  fragment HeroBannerFragment on HeroBanner {\n    heroCampaignId\n    designVariant {\n      ... on DesktopHeroIllustration {\n        titleFirstLine\n        titleSecondLine\n        subtitle\n        cta {\n          ...HeroCTAFragment\n        }\n        caption {\n          ... on HeroTextCaption {\n            text\n          }\n          ... on HeroCountdownCaption {\n            campaignEnd\n          }\n        }\n        signature\n        illustration {\n          id\n          url: url(width: 300, height: 300)\n          alt\n        }\n        colorScheme\n      }\n      ... on DesktopHeroFullImage {\n        titleFirstLine\n        titleSecondLine\n        subtitle\n        cta {\n          ...HeroCTAFragment\n        }\n        caption {\n          ... on HeroTextCaption {\n            text\n          }\n          ... on HeroCountdownCaption {\n            campaignEnd\n          }\n        }\n        signature\n        backgroundImage {\n          id\n          smallImageUrl: url(width: 720, height: 217)\n          mediumImageUrl: url(width: 1440, height: 434)\n          bigImageUrl: url(width: 2880, height: 868)\n          alt\n        }\n        colorScheme\n      }\n      ... on DesktopHeroSolidBg {\n        titleFirstLine\n        titleSecondLine\n        subtitle\n        cta {\n          ...HeroCTAFragment\n        }\n        caption {\n          ... on HeroTextCaption {\n            text\n          }\n          ... on HeroCountdownCaption {\n            campaignEnd\n          }\n        }\n        signature\n        colorScheme\n      }\n      ... on MdotHeroIllustration {\n        titleFirstLine\n        cta {\n          ...HeroCTAFragment\n        }\n        caption {\n          ... on HeroTextCaption {\n            text\n          }\n          ... on HeroCountdownCaption {\n            campaignEnd\n          }\n        }\n        signature\n        illustration {\n          id\n          url: url(width: 300, height: 300)\n          alt\n        }\n        colorScheme\n      }\n      ... on MdotHeroImageFullAlignTop {\n        titleFirstLine\n        cta {\n          ...HeroCTAFragment\n        }\n        caption {\n          ... on HeroTextCaption {\n            text\n          }\n          ... on HeroCountdownCaption {\n            campaignEnd\n          }\n        }\n        signature\n        backgroundImage {\n          id\n          url: url(width: 900, height: 900)\n          smallImageUrl: url(width: 400, height: 400)\n          mediumImageUrl: url(width: 600, height: 600)\n          bigImageUrl: url(width: 800, height: 800)\n          alt\n        }\n        colorScheme\n      }\n      ... on MdotHeroImageFullAlignBottom {\n        titleFirstLine\n        cta {\n          ...HeroCTAFragment\n        }\n        caption {\n          ... on HeroTextCaption {\n            text\n          }\n          ... on HeroCountdownCaption {\n            campaignEnd\n          }\n        }\n        signature\n        backgroundImage {\n          id\n          url: url(width: 900, height: 900)\n          smallImageUrl: url(width: 400, height: 400)\n          mediumImageUrl: url(width: 600, height: 600)\n          bigImageUrl: url(width: 800, height: 800)\n          alt\n        }\n        colorScheme\n      }\n      ... on MdotHeroImageFullAlignLeft {\n        titleFirstLine\n        cta {\n          ...HeroCTAFragment\n        }\n        caption {\n          ... on HeroTextCaption {\n            text\n          }\n          ... on HeroCountdownCaption {\n            campaignEnd\n          }\n        }\n        signature\n        backgroundImage {\n          id\n          url: url(width: 900, height: 900)\n          smallImageUrl: url(width: 400, height: 400)\n          mediumImageUrl: url(width: 600, height: 600)\n          bigImageUrl: url(width: 800, height: 800)\n          alt\n        }\n        colorScheme\n      }\n    }\n  }\n  \n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                },
                o = {
                    kind: "Document",
                    definitions: (e => {
                        const n = {};
                        return e.filter((e => {
                            if ("FragmentDefinition" !== e.kind) return !0;
                            const i = e.name.value;
                            return !n[i] && (n[i] = !0, !0)
                        }))
                    })([{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "PromotionalBannerCTAFragment"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "MerchCTA"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "ariaLabel"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "text"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "targetLanding"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "CTATargetLandingFragment"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }].concat(l.u.definitions)),
                    loc: {
                        start: 0,
                        end: 145,
                        source: {
                            body: "\n  fragment PromotionalBannerCTAFragment on MerchCTA {\n    ariaLabel\n    text\n    targetLanding {\n      ...CTATargetLandingFragment\n    }\n  }\n  \n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                },
                c = {
                    kind: "Document",
                    definitions: (e => {
                        const n = {};
                        return e.filter((e => {
                            if ("FragmentDefinition" !== e.kind) return !0;
                            const i = e.name.value;
                            return !n[i] && (n[i] = !0, !0)
                        }))
                    })([{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "PromotionalBannersCarouselFragment"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "PromotionalBannersCarousel"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "promotionalBanners"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "promotionalBannerCampaignId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "contentArea"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "caption"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "PromotionalBannerSimpleCaption"
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
                                                                value: "PromotionalBannerCountdownCaption"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "campaignEnd"
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
                                                    value: "title"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "PromotionalBannerSimpleTitle"
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
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "subTitle"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "PromotionalBannerSimpleSubTitle"
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
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "buttons"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "variant"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "cta"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "PromotionalBannerCTAFragment"
                                                                },
                                                                directives: []
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
                                            value: "designVariantPromotional"
                                        },
                                        name: {
                                            kind: "Name",
                                            value: "designVariant"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "DesktopPromotionalFullBleedImage"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "fullBleedImage"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "image"
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
                                                                    value: "url"
                                                                },
                                                                arguments: [{
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "width"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "814"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "138"
                                                                    }
                                                                }],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "alt"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "colorScheme"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "signature"
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
                                                        value: "DesktopPromotionalImageLeft"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "image"
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
                                                                    value: "url"
                                                                },
                                                                arguments: [{
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "width"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "248"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "248"
                                                                    }
                                                                }],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "alt"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "colorScheme"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "signature"
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
                                                        value: "DesktopPromotionalImageRight"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "image"
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
                                                                    value: "url"
                                                                },
                                                                arguments: [{
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "width"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "248"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "248"
                                                                    }
                                                                }],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "alt"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "colorScheme"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "signature"
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
                                                        value: "MdotPromotionalFullBleedImage"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: {
                                                            kind: "Name",
                                                            value: "fullBleedImage"
                                                        },
                                                        name: {
                                                            kind: "Name",
                                                            value: "image"
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
                                                                    value: "url"
                                                                },
                                                                arguments: [{
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "width"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "358"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "136"
                                                                    }
                                                                }],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "alt"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "colorScheme"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "signature"
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
                                                        value: "MdotPromotionalImageLeft"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "image"
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
                                                                    value: "url"
                                                                },
                                                                arguments: [{
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "width"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "128"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "128"
                                                                    }
                                                                }],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "alt"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "colorScheme"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "signature"
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
                                                        value: "MdotPromotionalImageRight"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "image"
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
                                                                    value: "url"
                                                                },
                                                                arguments: [{
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "width"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "128"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "128"
                                                                    }
                                                                }],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "alt"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "colorScheme"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "signature"
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
                                                        value: "MdotPromotionalIllustrationLeft"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "image"
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
                                                                    value: "url"
                                                                },
                                                                arguments: [{
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "width"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "128"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "128"
                                                                    }
                                                                }],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "alt"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "colorScheme"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "signature"
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
                                                        value: "MdotPromotionalIllustrationRight"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "image"
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
                                                                    value: "url"
                                                                },
                                                                arguments: [{
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "width"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "128"
                                                                    }
                                                                }, {
                                                                    kind: "Argument",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "height"
                                                                    },
                                                                    value: {
                                                                        kind: "IntValue",
                                                                        value: "128"
                                                                    }
                                                                }],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "alt"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "colorScheme"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "signature"
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
                    }].concat(o.definitions)),
                    loc: {
                        start: 0,
                        end: 2400,
                        source: {
                            body: "\n  fragment PromotionalBannersCarouselFragment on PromotionalBannersCarousel {\n    promotionalBanners {\n      promotionalBannerCampaignId\n      contentArea {\n        caption {\n          ... on PromotionalBannerSimpleCaption {\n            value\n          }\n          ... on PromotionalBannerCountdownCaption {\n            campaignEnd\n          }\n        }\n        title {\n          ... on PromotionalBannerSimpleTitle {\n            value\n          }\n        }\n        subTitle {\n          ... on PromotionalBannerSimpleSubTitle {\n            value\n          }\n        }\n        buttons {\n          variant\n          cta {\n            ...PromotionalBannerCTAFragment\n          }\n        }\n      }\n      designVariantPromotional: designVariant {\n        ... on DesktopPromotionalFullBleedImage {\n          fullBleedImage: image {\n            id\n            url(width: 814, height: 138)\n            alt\n          }\n          colorScheme\n          signature\n        }\n        ... on DesktopPromotionalImageLeft {\n          image {\n            id\n            url(width: 248, height: 248)\n            alt\n          }\n          colorScheme\n          signature\n        }\n        ... on DesktopPromotionalImageRight {\n          image {\n            id\n            url(width: 248, height: 248)\n            alt\n          }\n          colorScheme\n          signature\n        }\n        ... on MdotPromotionalFullBleedImage {\n          fullBleedImage: image {\n            id\n            url(width: 358, height: 136)\n            alt\n          }\n          colorScheme\n          signature\n        }\n        ... on MdotPromotionalImageLeft {\n          image {\n            id\n            url(width: 128, height: 128)\n            alt\n          }\n          colorScheme\n          signature\n        }\n        ... on MdotPromotionalImageRight {\n          image {\n            id\n            url(width: 128, height: 128)\n            alt\n          }\n          colorScheme\n          signature\n        }\n        ... on MdotPromotionalIllustrationLeft {\n          image {\n            id\n            url(width: 128, height: 128)\n            alt\n          }\n          colorScheme\n          signature\n        }\n        ... on MdotPromotionalIllustrationRight {\n          image {\n            id\n            url(width: 128, height: 128)\n            alt\n          }\n          colorScheme\n          signature\n        }\n      }\n    }\n  }\n  \n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            var u = i("cedcabf9");
            const k = {},
                v = {
                    kind: "Document",
                    definitions: (e => {
                        const n = {};
                        return e.filter((e => {
                            if ("FragmentDefinition" !== e.kind) return !0;
                            const i = e.name.value;
                            return !n[i] && (n[i] = !0, !0)
                        }))
                    })([{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "MerchComponents"
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
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "MerchComponentsInput"
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
                                    value: "merchComponents"
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
                                            value: "components"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "__typename"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "MerchCarouselFragment"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "regions"
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
                                                    value: "components"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "HeroBannerFragment"
                                                        },
                                                        directives: []
                                                    }, {
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "GlobalAlertsMerchComponents"
                                                        },
                                                        directives: []
                                                    }, {
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "PromotionalBannersCarouselFragment"
                                                        },
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "experimentationTracking"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "__typename"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "ExperimentationTrackingFragment"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }].concat([{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "MerchCarouselFragment"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "MerchCarousel"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "carouselCampaignId"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }], s.definitions, [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "GlobalAlertsMerchComponents"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "GlobalAlerts"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "alerts"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "alertCampaignId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "designVariant"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "DesktopAlertDefault"
                                                    }
                                                },
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
                                                            value: "firstParagraph"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "secondParagraph"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "thirdParagraph"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "icon"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "category"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "severity"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "expanded"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "firstCta"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "ariaLabel"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "text"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "targetLanding"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "SearchResultsLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
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
                                                                                    value: "nrAdults"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "nrChildren"
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
                                                                                    value: "nrRooms"
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
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "DirectLinkLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "role"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "urlPath"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "queryParams"
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
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "DeeplinkLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "urlPath"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "queryParams"
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
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "LoginLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "stub"
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
                                                            value: "secondCta"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "ariaLabel"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "text"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "targetLanding"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "SearchResultsLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
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
                                                                                    value: "nrAdults"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "nrChildren"
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
                                                                                    value: "nrRooms"
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
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "DirectLinkLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "role"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "urlPath"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "queryParams"
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
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "DeeplinkLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "urlPath"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "queryParams"
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
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "LoginLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "stub"
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
                                                            value: "thirdCta"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "ariaLabel"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "text"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "targetLanding"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "SearchResultsLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
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
                                                                                    value: "nrAdults"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "nrChildren"
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
                                                                                    value: "nrRooms"
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
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "DirectLinkLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "role"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "urlPath"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "queryParams"
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
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "DeeplinkLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "urlPath"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "queryParams"
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
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "LoginLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "stub"
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
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "MdotAlertDefault"
                                                    }
                                                },
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
                                                            value: "firstParagraph"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "secondParagraph"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "thirdParagraph"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "icon"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "category"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "severity"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "expanded"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "firstCta"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "ariaLabel"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "text"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "targetLanding"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "SearchResultsLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
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
                                                                                    value: "nrAdults"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "nrChildren"
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
                                                                                    value: "nrRooms"
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
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "DirectLinkLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "role"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "urlPath"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "queryParams"
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
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "DeeplinkLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "urlPath"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "queryParams"
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
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "LoginLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "stub"
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
                                                            value: "secondCta"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "ariaLabel"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "text"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "targetLanding"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "SearchResultsLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
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
                                                                                    value: "nrAdults"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "nrChildren"
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
                                                                                    value: "nrRooms"
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
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "DirectLinkLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "role"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "urlPath"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "queryParams"
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
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "DeeplinkLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "urlPath"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "queryParams"
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
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "LoginLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "stub"
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
                                                            value: "thirdCta"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "ariaLabel"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "text"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "targetLanding"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "SearchResultsLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
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
                                                                                    value: "nrAdults"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "nrChildren"
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
                                                                                    value: "nrRooms"
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
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "DirectLinkLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "role"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "urlPath"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "queryParams"
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
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "DeeplinkLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "urlPath"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "queryParams"
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
                                                                    }, {
                                                                        kind: "InlineFragment",
                                                                        typeCondition: {
                                                                            kind: "NamedType",
                                                                            name: {
                                                                                kind: "Name",
                                                                                value: "LoginLanding"
                                                                            }
                                                                        },
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "stub"
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
                                    }]
                                }
                            }]
                        }
                    }], c.definitions, [{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "ExperimentationTrackingFragment"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ExperimentationTracking"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "etStateBlob"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "trackingInRegions"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "regionId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "trackingData"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sourceId"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sourceType"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "stages"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "experimentHashTag"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "stageNumber"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "lifecycleEvent"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "goals"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "goalNumber"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "experimentHashTag"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "lifecycleEvent"
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
                    }])),
                    loc: {
                        start: 0,
                        end: 487,
                        source: {
                            body: "\n  query MerchComponents($input: MerchComponentsInput) {\n    merchComponents(input: $input) {\n      components {\n        __typename\n        ...MerchCarouselFragment\n      }\n      regions {\n        id\n        components {\n          ...HeroBannerFragment\n          ...GlobalAlertsMerchComponents\n          ...PromotionalBannersCarouselFragment\n        }\n      }\n      experimentationTracking {\n        __typename\n        ...ExperimentationTrackingFragment\n      }\n    }\n  }\n  \n  \n  \n  \n  \n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            var g = i("2bb3685b"),
                N = i("4933a3e7");
            const S = () => ["index_global_alerts", "index_main"];
            var p = i("5db8920d"),
                F = i("dfb9cb18");

            function C(e, n, i) {
                var l, m;
                const s = (0, a.getRequestContext)(),
                    o = s.getBasePageUrl(),
                    c = o.toString(),
                    C = o.searchParams,
                    h = C.getAll(g.nh),
                    I = i ? [i] : S(),
                    b = (0, d.Y2)() ? [r.HeM.INDEPENDENCE_DAY] : [],
                    f = (0, F.m)(C),
                    L = {
                        input: {
                            regionsIds: I,
                            testCampaignIds: h,
                            clientEligibility: b
                        }
                    };
                n || (0, N.z)("Calling Merch Platform with variables ", {
                    queryVariables: L
                });
                const {
                    error: y,
                    loading: R,
                    data: T,
                    ..._
                } = function(e) {
                    const n = { ...k,
                        ...e
                    };
                    return u.useQuery(v, n)
                }({
                    skip: n,
                    context: {
                        headers: { ...(0, p.l)(!0),
                            ...(0, F.j)(f)
                        }
                    },
                    variables: L
                });
                return n || (0, N.$)(T, L, {
                    error: y,
                    loading: R,
                    data: T,
                    ..._
                }), n || (0, N.z)("Response from Merch Platform ", {
                    error: y,
                    loading: R,
                    data: T
                }), n || R || "MerchComponentsResult" === (null === T || void 0 === T || null === (l = T.merchComponents) || void 0 === l ? void 0 : l.__typename) || (0, t.reportGrumble)("No result from merch platform", {
                    requestUrl: c
                }), y && (0, t.reportError)(y), "MerchComponentsResult" === (null === T || void 0 === T || null === (m = T.merchComponents) || void 0 === m ? void 0 : m.__typename) ? e(T, {
                    requestContext: s,
                    loading: R,
                    error: y,
                    regionId: i
                }) : e(void 0, {
                    requestContext: s,
                    loading: R,
                    error: y,
                    regionId: i
                })
            }
        },
        "4933a3e7": (e, n, i) => {
            i.d(n, {
                $: () => r,
                z: () => t
            });
            var a = i("dc6d28ff");
            const t = function() {
                const e = (0, a.getRequestContext)(),
                    n = e.getBPlatformEnvironment(),
                    i = e.getBasePageUrl(),
                    t = e.isInternalUser() && "1" === i.searchParams.get("debug");
                if ((!n || "dev" === n || "dqs" === n) && t) {
                    for (var d = arguments.length, r = new Array(d), l = 0; l < d; l++) r[l] = arguments[l];
                    console.log(r)
                }
            };
            let d;

            function r(e, n, i) {
                const t = (0, a.getRequestContext)(),
                    r = t.getBasePageUrl();
                t.isInternalUser() && "1" === r.searchParams.get("debug_merch") && null !== e && void 0 !== e && e.merchComponents && e !== d && (console.groupCollapsed("Merch Platform debug info"), console.log("Merch Platform request variables:", n), console.log("Merch Platform response data:", e), console.log("Metadata:", i), console.groupEnd(), d = e)
            }
        },
        "75c11388": (e, n, i) => {
            i.d(n, {
                zD: () => d,
                CO: () => r
            });
            var a = i("30190550"),
                t = (i("41c6c66e"), i("d1e54a96"));
            i("ead71eb0"), i("84451606"), i("43a4d203"), i("dc6d28ff");
            i("017725b3");
            const d = e => "LoginLanding" === (null === e || void 0 === e ? void 0 : e.__typename) ? l() : "DeeplinkLanding" === (null === e || void 0 === e ? void 0 : e.__typename) ? m(e) : "DirectLinkLanding" === (null === e || void 0 === e ? void 0 : e.__typename) ? s(e) : "ResolvedLinkLanding" === (null === e || void 0 === e ? void 0 : e.__typename) ? o(e) : "ScrollToAnchor" === (null === e || void 0 === e ? void 0 : e.__typename) ? c(e) : void 0,
                r = e => {
                    switch (e) {
                        case "ADMIN":
                            return "admin";
                        case "APP":
                            return "app";
                        case "BOOK":
                            return "book";
                        case "JOIN":
                            return "join";
                        case "CRUISES":
                            return "cruises";
                        default:
                            return
                    }
                },
                l = () => (0, a.wd)({
                    componentId: a.au.MERCH_PLATFORM_INDEX_CTA,
                    prompt: a.L4.SIGN_IN
                }),
                m = e => {
                    let {
                        urlPath: n,
                        queryParams: i
                    } = e;
                    const a = new URL(n);
                    for (const t of i || []) a.searchParams.set(t.name, t.value);
                    return a.toString()
                },
                s = e => {
                    let {
                        urlPath: n,
                        queryParams: i,
                        role: a,
                        hash: d
                    } = e;
                    const l = new URLSearchParams;
                    for (const t of i || []) l.set(t.name, t.value);
                    return (0, t.constructUrl)({
                        host: a ? r(a) : void 0,
                        pathname: n,
                        searchParams: l,
                        hash: d ? ? void 0
                    }).toString()
                },
                o = e => {
                    let {
                        url: n
                    } = e;
                    return n
                },
                c = e => {
                    let {
                        anchor: n
                    } = e;
                    return `#${n}`
                }
        },
        dfb9cb18: (e, n, i) => {
            i.d(n, {
                j: () => d,
                m: () => r
            });
            var a = i("3d486da1"),
                t = i("2bb3685b");
            const d = e => 0 === Object.keys(e).length || "prod" === (0, a.dU)() ? {} : {
                    "X-Booking-Dev-Service-Override": JSON.stringify(e)
                },
                r = e => {
                    const n = {};
                    return t.gh.forEach((i => {
                        const a = e.get(`dev_${i}`);
                        a && (n[i] = a)
                    })), n
                }
        }
    }
]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/33481b61.e2e802fd.chunk.js.map