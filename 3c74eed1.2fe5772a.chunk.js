"use strict";
(self["b-native-display-ads-ndisplay-ad-component__LOADABLE_LOADED_CHUNKS__"] = self["b-native-display-ads-ndisplay-ad-component__LOADABLE_LOADED_CHUNKS__"] || []).push([
    ["3c74eed1"], {
        af1e2b38: (e, t, n) => {
            n.d(t, {
                NM: () => i.N,
                Z6: () => a
            });
            var i = n("3852a29f"),
                r = n("dc6d28ff");
            const s = () => (0, r.getRequestContext)().getSiteType() ? ? i.N.WWW,
                a = () => {
                    const e = s();
                    return {
                        isWWW: e === i.N.WWW,
                        isMDOT: e === i.N.MDOT,
                        isTDOT: e === i.N.TDOT
                    }
                }
        },
        d667183d: (e, t, n) => {
            n.d(t, {
                VG: () => i.VG,
                lO: () => i.lO
            });
            var i = n("13f79cb5")
        },
        d4871583: (e, t, n) => {
            n.d(t, {
                EF: () => a,
                jr: () => i,
                jx: () => N,
                k: () => c,
                kC: () => A,
                oR: () => o,
                qX: () => s,
                x9: () => r
            });
            const i = ["fluid"],
                r = "https://securepubads.g.doubleclick.net/tag/js/gpt.js",
                s = "https://pagead2.googlesyndication.com/tag/js/gpt.js";
            let a = function(e) {
                    return e.APAC = "apac", e.EMEA = "emea", e.LATAM = "latam", e.NORAM = "", e
                }({}),
                o = function(e) {
                    return e.INDEX = "index", e.SEARCHRESULTS = "searchresults", e.MARKETING = "marketing", e
                }({}),
                d = function(e) {
                    return e.ACCOMMODATIONS = "accommodations", e
                }({}),
                c = function(e) {
                    return e.INDEX_PRIMARY = "index-primary", e.INDEX_SECONDARY = "index-secondary", e.SR_POSITION_8 = "sr-position-8", e.SR_POSITION_16 = "sr-position-16", e.MARKETING_SR_PRIMARY = "sr-marketing-position-primary", e.MARKETING_SR_SECONDARY = "sr-marketing-position-secondary", e
                }({});
            const A = {
                    [c.INDEX_PRIMARY]: {
                        positionTag: c.INDEX_PRIMARY,
                        vertical: d.ACCOMMODATIONS,
                        pageName: o.INDEX,
                        partialAdUnitPath: "accommodations/index/index-primary"
                    },
                    [c.INDEX_SECONDARY]: {
                        positionTag: c.INDEX_SECONDARY,
                        vertical: d.ACCOMMODATIONS,
                        pageName: o.INDEX,
                        partialAdUnitPath: "accommodations/index/index-secondary"
                    },
                    [c.MARKETING_SR_PRIMARY]: {
                        positionTag: c.MARKETING_SR_PRIMARY,
                        vertical: d.ACCOMMODATIONS,
                        pageName: o.MARKETING,
                        partialAdUnitPath: "accommodations/searchresults/sr-marketing-position-primary"
                    },
                    [c.MARKETING_SR_SECONDARY]: {
                        positionTag: c.MARKETING_SR_SECONDARY,
                        vertical: d.ACCOMMODATIONS,
                        pageName: o.MARKETING,
                        partialAdUnitPath: "accommodations/searchresults/sr-marketing-position-secondary"
                    },
                    [c.SR_POSITION_8]: {
                        positionTag: c.SR_POSITION_8,
                        vertical: d.ACCOMMODATIONS,
                        pageName: o.SEARCHRESULTS,
                        partialAdUnitPath: "accommodations/searchresults/sr-position-8"
                    },
                    [c.SR_POSITION_16]: {
                        positionTag: c.SR_POSITION_16,
                        vertical: d.ACCOMMODATIONS,
                        pageName: o.SEARCHRESULTS,
                        partialAdUnitPath: "accommodations/searchresults/sr-position-16"
                    }
                },
                N = {
                    [o.INDEX]: ["index"],
                    [o.SEARCHRESULTS]: ["searchresults", "searchresults_irene"],
                    [o.MARKETING]: ["city"]
                }
        },
        "4def53d5": (e, t, n) => {
            n.d(t, {
                Ew: () => T,
                NN: () => R,
                _Z: () => A,
                s6: () => M
            });
            var i = n("d4871583"),
                r = n("af1e2b38"),
                s = n("dc6d28ff"),
                a = n("28dbd132"),
                o = n("239beb17"),
                d = n("13f79cb5"),
                c = n("5de62ff6");
            const A = {
                    [i.EF.APAC]: {
                        countries: (0, c.G9)(),
                        positions: [i.k.INDEX_PRIMARY, i.k.SR_POSITION_8]
                    },
                    [i.EF.EMEA]: {
                        countries: (0, c.nP)(),
                        positions: [i.k.INDEX_PRIMARY, i.k.SR_POSITION_8],
                        customRules: [() => {
                            const {
                                isWWW: e
                            } = (0, r.Z6)();
                            if (!e) return !0;
                            const {
                                geniusLevel: t
                            } = (0, c.ak)();
                            return ![2, 3].includes(t ? ? 0)
                        }]
                    },
                    [i.EF.LATAM]: {
                        countries: (0, c.k$)()
                    },
                    [i.EF.NORAM]: {
                        countries: (0, c.It)()
                    }
                },
                N = () => {
                    if ((0, d.iu)(A[i.EF.LATAM])) {
                        const e = a.exp `NVFVcfTbdNNRSIePfMPSXHUJXRDVMDTae`;
                        return 0 !== (0, a.trackExperiment)(e)
                    }
                    return !0
                },
                u = () => {
                    if ((0, d.iu)(A[i.EF.LATAM])) {
                        const e = a.exp `NVFVcfTbdNNRSIePfRdKdeKKe`;
                        return 0 !== (0, a.trackExperiment)(e)
                    }
                    return !0
                },
                E = () => !(0, d.iu)(A[i.EF.APAC]) || (0, o.isFeatureRunning)(o.feature `dVSQFUUZFOQeSMIUDBAWIWfbIYBAae`),
                O = () => !(0, d.iu)(A[i.EF.EMEA]) || (0, o.isFeatureRunning)(o.feature `dVSQFUUZFOQeSMIUDBADIKWEbWHQC`),
                T = {
                    [i.k.INDEX_PRIMARY]: [E, O],
                    [i.k.INDEX_SECONDARY]: [N],
                    [i.k.SR_POSITION_8]: [E, O],
                    [i.k.SR_POSITION_16]: [N],
                    [i.k.MARKETING_SR_PRIMARY]: [u],
                    [i.k.MARKETING_SR_SECONDARY]: [u]
                },
                R = [() => !(0, s.getRequestContext)().isRobotRequest(), () => {
                    var e;
                    return null === (e = (0, s.getRequestContext)().getAffiliate()) || void 0 === e ? void 0 : e.isBookingOwned
                }, () => [r.NM.WWW, r.NM.MDOT, r.NM.TDOT].includes((0, s.getRequestContext)().getSiteType() || r.NM.UNKNOWN)],
                M = e => {
                    var t;
                    return null === (t = Object.entries(A).find((t => {
                        let [n, i] = t;
                        return i.countries.includes(e)
                    }))) || void 0 === t ? void 0 : t[0]
                }
        },
        "13f79cb5": (e, t, n) => {
            n.d(t, {
                VG: () => o,
                iu: () => c,
                lO: () => d
            });
            var i = n("d4871583"),
                r = n("dc6d28ff"),
                s = n("41c6c66e"),
                a = n("4def53d5");
            const o = e => {
                    const {
                        adUnitDetails: t,
                        serviceName: n
                    } = e, r = a.Ew[t.positionTag].every((e => e())), s = Object.values(i.EF).some((e => d({
                        region: e,
                        adUnitDetails: t,
                        serviceName: n
                    })));
                    return A() && s && r
                },
                d = e => {
                    var t;
                    const {
                        region: n,
                        adUnitDetails: i,
                        serviceName: r
                    } = e, o = a._Z[n];
                    if (!o) return (0, s.reportWarning)(`Unsupported region "${n}" was passed to eligibility check`, r), !1;
                    const d = c(o, r),
                        N = A(),
                        u = !o.positions || o.positions.includes(i.positionTag),
                        E = !o.customRules || (null === (t = o.customRules) || void 0 === t ? void 0 : t.every((e => e())));
                    return N && d && u && E
                },
                c = (e, t) => {
                    const n = (0, r.getRequestContext)().getVisitorCountry();
                    return n ? e.countries.includes(n) : ((0, s.reportWarning)("Visitor country is missing in request context", t), !1)
                },
                A = () => a.NN.every((e => e()))
        },
        "5de62ff6": (e, t, n) => {
            n.d(t, {
                ak: () => R,
                G9: () => A,
                nP: () => N,
                BI: () => u,
                k$: () => c,
                It: () => O,
                H0: () => T
            });
            var i = n("dc6d28ff");
            let r = function(e) {
                    return e.AS = "AS", e.AU = "AU", e.BD = "BD", e.BN = "BN", e.BT = "BT", e.CC = "CC", e.CK = "CK", e.FJ = "FJ", e.FM = "FM", e.GU = "GU", e.HK = "HK", e.ID = "ID", e.IN = "IN", e.JP = "JP", e.KH = "KH", e.KI = "KI", e.KR = "KR", e.LA = "LA", e.LK = "LK", e.MM = "MM", e.MN = "MN", e.MO = "MO", e.MP = "MP", e.MV = "MV", e.MY = "MY", e.NF = "NF", e.NP = "NP", e.NU = "NU", e.NZ = "NZ", e.PG = "PG", e.PH = "PH", e.PW = "PW", e.SB = "SB", e.SG = "SG", e.TH = "TH", e.TL = "TL", e.TO = "TO", e.TV = "TV", e.TW = "TW", e.VN = "VN", e.VU = "VU", e.WS = "WS", e
                }({}),
                s = function(e) {
                    return e.AT = "AT", e.BE = "BE", e.BG = "BG", e.CY = "CY", e.CZ = "CZ", e.DE = "DE", e.DK = "DK", e.EE = "EE", e.ES = "ES", e.FI = "FI", e.FR = "FR", e.GR = "GR", e.HR = "HR", e.HU = "HU", e.IE = "IE", e.IT = "IT", e.LT = "LT", e.LU = "LU", e.LV = "LV", e.MT = "MT", e.NL = "NL", e.PL = "PL", e.PT = "PT", e.RO = "RO", e.SE = "SE", e.SI = "SI", e.SK = "SK", e
                }({}),
                a = function(e) {
                    return e.AG = "AG", e.AR = "AR", e.BB = "BB", e.BM = "BM", e.BO = "BO", e.BR = "BR", e.BS = "BS", e.BZ = "BZ", e.CL = "CL", e.CO = "CO", e.CR = "CR", e.DM = "DM", e.DO = "DO", e.EC = "EC", e.FK = "FK", e.GD = "GD", e.GT = "GT", e.GY = "GY", e.HN = "HN", e.JM = "JM", e.MX = "MX", e.NI = "NI", e.PA = "PA", e.PE = "PE", e.PR = "PR", e.PY = "PY", e.SV = "SV", e.TT = "TT", e.UY = "UY", e.VE = "VE", e
                }({}),
                o = function(e) {
                    return e.AD = "AD", e.AE = "AE", e.AL = "AL", e.AM = "AM", e.BA = "BA", e.CH = "CH", e.EG = "EG", e.GB = "GB", e.GE = "GE", e.IS = "IS", e.JO = "JO", e.KW = "KW", e.LI = "LI", e.MC = "MC", e.MD = "MD", e.ME = "ME", e.MK = "MK", e.MU = "MU", e.NO = "NO", e.OM = "OM", e.QA = "QA", e.RS = "RS", e.SA = "SA", e.SC = "SC", e.SM = "SM", e.TR = "TR", e.TZ = "TZ", e.VA = "VA", e.XK = "XK", e.ZA = "ZA", e
                }({});
            var d = function(e) {
                return e[e.NEW_USER = 1] = "NEW_USER", e[e.RETURNING = 2] = "RETURNING", e
            }(d || {});
            const c = () => Object.values(a).map((e => e.toLowerCase())),
                A = () => Object.values(r).map((e => e.toLowerCase())),
                N = () => [...u(), ...E()],
                u = () => Object.values(s).map((e => e.toLowerCase())),
                E = () => Object.values(o).map((e => e.toLowerCase())),
                O = () => ["us", "ca"],
                T = () => {
                    const e = (0, i.getRequestContext)().getVisitorCountry();
                    return void 0 === e || u().includes(e)
                },
                R = () => {
                    if ("undefined" !== typeof window) {
                        var e, t;
                        const n = null === (e = window) || void 0 === e || null === (e = e.B) || void 0 === e ? void 0 : e.env,
                            i = null === n || void 0 === n || null === (t = n.b_user_genius_status) || void 0 === t ? void 0 : t.b_genius_level,
                            r = null === n || void 0 === n ? void 0 : n.b_returning_status,
                            s = i ? Number(i) : null;
                        return {
                            isNew: r ? r === d.NEW_USER : null,
                            geniusLevel: s
                        }
                    }
                    return {
                        isNew: null,
                        geniusLevel: null
                    }
                }
        },
        "406f2355": (e, t, n) => {
            n.d(t, {
                Z: () => E
            });
            var i = n("ead71eb0"),
                r = n.n(i),
                s = n("ebca7d7d"),
                a = n("d4871583"),
                o = n("d667183d"),
                d = n("5de62ff6"),
                c = n("dc6d28ff"),
                A = n("239beb17"),
                N = n("826f1bad"),
                u = n("390896f3");
            const E = () => {
                const e = (0, c.getRequestContext)(),
                    t = null === e || void 0 === e ? void 0 : e.getActionName(),
                    n = (0, d.H0)() ? a.qX : a.x9;
                if ((0, i.useMemo)((() => {
                        if ("undefined" !== typeof document) {
                            const e = document.querySelector(`script[src="${n}"]`);
                            return e && e.parentElement !== document.head && document.head.appendChild(e), e
                        }
                        return !1
                    }), [n])) return null;
                if (!t) return (0, u.YV)("Invalid request context for GPTScriptLoader, missing action name"), null;
                if (!(0, A.isFeatureRunning)(A.feature `TFDYAHPePAZZOWCZTZWKNUTBNFecMEO`)) return null;
                const E = (e => Object.values(a.kC).filter((t => a.jx[t.pageName].includes(e))))(t),
                    O = E.some((e => (0, o.VG)({
                        adUnitDetails: e,
                        serviceName: N.m_
                    })));
                return O ? O && r().createElement(s.Helmet, null, r().createElement("script", {
                    src: n,
                    type: "text/javascript",
                    nonce: e.getCSPNonce(),
                    async: !0
                })) : null
            }
        },
        "826f1bad": (e, t, n) => {
            n.d(t, {
                Lo: () => o,
                U6: () => a,
                dC: () => d,
                dV: () => c,
                iE: () => i,
                ku: () => r,
                lW: () => A,
                m_: () => s
            });
            const i = "UNKNOWN",
                r = -1,
                s = "native-display-ads-ndisplay-ad-component",
                a = `[${s}]: `,
                o = "https://www.booking.com/bas/ndisplay/redirect",
                d = "3102",
                c = "use_internal_ad";
            const A = {
                nrAdults: 2,
                nrChildren: 0,
                childrenAges: [],
                nrRooms: 1,
                checkin: (new Date).toISOString().split("T")[0],
                checkout: new Date((new Date).getTime() + 864e5).toISOString().split("T")[0]
            }
        },
        "3b3d6474": (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => i.Z
            });
            var i = n("406f2355")
        },
        "390896f3": (e, t, n) => {
            n.d(t, {
                A6: () => o,
                JE: () => A,
                YV: () => d,
                vx: () => c
            });
            var i = n("dc6d28ff"),
                r = n("28dbd132"),
                s = n("41c6c66e"),
                a = n("826f1bad");
            const o = e => e.toUpperCase().replace(/-/g, "_"),
                d = e => {
                    (0, s.reportWarning)(`${a.U6}${e}`, a.m_)
                },
                c = () => {
                    const e = (0, i.getRequestContext)().getBasePageUrl().searchParams.get(a.dV),
                        t = (0, r.trackExperiment)(r.exp `NVFVcfTbdNNSHeRfAZKe`);
                    return "1" === e || 1 === t
                },
                A = () => {
                    var e;
                    return "undefined" !== typeof window && !0 === (null === (e = window.PCM) || void 0 === e ? void 0 : e.Marketing)
                }
        },
        "3852a29f": (e, t, n) => {
            var i, r;
            n.d(t, {
                    N: () => i,
                    p: () => r
                }),
                function(e) {
                    e.UNKNOWN = "UNKNOWN", e.WWW = "WWW", e.MDOT = "MDOT", e.TDOT = "TDOT", e.ANDROID = "ANDROID", e.IOS = "IOS", e.XML = "XML", e.MG_FAMILY = "MG_FAMILY", e.AFFILIATE_BASE = "AFFILIATE_BASE", e.EMK_FAMILY = "EMK_FAMILY", e.JOINAPP = "JOINAPP", e.PULSE = "PULSE", e.EXTRANET = "EXTRANET", e.CHAT2BOOK = "CHAT2BOOK"
                }(i || (i = {})),
                function(e) {
                    e[e.UNKNOWN = 0] = "UNKNOWN", e[e.WWW = 1] = "WWW", e[e.MDOT = 2] = "MDOT", e[e.TDOT = 3] = "TDOT", e[e.ANDROID = 4] = "ANDROID", e[e.IOS = 5] = "IOS", e[e.XML = 13] = "XML", e[e.MG_FAMILY = 15] = "MG_FAMILY", e[e.AFFILIATE_BASE = 22] = "AFFILIATE_BASE", e[e.EMK_FAMILY = 23] = "EMK_FAMILY", e[e.JOINAPP = 24] = "JOINAPP", e[e.PULSE = 27] = "PULSE", e[e.EXTRANET = 31] = "EXTRANET", e[e.CHAT2BOOK = 87] = "CHAT2BOOK"
                }(r || (r = {}))
        }
    }
]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/3c74eed1.2fe5772a.chunk.js.map