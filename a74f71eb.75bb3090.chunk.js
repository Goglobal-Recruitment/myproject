/*! For license information please see a74f71eb.75bb3090.chunk.js.LICENSE.txt */
(self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] = self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] || []).push([
    ["a74f71eb", "572dba2c", "1faad75c", "72fdb30a", "bf5d442e", "1d36ff76", "ce4afa91", "f975fe98", "463abe5f", "638ba920", "19eaf603", "ce2e0905"], {
        d0989236: (e, t, n) => {
            "use strict";
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
        f3c8bee5: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l
            });
            var i = n("3d054e81"),
                r = n("af1e2b38"),
                a = n("5245e060"),
                s = n("ead71eb0"),
                d = n.n(s);
            const o = e => {
                    if ("number" === typeof e) return e;
                    return e[(0, r.sv)() || a.N.MDOT]
                },
                l = e => {
                    let {
                        queenMabId: t,
                        ...n
                    } = e;
                    return d().createElement("div", (0, i.Z)({}, n, {
                        "data-qmab-component-id": o(t)
                    }))
                }
        },
        af1e2b38: (e, t, n) => {
            "use strict";
            n.d(t, {
                NM: () => i.N,
                sv: () => a,
                Z6: () => s
            });
            var i = n("5245e060"),
                r = n("dc6d28ff");
            const a = () => (0, r.getRequestContext)().getSiteType() ? ? i.N.WWW,
                s = () => {
                    const e = a();
                    return {
                        isWWW: e === i.N.WWW,
                        isMDOT: e === i.N.MDOT,
                        isTDOT: e === i.N.TDOT
                    }
                }
        },
        "017725b3": (e, t, n) => {
            "use strict";
            n.d(t, {
                HeM: () => s,
                ICm: () => v,
                SCr: () => E,
                TDH: () => N,
                XIF: () => m,
                cP1: () => o,
                cbr: () => _,
                ccX: () => R,
                fFi: () => l,
                i3w: () => c,
                leS: () => i,
                nN3: () => a,
                pNy: () => r,
                smO: () => u,
                z5K: () => d,
                zrT: () => S
            });
            let i = function(e) {
                    return e.APARTHOTEL = "APARTHOTEL", e.APARTMENT = "APARTMENT", e.BED_AND_BREAKFAST = "BED_AND_BREAKFAST", e.BOAT = "BOAT", e.CAMPING = "CAMPING", e.CAPSULE_HOTEL = "CAPSULE_HOTEL", e.CHALET = "CHALET", e.CONDO = "CONDO", e.COTTAGE = "COTTAGE", e.COUNTRY_HOUSE = "COUNTRY_HOUSE", e.CRUISE = "CRUISE", e.FARM_STAY = "FARM_STAY", e.GITE = "GITE", e.GUEST_ACCOMMODATION = "GUEST_ACCOMMODATION", e.GUEST_HOUSE = "GUEST_HOUSE", e.HOLIDAY_HOME = "HOLIDAY_HOME", e.HOLIDAY_PARK = "HOLIDAY_PARK", e.HOMESTAY = "HOMESTAY", e.HOSTEL = "HOSTEL", e.HOTEL = "HOTEL", e.INN = "INN", e.JAPANESE_STYLE_BUSINESS_HOTEL = "JAPANESE_STYLE_BUSINESS_HOTEL", e.LODGE = "LODGE", e.LOVE_HOTEL = "LOVE_HOTEL", e.MOTEL = "MOTEL", e.NO_ACCOMMODATION_TYPE = "NO_ACCOMMODATION_TYPE", e.RESIDENCE = "RESIDENCE", e.RESORT = "RESORT", e.RIAD = "RIAD", e.RYOKAN = "RYOKAN", e.SANATORIUM = "SANATORIUM", e.STUDENT_ACCOMMODATION = "STUDENT_ACCOMMODATION", e.TENTED_CAMP = "TENTED_CAMP", e.UNCERTAIN = "UNCERTAIN", e.VILLA = "VILLA", e
                }({}),
                r = function(e) {
                    return e.CABINCLASS_BUSINESS = "CABINCLASS_BUSINESS", e.CABINCLASS_CLASS_TYPE_UNKNOWN = "CABINCLASS_CLASS_TYPE_UNKNOWN", e.CABINCLASS_ECONOMY = "CABINCLASS_ECONOMY", e.CABINCLASS_FIRST = "CABINCLASS_FIRST", e.CABINCLASS_PREMIUM_BUSINESS = "CABINCLASS_PREMIUM_BUSINESS", e.CABINCLASS_PREMIUM_ECONOMY = "CABINCLASS_PREMIUM_ECONOMY", e.CABINCLASS_PREMIUM_FIRST = "CABINCLASS_PREMIUM_FIRST", e.ECONOMY = "ECONOMY", e
                }({}),
                a = function(e) {
                    return e.APP_LARGE = "APP_LARGE", e.APP_LARGER = "APP_LARGER", e.APP_MEDIUM = "APP_MEDIUM", e.DESKTOP_LARGE = "DESKTOP_LARGE", e.DESKTOP_MEDIUM = "DESKTOP_MEDIUM", e.DESKTOP_SMALL = "DESKTOP_SMALL", e.MDOT_LARGE = "MDOT_LARGE", e.MDOT_MEDIUM = "MDOT_MEDIUM", e.MDOT_SMALL = "MDOT_SMALL", e
                }({}),
                s = function(e) {
                    return e.INDEPENDENCE_DAY = "INDEPENDENCE_DAY", e
                }({}),
                d = function(e) {
                    return e.AIRPORT = "AIRPORT", e.BOUNDING_BOX = "BOUNDING_BOX", e.CHAIN = "CHAIN", e.CITY = "CITY", e.COUNTRY = "COUNTRY", e.DISTRICT = "DISTRICT", e.HOTEL = "HOTEL", e.IATA = "IATA", e.LANDMARK = "LANDMARK", e.LATLONG = "LATLONG", e.NO_DEST_TYPE = "NO_DEST_TYPE", e.REGION = "REGION", e.SUB_REGION = "SUB_REGION", e.UNRECOGNIZED = "UNRECOGNIZED", e
                }({}),
                o = function(e) {
                    return e.ELIGIBLE = "ELIGIBLE", e.EXPIRED = "EXPIRED", e.INELIGIBLE = "INELIGIBLE", e.REACH_UPPER_LIMIT = "REACH_UPPER_LIMIT", e
                }({}),
                l = function(e) {
                    return e.COMPONENT = "COMPONENT", e.COMPONENT_UNIT = "COMPONENT_UNIT", e.REGION = "REGION", e
                }({}),
                c = function(e) {
                    return e.LINK = "LINK", e.PRIMARY = "PRIMARY", e.SECONDARY = "SECONDARY", e.TERTIARY = "TERTIARY", e.WHITE = "WHITE", e
                }({}),
                u = function(e) {
                    return e.BRAND_PRIMARY = "BRAND_PRIMARY", e.CONSTRUCTIVE = "CONSTRUCTIVE", e.NEUTRAL = "NEUTRAL", e
                }({}),
                E = function(e) {
                    return e.CHARGE_INFO = "CHARGE_INFO", e.FREE_CANCELLATION = "FREE_CANCELLATION", e.NO_PREPAYMENT_REQUIRED = "NO_PREPAYMENT_REQUIRED", e.PAY_AT_PROPERTY = "PAY_AT_PROPERTY", e.PAY_WITH_WALLET = "PAY_WITH_WALLET", e.TAX_CHARGE_INCLUDED = "TAX_CHARGE_INCLUDED", e
                }({}),
                _ = function(e) {
                    return e.DOTS = "DOTS", e.STARS = "STARS", e.TILES = "TILES", e
                }({}),
                m = function(e) {
                    return e.EU5 = "EU5", e.GLOBAL = "GLOBAL", e.ROW = "ROW", e.US = "US", e
                }({}),
                S = function(e) {
                    return e.Expired = "Expired", e.Running = "Running", e
                }({}),
                v = function(e) {
                    return e.ATTRACTIONS = "ATTRACTIONS", e.CARS = "CARS", e.FLIGHTS = "FLIGHTS", e.STAYS = "STAYS", e
                }({}),
                R = function(e) {
                    return e.ATTRACTIONS_SR = "ATTRACTIONS_SR", e.BOOKING_DETAIL = "BOOKING_DETAIL", e.BOOKING_PROCESS_1 = "BOOKING_PROCESS_1", e.BOOKING_PROCESS_2 = "BOOKING_PROCESS_2", e.CONFIRMATION_EMAIL = "CONFIRMATION_EMAIL", e.CONFIRMATION_PAGE = "CONFIRMATION_PAGE", e.GENIUS_LANDING_PAGE = "GENIUS_LANDING_PAGE", e.INDEX = "INDEX", e.INVITATION_EMAIL = "INVITATION_EMAIL", e.LANDING_PAGE = "LANDING_PAGE", e.PROPERTY_DISPLAY = "PROPERTY_DISPLAY", e.PROPERTY_PAGE = "PROPERTY_PAGE", e.ROOM_DETAIL = "ROOM_DETAIL", e.ROOM_LIST = "ROOM_LIST", e.SEARCH_RESULTS = "SEARCH_RESULTS", e.WALLET = "WALLET", e
                }({}),
                N = function(e) {
                    return e.BRAND_PRIMARY = "BRAND_PRIMARY", e.CONSTRUCTIVE = "CONSTRUCTIVE", e.NEUTRAL = "NEUTRAL", e
                }({})
        },
        "0fc8afc9": (e, t, n) => {
            "use strict";
            n.d(t, {
                et: () => Y
            });
            var i = n("43a4d203"),
                r = n("dc6d28ff"),
                a = n("239beb17"),
                s = n("41c6c66e"),
                d = n("017725b3");
            d.pNy.ECONOMY;
            var o = n("d1e54a96");
            const l = () => {
                    const e = "prod" === (0, r.getRequestContext)().getBPlatformEnvironment();
                    return {
                        flightsHostname: e ? "flights.booking.com" : "flights.dqs.booking.com",
                        flightsSearchAutocompleteBaseUrl: e ? "https://flights.booking.com" : "https://flights.dqs.booking.com"
                    }
                },
                c = "ViewFlight",
                u = "Anywhere",
                E = (e, t, n, i, a, d) => {
                    let E;
                    const _ = (0, r.getRequestContext)(),
                        m = _.getAffiliate();
                    null !== m && void 0 !== m && m.id || ((0, s.reportWarning)("Flights LP: adding default aid as there was no aid present"), i.set("aid", "304142"));
                    const S = n.includes("COUNTRY"),
                        v = n.includes(u);
                    if (v && (i.set("to", u), i.set("toCountryCode", u)), S) {
                        const e = n.split(".")[0];
                        i.set("toCountryCode", e), i.set("to", n)
                    }
                    return v || S ? (d && i.set("ca_source", d), E = (0, o.constructUrl)({
                        pathname: "fly-anywhere/",
                        searchParams: i
                    })) : E = e === c ? (0, o.constructUrl)({
                        pathname: `flights/${t}-${n}/${a}/`,
                        searchParams: i
                    }) : (0, o.constructUrl)({
                        pathname: `flights/${t}-${n}/`,
                        searchParams: i
                    }), _.isRobotRequest() && function(e, t) {
                        const n = new Set;
                        null === t || void 0 === t || t.forEach((function(t, i) {
                            n.has(i) ? e.append(i, t) : (e.set(i, t), n.add(i))
                        }))
                    }(E.searchParams, i), E.host = l().flightsHostname, E.port = "", E.toString()
                };
            var _ = n("28dbd132"),
                m = n("dd6086f7"),
                S = n("2db41414"),
                v = n("b7559b80"),
                R = n("2e53aec9"),
                N = n("eef1968a"),
                g = n("11a12aca");
            const I = "https://paste.booking.com/data/images/g/gvgokh.gif",
                A = (e, t) => e.cards.flatMap((e => T(e, t))).filter((e => M(e))),
                T = (e, t) => {
                    var n, i;
                    const r = e.searchHistoryItem;
                    if (!r) return [];
                    const a = L(r),
                        s = b(r),
                        o = (null === (n = r.destinations) || void 0 === n || null === (n = n[0]) || void 0 === n ? void 0 : n.type) ? ? d.z5K.CITY,
                        {
                            subTitle: l,
                            groupOccupancy: c
                        } = O(e.uxLabels || []);
                    return [{
                        id: r.originalId,
                        vertical: r.vertical,
                        title: a,
                        subTitle: l,
                        groupComposition: c,
                        createdAt: r.createdAt,
                        flightsInfo: s,
                        searchParams: r.searchParams ? ? "",
                        img: {
                            src: t({
                                destType: o,
                                imageUrl: null === r || void 0 === r || null === (i = r.mainImage) || void 0 === i ? void 0 : i.genericUrl
                            })
                        },
                        countryCode: (null === r || void 0 === r ? void 0 : r.countryCode) ? ? "",
                        aspectRatio: g.Lz["1:1"],
                        url: p(r, s)
                    }]
                },
                p = (e, t) => e.vertical === d.ICm.FLIGHTS ? y(e, t) : W(e),
                x = e => {
                    var t;
                    return (null === e || void 0 === e || null === (t = e[0]) || void 0 === t || null === (t = t.uxLabels) || void 0 === t || null === (t = t.find((e => "title" === (null === e || void 0 === e ? void 0 : e.name)))) || void 0 === t ? void 0 : t.value) ? ? ""
                },
                O = e => {
                    var t;
                    if ((0, R.bZ)()) {
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
                h = e => {
                    var t, n;
                    const i = (0, R.bZ)(),
                        r = (null === e || void 0 === e || null === (t = e.recommendationPlatform) || void 0 === t || null === (t = t.flightsRecommendations) || void 0 === t ? void 0 : t.recommendations) || [],
                        a = (null === e || void 0 === e || null === (n = e.recommendationPlatform) || void 0 === n || null === (n = n.staysRecommendations) || void 0 === n ? void 0 : n.recommendations) || [],
                        s = D(a),
                        d = r.length > 0;
                    return i && d ? {
                        recentSearches: [...a, ...r],
                        lastSearch: s,
                        hasFlightsData: d
                    } : {
                        recentSearches: a,
                        lastSearch: s,
                        hasFlightsData: d
                    }
                },
                f = () => {
                    const e = (0, r.getRequestContext)().getCDNOrigin(),
                        t = (0, R.bZ)() ? "256x256" : "64x64";
                    return n => {
                        const i = (n ? (0, S.Z)(n, t, e) : I) ? ? I;
                        return i === I && (0, v.qe)(), i
                    }
                },
                C = () => {
                    const e = f();
                    return t => (null === t || void 0 === t ? void 0 : t.destType) === d.z5K.AIRPORT ? "https://paste.booking.com/data/images/e/e7uinl.jpg" : e(null === t || void 0 === t ? void 0 : t.imageUrl)
                },
                k = () => {
                    var e;
                    const t = (0, r.getRequestContext)(),
                        n = t.getSiteType() === i.SiteType.MDOT,
                        a = "tablet" === (null === (e = t.getUserAgent()) || void 0 === e ? void 0 : e.deviceType);
                    return n && !a ? g.B.MEDIUM : g.B.LARGE
                },
                b = e => {
                    var t, n;
                    if (e.vertical !== d.ICm.FLIGHTS) return;
                    const i = null === e || void 0 === e || null === (t = e.origins) || void 0 === t ? void 0 : t[0],
                        r = null === e || void 0 === e || null === (n = e.destinations) || void 0 === n ? void 0 : n[0];
                    return i && r && null !== i && void 0 !== i && i.id && null !== r && void 0 !== r && r.id && null !== i && void 0 !== i && i.name && null !== r && void 0 !== r && r.name ? {
                        isRoundTrip: "ROUNDTRIP" === (null === e || void 0 === e ? void 0 : e.type),
                        origin: {
                            title: null === i || void 0 === i ? void 0 : i.name,
                            airports: null === i || void 0 === i ? void 0 : i.id,
                            type: d.z5K.AIRPORT
                        },
                        destination: {
                            title: null === r || void 0 === r ? void 0 : r.name,
                            airports: null === r || void 0 === r ? void 0 : r.id,
                            type: d.z5K.AIRPORT
                        }
                    } : void 0
                },
                L = e => {
                    var t;
                    return e.vertical !== d.ICm.STAYS ? "" : (null === (t = e.destinations) || void 0 === t || null === (t = t[0]) || void 0 === t ? void 0 : t.name) ? ? ""
                },
                D = e => {
                    var t, n, i, r, a, s, d;
                    if (!e || 0 === e.length) return;
                    const o = e[0].cards;
                    if (!o || 0 === o.length) return;
                    const l = o[0].searchHistoryItem;
                    return l ? {
                        checkin: null === l || void 0 === l || null === (t = l.bookingWindow) || void 0 === t ? void 0 : t.checkinDate,
                        checkout: null === l || void 0 === l || null === (n = l.bookingWindow) || void 0 === n ? void 0 : n.checkoutDate,
                        nbAdults: null === l || void 0 === l || null === (i = l.guests) || void 0 === i ? void 0 : i.adults,
                        nbChildren: (null === l || void 0 === l || null === (r = l.guests) || void 0 === r || null === (r = r.children) || void 0 === r ? void 0 : r.length) ? ? 0,
                        nbRooms: null === l || void 0 === l || null === (a = l.rooms) || void 0 === a ? void 0 : a.total,
                        childrenAges: null === l || void 0 === l || null === (s = l.guests) || void 0 === s ? void 0 : s.children,
                        destType: null === l || void 0 === l || null === (d = l.destinations) || void 0 === d || null === (d = d[0]) || void 0 === d ? void 0 : d.type,
                        createdAt: null === l || void 0 === l ? void 0 : l.createdAt
                    } : void 0
                },
                y = (e, t) => {
                    var n;
                    if (!t) return "";
                    const i = new URLSearchParams;
                    null === (n = e.searchParams) || void 0 === n || n.split("&").forEach((e => {
                        const [t, n] = e.split("=");
                        i.set(t, n)
                    })), i.set("locale", (0, r.getRequestContext)().getLanguage()), i.set("sort", "BEST"), i.set("showLoader", "1"), i.set("cabinClass", "ECONOMY");
                    const a = t.origin.airports.replace(/,/g, "_"),
                        s = t.destination.airports.replace(/,/g, "_");
                    return E("SearchResults", `${a}.${t.origin.type}`, `${s}.${t.destination.type}`, i, void 0, void 0)
                },
                W = e => {
                    var t, n, i, r, a, s, d, o, l, c;
                    const u = (null === (t = e.guests) || void 0 === t || null === (t = t.children) || void 0 === t ? void 0 : t.filter((e => "number" === typeof e))) || [];
                    return (0, m.d)({
                        checkin: null === (n = e.bookingWindow) || void 0 === n ? void 0 : n.checkinDate,
                        checkout: null === (i = e.bookingWindow) || void 0 === i ? void 0 : i.checkoutDate,
                        nbAdults: null === (r = e.guests) || void 0 === r ? void 0 : r.adults,
                        nbChildren: null === (a = e.guests) || void 0 === a || null === (a = a.children) || void 0 === a ? void 0 : a.length,
                        nbRooms: null === (s = e.rooms) || void 0 === s ? void 0 : s.total,
                        childrenAges: u,
                        destId: null !== (d = e.destinations) && void 0 !== d && null !== (d = d[0]) && void 0 !== d && d.id ? parseInt(null === (o = e.destinations) || void 0 === o || null === (o = o[0]) || void 0 === o ? void 0 : o.id, 10) : void 0,
                        destType: null === (l = e.destinations) || void 0 === l || null === (l = l[0]) || void 0 === l ? void 0 : l.type,
                        highlightedPropertyId: null !== (c = e.highlightedProducts) && void 0 !== c && c[0] ? parseInt(e.highlightedProducts[0]) : void 0,
                        sorter: e.order ? ? "popularity",
                        selectedFilters: void 0
                    }).toString()
                },
                M = e => !!e.subTitle && (!(e.vertical === d.ICm.STAYS && !e.title) && !(e.vertical === d.ICm.FLIGHTS && (!e.flightsInfo || !e.groupComposition))),
                P = e => e.sort(((e, t) => e.createdAt && t.createdAt ? t.createdAt - e.createdAt : 0));
            var U = n("cedcabf9");
            const F = {},
                V = {
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
            var B = n("e36d8828");
            const H = {
                    source: "index",
                    medium: "web",
                    campaign: "recent_searches_carousel"
                },
                G = function() {
                    const e = !!(!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (0, v.Hg)(),
                        t = (0, a.isFeatureRunning)(a.feature `OABBaJePefWJaWQOcPIQDNYRMeRT`),
                        n = (0, r.getRequestContext)().getSiteType() === i.SiteType.MDOT;
                    return {
                        staysRecommendationInput: {
                            useCase: n ? "mvsf_mdot_stays_recent_searches" : "mvsf_www_stays_recent_searches",
                            strategyIds: ["901"],
                            tracking: H,
                            pagination: {
                                limit: 10
                            }
                        },
                        flightsRecommendationInput: {
                            useCase: n ? "mvsf_mdot_flights_recent_searches" : "mvsf_www_flights_recent_searches",
                            strategyIds: ["902"],
                            tracking: H,
                            pagination: {
                                limit: 10
                            }
                        },
                        includeRecommendations: e,
                        includeFlights: t
                    }
                },
                Y = () => {
                    const e = w(),
                        {
                            loading: t,
                            data: n,
                            error: a
                        } = function(e) {
                            const t = { ...F,
                                ...e
                            };
                            return U.useQuery(V, t)
                        }({
                            variables: G(),
                            skip: e,
                            fetchPolicy: "cache-first",
                            errorPolicy: "all"
                        });
                    return t || n || e || (0, s.reportWarning)("No result for recent searches data query"), a && (0, s.reportError)(a), (0, v.Hg)() ? (e => {
                        let {
                            carouselDML: t,
                            isLoading: n
                        } = e;
                        const a = (0, r.getRequestContext)().getSiteType() === i.SiteType.MDOT,
                            {
                                recentSearches: s,
                                lastSearch: d,
                                hasFlightsData: o
                            } = h(t),
                            l = x(s),
                            c = C(),
                            u = s.flatMap((e => A(e, c)));
                        return {
                            isLoading: n,
                            items: o ? P(u) : u,
                            heading: l,
                            size: k(),
                            isMdot: a,
                            componentId: "4d22cffe-4332-4c0e-ba0e-656240f7ebd8",
                            carouselName: "recent_searches_carousel",
                            hasFlightsData: o,
                            lastSearch: d
                        }
                    })({
                        carouselDML: n,
                        isLoading: t
                    }) : (e => {
                        let {
                            carouselDML: t,
                            isLoading: n
                        } = e;
                        const a = (0, r.getRequestContext)().getSiteType() === i.SiteType.MDOT,
                            s = C(),
                            o = null === t || void 0 === t ? void 0 : t.recentSearches,
                            l = null === o || void 0 === o ? void 0 : o.searches,
                            c = null === o || void 0 === o ? void 0 : o.title,
                            u = [],
                            E = (0, _.trackExperiment)((0, N.uE)());
                        return null === l || void 0 === l || l.forEach((e => {
                            u.push({
                                id: String(e.previousSearchId),
                                title: e.title,
                                subTitle: e.subtitle,
                                vertical: d.ICm.STAYS,
                                createdAt: e.createdAt,
                                groupComposition: e.subtitle2 || "",
                                numFilters: e.numFilters ? ? "",
                                searchParams: E > 0 && e.nflt || void 0,
                                img: {
                                    src: s(e)
                                },
                                countryCode: e.countryCode || "",
                                aspectRatio: g.Lz["1:1"],
                                url: (0, m.d)({
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
                                    selectedFilters: E > 0 ? e.nflt : void 0,
                                    previousSearchId: e.previousSearchId
                                }).toString()
                            })
                        })), {
                            isLoading: n,
                            items: u.length ? u : void 0,
                            heading: c || "",
                            size: k(),
                            isMdot: a,
                            componentId: (null === o || void 0 === o ? void 0 : o.campaignId) || "",
                            carouselName: (null === o || void 0 === o ? void 0 : o.carouselName) || "",
                            lastSearch: l && (null === l || void 0 === l ? void 0 : l.length) > 0 ? l[0] : void 0
                        }
                    })({
                        carouselDML: n,
                        isLoading: t
                    })
                },
                w = () => !(!(0, v.Hg)() || (0, B.CR)())
        },
        b7559b80: (e, t, n) => {
            "use strict";
            n.d(t, {
                DZ: () => c,
                Hg: () => o,
                OE: () => l,
                qe: () => E
            });
            var i = n("af1e2b38"),
                r = n("28dbd132");
            let a = function(e) {
                    return e[e.ON_RENDER = 1] = "ON_RENDER", e[e.ON_VIEW = 2] = "ON_VIEW", e[e.ON_VIEW_WWW = 3] = "ON_VIEW_WWW", e[e.ON_VIEW_MDOT = 4] = "ON_VIEW_MDOT", e[e.ON_VIEW_ANON = 5] = "ON_VIEW_ANON", e[e.ON_VIEW_GENIUS = 6] = "ON_VIEW_GENIUS", e[e.ON_VIEW_RS_1_3 = 7] = "ON_VIEW_RS_1_3", e[e.ON_VIEW_RS_4_PLUS = 8] = "ON_VIEW_RS_4_PLUS", e
                }({}),
                s = function(e) {
                    return e[e.ONE_RS = 1] = "ONE_RS", e[e.TWO_RS = 2] = "TWO_RS", e[e.THREE_RS = 3] = "THREE_RS", e[e.FOUR_PLUS_RS = 4] = "FOUR_PLUS_RS", e[e.MISSING_IMAGE = 5] = "MISSING_IMAGE", e
                }({});
            const d = () => r.exp `OABBaJXCeZVGFTSJXZUKe`,
                o = () => 1 === (0, r.trackExperiment)(d()),
                l = () => {
                    const e = d();
                    (0, r.trackExperimentStage)(e, a.ON_RENDER)
                },
                c = (e, t, n) => {
                    const s = d();
                    (0, r.trackExperimentStage)(s, a.ON_VIEW), u(t), n === i.NM.MDOT ? (0, r.trackExperimentStage)(s, a.ON_VIEW_MDOT) : (0, r.trackExperimentStage)(s, a.ON_VIEW_WWW), t > 0 && t < 4 && (0, r.trackExperimentStage)(s, a.ON_VIEW_RS_1_3), t >= 4 && (0, r.trackExperimentStage)(s, a.ON_VIEW_RS_4_PLUS), e ? (0, r.trackExperimentStage)(s, a.ON_VIEW_GENIUS) : (0, r.trackExperimentStage)(s, a.ON_VIEW_ANON)
                },
                u = e => {
                    const t = d();
                    1 === e ? (0, r.trackCustomGoal)(t, s.ONE_RS) : 2 === e ? (0, r.trackCustomGoal)(t, s.TWO_RS) : 3 === e ? (0, r.trackCustomGoal)(t, s.THREE_RS) : e > 3 && (0, r.trackCustomGoal)(t, s.FOUR_PLUS_RS)
                },
                E = () => {
                    const e = d();
                    (0, r.trackCustomGoal)(e, s.MISSING_IMAGE)
                }
        },
        "2e53aec9": (e, t, n) => {
            "use strict";
            n.d(t, {
                Xt: () => u,
                bZ: () => l,
                kd: () => c
            });
            var i = n("af1e2b38"),
                r = n("dc6d28ff"),
                a = n("28dbd132");
            let s = function(e) {
                    return e[e.RS_ONRENDER = 1] = "RS_ONRENDER", e[e.RS_ONRENDER_WITH_FLIGHTS = 2] = "RS_ONRENDER_WITH_FLIGHTS", e[e.RS_ONVIEW = 3] = "RS_ONVIEW", e
                }({}),
                d = function(e) {
                    return e[e.FLIGHT_CARD_CLICK = 1] = "FLIGHT_CARD_CLICK", e
                }({});
            const o = e => e === i.NM.MDOT ? a.exp `OABBaJePeaXTeEWGHWYWCGTLBBVYYT` : a.exp `OABBaJePeaXTeEWGHWYWCGTQLOLOLMO`,
                l = () => (e => (0, a.trackExperiment)(o(e)))((0, r.getRequestContext)().getSiteType() || i.NM.WWW) >= 1,
                c = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    const t = (0, r.getRequestContext)().getSiteType() || i.NM.WWW,
                        n = o(t);
                    (0, a.trackExperimentStage)(n, s.RS_ONRENDER), e && (0, a.trackExperimentStage)(n, s.RS_ONRENDER_WITH_FLIGHTS)
                },
                u = () => {
                    const e = (0, r.getRequestContext)().getSiteType() || i.NM.WWW,
                        t = o(e);
                    (0, a.trackCustomGoal)(t, d.FLIGHT_CARD_CLICK)
                }
        },
        eef1968a: (e, t, n) => {
            "use strict";
            n.d(t, {
                $_: () => c,
                uE: () => l,
                yY: () => u
            });
            var i = n("af1e2b38"),
                r = n("28dbd132");
            let a = function(e) {
                    return e[e.ON_VIEW = 1] = "ON_VIEW", e[e.ON_VIEW_ANON = 2] = "ON_VIEW_ANON", e[e.ON_VIEW_GENIUS = 3] = "ON_VIEW_GENIUS", e[e.ON_VIEW_RS_1_3 = 4] = "ON_VIEW_RS_1_3", e[e.ON_VIEW_RS_4_PLUS = 5] = "ON_VIEW_RS_4_PLUS", e[e.ON_VIEW_US_VISITOR = 6] = "ON_VIEW_US_VISITOR", e
                }({}),
                s = function(e) {
                    return e[e.ON_CLICK_WITH_FILTER = 1] = "ON_CLICK_WITH_FILTER", e
                }({});
            const d = r.exp `cCHObKdPHMXCeZVWQIORe`,
                o = r.exp `cCHObKdPHMXCeZVWQIOLBBVYYT`,
                l = () => (0, i.sv)() === i.NM.MDOT ? o : d,
                c = ((0, r.trackExperiment)(l()), (e, t, n) => {
                    const i = l();
                    (0, r.trackExperimentStage)(i, a.ON_VIEW), n > 0 && n < 4 && (0, r.trackExperimentStage)(i, a.ON_VIEW_RS_1_3), n >= 4 && (0, r.trackExperimentStage)(i, a.ON_VIEW_RS_4_PLUS), t && (0, r.trackExperimentStage)(i, a.ON_VIEW_US_VISITOR), e ? (0, r.trackExperimentStage)(i, a.ON_VIEW_GENIUS) : (0, r.trackExperimentStage)(i, a.ON_VIEW_ANON)
                }),
                u = () => {
                    const e = l();
                    (0, r.trackCustomGoal)(e, s.ON_CLICK_WITH_FILTER)
                }
        },
        "11a12aca": (e, t, n) => {
            "use strict";
            n.d(t, {
                B: () => r,
                Lz: () => i,
                fE: () => a
            });
            let i = function(e) {
                    return e["5:4"] = "5:4", e["1:1"] = "1:1", e["3:4"] = "3:4", e["3:2"] = "3:2", e["2:3"] = "2:3", e["4:3"] = "4:3", e["2:1"] = "2:1", e["16:9"] = "16:9", e["21:9"] = "21:9", e["4:5"] = "4:5", e["9:16"] = "9:16", e
                }({}),
                r = function(e) {
                    return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e.LARGER = "larger", e.LARGEST = "largest", e
                }({}),
                a = function(e) {
                    return e.Left = "left", e.Right = "right", e
                }({})
        },
        "085688b1": (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => v,
                d: () => k
            });
            var i = n("ead71eb0"),
                r = n.n(i),
                a = n("8521b397"),
                s = n.n(a),
                d = n("69cfa14e"),
                o = n("6222292b"),
                l = n("c44dcb0c"),
                c = n("5ec5fa07"),
                u = n("204297eb");
            const E = "f8c2ff6c78",
                _ = "f6087f0e63",
                m = "bb2378923a",
                S = "c3f0eaa626",
                v = e => {
                    let {
                        title: t,
                        text: n,
                        asset: i,
                        icon: a,
                        designVariant: v = u.C.DEFAULT,
                        hasTitle: R,
                        onClick: N
                    } = e;
                    const g = (0, l.useI18n)();
                    return v === u.C.COMPACT_MDOT && a ? r().createElement(o.Stack, {
                        gap: 4,
                        direction: "row",
                        wrap: "nowrap",
                        attributes: {
                            onClick: N,
                            "data-testid": c.Z.compactDesignId
                        }
                    }, r().createElement(o.Icon, {
                        svg: a,
                        size: "larger",
                        color: "action",
                        className: S
                    }), r().createElement(o.Stack.Item, {
                        grow: !0,
                        shrink: !0
                    }, r().createElement(o.Text, {
                        variant: "strong_1",
                        tagName: "h3",
                        mixin: {
                            margin: 0
                        }
                    }, g.trans(t)), r().createElement(o.Text, {
                        variant: "body_2",
                        tagName: "p",
                        mixin: {
                            margin: 0
                        }
                    }, g.trans(n)))) : v === u.C.EXPANDED_WWW && i ? r().createElement(o.Box, {
                        padding: 4,
                        className: m,
                        attributes: {
                            onClick: N,
                            "data-testid": c.Z.expandedDesignId
                        }
                    }, r().createElement(o.Image, {
                        asset: {
                            setName: "illustrations-traveller",
                            assetName: i
                        },
                        width: "64px",
                        height: "64px",
                        contentMode: "fit",
                        mixin: {
                            marginBlockEnd: 4
                        }
                    }), r().createElement(o.Text, {
                        variant: "strong_1",
                        tagName: "h3",
                        mixin: {
                            margin: 0
                        }
                    }, g.trans(t)), r().createElement(o.Text, {
                        variant: "body_2",
                        tagName: "p",
                        mixin: {
                            marginBlockStart: 2
                        }
                    }, g.trans(n))) : i ? r().createElement(o.Banner, {
                        dismissible: !1,
                        title: g.trans(t),
                        text: g.trans(n),
                        className: s()(E, R && _),
                        attributes: {
                            onClick: N,
                            "data-testid": c.Z.defaultDesignId
                        },
                        startImage: {
                            src: (0, d.hX)({
                                setName: "illustrations-traveller",
                                assetName: i
                            }),
                            alt: g.trans(t),
                            contentMode: "fit"
                        }
                    }) : null
                };
            var R = n("3d054e81"),
                N = n("9a67ad93"),
                g = n("af1e2b38"),
                I = n("dc6d28ff"),
                A = n("7ba12574"),
                T = n("2bb3685b"),
                p = n("43a4d203"),
                x = n("7fa013e2"),
                O = n("74dfe7dd");
            const h = e => () => {
                    const t = e + 1;
                    if (t > 0 && t <= 5) {
                        const {
                            isMDOT: e
                        } = (0, g.Z6)();
                        e ? (0, O.oL)(t) : (0, O.vA)(t)
                    }
                },
                f = "ae0ecebe1e",
                C = "c73ed867e7",
                k = e => {
                    let {
                        data: t
                    } = e;
                    const {
                        banners: n,
                        designVariant: a,
                        title: s,
                        disclaimer: d
                    } = t, {
                        ref: E,
                        inView: _
                    } = (0, N.YD)(T.Jv), m = (0, I.getRequestContext)(), S = (0, l.useI18n)(), {
                        isMDOT: k
                    } = (0, g.Z6)(), b = !(0, A.r)(), L = a === u.C.COMPACT_MDOT;
                    return (0, i.useEffect)((() => {
                        ((e, t) => {
                            t.getSiteType() === p.SiteType.MDOT && e && (0, O.$t)(), (0, x.$C)()
                        })(b, m)
                    }), []), (0, i.useEffect)((() => {
                        _ && ((e, t) => {
                            t.getSiteType() === p.SiteType.MDOT && e && ((0, O.bO)(), "us" === t.getVisitorCountry() && (0, O.XD)()), (0, x.Bt)()
                        })(b, m)
                    }), [_]), r().createElement(r().Fragment, null, r().createElement(o.Stack, {
                        gap: {
                            s: L ? 4 : 0,
                            l: 4
                        },
                        direction: {
                            s: "column",
                            l: "row"
                        },
                        alignItems: "stretch",
                        attributes: {
                            ref: E,
                            "data-testid": c.Z.uspContainerId
                        },
                        mixin: L ? {
                            padding: 4
                        } : void 0,
                        className: L ? f : void 0
                    }, s && r().createElement(o.Title, {
                        title: S.trans(s),
                        variant: k ? "headline_3" : "headline_2",
                        className: C
                    }), n.map(((e, t) => r().createElement(v, (0, R.Z)({}, e, {
                        key: e.id,
                        hasTitle: !!s,
                        designVariant: a,
                        onClick: h(t)
                    }))))), d && r().createElement(o.Text, {
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
                    }, S.trans(d)))
                }
        },
        "74dfe7dd": (e, t, n) => {
            "use strict";
            n.d(t, {
                Sv: () => o,
                Fv: () => c,
                Zm: () => a,
                vA: () => s,
                oL: () => m,
                $t: () => u,
                bO: () => E,
                XD: () => _
            });
            var i = n("28dbd132");
            const r = () => i.exp `OABBaJdeUfMSPIeKTBJFIBHAUNSTALOLOLMO`,
                a = () => 1 === (0, i.trackExperiment)(r()),
                s = e => {
                    (0, i.trackCustomGoal)(r(), e)
                };
            var d = function(e) {
                return e[e.ON_RENDER_NEW_USERS = 1] = "ON_RENDER_NEW_USERS", e[e.ON_VIEW_NEW_USERS = 2] = "ON_VIEW_NEW_USERS", e[e.ON_VIEW_NEW_US_USERS = 3] = "ON_VIEW_NEW_US_USERS", e
            }(d || {});
            let o = function(e) {
                return e[e.COPY_CHANGE = 1] = "COPY_CHANGE", e[e.UI_CHANGE = 2] = "UI_CHANGE", e
            }({});
            const l = () => i.exp `OABBaJdeUfJaAKDbUdSUHTRLBBVYYT`,
                c = () => (0, i.trackExperiment)(l()),
                u = () => {
                    (0, i.trackExperimentStage)(l(), d.ON_RENDER_NEW_USERS)
                },
                E = () => {
                    (0, i.trackExperimentStage)(l(), d.ON_VIEW_NEW_USERS)
                },
                _ = () => {
                    (0, i.trackExperimentStage)(l(), d.ON_VIEW_NEW_US_USERS)
                },
                m = e => {
                    (0, i.trackCustomGoal)(l(), e)
                }
        },
        58508755: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => w
            });
            var i = n("ead71eb0"),
                r = n.n(i),
                a = n("8521b397"),
                s = n.n(a),
                d = n("f3c8bee5"),
                o = n("af1e2b38"),
                l = n("085688b1"),
                c = n("74dfe7dd"),
                u = n("5ec5fa07"),
                E = n("6222292b"),
                _ = n("5245e060"),
                m = n("dc6d28ff"),
                S = n("fa98a3d3"),
                v = n("c44dcb0c"),
                R = n("25fcc640"),
                N = n("7befb1a5"),
                g = n("03705a9d"),
                I = n("2524cf20");
            const A = {
                    title: (0, v.t)("webcore_nex_usp_1_pay_later_head"),
                    text: (0, v.t)("webcore_nex_usp_1_pay_later_subhead"),
                    asset: "FreeCancellation"
                },
                T = {
                    title: (0, v.t)("webcore_nex_usp_2_num_properties_head"),
                    text: (0, v.t)("webcore_nex_usp_2_num_properties_subhead"),
                    asset: "TripsGlobe"
                },
                p = {
                    title: (0, v.t)("webcore_nex_usp_3_customer_service_head"),
                    text: (0, v.t)("webcore_nex_usp_3_customer_service_subhead"),
                    asset: "CustomerSupport"
                },
                x = {
                    title: (0, v.t)("ahs_usps_reviews_title"),
                    text: (0, v.t)("ahs_usps_reviews_body"),
                    asset: "Reviews"
                },
                O = {
                    title: (0, v.t)("whs_new_usps_title_mob_only_pricing"),
                    text: (0, v.t)("whs_new_usps_body_mob_only_pricing"),
                    asset: "PromotionPercent"
                },
                h = {
                    title: (0, v.t)("webcore_nex_usp_1_pay_later_head"),
                    text: (0, v.t)("webcore_nex_usp_1_pay_later_subhead"),
                    icon: R.default
                },
                f = {
                    title: (0, v.t)("whs_new_usps_title_mob_only_pricing"),
                    text: (0, v.t)("whs_new_usps_body_mob_only_pricing"),
                    icon: N.default
                },
                C = {
                    title: (0, v.t)("webcore_nex_usp_2_num_properties_head"),
                    text: (0, v.t)("webcore_nex_usp_2_num_properties_subhead"),
                    icon: g.default
                },
                k = {
                    title: (0, v.t)("webcore_nex_usp_3_customer_service_head"),
                    text: (0, v.t)("webcore_nex_usp_3_customer_service_subhead"),
                    icon: I.default
                },
                b = {
                    title: (0, v.t)("flights_index_usp1_header"),
                    text: (0, v.t)("flights_index_usp1_copy"),
                    asset: "MagnifyingGlassUsp"
                },
                L = {
                    title: (0, v.t)("flights_index_usp3_header"),
                    text: (0, v.t)("flights_index_usp3_copy"),
                    asset: "TicketsUsp"
                };
            var D = n("204297eb");
            const y = {
                    STAYS: [{
                        banners: [A, T, p]
                    }],
                    FLIGHTS: [{
                        disclaimer: (0, v.t)("flights_index_usp3_disclaimer"),
                        banners: [b, e => "br" !== e.country ? {
                            title: (0, v.t)("flights_index_usp2_header"),
                            text: (0, v.t)("flights_index_usp2_copy"),
                            asset: "MoneyUsp"
                        } : {
                            title: (0, v.t)("flights_index_instalment_usp_header"),
                            text: (0, v.t)("flights_index_instalment_usp_copy"),
                            asset: "MoneyUsp"
                        }, L]
                    }]
                },
                W = {
                    STAYS: [{
                        siteType: _.N.WWW,
                        isActive: (0, c.Zm)(),
                        designVariant: D.C.EXPANDED_WWW,
                        title: (0, v.t)("ahs_usps_title"),
                        banners: [A, x, T, p]
                    }, {
                        siteType: _.N.MDOT,
                        isActive: (0, c.Fv)() === c.Sv.COPY_CHANGE,
                        designVariant: D.C.DEFAULT,
                        banners: [A, O, p]
                    }, {
                        siteType: _.N.MDOT,
                        isActive: (0, c.Fv)() === c.Sv.UI_CHANGE,
                        designVariant: D.C.COMPACT_MDOT,
                        banners: [h, f, C, k]
                    }]
                },
                M = () => {
                    const e = (0, m.getRequestContext)(),
                        t = e.getSiteType(),
                        n = (0, S.ZP)().currentTab,
                        {
                            isLarge: r
                        } = (0, E.useViewport)(),
                        a = (0, i.useMemo)((() => ({
                            country: e.getVisitorCountry()
                        })), [e]);
                    return (0, i.useMemo)((() => {
                        const e = e => e.find((e => e.siteType === t)) ? ? e.find((e => !e.siteType)),
                            i = e => e ? e.map(((e, t) => {
                                const i = "function" === typeof e ? e(a) : e;
                                return { ...i,
                                    id: `${n}-${i.asset??"icon"}-${t}`
                                }
                            })) : [],
                            s = y[n] ? ? y.STAYS,
                            d = (W[n] ? ? []).filter((e => e.isActive)),
                            o = e(s),
                            l = e(d);
                        let c = null === o || void 0 === o ? void 0 : o.title,
                            u = null === o || void 0 === o ? void 0 : o.disclaimer,
                            E = i(null === o || void 0 === o ? void 0 : o.banners),
                            m = D.C.DEFAULT;
                        l && (c = l.title, u = l.disclaimer, E = i(l.banners), m = l.designVariant ? ? D.C.DEFAULT);
                        const S = t === _.N.WWW && !r;
                        return {
                            title: S ? void 0 : c,
                            disclaimer: u,
                            banners: E,
                            vertical: n,
                            designVariant: S ? D.C.DEFAULT : m
                        }
                    }), [t, n, a, r])
                };
            var P = n("e0c9dd7b"),
                U = n("401a4dbc"),
                F = n("52ffbfd1"),
                V = n("7ba12574"),
                B = n("e36d8828");
            const H = "b8f3ed733d",
                G = "febf12e0ea",
                Y = "bb67b22c43",
                w = e => {
                    var t;
                    let {
                        renderWWWOutsideQmab: n = !1
                    } = e;
                    const {
                        vertical: i,
                        ...a
                    } = M(), {
                        isMDOT: E,
                        isWWW: _
                    } = (0, o.Z6)(), m = !(0, V.r)(), v = (0, c.Zm)() && m && (0, B.Tz)(), R = v && n, N = !v && !n, g = i === S.N8.FLIGHTS;
                    if (0 === (null === (t = a.banners) || void 0 === t ? void 0 : t.length)) return null;
                    const I = r().createElement(l.d, {
                        data: a
                    });
                    if (E && m) return r().createElement("div", {
                        className: s()(H, {
                            [Y]: (0, U.w)()
                        }),
                        "data-testid": u.Z.mdotWrapperId
                    }, I);
                    if (_) {
                        const e = s()({
                            [H]: !a.disclaimer,
                            [G]: a.disclaimer,
                            [Y]: (0, P.m)() && !N || (0, F.Y$)()
                        });
                        if (R || g) return r().createElement("div", {
                            className: e,
                            "data-testid": u.Z.ddotWrapperId
                        }, I);
                        if (N) return r().createElement(d.Z, {
                            className: e,
                            queenMabId: 63,
                            "data-testid": u.Z.qmabWrapperId
                        }, I)
                    }
                    return null
                }
        },
        "5ec5fa07": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            const i = {
                mdotWrapperId: "mdot-unique-selling-points-wrapper",
                ddotWrapperId: "ddot-unique-selling-points-wrapper",
                qmabWrapperId: "qmab-unique-selling-points-wrapper",
                compactDesignId: "usp-compact-design",
                expandedDesignId: "usp-expanded-design",
                defaultDesignId: "usp-default-design",
                uspContainerId: "usp-container"
            }
        },
        "204297eb": (e, t, n) => {
            "use strict";
            n.d(t, {
                C: () => i
            });
            let i = function(e) {
                return e[e.DEFAULT = 0] = "DEFAULT", e[e.COMPACT_MDOT = 1] = "COMPACT_MDOT", e[e.EXPANDED_WWW = 2] = "EXPANDED_WWW", e
            }({})
        },
        "79c7f012": (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => y
            });
            var i = n("ead71eb0"),
                r = n.n(i),
                a = n("9a67ad93"),
                s = n("6222292b"),
                d = n.n(s),
                o = n("dc6d28ff"),
                l = n.n(o),
                c = n("239beb17"),
                u = n.n(c),
                E = n("d16e9636"),
                _ = n.n(E),
                m = n("461fe120"),
                S = n("c0a172df"),
                v = n("58508755"),
                R = n("e0c9dd7b"),
                N = n("f0aab8d3"),
                g = n("2a5fc44b"),
                I = n("7ba12574"),
                A = n("e36d8828"),
                T = n("74dfe7dd"),
                p = n("937814d3");
            const x = (0, E.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bIndexLpWebMfe-GlobalAlerts"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e("cf78851e").then(n.bind(n, "1cbf4d2a")),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "1cbf4d2a"
                    }
                }),
                O = (0, E.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bIndexLpWebMfe-regions-PickUpWhereYouLeftOff"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e("85d4a1a2").then(n.bind(n, "9dab079f")),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "9dab079f"
                    }
                }),
                h = (0, E.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bIndexLpWebMfe-EMKConfirmationBanner"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e("ab4d5cd6").then(n.bind(n, "dab80cc7")),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "dab80cc7"
                    }
                }),
                f = (0, E.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bIndexLpWebMfe-bookingcom-trips-frontend-trip-xp-mfe-components-MyTripsOnIndex-MyTripsOnIndex"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e("e3f586b1").then(n.bind(n, "7bb17423")),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "7bb17423"
                    }
                }),
                C = (0, E.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bConversationalUiWebCs-AITPChatEntry"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e("61ab1a52").then(n.t.bind(n, "155c28ff", 23)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "155c28ff"
                    }
                }),
                k = (0, E.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bConversationalUiWebCs-CompanionWithUpcomingTripsEntry"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e("701e06ea").then(n.t.bind(n, "f74d407c", 23)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "f74d407c"
                    }
                }),
                b = (0, E.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bIndexLpWebMfe-SecondaryBanner-SecondaryBannerDesktop"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e("f982442d").then(n.bind(n, "3b5f4de6")),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "3b5f4de6"
                    }
                }),
                L = (0, E.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bMarketingRewardsUiWebComponentService-RewardsFunnelBannerAndLandSheet"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e("30d324d0").then(n.t.bind(n, "ba281c02", 23)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "ba281c02"
                    }
                }),
                D = (0, E.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bNativeDisplayAdsNdisplayAdComponent-withAssetPreloading-IndexPrimaryAd"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e("78026585").then(n.t.bind(n, "d18fd8f2", 23)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "d18fd8f2"
                    }
                }),
                y = () => {
                    const e = (0, A.jl)(),
                        t = !(0, I.r)(),
                        n = (0, T.Zm)() && t && (0, A.Tz)(),
                        d = (0, c.isFeatureRunning)(c.feature `OAYJJcCFVbEeUbIUONSFaMEAbdUWBRe`),
                        l = d && !(0, N.U)(),
                        u = d && (0, N.U)(),
                        E = (0, c.isFeatureRunning)(c.feature `TFDYAHPePAZZOWCZTZWKNUTBNFecMEO`),
                        _ = {
                            isColdStartUser: (0, g.W4)(),
                            isInternationalUser: (0, g.Ke)(),
                            isUsUser: "us" === (0, o.getRequestContext)().getVisitorCountry()
                        };
                    (0, i.useEffect)((() => {
                        (0, m.s)()
                    }), []);
                    const y = r().createElement(r().Fragment, null, r().createElement(x, null), r().createElement(h, null), r().createElement(O, null), n && r().createElement(v.default, {
                        renderWWWOutsideQmab: !0
                    }), e && r().createElement(f, {
                        enableTripUpdates: !0,
                        enableUpcomingTrips: !0
                    }), l && r().createElement(C, null), u && r().createElement(k, null), r().createElement(b, null), r().createElement(L, null));
                    return r().createElement(a.df, {
                        triggerOnce: !0,
                        onChange: e => {
                            e && (0, S.l)(_)
                        }
                    }, (0, R.m)() ? r().createElement("div", {
                        className: p.Z.container
                    }, r().createElement(s.Stack, {
                        gap: 8,
                        className: p.Z.stack
                    }, y), r().createElement("div", {
                        className: p.Z.googleAd
                    }, E && r().createElement(D, null))) : r().createElement(r().Fragment, null, l && r().createElement(C, null), u && r().createElement(k, null), r().createElement("div", {
                        className: "promo-section"
                    }, r().createElement(b, null)), r().createElement("div", {
                        className: "promo-section"
                    }, r().createElement("div", {
                        className: "promo-section__reward-banner"
                    }, r().createElement(L, null))), E && r().createElement(D, null)))
                }
        },
        "5944b213": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => i.G
            });
            var i = n("79c7f012")
        },
        "461fe120": (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => s
            });
            var i = n("28dbd132"),
                r = n("7fa013e2"),
                a = n("4933a3e7");
            const s = () => {
                (0, a.z)("above feed area rendered"), (0, i.trackExperimentStage)(i.exp `OABBaJePebeKSERLPWYNZRIIGLae`, 1), (0, r.$7)()
            }
        },
        c0a172df: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => d
            });
            var i = n("28dbd132"),
                r = n("7fa013e2"),
                a = n("6e327bdc"),
                s = n("4933a3e7");
            const d = e => {
                (0, s.z)("above feed area viewed"), (0, i.trackExperimentStage)(i.exp `OABBaJePebeKSERLPWYNZRIIGLae`, 2), (0, a.Cq)(e), (0, r.hz)()
            }
        },
        e0c9dd7b: (e, t, n) => {
            "use strict";
            n.d(t, {
                m: () => a
            });
            var i = n("28dbd132");
            const r = i.exp `OABBaJePebeKSERLPWYNZRIIGLae`,
                a = () => !!(0, i.trackExperiment)(r)
        },
        "401a4dbc": (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => a
            });
            var i = n("28dbd132");
            const r = i.exp `OABBaJePebeKSERLPWYNHePTOdYXfCDWOOC`,
                a = () => !!(0, i.trackExperiment)(r)
        },
        f0aab8d3: (e, t, n) => {
            "use strict";
            n.d(t, {
                U: () => o
            });
            var i = n("dc6d28ff"),
                r = n("28dbd132"),
                a = n("e36d8828");
            const s = r.exp `HWdDePdeICYfZIUONSQecLZaEUbfbWNWe`,
                d = r.exp `HWdDePEPKFGYeeZADXO`,
                o = () => (0, a.jl)() && (l() && !!(0, r.trackExperiment)(d) || !!(0, r.trackExperiment)(s)),
                l = () => {
                    const e = (0, i.getRequestContext)().getVisitorCountry();
                    return ["de", "es", "fr", "it", "nl", "pl"].includes(e)
                }
        },
        "7fa013e2": (e, t, n) => {
            "use strict";
            n.d(t, {
                $7: () => p,
                $C: () => R,
                $f: () => I,
                A6: () => S,
                Bt: () => f,
                IH: () => W,
                Kq: () => C,
                M$: () => g,
                MZ: () => O,
                Pi: () => v,
                R: () => h,
                Wp: () => T,
                do: () => b,
                eT: () => D,
                gu: () => N,
                hz: () => y,
                kI: () => L,
                lP: () => x,
                yi: () => k,
                zq: () => A
            });
            var i = n("af1e2b38"),
                r = n("28dbd132");
            let a = function(e) {
                    return e[e.RENDER_WHERE_TO_NEXT = 1] = "RENDER_WHERE_TO_NEXT", e[e.RENDER_HERO = 2] = "RENDER_HERO", e[e.RENDER_SECONDARY_BANNERS = 3] = "RENDER_SECONDARY_BANNERS", e[e.RENDER_USPS = 4] = "RENDER_USPS", e[e.RENDER_RECENT_SEARCHES = 5] = "RENDER_RECENT_SEARCHES", e[e.RENDER_RVP = 6] = "RENDER_RVP", e[e.RENDER_PROMO_AREA = 7] = "RENDER_PROMO_AREA", e[e.RENDER_BELOW_SEARCH_AREA = 8] = "RENDER_BELOW_SEARCH_AREA", e[e.RENDER_QUEENMAB = 9] = "RENDER_QUEENMAB", e
                }({}),
                s = function(e) {
                    return e[e.VIEW_WHERE_TO_NEXT = 1] = "VIEW_WHERE_TO_NEXT", e[e.VIEW_HERO = 2] = "VIEW_HERO", e[e.VIEW_SECONDARY_BANNERS = 3] = "VIEW_SECONDARY_BANNERS", e[e.VIEW_USPS = 4] = "VIEW_USPS", e[e.VIEW_RECENT_SEARCHES = 5] = "VIEW_RECENT_SEARCHES", e[e.VIEW_RVP = 6] = "VIEW_RVP", e[e.VIEW_PROMO_AREA = 7] = "VIEW_PROMO_AREA", e[e.VIEW_BELOW_SEARCH_AREA = 8] = "VIEW_BELOW_SEARCH_AREA", e[e.VIEW_QUEENMAB = 9] = "VIEW_QUEENMAB", e
                }({}),
                d = function(e) {
                    return e[e.RENDER_HERO = 1] = "RENDER_HERO", e[e.RENDER_SECONDARY_BANNERS = 2] = "RENDER_SECONDARY_BANNERS", e[e.RENDER_USPS = 3] = "RENDER_USPS", e[e.RENDER_RECENT_SEARCHES = 4] = "RENDER_RECENT_SEARCHES", e[e.RENDER_RVP = 5] = "RENDER_RVP", e[e.RENDER_ABOVE_FEED_AREA = 6] = "RENDER_ABOVE_FEED_AREA", e[e.RENDER_BELOW_SEARCH_AREA = 7] = "RENDER_BELOW_SEARCH_AREA", e[e.RENDER_QUEENMAB = 8] = "RENDER_QUEENMAB", e
                }({}),
                o = function(e) {
                    return e[e.VIEW_HERO = 1] = "VIEW_HERO", e[e.VIEW_SECONDARY_BANNERS = 2] = "VIEW_SECONDARY_BANNERS", e[e.VIEW_USPS = 3] = "VIEW_USPS", e[e.VIEW_RECENT_SEARCHES = 4] = "VIEW_RECENT_SEARCHES", e[e.VIEW_RVP = 5] = "VIEW_RVP", e[e.VIEW_ABOVE_FEED_AREA = 6] = "VIEW_ABOVE_FEED_AREA", e[e.VIEW_BELOW_SEARCH_AREA = 7] = "VIEW_BELOW_SEARCH_AREA", e[e.VIEW_QUEENMAB = 8] = "VIEW_QUEENMAB", e
                }({});
            const l = r.exp `OABBaJePefMPSXHYaYLfDfEFEKCDWOOC`,
                c = r.exp `OABBaJePefMPSXHYaYLfDfEFEKdKNKNKWe`,
                u = r.exp `OABBaJePefMPSXHYaYLfDbdUWBLHIOOIBBO`,
                E = r.exp `OABBaJePefMPSXHYaYLfDbdUWBLHIcCcCcCC`,
                _ = () => (0, i.Z6)().isMDOT ? u : E,
                m = () => (0, i.Z6)().isMDOT ? l : c,
                S = () => {
                    (0, r.trackExperimentStage)(_(), (0, i.Z6)().isMDOT ? a.RENDER_HERO : d.RENDER_HERO)
                },
                v = () => {
                    (0, r.trackExperimentStage)(_(), (0, i.Z6)().isMDOT ? a.RENDER_SECONDARY_BANNERS : d.RENDER_SECONDARY_BANNERS)
                },
                R = () => {
                    (0, r.trackExperimentStage)(_(), (0, i.Z6)().isMDOT ? a.RENDER_USPS : d.RENDER_USPS)
                },
                N = () => {
                    (0, r.trackExperimentStage)(_(), (0, i.Z6)().isMDOT ? a.RENDER_RECENT_SEARCHES : d.RENDER_RECENT_SEARCHES)
                },
                g = () => {
                    (0, r.trackExperimentStage)(_(), (0, i.Z6)().isMDOT ? a.RENDER_RVP : d.RENDER_RVP)
                },
                I = () => {
                    (0, i.Z6)().isMDOT && (0, r.trackExperimentStage)(_(), a.RENDER_WHERE_TO_NEXT)
                },
                A = () => {
                    (0, i.Z6)().isMDOT && (0, r.trackExperimentStage)(_(), a.RENDER_PROMO_AREA)
                },
                T = () => {
                    (0, i.Z6)().isWWW && (0, r.trackExperimentStage)(_(), d.RENDER_QUEENMAB)
                },
                p = () => {
                    (0, i.Z6)().isWWW && (0, r.trackExperimentStage)(_(), d.RENDER_ABOVE_FEED_AREA)
                },
                x = () => {
                    (0, r.trackExperimentStage)(_(), (0, i.Z6)().isMDOT ? a.RENDER_BELOW_SEARCH_AREA : d.RENDER_BELOW_SEARCH_AREA)
                },
                O = () => {
                    (0, r.trackExperimentStage)(m(), (0, i.Z6)().isMDOT ? s.VIEW_HERO : o.VIEW_HERO)
                },
                h = () => {
                    (0, r.trackExperimentStage)(m(), (0, i.Z6)().isMDOT ? s.VIEW_SECONDARY_BANNERS : o.VIEW_SECONDARY_BANNERS)
                },
                f = () => {
                    (0, r.trackExperimentStage)(m(), (0, i.Z6)().isMDOT ? s.VIEW_USPS : o.VIEW_USPS)
                },
                C = () => {
                    (0, r.trackExperimentStage)(m(), (0, i.Z6)().isMDOT ? s.VIEW_RECENT_SEARCHES : o.VIEW_RECENT_SEARCHES)
                },
                k = () => {
                    (0, r.trackExperimentStage)(m(), (0, i.Z6)().isMDOT ? s.VIEW_RVP : o.VIEW_RVP)
                },
                b = () => {
                    (0, i.Z6)().isMDOT && (0, r.trackExperimentStage)(m(), s.VIEW_WHERE_TO_NEXT)
                },
                L = () => {
                    (0, i.Z6)().isMDOT && (0, r.trackExperimentStage)(m(), s.VIEW_PROMO_AREA)
                },
                D = () => {
                    (0, i.Z6)().isWWW && (0, r.trackExperimentStage)(m(), o.VIEW_QUEENMAB)
                },
                y = () => {
                    (0, i.Z6)().isWWW && (0, r.trackExperimentStage)(m(), o.VIEW_ABOVE_FEED_AREA)
                },
                W = () => {
                    (0, r.trackExperimentStage)(m(), (0, i.Z6)().isMDOT ? s.VIEW_BELOW_SEARCH_AREA : o.VIEW_BELOW_SEARCH_AREA)
                }
        },
        "6e327bdc": (e, t, n) => {
            "use strict";
            n.d(t, {
                $g: () => _,
                Cq: () => v,
                ov: () => m,
                uB: () => S
            });
            var i = n("af1e2b38"),
                r = n("dc6d28ff"),
                a = n("28dbd132"),
                s = n("e36d8828");
            const d = () => "us" === (0, r.getRequestContext)().getVisitorCountry(),
                o = a.exp `OABBaJTWZdJNAHVYDYWXVFcSQLOLOLMO`,
                l = a.exp `OABBaJTWZdJNAHVYDYWXVFcSLBBVYYT`;
            let c = function(e) {
                    return e[e.QMAB_ON_VIEW = 1] = "QMAB_ON_VIEW", e[e.GENIUS_USER = 2] = "GENIUS_USER", e[e.SIGNED_OUT = 3] = "SIGNED_OUT", e[e.COLD_START_USER = 4] = "COLD_START_USER", e[e.WARM_START_USER = 5] = "WARM_START_USER", e[e.WARM_START_INTERNATIONAL_USER = 6] = "WARM_START_INTERNATIONAL_USER", e[e.WARM_START_DOMESTIC_USER = 7] = "WARM_START_DOMESTIC_USER", e[e.US_USER = 8] = "US_USER", e
                }({}),
                u = function(e) {
                    return e[e.ON_VIEW_TRENDING_DESTINATION = 1] = "ON_VIEW_TRENDING_DESTINATION", e[e.ON_CLICK_TRENDING_DESTINATION = 2] = "ON_CLICK_TRENDING_DESTINATION", e[e.ON_VIEW_HOMES_GUESTS_LOVE = 3] = "ON_VIEW_HOMES_GUESTS_LOVE", e[e.ON_CLICK_HOMES_GUESTS_LOVE = 4] = "ON_CLICK_HOMES_GUESTS_LOVE", e
                }({});
            const E = () => {
                    const {
                        isWWW: e
                    } = (0, i.Z6)();
                    return e ? o : l
                },
                _ = () => (0, a.trackExperiment)(E()) > 0,
                m = () => {
                    d() && (0, a.trackCustomGoal)(E(), u.ON_CLICK_HOMES_GUESTS_LOVE)
                },
                S = () => {
                    d() && (0, a.trackCustomGoal)(E(), u.ON_CLICK_TRENDING_DESTINATION)
                },
                v = e => {
                    const {
                        isColdStartUser: t,
                        isInternationalUser: n,
                        isUsUser: i
                    } = e, r = E();
                    (0, a.trackExperimentStage)(r, c.QMAB_ON_VIEW), (0, s.jl)() ? (0, a.trackExperimentStage)(r, c.GENIUS_USER) : (0, a.trackExperimentStage)(r, c.SIGNED_OUT), t ? (0, a.trackExperimentStage)(r, c.COLD_START_USER) : !1 === t && ((0, a.trackExperimentStage)(r, c.WARM_START_USER), n ? (0, a.trackExperimentStage)(r, c.WARM_START_INTERNATIONAL_USER) : !1 === n && (0, a.trackExperimentStage)(r, c.WARM_START_DOMESTIC_USER)), i && (0, a.trackExperimentStage)(r, c.US_USER)
                }
        },
        "52ffbfd1": (e, t, n) => {
            "use strict";
            n.d(t, {
                Bb: () => _,
                W$: () => d,
                XA: () => l,
                Y$: () => o,
                _0: () => E,
                zz: () => u
            });
            var i = n("af1e2b38"),
                r = n("28dbd132");
            const a = r.exp `OABBaJcBHQQWcGHVHNEIMUKVBBVYYT`,
                s = r.exp `OABBaJcBHQQWcGHVHNEIMUKALOLOLMO`,
                d = () => (0, r.trackExperiment)(a) > 0,
                o = () => (0, r.trackExperiment)(s) > 0,
                l = () => {
                    const {
                        isMDOT: e
                    } = (0, i.Z6)();
                    return e ? d() : o()
                },
                c = () => {
                    const {
                        isMDOT: e
                    } = (0, i.Z6)();
                    return e ? a : s
                },
                u = () => {
                    (0, r.trackCustomGoal)(c(), 1)
                },
                E = () => {
                    (0, r.trackCustomGoal)(c(), 2)
                },
                _ = () => {
                    if ("undefined" === typeof window || "undefined" === typeof document) return;
                    const e = "js_index_queenmab_rendered_components_count",
                        t = l();
                    setTimeout((function() {
                        t ? n() : i()
                    }), 5e3);
                    const n = () => {
                            const t = Array.from(document.querySelectorAll("[data-widgetid]")).map((e => {
                                var t;
                                return (null === e || void 0 === e || null === (t = e.textContent) || void 0 === t ? void 0 : t.trim()) || ""
                            })).filter((e => e.length > 0)).length;
                            (0, r.trackGoalWithValue)(e, t)
                        },
                        i = () => {
                            const t = Array.from(document.querySelectorAll("[data-qmab-component-id]")).map((e => {
                                var t;
                                return (null === e || void 0 === e || null === (t = e.textContent) || void 0 === t ? void 0 : t.trim()) || ""
                            })).filter((e => e.length > 0)).length;
                            (0, r.trackGoalWithValue)(e, t)
                        }
                }
        },
        "2a5fc44b": (e, t, n) => {
            "use strict";
            n.d(t, {
                Ke: () => o,
                W4: () => s
            });
            var i = n("d0989236"),
                r = n("0fc8afc9");
            const a = e => {
                    var t;
                    return !(e.isLoading || null !== e && void 0 !== e && null !== (t = e.items) && void 0 !== t && t.length)
                },
                s = () => {
                    const e = (0, r.et)();
                    return e.isLoading ? null : a(e)
                },
                d = () => {
                    const e = (0, r.et)(),
                        {
                            visitorCountry: t
                        } = (0, i.B)();
                    if (!e.isLoading && !a(e)) {
                        var n;
                        const i = null === e || void 0 === e || null === (n = e.items) || void 0 === n || null === (n = n[0]) || void 0 === n ? void 0 : n.countryCode;
                        if (i) return {
                            isSameCountry: t === i
                        }
                    }
                    return {
                        isSameCountry: null
                    }
                },
                o = () => {
                    const {
                        isSameCountry: e
                    } = d();
                    return !1 === e
                }
        },
        "7ba12574": (e, t, n) => {
            "use strict";
            n.d(t, {
                r: () => o
            });
            var i = n("239beb17"),
                r = n("41c6c66e"),
                a = n("cedcabf9");
            const s = {},
                d = {
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
            const o = () => {
                var e;
                const t = !(0, i.isFeatureRunning)(i.feature `OABBaJePefTFBaMJYIPNZFZeaPLfYCeHHQC`),
                    {
                        loading: n,
                        data: o,
                        error: l
                    } = function(e) {
                        const t = { ...s,
                            ...e
                        };
                        return a.useQuery(d, t)
                    }({
                        skip: t
                    });
                return n || o || t || (0, r.reportWarning)("No result for new/returning user status query"), l && (0, r.reportError)(l), 2 === (null === o || void 0 === o || null === (e = o.userReturnTypeQuery) || void 0 === e ? void 0 : e.type)
            }
        },
        "2bb3685b": (e, t, n) => {
            "use strict";
            n.d(t, {
                Jv: () => s,
                gh: () => a,
                nh: () => i,
                q$: () => r
            });
            const i = "b_merch_test_campaign_id",
                r = "b_genius_data_debug",
                a = ["b-webcore-transactional-content-service", "b-merch-platform-campaign-serving-api"],
                s = {
                    threshold: .2,
                    triggerOnce: !0
                }
        },
        "2db41414": (e, t, n) => {
            "use strict";
            n.d(t, {
                X: () => r,
                Z: () => a
            });
            var i = n("5c4eda5e");
            const r = (e, t, n, r) => {
                    const a = i.J[r][t][n];
                    return e ? {
                        "1x": e.replace("<SIZE>", a["1x"]),
                        "2x": e.replace("<SIZE>", a["2x"])
                    } : null
                },
                a = (e, t, n) => e && n + e.replace("<SIZE>", t)
        },
        "5c4eda5e": (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => r,
                y: () => i
            });
            let i = function(e) {
                return e.IndexQmabDesktop = "IndexQmabDesktop", e.IndexQmabMdot = "IndexQmabMdot", e
            }({});
            const r = {
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
        fa98a3d3: (e, t, n) => {
            "use strict";
            n.d(t, {
                N8: () => o,
                ZP: () => l
            });
            var i = n("ead71eb0"),
                r = n("d0fefcf5");
            const a = "CAPLA_EVENT_index-lp_web-mfe_LAUNCHPAD_STAYS_TAB_CLICKED",
                s = "CAPLA_EVENT_index-lp_web-mfe_LAUNCHPAD_FLIGHTS_TAB_CLICKED",
                d = "CAPLA_EVENT_index-lp_web-mfe_LAUNCHPAD_CARS_TAB_CLICKED";
            let o = function(e) {
                return e.STAYS = "STAYS", e.FLIGHTS = "FLIGHTS", e.CARS = "CARS", e.ATTRACTIONS = "ATTRACTIONS", e.TAXI = "TAXI", e
            }({});
            const l = () => {
                const [e, t] = (0, i.useState)(o.STAYS);
                return (0, i.useEffect)((() => {
                    const e = {
                            [a]: o.STAYS,
                            [s]: o.FLIGHTS,
                            [d]: o.CARS
                        },
                        n = Object.entries(e).map((e => {
                            let [n, i] = e;
                            return r.eventBus.subscribe(n, (() => t(i)))
                        }));
                    return () => n.forEach((e => r.eventBus.unsubscribe(e)))
                }), []), {
                    currentTab: e
                }
            }
        },
        "4933a3e7": (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => s,
                z: () => r
            });
            var i = n("dc6d28ff");
            const r = function() {
                const e = (0, i.getRequestContext)(),
                    t = e.getBPlatformEnvironment(),
                    n = e.getBasePageUrl(),
                    r = e.isInternalUser() && "1" === n.searchParams.get("debug");
                if ((!t || "dev" === t || "dqs" === t) && r) {
                    for (var a = arguments.length, s = new Array(a), d = 0; d < a; d++) s[d] = arguments[d];
                    console.log(s)
                }
            };
            let a;

            function s(e, t, n) {
                const r = (0, i.getRequestContext)(),
                    s = r.getBasePageUrl();
                r.isInternalUser() && "1" === s.searchParams.get("debug_merch") && null !== e && void 0 !== e && e.merchComponents && e !== a && (console.groupCollapsed("Merch Platform debug info"), console.log("Merch Platform request variables:", t), console.log("Merch Platform response data:", e), console.log("Metadata:", n), console.groupEnd(), a = e)
            }
        },
        e36d8828: (e, t, n) => {
            "use strict";
            n.d(t, {
                CR: () => d,
                Tz: () => o,
                jl: () => s
            });
            var i = n("43a4d203"),
                r = n("dc6d28ff");
            const a = () => (0, r.getRequestContext)().getUnpackedGuestAccessToken(),
                s = () => {
                    var e;
                    const t = null === (e = a()) || void 0 === e ? void 0 : e.authenticatorAssuranceLevel;
                    return !!t && t >= i.AuthenticatorAssuranceLevel.AAL1
                },
                d = () => {
                    var e;
                    return !(null === (e = a()) || void 0 === e || !e.isMarketingTrackingAllowed)
                },
                o = () => !s()
        },
        b1f34e95: (e, t, n) => {
            "use strict";
            n.d(t, {
                $O: () => a,
                G1: () => l,
                Oq: () => d,
                RS: () => E,
                _Q: () => c,
                _g: () => o,
                ge: () => r,
                jP: () => s,
                mT: () => i,
                yn: () => u
            });
            const i = "nflt",
                r = ";",
                a = "ac_meta",
                s = "previous_search_id",
                d = {
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
                l = "min",
                c = "max",
                u = new RegExp(`^.+-(${l}|[0-9]+)-(${c}|[0-9]+)-1`, "i"),
                E = "sr_sfu"
        },
        dd6086f7: (e, t, n) => {
            "use strict";
            n.d(t, {
                d: () => d
            });
            var i = n("dc6d28ff"),
                r = n("d1e54a96"),
                a = n("67934118"),
                s = n("b1f34e95");

            function d(e) {
                let {
                    ucfac: t,
                    ucfgff: n,
                    ffsau: d,
                    highlightedPropertyId: o,
                    tripThemeId: l,
                    destType: c,
                    destId: u,
                    isAroundme: E,
                    latitude: _,
                    longitude: m,
                    travelPurpose: S,
                    sorter: v,
                    selectedFilters: R,
                    checkin: N,
                    checkout: g,
                    nbAdults: I,
                    nbChildren: A,
                    childrenAges: T,
                    nbRooms: p,
                    postcard: x,
                    sleepingRoomMatch: O,
                    showApartHotels: h,
                    loginRedirect: f,
                    fromSearchHistorySearchbox: C,
                    lpThemeId: k,
                    previousSearchId: b,
                    srView: L,
                    sourceLabel: D
                } = e;
                const y = (0, i.getRequestContext)().getLanguage(),
                    W = (0, r.constructUrl)({
                        pathname: `/searchresults${"en-us"===y?"":"."+y}.html`
                    }),
                    M = W.searchParams;
                if (N && g && (M.set("checkin", N), M.set("checkout", g)), u && c && (M.set("dest_id", String(u)), M.set("dest_type", String(c).toLowerCase())), "boolean" === typeof E && M.set("is_aroundme", E ? "1" : "0"), "undefined" !== typeof _ && "undefined" !== typeof m && (M.set("latitude", String(_)), M.set("longitude", String(m))), "undefined" !== typeof S) {
                    const e = (0, a.DT)(parseInt(String(S), 10));
                    e && M.set(a.w3, e)
                }
                return R && M.set(s.mT, R), v && M.set("order", v), "undefined" !== typeof I && (M.set("group_adults", String(I)), M.set("req_adults", String(I))), "undefined" !== typeof p && M.set("no_rooms", String(p)), "undefined" !== typeof A && (M.set("group_children", String(A)), M.set("req_children", String(A))), T && T.forEach((e => {
                    M.append("age", String(e)), M.append("req_age", String(e))
                })), o && M.set("highlighted_hotels", String(o)), l && M.set("trip_theme", String(l)), t && M.set("ucfac", t), n && M.set("ucfgff", n), d && M.set("ffsau", d), x && M.set("postcard", x), O && M.set("slp_r_match_to", O), h && M.set("shw_aparth", h), f && M.set("login_redirect", f), C && M.set("fshsb", "1"), k && M.set("theme_id", String(k)), b && M.set(s.jP, b), L && M.set("sr_view", L), D && M.set("source_label", D), W
            }
        },
        67934118: (e, t, n) => {
            "use strict";
            n.d(t, {
                C3: () => o,
                DT: () => l,
                H: () => i,
                w3: () => a
            });
            const i = "business",
                r = "leisure",
                a = "sb_travel_purpose",
                s = 1,
                d = 2;

            function o(e) {
                return e.get(a) === i
            }

            function l(e) {
                return e === s ? i : e === d ? r : void 0
            }
        },
        "937814d3": (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            const i = {
                container: "bac91877e7",
                stack: "cee6246116",
                googleAd: "cc9de263ac"
            }
        },
        "7befb1a5": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => r
            });
            var i = n("ead71eb0");
            const r = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "M22.875 12.008a4.24 4.24 0 0 0-2.862-4.055l.427 1.044a4.35 4.35 0 0 0-.737-4.938 4.036 4.036 0 0 0-4.84-.776l1.077.458a4.091 4.091 0 0 0-7.88 0l1.077-.459a4.04 4.04 0 0 0-4.84.777 4.35 4.35 0 0 0-.737 4.938l.42-1.042a4.292 4.292 0 0 0 0 8.089l-.42-1.042a4.35 4.35 0 0 0 .736 4.938 4.04 4.04 0 0 0 4.841.778l-1.077-.46a4.091 4.091 0 0 0 7.88 0l-1.077.46a4.036 4.036 0 0 0 4.84-.778 4.35 4.35 0 0 0 .737-4.938l-.427 1.044a4.24 4.24 0 0 0 2.862-4.054zm-1.5 0a2.74 2.74 0 0 1-1.85 2.62.75.75 0 0 0-.427 1.044 2.85 2.85 0 0 1-.483 3.236 2.536 2.536 0 0 1-3.042.488.75.75 0 0 0-1.077.46 2.59 2.59 0 0 1-4.992 0 .75.75 0 0 0-1.077-.46 2.54 2.54 0 0 1-3.043-.488 2.85 2.85 0 0 1-.482-3.236.75.75 0 0 0-.42-1.042 2.792 2.792 0 0 1 0-5.261.75.75 0 0 0 .42-1.042 2.85 2.85 0 0 1 .482-3.236 2.54 2.54 0 0 1 3.043-.487.75.75 0 0 0 1.077-.46 2.59 2.59 0 0 1 4.992 0 .75.75 0 0 0 1.077.46 2.536 2.536 0 0 1 3.042.487 2.85 2.85 0 0 1 .483 3.236.75.75 0 0 0 .427 1.044 2.74 2.74 0 0 1 1.85 2.621zM9.155 16.28l7.5-7.5a.75.75 0 0 0-1.06-1.06l-7.5 7.5a.75.75 0 1 0 1.06 1.06m.97-7.28a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0m4.5 6a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"
                }))
            }
        },
        "03705a9d": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => r
            });
            var i = n("ead71eb0");
            const r = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "m20.538 12.078-8.886 2.987.768.179-1.191-1.183a.75.75 0 0 0-.768-.179l-1.766.594a1.5 1.5 0 0 0-.64 2.421l2.389 2.674a2.25 2.25 0 0 0 2.4.632l2.615-.878-.982-.815-.53 3.78a1.5 1.5 0 0 0 1.962 1.631l1.362-.458c.422-.142.758-.463.92-.877l1.994-5.134-.46.439 2.488-.836a2.626 2.626 0 1 0-1.679-4.977c-.804.272-.61 1.461.24 1.461h.003v-.75l-.239-.71zm.478 1.422c.805-.27.61-1.461-.239-1.461h-.003v.75l.24.71a1.126 1.126 0 1 1 .72 2.134l-2.487.836a.75.75 0 0 0-.46.44l-1.994 5.132-1.361.458.53-3.78a.75.75 0 0 0-.98-.816l-2.618.879a.75.75 0 0 1-.802-.21l-2.389-2.675v.001l1.766-.594-.768-.179 1.192 1.183c.2.2.498.27.767.179zm-2.301-.492-2.78-1.915a1.5 1.5 0 0 0-1.328-.186l-1.34.45a1.5 1.5 0 0 0-.578 2.485l1.516 1.51a.75.75 0 0 0 1.058-1.064l-1.517-1.51-.001.001 1.34-.45 2.778 1.915a.75.75 0 1 0 .852-1.236M6.313 17.25A8.25 8.25 0 1 1 18 9.75a.75.75 0 1 0 1.5 0A9.75 9.75 0 0 0 13.812.887C8.918-1.357 3.13.793.887 5.688s-.095 10.682 4.8 12.926a.75.75 0 0 0 .625-1.364zM3.759 3.506l5.281 2a.75.75 0 0 1 .475.851L9.2 7.921a.75.75 0 0 1-.554.581l-2.079.52a.75.75 0 0 0-.515.45l-1.15 2.884a2.24 2.24 0 0 1-.84 1.036L2.22 14.654a.75.75 0 1 0 .848 1.238l1.835-1.257a3.73 3.73 0 0 0 1.394-1.723l1.15-2.884-.515.45 2.079-.52a2.25 2.25 0 0 0 1.66-1.742l.314-1.563a2.25 2.25 0 0 0-1.416-2.55l-5.278-2a.75.75 0 0 0-.532 1.403m11.571-.574-1.472 2.925a2.25 2.25 0 0 0-.124 1.719l.555 1.661a.75.75 0 0 0 1.422-.474l-.553-1.661a.75.75 0 0 1 .04-.572l1.472-2.924a.75.75 0 1 0-1.34-.674"
                }))
            }
        },
        "25fcc640": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => r
            });
            var i = n("ead71eb0");
            const r = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "M1.5 17.25a6.003 6.003 0 0 1 8.356-5.518.75.75 0 0 0 .588-1.38A7.504 7.504 0 0 0 0 17.25a.75.75 0 0 0 1.5 0m9.375-12.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0m1.5 0a4.875 4.875 0 1 0-9.75 0 4.875 4.875 0 0 0 9.75 0M18.75 13.5h-2.034a2.092 2.092 0 0 0-.78 4.033l2.064.825a.592.592 0 0 1-.22 1.142h-2.03a.75.75 0 0 0 0 1.5h2.029a2.092 2.092 0 0 0 .779-4.034l-2.064-.825A.591.591 0 0 1 16.717 15h2.033a.75.75 0 0 0 0-1.5m-.75.75v-.75a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0M18 21v-.75a.75.75 0 0 0-1.5 0V21a.75.75 0 0 0 1.5 0m4.5-3.75a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0m1.5 0a6.75 6.75 0 1 0-13.5 0 6.75 6.75 0 0 0 13.5 0"
                }))
            }
        },
        "2524cf20": (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => r
            });
            var i = n("ead71eb0");
            const r = function() {
                return i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    width: "50px"
                }, i.createElement("path", {
                    d: "M14.44 15a.62.62 0 0 0 0-.85.58.58 0 0 0-.83 0c-.367.33-.847.506-1.34.49a1.9 1.9 0 0 1-1.34-.49.58.58 0 0 0-.83 0 .61.61 0 0 0 0 .85c.58.57 1.367.88 2.18.86a3 3 0 0 0 2.16-.86m7.17-6.49a2 2 0 0 0-.22 0l-.14-.32C19.245 3.091 13.487.583 8.388 2.588A9.92 9.92 0 0 0 2.67 8.5h-.28a2.16 2.16 0 0 0-2.16 2.17v2.82a2.16 2.16 0 0 0 4.32 0v-2.82A2.2 2.2 0 0 0 4 9.27a8.41 8.41 0 0 1 15.85-.45l.17.39a2 2 0 0 0-.59 1.46v2.82c.002.466.157.92.44 1.29a8.4 8.4 0 0 1-5.29 5.06 2.63 2.63 0 0 0-4.715 2.332 2.63 2.63 0 0 0 4.965-.822 10 10 0 0 0 6.32-5.75q.218.048.44.05a2.16 2.16 0 0 0 2.16-2.16v-2.82a2.16 2.16 0 0 0-2.14-2.16m-18.56 5a.66.66 0 0 1-1.32 0v-2.84a.66.66 0 0 1 1.32 0zm9.2 8.65a1.13 1.13 0 0 1 0-2.26 1.13 1.13 0 0 1 1.13 1.1 1.14 1.14 0 0 1-1.13 1.14zm10-8.65a.66.66 0 0 1-1.32 0v-2.84a.67.67 0 0 1 .66-.66.66.66 0 0 1 .66.66zM7.33 8.88c-.21.21-.328.494-.33.79.002.224.068.443.19.63.124.186.302.329.51.41.205.088.431.112.65.07.215-.049.412-.156.57-.31.16-.157.268-.36.31-.58.04-.218.02-.443-.06-.65a1.13 1.13 0 0 0-1.84-.36m7.88 0a1.12 1.12 0 0 0-.14 1.42 1.14 1.14 0 0 0 1.15.48 1.17 1.17 0 0 0 .58-.31c.153-.16.258-.362.3-.58.04-.222.006-.45-.1-.65a1.1 1.1 0 0 0-.41-.5 1.2 1.2 0 0 0-.59-.19c-.297 0-.581.119-.79.33"
                }))
            }
        },
        "8521b397": (e, t) => {
            var n;
            ! function() {
                "use strict";
                var i = {}.hasOwnProperty;

                function r() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        n && (e = s(e, a(n)))
                    }
                    return e
                }

                function a(e) {
                    if ("string" === typeof e || "number" === typeof e) return e;
                    if ("object" !== typeof e) return "";
                    if (Array.isArray(e)) return r.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                    var t = "";
                    for (var n in e) i.call(e, n) && e[n] && (t = s(t, n));
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
                YD: () => _,
                df: () => E
            });
            var i = n("ead71eb0"),
                r = Object.defineProperty,
                a = (e, t, n) => (((e, t, n) => {
                    t in e ? r(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                })(e, "symbol" !== typeof t ? t + "" : t, n), n),
                s = new Map,
                d = new WeakMap,
                o = 0,
                l = void 0;

            function c(e) {
                return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                    return `${t}_${"root"===t?(n=e.root,n?(d.has(n)||(o+=1,d.set(n,o.toString())),d.get(n)):"0"):e[t]}`;
                    var n
                })).toString()
            }

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l;
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
                    observer: a,
                    elements: d
                } = function(e) {
                    const t = c(e);
                    let n = s.get(t);
                    if (!n) {
                        const i = new Map;
                        let r;
                        const a = new IntersectionObserver((t => {
                            t.forEach((t => {
                                var n;
                                const a = t.isIntersecting && r.some((e => t.intersectionRatio >= e));
                                e.trackVisibility && "undefined" === typeof t.isVisible && (t.isVisible = a), null == (n = i.get(t.target)) || n.forEach((e => {
                                    e(a, t)
                                }))
                            }))
                        }), e);
                        r = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                            id: t,
                            observer: a,
                            elements: i
                        }, s.set(t, n)
                    }
                    return n
                }(n), o = d.get(e) || [];
                return d.has(e) || d.set(e, o), o.push(t), a.observe(e),
                    function() {
                        o.splice(o.indexOf(t), 1), 0 === o.length && (d.delete(e), a.unobserve(e)), 0 === d.size && (a.disconnect(), s.delete(r))
                    }
            }
            var E = class extends i.Component {
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
                        trackVisibility: i,
                        delay: r,
                        fallbackInView: a
                    } = this.props;
                    this._unobserveCb = u(this.node, this.handleChange, {
                        threshold: e,
                        root: t,
                        rootMargin: n,
                        trackVisibility: i,
                        delay: r
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
                        threshold: r,
                        root: a,
                        rootMargin: s,
                        onChange: d,
                        skip: o,
                        trackVisibility: l,
                        delay: c,
                        initialInView: u,
                        fallbackInView: E,
                        ..._
                    } = this.props;
                    return i.createElement(t || "div", {
                        ref: this.handleNode,
                        ..._
                    }, e)
                }
            };

            function _() {
                let {
                    threshold: e,
                    delay: t,
                    trackVisibility: n,
                    rootMargin: r,
                    root: a,
                    triggerOnce: s,
                    skip: d,
                    initialInView: o,
                    fallbackInView: l,
                    onChange: c
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                var E;
                const [_, m] = i.useState(null), S = i.useRef(), [v, R] = i.useState({
                    inView: !!o,
                    entry: void 0
                });
                S.current = c, i.useEffect((() => {
                    if (d || !_) return;
                    let i;
                    return i = u(_, ((e, t) => {
                        R({
                            inView: e,
                            entry: t
                        }), S.current && S.current(e, t), t.isIntersecting && s && i && (i(), i = void 0)
                    }), {
                        root: a,
                        rootMargin: r,
                        threshold: e,
                        trackVisibility: n,
                        delay: t
                    }, l), () => {
                        i && i()
                    }
                }), [Array.isArray(e) ? e.toString() : e, _, a, r, s, d, n, l, t]);
                const N = null == (E = v.entry) ? void 0 : E.target,
                    g = i.useRef();
                _ || !N || s || d || g.current === N || (g.current = N, R({
                    inView: !!o,
                    entry: void 0
                }));
                const I = [m, v.inView, v.entry];
                return I.ref = I[0], I.inView = I[1], I.entry = I[2], I
            }
        }
    }
]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/a74f71eb.75bb3090.chunk.js.map