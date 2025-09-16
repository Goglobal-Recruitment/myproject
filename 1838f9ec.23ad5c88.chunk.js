"use strict";
(self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] = self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] || []).push([
    ["1838f9ec"], {
        72860289: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => h
            });
            var r = n("ead71eb0"),
                s = n.n(r),
                d = n("8521b397"),
                o = n.n(d),
                b = n("f3c8bee5"),
                i = n("af1e2b38"),
                c = n("d16e9636"),
                l = n.n(c),
                a = n("52ffbfd1"),
                u = n("c23d1bb3"),
                v = n("03a18e3b");
            const m = (0, c.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bGeniusWebComponentService-GeniusSignInBannerAccomodationsIndex"
                    },
                    isReady(e) {
                        const t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: () => n.e("1c6064b1").then(n.t.bind(n, "9e2355e4", 23)),
                    requireAsync(e) {
                        const t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((e => (this.resolved[t] = !0, e)))
                    },
                    requireSync(e) {
                        const t = this.resolve(e);
                        return n(t)
                    },
                    resolve() {
                        return "9e2355e4"
                    }
                }),
                f = {
                    WWW: 36,
                    MDOT: 1005
                },
                _ = () => {
                    const {
                        isMDOT: e
                    } = (0, i.Z6)(), t = e ? u.Z : "div", n = o()({
                        [v.Z.root]: !(0, a.XA)()
                    });
                    return (0, r.createElement)(t, {
                        className: n
                    }, s().createElement(b.Z, {
                        queenMabId: f
                    }, s().createElement(m, null)))
                },
                h = _
        },
        c23d1bb3: (e, t, n) => {
            n.d(t, {
                Z: () => b
            });
            var r = n("3d054e81"),
                s = n("ead71eb0"),
                d = n.n(s),
                o = n("6222292b");
            const b = e => {
                let {
                    attributes: t,
                    ...n
                } = e;
                const s = { ...t,
                    style: { ...null === t || void 0 === t ? void 0 : t.style,
                        borderRadius: 0
                    }
                };
                return d().createElement(o.Card, (0, r.Z)({}, n, {
                    attributes: s
                }))
            }
        },
        "03a18e3b": (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = {
                root: "bf5b091d1d"
            }
        }
    }
]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/1838f9ec.23ad5c88.chunk.js.map