"use strict";
(self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] = self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] || []).push([
    ["ab4d5cd6"], {
        dab80cc7: (e, s, _) => {
            _.r(s), _.d(s, {
                default: () => u
            });
            var t = _("ead71eb0"),
                r = _.n(t),
                i = _("6222292b"),
                a = _("5245e060"),
                c = _("dc6d28ff"),
                b = _("abab1afe"),
                n = _("c44dcb0c");
            const u = () => {
                const e = (0, n.useI18n)(),
                    s = (0, i.useToast)(),
                    _ = (0, c.getRequestContext)(),
                    {
                        searchParams: t
                    } = _.getBasePageUrl(),
                    u = _.getSiteType() === a.N.MDOT,
                    l = "1" === t.get("emk_subscription_conf"),
                    d = "1" === t.get("emk_subscription_link_expired"),
                    m = d ? (0, b.t)("emk_subscribe_verify_email_link_expired_header") : (0, b.t)("emk_subscribe_verify_success_message_header"),
                    f = d ? (0, b.t)("emk_subscribe_verify_email_link_expired_text") : (0, b.t)("emk_subscribe_verify_email_success_message_text"),
                    k = d ? (0, b.t)("emk_subscribe_verify_email_link_expired_text") : (0, b.t)("emk_subscribe_verify_success_message_header");
                if (l) {
                    if (!u) return r().createElement(i.Alert, {
                        bleed: !0,
                        variant: d ? "warning" : "success",
                        title: e.trans(m),
                        text: e.trans(f)
                    });
                    s.show({
                        text: e.trans(k)
                    })
                }
                return null
            }
        }
    }
]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/ab4d5cd6.7534a295.chunk.js.map