"use strict";
(self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] = self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] || []).push([
    ["8e69b76c", "572dba2c", "1faad75c", "bf5d442e", "1d36ff76"], {
        af1e2b38: (e, t, r) => {
            r.d(t, {
                NM: () => n.N,
                sv: () => o,
                Z6: () => i
            });
            var n = r("5245e060"),
                s = r("dc6d28ff");
            const o = () => (0, s.getRequestContext)().getSiteType() ? ? n.N.WWW,
                i = () => {
                    const e = o();
                    return {
                        isWWW: e === n.N.WWW,
                        isMDOT: e === n.N.MDOT,
                        isTDOT: e === n.N.TDOT
                    }
                }
        },
        "64b778ad": (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => l
            });
            var n = r("ead71eb0"),
                s = r.n(n),
                o = r("43a4d203"),
                i = r("dc6d28ff"),
                a = r("41c6c66e"),
                c = r("98f608d3"),
                d = r("08034652");
            const E = [c.Z.SEARCH_BOX_MOBILE, c.Z.TRAVELLER_HEADER, c.Z.PICK_UP_WHERE_YOU_LEFT_OFF_REGION, c.Z.WHERE_TO_NEXT_BANNER, c.Z.TRAVELLER_FOOTER, c.Z.UNIQUE_SELLING_POINTS, c.Z.BELOW_THE_SEARCHBOX_AREA_MOBILE, c.Z.GPT_SCRIPT_LOADER, c.Z.ABOVE_THE_FEED_AREA_MOBILE];
            const l = function(e) {
                let {
                    componentId: t
                } = e;
                const r = (0, i.getRequestContext)();
                if (!r.getBasePageUrl()) return (0, a.reportError)(new Error("index-lp-web-mfe: basePageUrl is falsy")), null;
                const l = new URL(t, "http://capla").pathname;
                if (l in c.P) {
                    let e = c.P[l];
                    e = (0, d.I)(l, e);
                    const t = r.getSiteType() === o.SiteType.MDOT;
                    return (r.isNormalRequest() || r.isInternalUser()) && t && !E.includes(l) ? (0, n.createElement)((u = e, function(e) {
                        const [t, r] = (0, n.useState)(!1);
                        return (0, n.useEffect)((() => {
                            r(!0)
                        }), []), t ? s().createElement(u, e) : null
                    })) : (0, n.createElement)(e)
                }
                var u;
                return "/empty" === l || (0, a.reportWarning)(`No connected pattern to render for pathname ${l}`), null
            }
        },
        fb62a8c9: (e, t, r) => {
            r.d(t, {
                _: () => n
            });
            let n = function(e) {
                return e.PropertyTypesWww = "PropertyTypesWww", e.PropertyTypesLoginMdot = "PropertyTypesLoginMdot", e.PropertyTypesLogoutMdot = "PropertyTypesLogoutMdot", e.DomesticDestinationsMdot = "DomesticDestinationsMdot", e.DomesticDestinationsWww = "DomesticDestinationsWww", e.JapanGoldenWeekWww = "JapanGoldenWeekWww", e.JapanGoldenWeekMdot = "JapanGoldenWeekMdot", e.JapanObonWww = "JapanObonWww", e.JapanObonMdot = "JapanObonMdot", e.AttractionsActiveBookingWww = "AttractionsActiveBookingWww", e.AttractionsActiveBookingMdot = "AttractionsActiveBookingMdot", e.FlightsCrossSellWww = "FlightsCrossSellWww", e.FlightsCrossSellMdot = "FlightsCrossSellMdot", e.BookingHomesMdot = "BookingHomesMdot", e.HotelHistoryWww = "HotelHistoryWww", e.AttractionsTopCitiesWww = "AttractionsTopCitiesWww", e.AttractionsTopCitiesMdot = "AttractionsTopCitiesMdot", e.SimilarPropertiesWww = "SimilarPropertiesWww", e.SimilarPropertiesMdot = "SimilarPropertiesMdot", e.TripTypesMdot = "TripTypesMdot", e.TripTypesWww = "TripTypesWww", e
            }({})
        },
        "1ea8ff05": (e, t, r) => {
            r.d(t, {
                UR: () => l,
                W_: () => u,
                X3: () => E,
                o0: () => _
            });
            var n = r("af1e2b38"),
                s = r("dc6d28ff"),
                o = r("28dbd132"),
                i = r("239beb17"),
                a = r("e36d8828");
            const c = ["us", "fr", "ee", "gr", "ae", "ua", "pl", "ph", "hr", "mx", "my", "bg", "co", "qa", "nz", "th", "lu", "rs", "in", "kw", "jp", "ch", "cl", "pe", "dk", "fi", "no", "ro", "se", "bh", "hk", "om", "id", "au", "sa", "at", "be", "de", "ie", "it", "nl", "es", "cz", "hu", "is", "pt", "kz", "za", "mo", "ca", "cy", "mt", "gb", "br", "kr", "sg", "vn"];
            let d = function(e) {
                return e[e.RECENT_SEARCHES = 1] = "RECENT_SEARCHES", e[e.ON_VIEW = 3] = "ON_VIEW", e[e.SIGNED_OUT = 4] = "SIGNED_OUT", e[e.GENIUS = 5] = "GENIUS", e[e.UPCOMING_BOOKING = 6] = "UPCOMING_BOOKING", e[e.US = 8] = "US", e[e.WITHOUT_RECENT_SEARCHES = 9] = "WITHOUT_RECENT_SEARCHES", e
            }({});
            const E = () => (0, n.Z6)().isMDOT ? o.exp `OABBaJePefeeFbMKXTMHTcaWQOcOOIBBO` : o.exp `OABBaJePefeeFbMKXTMHTcaWQOccCcCcCC`,
                l = () => (0, o.trackExperiment)(E()),
                u = function(e, t) {
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    const n = (0, s.getRequestContext)().getVisitorCountry() || "";
                    if (!p(n, r)) return;
                    const i = "us" === n,
                        c = (0, a.jl)();
                    (0, o.trackExperimentStage)(E(), d.ON_VIEW), c ? (0, o.trackExperimentStage)(E(), d.GENIUS) : (0, o.trackExperimentStage)(E(), d.SIGNED_OUT), e && (0, o.trackExperimentStage)(E(), d.UPCOMING_BOOKING), i && (0, o.trackExperimentStage)(E(), d.US), t ? (0, o.trackExperimentStage)(E(), d.RECENT_SEARCHES) : (0, o.trackExperimentStage)(E(), d.WITHOUT_RECENT_SEARCHES)
                },
                _ = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    const t = (0, s.getRequestContext)().getVisitorCountry() || "";
                    p(t, e) && (0, o.trackExperimentStage)(O(), 1)
                },
                O = () => o.exp `OABBaJePefeeFbMKXTTXaJNVJIeNBLFcCcCcCC`,
                p = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return !!e && ((0, i.isFeatureRunning)(i.feature `aDMWaHYQPPIfIMLefPGLKHAUNSTXe`) ? !!t : c.includes(e))
                }
        },
        b52b592d: (e, t, r) => {
            r.d(t, {
                LR: () => c,
                QI: () => d,
                d: () => E
            });
            var n = r("af1e2b38"),
                s = r("dc6d28ff"),
                o = r("28dbd132");
            const i = ["us", "fr", "ee", "gr", "ae", "ua", "pl", "ph", "hr", "mx", "my", "bg", "co", "qa", "nz", "th", "lu", "rs", "in", "kw", "jp", "ch", "cl", "pe", "dk", "fi", "no", "ro", "se", "bh", "hk", "om", "id", "au", "sa", "at", "be", "de", "ie", "it", "nl", "es", "cz", "hu", "is", "pt", "kz", "za", "mo", "ca", "cy", "mt", "gb", "br", "kr", "sg", "vn"];
            let a = function(e) {
                return e[e.ON_VIEW = 1] = "ON_VIEW", e[e.SIGNED_OUT = 2] = "SIGNED_OUT", e[e.GENIUS = 3] = "GENIUS", e[e.UPCOMING_BOOKING = 4] = "UPCOMING_BOOKING", e[e.US = 5] = "US", e[e.WITH_RECENT_SEARCH = 6] = "WITH_RECENT_SEARCH", e[e.PPC_TRAFFIC = 7] = "PPC_TRAFFIC", e
            }({});
            const c = () => (0, n.Z6)().isMDOT ? o.exp `OABBaJePefeeFbMKXTMHTcAZTaYYfPHe` : o.exp `OABBaJePefeeFbMKXTMHTcAZTbaTaTaET`,
                d = (e, t) => {
                    var r;
                    const n = (0, s.getRequestContext)(),
                        d = n.getVisitorCountry();
                    if (!d || !i.includes(d)) return;
                    const E = "us" === d,
                        l = Boolean(null === (r = (0, s.getRequestContext)().getUnpackedGuestAccessToken()) || void 0 === r ? void 0 : r.authenticatorAssuranceLevel),
                        {
                            partnerChannelId: u
                        } = n.getAffiliate() ? ? {};
                    (0, o.trackExperimentStage)(c(), a.ON_VIEW), l ? (0, o.trackExperimentStage)(c(), a.GENIUS) : (0, o.trackExperimentStage)(c(), a.SIGNED_OUT), e && (0, o.trackExperimentStage)(c(), a.UPCOMING_BOOKING), E && (0, o.trackExperimentStage)(c(), a.US), t && (0, o.trackExperimentStage)(c(), a.WITH_RECENT_SEARCH), u && [4].includes(u) && (0, o.trackExperimentStage)(c(), a.PPC_TRAFFIC)
                },
                E = () => {
                    (0, o.trackExperiment)(c()) > 0 && (0, o.trackExperimentStage)(c(), 9)
                }
        },
        f55c806e: (e, t, r) => {
            r.d(t, {
                Ck: () => _,
                It: () => E,
                SE: () => d,
                Zn: () => O,
                dw: () => l,
                ef: () => u
            });
            var n = r("af1e2b38"),
                s = r("dc6d28ff"),
                o = r("28dbd132");
            const i = o.exp `OABBaJePebdSJeJMNIRHcADDbddLOLOLMO`;
            var a = function(e) {
                    return e[e.ON_RENDER = 1] = "ON_RENDER", e[e.ON_VIEW = 2] = "ON_VIEW", e[e.ON_VIEW_US = 3] = "ON_VIEW_US", e[e.ON_VIEW_UPCOMING_BOOKING = 4] = "ON_VIEW_UPCOMING_BOOKING", e
                }(a || {}),
                c = function(e) {
                    return e[e.ON_CLICK_SIMILAR_PROPERTY_CTA = 1] = "ON_CLICK_SIMILAR_PROPERTY_CTA", e[e.ON_CLICK_SIMILAR_PROPERTY = 2] = "ON_CLICK_SIMILAR_PROPERTY", e[e.ON_ERROR = 3] = "ON_ERROR", e
                }(c || {});
            const d = () => {
                    const {
                        isWWW: e
                    } = (0, n.Z6)();
                    return e && !!(0, o.trackExperiment)(i)
                },
                E = () => {
                    (0, o.trackExperimentStage)(i, a.ON_RENDER)
                },
                l = e => {
                    const t = "us" === (0, s.getRequestContext)().getVisitorCountry();
                    (0, o.trackExperimentStage)(i, a.ON_VIEW), t && (0, o.trackExperimentStage)(i, a.ON_VIEW_US), e && (0, o.trackExperimentStage)(i, a.ON_VIEW_UPCOMING_BOOKING)
                },
                u = () => {
                    (0, o.trackCustomGoal)(i, c.ON_CLICK_SIMILAR_PROPERTY)
                },
                _ = () => {
                    (0, o.trackCustomGoal)(i, c.ON_CLICK_SIMILAR_PROPERTY_CTA)
                },
                O = () => {
                    (0, o.trackCustomGoal)(i, c.ON_ERROR)
                }
        },
        cb8c5620: (e, t, r) => {
            r.d(t, {
                N: () => o,
                S: () => i
            });
            var n = r("28dbd132");
            const s = n.exp `OABBaJePebeMNEceMdAHEXMPCDWOOC`,
                o = () => (0, n.trackExperiment)(s),
                i = () => (0, n.trackExperimentStage)(s, 7)
        },
        "08034652": (e, t, r) => {
            r.d(t, {
                I: () => R
            });
            var n = r("ead71eb0"),
                s = r.n(n),
                o = r("28dbd132"),
                i = r.n(o),
                a = r("d16e9636"),
                c = r.n(a),
                d = r("fb62a8c9"),
                E = r("1ea8ff05"),
                l = r("b52b592d"),
                u = r("f55c806e"),
                _ = r("cb8c5620"),
                O = r("98f608d3"),
                p = r("e36d8828");
            const S = (0, a.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bGeniusVipWebComponentService-GeniusPlusProgramModeWelcomeSheet"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e("db12e271").then(r.t.bind(r, "bb0f3226", 23)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return "bb0f3226"
                    }
                }),
                N = (0, a.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bGeniusVipWebComponentService-GeniusPlusSheetsIndex"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e("9542972b").then(r.t.bind(r, "b329973c", 23)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return "b329973c"
                    }
                }),
                I = (0, a.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bIndexLpWebMfe-components-regions-SearchBoxLaunchpad"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e("76f450ac").then(r.bind(r, "d0cd4f15")),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return "d0cd4f15"
                    }
                }),
                T = (0, a.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bIndexLpWebMfe-components-MerchCarousel-MerchCarouselIndexPageByCampaignName"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e("d0625f39").then(r.bind(r, "76def127")),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return "76def127"
                    }
                }),
                C = (0, a.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bSearchWebSearchboxComponentService-SearchBoxMobileIndexPage"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!r.m[t]
                    },
                    importAsync: () => r.e("ec80d1a9").then(r.t.bind(r, "d08dd48d", 23)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return r(t)
                    },
                    resolve() {
                        return "d08dd48d"
                    }
                }),
                R = (e, t) => {
                    if (e === O.Z.SEARCH_BOX_MOBILE) {
                        if ((0, o.trackExperiment)((0, E.X3)()) || (0, o.trackExperiment)((0, l.LR)())) return I;
                        if ((0, _.N)()) return C
                    }
                    if (((0, o.trackExperiment)((0, E.X3)()) || (0, o.trackExperiment)((0, l.LR)())) && e === O.Z.SEARCH_BOX_DESKTOP_HORIZONTAL) return I;
                    if ((0, p.jl)()) {
                        if (e === O.Z.GENIUS_PLUS_SHEETS_INDEX) return N;
                        if (e === O.Z.GENIUS_PLUS_PROGRAM_MODE_WELCOME_SHEET) return S
                    }
                    const r = m(e);
                    return null !== r ? r : t
                },
                m = e => {
                    const t = e.split("/");
                    if (3 !== t.length || "MerchCarousel" !== t[1]) return null;
                    const r = t[t.length - 1];
                    return (0, u.SE)() && r === d._.SimilarPropertiesWww ? null : Object.keys(d._).includes(r) ? function() {
                        return s().createElement(T, {
                            campaignName: r
                        })
                    } : null
                }
        },
        e36d8828: (e, t, r) => {
            r.d(t, {
                CR: () => a,
                Tz: () => c,
                jl: () => i
            });
            var n = r("43a4d203"),
                s = r("dc6d28ff");
            const o = () => (0, s.getRequestContext)().getUnpackedGuestAccessToken(),
                i = () => {
                    var e;
                    const t = null === (e = o()) || void 0 === e ? void 0 : e.authenticatorAssuranceLevel;
                    return !!t && t >= n.AuthenticatorAssuranceLevel.AAL1
                },
                a = () => {
                    var e;
                    return !(null === (e = o()) || void 0 === e || !e.isMarketingTrackingAllowed)
                },
                c = () => !i()
        }
    }
]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/8e69b76c.aca07326.chunk.js.map