"use strict";
(self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] = self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] || []).push([
    ["9214bfa8", "1faad75c", "ec0bfbff"], {
        f3c8bee5: (e, t, n) => {
            n.d(t, {
                Z: () => i
            });
            var r = n("3d054e81"),
                o = n("af1e2b38"),
                d = n("5245e060"),
                s = n("ead71eb0"),
                a = n.n(s);
            const c = e => {
                    if ("number" === typeof e) return e;
                    return e[(0, o.sv)() || d.N.MDOT]
                },
                i = e => {
                    let {
                        queenMabId: t,
                        ...n
                    } = e;
                    return a().createElement("div", (0, r.Z)({}, n, {
                        "data-qmab-component-id": c(t)
                    }))
                }
        },
        af1e2b38: (e, t, n) => {
            n.d(t, {
                NM: () => r.N,
                sv: () => d,
                Z6: () => s
            });
            var r = n("5245e060"),
                o = n("dc6d28ff");
            const d = () => (0, o.getRequestContext)().getSiteType() ? ? r.N.WWW,
                s = () => {
                    const e = d();
                    return {
                        isWWW: e === r.N.WWW,
                        isMDOT: e === r.N.MDOT,
                        isTDOT: e === r.N.TDOT
                    }
                }
        },
        bf64f38b: (e, t, n) => {
            n.d(t, {
                Z: () => m
            });
            var r = n("ead71eb0"),
                o = n.n(r),
                d = n("f3c8bee5"),
                s = n("af1e2b38"),
                a = n("d16e9636"),
                c = n.n(a),
                i = n("52ffbfd1"),
                l = n("c23d1bb3");
            const u = (0, a.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bGeniusWebComponentService-GeniusBenefitsCarouselAccomodationsIndex"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e("ea2d6525").then(n.t.bind(n, "bf25e590", 23)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "bf25e590"
                    }
                }),
                b = {
                    MDOT: 1006,
                    WWW: 7
                },
                f = () => {
                    const {
                        isMDOT: e
                    } = (0, s.Z6)();
                    return e && (0, i.W$)() ? o().createElement(l.Z, null, o().createElement(u, null)) : o().createElement(d.Z, {
                        queenMabId: b
                    }, o().createElement(u, null))
                },
                m = f
        },
        "0b7e277a": (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => r
            });
            const r = n("bf64f38b").Z
        },
        c23d1bb3: (e, t, n) => {
            n.d(t, {
                Z: () => a
            });
            var r = n("3d054e81"),
                o = n("ead71eb0"),
                d = n.n(o),
                s = n("6222292b");
            const a = e => {
                let {
                    attributes: t,
                    ...n
                } = e;
                const o = { ...t,
                    style: { ...null === t || void 0 === t ? void 0 : t.style,
                        borderRadius: 0
                    }
                };
                return d().createElement(s.Card, (0, r.Z)({}, n, {
                    attributes: o
                }))
            }
        },
        "52ffbfd1": (e, t, n) => {
            n.d(t, {
                Bb: () => f,
                W$: () => a,
                XA: () => i,
                Y$: () => c,
                _0: () => b,
                zz: () => u
            });
            var r = n("af1e2b38"),
                o = n("28dbd132");
            const d = o.exp `OABBaJcBHQQWcGHVHNEIMUKVBBVYYT`,
                s = o.exp `OABBaJcBHQQWcGHVHNEIMUKALOLOLMO`,
                a = () => (0, o.trackExperiment)(d) > 0,
                c = () => (0, o.trackExperiment)(s) > 0,
                i = () => {
                    const {
                        isMDOT: e
                    } = (0, r.Z6)();
                    return e ? a() : c()
                },
                l = () => {
                    const {
                        isMDOT: e
                    } = (0, r.Z6)();
                    return e ? d : s
                },
                u = () => {
                    (0, o.trackCustomGoal)(l(), 1)
                },
                b = () => {
                    (0, o.trackCustomGoal)(l(), 2)
                },
                f = () => {
                    if ("undefined" === typeof window || "undefined" === typeof document) return;
                    const e = "js_index_queenmab_rendered_components_count",
                        t = i();
                    setTimeout((function() {
                        t ? n() : r()
                    }), 5e3);
                    const n = () => {
                            const t = Array.from(document.querySelectorAll("[data-widgetid]")).map((e => {
                                var t;
                                return (null === e || void 0 === e || null === (t = e.textContent) || void 0 === t ? void 0 : t.trim()) || ""
                            })).filter((e => e.length > 0)).length;
                            (0, o.trackGoalWithValue)(e, t)
                        },
                        r = () => {
                            const t = Array.from(document.querySelectorAll("[data-qmab-component-id]")).map((e => {
                                var t;
                                return (null === e || void 0 === e || null === (t = e.textContent) || void 0 === t ? void 0 : t.trim()) || ""
                            })).filter((e => e.length > 0)).length;
                            (0, o.trackGoalWithValue)(e, t)
                        }
                }
        }
    }
]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/9214bfa8.83b1e846.chunk.js.map