"use strict";
(self["b-web-shell-components__LOADABLE_LOADED_CHUNKS__"] = self["b-web-shell-components__LOADABLE_LOADED_CHUNKS__"] || []).push([
    ["b9a82cb8"], {
        d0989236: (e, t, i) => {
            i.d(t, {
                B: () => a
            });
            var n = i("dc6d28ff");

            function a() {
                const e = (0, n.getRequestContext)();
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
        30190550: (e, t, i) => {
            i.d(t, {
                au: () => s,
                L4: () => o,
                wd: () => l
            });
            var n = i("dc6d28ff"),
                a = i("af1e2b38");
            const r = /^(b_feature_.*|exp_.*|i_am_from)$/;
            const l = function(e) {
                var t;
                const i = (0, n.getRequestContext)(),
                    l = i.getBPlatformEnvironment(),
                    s = !(!l || "prod" !== l),
                    o = i.getBasePageUrl(),
                    d = i.getEncryptedCommonOauthState(),
                    c = null === (t = i.getAffiliate()) || void 0 === t ? void 0 : t.id,
                    u = i.getLanguage(),
                    m = i.getActionName(),
                    g = i.isInternalIp(),
                    {
                        isMDOT: v
                    } = (0, a.Z6)(),
                    {
                        componentId: h,
                        iframe: p,
                        experiments: k,
                        customParams: b,
                        devHosts: C
                    } = e,
                    _ = null === o || void 0 === o ? void 0 : o.host.endsWith("booking.cn"),
                    x = b || {},
                    f = `https://${function(e,t,i){return e?"account.booking."+(t?"cn":"com"):i&&i.ap?i.ap:"account.dqs.booking.com"}(s,_,C)}/auth/oauth2`,
                    S = `https://${function(e,t,i){return e?"secure.booking."+(t?"cn":"com"):i&&i.book?i.book:"book.dqs.booking.com"}(s,_,C)}/login.html?op=oauth_return`,
                    N = new URL(f),
                    y = function(e) {
                        return e ? "vO1Kblk7xX9tUn2cpZLS" : "b_test_fe"
                    }(s);
                ((e, t, i, n) => {
                    e.searchParams.set("client_id", n), e.searchParams.set("redirect_uri", i), e.searchParams.set("response_type", t.anon ? "anon_session" : "code")
                })(N, e, S, y), p && (N.searchParams.set("iframe", v ? "2" : "1"), x.iframe = v ? "2" : "1"), ((e, t, i, n, a) => {
                    i && e.searchParams.set("lang", i), n && e.searchParams.set("aid", n.toString()), a && e.searchParams.set("bkng_action", a), t.popup && e.searchParams.set("popup", "1"), t.prompt && e.searchParams.set("prompt", t.prompt), t.experimentVariant && e.searchParams.set("variant", t.experimentVariant.toString()), t.canShowGeniusMessaging && e.searchParams.set("genius", "1")
                })(N, e, u, c, m), s && !g || function(e, t) {
                    t.searchParams.forEach(((t, i) => {
                        r.test(i) && e.searchParams.set(i, t)
                    }))
                }(N, o);
                const T = {
                    id: h
                };
                if (k && (T.data = function(e) {
                        const t = {};
                        return Object.keys(e).forEach((i => {
                            var n, a, r, l;
                            const s = {};
                            null !== (n = e[i]) && void 0 !== n && n.variant && (s.v = e[i].variant), null !== (a = e[i]) && void 0 !== a && a.auth_request_goal && (s.g1 = e[i].auth_request_goal), null !== (r = e[i]) && void 0 !== r && r.auth_page_loaded_goal && (s.g2 = e[i].auth_page_loaded_goal), null !== (l = e[i]) && void 0 !== l && l.auth_page_interaction_goal && (s.g3 = e[i].auth_page_interaction_goal), t[i] = s
                        })), t
                    }(k)), Object.keys(x).length && (T.params = x), d) {
                    const e = function(e, t) {
                        try {
                            let i;
                            const n = JSON.stringify(t);
                            return i = btoa(n), `${e}*${i}`
                        } catch (i) {
                            return `${e}*`
                        }
                    }(d, T);
                    e && N.searchParams.set("state", e)
                }
                return N.toString()
            };
            let s = function(e) {
                    return e.BP_AUTH_CHECKBOX = "bp_auth_checkbox", e.BP_AUTH_CHECKBOX_GENIUS = "bp_auth_checkbox_genius", e.BP_AUTH_CHECKBOX_GENIUS_MDOT = "bp_auth_checkbox_genius_mdot", e.BP_AUTH_CHECKBOX_MDOT = "bp_auth_checkbox_mdot", e.BP_GENIUS_INLINE = "bp_genius_inline", e.BP_GENIUS_INLINE_MDOT = "bp_genius_inline_mdot", e.BP_INLINE = "bp_inline", e.BP_INLINE_MDOT = "bp_inline_mdot", e.BS2_AUTH_LOW = "bs2_auth_low", e.BS2_AUTH_LOW_MDOT = "bs2_auth_low_mdot", e.CARS_INDEX_LP = "cars_index_lp", e.CBCC_LANDING_PAGE = "cbcc_landing_page", e.CO_BRAND_PRODUCTS_SIGNUP = "co_brand_products_signup", e.GENIUSVIP_ENROLLMENT = "geniusvip_enrollment", e.GENIUS_INDEX_BANNER = "genius_index_banner", e.GENIUS_INDEX_CAROUSEL = "genius_index_carousel", e.GENIUS_INDEX_SHEET = "genius_index_sheet", e.GENIUS_LANDING_PAGE = "genius_landing_page", e.GENIUS_LANDING_PAGE_INCENTIVE_CAMPAIGN = "genius_lp_incentive_campaign", e.GENIUS_ROOM_TABLE_BANNER_MDOT = "genius_rt_mdot_banner", e.GENIUS_ROOM_TABLE_BANNER_WWW = "genius_room_table_banner_www", e.GENIUS_SEARCHRESULTS_SHEET = "genius_searchresults_sheet", e.GENIUS_SHEET = "genius_sheet", e.GENIUS_SIGN_IN_EMAIL_POPOVER = "genius_sign_in_email_popover", e.HELP_CENTER = "help_center", e.INDEX = "index", e.LANDING_PAGES = "landing_pages", e.LANDING_PAGES_HOLIDAYS = "landing_pages_holidays", e.LOGIN_CARD = "login_card", e.LOGIN_CARD_SOCIAL = "login_card_social", e.MEMBERSHIP_HUB_REDIRECT = "membership_hub_redirect", e.MERCH_PLATFORM_INDEX = "merch_platform_index", e.MERCH_PLATFORM_INDEX_CTA = "merch_platform_index_cta", e.MERCH_PLATFORM_PROPERTY_PAGE_CTA = "merch_platform_property_page_cta", e.MERCH_PLATFORM_SEARCH_RESULTS_PAGE_CTA = "merch_platform_search_results_page_cta", e.MERCH_PLATFORM_SR = "merch_platform_sr", e.PAYMENT_TRANSACTIONS = "payment_transactions", e.PROPERY_PAGE = "propery_page", e.REACT_SHELL_GOOGLE_ONE_TAP = "react_shell_google_one_tap", e.SEARCH_RESULTS = "search_results", e.SEARCH_RESULTS_MDOT_PROPERTY_LIST_CTA_MDOT = "search_results_mdot_property_list_cta", e.SEARCH_RESULTS_WWW_PROPERTY_LIST_CTA_MDOT = "search_results_www_property_list_cta", e.SELF_SERVICE_BANNER = "self_service_banner", e.TRAVELLER_HEADER = "traveller_header", e.WISHLIST_BTN = "wishlist_btn", e.WISHLIST_BTN_SR = "wishlist_btn_sr", e.WISHLIST_DETAILS = "wishlist_details", e
                }({}),
                o = function(e) {
                    return e.SIGN_IN = "signin", e.IFRAME_WITH_EMAIL = "iframe-with-email", e.REGISTER = "register", e.NONE = "none", e
                }({})
        },
        af1e2b38: (e, t, i) => {
            i.d(t, {
                NM: () => n.N,
                Z6: () => l
            });
            var n = i("5245e060"),
                a = i("dc6d28ff");
            const r = () => (0, a.getRequestContext)().getSiteType() ? ? n.N.WWW,
                l = () => {
                    const e = r();
                    return {
                        isWWW: e === n.N.WWW,
                        isMDOT: e === n.N.MDOT,
                        isTDOT: e === n.N.TDOT
                    }
                }
        },
        "34d74ee3": (e, t, i) => {
            i.d(t, {
                c: () => n
            });
            const n = {
                ACCOMMODATIONS: "accommodations",
                AIRPORT_TAXIS: "airport_taxis",
                ATTRACTIONS: "attractions",
                CARS: "cars",
                FLIGHTS: "flights",
                PACKAGES: "packages",
                BUSINESS_TRIP: "business_trip"
            }
        },
        "330e5712": (e, t, i) => {
            i.d(t, {
                A7: () => k,
                Hj: () => c,
                KP: () => d,
                LO: () => b,
                M5: () => o,
                MX: () => C,
                On: () => p,
                QS: () => r,
                XG: () => x,
                YB: () => v,
                _z: () => f,
                bx: () => m,
                m3: () => g,
                o6: () => N,
                r2: () => h,
                sZ: () => u,
                vb: () => s,
                w7: () => _,
                ye: () => S,
                zJ: () => l
            });
            var n = i("34d74ee3"),
                a = i("017725b3");
            const r = ["support", "discover", "legalAndSettings", "partners", "about"],
                l = {
                    support: ["covid19_info", "manage_your_trips", "help_center", "trust_and_safety"],
                    discover: ["genius_loyalty", "deals_index", "travel_articles", "booking_business", "traveller_awards", "car_hire", "flight_finder", "restaurant_reservations", "travel_agents"],
                    legalAndSettings: ["manage_privacy_settings", "privacy", "terms_and_conditions", "accessibility_statement", "dispute_resolution", "do_not_sell_my_info", "modern_slavery_statement", "human_rights_statement", "legal_footer", "pipl_personalization"],
                    partners: ["extranet_login_footer", "partner_help_footer", "list_your_property_footer", "become_affiliate", "become_partner"],
                    about: ["about", "contact_us", "business_license", "how_we_work", "sustainability", "press_center", "careers", "investor_relations", "corp_contact", "content_guidelines"]
                },
                s = (Object.values(l).flat(), ["country", "region", "city", "district", "airport", "hotel", "landmark", "booking_home", "apartments", "resorts", "villas", "hostels", "bed_and_breakfast", "guest_house", "unique_places", "destination", "flights_all", "cars_all", "holidays_all", "product_guides", "discover", "reviews", "monthly_stays"]),
                o = ["country", "region", "city", "district", "airport", "hotel", "landmark"],
                d = "https://account.booking.com",
                c = "en-gb",
                u = ["BOOKING_BRANDED", "COBRAND", "HYBRID"],
                m = "header_question_mark",
                g = {
                    [n.c.ACCOMMODATIONS]: {
                        header: "profile_contact_cs"
                    },
                    [n.c.FLIGHTS]: {
                        header: "hc_entry_point_flights_header",
                        footer: "hc_entry_point_flights_footer"
                    }
                };
            let v = function(e) {
                return e.CN_SITE_SELECT = "cn_site_select", e.COM_SITE_SELECT_MDOT = "com_site_select_anonymous_mdot3", e.COM_SITE_SELECT_DESKTOP = "com_site_select_anonymous", e.COM_SITE_SELECT_LOGGED_MDOT = "com_site_select_logged_mdot", e.COM_STIE_SELECT_LOGGED_DESKTOP = "com_site_select_logged2", e
            }({});
            const h = "cn",
                p = "com",
                k = "hasCnPhoneNumberCache",
                b = ,
                C = "booking.cn",
                _ = {
                    app: "www",
                    book: "secure"
                };
            let x = function(e) {
                    return e[e.FEAT_USELSESS = -1] = "FEAT_USELSESS", e[e.FEAT_OFF = 0] = "FEAT_OFF", e[e.FEAT_ON = 1] = "FEAT_ON", e[e.FEAT_ON_LOGGEDIN_DESKTOP = 2] = "FEAT_ON_LOGGEDIN_DESKTOP", e
                }({}),
                f = function(e) {
                    return e[e.NO_ACTION = 0] = "NO_ACTION", e[e.SHOW_SITE_SELECTION = 1] = "SHOW_SITE_SELECTION", e[e.SHOW_REDIRECTION_POPUP = 2] = "SHOW_REDIRECTION_POPUP", e[e.REDIRECT = 3] = "REDIRECT", e
                }({});
            const S = {
                    [a.Ebk.DISRUPTIVE]: "disruptive",
                    [a.Ebk.NORMAL]: "normal"
                },
                N = {
                    1: "book_bs1",
                    2: "book_bs2",
                    25: "book_bs25",
                    3: "book_bs3"
                }
        },
        78581105: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => z
            });
            var n = i("ead71eb0"),
                a = i.n(n),
                r = i("3d054e81"),
                l = i("ba1316c3"),
                s = i.n(l),
                o = i("5245e060"),
                d = i("dc6d28ff"),
                c = i("d1e54a96");
            const u = () => {
                var e;
                const t = null === (e = (0, d.getRequestContext)().getUserAgent()) || void 0 === e ? void 0 : e.deviceType,
                    i = (0, d.getRequestContext)().getSiteType();
                switch (t) {
                    case "mobile":
                        return "small";
                    case "tablet":
                        return "medium";
                    case "desktop":
                        return "large"
                }
                switch (i) {
                    case o.N.ANDROID:
                    case o.N.IOS:
                    case o.N.MDOT:
                        return "small";
                    case o.N.TDOT:
                        return "medium";
                    default:
                        return "large"
                }
            };
            var m = i("6222292b"),
                g = i("c44dcb0c"),
                v = i("fd1ca1ab"),
                h = i("9a67ad93"),
                p = i("48b15e3a"),
                k = i("cedcabf9"),
                b = i("41c6c66e");
            const C = {
                kind: "Document",
                definitions: (e => {
                    const t = {};
                    return e.filter((e => {
                        if ("FragmentDefinition" !== e.kind) return !0;
                        const i = e.name.value;
                        return !t[i] && (t[i] = !0, !0)
                    }))
                })([{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "GlobalAlertConfigs"
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
                                                        value: "GlobalAlertsMerchComponents"
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
                }])),
                loc: {
                    start: 0,
                    end: 217,
                    source: {
                        body: "\n  query GlobalAlertConfigs($input: MerchComponentsInput) {\n    merchComponents(input: $input) {\n      regions {\n        id\n        components {\n          ...GlobalAlertsMerchComponents\n        }\n      }\n    }\n  }\n  \n",
                        name: "GraphQL request",
                        locationOffset: {
                            line: 1,
                            column: 1
                        }
                    }
                }
            };
            var _ = i("390896f3"),
                x = i("330e5712"),
                f = i("1802a841"),
                S = i("30190550");
            const N = "business",
                y = "sb_travel_purpose";
            new RegExp("^.+-(min|[0-9]+)-(max|[0-9]+)-1", "i");

            function T(e) {
                let {
                    ucfac: t,
                    ucfgff: i,
                    ffsau: n,
                    highlightedPropertyId: a,
                    tripThemeId: r,
                    destType: l,
                    destId: s,
                    isAroundme: o,
                    latitude: u,
                    longitude: m,
                    travelPurpose: g,
                    sorter: v,
                    selectedFilters: h,
                    checkin: p,
                    checkout: k,
                    nbAdults: b,
                    nbChildren: C,
                    childrenAges: _,
                    nbRooms: x,
                    postcard: f,
                    sleepingRoomMatch: S,
                    showApartHotels: T,
                    loginRedirect: L,
                    fromSearchHistorySearchbox: I,
                    lpThemeId: E,
                    previousSearchId: A,
                    srView: j,
                    sourceLabel: w
                } = e;
                const F = (0, d.getRequestContext)().getLanguage(),
                    O = (0, c.constructUrl)({
                        pathname: `/searchresults${"en-us"===F?"":"."+F}.html`
                    }),
                    P = O.searchParams;
                if (p && k && (P.set("checkin", p), P.set("checkout", k)), s && l && (P.set("dest_id", String(s)), P.set("dest_type", String(l).toLowerCase())), "boolean" === typeof o && P.set("is_aroundme", o ? "1" : "0"), "undefined" !== typeof u && "undefined" !== typeof m && (P.set("latitude", String(u)), P.set("longitude", String(m))), "undefined" !== typeof g) {
                    const e = function(e) {
                        return 1 === e ? N : 2 === e ? "leisure" : void 0
                    }(parseInt(String(g), 10));
                    e && P.set(y, e)
                }
                return h && P.set("nflt", h), v && P.set("order", v), "undefined" !== typeof b && (P.set("group_adults", String(b)), P.set("req_adults", String(b))), "undefined" !== typeof x && P.set("no_rooms", String(x)), "undefined" !== typeof C && (P.set("group_children", String(C)), P.set("req_children", String(C))), _ && _.forEach((e => {
                    P.append("age", String(e)), P.append("req_age", String(e))
                })), a && P.set("highlighted_hotels", String(a)), r && P.set("trip_theme", String(r)), t && P.set("ucfac", t), i && P.set("ucfgff", i), n && P.set("ffsau", n), f && P.set("postcard", f), S && P.set("slp_r_match_to", S), T && P.set("shw_aparth", T), L && P.set("login_redirect", L), I && P.set("fshsb", "1"), E && P.set("theme_id", String(E)), A && P.set("previous_search_id", A), j && P.set("sr_view", j), w && P.set("source_label", w), O
            }
            const L = e => {
                    switch (e.__typename) {
                        case "DeeplinkLanding":
                            return A(e);
                        case "DirectLinkLanding":
                            return w(e);
                        case "LoginLanding":
                            return E(e);
                        case "SearchResultsLanding":
                            return I(e);
                        default:
                            return void(0, b.reportWarning)(`[mapCallToActionUrl] Unknown typename for targetLanding for CTA - ${e.__typename}`)
                    }
                },
                I = e => {
                    var t;
                    return T({ ...e,
                        nbAdults: e.nrAdults,
                        nbChildren: e.nrChildren,
                        nbRooms: e.nrRooms,
                        selectedFilters: e.filters && (null === (t = e.filters[0]) || void 0 === t ? void 0 : t.value)
                    }).toString()
                },
                E = e => (0, S.wd)({
                    componentId: S.au.MERCH_PLATFORM_SR,
                    prompt: S.L4.SIGN_IN
                }),
                A = e => {
                    let {
                        urlPath: t,
                        queryParams: i
                    } = e;
                    try {
                        const e = new URL(t);
                        for (const t of i ? ? []) e.searchParams.set(t.name, t.value);
                        return e.toString()
                    } catch (n) {
                        return void(0, b.reportWarning)(`[mapDeeplinkLanding] Invaild URL ${t}`)
                    }
                },
                j = e => {
                    switch (e) {
                        case "ADMIN":
                            return "admin";
                        case "APP":
                            return "app";
                        case "BOOK":
                            return "book";
                        case "JOIN":
                            return "join";
                        default:
                            return
                    }
                },
                w = e => {
                    let {
                        role: t,
                        urlPath: i,
                        queryParams: n
                    } = e;
                    try {
                        const e = new URLSearchParams;
                        for (const t of n ? ? []) e.set(t.name, t.value);
                        return (0, c.constructUrl)({
                            host: t ? j(t) : void 0,
                            pathname: i,
                            searchParams: e
                        }).toString()
                    } catch (a) {
                        return void(0, b.reportWarning)(`[mapDirectLinkLanding] Invaild URL ${i}`)
                    }
                },
                F = {
                    IndexPage: "fb10b142-2301-42be-ade1-65b0cdb6bfed",
                    SearchResultPage: "2dd22ebf-b5f8-47a0-b5b1-a2c2f498df25",
                    HotelPage: "d3552b6e-f0bc-453e-94a4-f1bb120b555c",
                    BookingDetailPage: "ced66ab0-dac2-49f7-ba03-af51b5f85637",
                    ConfirmationPage: "680a39fb-da7d-4f45-a3c1-753c01983558",
                    HelpCenterHomePage: "236cb9c2-6564-4909-944a-3a1f3fa96951",
                    HelpCenterDiagnosePage: "8d7cfc78-81c3-466f-9675-94d6c27f667d",
                    HelpCenterDeflectionPage: "48b31788-63b9-4b95-912a-d6604fb3ed2b",
                    TpiBookingProcessPage: "ce5a2406-eca1-4a97-a153-8dd6406c5ec6",
                    BookingProcessPage: "61de26cd-f07b-4f41-b183-4582f50b8aa6"
                };

            function O(e, t) {
                return (0, k.useQuery)(e, t)
            }

            function P(e, t) {
                return (0, k.useSuspenseQuery)(e, t)
            }
            const B = (e, t) => {
                    var i;
                    let {
                        requestContext: n,
                        onLinkClick: a,
                        extraInfo: r,
                        useSuspense: l
                    } = t;
                    const s = n.getBasePageUrl().searchParams.getAll("b_merch_test_campaign_id"),
                        o = !0 === l ? P : O,
                        {
                            data: d,
                            error: c
                        } = o(C, {
                            context: {
                                headers: (0, _.l)(n, 1500)
                            },
                            variables: {
                                input: {
                                    regionsIds: [e],
                                    pageInput: r,
                                    testCampaignIds: s
                                }
                            },
                            skip: !e
                        });
                    return c && (0, b.reportError)(c), (u = null === d || void 0 === d || null === (i = d.merchComponents) || void 0 === i ? void 0 : i.regions, ((null === u || void 0 === u ? void 0 : u.reduce(((e, t) => {
                        var i;
                        return [...e, ...(null === (i = t.components) || void 0 === i ? void 0 : i.filter((e => "GlobalAlerts" === e.__typename)).flatMap((e => {
                            var t;
                            return null === (t = e.alerts) || void 0 === t ? void 0 : t.filter((e => "AppShellGlobalAlertDefault" !== (null === e || void 0 === e ? void 0 : e.designVariant.__typename))).map((e => ({ ...null === e || void 0 === e ? void 0 : e.designVariant,
                                id: null === e || void 0 === e ? void 0 : e.alertCampaignId
                            } ? ? [])))
                        })).filter(Boolean)) ? ? []]
                    }), [])) ? ? []).map((e => ({
                        id: e.id,
                        icon: e.icon && v._E.includes(e.icon) ? e.icon : void 0,
                        title: e.title,
                        severity: x.ye[e.severity],
                        category: e.category,
                        description: [e.firstParagraph, e.secondParagraph, e.thirdParagraph].filter(Boolean).join("\n"),
                        expanded: e.expanded,
                        links: [e.firstCta, e.secondCta, e.thirdCta].filter(f.f).filter((e => Boolean(e.text))).map((e => ({
                            name: e.text,
                            url: L(null === e || void 0 === e ? void 0 : e.targetLanding) ? ? "",
                            attributes: {
                                target: "_blank",
                                "aria-label": e.ariaLabel
                            }
                        }))).filter((e => Boolean(e.url)))
                    })))).map((e => ((e, t) => {
                        var i;
                        return { ...e,
                            links: null === (i = e.links) || void 0 === i ? void 0 : i.map((i => ({ ...i,
                                onClick: t ? () => t(e.id) : void 0
                            })))
                        }
                    })(e, a)));
                    var u
                },
                R = "IndexPage",
                M = "SearchResultPage",
                D = "HotelPage",
                V = "BookingProcessPage",
                H = "TpiBookingProcessPage",
                U = "BookingDetailPage",
                G = "ConfirmationPage",
                W = e => {
                    let {
                        siteType: t,
                        regionId: i,
                        children: l,
                        ...s
                    } = e;
                    const {
                        units: d
                    } = (0, m.useTheme)(), [c, u] = (0, n.useMemo)((() => {
                        const e = new Map([
                                [`${o.N.WWW}-${R}`, [`0 0 ${d.spacing_8x}`, `0 ${d.spacing_1x}`]],
                                [`${o.N.WWW}-${M}`, [`${d.spacing_2x} 0`, `0 ${d.spacing_1x}`]],
                                [`${o.N.WWW}-${V}`, [`0 0 ${d.spacing_2x}`, "0 0"]],
                                [`${o.N.WWW}-${H}`, [`0 0 ${d.spacing_2x}`, "0 0"]],
                                [`${o.N.WWW}-${D}`, [`0 0 ${d.spacing_4x}`, `0 ${d.spacing_1x}`]],
                                [`${o.N.MDOT}-${R}`, [`0 0 ${d.spacing_4x}`, `0 ${d.spacing_4x}`]],
                                [`${o.N.MDOT}-${M}`, ["0", `${d.spacing_2x} ${d.spacing_1x}`]],
                                [`${o.N.MDOT}-${D}`, [`${d.spacing_4x} 0 0`, `0 ${d.spacing_4x}`]],
                                [`${o.N.MDOT}-${V}`, [`${d.spacing_4x} 0`, `0 ${d.spacing_4x}`]],
                                [`${o.N.MDOT}-${H}`, [`${d.spacing_4x} 0`, `0 ${d.spacing_4x}`]],
                                [`${o.N.WWW}-${G}`, [`0 0 ${d.spacing_6x} 0`, "0 0"]],
                                [`${o.N.MDOT}-${G}`, [`${d.spacing_4x} 0 0`, "0 0"]],
                                [`${o.N.WWW}-${U}`, [`0 0 ${d.spacing_4x} 0`, "0 0"]],
                                [`${o.N.MDOT}-${U}`, [`${d.spacing_4x} 0 0`, "0 0"]]
                            ]),
                            n = `${t}-${i}`;
                        return e.get(n) ? ? ["0", "0"]
                    }), [i, t, d.spacing_1x, d.spacing_2x, d.spacing_4x, d.spacing_6x, d.spacing_8x]);
                    return a().createElement("div", (0, r.Z)({}, s, {
                        style: {
                            margin: c,
                            padding: u
                        }
                    }), l)
                },
                $ = e => {
                    let {
                        regionId: t,
                        extraInfo: i,
                        match: l,
                        useSuspense: k = !1
                    } = e;
                    const b = t ? ? (null === l || void 0 === l ? void 0 : l.params.regionId) ? ? "",
                        C = (0, d.getRequestContext)(),
                        _ = ((e, t) => B(F[e] ? ? e, t))(b, {
                            useSuspense: k,
                            requestContext: C,
                            extraInfo: i,
                            onLinkClick: e => {
                                (0, p.fv)(p.gM.CTA, e)
                            }
                        }),
                        x = C.getSiteType() ? ? o.N.WWW,
                        [f, S] = (0, n.useState)(_.filter((e => Boolean(e.description))).reduce(((e, t) => ({ ...e,
                            [t.id]: t.expanded ? ? !1
                        })), {}));
                    (0, p.Vh)(), (0, p.w0)(b, _);
                    const {
                        translate: N
                    } = (0, g.useTranslations)();
                    return _.length > 0 ? a().createElement(m.BUIProvider, (() => {
                        const e = u(),
                            t = (0, d.getRequestContext)().getLanguage();
                        return {
                            defaultViewportSize: e,
                            defaultRTL: (0, c.isRTL)(),
                            theme: s(),
                            locale: t
                        }
                    })(), a().createElement(W, {
                        "aria-label": N("a11y_ace_global_alert_num", {
                            variables: {
                                num_alerts: String(_.length)
                            },
                            num_exception: _.length
                        }),
                        siteType: x,
                        regionId: b
                    }, a().createElement(m.Stack, {
                        gap: 3
                    }, _.map((e => {
                        let {
                            id: t,
                            ...i
                        } = e;
                        return a().createElement(h.df, {
                            key: t,
                            onChange: () => (0, p.SQ)(t)
                        }, a().createElement(v.dm, (0, r.Z)({}, i, {
                            ariaLabels: {
                                label: "normal" === i.severity ? N("a11y_ace_global_alert_normal_label") : N("a11y_ace_global_alert_disruptive_label")
                            },
                            expanded: f[t],
                            onToggle: () => (e => {
                                S((t => {
                                    const i = t[e];
                                    return (0, p.fv)(i ? p.gM.Collapse : p.gM.Expand, e), { ...t,
                                        [e]: !t[e]
                                    }
                                }))
                            })(t)
                        })))
                    }))))) : null
                };

            function z(e) {
                return a().createElement($, e)
            }
        },
        "48b15e3a": (e, t, i) => {
            i.d(t, {
                CK: () => y,
                Gc: () => N,
                H: () => S,
                SQ: () => L,
                Us: () => g,
                Vh: () => k,
                fv: () => I,
                gM: () => h,
                hL: () => x,
                mk: () => f,
                w0: () => T,
                yo: () => v
            });
            var n = i("d0989236"),
                a = i("6222292b"),
                r = i("baae01e7"),
                l = i.n(r),
                s = i("8ebac256"),
                o = i("dc6d28ff"),
                d = i("fd1ca1ab"),
                c = i("017725b3"),
                u = i("be89e044");
            let m = function(e) {
                    return e[e["Suggested for you"] = 0] = "Suggested for you", e[e.All = 1] = "All", e
                }({}),
                g = function(e) {
                    return e.Vertical = "vertical", e.Other = "other action", e.Option = "option in other action", e
                }({}),
                v = function(e) {
                    return e.Currency = "Select your currency", e.Language = "Select your language", e.Logo = "Logo", e.CS = "Contact Customer Service", e.MESSAGING = "Open Messaging", e.Profile = "Profile Menu", e.Social = "Follow Us on Wechat", e.ListProperty = "List Your Property", e.Notification = "Notification", e.SignIn = "Sign In", e.SignUp = "Sign Up", e
                }({}),
                h = function(e) {
                    return e.Expand = "Expand", e.Collapse = "Collapse", e.CTA = "CTA", e
                }({});
            const p = {
                    [d.KC.HEADER]: {
                        component_served: "2.0.0",
                        component_action_clicked: "1.0.0",
                        component_scrolled: "1.0.0"
                    },
                    [d.KC.FOOTER]: {},
                    [d.KC.GLOBAL_ALERT]: {
                        component_served: "2.0.0",
                        component_viewed: "2.0.0",
                        component_action_clicked: "2.0.0"
                    }
                },
                k = () => {
                    const {
                        siteType: e,
                        language: t,
                        currency: i,
                        affiliate: a,
                        pageviewId: r
                    } = (0, n.B)(), l = (0, o.getRequestContext)(), d = {
                        aid: String(null === a || void 0 === a ? void 0 : a.id),
                        pageviewId: r,
                        platform: null === e || void 0 === e ? void 0 : e.toLowerCase(),
                        lang: t,
                        currency: i,
                        isDev: (0, u.Vo)(l)
                    };
                    d.isDev && console.log("[web-shell] C360 is initialized using config: ", d), s.Z.init(d)
                },
                b = (e, t) => ({
                    action_name: `webcoreux.${e.toLocaleLowerCase()}_${t}`,
                    action_version: p[e][t]
                }),
                C = (e, t) => e.reduce(((e, i, n) => (e.push({
                    item_type: i.id,
                    item_position: n + 1,
                    is_item_preselected: +(i.id === t)
                }), e)), []),
                _ = function(e, t) {
                    const i = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.KC.HEADER;
                        return {
                            served: b(e, "component_served"),
                            viewed: b(e, "component_viewed"),
                            clicked: b(e, "component_action_clicked"),
                            scrolled: b(e, "component_scrolled")
                        }
                    }(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.KC.HEADER)[e];
                    return { ...i,
                        content: t
                    }
                },
                x = (e, t, i, n, r, d) => {
                    const c = (() => {
                            const {
                                isLarge: e,
                                isMedium: t
                            } = (0, a.useViewport)();
                            let i;
                            switch (!0) {
                                case !0 === e:
                                    i = "large";
                                    break;
                                case !0 === t:
                                    i = "medium";
                                    break;
                                default:
                                    i = "small"
                            }
                            return i
                        })(),
                        u = [];
                    r && u.push({
                        action_type: "currency",
                        option_text: r
                    }), d && u.push({
                        action_type: "language",
                        option_text: d
                    }), l()((() => {
                        const {
                            id: a,
                            label: r
                        } = (0, o.getRequestContext)().getAffiliate() || {};
                        s.Z.sendEvent(_("served", {
                            product_verticals_loaded: C(e, t),
                            product_vertical_selected: t,
                            headertype: i,
                            viewport: c,
                            option_preselected: u,
                            is_loggedin: Number(Boolean(n)),
                            aid: String(a ? ? 0),
                            label: r,
                            genius_level: String(n ? ? 0)
                        }))
                    }), [])
                },
                f = (e, t) => {
                    const i = {
                        clicked_text_copy_tag: t
                    };
                    s.Z.sendEvent(_("clicked", {
                        action_type: e,
                        ...i
                    }))
                },
                S = (e, t, i) => {
                    const n = {
                        clicked_text_copy_tag: t
                    };
                    i && Object.assign(n, {
                        action_text_copy_tag: i.option_name,
                        option_category: m[i.option_index]
                    }), s.Z.sendEvent(_("clicked", {
                        action_type: e,
                        ...n
                    }))
                },
                N = () => {
                    const e = (e => {
                        let t, i = [];
                        return n => {
                            clearTimeout(t), i.push(n), t = setTimeout((() => {
                                s.Z.sendEvent(_("scrolled", {
                                    product_verticals_seen: i
                                })), i = []
                            }), e)
                        }
                    })(300);
                    (0, d.OR)(d.FP.TAB_EXPOSED, (t => {
                        const {
                            detail: {
                                id: i
                            }
                        } = t;
                        i && e(i)
                    }))
                },
                y = () => (0, d.OR)(d.FP.SOCIAL_ENTRY_CLICKED, (() => {
                    S(g.Other, v.Social)
                })),
                T = (e, t) => {
                    l()((() => {
                        s.Z.sendEvent(_("served", {
                            global_alert_card: null === t || void 0 === t ? void 0 : t.map((e => ({
                                campaign_id: e.id,
                                category: e.category === c.jvi.GLOBAL_EVENT ? "Global" : "Regional",
                                expanded: e.expanded,
                                theme: "normal" === e.severity ? "Normal" : "Callout"
                            }))),
                            page_region: e,
                            vertical: "ABU"
                        }, d.KC.GLOBAL_ALERT))
                    }), [])
                },
                L = e => {
                    s.Z.sendEvent(_("viewed", {
                        campaign_id: e
                    }, d.KC.GLOBAL_ALERT))
                },
                I = (e, t, i) => {
                    s.Z.sendEvent(_("clicked", {
                        campaign_id: t,
                        action: {
                            type: e,
                            ...i
                        }
                    }, d.KC.GLOBAL_ALERT))
                }
        },
        "390896f3": (e, t, i) => {
            i.d(t, {
                l: () => l,
                r: () => r
            });
            var n = i("43a4d203"),
                a = i("be89e044");
            const r = e => null != e && [n.SiteType.TDOT, n.SiteType.MDOT].includes(e),
                l = (e, t) => (0, a.WC)(e) ? {} : {
                    "X-Booking-Timeout-Ms": t,
                    "X-Envoy-Expected-Rq-Timeout-Ms": t,
                    "X-Envoy-Upstream-Rq-Timeout-Ms": t,
                    "X-Booking-Timeout-Budget-Ms": t
                }
        },
        be89e044: (e, t, i) => {
            i.d(t, {
                H0: () => n,
                Vo: () => r,
                WC: () => a
            });
            const n = e => "prod" === e.getBPlatformEnvironment(),
                a = e => {
                    const t = e.getBPlatformEnvironment();
                    return !t || "dev" === t
                },
                r = e => !n(e)
        },
        "1802a841": (e, t, i) => {
            i.d(t, {
                f: () => n
            });
            const n = e => !!e
        },
        "017725b3": (e, t, i) => {
            i.d(t, {
                $I_: () => o,
                Ebk: () => a,
                Nuh: () => l,
                jvi: () => n,
                uqe: () => r,
                wyT: () => s
            });
            let n = function(e) {
                    return e.GLOBAL_EVENT = "GLOBAL_EVENT", e.REGIONAL_EVENT = "REGIONAL_EVENT", e
                }({}),
                a = function(e) {
                    return e.DISRUPTIVE = "DISRUPTIVE", e.NORMAL = "NORMAL", e
                }({}),
                r = function(e) {
                    return e.ACTIVE = "ACTIVE", e.ARCHIVED = "ARCHIVED", e
                }({}),
                l = function(e) {
                    return e.POST_BOOKING = "POST_BOOKING", e.REQUEST_TO_BOOK = "REQUEST_TO_BOOK", e
                }({}),
                s = function(e) {
                    return e.ACCOMMODATION = "ACCOMMODATION", e
                }({}),
                o = function(e) {
                    return e.ANDROID = "ANDROID", e.IPAD = "IPAD", e.IPHONE = "IPHONE", e.UNKNOWN = "UNKNOWN", e
                }({})
        },
        "8ebac256": (e, t, i) => {
            i.d(t, {
                Z: () => o
            });

            function n(e, t, i, n) {
                return new(i || (i = Promise))((function(a, r) {
                    function l(e) {
                        try {
                            o(n.next(e))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(e) {
                        try {
                            o(n.throw(e))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function o(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof i ? t : new i((function(e) {
                            e(t)
                        }))).then(l, s)
                    }
                    o((n = n.apply(e, t || [])).next())
                }))
            }
            Object.create;
            Object.create;
            class a {
                constructor(e) {
                    this.config = e, this.headers = this.config.API.HEADERS
                }
                get(e, t) {
                    return new Promise(((i, a) => n(this, void 0, void 0, (function*() {
                        try {
                            const n = yield fetch(e, {
                                method: "GET",
                                headers: (null === t || void 0 === t ? void 0 : t.withHeaders) ? this.headers : void 0,
                                credentials: !1 === (null === t || void 0 === t ? void 0 : t.withCredentials) ? "omit" : "include"
                            }), a = yield n.text();
                            i(a ? JSON.parse(a) : null)
                        } catch (n) {
                            return a(n)
                        }
                    }))))
                }
                post(e, t, i) {
                    return new Promise(((a, r) => n(this, void 0, void 0, (function*() {
                        try {
                            const n = yield fetch(e, {
                                method: "POST",
                                headers: (null === i || void 0 === i ? void 0 : i.withHeaders) ? this.headers : void 0,
                                credentials: !1 === (null === i || void 0 === i ? void 0 : i.withCredentials) ? "omit" : "include",
                                body: JSON.stringify(t)
                            }), r = yield n.text();
                            a(r ? JSON.parse(r) : null)
                        } catch (n) {
                            return r(n)
                        }
                    }))))
                }
            }
            var r = new class {
                init(e) {
                    this.client = new a(e)
                }
                get(e) {
                    return n(this, void 0, void 0, (function*() {
                        return this.client.get(e)
                    }))
                }
                post(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return n(this, void 0, void 0, (function*() {
                        return this.client.post(e, t, i)
                    }))
                }
            };
            const l = e => {
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
            class s {
                constructor(e, t, i) {
                    this.batchSize = e, this.queueLimit = t, this.queue = [], this.timeoutId = null, this.sendBatchFn = i
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
                    this.trackBatch = e => n(this, void 0, void 0, (function*() {
                        this.track({
                            events: e.map((e => function(e, t, i) {
                                const n = {
                                    local: {
                                        currency: t.currency,
                                        language: t.language
                                    },
                                    page: {},
                                    web: {}
                                };
                                "undefined" != typeof window && (n.page = {
                                    page_referrer: document.referrer,
                                    page_url: window.location.href,
                                    page_title: document.title
                                }, n.web = {
                                    browser_language: window.navigator.language
                                });
                                const a = {
                                    tracker_name: "C360ReactTracker",
                                    tracker_type: "Client",
                                    tracker_version: "0.1.0"
                                };
                                return i && (a.tracker_version = "0.1.1"), Object.assign(Object.assign({}, e), {
                                    context: n,
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
                                HEADERS: l(e)
                            },
                            TRACK_BASE_URL: `https://${t}/c360/v1/track`,
                            language: e.lang,
                            currency: e.currency
                        }
                    })(e), this.httpClient = r, this.c360url = this.c360Config.TRACK_BASE_URL, this.props = e, this.batchQueue = this.batchQueue || new s(10, 1e3, this.trackBatch), r.init(this.c360Config)
                }
                track(e) {
                    return n(this, void 0, void 0, (function*() {
                        this.httpClient.post(this.c360url, e, {
                            withHeaders: !0
                        }).catch((e => {
                            this.props.onErrorCallback && this.props.onErrorCallback(new Error(e))
                        }))
                    }))
                }
                sendEvent(e, t) {
                    return n(this, void 0, void 0, (function*() {
                        this.batchQueue.enqueue(e), t && this.batchQueue.flush()
                    }))
                }
            }
        },
        fd1ca1ab: (e, t, i) => {
            i.d(t, {
                KC: () => T,
                FP: () => L,
                _E: () => ee,
                dm: () => ne,
                n4: () => Te,
                Ww: () => xt,
                kZ: () => jt,
                Nu: () => E,
                OR: () => A
            });
            var n = i("ead71eb0"),
                a = i.n(n);
            const r = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px",
                    "data-rtl-flip": "true"
                }, n.createElement("path", {
                    d: "M12.751 0C6.546-.009 1.51 5.014 1.5 11.219a11.24 11.24 0 0 0 1.696 5.952l-.04-.718-3.083 6.475c-.304.637.362 1.303 1 1l6.473-3.084-.718-.04c5.276 3.28 12.213 1.663 15.494-3.614 3.28-5.276 1.663-12.213-3.614-15.494A11.25 11.25 0 0 0 12.748 0zm0 1.5A9.75 9.75 0 1 1 7.62 19.53a.75.75 0 0 0-.718-.04L.428 22.573l1 1 3.082-6.476a.75.75 0 0 0-.04-.718A9.74 9.74 0 0 1 3 11.22c.008-5.377 4.372-9.729 9.749-9.721z"
                }))
            };
            var l = i("6222292b"),
                s = i("baae01e7"),
                o = i.n(s),
                d = i("2cb5c3c4");
            const c = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 128 128",
                    width: "50px"
                }, n.createElement("path", {
                    d: "M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"
                }))
            };
            var u = i("0c68dce6"),
                m = i("2f7c7336"),
                g = i("e7547f91"),
                v = i("a6b472cf"),
                h = i("c41e1efa"),
                p = i("797081ff"),
                k = i("c28de7cc");
            const b = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, n.createElement("path", {
                    d: "M9.28 21.961a2.837 2.837 0 0 0 5.445 0 .75.75 0 1 0-1.44-.422 1.337 1.337 0 0 1-2.565 0 .75.75 0 1 0-1.44.422M12.75 3V.75a.75.75 0 0 0-1.5 0V3a.75.75 0 0 0 1.5 0m-.75.75a6.75 6.75 0 0 1 6.75 6.75c0 3.154.29 5.436.785 6.994.323 1.02.684 1.59.995 1.84L21 18H3l.59 1.212c.248-.315.572-.958.88-2 .49-1.66.78-3.872.78-6.712A6.75 6.75 0 0 1 12 3.75m0-1.5a8.25 8.25 0 0 0-8.25 8.25c0 2.702-.272 4.772-.72 6.288-.254.864-.493 1.336-.62 1.5A.75.75 0 0 0 3 19.5h18c.708 0 1.022-.892.47-1.335.019.016-.008-.015-.07-.113-.14-.223-.29-.553-.435-1.012-.443-1.396-.715-3.529-.715-6.54A8.25 8.25 0 0 0 12 2.25"
                }))
            };
            var C = i("a8577192");
            const _ = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, n.createElement("path", {
                    d: "M17.464 6.56a8.313 8.313 0 1 1-15.302 6.504A8.313 8.313 0 0 1 17.464 6.56m1.38-.586C16.724.986 10.963-1.339 5.974.781.988 2.9-1.337 8.662.783 13.65s7.881 7.312 12.87 5.192c4.987-2.12 7.312-7.881 5.192-12.87zM15.691 16.75l7.029 7.03a.75.75 0 0 0 1.06-1.06l-7.029-7.03a.75.75 0 0 0-1.06 1.06"
                }))
            };
            var x = i("607fc416");
            const f = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, n.createElement("path", {
                    d: "M2.25 18.753h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5m0-6h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5m0-6h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5"
                }))
            };
            const S = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, n.createElement("path", {
                    d: "M.75 12.754H16.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5m12.53 3.53 3.75-3.75a.75.75 0 0 0 0-1.06l-3.75-3.75a.75.75 0 1 0-1.06 1.06l3.75 3.75v-1.06l-3.75 3.75a.75.75 0 1 0 1.06 1.06m-10.648.644c2.719 5.587 9.452 7.911 15.039 5.192 5.586-2.72 7.91-9.453 5.191-15.04S13.41-.83 7.823 1.89a11.25 11.25 0 0 0-5 4.815.75.75 0 1 0 1.324.706A9.75 9.75 0 0 1 8.48 3.238c4.841-2.357 10.677-.343 13.034 4.5 2.356 4.84.342 10.676-4.5 13.033s-10.677.342-13.034-4.5a.75.75 0 0 0-1.348.657"
                }))
            };
            const N = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, n.createElement("path", {
                    d: "M16.5 9.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m1.5 0a6 6 0 1 0-12 0 6 6 0 0 0 12 0m1.445 10.597c-4.086-4.111-10.732-4.132-14.844-.046l-.046.046a.75.75 0 0 0 1.064 1.058l.04-.04a8.996 8.996 0 0 1 12.722.04.75.75 0 0 0 1.064-1.058M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12m1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12"
                }))
            };
            const y = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 128 128"
                }, n.createElement("path", {
                    d: "M71.5 23.3a47.2 47.2 0 0 0-38.6-3 39.4 39.4 0 0 0-20.3 16 30 30 0 0 0-3.7 23c2 8.6 8 15.8 15.2 20.6l-4 12 13.7-7.4a50.701 50.701 0 0 0 17 2.4 29.4 29.4 0 0 1-1.1-13.8A29.4 29.4 0 0 1 59 56.5c8-7.5 19.5-10.7 30.3-10-2-10-9-18.3-17.8-23.2zm-31.1 18c-.9 4-6 5.9-9.1 3.2-3.6-2.5-2.6-8.7 1.6-9.9 4-1.6 8.7 2.6 7.5 6.8zm28.2-1c0 4.4-6 7.2-9.3 4.2-3.5-2.5-2.5-8.6 1.6-9.9a5.8 5.8 0 0 1 7.7 5.6zM118 67.4a30.9 30.9 0 0 0-14.5-14.7 39.7 39.7 0 0 0-35.6.1c-7.6 4-14 11-15.7 19.5a25 25 0 0 0 3.1 18.5c5 8.2 14 13.4 23.2 15.1 6.8 1.4 13.7.6 20.3-1.3 3.9 1.5 7.4 4 11.2 5.8l-3.1-9.8c4.2-3 8.1-6.9 10.4-11.6a25.099 25.099 0 0 0 .6-21.6zM79.5 70a4.6 4.6 0 0 1-7.5 1.6c-2.4-2.1-1.4-6.6 1.6-7.6 3.5-1.4 7.4 2.5 6 6zm22.4.4a4.6 4.6 0 0 1-7.3 1.3c-1-1-1.2-2.3-1.6-3.4.5-2.2 2-4.4 4.4-4.5 3.3-.5 6.3 3.6 4.5 6.6z"
                }))
            };
            var T = (e => (e.HEADER = "header", e.FOOTER = "footer", e.GLOBAL_ALERT = "global_alert", e))(T || {}),
                L = (e => (e.LOGO_CLICKED = "logo_clicked", e.SOCIAL_ENTRY_CLICKED = "social-entrypoint_clicked", e.HELP_CENTER_CLICKED = "help-center_clicked", e.LIST_PROPERTY_CLICKED = "list-property_clicked", e.SIGN_UP_CLICKED = "sign-up_clicked", e.SIGN_IN_CLICKED = "sign-in_clicked", e.PROFILE_CLICKED = "profile_clicked", e.PROFILE_OPTION_CHOSEN = "profile-option_chosen", e.NOTIF_CLICKED = "notification_clicked", e.PICKER_CLICKED = "picker_clicked", e.PICKER_OPTION_CHOSEN = "picker-option_chosen", e.TAB_EXPOSED = "xpb-tab_exposed", e.TAB_CLICKED = "xpb-tab_clicked", e.MOBILE_MENU_OPEN = "mobile_menu_open", e.MOBILE_MENU_CLOSE = "mobile_menu_close", e.ASSISTANT_CLICKED = "assistant_clicked", e.CURRENCY_PICKER_OPEN = "currency-picker_open", e.CURRENCY_PICKER_CLOSE = "currency-picker_close", e))(L || {}),
                I = function(e) {
                    return `WEB_SHELL_UX_${arguments.length>1&&void 0!==arguments[1]?arguments[1]:"header"}_${e}`
                },
                E = (e, t) => {
                    if (!window) return;
                    const i = ((e, t) => new CustomEvent(I(e), {
                        detail: t
                    }))(e, t);
                    window.dispatchEvent(i)
                },
                A = (e, t) => {
                    o()((() => (window.addEventListener(I(e), t), () => {
                        window.removeEventListener(I(e), t)
                    })), [e, t])
                };

            function j(e) {
                let {
                    hasUnread: t,
                    size: i = "large",
                    variant: n = "tertiary-inherit",
                    label: a,
                    ...s
                } = e;
                return (0, d.jsx)(l.Button, {
                    size: i,
                    variant: n,
                    ...s,
                    attributes: { ...s.attributes,
                        "aria-label": a
                    },
                    onClick: e => {
                        var t;
                        null === s || void 0 === s || null === (t = s.onClick) || void 0 === t || t.call(s, e), E("assistant_clicked")
                    },
                    children: t ? (0, d.jsx)(l.BubbleContainer, {
                        value: t,
                        attributes: {
                            "data-testid": "header-assistant-entry-bubble"
                        },
                        children: (0, d.jsx)(l.Icon, {
                            size: "large",
                            svg: r
                        })
                    }) : (0, d.jsx)(l.Icon, {
                        size: "large",
                        svg: r
                    })
                })
            }
            var w = function(e) {
                    let {
                        enabled: t,
                        hint: i,
                        ...n
                    } = e;
                    return t ? (0, d.jsx)(l.Tooltip, {
                        text: i,
                        position: "bottom",
                        hideArrow: !0,
                        zIndex: 1,
                        children: e => (0, d.jsx)(j, {
                            attributes: e,
                            ...n
                        })
                    }) : null
                },
                F = "Picker_mobile-content",
                O = "Picker_selection-list",
                P = "Picker_selection-text",
                B = "Picker_selection-trigger",
                R = "Picker_menu-title",
                M = (e, t) => {
                    const {
                        all: i
                    } = e;
                    for (let n = 0; n < i.items.length; n += 1) {
                        const e = i.items[n];
                        if (e.id === t) return e
                    }
                    return null
                },
                D = (e, t, i) => i ? e.filter((e => e.id !== t)) : [...e].sort((e => e.id === t ? -1 : 1));
            var V = function(e) {
                const {
                    children: t,
                    selection: i,
                    selectedId: r,
                    renderSign: s,
                    renderSelectedSign: o,
                    multilineItems: u,
                    shouldRenderLangAttribute: m,
                    attributes: g,
                    triggerAttributes: v,
                    onOpen: h,
                    onClose: p
                } = e, k = M(i, r), [b, C] = a().useState(!1), _ = (0, n.useMemo)((() => ({
                    "data-testid": "selection-modal-close"
                })), []);
                if (!k) return null;
                const x = () => {
                    i.onOpen && i.onOpen(), h && h(), C(!0)
                };

                function f(e) {
                    let {
                        sectionIndex: t,
                        section: a,
                        isTitleVisible: o,
                        shouldExcludeSelected: g
                    } = e;
                    const v = (0, n.useMemo)((() => D(a.items, r, g)), [a.items, g]);
                    return 0 === v.length ? null : (0, d.jsxs)(l.Stack, {
                        gap: 2,
                        attributes: {
                            "data-testid": a.title
                        },
                        children: [o && (0, d.jsx)(l.Text, {
                            variant: "strong_2",
                            tagName: "h3",
                            attributes: {
                                id: `picker_title_${t}`
                            },
                            children: a.title
                        }), (0, d.jsx)("div", {
                            className: O,
                            children: (0, d.jsx)(l.Stack, {
                                gap: 2,
                                children: (0, d.jsx)(l.Grid, {
                                    gap: 4,
                                    tagName: "ul",
                                    attributes: { ...o ? {
                                            "aria-labelledby": `picker_title_${t}`
                                        } : {
                                            "aria-label": a.title
                                        }
                                    },
                                    children: v.map((e => {
                                        const n = r === e.id ? (0, d.jsx)(l.Icon, {
                                            svg: c,
                                            size: "medium"
                                        }) : null;
                                        return (0, d.jsx)(l.Grid.Column, {
                                            size: 3,
                                            tagName: "li",
                                            children: (0, d.jsx)(l.ListItem, {
                                                roundedCorners: !0,
                                                startSlot: !u && s(e),
                                                endSlot: n,
                                                active: r === e.id,
                                                href: e.href,
                                                spacing: "small",
                                                attributes: {
                                                    "data-testid": "selection-item",
                                                    "aria-current": r === e.id,
                                                    ...m && {
                                                        lang: e.id
                                                    }
                                                },
                                                onClick: () => ((e, t) => {
                                                    i.onChoose(e, t)
                                                })(e, t),
                                                children: (0, d.jsxs)("span", {
                                                    className: P,
                                                    children: [e.title, u && s(e)]
                                                })
                                            }, e.id)
                                        }, e.id)
                                    }))
                                })
                            })
                        })]
                    })
                }
                const S = i.popular && (0, d.jsx)(f, {
                    sectionIndex: 0,
                    section: i.popular,
                    isTitleVisible: !0,
                    shouldExcludeSelected: !0
                });
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(l.Tooltip, {
                        text: i.title,
                        position: "bottom",
                        hideArrow: !0,
                        children: e => (0, d.jsx)(l.Button, {
                            variant: "tertiary-inherit",
                            size: "large",
                            onClick: x,
                            attributes: {
                                "aria-haspopup": "dialog",
                                ...e,
                                ...v
                            },
                            children: t || (o ? o(k) : s(k))
                        })
                    }), (0, d.jsx)(l.SheetContainer, {
                        arrowNavigation: !0,
                        position: "center",
                        size: 960,
                        title: i.title,
                        ariaLabel: i.title,
                        closeAriaLabel: i.closeAriaLabel,
                        active: b,
                        attributes: {
                            "data-testid": "selection-modal",
                            ...g
                        },
                        closeAttributes: _,
                        onCloseTrigger: () => {
                            p && p(), C(!1)
                        },
                        children: (0, d.jsxs)(l.Stack, {
                            gap: 4,
                            children: [i.disclaimer, S, (0, d.jsx)(l.Stack.Item, {
                                children: (0, d.jsx)(f, {
                                    sectionIndex: 1,
                                    section: i.all,
                                    isTitleVisible: !!S
                                })
                            })]
                        })
                    })]
                })
            };

            function H(e) {
                let {
                    children: t,
                    shouldDisplaySelectionTitle: i,
                    selection: n,
                    selected: a,
                    attributes: r,
                    renderSign: s,
                    renderSelectedSign: o,
                    onClick: c
                } = e;
                return i ? (0, d.jsx)(l.ListItem, {
                    spacing: "large",
                    attributes: r,
                    className: B,
                    startSlot: o ? o(a) : s(a),
                    onClick: c,
                    children: t || (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(l.HiddenVisually, {
                            children: n.title
                        }), a.title]
                    })
                }) : (0, d.jsx)(l.Button, {
                    variant: "tertiary-inherit",
                    attributes: r,
                    onClick: c,
                    children: t || (0, d.jsxs)(l.Stack, {
                        direction: "row",
                        alignItems: "center",
                        tagName: "span",
                        gap: 0,
                        children: [o ? o(a) : s(a), (0, d.jsx)(l.HiddenVisually, {
                            children: n.title
                        })]
                    })
                })
            }
            var U = function(e) {
                    const {
                        children: t,
                        selection: i,
                        selectedId: n,
                        shouldDisplaySelectionTitle: r = !0,
                        triggerAttributes: s,
                        attributes: o,
                        renderSign: u,
                        renderSelectedSign: m,
                        onOpen: g,
                        onClose: v,
                        shouldRenderLangAttribute: h
                    } = e, {
                        all: p,
                        popular: k
                    } = i, b = M(i, n), [C, _] = a().useState(!1);
                    if (!b) return null;
                    const x = () => {
                        _(!1), v && v()
                    };
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(H, {
                            shouldDisplaySelectionTitle: r,
                            selection: i,
                            selected: b,
                            attributes: s,
                            onClick: () => {
                                _(!0), i.onOpen && i.onOpen(), g && g()
                            },
                            renderSign: u,
                            renderSelectedSign: m,
                            children: t
                        }), (0, d.jsx)(l.SheetContainer, {
                            fill: !0,
                            position: "fullScreen",
                            arrowNavigation: !0,
                            ariaLabel: i.title,
                            active: C,
                            closeAriaLabel: i.closeAriaLabel,
                            attributes: o,
                            onCloseTrigger: x,
                            children: (0, d.jsxs)("div", {
                                className: F,
                                children: [(0, d.jsxs)(l.Box, {
                                    padding: 6,
                                    children: [(0, d.jsx)(l.Text, {
                                        variant: "headline_2",
                                        tagName: "h2",
                                        children: i.title
                                    }), i.disclaimer]
                                }), [k, p].map(((e, t) => {
                                    if (!e) return null;
                                    const a = D(e.items, n, !t);
                                    return 0 === a.length ? null : (0, d.jsxs)("div", {
                                        "data-testid": e.title,
                                        children: [!!k && (0, d.jsx)(l.Text, {
                                            variant: "strong_2",
                                            tagName: "h3",
                                            className: R,
                                            attributes: {
                                                id: `picker_title_${t}`
                                            },
                                            children: e.title
                                        }), (0, d.jsx)("ul", { ...k ? {
                                                "aria-labelledby": `picker_title_${t}`
                                            } : {
                                                "aria-label": e.title
                                            },
                                            children: a.map((e => {
                                                const a = e.id === n,
                                                    r = a && (0, d.jsx)(l.Icon, {
                                                        svg: c,
                                                        size: "large"
                                                    });
                                                return (0, d.jsx)("li", {
                                                    children: (0, d.jsx)(l.ListItem, {
                                                        startSlot: u(e),
                                                        endSlot: r,
                                                        spacing: "large",
                                                        onClick: () => ((e, t) => {
                                                            i.onChoose(e, t), x()
                                                        })(e, t),
                                                        active: a,
                                                        href: e.href,
                                                        attributes: {
                                                            "data-testid": "selection-item",
                                                            "aria-current": n === e.id,
                                                            ...h && {
                                                                lang: e.id
                                                            }
                                                        },
                                                        children: (0, d.jsx)("span", {
                                                            className: P,
                                                            children: e.title
                                                        })
                                                    })
                                                }, e.id)
                                            }))
                                        })]
                                    }, e.title)
                                }))]
                            })
                        })]
                    })
                },
                G = function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    return t.reduce(((e, t) => t ? `${e} ${t}` : e), "")
                },
                W = "CurrencyPicker_currency",
                $ = "CurrencyPicker_currency--mobile",
                z = "CurrencyPicker_currency--active";
            var Z = function(e) {
                const {
                    active: t,
                    text: i,
                    mobile: n
                } = e, a = G(W, n && $, t && z);
                return (0, d.jsx)("div", {
                    className: a,
                    children: i
                })
            };
            var q = function(e) {
                const {
                    children: t,
                    currencySelection: i,
                    selectedCurrencyId: n,
                    attributes: a,
                    triggerAttributes: r,
                    onOpen: l,
                    onClose: s
                } = e;
                return (0, d.jsx)(V, {
                    multilineItems: !0,
                    selection: i,
                    selectedId: n,
                    attributes: a,
                    triggerAttributes: r,
                    renderSign: e => {
                        const t = e.id === n;
                        return (0, d.jsx)(Z, {
                            text: e.sign,
                            active: t
                        })
                    },
                    renderSelectedSign: e => e.sign,
                    onOpen: l,
                    onClose: s,
                    children: t
                })
            };
            var K = function(e) {
                const {
                    children: t,
                    currencySelection: i,
                    selectedCurrencyId: n,
                    shouldDisplaySelectionTitle: a,
                    attributes: r,
                    triggerAttributes: l,
                    onOpen: s,
                    onClose: o
                } = e;
                return (0, d.jsx)(U, {
                    selection: i,
                    selectedId: n,
                    shouldDisplaySelectionTitle: a,
                    attributes: r,
                    triggerAttributes: l,
                    renderSign: e => {
                        const t = e.id === n;
                        return (0, d.jsx)(Z, {
                            text: e.sign,
                            active: t,
                            mobile: !0
                        })
                    },
                    onOpen: s,
                    onClose: o,
                    children: t
                })
            };
            var X = function(e) {
                    let {
                        variant: t,
                        onClose: i,
                        onOpen: n,
                        ...a
                    } = e;
                    const r = { ...a,
                        onOpen: () => {
                            n && n(), E("currency-picker_open")
                        },
                        onClose: () => {
                            i && i(), E("currency-picker_close")
                        }
                    };
                    return "desktop" === t ? (0, d.jsx)(q, { ...r
                    }) : (0, d.jsx)(K, { ...r
                    })
                },
                Y = {
                    "flag-ua": "Ua",
                    "flag-tr": "Tr"
                },
                Q = {
                    default: u.Z
                },
                J = { ...Y,
                    ...Q
                },
                ee = Object.keys(J),
                te = e => {
                    let {
                        icon: t = "default"
                    } = e;
                    return "string" !== typeof t ? t : t.includes("flag-") ? (0, d.jsx)(l.Image, {
                        asset: {
                            setName: "images-flags",
                            assetName: Y[t]
                        },
                        attributes: {
                            "data-testid": "global-alert-decoration-flag"
                        }
                    }) : (0, d.jsx)(l.Icon, {
                        svg: Q[t],
                        color: "callout",
                        size: "large",
                        attributes: {
                            "data-testid": "global-alert-decoration-icon"
                        }
                    })
                },
                ie = {
                    trigger: "GlobalAlert_trigger",
                    header: "GlobalAlert_header",
                    content: "GlobalAlert_content",
                    "section-expand": "GlobalAlert_section-expand",
                    description: "GlobalAlert_description"
                },
                ne = e => {
                    const {
                        description: t,
                        links: i,
                        onToggle: n,
                        icon: a,
                        title: r,
                        expanded: s,
                        ariaLabels: o
                    } = e, c = Boolean(t || (null === i || void 0 === i ? void 0 : i.length)), u = !t && 1 === (null === i || void 0 === i ? void 0 : i.length), h = e => {
                        e.url && window.open(e.url), e.onClick && e.onClick()
                    }, p = (0, d.jsxs)(l.Stack, {
                        direction: "row",
                        gap: 2,
                        alignItems: "center",
                        className: ie.header,
                        children: [(0, d.jsx)(te, {
                            icon: a
                        }), r && (0, d.jsx)(l.Stack.Item, {
                            grow: !0,
                            children: (0, d.jsx)(l.Text, {
                                variant: "strong_2",
                                attributes: {
                                    "data-testid": "global-alert-title"
                                },
                                children: r
                            })
                        }), c && !u && (0, d.jsx)(l.Icon, {
                            size: "large",
                            svg: s ? m.Z : g.Z,
                            attributes: {
                                "data-testid": "global-alert-icon-expand"
                            }
                        }), u && (0, d.jsx)(l.Actionable, {
                            onClick: () => h(i[0]),
                            attributes: {
                                "data-testid": "global-alert-icon-link"
                            },
                            children: (0, d.jsx)(l.Icon, {
                                size: "large",
                                svg: v.Z
                            })
                        })]
                    });
                    return (0, d.jsxs)(l.Box, {
                        padding: 2,
                        borderRadius: 200,
                        borderColor: "disruptive" === e.severity ? "callout" : "neutral_alt",
                        backgroundColor: "disruptive" === e.severity ? "callout_alt" : "elevation_one",
                        attributes: {
                            "data-testid": "web-shell-global-alert",
                            "aria-label": null === o || void 0 === o ? void 0 : o.label
                        },
                        children: [c || u ? (0, d.jsx)(l.Actionable, {
                            onClick: () => {
                                c ? null === n || void 0 === n || n() : u && h(i[0])
                            },
                            tagName: "div",
                            className: ie.trigger,
                            attributes: {
                                "data-testid": "global-alert-interactive-title",
                                "aria-expanded": s ? ? !1
                            },
                            children: p
                        }) : p, !c || u || !s && r ? null : (0, d.jsxs)(l.Stack, {
                            className: ie["section-expand"],
                            gap: 2,
                            children: [(0, d.jsx)(l.Text, {
                                variant: "body_2",
                                className: ie.description,
                                attributes: {
                                    "data-testid": "global-alert-content"
                                },
                                children: e.description
                            }), !u && null !== i && void 0 !== i && i.length ? (0, d.jsx)(l.Stack, {
                                gap: 3,
                                direction: "row",
                                attributes: {
                                    "data-testid": "global-alert-links"
                                },
                                children: i.map((e => (0, d.jsx)(l.Link, {
                                    className: ie.link,
                                    text: e.name,
                                    href: e.url,
                                    onClick: e.onClick,
                                    attributes: { ...e.attributes,
                                        "data-testid": "global-alert-link"
                                    }
                                }, e.name)))
                            }) : null]
                        })]
                    })
                },
                ae = "Header_root",
                re = "Header_root--variant-transparent-light",
                le = "Header_bar",
                se = "Header_tab",
                oe = "Header_main",
                de = "Header_logo",
                ce = "Header_bookingCooperation",
                ue = "Header_bookingCooperationLogo",
                me = {
                    threshold: .5
                };
            var ge = function(e) {
                    let {
                        tabs: t,
                        onTabView: i
                    } = e;
                    const {
                        buttonRefs: a,
                        moreRef: r
                    } = (0, k.useTabContext)();
                    return ((e, t, i, a) => {
                        const r = (0, n.useRef)([]),
                            l = (0, n.useCallback)(((e, t) => {
                                e.forEach((e => {
                                    const i = r.current.find((t => t.ref === e.target));
                                    if (e.isIntersecting && i && !i.exposed) {
                                        var n;
                                        const l = r.current.find((t => t.ref === e.target));
                                        E("xpb-tab_exposed", null === l || void 0 === l ? void 0 : l.tab), i.exposed = !0, a && null !== l && void 0 !== l && null !== (n = l.tab) && void 0 !== n && n.id && a(l.tab.id), t.unobserve(e.target)
                                    }
                                }))
                            }), [a]);
                        (0, n.useEffect)((() => {
                            const e = () => {
                                r.current && r.current.length > 0 && r.current.forEach((e => {
                                    e.exposed || (E("xpb-tab_exposed", null === e || void 0 === e ? void 0 : e.tab), Object.assign(e, {
                                        exposed: !0
                                    }))
                                }))
                            };
                            i.current && i.current.addEventListener("click", e);
                            const t = i.current;
                            return () => {
                                t && t.removeEventListener("click", e)
                            }
                        }), [i, r]), (0, n.useEffect)((() => {
                            let i;
                            if (window && window.IntersectionObserver) {
                                const n = (e.current || []).map(((e, i) => {
                                    var n;
                                    return {
                                        ref: e,
                                        tab: t[i],
                                        exposed: (null === (n = r.current) || void 0 === n || null === (n = n[i]) || void 0 === n ? void 0 : n.exposed) ? ? !1
                                    }
                                }));
                                r.current = n, i = new IntersectionObserver(l, me), r.current && r.current.length > 0 && r.current.forEach((e => {
                                    e.exposed || i.observe(e.ref)
                                }))
                            }
                            return () => {
                                i && i.disconnect()
                            }
                        }), [l, e, t])
                    })(a, t, r, i), (0, d.jsx)(l.Tab.TriggerList, {
                        children: t.map((e => (0, d.jsx)(l.Tab.Trigger, {
                            native: !0,
                            ...e,
                            linkAttributes: {
                                role: "tab",
                                id: e.id
                            }
                        }, e.id)))
                    })
                },
                ve = (e, t, i) => {
                    const n = `action_${t}`;
                    return t < i.length - 1 ? e : (0, d.jsx)(l.Button.Aligner, {
                        alignment: "end",
                        children: e
                    }, n)
                };
            var he = function(e) {
                    const {
                        actions: t,
                        activeTabId: i,
                        className: a,
                        defaultActiveTabId: r,
                        logo: s,
                        onTabChange: o,
                        onTabView: c,
                        tabs: u,
                        tabsMoreLabel: m,
                        tabsIntroLabel: g,
                        variant: v = "default",
                        brandedText: k,
                        brandedLogoType: b
                    } = e, C = G(ae, a, "transparent-light" === v && re), _ = i ? {
                        activeTabId: i,
                        "aria-selected": !0
                    } : {
                        defaultActiveTabId: r
                    }, x = (0, n.useMemo)((() => {
                        var e;
                        return {
                            "data-testid": "header-xpb",
                            "aria-label": g,
                            "aria-owns": null === u || void 0 === u || null === (e = u.map((e => e.id))) || void 0 === e ? void 0 : e.join(" ")
                        }
                    }), [g, u]);
                    return (0, d.jsx)("header", {
                        className: C,
                        children: (0, d.jsxs)(l.Container, {
                            children: [(0, d.jsxs)("nav", {
                                className: le,
                                children: [(0, d.jsxs)("div", {
                                    className: oe,
                                    children: [(0, d.jsx)("div", {
                                        className: de,
                                        children: s
                                    }), b && "NONE" !== b ? (0, d.jsxs)("div", {
                                        className: ce,
                                        children: [k ? (0, d.jsx)(l.Text, {
                                            variant: "small_1",
                                            children: k
                                        }) : null, (0, d.jsx)("div", {
                                            className: ue,
                                            children: "BLUE" === b ? (0, d.jsx)(h.Z, {}) : (0, d.jsx)(p.Z, {})
                                        })]
                                    }) : null]
                                }), (0, d.jsx)(l.Stack, {
                                    direction: "row",
                                    alignItems: "center",
                                    justifyContent: "end",
                                    gap: 2,
                                    children: t && t.map(ve)
                                })]
                            }), u && u.length > 0 && (0, d.jsx)(l.Tab, {
                                color: "inherit",
                                className: se,
                                onTabChange: o,
                                moreLabel: m,
                                variant: "rounded",
                                attributes: x,
                                ..._,
                                children: (0, d.jsx)(ge, {
                                    tabs: u,
                                    onTabView: c
                                })
                            })]
                        })
                    })
                },
                pe = "LanguagePicker_flag";
            var ke = function(e) {
                const {
                    children: t,
                    languageSelection: i,
                    selectedLanguageId: n,
                    selectedFlagUrl: a,
                    attributes: r,
                    triggerAttributes: s,
                    onOpen: o,
                    onClose: c
                } = e, u = (e, t) => (0, d.jsx)(l.Avatar, {
                    className: t ? "" : pe,
                    src: e.flagUrl,
                    backgroundSize: e.backgroundSize,
                    backgroundPosition: e.backgroundPosition,
                    size: "small"
                });
                return (0, d.jsx)(V, {
                    selection: i,
                    selectedId: n,
                    attributes: r,
                    triggerAttributes: s,
                    renderSign: u,
                    renderSelectedSign: e => a ? (0, d.jsx)(l.Avatar, {
                        src: a,
                        size: "small"
                    }) : u(e, !0),
                    onOpen: o,
                    onClose: c,
                    shouldRenderLangAttribute: !0,
                    children: t
                })
            };
            var be = function(e) {
                const {
                    children: t,
                    languageSelection: i,
                    selectedLanguageId: n,
                    selectedFlagUrl: a,
                    shouldDisplaySelectionTitle: r,
                    attributes: s,
                    triggerAttributes: o,
                    onOpen: c,
                    onClose: u
                } = e, m = e => (0, d.jsx)(l.Avatar, {
                    className: pe,
                    src: e.flagUrl,
                    backgroundSize: e.backgroundSize,
                    backgroundPosition: e.backgroundPosition,
                    size: "small"
                });
                return (0, d.jsx)(U, {
                    selection: i,
                    selectedId: n,
                    shouldDisplaySelectionTitle: r,
                    attributes: s,
                    triggerAttributes: o,
                    renderSign: m,
                    renderSelectedSign: e => a ? (0, d.jsx)(l.Avatar, {
                        className: pe,
                        src: a,
                        size: "small"
                    }) : m(e),
                    onOpen: c,
                    onClose: u,
                    shouldRenderLangAttribute: !0,
                    children: t
                })
            };
            var Ce = function(e) {
                let {
                    variant: t,
                    ...i
                } = e;
                return "desktop" === t ? (0, d.jsx)(ke, { ...i
                }) : (0, d.jsx)(be, { ...i
                })
            };
            var _e = function(e) {
                let {
                    count: t,
                    ariaLabel: i,
                    size: n = "large",
                    variant: a = "tertiary-inherit",
                    ...r
                } = e;
                return (0, d.jsx)(l.Button, {
                    size: n,
                    variant: a,
                    ...r,
                    children: t ? (0, d.jsx)(l.BubbleContainer, {
                        value: t,
                        ariaLabel: i,
                        children: (0, d.jsx)(l.Icon, {
                            size: "large",
                            svg: b
                        })
                    }) : (0, d.jsx)(l.Icon, {
                        size: "large",
                        svg: b
                    })
                })
            };
            var xe = function(e) {
                    let {
                        count: t,
                        hint: i,
                        ariaLabel: n,
                        content: a,
                        onClose: r,
                        onOpen: s
                    } = e;
                    return a ? (0, d.jsx)(l.Tooltip, {
                        text: i,
                        position: "bottom",
                        hideArrow: !0,
                        zIndex: 1,
                        children: e => (0, d.jsxs)(l.Popover, {
                            hideClose: !0,
                            size: "stretch",
                            fill: !0,
                            onClose: r,
                            onOpen: s,
                            zIndex: 10,
                            children: [(0, d.jsx)(l.Popover.Trigger, {
                                children: i => {
                                    const a = { ...e,
                                        ...i
                                    };
                                    return (0, d.jsx)(_e, {
                                        attributes: a,
                                        count: t,
                                        ariaLabel: n
                                    })
                                }
                            }), (0, d.jsx)(l.Popover.Content, {
                                children: a
                            })]
                        })
                    }) : null
                },
                fe = "NotificationMobile_wrapper";
            var Se = function(e) {
                let {
                    title: t,
                    count: i,
                    ariaLabel: a,
                    content: r,
                    closeAriaLabel: s,
                    onClose: o,
                    onOpen: c
                } = e;
                const [u, m] = (0, n.useState)(!1);
                return r ? (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(_e, {
                        count: i,
                        onClick: () => {
                            null === c || void 0 === c || c(), m(!0)
                        },
                        ariaLabel: a
                    }), (0, d.jsx)(l.SheetContainer, {
                        position: "fullScreen",
                        fill: !0,
                        active: u,
                        closeAriaLabel: s || "",
                        onCloseTrigger: () => {
                            null === o || void 0 === o || o(), m(!1)
                        },
                        children: (0, d.jsxs)("div", {
                            className: `${fe} js-uc-notifications-content`,
                            children: [t ? (0, d.jsx)(l.Box, {
                                padding: 6,
                                children: (0, d.jsx)(l.Text, {
                                    variant: "headline_2",
                                    children: t
                                })
                            }) : null, r]
                        })
                    })]
                }) : null
            };
            var Ne = function(e) {
                let {
                    variant: t = "desktop",
                    ...i
                } = e;
                return "desktop" === t ? (0, d.jsx)(xe, { ...i
                }) : (0, d.jsx)(Se, { ...i
                })
            };
            var ye = "PartnerBranding_container",
                Te = e => {
                    const {
                        imageAlt: t,
                        imageUrl: i,
                        imageHref: a,
                        preamble: r,
                        preambleCaps: s,
                        preambleColor: o,
                        preambleStyle: c,
                        onClickLink: u
                    } = e, m = (0, n.useMemo)((() => ({
                        color: o,
                        ...s ? {
                            textTransform: "uppercase"
                        } : {},
                        ..."ITALIC" === c ? {
                            fontStyle: "italic"
                        } : {},
                        ..."BOLD" === c ? {
                            fontWeight: "bold"
                        } : {}
                    })), [s, o, c]), g = function(e) {
                        const {
                            isSmall: t,
                            isMedium: i,
                            isLarge: n
                        } = (0, l.useViewport)();
                        return t ? e.small : i ? e.medium ? ? e.small : n ? e.large ? ? e.medium ? ? e.small : e.small
                    }({
                        small: "30px",
                        large: "50px"
                    }), {
                        isSmall: v
                    } = (0, l.useViewport)(), h = {
                        "data-testid": "header-partner-branding"
                    };
                    return v ? (0, d.jsx)(l.Box, {
                        padding: 1,
                        className: ye,
                        attributes: h,
                        children: (0, d.jsx)(l.Stack, {
                            alignItems: "center",
                            children: (0, d.jsx)(l.Actionable, {
                                href: a,
                                attributes: a ? {
                                    target: "_blank"
                                } : {},
                                onClick: u,
                                children: (0, d.jsx)(l.Image, {
                                    alt: t,
                                    src: i,
                                    height: g
                                })
                            })
                        })
                    }) : (0, d.jsx)(l.Box, {
                        padding: 2,
                        className: ye,
                        attributes: h,
                        children: (0, d.jsxs)(l.Stack, {
                            direction: "column",
                            gap: 0,
                            alignItems: "center",
                            children: [r && r.length > 0 && (0, d.jsx)(l.Stack.Item, {
                                children: (0, d.jsx)(l.Text, {
                                    variant: "emphasized_2",
                                    attributes: {
                                        style: m,
                                        "data-testid": "header-partner-branding-preamble-text"
                                    },
                                    children: r
                                })
                            }), (0, d.jsx)(l.Stack.Item, {
                                children: (0, d.jsx)(l.Actionable, {
                                    href: a,
                                    attributes: a ? {
                                        target: "_blank"
                                    } : {},
                                    onClick: u,
                                    children: (0, d.jsx)(l.Image, {
                                        alt: t,
                                        src: i,
                                        height: g
                                    })
                                })
                            })]
                        })
                    })
                },
                Le = "ProfileMenu_mobile-content",
                Ie = "ProfileMenu_genius-label",
                Ee = "ProfileMenu_profile",
                Ae = {
                    "item-with-divider": "ProfileMenuWithSummary_item-with-divider",
                    "desktop-popover-content": "ProfileMenuWithSummary_desktop-popover-content",
                    "mobile-item": "ProfileMenuWithSummary_mobile-item"
                };

            function je(e) {
                let {
                    renderAction: t,
                    popoverSections: i,
                    onClose: n,
                    onOpen: a
                } = e;
                return (0, d.jsxs)(l.Popover, {
                    hideClose: !0,
                    size: "auto",
                    fill: !0,
                    position: "bottom-end",
                    onClose: n,
                    onOpen: a,
                    children: [(0, d.jsx)(l.Popover.Trigger, {
                        children: t
                    }), (0, d.jsx)(l.Popover.Content, {
                        children: (0, d.jsx)(l.Box, {
                            padding: 2,
                            className: Ae["desktop-popover-content"],
                            children: (0, d.jsx)(l.List, {
                                rowSpacing: "none",
                                attributes: {
                                    "data-abu-styles-override": "header-profile-menu"
                                },
                                children: i.map(((e, t, i) => {
                                    const n = t === i.length - 1;
                                    return e.items.map(((e, i, a) => {
                                        const r = i === a.length - 1 && !n;
                                        return (0, d.jsx)(Fe, {
                                            item: e,
                                            showDivider: r
                                        }, `${t}-${i}`)
                                    }))
                                }))
                            })
                        })
                    })]
                })
            }

            function we(e) {
                let {
                    popoverSections: t
                } = e;
                return (0, d.jsx)(l.List, {
                    rowSpacing: "none",
                    attributes: {
                        "data-abu-styles-override": "header-mobile-profile-modal"
                    },
                    children: t.map(((e, t, i) => {
                        const n = t === i.length - 1;
                        return e.items.map(((e, i, a) => {
                            const r = i === a.length - 1 && !n;
                            return (0, d.jsx)(Fe, {
                                item: e,
                                showDivider: r,
                                className: Ae["mobile-item"]
                            }, `${t}-${i}`)
                        }))
                    }))
                })
            }

            function Fe(e) {
                var t, i;
                let {
                    item: n,
                    showDivider: a,
                    className: r
                } = e;
                return (0, d.jsx)(l.ListItem, {
                    spacing: "medium",
                    preventDefault: n.preventDefault,
                    icon: n.text ? n.icon : void 0,
                    onClick: n.onClick && (e => {
                        n.onClick && n.onClick(e)
                    }),
                    href: n.href,
                    attributes: n.attributes,
                    className: G(a ? Ae["item-with-divider"] : void 0, r),
                    children: n.text ? (0, d.jsx)(l.Text, {
                        className: Ae["item-text"],
                        variant: "body_2",
                        children: n.text
                    }) : (0, d.jsxs)(l.Stack, {
                        direction: "row",
                        alignItems: "center",
                        children: [(0, d.jsx)(l.Stack.Item, {
                            grow: !0,
                            children: (0, d.jsx)(l.Text, {
                                variant: "emphasized_2",
                                children: null === (t = n.content) || void 0 === t ? void 0 : t.title
                            })
                        }), (0, d.jsx)(l.Text, {
                            variant: "strong_2",
                            children: null === (i = n.content) || void 0 === i ? void 0 : i.sideContent
                        }), (0, d.jsx)(l.Icon, {
                            svg: v.Z
                        })]
                    })
                })
            }
            var Oe = function(e) {
                    const {
                        profile: t,
                        mobile: i,
                        avatarTitle: r,
                        avatarSubtitle: s,
                        triggerAriaLabel: o,
                        closeAriaLabel: c
                    } = e, {
                        onOpen: u,
                        onClose: m
                    } = t, [g, v] = a().useState(!1), h = {
                        src: (0, n.useMemo)((() => t.avatarUrl ? t.avatarUrl : t.initials ? void 0 : t.avatarFallbackUrl || "https://q-xx.bstatic.com/backend_static/common/img/header/avatar.png"), [t.avatarUrl, t.initials, t.avatarFallbackUrl]),
                        color: t.genius ? "accent" : void 0,
                        outline: t.genius ? "accent" : "white",
                        text: t.initials
                    }, p = (0, d.jsxs)(l.Stack, {
                        direction: "row",
                        gap: 1,
                        alignItems: "center",
                        children: [i ? (0, d.jsx)("span", {
                            className: Ie,
                            children: t.geniusLabel
                        }) : (0, d.jsx)(l.Text, {
                            tagName: "span",
                            color: "brand_genius_secondary",
                            variant: "small_1",
                            children: t.geniusLabel
                        }), t.geniusVipBadge]
                    }), k = (e, t) => (0, d.jsx)(l.ListItem, {
                        spacing: "large",
                        icon: e.icon,
                        onClick: e.onChoose && (() => {
                            e.onChoose && e.onChoose(e, t)
                        }),
                        href: e.href,
                        attributes: e.attributes,
                        preventDefault: e.preventDefault,
                        children: e.text
                    }, "string" === typeof e.text ? e.text : t), b = e => (0, d.jsx)(l.Button, {
                        size: i ? "large" : void 0,
                        variant: "tertiary-inherit",
                        className: Ee,
                        attributes: { ...e,
                            "aria-label": o || t.name,
                            "data-testid": "header-profile"
                        },
                        children: i ? (0, d.jsx)(l.Avatar, { ...h,
                            size: "small",
                            attributes: {
                                "data-testid": "header-profile-mobile-avatar"
                            }
                        }) : (0, d.jsx)(l.AvatarBlock, {
                            title: r || t.name,
                            subtitle: s ? (0, d.jsx)(l.Text, {
                                tagName: "span",
                                variant: "small_1",
                                children: s
                            }) : t.genius && t.geniusLabel && p,
                            color: "inherit",
                            avatar: { ...h,
                                attributes: {
                                    "data-testid": "header-profile-avatar"
                                }
                            },
                            attributes: {
                                "aria-label": o
                            }
                        })
                    }), C = () => {
                        v(!0), null === u || void 0 === u || u()
                    }, _ = () => {
                        v(!1), null === m || void 0 === m || m()
                    }, x = (0, n.useMemo)((() => ({
                        attributes: {
                            "data-testid": "header-mobile-profile-modal"
                        },
                        closeAttributes: {
                            "data-testid": "header-mobile-profile-modal-close"
                        }
                    })), []), f = (0, n.useMemo)((() => ({
                        attributes: {
                            "data-testid": "header-profile-menu"
                        }
                    })), []);
                    if (i) return (0, d.jsxs)(d.Fragment, {
                        children: [b({
                            onClick: C
                        }), (0, d.jsx)(l.SheetContainer, {
                            position: "fullScreen",
                            fill: !0,
                            arrowNavigation: !0,
                            closeAriaLabel: c || t.closeAriaLabel,
                            active: g,
                            onCloseTrigger: _,
                            ...x,
                            children: (0, d.jsxs)("div", {
                                className: Le,
                                children: [(0, d.jsx)(l.Box, {
                                    padding: 6,
                                    children: (0, d.jsx)(l.AvatarBlock, {
                                        size: "large",
                                        title: t.name,
                                        subtitle: t.genius && t.geniusLabel && p,
                                        avatar: h
                                    })
                                }), t.menuWithSummary ? (0, d.jsx)(we, {
                                    popoverSections: t.menuWithSummary
                                }) : t.menu.map(((e, t) => (0, d.jsxs)(a().Fragment, {
                                    children: [t > 0 && (0, d.jsx)(l.Divider, {}), e.items.map(k)]
                                }, "string" === typeof e.items[0].text ? e.items[0].text : t)))]
                            })
                        })]
                    });
                    if (t.menuWithSummary) return (0, d.jsx)(je, {
                        renderAction: b,
                        popoverSections: t.menuWithSummary,
                        onClose: m,
                        onOpen: u
                    });
                    const S = t.menu.map((e => ({ ...e,
                        items: e.items.map((e => ({ ...e,
                            preventDefault: void 0 === e.preventDefault ? !!e.onChoose : e.preventDefault
                        })))
                    })));
                    return (0, d.jsx)(l.DropdownMenu, {
                        sections: S,
                        position: "bottom-end",
                        navigationMode: "tab-and-arrows",
                        onOpen: u,
                        onClose: m,
                        ...f,
                        children: b
                    })
                },
                Pe = {
                    root: "SearchBoxFrameItem_root",
                    errorWrapper: "SearchBoxFrameItem_errorWrapper",
                    error: "SearchBoxFrameItem_error",
                    "root--width-auto": "SearchBoxFrameItem_root--width-auto"
                };

            function Be(e, t) {
                const {
                    children: i,
                    error: n,
                    width: a
                } = e, r = "number" === typeof a, l = G(Pe.root, "auto" === a && Pe["root--width-auto"]);
                return (0, d.jsxs)("div", {
                    className: l,
                    ref: t,
                    style: r ? {
                        "--web_shell_sb_item_width": a
                    } : {},
                    children: [i, n && (0, d.jsx)("span", {
                        className: Pe.errorWrapper,
                        children: (0, d.jsx)("span", {
                            className: Pe.error,
                            role: "alert",
                            children: n
                        })
                    })]
                })
            }
            var Re = a().forwardRef(Be),
                Me = {
                    root: "SearchBoxTrigger_root",
                    main: "SearchBoxTrigger_main",
                    trigger: "SearchBoxTrigger_trigger",
                    layout: "SearchBoxTrigger_layout",
                    text: "SearchBoxTrigger_text",
                    label: "SearchBoxTrigger_label",
                    "label--with-sublabel": "SearchBoxTrigger_label--with-sublabel",
                    truncate: "SearchBoxTrigger_truncate",
                    overflow: "SearchBoxTrigger_overflow"
                };

            function De(e) {
                const {
                    value: t,
                    hasSubLabel: i
                } = e, n = [Me.label, Me.truncate, i && Me["label--with-sublabel"]].filter(Boolean).join(" ");
                return t ? Array.isArray(t) ? (0, d.jsx)("span", {
                    className: n,
                    children: t.map(((e, t) => (0, d.jsxs)(a().Fragment, {
                        children: [0 !== t && (0, d.jsx)(d.Fragment, {
                            children: "\xa0\xb7\xa0"
                        }), e.text]
                    }, e.text)))
                }) : (0, d.jsx)("span", {
                    className: n,
                    children: t
                }) : null
            }

            function Ve(e) {
                const {
                    subValue: t
                } = e;
                if (!t) return null;
                const i = "string" === typeof t ? t : t.map(((e, t) => (0, d.jsxs)(a().Fragment, {
                    children: [0 !== t && (0, d.jsx)(d.Fragment, {
                        children: "\xa0\xb7\xa0"
                    }), e.text]
                }, e.text)));
                return (0, d.jsx)(l.Text, {
                    variant: "small_1",
                    color: "neutral_alt",
                    className: Me.truncate,
                    children: i
                })
            }

            function He(e, t) {
                const {
                    value: i,
                    subValue: n,
                    ariaLabel: r,
                    icon: s,
                    attributes: o,
                    triggerAttributes: c,
                    onClick: u,
                    onClear: m,
                    clearAriaLabel: g,
                    placeholder: v,
                    width: h,
                    children: p,
                    label: k,
                    loading: b,
                    error: _,
                    preview: x
                } = e, f = a().isValidElement(i) || p, S = (0, d.jsxs)(l.Stack, {
                    direction: "row",
                    gap: 3,
                    alignItems: "center",
                    mixin: {
                        width: "100%",
                        padding: x ? 2 : 1,
                        paddingInlineEnd: 4,
                        paddingInlineStart: 3,
                        minHeight: 12
                    },
                    className: Me.layout,
                    children: [s && (0, d.jsx)(l.Icon, {
                        size: "medium",
                        svg: s,
                        color: "neutral_alt"
                    }), (0, d.jsxs)(l.Stack.Item, {
                        grow: !0,
                        className: Me.text,
                        children: [k && (0, d.jsx)(l.Text, {
                            variant: "small_1",
                            color: "neutral_alt",
                            className: Me.truncate,
                            children: k
                        }), !!i && (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)(De, {
                                value: i,
                                hasSubLabel: !!n
                            }), (0, d.jsx)(Ve, {
                                subValue: n
                            })]
                        }), p, !i && (0, d.jsx)(l.Text, {
                            color: "neutral_alt",
                            className: [Me.label, Me.truncate].join(" "),
                            children: v
                        })]
                    }), b && (0, d.jsx)(l.Spinner, {
                        size: "small"
                    })]
                });
                return (0, d.jsx)(Re, {
                    width: h,
                    ref: t,
                    error: _,
                    children: (0, d.jsxs)(l.Stack, {
                        direction: "row",
                        alignItems: "center",
                        className: Me.root,
                        attributes: o,
                        children: [(0, d.jsx)(l.Stack.Item, {
                            grow: !0,
                            className: Me.main,
                            children: f && !u ? (0, d.jsx)("label", { ...c,
                                className: Me.trigger,
                                "aria-label": r,
                                children: S
                            }) : (0, d.jsx)(l.Actionable, {
                                wide: !0,
                                onClick: u,
                                type: "button",
                                attributes: { ...c,
                                    "aria-label": r,
                                    "aria-haspopup": !0
                                },
                                className: Me.trigger,
                                children: S
                            })
                        }), !!i && !!m && g && !b && (0, d.jsx)(l.Button.Aligner, {
                            alignment: ["top", "bottom"],
                            children: (0, d.jsx)(l.Button, {
                                variant: "tertiary-neutral",
                                icon: C.Z,
                                size: "large",
                                onClick: m,
                                attributes: {
                                    "aria-label": g
                                }
                            })
                        })]
                    })
                })
            }
            var Ue = a().forwardRef(He),
                Ge = {
                    "sheet-content": "SearchBoxField_sheet-content",
                    "sheet-content--fill": "SearchBoxField_sheet-content--fill",
                    "sheet-content--fill-top": "SearchBoxField_sheet-content--fill-top",
                    "sheet-tabs": "SearchBoxField_sheet-tabs",
                    "sheet-tabs-panel": "SearchBoxField_sheet-tabs-panel"
                };

            function We(e) {
                const {
                    fill: t,
                    tabbed: i,
                    children: n
                } = e, a = [Ge["sheet-content"], t && Ge["sheet-content--fill"], t && i && Ge["sheet-content--fill-top"]].filter(Boolean).join(" ");
                return (0, d.jsx)("div", {
                    className: a,
                    children: n
                })
            }

            function $e(e, t) {
                const {
                    icon: i,
                    value: r,
                    popover: s,
                    sheet: o,
                    ariaLabel: c,
                    sheetTitle: u,
                    closeAriaLabel: m,
                    closeAttributes: g,
                    overlayAttributes: v,
                    onClear: h,
                    onClose: p,
                    onOpen: k,
                    clearAriaLabel: b,
                    placeholder: C,
                    inputs: _,
                    width: x,
                    error: f,
                    label: S,
                    tabs: N,
                    onTabChange: y,
                    children: T,
                    skeletonSlot: L
                } = e, {
                    isLarge: I
                } = (0, l.useViewport)(), [E, A] = a().useState(!1), j = a().useRef(null), w = a().useRef(null), F = (0, n.useCallback)((() => {
                    A(!0), null === k || void 0 === k || k()
                }), [k]), O = (0, n.useCallback)((() => {
                    A(!1), null === p || void 0 === p || p()
                }), [p]);
                return a().useImperativeHandle(t, (() => ({
                    active: E,
                    open: F,
                    close: O
                })), [E, F, O]), (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(Ue, {
                        width: x,
                        error: f,
                        value: L || r,
                        ariaLabel: c,
                        icon: i,
                        attributes: {
                            ref: w
                        },
                        triggerAttributes: {
                            ref: j
                        },
                        onClick: I ? void 0 : F,
                        onClear: h,
                        clearAriaLabel: b,
                        placeholder: C,
                        label: S
                    }), null === _ || void 0 === _ ? void 0 : _.map(((e, t) => a().cloneElement(e, {
                        key: e.props.name || e.props.key || t
                    }))), I ? (0, d.jsx)(l.Popover, {
                        active: E,
                        onClose: O,
                        onOpen: F,
                        triggerRef: j,
                        positionRef: w,
                        hideArrow: !0,
                        hideClose: !0,
                        fill: !0,
                        position: null !== s && void 0 !== s && s.width ? "bottom-end" : "bottom-stretch",
                        size: "stretch",
                        overflow: "hidden",
                        children: (0, d.jsxs)(l.Popover.Content, {
                            attributes: {
                                role: "dialog",
                                "aria-label": c
                            },
                            children: [N && N.length > 1 ? (0, d.jsxs)(l.Tab, {
                                fillEqually: !0,
                                onTabChange: y,
                                defaultActiveTabId: N[0].id,
                                children: [(0, d.jsx)(l.Tab.TriggerList, {
                                    children: N.map((e => (0, d.jsx)(l.Tab.Trigger, {
                                        text: e.label,
                                        id: e.id || e.label
                                    }, e.label)))
                                }), N.map((e => (0, d.jsx)(l.Tab.Panel, {
                                    id: e.id || e.label,
                                    children: (0, d.jsx)(l.Box, {
                                        mixin: {
                                            width: null === s || void 0 === s ? void 0 : s.width
                                        },
                                        children: e.children
                                    })
                                }, e.label)))]
                            }) : (0, d.jsx)(l.Box, {
                                mixin: {
                                    width: null === s || void 0 === s ? void 0 : s.width
                                },
                                children: N ? N[0].children : T
                            }), (null === s || void 0 === s ? void 0 : s.actionBarSlot) && (0, d.jsx)(l.ActionBar, {
                                children: s.actionBarSlot
                            }), (0, d.jsx)(l.HiddenVisually, {
                                children: (0, d.jsx)(l.Actionable, {
                                    onClick: O,
                                    children: m
                                })
                            })]
                        })
                    }) : (0, d.jsx)(l.SheetContainer, {
                        overflow: "hidden",
                        position: null !== o && void 0 !== o && o.fullScreen ? "fullScreen" : "bottom",
                        closeAriaLabel: m,
                        closeAttributes: g,
                        overlayAttributes: v,
                        active: E,
                        onCloseTrigger: O,
                        title: (0, d.jsx)(l.Box, {
                            mixin: {
                                paddingBlockEnd: 0
                            },
                            children: u
                        }),
                        footer: (null === o || void 0 === o ? void 0 : o.actionBarSlot) && (0, d.jsx)(l.ActionBar, {
                            children: o.actionBarSlot
                        }),
                        fill: !0,
                        children: N && N.length > 1 ? (0, d.jsxs)(l.Tab, {
                            defaultActiveTabId: N[0].id,
                            fillEqually: !0,
                            className: Ge["sheet-tabs"],
                            onTabChange: y,
                            children: [(0, d.jsx)(l.Tab.TriggerList, {
                                children: N.map((e => (0, d.jsx)(l.Tab.Trigger, {
                                    text: e.label,
                                    id: e.id || e.label
                                }, e.label)))
                            }), N.map((e => (0, d.jsx)(l.Tab.Panel, {
                                id: e.id || e.label,
                                className: Ge["sheet-tabs-panel"],
                                children: (0, d.jsx)(We, {
                                    fill: null === o || void 0 === o ? void 0 : o.fill,
                                    tabbed: !0,
                                    children: e.children
                                })
                            }, e.label)))]
                        }) : (0, d.jsx)(We, {
                            fill: null === o || void 0 === o ? void 0 : o.fill,
                            children: N ? N[0].children : T
                        })
                    })]
                })
            }
            var ze = a().forwardRef($e),
                Ze = "__webShellSearchBoxAutocompleteActive",
                qe = "SearchBoxFieldAutocomplete_sections-mobile",
                Ke = "SearchBoxFieldAutocomplete_input",
                Xe = "SearchBoxFieldAutocomplete_input--readonly";

            function Ye(e) {
                const {
                    mobile: t,
                    value: i,
                    onClick: n,
                    title: a,
                    subtitle: r,
                    thumbnail: s,
                    icon: o,
                    startSlot: c,
                    attributes: u
                } = e, m = s ? (0, d.jsx)(l.Image, {
                    borderRadius: 100,
                    height: "40px",
                    width: "40px",
                    src: s.src
                }) : o && (0, d.jsx)(l.Icon, {
                    svg: o,
                    size: "medium"
                });
                return t ? (0, d.jsxs)(l.ListItem, {
                    roundedCorners: !0,
                    onClick: () => null === n || void 0 === n ? void 0 : n(i),
                    startSlot: c || m,
                    attributes: u,
                    children: [(0, d.jsx)(l.Text, {
                        variant: "emphasized_2",
                        children: a
                    }), r && (0, d.jsx)(l.Text, {
                        variant: "small_1",
                        color: "neutral_alt",
                        children: r
                    })]
                }) : (0, d.jsxs)(l.Autocomplete.Item, {
                    value: i,
                    startSlot: c || m,
                    attributes: u,
                    children: [(0, d.jsx)(l.Text, {
                        variant: "emphasized_2",
                        children: a
                    }), r && (0, d.jsx)(l.Text, {
                        variant: "small_1",
                        color: "neutral_alt",
                        children: r
                    })]
                })
            }

            function Qe(e) {
                const {
                    title: t,
                    items: i,
                    children: a,
                    mobile: r,
                    onItemClick: s,
                    index: o,
                    last: c
                } = e, u = (0, d.jsxs)(l.Stack, {
                    gap: .5,
                    children: [null === i || void 0 === i ? void 0 : i.map((e => (0, n.createElement)(Ye, { ...e,
                        key: e.value,
                        mobile: r,
                        onClick: s
                    }))), a && (0, d.jsx)(l.Stack.Item, {
                        mixin: {
                            paddingInlineStart: 3,
                            paddingInlineEnd: 3,
                            paddingBlockStart: 1,
                            paddingBlockEnd: c ? 3 : 0
                        },
                        children: a
                    })]
                });
                return t ? (0, d.jsxs)(l.Stack, {
                    gap: 1,
                    children: [t && (0, d.jsx)(l.Text, {
                        variant: "small_1",
                        mixin: {
                            paddingInlineStart: 3,
                            paddingInlineEnd: 3,
                            paddingBlockStart: 0 === o ? 2 : 4
                        },
                        children: t
                    }), u]
                }) : u
            }

            function Je(e, t) {
                const {
                    name: i,
                    onChange: r,
                    onInput: s,
                    value: o,
                    placeholder: c,
                    icon: u,
                    sections: m,
                    emptyLabel: g,
                    closeAriaLabel: v,
                    sheetTitle: h,
                    clearButtonLabel: p,
                    inputAttributes: k,
                    loading: b,
                    width: C,
                    error: x,
                    label: f,
                    ariaLabel: S,
                    skeletonSlot: N,
                    popoverSize: y,
                    highlightValueOnSelect: T = !0
                } = e, L = a().useRef(null), [I, E] = a().useState(!1), A = a().useRef(null), {
                    isLarge: j
                } = (0, l.useViewport)(), w = () => {
                    E(!0), history.pushState({
                        [Ze]: 1
                    }, "")
                }, F = () => {
                    E(!1), history.pushState({
                        [Ze]: 0
                    }, "")
                }, O = () => {
                    var e;
                    null === (e = L.current) || void 0 === e || e.open(), w()
                }, P = () => {
                    var e;
                    null === (e = L.current) || void 0 === e || e.close(), F()
                };
                return a().useImperativeHandle(t, (() => ({
                    active: I,
                    open: O,
                    close: P
                })), [I]), a().useEffect((() => {
                    const e = e => {
                        var t;
                        null !== (t = e.state) && void 0 !== t && t.hasOwnProperty(Ze) && E(!!e.state[Ze])
                    };
                    return history.replaceState({
                        [Ze]: 0
                    }, ""), window.addEventListener("popstate", e), () => window.removeEventListener("popstate", e)
                }), []), (0, d.jsxs)(d.Fragment, {
                    children: [j ? (0, d.jsxs)(l.Autocomplete, {
                        onChange: r,
                        onInput: s,
                        ref: L,
                        children: [(0, d.jsx)(l.Autocomplete.Trigger, {
                            children: (e, t) => (0, d.jsx)(Ue, {
                                ariaLabel: S,
                                label: f,
                                icon: u,
                                loading: b,
                                clearAriaLabel: p,
                                width: C,
                                error: x,
                                onClear: null !== o && void 0 !== o && o.length ? () => {
                                    var t;
                                    null === r || void 0 === r || r({
                                        value: ""
                                    }), null === (t = e.ref.current) || void 0 === t || t.focus()
                                } : void 0,
                                ref: t,
                                value: N || (0, d.jsx)("input", { ...e,
                                    ...k,
                                    onFocus: e => {
                                        var t;
                                        null === k || void 0 === k || null === (t = k.onFocus) || void 0 === t || t.call(k, e), T && e.currentTarget.select()
                                    },
                                    type: "text",
                                    className: Ke,
                                    name: i,
                                    placeholder: c,
                                    value: o || ""
                                })
                            })
                        }), (0, d.jsxs)(l.Autocomplete.Popover, {
                            popoverSize: y || "400px",
                            children: [!(null !== m && void 0 !== m && m.length) && g && !b && (0, d.jsx)(l.Box, {
                                padding: 2,
                                children: g
                            }), null === m || void 0 === m ? void 0 : m.map(((e, t) => {
                                var i;
                                return (0, n.createElement)(Qe, { ...e,
                                    index: t,
                                    last: t + 1 === m.length,
                                    key: e.title || (null === (i = e.items) || void 0 === i || null === (i = i[0]) || void 0 === i ? void 0 : i.title) || t
                                })
                            }))]
                        })]
                    }) : (0, d.jsx)(Ue, {
                        ariaLabel: S,
                        label: f,
                        icon: u,
                        loading: b,
                        width: C,
                        error: x,
                        value: N || (0, d.jsx)("input", { ...k,
                            readOnly: !0,
                            type: "text",
                            name: i,
                            placeholder: c,
                            value: o || "",
                            className: `${Ke} ${Xe}`,
                            onClick: e => {
                                var t;
                                null === k || void 0 === k || null === (t = k.onClick) || void 0 === t || t.call(k, e), w()
                            },
                            onKeyDown: e => {
                                "Enter" !== e.key && " " !== e.key || (e.preventDefault(), w())
                            }
                        })
                    }), !j && (0, d.jsx)(l.SheetContainer, {
                        closeAriaLabel: v,
                        active: I,
                        position: "fullScreen",
                        onCloseTrigger: F,
                        onAfterOpen: () => {
                            var e;
                            null === (e = A.current) || void 0 === e || e.focus()
                        },
                        title: h,
                        arrowNavigation: !0,
                        children: (0, d.jsxs)(l.Stack, {
                            gap: 4,
                            children: [(0, d.jsx)(l.InputText, {
                                name: "searchbox-destination",
                                placeholder: c,
                                startSlot: (0, d.jsx)(l.Icon, {
                                    svg: _,
                                    size: "medium",
                                    color: "neutral_alt"
                                }),
                                value: o || "",
                                onChange: r,
                                size: "large",
                                inputAttributes: { ...k,
                                    "aria-label": S || f,
                                    ref: A,
                                    onInput: e => null === s || void 0 === s ? void 0 : s({
                                        value: e.target.value
                                    })
                                },
                                mixin: {
                                    marginBlockStart: 2
                                },
                                endSlot: b ? (0, d.jsx)(l.Spinner, {
                                    size: "small"
                                }) : o && (0, d.jsx)(l.Button.Aligner, {
                                    alignment: ["top", "bottom", "end"],
                                    children: (0, d.jsx)(l.Button, {
                                        size: "large",
                                        variant: "tertiary",
                                        onClick: () => null === r || void 0 === r ? void 0 : r({
                                            value: ""
                                        }),
                                        children: p
                                    })
                                })
                            }), !(null !== m && void 0 !== m && m.length) && !b && g, !(null === m || void 0 === m || !m.length) && (0, d.jsx)("div", {
                                className: qe,
                                children: null === m || void 0 === m ? void 0 : m.map(((e, t) => {
                                    var i;
                                    return (0, n.createElement)(Qe, { ...e,
                                        key: e.title || (null === (i = e.items) || void 0 === i || null === (i = i[0]) || void 0 === i ? void 0 : i.title) || t,
                                        mobile: !0,
                                        index: t,
                                        last: t + 1 === m.length,
                                        onItemClick: e => {
                                            null === r || void 0 === r || r({
                                                value: e
                                            }), F()
                                        }
                                    })
                                }))
                            })]
                        })
                    })]
                })
            }
            var et = a().forwardRef(Je),
                tt = "SearchBoxFieldSelect_field";
            var it = function(e) {
                    const {
                        options: t,
                        name: i,
                        value: n,
                        skeletonSlot: a,
                        onChange: r,
                        ...l
                    } = e, s = null === t || void 0 === t ? void 0 : t.find((e => e.value === n));
                    return (0, d.jsx)(Ue, { ...l,
                        value: a || (null === s || void 0 === s ? void 0 : s.text),
                        children: (0, d.jsx)("select", {
                            name: i,
                            onChange: e => {
                                null === r || void 0 === r || r({
                                    event: e,
                                    name: i,
                                    value: e.target.value
                                })
                            },
                            className: tt,
                            value: n,
                            children: null === t || void 0 === t ? void 0 : t.map((e => (0, d.jsx)("option", {
                                value: e.value,
                                disabled: e.disabled,
                                children: e.text
                            }, e.value)))
                        })
                    })
                },
                nt = "SearchBoxFramePrivate_root",
                at = "SearchBoxFramePrivate_fields",
                rt = "SearchBoxFramePrivate_submit";
            var lt = function(e) {
                const {
                    children: t,
                    vertical: i,
                    submitLabel: n,
                    submitAttributes: a
                } = e, r = {
                    s: "column",
                    l: i ? "column" : "row"
                };
                return (0, d.jsxs)(l.Stack, {
                    className: nt,
                    direction: r,
                    children: [(0, d.jsx)(l.Stack, {
                        grow: !0,
                        direction: r,
                        gap: 1,
                        wrap: "nowrap",
                        className: at,
                        children: t
                    }), n && (0, d.jsx)("div", {
                        className: rt,
                        children: (0, d.jsx)(l.Button, {
                            wide: !0,
                            size: "large",
                            type: "submit",
                            attributes: a,
                            children: n
                        })
                    })]
                })
            };
            var st = function(e) {
                    const {
                        submitLabel: t,
                        vertical: i,
                        children: n,
                        submitAttributes: a
                    } = e;
                    return (0, d.jsx)(lt, {
                        vertical: i,
                        submitLabel: t,
                        submitAttributes: a,
                        children: n
                    })
                },
                ot = {
                    root: "SearchBoxFrameGroup_root",
                    "root--width-auto": "SearchBoxFrameGroup_root--width-auto"
                };
            var dt = function(e) {
                const {
                    children: t
                } = e;
                let i = 0;
                a().Children.forEach(t, (e => {
                    a().isValidElement(e) && e.props && "auto" !== e.props.width && (i += 1)
                }));
                const n = G(ot.root, 0 === i && ot["root--width-auto"]);
                return (0, d.jsx)("div", {
                    className: n,
                    style: {
                        "--web_shell_sb_group_width": i
                    },
                    children: t
                })
            };

            function ct(e) {
                const {
                    children: t,
                    formAttributes: i,
                    mobilePreview: n
                } = e, [r, s] = a().useState(!1), o = () => s(!0), c = () => s(!1);
                return a().useImperativeHandle(null === n || void 0 === n ? void 0 : n.ref, (() => ({
                    open: o,
                    close: c,
                    active: r
                })), [r]), n ? (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(l.Hidden, {
                        hide: {
                            s: !0,
                            l: !1
                        },
                        children: (0, d.jsx)(l.Stack, {
                            gap: 4,
                            tagName: "form",
                            attributes: i,
                            children: t
                        })
                    }), (0, d.jsxs)(l.Hidden, {
                        hide: {
                            s: !1,
                            l: !0
                        },
                        children: [(0, d.jsx)(lt, {
                            children: (0, d.jsx)(Ue, {
                                triggerAttributes: n.triggerAttributes,
                                ariaLabel: n.ariaLabel,
                                value: n.value,
                                subValue: n.subValue,
                                icon: n.icon,
                                onClick: o,
                                preview: !0
                            })
                        }), (0, d.jsx)(l.SheetContainer, {
                            title: n.sheetTitle,
                            active: r,
                            closeAriaLabel: n.closeAriaLabel,
                            closeAttributes: n.closeAttributes,
                            overlayAttributes: n.overlayAttributes,
                            onCloseTrigger: c,
                            children: (0, d.jsx)(l.Stack, {
                                gap: 4,
                                tagName: "form",
                                attributes: i,
                                children: t
                            })
                        })]
                    })]
                }) : (0, d.jsx)(l.Stack, {
                    gap: 4,
                    tagName: "form",
                    attributes: i,
                    children: t
                })
            }
            ct.Frame = st, ct.Field = ze, ct.Group = dt, ct.FieldAutocomplete = et, ct.FieldSelect = it;

            function ut(e, t) {
                if (e) {
                    if ("object" === typeof e) {
                        return e[t ? "mobile" : "general"]
                    }
                    return e
                }
            }
            var mt = {
                    "root--variant-full": "TravellerFooter_root--variant-full",
                    "footer-lists": "TravellerFooter_footer-lists",
                    "footer-lists--list": "TravellerFooter_footer-lists--list",
                    "root--variant-minimal": "TravellerFooter_root--variant-minimal",
                    "full-footer-pickers": "TravellerFooter_full-footer-pickers",
                    "minimal-footer-copyrights-container": "TravellerFooter_minimal-footer-copyrights-container",
                    "minimal-footer-copyrights-divider": "TravellerFooter_minimal-footer-copyrights-divider",
                    "inline-links-list--light": "TravellerFooter_inline-links-list--light",
                    "inline-links-list--dark": "TravellerFooter_inline-links-list--dark",
                    "inline-links-list-item": "TravellerFooter_inline-links-list-item",
                    "footer-control-section": "TravellerFooter_footer-control-section",
                    "inline-links-list--content": "TravellerFooter_inline-links-list--content"
                },
                gt = "https://ac-a.static.booking.cn/mobile/images/china/icon-public_security_bureau-1x/f1add48a7551f73b89f10f1ec3f0175c31574a53.png",
                vt = "https://ac-a.static.booking.cn/static/img/china/icon-public_security_bureau-1x/96f5238b2ba113d1403f64330bebf46e35b04736.png";

            function ht(e) {
                let {
                    textProps: t
                } = e;
                const {
                    isSmall: i
                } = (0, l.useViewport)();
                return (0, d.jsxs)(l.Stack, {
                    direction: i ? "column" : "row",
                    alignItems: "center",
                    gap: {
                        s: 0,
                        m: 2
                    },
                    children: [(0, d.jsx)(l.Link, {
                        text: (0, d.jsx)(l.Text, { ...t,
                            children: "\u6caaICP\u590717053146\u53f7-1"
                        }),
                        href: "https://beian.miit.gov.cn",
                        attributes: {
                            target: "_blank"
                        }
                    }), (0, d.jsx)(l.Text, { ...t,
                        children: "\u6caa\u901a\u4fe1\u7ba1\u81ea\u8d38[2023]26\u53f7"
                    }), (0, d.jsxs)(l.Stack, {
                        direction: "row",
                        alignItems: "center",
                        gap: 1,
                        children: [(0, d.jsx)(l.Image, {
                            src: i ? gt : vt,
                            height: 3,
                            alt: "Police icon"
                        }), (0, d.jsx)(l.Link, {
                            text: (0, d.jsx)(l.Text, { ...t,
                                children: "\u6caa\u516c\u7f51\u5b89\u5907 31010602003631\u53f7"
                            }),
                            href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010602003631",
                            attributes: {
                                target: "_blank"
                            }
                        })]
                    }), (0, d.jsx)(l.Text, { ...t,
                        children: "\u5168\u56fd\u65c5\u6e38\u6295\u8bc9\u6e20\u905312301"
                    })]
                })
            }
            var pt = function(e) {
                let {
                    items: t,
                    variant: i,
                    linkTextVariant: n,
                    attributes: a,
                    seoNavAriaLabel: r
                } = e;
                return (0, d.jsx)("div", {
                    className: mt[`inline-links-list--${i}`],
                    ...a,
                    children: (0, d.jsx)(l.Container, {
                        mixin: {
                            paddingBlockStart: 4,
                            paddingBlockEnd: 4
                        },
                        className: mt["inline-links-list--content"],
                        children: (0, d.jsx)("nav", {
                            "aria-label": r,
                            children: (0, d.jsx)(l.Stack, {
                                direction: "row",
                                gap: 3,
                                tagName: "ul",
                                children: t.map(((e, t) => (0, d.jsx)("li", {
                                    className: G(mt["inline-links-list-item"], e.className),
                                    children: (0, d.jsx)(l.Link, {
                                        href: e.href,
                                        text: (0, d.jsx)(l.Text, {
                                            variant: n,
                                            children: e.text
                                        }),
                                        variant: "secondary",
                                        attributes: e.attributes,
                                        onClick: e.onClick
                                    }, e.text)
                                }, e.href || e.text || t)))
                            })
                        })
                    })
                })
            };
            var kt = function(e) {
                let {
                    copyrightText: t,
                    legalText: i,
                    footerItems: n,
                    isDotCN: a,
                    ariaLabels: r
                } = e;
                const {
                    isSmall: s
                } = (0, l.useViewport)();
                return (0, d.jsxs)("footer", {
                    className: mt["root--variant-minimal"],
                    "data-testid": "minimal-footer",
                    children: [(0, d.jsx)(pt, {
                        items: n,
                        variant: "dark",
                        linkTextVariant: "body_2",
                        seoNavAriaLabel: ut(null === r || void 0 === r ? void 0 : r.seoNavLinks, s)
                    }), (0, d.jsxs)(l.Container, {
                        mixin: {
                            paddingBlockStart: 4,
                            paddingBlockEnd: 4
                        },
                        className: mt["minimal-footer-copyrights-container"],
                        children: [s && (0, d.jsx)(l.Divider, {
                            className: mt["minimal-footer-copyrights-divider"]
                        }), i && (0, d.jsx)(l.Text, {
                            align: s ? "center" : "start",
                            variant: "small_1",
                            children: i
                        }), (0, d.jsx)(l.Text, {
                            align: s ? "center" : "start",
                            variant: "small_1",
                            children: t
                        }), a ? (0, d.jsx)(ht, {
                            textProps: {
                                align: s ? "center" : "start",
                                variant: "small_1",
                                color: "neutral"
                            }
                        }) : null]
                    })]
                })
            };
            var bt = function(e) {
                let {
                    lists: t
                } = e;
                const {
                    isMedium: i
                } = (0, l.useViewport)();
                return (0, d.jsx)(l.Container, {
                    mixin: {
                        paddingBlockStart: 4,
                        paddingBlockEnd: 4
                    },
                    className: mt["footer-lists"],
                    attributes: {
                        "data-testid": "footer-lists"
                    },
                    children: (0, d.jsx)(l.Stack, {
                        direction: "row",
                        justifyContent: i ? "start" : "space-between",
                        gap: 6,
                        children: t.map((e => (0, d.jsxs)(l.Stack, {
                            gap: 3,
                            attributes: e.attributes,
                            className: mt["footer-lists--list"],
                            children: [(0, d.jsx)(l.Title, {
                                title: e.title,
                                titleTagName: "h3"
                            }), (0, d.jsx)(l.List, {
                                items: e.items.map((e => {
                                    let {
                                        href: t,
                                        text: i,
                                        className: n,
                                        attributes: a,
                                        onClick: r
                                    } = e;
                                    return {
                                        content: (0, d.jsx)(l.Link, {
                                            variant: "secondary",
                                            text: (0, d.jsx)(l.Text, {
                                                variant: "body_2",
                                                tagName: "span",
                                                children: i
                                            }),
                                            href: t,
                                            className: n,
                                            attributes: a,
                                            onClick: r
                                        }, t + i)
                                    }
                                }))
                            })]
                        }, e.title)))
                    })
                })
            };
            var Ct = function(e) {
                let {
                    lists: t
                } = e;
                return (0, d.jsx)(l.Container, {
                    attributes: {
                        "data-testid": "mobile-footer-lists"
                    },
                    mixin: {
                        paddingBlockStart: 3,
                        paddingBlockEnd: 4
                    },
                    children: (0, d.jsx)(l.Stack, {
                        gap: 3,
                        children: t.map((e => (0, d.jsxs)(a().Fragment, {
                            children: [(0, d.jsx)(l.Accordion, {
                                attributes: e.attributes,
                                titleContent: (0, d.jsx)(l.Text, {
                                    tagName: "h3",
                                    variant: "emphasized_2",
                                    children: e.title
                                }),
                                children: (0, d.jsx)(l.List, {
                                    items: e.items.map((e => ({
                                        content: (0, d.jsx)(l.Link, {
                                            variant: "secondary",
                                            ...e
                                        }, e.href)
                                    })))
                                })
                            }), (0, d.jsx)(l.Divider, {})]
                        }, e.title)))
                    })
                })
            };
            var _t = function(e) {
                let {
                    seoLinks: t,
                    footerLists: i,
                    legalText: n,
                    copyrightText: a,
                    isDotCN: r,
                    logos: s,
                    shouldDisplayCurrencyPicker: o = !0,
                    shouldDisplayLanguagePicker: c = !0,
                    currencySelection: u,
                    selectedCurrencyId: m,
                    languageSelection: g,
                    selectedLanguageId: v,
                    changeRegionTitle: h,
                    selectedRegionLabel: p,
                    regionsLink: k,
                    shouldDisplayChangeRegion: b = !0,
                    onOpenLanguagePicker: C,
                    onCloseLanguagePicker: _,
                    onOpenCurrencyPicker: x,
                    onCloseCurrencyPicker: f,
                    ariaLabels: S
                } = e;
                const {
                    isSmall: N
                } = (0, l.useViewport)();
                return (0, d.jsxs)("footer", {
                    className: mt["root--variant-full"],
                    "data-testid": "full-footer",
                    children: [Array.isArray(t) && t.length > 0 && (0, d.jsx)(pt, {
                        items: t,
                        variant: "light",
                        linkTextVariant: "small_1",
                        attributes: {
                            "data-testid": "seo-links"
                        },
                        seoNavAriaLabel: ut(null === S || void 0 === S ? void 0 : S.seoNavLinks, N)
                    }), N ? (0, d.jsx)(Ct, {
                        lists: i
                    }) : (0, d.jsx)(bt, {
                        lists: i
                    }), (0, d.jsx)(l.Container, {
                        className: mt["footer-control-section"],
                        mixin: {
                            paddingBlockEnd: 4
                        },
                        children: (0, d.jsxs)(l.Stack, {
                            gap: 4,
                            children: [(0, d.jsxs)(l.Stack, {
                                direction: "row",
                                gap: 3,
                                justifyContent: N ? "center" : "start",
                                alignItems: "center",
                                className: mt["full-footer-pickers"],
                                children: [c && (0, d.jsx)(Ce, {
                                    variant: N ? "mobile" : "desktop",
                                    languageSelection: g,
                                    selectedLanguageId: v,
                                    shouldDisplaySelectionTitle: !1,
                                    onOpen: C,
                                    onClose: _,
                                    attributes: {
                                        "data-testid": N ? "footer-language-picker-mobile" : "footer-language-picker-desktop"
                                    },
                                    triggerAttributes: {
                                        "data-testid": N ? "footer-language-picker-trigger-mobile" : "footer-language-picker-trigger-desktop",
                                        "aria-label": ut(null === S || void 0 === S ? void 0 : S.languageTrigger, N)
                                    }
                                }), o && (0, d.jsx)(X, {
                                    variant: N ? "mobile" : "desktop",
                                    currencySelection: u,
                                    selectedCurrencyId: m,
                                    shouldDisplaySelectionTitle: !1,
                                    onOpen: x,
                                    onClose: f,
                                    attributes: {
                                        "data-testid": N ? "footer-currency-picker-mobile" : "footer-currency-picker-desktop"
                                    },
                                    triggerAttributes: {
                                        "data-testid": N ? "footer-currency-picker-trigger-mobile" : "footer-currency-picker-trigger-desktop",
                                        "aria-label": ut(null === S || void 0 === S ? void 0 : S.currencyTrigger, N)
                                    }
                                }), b && (0, d.jsx)(l.Tooltip, {
                                    text: h,
                                    hideArrow: !0,
                                    position: "bottom",
                                    children: e => (0, d.jsx)(l.Link, {
                                        href: k,
                                        variant: "secondary",
                                        attributes: e,
                                        children: (0, d.jsx)(l.Text, {
                                            variant: "emphasized_2",
                                            children: p || h
                                        })
                                    })
                                })]
                            }), (0, d.jsx)(l.Divider, {}), (0, d.jsxs)(l.Stack, {
                                gap: 0,
                                alignItems: "center",
                                children: [(0, d.jsx)(l.Text, {
                                    align: "center",
                                    variant: "small_1",
                                    color: "neutral_alt",
                                    children: n
                                }), (0, d.jsx)(l.Text, {
                                    align: "center",
                                    variant: "small_1",
                                    color: "neutral_alt",
                                    children: a
                                }), r ? (0, d.jsx)(ht, {
                                    textProps: {
                                        align: "center",
                                        variant: "small_1",
                                        color: "neutral_alt"
                                    }
                                }) : null]
                            }), !N && s ? (0, d.jsx)(l.Stack, {
                                direction: "row",
                                justifyContent: "center",
                                gap: 8,
                                children: s
                            }) : null]
                        })
                    })]
                })
            };
            var xt = function(e) {
                return (e => "minimal" === e.variant)(e) ? (0, d.jsx)(kt, { ...e
                }) : (0, d.jsx)(_t, { ...e
                })
            };
            var ft = function(e) {
                    const {
                        helpCenter: t,
                        triggerAriaLabel: i
                    } = e;
                    return (0, d.jsx)(l.Tooltip, {
                        text: t.title,
                        position: "bottom",
                        hideArrow: !0,
                        children: e => (0, d.jsx)(l.Button, {
                            variant: "tertiary-inherit",
                            size: "large",
                            href: t.href,
                            onClick: t.onClick,
                            attributes: { ...e,
                                "aria-label": i || t.title,
                                "data-testid": "header-help-center"
                            },
                            icon: x.Z,
                            preventDefault: t.preventDefault
                        })
                    })
                },
                St = "TravellerHeader_mobile-content",
                Nt = "TravellerHeader_menu-title",
                yt = "TravellerHeader_social-entrypoint--we-chat";
            var Tt = function(e) {
                const {
                    menu: t,
                    currencySelection: i,
                    languageSelection: r,
                    selectedLanguageId: s,
                    selectedFlagUrl: o,
                    selectedCurrencyId: c,
                    ariaLabels: u,
                    hideCurrencyPicker: m = !1,
                    hideLanguagePicker: g = !1
                } = e, [v, h] = a().useState(!1), [p, k] = a().useState(!1), b = () => {
                    h(!1), E("mobile_menu_close")
                }, C = () => k(!0), _ = () => k(!1), x = (0, n.useMemo)((() => ({
                    attributes: {
                        "data-testid": "header-mobile-menu-modal",
                        role: "dialog",
                        "aria-modal": !0
                    },
                    closeAttributes: {
                        "data-testid": "header-mobile-menu-modal-close"
                    }
                })), []), S = (0, n.useMemo)((() => ({
                    attributes: {
                        "data-testid": "header-mobile-menu-currency-picker-modal"
                    },
                    triggerAttributes: {
                        "data-testid": "header-mobile-menu-currency-picker-menu-item",
                        "aria-label": ut(null === u || void 0 === u ? void 0 : u.currencyTrigger, !0)
                    }
                })), [u]), N = (0, n.useMemo)((() => ({
                    attributes: {
                        "data-testid": "header-mobile-menu-language-picker-modal"
                    },
                    triggerAttributes: {
                        "data-testid": "header-mobile-menu-language-picker-menu-item",
                        "aria-label": ut(null === u || void 0 === u ? void 0 : u.languageTrigger, !0)
                    }
                })), [u]), y = (e, t) => (0, d.jsx)("li", {
                    children: (0, d.jsx)(l.ListItem, {
                        roundedCorners: !0,
                        startSlot: e.icon && (0, d.jsx)(l.Icon, {
                            display: "block",
                            svg: e.icon,
                            size: "large"
                        }),
                        spacing: "large",
                        onClick: () => {
                            e.onChoose && e.onChoose(e, t), b()
                        },
                        preventDefault: void 0 === e.preventDefault ? !!e.onChoose : e.preventDefault,
                        href: e.href,
                        attributes: e.attributes,
                        children: e.text
                    })
                }, "string" === typeof e.text ? e.text : t);
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(l.Button, {
                        variant: "tertiary-inherit",
                        size: "large",
                        icon: f,
                        onClick: () => {
                            h(!0), E("mobile_menu_open")
                        },
                        attributes: {
                            "aria-label": ut(null === u || void 0 === u ? void 0 : u.menuTrigger, !0) || t.title,
                            "data-testid": "header-mobile-menu-button"
                        }
                    }), (0, d.jsx)(l.SheetContainer, {
                        position: "fullScreen",
                        fill: !0,
                        arrowNavigation: !0,
                        closeAriaLabel: ut(null === u || void 0 === u ? void 0 : u.menuClose, !0) || t.closeAriaLabel,
                        active: v,
                        onCloseTrigger: b,
                        lockClose: p,
                        ...x,
                        children: (0, d.jsxs)("div", {
                            className: St,
                            children: [(0, d.jsx)(l.Box, {
                                padding: 6,
                                children: (0, d.jsx)(l.Text, {
                                    variant: "headline_2",
                                    tagName: "h2",
                                    children: t.title
                                })
                            }), (0, d.jsxs)(l.Stack, {
                                gap: 0,
                                children: [!m && i && c && (0, d.jsx)(X, {
                                    variant: "mobile",
                                    currencySelection: i,
                                    selectedCurrencyId: c,
                                    onOpen: C,
                                    onClose: _,
                                    ...S
                                }), !g && r && s && (0, d.jsx)(Ce, {
                                    variant: "mobile",
                                    languageSelection: r,
                                    selectedLanguageId: s,
                                    selectedFlagUrl: o,
                                    onOpen: C,
                                    onClose: _,
                                    ...N
                                }), t.sections && t.sections.map(((e, t) => (0, d.jsxs)(a().Fragment, {
                                    children: [e.title && (0, d.jsx)(l.Text, {
                                        variant: "strong_2",
                                        className: Nt,
                                        attributes: {
                                            role: "heading",
                                            "aria-level": 3
                                        },
                                        children: e.title
                                    }), (0, d.jsx)("ul", {
                                        children: e.items.map(y)
                                    })]
                                }, e.title || ("string" === typeof e.items[0].text ? e.items[0].text : t))))]
                            })]
                        })
                    })]
                })
            };
            var Lt = function(e) {
                let {
                    condition: t,
                    wrapper: i,
                    children: n
                } = e;
                return t ? i(n) : n
            };
            var It = function(e) {
                const {
                    href: t,
                    onClick: i,
                    preventDefault: n,
                    ariaLabel: a
                } = e;
                return (0, d.jsx)(l.Tooltip, {
                    text: a,
                    position: "bottom",
                    hideArrow: !0,
                    children: e => (0, d.jsx)(l.Button, {
                        variant: "tertiary-inherit",
                        size: "large",
                        href: t,
                        onClick: i,
                        attributes: { ...e,
                            "aria-label": a,
                            "data-testid": "header-search"
                        },
                        icon: _,
                        preventDefault: n
                    })
                })
            };

            function Et(e) {
                const t = () => {
                    E("social-entrypoint_clicked")
                };
                return (0, d.jsxs)(l.Popover, {
                    position: "bottom",
                    triggerType: "hover",
                    size: "auto",
                    hideClose: !0,
                    hideArrow: !0,
                    children: [(0, d.jsx)(l.Popover.Trigger, {
                        children: i => (0, d.jsx)(l.Button, {
                            attributes: { ...i,
                                "aria-label": e.entrypointAriaLabel,
                                "data-testid": "header-social-entrypoint",
                                "data-social-type": e.type
                            },
                            onClick: t,
                            variant: "tertiary-inherit",
                            size: "large",
                            icon: y
                        })
                    }), (0, d.jsx)(l.Popover.Content, {
                        children: (0, d.jsxs)(l.Stack, {
                            direction: "column",
                            alignItems: "center",
                            gap: 0,
                            className: yt,
                            children: [e.title, (0, d.jsx)("img", {
                                src: e.qrCodeUrl,
                                alt: e.qrCodeAlt
                            }), e.subtitle]
                        })
                    })]
                })
            }
            var At = function(e) {
                return "wechat" === e.type ? (0, d.jsx)(Et, { ...e
                }) : null
            };
            var jt = function(e) {
                const {
                    isLarge: t
                } = (0, l.useViewport)(), {
                    currencySelection: i,
                    helpCenter: a,
                    languageSelection: r,
                    mobileMenu: s,
                    mobileSignIn: o,
                    profile: c,
                    selectedCurrencyId: u,
                    selectedFlagUrl: m,
                    selectedLanguageId: g,
                    ariaLabels: v,
                    cta: h,
                    signIn: k,
                    signUp: b,
                    socialEntrypoint: C,
                    notification: _,
                    assistant: x,
                    hideCurrencyPicker: f = !1,
                    hideLanguagePicker: y = !1,
                    simplifiedHybridLogoPreamble: T,
                    simplifiedHybridBookingLogoType: L,
                    clickThroughUrl: I,
                    isSimplifiedHybrid: E,
                    search: A
                } = e, j = [];
                if (!f && i && u && t && j.push((0, d.jsx)(X, {
                        variant: "desktop",
                        attributes: {
                            id: "header_currency_picker"
                        },
                        triggerAttributes: {
                            "data-testid": "header-currency-picker-trigger",
                            "aria-label": ut(null === v || void 0 === v ? void 0 : v.currencyTrigger),
                            "aria-haspopup": "dialog"
                        },
                        currencySelection: i,
                        selectedCurrencyId: u
                    }, "currencySelection")), !y && r && g && t && j.push((0, d.jsx)(Ce, {
                        variant: "desktop",
                        attributes: {
                            id: "header_language_picker"
                        },
                        languageSelection: r,
                        selectedLanguageId: g,
                        selectedFlagUrl: m,
                        triggerAttributes: {
                            "data-testid": "header-language-picker-trigger",
                            "aria-label": ut(null === v || void 0 === v ? void 0 : v.languageTrigger),
                            "aria-haspopup": "dialog"
                        }
                    }, "languageSelection")), A && !t && j.push((0, d.jsx)(It, { ...A,
                        ariaLabel: ut(A.ariaLabel || (null === v || void 0 === v ? void 0 : v.search))
                    }, "search")), C && t && j.push((0, n.createElement)(At, { ...C,
                        key: "socialEntrypoint"
                    })), a && t && j.push((0, d.jsx)(ft, {
                        helpCenter: a,
                        triggerAriaLabel: ut(null === v || void 0 === v ? void 0 : v.customerSupport)
                    }, "helpCenter")), x && j.push((0, d.jsx)(w, { ...x
                    }, "assistant")), c && _ && t && j.push((0, d.jsx)(Ne, { ..._
                    }, "notification")), t && h && j.push((0, n.createElement)(l.Button, {
                        variant: "tertiary-inherit",
                        size: "large",
                        ...h,
                        key: "cta",
                        attributes: {
                            "data-testid": "header-custom-action-button",
                            "aria-label": ut(null === v || void 0 === v ? void 0 : v.cta)
                        }
                    })), c && _ && !t && j.push((0, d.jsx)(Ne, {
                        variant: "mobile",
                        ..._
                    }, "notification")), c) {
                    const e = (0, d.jsx)(Oe, {
                        profile: c,
                        mobile: !t,
                        triggerAriaLabel: ut(null === v || void 0 === v ? void 0 : v.profileTrigger, !t),
                        closeAriaLabel: ut(null === v || void 0 === v ? void 0 : v.profileClose, !t)
                    }, "profile");
                    j.push(e)
                }
                if (t && b && !c && j.push((0, n.createElement)(l.Button, {
                        variant: "secondary",
                        ...b,
                        key: "signUp",
                        attributes: {
                            "data-testid": "header-sign-up-button",
                            "aria-label": ut(null === v || void 0 === v ? void 0 : v.signUp, !t)
                        }
                    })), t && k && !c && j.push((0, n.createElement)(l.Button, {
                        variant: "secondary",
                        ...k,
                        key: "signIn",
                        attributes: {
                            "data-testid": "header-sign-in-button",
                            "aria-label": ut(null === v || void 0 === v ? void 0 : v.signIn, !t)
                        }
                    })), !t && o && !c) {
                    const {
                        text: e,
                        showIndicator: i,
                        showSignInIconOnMobileSignInButtonExperimental: n,
                        alwaysShowTooltipOnMobileSignInButtonExperimental: a,
                        ...r
                    } = o, s = n ? S : N, c = n ? "header-sign-in-button-sign-in-icon" : "header-sign-in-button-account-user-icon", u = a, m = (0, d.jsx)(l.Tooltip, {
                        text: e,
                        position: "bottom",
                        hideArrow: !0,
                        defaultActive: u,
                        attributes: {
                            "data-testid": "header-sign-in-button-tooltip"
                        },
                        children: e => (0, d.jsx)(l.Button, {
                            variant: "tertiary-inherit",
                            size: "large",
                            ...r,
                            attributes: { ...o.attributes,
                                ...e,
                                "aria-label": ut(null === v || void 0 === v ? void 0 : v.signIn, !t) || o.text,
                                "data-testid": "header-small-sign-in-button"
                            },
                            children: (0, d.jsx)(d.Fragment, {
                                children: i ? (0, d.jsx)(l.BubbleContainer, {
                                    attributes: {
                                        "data-testid": "header-sign-in-button-red-dot"
                                    },
                                    value: !0,
                                    children: (0, d.jsx)(l.Icon, {
                                        size: "large",
                                        svg: s,
                                        attributes: {
                                            "data-testid": c
                                        }
                                    })
                                }) : (0, d.jsx)(l.Icon, {
                                    size: "large",
                                    svg: s,
                                    attributes: {
                                        "data-testid": c
                                    }
                                })
                            })
                        })
                    }, "mobileSignIn");
                    j.push(m)
                }
                if (!t && s) {
                    const e = (0, d.jsx)(Tt, {
                        menu: s,
                        currencySelection: i,
                        selectedCurrencyId: u,
                        languageSelection: r,
                        selectedLanguageId: g,
                        selectedFlagUrl: m,
                        ariaLabels: v,
                        hideCurrencyPicker: f,
                        hideLanguagePicker: y
                    }, "mobileMenu");
                    j.push(e)
                }
                const F = e.tabs && {
                        tabs: e.tabs,
                        tabsMoreLabel: e.tabsMoreLabel,
                        defaultActiveTabId: e.defaultActiveTabId,
                        activeTabId: e.activeTabId,
                        onTabChange: e.onTabChange,
                        onTabView: e.onTabView
                    },
                    O = E && e.logo ? {
                        logo: e.logo,
                        logoUrl: I
                    } : {
                        logo: e.logo,
                        logoUrl: e.logoUrl
                    };
                return (0, d.jsx)(he, {
                    logo: (0, d.jsx)(Lt, {
                        condition: O.logoUrl,
                        wrapper: e => (0, d.jsx)("a", {
                            href: O.logoUrl,
                            "aria-label": ut(null === v || void 0 === v ? void 0 : v.logoUrl),
                            "data-testid": "header-logo-url",
                            children: e
                        }),
                        children: (0, d.jsx)("span", {
                            "data-testid": "header-logo",
                            children: O.logo || (0, d.jsx)(p.Z, {})
                        })
                    }),
                    variant: e.variant,
                    brandedText: E ? T : void 0,
                    brandedLogoType: E ? L : void 0,
                    actions: j,
                    tabsIntroLabel: ut(null === v || void 0 === v ? void 0 : v.tabBar, !t),
                    ...F
                })
            }
        },
        "5245e060": (e, t, i) => {
            var n, a;
            i.d(t, {
                    N: () => n,
                    p: () => a
                }),
                function(e) {
                    e.UNKNOWN = "UNKNOWN", e.WWW = "WWW", e.MDOT = "MDOT", e.TDOT = "TDOT", e.ANDROID = "ANDROID", e.IOS = "IOS", e.XML = "XML", e.MG_FAMILY = "MG_FAMILY", e.AFFILIATE_BASE = "AFFILIATE_BASE", e.EMK_FAMILY = "EMK_FAMILY", e.JOINAPP = "JOINAPP", e.PULSE = "PULSE", e.EXTRANET = "EXTRANET", e.CHAT2BOOK = "CHAT2BOOK"
                }(n || (n = {})),
                function(e) {
                    e[e.UNKNOWN = 0] = "UNKNOWN", e[e.WWW = 1] = "WWW", e[e.MDOT = 2] = "MDOT", e[e.TDOT = 3] = "TDOT", e[e.ANDROID = 4] = "ANDROID", e[e.IOS = 5] = "IOS", e[e.XML = 13] = "XML", e[e.MG_FAMILY = 15] = "MG_FAMILY", e[e.AFFILIATE_BASE = 22] = "AFFILIATE_BASE", e[e.EMK_FAMILY = 23] = "EMK_FAMILY", e[e.JOINAPP = 24] = "JOINAPP", e[e.PULSE = 27] = "PULSE", e[e.EXTRANET = 31] = "EXTRANET", e[e.CHAT2BOOK = 87] = "CHAT2BOOK"
                }(a || (a = {}))
        },
        "797081ff": (e, t, i) => {
            i.d(t, {
                Z: () => a
            });
            var n = i("ead71eb0");
            const a = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 180 30"
                }, n.createElement("path", {
                    fill: "#fff",
                    d: "M70.6 2.73999C70.602 2.19808 70.7646 1.66892 71.0673 1.21943C71.3701 0.769947 71.7993 0.420321 72.3007 0.214768C72.8021 0.00921437 73.3532 -0.0430342 73.8843 0.064629C74.4155 0.172292 74.9027 0.435032 75.2845 0.819622C75.6663 1.20421 75.9255 1.69338 76.0293 2.22527C76.133 2.75716 76.0768 3.30788 75.8676 3.80779C75.6584 4.3077 75.3056 4.73434 74.8539 5.03377C74.4022 5.3332 73.8719 5.49197 73.33 5.48999C72.9702 5.48868 72.6141 5.41651 72.2822 5.2776C71.9503 5.13869 71.649 4.93576 71.3955 4.6804C71.1419 4.42504 70.9412 4.12225 70.8047 3.78931C70.6683 3.45637 70.5987 3.09982 70.6 2.73999V2.73999ZM116.5 23.77C117.044 23.772 117.577 23.6124 118.031 23.3114C118.484 23.0104 118.838 22.5816 119.048 22.0793C119.257 21.577 119.313 21.0238 119.208 20.4897C119.103 19.9555 118.842 19.4646 118.458 19.079C118.074 18.6934 117.584 18.4305 117.05 18.3236C116.516 18.2167 115.963 18.2705 115.46 18.4784C114.957 18.6862 114.527 19.0387 114.224 19.4911C113.922 19.9436 113.76 20.4757 113.76 21.02C113.76 21.7476 114.048 22.4456 114.562 22.961C115.075 23.4764 115.772 23.7673 116.5 23.77V23.77ZM25.7 6.72999C24.0129 6.74775 22.3688 7.26426 20.9746 8.21447C19.5805 9.16469 18.4986 10.5061 17.8653 12.0699C17.2319 13.6337 17.0754 15.3499 17.4154 17.0025C17.7554 18.6551 18.5767 20.1701 19.776 21.3569C20.9752 22.5436 22.4988 23.349 24.1548 23.6717C25.8108 23.9944 27.5253 23.8199 29.0824 23.1702C30.6395 22.5205 31.9695 21.4247 32.9051 20.0206C33.8406 18.6166 34.3399 16.9672 34.34 15.28C34.3768 14.1396 34.1778 13.0038 33.7555 11.9438C33.3331 10.8839 32.6965 9.92248 31.8855 9.11989C31.0744 8.3173 30.1064 7.69078 29.0421 7.27955C27.9778 6.86831 26.84 6.68122 25.7 6.72999V6.72999ZM25.7 19.83C23.35 19.83 21.7 17.96 21.7 15.28C21.7 12.6 23.34 10.73 25.7 10.73C28.06 10.73 29.7 12.6 29.7 15.28C29.7 17.96 28.11 19.83 25.7 19.83ZM65.3 15.71C65.1321 15.3716 64.9128 15.0613 64.65 14.79L64.5 14.63L64.66 14.48C64.9116 14.2078 65.1423 13.917 65.35 13.61L69.74 7.05999H64.41L61.1 12.19C60.9586 12.3442 60.782 12.4621 60.5852 12.5334C60.3885 12.6048 60.1774 12.6277 59.97 12.6H59.22V2.90999C59.22 0.979993 58.01 0.709993 56.71 0.709993H54.48V23.58H59.21V16.72H59.65C60.19 16.72 60.56 16.78 60.73 17.08L63.35 21.97C63.5773 22.5089 63.9785 22.9563 64.4895 23.2408C65.0006 23.5253 65.5922 23.6306 66.17 23.54H69.8L67.09 19.07L65.3 15.71ZM88.27 6.68999C87.3747 6.67014 86.4851 6.83782 85.6584 7.18226C84.8318 7.5267 84.0863 8.04028 83.47 8.68999L83.18 8.97999L83.08 8.57999C82.9261 8.08803 82.6021 7.66692 82.166 7.39207C81.7299 7.11723 81.2102 7.0066 80.7 7.07999H78.57V23.57H83.29V15.97C83.275 15.2919 83.373 14.6159 83.58 13.97C83.7979 13.1302 84.2923 12.3883 84.9836 11.8639C85.6748 11.3396 86.5225 11.0634 87.39 11.08C88.85 11.08 89.39 11.85 89.39 13.86V21.05C89.335 21.3921 89.3619 21.7424 89.4686 22.072C89.5753 22.4017 89.7586 22.7013 90.0036 22.9463C90.2487 23.1914 90.5483 23.3747 90.878 23.4814C91.2076 23.5881 91.5579 23.615 91.9 23.56H94.12V13.07C94.15 8.89999 92.12 6.68999 88.27 6.68999V6.68999ZM73.39 7.05999H71.17V23.58H75.87V9.57999C75.9234 9.24041 75.8964 8.89304 75.7913 8.56576C75.6862 8.23848 75.5058 7.94038 75.2647 7.69537C75.0236 7.45037 74.7284 7.26527 74.4028 7.15493C74.0773 7.04459 73.7304 7.01208 73.39 7.05999V7.05999ZM44.16 6.72999C42.4729 6.74775 40.8288 7.26426 39.4346 8.21447C38.0405 9.16469 36.9586 10.5061 36.3253 12.0699C35.6919 13.6337 35.5354 15.3499 35.8754 17.0025C36.2154 18.6551 37.0367 20.1701 38.236 21.3569C39.4352 22.5436 40.9588 23.349 42.6148 23.6717C44.2708 23.9944 45.9853 23.8199 47.5424 23.1702C49.0995 22.5205 50.4295 21.4247 51.3651 20.0206C52.3006 18.6166 52.7999 16.9672 52.8 15.28C52.8368 14.1396 52.6378 13.0038 52.2155 11.9438C51.7931 10.8839 51.1565 9.92248 50.3455 9.11989C49.5344 8.3173 48.5664 7.69078 47.5021 7.27955C46.4378 6.86831 45.3 6.68122 44.16 6.72999V6.72999ZM44.16 19.83C41.81 19.83 40.16 17.96 40.16 15.28C40.16 12.6 41.8 10.73 44.16 10.73C46.52 10.73 48.16 12.6 48.16 15.28C48.16 17.96 46.57 19.83 44.16 19.83ZM144.89 6.72999C143.203 6.74775 141.559 7.26426 140.165 8.21447C138.77 9.16469 137.689 10.5061 137.055 12.0699C136.422 13.6337 136.265 15.3499 136.605 17.0025C136.945 18.6551 137.767 20.1701 138.966 21.3569C140.165 22.5436 141.689 23.349 143.345 23.6717C145.001 23.9944 146.715 23.8199 148.272 23.1702C149.829 22.5205 151.16 21.4247 152.095 20.0206C153.031 18.6166 153.53 16.9672 153.53 15.28C153.567 14.1396 153.368 13.0038 152.945 11.9438C152.523 10.8839 151.887 9.92248 151.075 9.11989C150.264 8.3173 149.296 7.69078 148.232 7.27955C147.168 6.86831 146.03 6.68122 144.89 6.72999V6.72999ZM144.89 19.83C142.54 19.83 140.89 17.96 140.89 15.28C140.89 12.6 142.53 10.73 144.89 10.73C147.25 10.73 148.89 12.6 148.89 15.28C148.89 17.96 147.3 19.83 144.89 19.83ZM109.74 7.01999C109.356 6.98285 108.97 7.05749 108.627 7.23491C108.285 7.41233 108.001 7.68497 107.81 8.01999L107.69 8.26999L107.47 8.07999C106.253 7.08344 104.711 6.57072 103.14 6.63999C98.75 6.63999 95.78 9.94999 95.78 14.87C95.78 19.79 98.85 23.22 103.23 23.22C104.521 23.2791 105.795 22.9061 106.85 22.16L107.21 21.88V22.34C107.21 24.55 105.78 25.77 103.21 25.77C102.131 25.755 101.062 25.5555 100.05 25.18C99.8562 25.0813 99.6419 25.0295 99.4244 25.0287C99.2069 25.0279 98.9923 25.0782 98.7977 25.1754C98.6032 25.2727 98.4342 25.4143 98.3043 25.5887C98.1745 25.7632 98.0874 25.9657 98.05 26.18L97.14 28.46L97.47 28.63C99.2593 29.5195 101.232 29.9783 103.23 29.97C107.23 29.97 111.9 27.91 111.9 22.14V7.01999H109.74ZM104.06 19.11C101.5 19.11 100.58 16.86 100.58 14.76C100.58 13.83 100.81 10.76 103.81 10.76C105.3 10.76 107.3 11.18 107.3 14.86C107.3 18.38 105.54 19.11 104.06 19.11ZM13.09 11.85L12.4 11.47L13 10.97C13.6103 10.4334 14.0951 9.76919 14.42 9.02435C14.7449 8.27951 14.9019 7.47231 14.88 6.65999C14.88 3.05999 12.09 0.739993 7.79 0.739993H2.31C1.69606 0.762953 1.11431 1.02048 0.684566 1.45953C0.254821 1.89857 0.00981021 2.48571 0 3.09999L0 23.5H7.88C12.67 23.5 15.77 20.89 15.77 16.84C15.8104 15.8446 15.583 14.8566 15.1116 13.9789C14.6403 13.1012 13.9421 12.3661 13.09 11.85V11.85ZM4.37 6.07999C4.37 5.01999 4.82 4.51999 5.8 4.45999H7.8C8.16093 4.42761 8.52456 4.47504 8.8651 4.59892C9.20565 4.7228 9.51476 4.9201 9.77052 5.17681C10.0263 5.43353 10.2224 5.74338 10.345 6.08438C10.4676 6.42538 10.5137 6.78919 10.48 7.14999C10.5194 7.51629 10.4791 7.88679 10.3616 8.23598C10.2442 8.58517 10.0524 8.90477 9.79964 9.17277C9.54684 9.44077 9.23898 9.65082 8.89723 9.78844C8.55549 9.92606 8.18798 9.988 7.82 9.96999H4.37V6.07999ZM8.2 19.64H4.37V15.06C4.37 14.06 4.76 13.57 5.59 13.45H8.2C8.99043 13.4949 9.7337 13.8406 10.2774 14.4161C10.8211 14.9916 11.124 15.7533 11.124 16.545C11.124 17.3367 10.8211 18.0984 10.2774 18.6739C9.7337 19.2494 8.99043 19.595 8.2 19.64ZM174.53 6.73999C173.558 6.74366 172.6 6.96575 171.726 7.38984C170.852 7.81393 170.084 8.42915 169.48 9.18999L169.14 9.62999L168.87 9.13999C168.437 8.355 167.787 7.71128 166.998 7.2857C166.209 6.86012 165.314 6.67067 164.42 6.73999C163.604 6.75328 162.798 6.93308 162.054 7.26838C161.309 7.60368 160.641 8.08742 160.09 8.68999L159.65 9.16999L159.48 8.53999C159.323 8.07152 159.008 7.67282 158.587 7.41334C158.167 7.15386 157.669 7.05005 157.18 7.11999H155.18V23.57H159.64V16.31C159.646 15.6629 159.727 15.0187 159.88 14.39C160.31 12.63 161.49 10.74 163.47 10.93C164.69 11.05 165.29 11.99 165.29 13.82V23.57H169.81V16.31C169.791 15.6345 169.875 14.9601 170.06 14.31C170.42 12.64 171.65 10.92 173.56 10.92C174.94 10.92 175.45 11.7 175.45 13.81V21.17C175.45 22.83 176.19 23.57 177.85 23.57H180V13.07C180 8.86999 178.15 6.73999 174.53 6.73999ZM133.69 17.86C132.51 19.095 130.913 19.8471 129.21 19.97C128.593 20.0073 127.974 19.914 127.395 19.6962C126.816 19.4784 126.29 19.141 125.85 18.706C125.41 18.271 125.067 17.7482 124.843 17.1716C124.619 16.5951 124.519 15.9778 124.55 15.36C124.498 14.7504 124.575 14.1365 124.776 13.5588C124.978 12.981 125.299 12.4524 125.719 12.0076C126.14 11.5629 126.649 11.212 127.215 10.978C127.78 10.744 128.388 10.6322 129 10.65C129.84 10.65 130.8 10.95 130.95 11.46V11.55C131.048 11.8986 131.258 12.2056 131.547 12.424C131.835 12.6425 132.188 12.7605 132.55 12.76H135V10.61C135 7.76999 131.39 6.73999 129 6.73999C123.81 6.73999 120 10.37 120 15.35C120 20.33 123.73 23.97 128.86 23.97C130.178 23.9562 131.479 23.6722 132.683 23.1355C133.887 22.5989 134.969 21.821 135.86 20.85L134 17.58L133.69 17.86Z"
                }))
            }
        },
        c41e1efa: (e, t, i) => {
            i.d(t, {
                Z: () => a
            });
            var n = i("ead71eb0");
            const a = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 180 30"
                }, n.createElement("path", {
                    fill: "#003B95",
                    d: "M70.6 2.73999C70.602 2.19808 70.7646 1.66892 71.0673 1.21943C71.3701 0.769947 71.7993 0.420321 72.3007 0.214768C72.8021 0.00921437 73.3532 -0.0430342 73.8843 0.064629C74.4155 0.172292 74.9027 0.435032 75.2845 0.819622C75.6663 1.20421 75.9255 1.69338 76.0293 2.22527C76.133 2.75716 76.0768 3.30788 75.8676 3.80779C75.6584 4.3077 75.3056 4.73434 74.8539 5.03377C74.4022 5.3332 73.8719 5.49197 73.33 5.48999C72.9702 5.48868 72.6141 5.41651 72.2822 5.2776C71.9503 5.13869 71.649 4.93576 71.3955 4.6804C71.1419 4.42504 70.9412 4.12225 70.8047 3.78931C70.6683 3.45637 70.5987 3.09982 70.6 2.73999V2.73999ZM116.5 23.74C117.044 23.742 117.577 23.5824 118.031 23.2814C118.484 22.9804 118.838 22.5516 119.048 22.0493C119.257 21.547 119.313 20.9938 119.208 20.4597C119.103 19.9255 118.842 19.4346 118.458 19.049C118.074 18.6634 117.584 18.4005 117.05 18.2936C116.516 18.1867 115.963 18.2405 115.46 18.4484C114.957 18.6562 114.527 19.0087 114.224 19.4611C113.922 19.9136 113.76 20.4457 113.76 20.99C113.756 21.3528 113.824 21.7128 113.96 22.0493C114.096 22.3857 114.297 22.692 114.551 22.9504C114.806 23.2088 115.109 23.4143 115.444 23.5549C115.778 23.6956 116.137 23.7687 116.5 23.77V23.74ZM34.34 15.25C34.3539 16.9569 33.8606 18.6295 32.9228 20.0558C31.985 21.4821 30.6448 22.5979 29.0721 23.2616C27.4995 23.9254 25.7651 24.1072 24.089 23.7842C22.4128 23.4612 20.8703 22.6477 19.657 21.4471C18.4437 20.2464 17.6142 18.7125 17.2736 17.0398C16.933 15.3671 17.0967 13.631 17.744 12.0515C18.3912 10.472 19.4929 9.12017 20.9093 8.16745C22.3257 7.21474 23.993 6.70401 25.7 6.69999C26.8418 6.65398 27.9809 6.84396 29.046 7.25808C30.1111 7.67219 31.0793 8.30152 31.8902 9.10676C32.701 9.91199 33.3371 10.8758 33.7586 11.938C34.1801 13.0002 34.3781 14.1379 34.34 15.28V15.25ZM29.73 15.25C29.73 12.57 28.07 10.7 25.73 10.7C23.39 10.7 21.73 12.57 21.73 15.25C21.73 17.93 23.37 19.8 25.73 19.8C28.09 19.8 29.73 17.97 29.73 15.28V15.25ZM65.3 15.68C65.1321 15.3416 64.9128 15.0313 64.65 14.76L64.5 14.6L64.66 14.45C64.9116 14.1778 65.1423 13.887 65.35 13.58L69.74 7.02999H64.41L61.1 12.16C60.9586 12.3142 60.782 12.4321 60.5852 12.5034C60.3885 12.5748 60.1774 12.5977 59.97 12.57H59.22V2.90999C59.22 0.979993 58.01 0.709993 56.71 0.709993H54.48V23.58H59.21V16.72H59.65C60.19 16.72 60.56 16.78 60.73 17.08L63.35 21.97C63.5773 22.5089 63.9785 22.9563 64.4895 23.2408C65.0006 23.5253 65.5922 23.6306 66.17 23.54H69.8L67.09 19.07L65.3 15.68ZM88.3 6.67999C87.4047 6.66014 86.5151 6.82782 85.6884 7.17226C84.8618 7.5167 84.1163 8.03028 83.5 8.67999L83.21 8.96999L83.11 8.56999C82.9561 8.07803 82.6321 7.65692 82.196 7.38207C81.7599 7.10723 81.2402 6.9966 80.73 7.06999H78.6V23.57H83.32V15.97C83.305 15.2919 83.403 14.6159 83.61 13.97C83.8279 13.1302 84.3223 12.3883 85.0136 11.8639C85.7048 11.3396 86.5525 11.0634 87.42 11.08C88.88 11.08 89.42 11.85 89.42 13.86V21.05C89.365 21.3921 89.3919 21.7424 89.4986 22.072C89.6053 22.4017 89.7886 22.7013 90.0336 22.9463C90.2787 23.1914 90.5783 23.3747 90.908 23.4814C91.2376 23.5881 91.5879 23.615 91.93 23.56H94.15V13.07C94.15 8.89999 92.12 6.68999 88.27 6.68999L88.3 6.67999ZM73.42 7.04999H71.2V23.58H75.9V9.57999C75.9545 9.23754 75.9274 8.88705 75.8207 8.55711C75.714 8.22717 75.5308 7.92712 75.2861 7.68143C75.0414 7.43574 74.7421 7.25138 74.4126 7.14339C74.083 7.03539 73.7327 7.00681 73.39 7.05999L73.42 7.04999ZM52.8 15.28C52.8158 16.9897 52.3235 18.6657 51.3853 20.0951C50.4472 21.5246 49.1055 22.6431 47.5307 23.3089C45.9558 23.9747 44.2186 24.1576 42.5396 23.8345C40.8606 23.5114 39.3154 22.6969 38.1001 21.4942C36.8847 20.2915 36.054 18.7549 35.7134 17.0794C35.3727 15.4038 35.5375 13.6649 36.1867 12.0831C36.8359 10.5013 37.9404 9.14808 39.36 8.19502C40.7795 7.24195 42.4502 6.73205 44.16 6.72999C45.2992 6.68421 46.4357 6.87336 47.4987 7.28565C48.5617 7.69795 49.5285 8.32457 50.3389 9.12655C51.1493 9.92853 51.786 10.8887 52.2094 11.9473C52.6328 13.0059 52.8338 14.1403 52.8 15.28V15.28ZM48.19 15.28C48.19 12.6 46.53 10.73 44.19 10.73C41.85 10.73 40.19 12.6 40.19 15.28C40.19 17.96 41.83 19.83 44.19 19.83C46.55 19.83 48.19 17.97 48.19 15.28V15.28ZM153.53 15.28C153.544 16.9869 153.051 18.6595 152.113 20.0858C151.175 21.5121 149.835 22.6279 148.262 23.2916C146.689 23.9554 144.955 24.1372 143.279 23.8142C141.603 23.4912 140.06 22.6777 138.847 21.4771C137.634 20.2764 136.804 18.7425 136.464 17.0698C136.123 15.3971 136.287 13.661 136.934 12.0815C137.581 10.502 138.683 9.15017 140.099 8.19745C141.516 7.24474 143.183 6.73401 144.89 6.72999C146.029 6.68421 147.166 6.87336 148.229 7.28565C149.292 7.69795 150.258 8.32457 151.069 9.12655C151.879 9.92853 152.516 10.8887 152.939 11.9473C153.363 13.0059 153.564 14.1403 153.53 15.28V15.28ZM148.92 15.28C148.92 12.6 147.26 10.73 144.92 10.73C142.58 10.73 140.92 12.6 140.92 15.28C140.92 17.96 142.56 19.83 144.92 19.83C147.28 19.83 148.92 17.97 148.92 15.28V15.28ZM111.92 7.01999V22.17C111.92 27.94 107.25 30 103.25 30C101.25 29.9851 99.2804 29.5022 97.5 28.59L97.17 28.42L98.08 26.14C98.1174 25.9257 98.2045 25.7232 98.3343 25.5487C98.4642 25.3743 98.6332 25.2327 98.8277 25.1354C99.0223 25.0382 99.2369 24.9879 99.4544 24.9887C99.6719 24.9895 99.8862 25.0413 100.08 25.14C101.092 25.5155 102.161 25.715 103.24 25.73C105.82 25.73 107.24 24.51 107.24 22.3V21.84L106.88 22.12C105.825 22.8661 104.551 23.2391 103.26 23.18C98.88 23.18 95.81 19.74 95.81 14.83C95.81 9.91999 98.81 6.59999 103.17 6.59999C104.741 6.53072 106.283 7.04344 107.5 8.03999L107.72 8.22999L107.84 7.97999C108.031 7.64497 108.315 7.37233 108.657 7.19491C109 7.01749 109.386 6.94285 109.77 6.97999L111.92 7.01999ZM107.32 14.91C107.32 11.23 105.32 10.81 103.83 10.81C100.83 10.81 100.6 13.81 100.6 14.81C100.6 16.91 101.52 19.16 104.08 19.16C105.54 19.11 107.3 18.38 107.3 14.91H107.32ZM15.77 16.84C15.77 20.84 12.67 23.5 7.88 23.5H0V3.09999C0.00471433 2.48223 0.247466 1.89007 0.677736 1.44677C1.10801 1.00346 1.69265 0.743142 2.31 0.719993H7.79C12.09 0.719993 14.88 3.03999 14.88 6.63999C14.9049 7.45565 14.7493 8.26672 14.4243 9.01525C14.0993 9.76377 13.6129 10.4313 13 10.97L12.4 11.49L13.09 11.87C13.9391 12.3844 14.6353 13.1164 15.1065 13.9902C15.5776 14.864 15.8067 15.8479 15.77 16.84V16.84ZM4.38 9.96999H7.82C8.18097 9.9814 8.54025 9.91599 8.87405 9.77811C9.20784 9.64023 9.50854 9.43302 9.75624 9.17019C10.0039 8.90737 10.193 8.59493 10.3109 8.25355C10.4287 7.91218 10.4728 7.54966 10.44 7.18999C10.4737 6.82919 10.4276 6.46538 10.305 6.12438C10.1824 5.78338 9.98629 5.47353 9.73052 5.21681C9.47476 4.9601 9.16565 4.7628 8.8251 4.63892C8.48456 4.51504 8.12093 4.46761 7.76 4.49999H5.76C4.76 4.55999 4.34 5.05999 4.34 6.11999L4.38 9.96999ZM11.27 16.57C11.3013 16.1584 11.2434 15.7449 11.1004 15.3577C10.9573 14.9705 10.7324 14.6187 10.441 14.3263C10.1495 14.034 9.79849 13.8079 9.41176 13.6636C9.02502 13.5192 8.6117 13.46 8.2 13.49H5.59C4.76 13.61 4.38 14.12 4.38 15.1V19.68H8.2C8.61895 19.7149 9.04044 19.6568 9.43426 19.5096C9.82808 19.3625 10.1845 19.1301 10.4779 18.829C10.7713 18.528 10.9945 18.1657 11.1314 17.7682C11.2684 17.3708 11.3157 16.9479 11.27 16.53V16.57ZM174.53 6.77999C173.558 6.78366 172.6 7.00575 171.726 7.42984C170.852 7.85393 170.084 8.46915 169.48 9.22999L169.14 9.66999L168.87 9.17999C168.437 8.395 167.787 7.75128 166.998 7.3257C166.209 6.90012 165.314 6.71067 164.42 6.77999C163.6 6.79964 162.792 6.98725 162.048 7.33125C161.303 7.67525 160.637 8.16832 160.09 8.77999L159.65 9.25999L159.48 8.62999C159.323 8.16152 159.008 7.76282 158.587 7.50334C158.167 7.24386 157.669 7.14005 157.18 7.20999H155.18V23.57H159.64V16.31C159.646 15.6629 159.727 15.0187 159.88 14.39C160.31 12.63 161.49 10.74 163.47 10.93C164.69 11.05 165.29 11.99 165.29 13.82V23.57H169.81V16.31C169.791 15.6345 169.875 14.9601 170.06 14.31C170.42 12.64 171.65 10.92 173.56 10.92C174.94 10.92 175.46 11.7 175.46 13.81V21.17C175.46 22.83 176.19 23.57 177.85 23.57H180V13.07C180 8.86999 178.15 6.73999 174.53 6.73999V6.77999ZM133.69 17.86C132.51 19.095 130.913 19.8471 129.21 19.97C128.593 20.0073 127.974 19.914 127.395 19.6962C126.816 19.4784 126.29 19.141 125.85 18.706C125.41 18.271 125.067 17.7482 124.843 17.1716C124.619 16.5951 124.519 15.9778 124.55 15.36C124.498 14.7504 124.575 14.1365 124.776 13.5588C124.978 12.981 125.299 12.4524 125.719 12.0076C126.14 11.5629 126.649 11.212 127.215 10.978C127.78 10.744 128.388 10.6322 129 10.65C129.84 10.65 130.8 10.95 130.95 11.46V11.55C131.048 11.8986 131.258 12.2056 131.547 12.424C131.835 12.6425 132.188 12.7605 132.55 12.76H135V10.61C135 7.76999 131.39 6.73999 129 6.73999C123.81 6.73999 120 10.37 120 15.35C120 20.33 123.73 23.97 128.86 23.97C130.178 23.9562 131.479 23.6722 132.683 23.1355C133.887 22.5989 134.969 21.821 135.86 20.85L134 17.58L133.69 17.86Z"
                }))
            }
        },
        e7547f91: (e, t, i) => {
            i.d(t, {
                Z: () => a
            });
            var n = i("ead71eb0");
            const a = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, n.createElement("path", {
                    d: "M19.268 8.913a.9.9 0 0 1-.266.642l-6.057 6.057A1.3 1.3 0 0 1 12 16c-.35.008-.69-.123-.945-.364L4.998 9.58a.91.91 0 0 1 0-1.284.897.897 0 0 1 1.284 0L12 13.99l5.718-5.718a.897.897 0 0 1 1.284 0 .88.88 0 0 1 .266.642"
                }))
            }
        },
        a6b472cf: (e, t, i) => {
            i.d(t, {
                Z: () => a
            });
            var n = i("ead71eb0");
            const a = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px",
                    "data-rtl-flip": "true"
                }, n.createElement("path", {
                    d: "M9.91 19.24c.24 0 .47-.09.64-.27l6.06-6.06c.25-.25.39-.59.39-.94s-.12-.69-.36-.94l-6.06-6.06a.909.909 0 0 0-1.3 1.27l.02.02 5.69 5.72-5.72 5.72c-.35.35-.36.91-.02 1.27l.02.02c.17.17.4.27.64.27"
                }))
            }
        },
        "2f7c7336": (e, t, i) => {
            i.d(t, {
                Z: () => a
            });
            var n = i("ead71eb0");
            const a = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, n.createElement("path", {
                    d: "M19.268 15.087a.9.9 0 0 0-.266-.642l-6.057-6.057A1.3 1.3 0 0 0 12 8c-.35-.008-.69.123-.945.364L4.998 14.42a.91.91 0 0 0 0 1.284.895.895 0 0 0 1.284 0L12 10.01l5.718 5.718a.897.897 0 0 0 1.284 0 .88.88 0 0 0 .266-.642"
                }))
            }
        },
        a8577192: (e, t, i) => {
            i.d(t, {
                Z: () => a
            });
            var n = i("ead71eb0");
            const a = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, n.createElement("path", {
                    d: "m13.31 12 6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z"
                }))
            }
        },
        "0c68dce6": (e, t, i) => {
            i.d(t, {
                Z: () => a
            });
            var n = i("ead71eb0");
            const a = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, n.createElement("path", {
                    d: "M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5M11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12m1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12"
                }))
            }
        },
        "607fc416": (e, t, i) => {
            i.d(t, {
                Z: () => a
            });
            var n = i("ead71eb0");
            const a = function() {
                return n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, n.createElement("path", {
                    d: "M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0M12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12m1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12"
                }))
            }
        },
        "9a67ad93": (e, t, i) => {
            i.d(t, {
                YD: () => g,
                df: () => m
            });
            var n = i("ead71eb0"),
                a = Object.defineProperty,
                r = (e, t, i) => (((e, t, i) => {
                    t in e ? a(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: i
                    }) : e[t] = i
                })(e, "symbol" !== typeof t ? t + "" : t, i), i),
                l = new Map,
                s = new WeakMap,
                o = 0,
                d = void 0;

            function c(e) {
                return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                    return `${t}_${"root"===t?(i=e.root,i?(s.has(i)||(o+=1,s.set(i,o.toString())),s.get(i)):"0"):e[t]}`;
                    var i
                })).toString()
            }

            function u(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d;
                if ("undefined" === typeof window.IntersectionObserver && void 0 !== n) {
                    const a = e.getBoundingClientRect();
                    return t(n, {
                        isIntersecting: n,
                        target: e,
                        intersectionRatio: "number" === typeof i.threshold ? i.threshold : 0,
                        time: 0,
                        boundingClientRect: a,
                        intersectionRect: a,
                        rootBounds: a
                    }), () => {}
                }
                const {
                    id: a,
                    observer: r,
                    elements: s
                } = function(e) {
                    const t = c(e);
                    let i = l.get(t);
                    if (!i) {
                        const n = new Map;
                        let a;
                        const r = new IntersectionObserver((t => {
                            t.forEach((t => {
                                var i;
                                const r = t.isIntersecting && a.some((e => t.intersectionRatio >= e));
                                e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = r), null == (i = n.get(t.target)) || i.forEach((e => {
                                    e(r, t)
                                }))
                            }))
                        }), e);
                        a = r.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), i = {
                            id: t,
                            observer: r,
                            elements: n
                        }, l.set(t, i)
                    }
                    return i
                }(i), o = s.get(e) || [];
                return s.has(e) || s.set(e, o), o.push(t), r.observe(e),
                    function() {
                        o.splice(o.indexOf(t), 1), 0 === o.length && (s.delete(e), r.unobserve(e)), 0 === s.size && (r.disconnect(), l.delete(a))
                    }
            }
            var m = class extends n.Component {
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
                        rootMargin: i,
                        trackVisibility: n,
                        delay: a,
                        fallbackInView: r
                    } = this.props;
                    this._unobserveCb = u(this.node, this.handleChange, {
                        threshold: e,
                        root: t,
                        rootMargin: i,
                        trackVisibility: n,
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
                            entry: i
                        } = this.state;
                        return e({
                            inView: t,
                            entry: i,
                            ref: this.handleNode
                        })
                    }
                    const {
                        as: t,
                        triggerOnce: i,
                        threshold: a,
                        root: r,
                        rootMargin: l,
                        onChange: s,
                        skip: o,
                        trackVisibility: d,
                        delay: c,
                        initialInView: u,
                        fallbackInView: m,
                        ...g
                    } = this.props;
                    return n.createElement(t || "div", {
                        ref: this.handleNode,
                        ...g
                    }, e)
                }
            };

            function g() {
                let {
                    threshold: e,
                    delay: t,
                    trackVisibility: i,
                    rootMargin: a,
                    root: r,
                    triggerOnce: l,
                    skip: s,
                    initialInView: o,
                    fallbackInView: d,
                    onChange: c
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                var m;
                const [g, v] = n.useState(null), h = n.useRef(), [p, k] = n.useState({
                    inView: !!o,
                    entry: void 0
                });
                h.current = c, n.useEffect((() => {
                    if (s || !g) return;
                    let n;
                    return n = u(g, ((e, t) => {
                        k({
                            inView: e,
                            entry: t
                        }), h.current && h.current(e, t), t.isIntersecting && l && n && (n(), n = void 0)
                    }), {
                        root: r,
                        rootMargin: a,
                        threshold: e,
                        trackVisibility: i,
                        delay: t
                    }, d), () => {
                        n && n()
                    }
                }), [Array.isArray(e) ? e.toString() : e, g, r, a, l, s, i, d, t]);
                const b = null == (m = p.entry) ? void 0 : m.target,
                    C = n.useRef();
                g || !b || l || s || C.current === b || (C.current = b, k({
                    inView: !!o,
                    entry: void 0
                }));
                const _ = [v, p.inView, p.entry];
                return _.ref = _[0], _.inView = _[1], _.entry = _[2], _
            }
        },
        "3d054e81": (e, t, i) => {
            function n() {
                return n = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i)({}).hasOwnProperty.call(i, n) && (e[n] = i[n])
                    }
                    return e
                }, n.apply(null, arguments)
            }
            i.d(t, {
                Z: () => n
            })
        }
    }
]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/b9a82cb8.06a04ae3.chunk.js.map