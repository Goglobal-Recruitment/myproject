"use strict";
(self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] = self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] || []).push([
    ["0554763f", "572dba2c", "1faad75c", "bf5d442e"], {
        af1e2b38: (e, t, n) => {
            n.d(t, {
                NM: () => r.N,
                sv: () => s,
                Z6: () => c
            });
            var r = n("5245e060"),
                a = n("dc6d28ff");
            const s = () => (0, a.getRequestContext)().getSiteType() ? ? r.N.WWW,
                c = () => {
                    const e = s();
                    return {
                        isWWW: e === r.N.WWW,
                        isMDOT: e === r.N.MDOT,
                        isTDOT: e === r.N.TDOT
                    }
                }
        },
        "358c1484": (e, t, n) => {
            n.d(t, {
                Z: () => E
            });
            var r = n("ead71eb0"),
                a = n.n(r),
                s = n("d16e9636"),
                c = n.n(s),
                i = n("1ea8ff05");
            const o = (0, s.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bWebShellComponents-AccommodationFooter"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e("d9890328").then(n.t.bind(n, "dafa106e", 23)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "dafa106e"
                    }
                }),
                d = () => a().createElement(o, {
                    shouldDisplayATOLBanner: (0, i.UR)() > 0
                }),
                E = d
        },
        de1ce391: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => r.Z
            });
            var r = n("358c1484")
        },
        "1ea8ff05": (e, t, n) => {
            n.d(t, {
                UR: () => u,
                W_: () => l,
                X3: () => E,
                o0: () => O
            });
            var r = n("af1e2b38"),
                a = n("dc6d28ff"),
                s = n("28dbd132"),
                c = n("239beb17"),
                i = n("e36d8828");
            const o = ["us", "fr", "ee", "gr", "ae", "ua", "pl", "ph", "hr", "mx", "my", "bg", "co", "qa", "nz", "th", "lu", "rs", "in", "kw", "jp", "ch", "cl", "pe", "dk", "fi", "no", "ro", "se", "bh", "hk", "om", "id", "au", "sa", "at", "be", "de", "ie", "it", "nl", "es", "cz", "hu", "is", "pt", "kz", "za", "mo", "ca", "cy", "mt", "gb", "br", "kr", "sg", "vn"];
            let d = function(e) {
                return e[e.RECENT_SEARCHES = 1] = "RECENT_SEARCHES", e[e.ON_VIEW = 3] = "ON_VIEW", e[e.SIGNED_OUT = 4] = "SIGNED_OUT", e[e.GENIUS = 5] = "GENIUS", e[e.UPCOMING_BOOKING = 6] = "UPCOMING_BOOKING", e[e.US = 8] = "US", e[e.WITHOUT_RECENT_SEARCHES = 9] = "WITHOUT_RECENT_SEARCHES", e
            }({});
            const E = () => (0, r.Z6)().isMDOT ? s.exp `OABBaJePefeeFbMKXTMHTcaWQOcOOIBBO` : s.exp `OABBaJePefeeFbMKXTMHTcaWQOccCcCcCC`,
                u = () => (0, s.trackExperiment)(E()),
                l = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    const r = (0, a.getRequestContext)().getVisitorCountry() || "";
                    if (!S(r, n)) return;
                    const c = "us" === r,
                        o = (0, i.jl)();
                    (0, s.trackExperimentStage)(E(), d.ON_VIEW), o ? (0, s.trackExperimentStage)(E(), d.GENIUS) : (0, s.trackExperimentStage)(E(), d.SIGNED_OUT), e && (0, s.trackExperimentStage)(E(), d.UPCOMING_BOOKING), c && (0, s.trackExperimentStage)(E(), d.US), t ? (0, s.trackExperimentStage)(E(), d.RECENT_SEARCHES) : (0, s.trackExperimentStage)(E(), d.WITHOUT_RECENT_SEARCHES)
                },
                O = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    const t = (0, a.getRequestContext)().getVisitorCountry() || "";
                    S(t, e) && (0, s.trackExperimentStage)(f(), 1)
                },
                f = () => s.exp `OABBaJePefeeFbMKXTTXaJNVJIeNBLFcCcCcCC`,
                S = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return !!e && ((0, c.isFeatureRunning)(c.feature `aDMWaHYQPPIfIMLefPGLKHAUNSTXe`) ? !!t : o.includes(e))
                }
        },
        e36d8828: (e, t, n) => {
            n.d(t, {
                CR: () => i,
                Tz: () => o,
                jl: () => c
            });
            var r = n("43a4d203"),
                a = n("dc6d28ff");
            const s = () => (0, a.getRequestContext)().getUnpackedGuestAccessToken(),
                c = () => {
                    var e;
                    const t = null === (e = s()) || void 0 === e ? void 0 : e.authenticatorAssuranceLevel;
                    return !!t && t >= r.AuthenticatorAssuranceLevel.AAL1
                },
                i = () => {
                    var e;
                    return !(null === (e = s()) || void 0 === e || !e.isMarketingTrackingAllowed)
                },
                o = () => !c()
        }
    }
]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/0554763f.a3373cf9.chunk.js.map