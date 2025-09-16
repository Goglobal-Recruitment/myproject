/*! For license information please see c62ef267.12e88f81.chunk.js.LICENSE.txt */
(self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] = self["b-index-lp-web-mfe__LOADABLE_LOADED_CHUNKS__"] || []).push([
    ["c62ef267", "572dba2c", "1faad75c", "72fdb30a", "bf5d442e", "1d36ff76"], {
        d0989236: (e, n, t) => {
            "use strict";
            t.d(n, {
                B: () => a
            });
            var i = t("dc6d28ff");

            function a() {
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
                        var n;
                        return null === e || void 0 === e || null === (n = e.getBasePageUrl()) || void 0 === n || null === (n = n.host) || void 0 === n ? void 0 : n.endsWith("booking.cn")
                    }
                }
            }
        },
        "22b0f37c": (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => m
            });
            var i = t("3d054e81"),
                a = t("ead71eb0"),
                r = t.n(a);
            const d = function() {
                return a.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 121 32"
                }, a.createElement("g", {
                    fill: "none"
                }, a.createElement("path", {
                    fill: "#fff",
                    d: "m115.546514 25.2308571c0 .6226286-.299657 1.1181715-.905828 1.4864-.602743.3650286-1.398857.5492572-2.381257.5492572-1.1824 0-2.194743-.2813714-3.037486-.8470857-.842514-.5659429-1.432-1.2857143-1.771886-2.1629715-.1664-.4219428-.462857-.5357714-.885714-.3380571l-3.204114 1.4395429c-.4496.2009142-.576.5090285-.379658.9341714.646172 1.5837714 1.765258 2.8893714 3.353829 3.9206857 1.5888 1.0310857 3.603657 1.5467429 6.051657 1.5467429 2.361143 0 4.356114-.6059429 5.988114-1.8212572 1.628572-1.2153143 2.444572-2.8694857 2.444572-4.9586286 0-3.4485257-2.417829-5.58464-7.253714-6.4015771-1.771886-.31136-3.040915-.6595657-3.816915-1.0378971-.772571-.3816915-1.158857-.8705143-1.158857-1.4631315 0-.5089143.303086-.9140343.905829-1.2086628.606171-.2979886 1.415543-.4453029 2.424685-.4453029 1.631772 0 3.050743.6361372 4.259658 1.9084114.336228.3381715.676114.3816915 1.012342.1272458l2.278172-2.11936c.392914-.3113829.436343-.6528915.126628-1.0178286-1.771885-2.1762743-4.373028-3.2644114-7.803428-3.2644114-2.444572 0-4.399543.5591314-5.858286 1.6740571-1.462171 1.1149257-2.194743 2.6215771-2.194743 4.5132571 0 1.5836572.582629 2.9061486 1.751772 3.96416 1.165714 1.0613486 2.747657 1.7744915 4.742628 2.1427886 1.968229.36496 3.343772.7601372 4.133029 1.18528.786057.4251429 1.178971.9876572 1.178971 1.6941714z"
                }), a.createElement("path", {
                    fill: "#fff",
                    d: "m82.0909714 23.7168c0 2.5412571.6893715 4.5433143 2.0649143 5.9965714 1.3787429 1.4562286 3.2473143 2.1828572 5.6086857 2.1828572.8992 0 1.7218286-.1204572 2.4678857-.3581715.7458286-.2411428 1.3220572-.5024 1.7284572-.7869714.4061714-.2811428.8925714-.6761143 1.4553143-1.1851428l.5062857 1.2288c.1666286.3949714.4930286.5926857.9691428.5926857h3.4571429c.4496 0 .676114-.2244572.676114-.6763429v-19.2885714c0-.4519772-.226514-.6796572-.676114-.6796572h-4.2596571c-.4496 0-.6729143.22768-.6729143.6796572v13.1413714c-1.0690286 1.5536-2.4745143 2.3302857-4.2162286 2.3302857-1.0957714 0-1.9483429-.3515428-2.5513143-1.0580571-.6061714-.7065143-.9058286-1.6404572-.9058286-2.7990857v-11.6145143c0-.4519772-.2397714-.6796572-.7193142-.6796572h-4.2164572c-.4763428 0-.7161143.22768-.7161143.6796572z"
                }), a.createElement("path", {
                    fill: "#febb02",
                    d: "m72.7899429 4.10043429c0 1.10098285.3952 2.04852571 1.1890285 2.84262857.7940572.79026285 1.7414857 1.18923428 2.8425143 1.18923428 1.1008 0 2.0482286-.39897143 2.8422857-1.18923428.7901715-.79410286 1.1890286-1.74164572 1.1890286-2.84262857 0-1.10100572-.3988571-2.048544-1.1890286-2.84264-.7940571-.794096-1.7414857-1.1892256-2.8422857-1.1892256-1.1010286 0-2.0484571.3951296-2.8425143 1.1892256-.7938285.794096-1.1890285 1.74163428-1.1890285 2.84264z"
                }), a.createElement("g", {
                    fill: "#fff"
                }, a.createElement("path", {
                    d: "m74.0096 30.5380571c0 .4518858.2365714.6763429.7161143.6763429h4.2162286c.4797714 0 .7161142-.2244571.7161142-.6763429v-19.2885028c0-.452-.2363428-.67968-.7161142-.67968h-4.2162286c-.4795429 0-.7161143.22768-.7161143.67968z"
                }), a.createElement("path", {
                    d: "m71.7677714 17.4330286c0-2.3470172-.6395428-4.1616915-1.9184-5.4473829-1.2788571-1.2856686-3.1008-1.9285028-5.4619428-1.9285028-2.1348572 0-4.1033143.7901485-5.9017143 2.3738057l-.5494857-1.1885715c-.1398857-.4218742-.4496-.6361371-.9259429-.6361371h-3.4603428c-.4763429 0-.7161143.2276571-.7161143.6796571v19.2885029c0 .4518857.2397714.6763429.7161143.6763429h4.2164571c.4795429 0 .7193143-.2244572.7193143-.6763429v-13.1848914c.4196571-.5658286 1.0258286-1.0881372 1.8118857-1.5669257.7858286-.4821258 1.5753143-.7231772 2.3611429-.7231772 2.3346285 0 3.5003428 1.2722743 3.5003428 3.8168457v11.6581486c0 .4518857.2265143.6763429.6761143.6763429h4.2564571c.4496 0 .6761143-.2244572.6761143-.6763429z"
                }), a.createElement("path", {
                    d: "m50.9942857 21.7554514c0 .452-.2233143.6796572-.6729143.6796572h-14.5074285c.3097142 1.2990628.9225142 2.3436343 1.8349714 3.1372343.9126857.7901714 2.0749714 1.1851428 3.4804571 1.1851428 1.9115429 0 3.3702857-.7901714 4.3828572-2.3737143.1698285-.2544.4363428-.2946285.8027428-.1273143l3.6267429 1.5268572c.4196571.1405714.5195428.3949714.2930286.7632-2.0514286 3.4754286-5.0854858 5.2130286-9.1053715 5.2130286-3.0374857 0-5.6153143-1.0178286-7.7401143-3.0500572-2.1216-2.0356571-3.184-4.6372571-3.184-7.80112 0-3.1639543 1.0557715-5.76544 3.1641143-7.8010971 2.1081143-2.0322972 4.5958857-3.0501257 7.4635429-3.0501257 3.1773714 0 5.6651428.9810057 7.4635428 2.9463314 1.7986286 1.9620114 2.6978286 4.4295543 2.6978286 7.3959771zm-6.9974857-5.9127771c-.9024-.6629257-1.9549714-.9943772-3.1638857-.9943772-1.2356572 0-2.2713143.31472-3.1008.9508572-.8292572.6361371-1.4253714 1.4631314-1.7917714 2.48096h9.6985142c-.1965714-.9609143-.7428571-1.7745143-1.6420571-2.43744z"
                }), a.createElement("path", {
                    d: "m28.3577143 26.8957714c0 .4032-.1746286.7794286-.4905143 1.0416-2.9492571 2.3581715-6.792 3.7826286-10.9774171 3.7826286-9.30468576 0-16.85591021-7.0548571-16.85591021-15.7423314 0-8.69426289 7.55122445-15.9776686 16.85591021-15.9776686 4.1786971 0 8.0080457 1.42440686 10.9506742 3.78274286.1410286.11421714.2283429.27547428.2418286.45017143.0201143.18139428-.0336.35609142-.1478857.49718857-.7524571.90704-2.3177143 2.79506285-3.0902857 3.72226285-.1142857.14109715-.2822857.22845715-.4635429.24187429-.1814857.01344-.3561143-.04701714-.4905143-.16123429-1.8541485-1.57222857-4.3062857-2.52630857-7.0002742-2.52630857-5.7574858 0-10.42660576 4.59583996-10.42660576 9.97097146 0 5.3751085 4.66911996 9.7423314 10.42660576 9.7423314 2.2371428 0 4.3063542-.6582857 6.0059885-1.7803429v-4.3539428s-3.4396571 0-4.9310857 0c-.1746743 0-.3493486-.0672-.4769828-.1948572-.1209372-.1276571-.1948343-.2956342-.1948343-.4770285 0-1.06832 0-3.1511772 0-4.2194743 0-.1814172.0738971-.3493714.1948343-.4770514.1276342-.1209372.3023085-.1948343.4769828-.1948343h9.7212572c.3693714 0 .6717714.3023543.6717714.6718857z"
                }))))
            };
            const o = function() {
                return a.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 121 32"
                }, a.createElement("g", {
                    fill: "none"
                }, a.createElement("path", {
                    fill: "#004cb8",
                    d: "m115.594598 25.2307874c0 .6227491-.299956 1.1182695-.906535 1.4865619-.603245.3649442-1.399796.5490905-2.382987.5490905-1.183161 0-2.196347-.2812414-3.039557-.8470725-.843211-.5658308-1.433125-1.285675-1.773076-2.1628804-.166642-.4218622-.463266-.5356981-.886538-.3381594l-3.2062 1.4396883c-.449935.2008866-.576583.5089131-.379945.9341232.646573 1.5836571 1.76641 2.889421 3.356179 3.9206395s3.606142 1.5468279 6.055786 1.5468279c2.362989 0 4.359366-.6060085 5.992462-1.821373 1.629762-1.2153648 2.44631-2.8693324 2.44631-4.9585543 0-3.4485556-2.419648-5.5846512-7.258944-6.4015906-1.773075-.3113744-3.042891-.6595781-3.819444-1.0379148-.773221-.3816848-1.159832-.8705092-1.159832-1.4631251 0-.508913.303289-.9140346.906535-1.2086685.606579-.297982 1.416461-.4452989 2.426314-.4452989 1.633096 0 3.052889.6361413 4.262713 1.908424.336618.3381593.676569.3816848 1.013186.1272282l2.279669-2.119355c.393276-.3113744.436603-.6528819.126648-1.0178261-1.773076-2.176273-4.37603-3.2644094-7.808864-3.2644094-2.446311 0-4.402694.5591347-5.862481 1.6740561-1.463121 1.1149213-2.196347 2.6215719-2.196347 4.5132553 0 1.583657.583248 2.9061614 1.753078 3.9641648 1.166497 1.0613516 2.7496 1.7744995 4.745976 2.1427919 1.969714.3649442 3.34618.7600215 4.136066 1.1852317.786552.4252103 1.179828.9876931 1.179828 1.6941447z"
                }), a.createElement("path", {
                    fill: "#004cb8",
                    d: "m82.1153119 23.716792c0 2.5412171.6898997 4.5433883 2.0663662 5.996469 1.3797994 1.4564288 3.2495273 2.1829692 5.6125171 2.1829692.8998692 0 1.7230827-.1205319 2.4696408-.358248.7465581-.241064 1.323141-.5022167 1.7297483-.7868064.4066076-.2812414.8932035-.6763187 1.4564551-1.1852318l.5065929 1.2287573c.1666424.3950772.4932616.592616.9698589.592616h3.4594968c.449935 0 .676568-.2243237.676568-.6763189v-19.2884745c0-.4519951-.226633-.6796668-.676568-.6796668h-4.2627133c-.4499345 0-.6732353.2276717-.6732353.6796668v13.1413406c-1.0698445 1.5535241-2.4763067 2.3302861-4.2193865 2.3302861-1.0965072 0-1.9497164-.3515517-2.552962-1.0580036-.6065785-.7064517-.9065348-1.6405749-.9065348-2.7990217v-11.6146014c0-.4519951-.2399652-.6796668-.7198953-.6796668h-4.2193864c-.4765973 0-.7165625.2276717-.7165625.6796668z"
                }), a.createElement("path", {
                    fill: "#febb02",
                    d: "m0 4.03185943c0 1.100993.39536721 2.04853751 1.18994015 2.84263351.79457294.79025979 1.74268653 1.18922589 2.8443408 1.18922589 1.10165426 0 2.04976788-.3989661 2.84434082-1.18922589.79073441-.794096 1.18994014-1.74164051 1.18994014-2.84263351 0-1.10099301-.39920573-2.04853753-1.18994014-2.84263353-.79457294-.794096-1.74268656-1.1892259-2.84434082-1.1892259-1.10165427 0-2.04976786.3951299-2.8443408 1.1892259s-1.18994015 1.74164052-1.18994015 2.84263353z",
                    transform: "translate(72.808 .069)"
                }), a.createElement("path", {
                    fill: "#004cb8",
                    d: "m1.22053066 30.4694485c0 .4519952.23663225.6763188.71656245.6763188h4.21938636c.4799302 0 .71656246-.2243236.71656246-.6763188v-19.2884745c0-.4519952-.23663226-.6796668-.71656246-.6796668h-4.21938636c-.4799302 0-.71656245.2276716-.71656245.6796668z",
                    transform: "translate(72.808 .069)"
                }), a.createElement("g", {
                    fill: "#004cb8"
                }, a.createElement("path", {
                    d: "m71.7846736 17.4330341c0-2.3470267-.639907-4.1617035-1.9197208-5.4473786-1.279814-1.2856751-3.1028821-1.9285126-5.4658719-1.9285126-2.1363559 0-4.1060694.7901544-5.9058076 2.3738115l-.54992-1.1885798c-.1399797-.4218621-.4499348-.6361413-.926532-.6361413h-3.4628297c-.4765973 0-.7165625.2276716-.7165625.6796667v19.2884746c0 .4519952.2399652.6763187.7165625.6763187h4.2193864c.4799301 0 .7198953-.2243235.7198953-.6763187v-13.184866c.4199389-.5658309 1.0265174-1.0881364 1.8130695-1.5669165.7865524-.4821281 1.5764374-.7231922 2.3629898-.7231922 2.3363268 0 3.502824 1.2722826 3.502824 3.8168479v11.6581268c0 .4519952.2266337.6763187.6765682.6763187h4.2593804c.4499345 0 .6765684-.2243235.6765684-.6763187z"
                }), a.createElement("path", {
                    d: "m50.3232223 22.4351138c.4499347 0 .6732355-.2276717.6732355-.6796668v-1.3559855c0-2.9664274-.8998692-5.4339861-2.6996074-7.3959799-1.7997383-1.9653419-4.2893762-2.9463387-7.4689137-2.9463387-2.8695828 0-5.3592207 1.0178261-7.468914 3.0501302-2.1096931 2.0356522-3.1662061 4.6371354-3.1662061 7.8011015 0 3.163966 1.0631788 5.7654492 3.1862034 7.8011015 2.1263574 2.032304 4.7059821 3.0501303 7.74554 3.0501303 4.0227484 0 7.0589735-1.7376704 9.1120082-5.2130107.2266337-.3682924.1266483-.6227491-.2932905-.7633696l-3.6294723-1.5267392c-.3666133-.1674058-.6332413-.1272284-.8032166.1272283-1.0131858 1.5836569-2.4729735 2.3738114-4.3860288 2.3738114-1.4064621 0-2.5696262-.3950772-3.4828267-1.1852317-.9132005-.7935027-1.5264447-1.8381136-1.8363996-3.1371811zm-9.4952856-7.5868223c1.2098241 0 2.2630042.3314631 3.166206.9943893.8998693.6629262 1.4464565 1.4765175 1.6430945 2.4374257h-9.7052552c.3666133-1.0178261.9631932-1.8448098 1.7930725-2.4809512.8298793-.6361413 1.8663953-.9508638 3.1028822-.9508638z"
                }), a.createElement("path", {
                    d: "m28.3439154 26.8958695c0 .4031337-.1747965.779392-.4907747 1.041429-2.9513707 2.3583324-6.7968924 3.7827383-10.9852841 3.7827383-9.31127197 0-16.8678566-7.0548407-16.8678566-15.7423732 0-8.69425139 7.55658463-15.9776636 16.8678566-15.9776636 4.1816688 0 8.0137446 1.42440595 10.9583924 3.78273842.1411816.11422124.22858.27547475.2420258.45016604.0201688.18141019-.0336146.35610148-.1479047.49719831-.7529693.90705094-2.3194143 2.79506073-3.0925523 3.72226836-.1142901.14109682-.2823635.22844247-.4638829.24188025-.1815195.01343781-.356316-.04703227-.4907747-.16125351-1.8555315-1.57222164-4.3094046-2.52630486-7.0053036-2.52630486-5.7615596 0-10.43400295 4.59585379-10.43400295 9.97097059s4.67244335 9.7423993 10.43400295 9.7423993c2.2387391 0 4.3094046-.6584519 6.0103085-1.7805075v-4.3538447s-3.4421454 0-4.934638 0c-.1747965 0-.3495929-.0671889-.4773288-.194848-.1210129-.127659-.1949653-.2956314-.1949653-.4770416 0-1.0683044 0-3.1511622 0-4.2194666 0-.1814102.0739524-.3493826.1949653-.4770417.1277359-.1209401.3025323-.1948479.4773288-.1948479h9.7280942c.3697618 0 .6722941.3023503.6722941.6718896z"
                }))))
            };
            var s = t("6222292b"),
                l = t("abab1afe"),
                c = t("c44dcb0c"),
                u = t("43bedd84");
            const m = e => {
                let {
                    inverted: n = !1,
                    ariaLabel: t,
                    size: a,
                    ...m
                } = e;
                const {
                    trans: v
                } = (0, c.useI18n)();
                return r().createElement(s.Icon, (0, i.Z)({
                    ariaLabel: t || v((0, l.t)("www_ge_screenreader_generic_logo", {
                        variables: {
                            b_companyname: u.p
                        }
                    })),
                    size: a || "small"
                }, m, {
                    svg: n ? d : o
                }))
            }
        },
        b6ea4fe7: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => S
            });
            var i = t("6222292b"),
                a = t("c44dcb0c"),
                r = t("8521b397"),
                d = t.n(r),
                o = t("ead71eb0"),
                s = t.n(o),
                l = t("22b0f37c");
            const c = "f4573fc8f3",
                u = "dc771078ca",
                m = "cadf397024",
                v = "f31e90f6f5",
                g = "e29b5bda7f";
            var _ = t("43bedd84");

            function k(e) {
                let {
                    ctaURL: n,
                    ctaNewWindow: t,
                    children: a,
                    className: r
                } = e;
                return s().createElement(i.Link, {
                    className: r,
                    text: a,
                    href: n,
                    attributes: {
                        target: t ? "_blank" : ""
                    }
                })
            }
            const S = e => {
                let {
                    className: n = "",
                    ctaURL: t,
                    ctaNewWindow: r = !1,
                    size: o = "small",
                    inverted: S = !1
                } = e;
                return s().createElement("div", {
                    className: d()([n, c])
                }, s().createElement(i.Text, {
                    color: "neutral_alt",
                    className: d()(m, {
                        [v]: S
                    }),
                    variant: "body_2"
                }, t ? s().createElement(a.Trans, {
                    tag: "web_ge_generic_signature_with_link",
                    variables: {
                        b_companyname: _.p,
                        start_link: "<0>",
                        end_link: "</0>"
                    },
                    components: [s().createElement(k, {
                        className: d()({
                            [g]: S
                        }),
                        key: t,
                        ctaURL: t,
                        ctaNewWindow: r
                    })]
                }) : s().createElement(a.Trans, {
                    tag: "web_ge_generic_signature_without_link",
                    variables: {
                        b_companyname: _.p
                    }
                })), s().createElement(l.Z, {
                    inverted: S,
                    size: o,
                    className: u
                }))
            }
        },
        84451606: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => c
            });
            var i = t("ead71eb0"),
                a = t.n(i),
                r = t("6222292b");
            const d = "abb411a687",
                o = "f45d6fffc8",
                s = "fd814929a2",
                l = e => {
                    let {
                        buttons: n,
                        onCloseAction: t
                    } = e;
                    return a().createElement(r.Stack, {
                        className: d,
                        gap: 2
                    }, n.map((e => {
                        let {
                            text: n,
                            url: i,
                            variant: d,
                            ariaLabel: o,
                            onClickHandler: s
                        } = e;
                        return a().createElement(r.Button, {
                            key: n,
                            text: n,
                            href: i,
                            variant: d,
                            size: "large",
                            attributes: {
                                "aria-label": o,
                                "data-testid": "context-modal-content-cta"
                            },
                            preventDefault: !1,
                            onClick: s ? () => s({
                                closeContextSheet: t
                            }) : void 0
                        })
                    })))
                },
                c = e => {
                    let {
                        contentItems: n,
                        buttons: t,
                        onCloseAction: i
                    } = e;
                    return a().createElement(r.Stack, {
                        className: o,
                        direction: "column",
                        alignItems: "start",
                        justifyContent: "start"
                    }, n.map(((e, n) => "list" === e.type ? a().createElement(r.List, {
                        key: n,
                        attributes: {
                            "data-testid": "context-modal-content-list"
                        },
                        variant: "unordered",
                        rowSpacing: "small",
                        className: s
                    }, e.items.map((e => a().createElement(r.Text, {
                        key: e.text
                    }, e.text)))) : a().createElement(r.Text, {
                        variant: "body_1",
                        key: n
                    }, e.text))), t && a().createElement(l, {
                        buttons: t,
                        onCloseAction: i
                    }))
                }
        },
        30190550: (e, n, t) => {
            "use strict";
            t.d(n, {
                au: () => o,
                L4: () => s,
                wd: () => d
            });
            var i = t("dc6d28ff"),
                a = t("af1e2b38");
            const r = /^(b_feature_.*|exp_.*|i_am_from)$/;
            const d = function(e) {
                var n;
                const t = (0, i.getRequestContext)(),
                    d = t.getBPlatformEnvironment(),
                    o = !(!d || "prod" !== d),
                    s = t.getBasePageUrl(),
                    l = t.getEncryptedCommonOauthState(),
                    c = null === (n = t.getAffiliate()) || void 0 === n ? void 0 : n.id,
                    u = t.getLanguage(),
                    m = t.getActionName(),
                    v = t.isInternalIp(),
                    {
                        isMDOT: g
                    } = (0, a.Z6)(),
                    {
                        componentId: _,
                        iframe: k,
                        experiments: S,
                        customParams: p,
                        devHosts: N
                    } = e,
                    E = null === s || void 0 === s ? void 0 : s.host.endsWith("booking.cn"),
                    f = p || {},
                    h = `https://${function(e,n,t){return e?"account.booking."+(n?"cn":"com"):t&&t.ap?t.ap:"account.dqs.booking.com"}(o,E,N)}/auth/oauth2`,
                    I = `https://${function(e,n,t){return e?"secure.booking."+(n?"cn":"com"):t&&t.book?t.book:"book.dqs.booking.com"}(o,E,N)}/login.html?op=oauth_return`,
                    T = new URL(h),
                    A = function(e) {
                        return e ? "vO1Kblk7xX9tUn2cpZLS" : "b_test_fe"
                    }(o);
                ((e, n, t, i) => {
                    e.searchParams.set("client_id", i), e.searchParams.set("redirect_uri", t), e.searchParams.set("response_type", n.anon ? "anon_session" : "code")
                })(T, e, I, A), k && (T.searchParams.set("iframe", g ? "2" : "1"), f.iframe = g ? "2" : "1"), ((e, n, t, i, a) => {
                    t && e.searchParams.set("lang", t), i && e.searchParams.set("aid", i.toString()), a && e.searchParams.set("bkng_action", a), n.popup && e.searchParams.set("popup", "1"), n.prompt && e.searchParams.set("prompt", n.prompt), n.experimentVariant && e.searchParams.set("variant", n.experimentVariant.toString()), n.canShowGeniusMessaging && e.searchParams.set("genius", "1")
                })(T, e, u, c, m), o && !v || function(e, n) {
                    n.searchParams.forEach(((n, t) => {
                        r.test(t) && e.searchParams.set(t, n)
                    }))
                }(T, s);
                const b = {
                    id: _
                };
                if (S && (b.data = function(e) {
                        const n = {};
                        return Object.keys(e).forEach((t => {
                            var i, a, r, d;
                            const o = {};
                            null !== (i = e[t]) && void 0 !== i && i.variant && (o.v = e[t].variant), null !== (a = e[t]) && void 0 !== a && a.auth_request_goal && (o.g1 = e[t].auth_request_goal), null !== (r = e[t]) && void 0 !== r && r.auth_page_loaded_goal && (o.g2 = e[t].auth_page_loaded_goal), null !== (d = e[t]) && void 0 !== d && d.auth_page_interaction_goal && (o.g3 = e[t].auth_page_interaction_goal), n[t] = o
                        })), n
                    }(S)), Object.keys(f).length && (b.params = f), l) {
                    const e = function(e, n) {
                        try {
                            let t;
                            const i = JSON.stringify(n);
                            return t = btoa(i), `${e}*${t}`
                        } catch (t) {
                            return `${e}*`
                        }
                    }(l, b);
                    e && T.searchParams.set("state", e)
                }
                return T.toString()
            };
            let o = function(e) {
                    return e.BP_AUTH_CHECKBOX = "bp_auth_checkbox", e.BP_AUTH_CHECKBOX_GENIUS = "bp_auth_checkbox_genius", e.BP_AUTH_CHECKBOX_GENIUS_MDOT = "bp_auth_checkbox_genius_mdot", e.BP_AUTH_CHECKBOX_MDOT = "bp_auth_checkbox_mdot", e.BP_GENIUS_INLINE = "bp_genius_inline", e.BP_GENIUS_INLINE_MDOT = "bp_genius_inline_mdot", e.BP_INLINE = "bp_inline", e.BP_INLINE_MDOT = "bp_inline_mdot", e.BS2_AUTH_LOW = "bs2_auth_low", e.BS2_AUTH_LOW_MDOT = "bs2_auth_low_mdot", e.CARS_INDEX_LP = "cars_index_lp", e.CBCC_LANDING_PAGE = "cbcc_landing_page", e.CO_BRAND_PRODUCTS_SIGNUP = "co_brand_products_signup", e.GENIUSVIP_ENROLLMENT = "geniusvip_enrollment", e.GENIUS_INDEX_BANNER = "genius_index_banner", e.GENIUS_INDEX_CAROUSEL = "genius_index_carousel", e.GENIUS_INDEX_SHEET = "genius_index_sheet", e.GENIUS_LANDING_PAGE = "genius_landing_page", e.GENIUS_LANDING_PAGE_INCENTIVE_CAMPAIGN = "genius_lp_incentive_campaign", e.GENIUS_ROOM_TABLE_BANNER_MDOT = "genius_rt_mdot_banner", e.GENIUS_ROOM_TABLE_BANNER_WWW = "genius_room_table_banner_www", e.GENIUS_SEARCHRESULTS_SHEET = "genius_searchresults_sheet", e.GENIUS_SHEET = "genius_sheet", e.GENIUS_SIGN_IN_EMAIL_POPOVER = "genius_sign_in_email_popover", e.HELP_CENTER = "help_center", e.INDEX = "index", e.LANDING_PAGES = "landing_pages", e.LANDING_PAGES_HOLIDAYS = "landing_pages_holidays", e.LOGIN_CARD = "login_card", e.LOGIN_CARD_SOCIAL = "login_card_social", e.MEMBERSHIP_HUB_REDIRECT = "membership_hub_redirect", e.MERCH_PLATFORM_INDEX = "merch_platform_index", e.MERCH_PLATFORM_INDEX_CTA = "merch_platform_index_cta", e.MERCH_PLATFORM_PROPERTY_PAGE_CTA = "merch_platform_property_page_cta", e.MERCH_PLATFORM_SEARCH_RESULTS_PAGE_CTA = "merch_platform_search_results_page_cta", e.MERCH_PLATFORM_SR = "merch_platform_sr", e.PAYMENT_TRANSACTIONS = "payment_transactions", e.PROPERY_PAGE = "propery_page", e.REACT_SHELL_GOOGLE_ONE_TAP = "react_shell_google_one_tap", e.SEARCH_RESULTS = "search_results", e.SEARCH_RESULTS_MDOT_PROPERTY_LIST_CTA_MDOT = "search_results_mdot_property_list_cta", e.SEARCH_RESULTS_WWW_PROPERTY_LIST_CTA_MDOT = "search_results_www_property_list_cta", e.SELF_SERVICE_BANNER = "self_service_banner", e.TRAVELLER_HEADER = "traveller_header", e.WISHLIST_BTN = "wishlist_btn", e.WISHLIST_BTN_SR = "wishlist_btn_sr", e.WISHLIST_DETAILS = "wishlist_details", e
                }({}),
                s = function(e) {
                    return e.SIGN_IN = "signin", e.IFRAME_WITH_EMAIL = "iframe-with-email", e.REGISTER = "register", e.NONE = "none", e
                }({})
        },
        "77a90307": (e, n, t) => {
            "use strict";
            t.d(n, {
                C5: () => d,
                Wx: () => a,
                r8: () => r,
                sk: () => o
            });
            var i = t("dc6d28ff");
            const a = () => (0, i.getRequestContext)().getBPlatformEnvironment && "dqs" === (0, i.getRequestContext)().getBPlatformEnvironment(),
                r = () => (0, i.getRequestContext)().getBPlatformEnvironment && ("dev" === (0, i.getRequestContext)().getBPlatformEnvironment() || !(0, i.getRequestContext)().getBPlatformEnvironment());

            function d() {
                return "undefined" !== typeof window && "undefined" !== typeof window.document
            }

            function o() {
                return !d()
            }
        },
        af1e2b38: (e, n, t) => {
            "use strict";
            t.d(n, {
                NM: () => i.N,
                sv: () => r,
                Z6: () => d
            });
            var i = t("5245e060"),
                a = t("dc6d28ff");
            const r = () => (0, a.getRequestContext)().getSiteType() ? ? i.N.WWW,
                d = () => {
                    const e = r();
                    return {
                        isWWW: e === i.N.WWW,
                        isMDOT: e === i.N.MDOT,
                        isTDOT: e === i.N.TDOT
                    }
                }
        },
        c66f4a5f: (e, n, t) => {
            "use strict";
            t.d(n, {
                ZK: () => r
            });
            t("41c6c66e");
            var i = t("77a90307");
            const a = () => (0, i.r8)() || (0, i.Wx)(),
                r = function() {
                    if (a()) {
                        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                        const a = [(0, i.sk)() ? "[Server Warning]" : "[JS Warning]", ...n];
                        console.warn.apply(undefined, a)
                    }
                }
        },
        "43bedd84": (e, n, t) => {
            "use strict";
            t.d(n, {
                p: () => i
            });
            const i = "Booking.com"
        },
        "8ebe6081": (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => l
            });
            var i = t("ead71eb0"),
                a = t("96f91419"),
                r = t.n(a);
            const d = e => ("0" + e).slice(-2),
                o = e => Math.round(e / 1e3);

            function s(e) {
                let {
                    expiresAt: n,
                    hasSpaceBetween: t = !0
                } = e;
                const [a, r] = (0, i.useState)(o(n - Date.now()));
                if ((0, i.useEffect)((() => {
                        let e;
                        return isNaN(n) || (e = setInterval((() => {
                            const t = o(n - Date.now());
                            t < 0 ? clearInterval(e) : r(t)
                        }), 1e3)), () => {
                            clearInterval(e)
                        }
                    }), [n, r]), isNaN(n)) return null;
                const s = (e => {
                    let n = e;
                    (n < 0 || isNaN(n)) && (n = 0);
                    const t = Math.floor(n / 3600),
                        i = Math.floor((n - 60 * t * 60) / 60),
                        a = n - 60 * t * 60 - 60 * i;
                    return {
                        h: d(t),
                        m: d(i),
                        s: d(a)
                    }
                })(a);
                return t ? `${s.h} : ${s.m} : ${s.s}` : `${s.h}:${s.m}:${s.s}`
            }
            s.propTypes = {
                expiresAt: r().number.isRequired,
                hasSpaceBetween: r().bool
            };
            const l = s
        },
        "5a1ec528": (e, n, t) => {
            "use strict";
            t.d(n, {
                G: () => v
            });
            var i = t("ead71eb0"),
                a = t.n(i),
                r = t("41c6c66e"),
                d = t.n(r),
                o = t("1c2dbfc7"),
                s = t("e6589e94"),
                l = t("d16e9636"),
                c = t.n(l),
                u = t("4e9c30ec");
            const m = (0, l.loadable)({
                    resolved: {},
                    chunkName() {
                        return "bIndexLpWebMfe-variants-ImmersiveHeroBannerDesktop-ImmersiveHeroBannerDesktop"
                    },
                    isReady(e) {
                        const n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: () => t.e("8de38bec").then(t.bind(t, "45161631")),
                    requireAsync(e) {
                        const n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((e => (this.resolved[n] = !0, e)))
                    },
                    requireSync(e) {
                        const n = this.resolve(e);
                        return t(n)
                    },
                    resolve() {
                        return "45161631"
                    }
                }),
                v = e => {
                    let {
                        banner: n
                    } = e;
                    return "solid" === n.type ? a().createElement(s.S, n) : "full-image" === n.type ? a().createElement(o.t, n) : "illustration" === n.type ? a().createElement(u.a, n) : "immersive" === n.type ? a().createElement(m, n) : ((0, r.reportWarning)(`No desktop hero banner pattern to render for type - ${n.type}`), null)
                };
            var g = v
        },
        "2b7f9ef3": (e, n, t) => {
            "use strict";
            t.d(n, {
                X: () => i
            });
            let i = function(e) {
                return e.Genius = "GENIUS", e
            }({})
        },
        fc9530d7: (e, n, t) => {
            "use strict";
            t.d(n, {
                $H: () => c,
                Cz: () => s,
                EY: () => a,
                NT: () => r,
                TB: () => u,
                VE: () => l,
                Yq: () => o,
                cz: () => d,
                y$: () => i
            });
            const i = "herobanner-title1",
                a = "herobanner-title2",
                r = "herobanner-subtitile",
                d = "herobanner-cta",
                o = "herobanner-image",
                s = "herobanner-illustration",
                l = "herobanner-signature--empty",
                c = "herobanner-signature--genius",
                u = "hero-banner-solid-bg-desktop"
        },
        "1c2dbfc7": (e, n, t) => {
            "use strict";
            t.d(n, {
                t: () => E
            });
            var i = t("3d054e81"),
                a = t("ead71eb0"),
                r = t.n(a),
                d = t("8521b397"),
                o = t.n(d),
                s = t("fc9530d7"),
                l = t("8140c3d1"),
                c = t("a5b6e152");
            const u = "ab8b89c06d",
                m = "f32e0a5c56",
                v = "b288650fc5",
                g = "e41562014f",
                _ = "f217585f33",
                k = "ca6d4e0809",
                S = "b048792c09",
                p = "d7331d9bea",
                N = "d9c426eda5",
                E = e => {
                    let {
                        bannerId: n,
                        caption: t,
                        titleFirstLine: i,
                        titleSecondLine: a,
                        subtitle: d,
                        cta: s,
                        backgroundImage: k,
                        containerClassName: E,
                        colorScheme: h,
                        signature: I
                    } = e;
                    const T = o()(u, E, {
                        [m]: "DARK" === h,
                        [v]: "LIGHT" === h,
                        [S]: !0
                    });
                    return r().createElement("div", {
                        className: T
                    }, r().createElement("div", {
                        className: p
                    }), r().createElement(f, {
                        backgroundImage: k,
                        fallbackColor: "var(--bui_color_brand_primary_background)"
                    }), r().createElement("div", {
                        className: g
                    }, r().createElement("div", {
                        className: _
                    }, r().createElement(l.v, {
                        bannerId: n,
                        caption: t,
                        titleFirstLine: i,
                        titleSecondLine: a,
                        subtitle: d,
                        cta: s,
                        colorScheme: h
                    })), r().createElement(c.P, {
                        signature: I,
                        className: N,
                        inverted: "DARK" === h
                    })))
                },
                f = e => {
                    let {
                        backgroundImage: n,
                        fallbackColor: t
                    } = e;
                    const {
                        lowResolutionImageUrl: a,
                        mediumResolutionImageUrl: d,
                        highResolutionImageUrl: o,
                        useFallbackColor: l
                    } = n, c = {};
                    l && (c.style = {
                        backgroundColor: t
                    });
                    const u = `${a} 720w, ${d} 1440w, ${o} 2880w`;
                    return r().createElement("img", (0, i.Z)({
                        className: k,
                        alt: null === n || void 0 === n ? void 0 : n.alt,
                        srcSet: u,
                        "data-testid": s.Yq,
                        fetchPriority: "high"
                    }, c))
                }
        },
        "4e9c30ec": (e, n, t) => {
            "use strict";
            t.d(n, {
                a: () => S
            });
            var i = t("ead71eb0"),
                a = t.n(i),
                r = t("8521b397"),
                d = t.n(r);
            const o = "e2e727349f",
                s = "eaf48a1552",
                l = "fd77c41db3",
                c = "c53373a6b4",
                u = "a6dcb9a45b",
                m = "b843f3e201",
                v = "b8b67dbcd7";
            var g = t("8140c3d1"),
                _ = t("fc9530d7"),
                k = t("a5b6e152");
            const S = e => {
                let {
                    bannerId: n,
                    caption: t,
                    titleFirstLine: i,
                    titleSecondLine: r,
                    subtitle: S,
                    cta: p,
                    containerClassName: N,
                    colorScheme: E,
                    illustration: f,
                    signature: h
                } = e;
                const I = d()(o, N, {
                    [s]: "DARK" === E,
                    [l]: "LIGHT" === E
                });
                return a().createElement("div", {
                    className: I
                }, a().createElement("div", {
                    className: c
                }, a().createElement("div", {
                    className: u
                }, a().createElement(g.v, {
                    bannerId: n,
                    caption: t,
                    titleFirstLine: i,
                    titleSecondLine: r,
                    subtitle: S,
                    cta: p,
                    colorScheme: E
                })), a().createElement("div", {
                    className: m
                }, a().createElement("img", {
                    src: f.illustrationUrl,
                    alt: f.alt,
                    "data-testid": _.Cz
                })), a().createElement(k.P, {
                    signature: h,
                    className: v,
                    inverted: "DARK" === E
                })))
            }
        },
        e6589e94: (e, n, t) => {
            "use strict";
            t.d(n, {
                S: () => _
            });
            var i = t("ead71eb0"),
                a = t.n(i),
                r = t("8521b397"),
                d = t.n(r),
                o = t("fc9530d7"),
                s = t("8140c3d1");
            const l = "e0669236da",
                c = "c4d9f4ed06",
                u = "dfdd4f58a7",
                m = "c497ee9802",
                v = "c4046e13b1",
                g = "adec5d296a",
                _ = e => {
                    let {
                        bannerId: n,
                        caption: t,
                        titleFirstLine: i,
                        titleSecondLine: r,
                        subtitle: _,
                        cta: k,
                        containerClassName: S,
                        colorScheme: p
                    } = e;
                    const N = d()(l, S, {
                            [c]: "DARK" === p,
                            [u]: "LIGHT" === p
                        }),
                        E = d()(m, {
                            [v]: !k
                        });
                    return a().createElement("div", {
                        className: N,
                        "data-testid": o.TB
                    }, a().createElement("div", {
                        className: E
                    }, a().createElement("div", {
                        className: g
                    }, a().createElement(s.v, {
                        bannerId: n,
                        caption: t,
                        titleFirstLine: i,
                        titleSecondLine: r,
                        subtitle: _,
                        cta: k,
                        colorScheme: p
                    }))))
                }
        },
        "8140c3d1": (e, n, t) => {
            "use strict";
            t.d(n, {
                v: () => m
            });
            var i = t("3d054e81"),
                a = t("ead71eb0"),
                r = t.n(a),
                d = t("6222292b"),
                o = t("fc9530d7");
            const s = "d53910b1db",
                l = "f0a26771c4",
                c = "c1c140bf60",
                u = "e48bde39bd",
                m = e => {
                    let {
                        bannerId: n,
                        caption: t,
                        titleFirstLine: i,
                        titleSecondLine: a,
                        subtitle: d,
                        cta: c,
                        colorScheme: u
                    } = e;
                    const m = "DARK" === u ? "white" : "brand_primary";
                    return r().createElement(r().Fragment, null, r().createElement("header", null, t && r().createElement(v, {
                        color: m,
                        className: s,
                        variant: "featured_3"
                    }, t), r().createElement("h1", null, r().createElement(v, {
                        color: m,
                        className: l,
                        tagName: "span",
                        variant: "display_3",
                        attributes: {
                            "data-testid": o.y$
                        }
                    }, i), r().createElement(_, {
                        titleSecondLine: a,
                        textColor: m
                    }))), r().createElement(g, {
                        subtitle: d,
                        textColor: m
                    }), r().createElement(k, {
                        bannerId: n,
                        cta: c
                    }))
                },
                v = e => {
                    let {
                        className: n,
                        ...t
                    } = e;
                    return r().createElement(d.Text, (0, i.Z)({}, t, {
                        className: n
                    }))
                },
                g = e => {
                    let {
                        subtitle: n,
                        textColor: t
                    } = e;
                    return n ? r().createElement(v, {
                        color: t,
                        tagName: "p",
                        className: c,
                        variant: "featured_2",
                        attributes: {
                            "data-testid": o.NT
                        }
                    }, n) : null
                },
                _ = e => {
                    let {
                        titleSecondLine: n,
                        textColor: t
                    } = e;
                    return n ? r().createElement(v, {
                        color: t,
                        tagName: "span",
                        className: l,
                        variant: "display_3",
                        attributes: {
                            "data-testid": o.EY
                        }
                    }, n) : null
                },
                k = e => {
                    let {
                        cta: n,
                        bannerId: t
                    } = e;
                    if (!n) return null;
                    return r().createElement(d.Button, {
                        className: u,
                        text: n.text,
                        variant: n.variant || "primary",
                        size: "large",
                        href: null === n || void 0 === n ? void 0 : n.url,
                        attributes: {
                            target: n.isTargetBlank ? "_blank" : void 0,
                            rel: n.isTargetBlank ? "noopener noreferrer" : void 0,
                            "aria-label": n.ariaLabel,
                            "data-testid": o.cz
                        },
                        onClick: () => {
                            n.onClickHandler && n.onClickHandler(t)
                        },
                        preventDefault: !1
                    })
                }
        },
        a5b6e152: (e, n, t) => {
            "use strict";
            t.d(n, {
                P: () => s
            });
            var i = t("ead71eb0"),
                a = t.n(i),
                r = t("b6ea4fe7"),
                d = t("2b7f9ef3"),
                o = t("fc9530d7");
            const s = e => {
                let {
                    signature: n,
                    inverted: t,
                    className: i
                } = e;
                return n === d.X.Genius ? a().createElement("div", {
                    "data-testid": o.$H,
                    className: i
                }, a().createElement(r.Z, {
                    size: "large",
                    inverted: t
                })) : a().createElement("div", {
                    style: {
                        marginTop: "auto"
                    },
                    "data-testid": o.VE
                })
            }
        },
        "017725b3": (e, n, t) => {
            "use strict";
            t.d(n, {
                HeM: () => d,
                ICm: () => k,
                SCr: () => m,
                TDH: () => p,
                XIF: () => g,
                cP1: () => s,
                cbr: () => v,
                ccX: () => S,
                fFi: () => l,
                i3w: () => c,
                leS: () => i,
                nN3: () => r,
                pNy: () => a,
                smO: () => u,
                z5K: () => o,
                zrT: () => _
            });
            let i = function(e) {
                    return e.APARTHOTEL = "APARTHOTEL", e.APARTMENT = "APARTMENT", e.BED_AND_BREAKFAST = "BED_AND_BREAKFAST", e.BOAT = "BOAT", e.CAMPING = "CAMPING", e.CAPSULE_HOTEL = "CAPSULE_HOTEL", e.CHALET = "CHALET", e.CONDO = "CONDO", e.COTTAGE = "COTTAGE", e.COUNTRY_HOUSE = "COUNTRY_HOUSE", e.CRUISE = "CRUISE", e.FARM_STAY = "FARM_STAY", e.GITE = "GITE", e.GUEST_ACCOMMODATION = "GUEST_ACCOMMODATION", e.GUEST_HOUSE = "GUEST_HOUSE", e.HOLIDAY_HOME = "HOLIDAY_HOME", e.HOLIDAY_PARK = "HOLIDAY_PARK", e.HOMESTAY = "HOMESTAY", e.HOSTEL = "HOSTEL", e.HOTEL = "HOTEL", e.INN = "INN", e.JAPANESE_STYLE_BUSINESS_HOTEL = "JAPANESE_STYLE_BUSINESS_HOTEL", e.LODGE = "LODGE", e.LOVE_HOTEL = "LOVE_HOTEL", e.MOTEL = "MOTEL", e.NO_ACCOMMODATION_TYPE = "NO_ACCOMMODATION_TYPE", e.RESIDENCE = "RESIDENCE", e.RESORT = "RESORT", e.RIAD = "RIAD", e.RYOKAN = "RYOKAN", e.SANATORIUM = "SANATORIUM", e.STUDENT_ACCOMMODATION = "STUDENT_ACCOMMODATION", e.TENTED_CAMP = "TENTED_CAMP", e.UNCERTAIN = "UNCERTAIN", e.VILLA = "VILLA", e
                }({}),
                a = function(e) {
                    return e.CABINCLASS_BUSINESS = "CABINCLASS_BUSINESS", e.CABINCLASS_CLASS_TYPE_UNKNOWN = "CABINCLASS_CLASS_TYPE_UNKNOWN", e.CABINCLASS_ECONOMY = "CABINCLASS_ECONOMY", e.CABINCLASS_FIRST = "CABINCLASS_FIRST", e.CABINCLASS_PREMIUM_BUSINESS = "CABINCLASS_PREMIUM_BUSINESS", e.CABINCLASS_PREMIUM_ECONOMY = "CABINCLASS_PREMIUM_ECONOMY", e.CABINCLASS_PREMIUM_FIRST = "CABINCLASS_PREMIUM_FIRST", e.ECONOMY = "ECONOMY", e
                }({}),
                r = function(e) {
                    return e.APP_LARGE = "APP_LARGE", e.APP_LARGER = "APP_LARGER", e.APP_MEDIUM = "APP_MEDIUM", e.DESKTOP_LARGE = "DESKTOP_LARGE", e.DESKTOP_MEDIUM = "DESKTOP_MEDIUM", e.DESKTOP_SMALL = "DESKTOP_SMALL", e.MDOT_LARGE = "MDOT_LARGE", e.MDOT_MEDIUM = "MDOT_MEDIUM", e.MDOT_SMALL = "MDOT_SMALL", e
                }({}),
                d = function(e) {
                    return e.INDEPENDENCE_DAY = "INDEPENDENCE_DAY", e
                }({}),
                o = function(e) {
                    return e.AIRPORT = "AIRPORT", e.BOUNDING_BOX = "BOUNDING_BOX", e.CHAIN = "CHAIN", e.CITY = "CITY", e.COUNTRY = "COUNTRY", e.DISTRICT = "DISTRICT", e.HOTEL = "HOTEL", e.IATA = "IATA", e.LANDMARK = "LANDMARK", e.LATLONG = "LATLONG", e.NO_DEST_TYPE = "NO_DEST_TYPE", e.REGION = "REGION", e.SUB_REGION = "SUB_REGION", e.UNRECOGNIZED = "UNRECOGNIZED", e
                }({}),
                s = function(e) {
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
                m = function(e) {
                    return e.CHARGE_INFO = "CHARGE_INFO", e.FREE_CANCELLATION = "FREE_CANCELLATION", e.NO_PREPAYMENT_REQUIRED = "NO_PREPAYMENT_REQUIRED", e.PAY_AT_PROPERTY = "PAY_AT_PROPERTY", e.PAY_WITH_WALLET = "PAY_WITH_WALLET", e.TAX_CHARGE_INCLUDED = "TAX_CHARGE_INCLUDED", e
                }({}),
                v = function(e) {
                    return e.DOTS = "DOTS", e.STARS = "STARS", e.TILES = "TILES", e
                }({}),
                g = function(e) {
                    return e.EU5 = "EU5", e.GLOBAL = "GLOBAL", e.ROW = "ROW", e.US = "US", e
                }({}),
                _ = function(e) {
                    return e.Expired = "Expired", e.Running = "Running", e
                }({}),
                k = function(e) {
                    return e.ATTRACTIONS = "ATTRACTIONS", e.CARS = "CARS", e.FLIGHTS = "FLIGHTS", e.STAYS = "STAYS", e
                }({}),
                S = function(e) {
                    return e.ATTRACTIONS_SR = "ATTRACTIONS_SR", e.BOOKING_DETAIL = "BOOKING_DETAIL", e.BOOKING_PROCESS_1 = "BOOKING_PROCESS_1", e.BOOKING_PROCESS_2 = "BOOKING_PROCESS_2", e.CONFIRMATION_EMAIL = "CONFIRMATION_EMAIL", e.CONFIRMATION_PAGE = "CONFIRMATION_PAGE", e.GENIUS_LANDING_PAGE = "GENIUS_LANDING_PAGE", e.INDEX = "INDEX", e.INVITATION_EMAIL = "INVITATION_EMAIL", e.LANDING_PAGE = "LANDING_PAGE", e.PROPERTY_DISPLAY = "PROPERTY_DISPLAY", e.PROPERTY_PAGE = "PROPERTY_PAGE", e.ROOM_DETAIL = "ROOM_DETAIL", e.ROOM_LIST = "ROOM_LIST", e.SEARCH_RESULTS = "SEARCH_RESULTS", e.WALLET = "WALLET", e
                }({}),
                p = function(e) {
                    return e.BRAND_PRIMARY = "BRAND_PRIMARY", e.CONSTRUCTIVE = "CONSTRUCTIVE", e.NEUTRAL = "NEUTRAL", e
                }({})
        },
        db8e2ae4: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => d
            });
            var i = t("ead71eb0"),
                a = t("7a7e6b16"),
                r = t("52ffbfd1");
            const d = () => ((0, i.useEffect)((() => {
                (0, a.V)()
            }), []), (0, i.useLayoutEffect)((() => {
                (0, r.Bb)()
            }), []), null)
        },
        "7a7e6b16": (e, n, t) => {
            "use strict";
            t.d(n, {
                V: () => a
            });
            var i = t("8ebac256");
            const a = () => {
                var e;
                if ("undefined" === typeof window || "undefined" === typeof document) return;
                const n = document.querySelector('[data-capla-store-data="apollo"]'),
                    t = JSON.parse((null === n || void 0 === n || null === (e = n.innerHTML) || void 0 === e ? void 0 : e.trim()) || "{}");
                var a;
                (0 === Object.keys(t).length || 1 === Object.keys(t).length && Object.keys(t).includes("ROOT_QUERY")) && (a = Object.keys(t), i.Z.sendEvent({
                    action_name: "web_homescreen.client_side_graphql_retry",
                    action_version: "1.0.0",
                    content: {
                        presented_queries: a
                    }
                }))
            }
        },
        b5d58d70: (e, n, t) => {
            "use strict";
            t.d(n, {
                Mq: () => d,
                iu: () => a,
                pT: () => r
            });
            var i = t("c44dcb0c");
            let a = function(e) {
                return e.INDEX_MAIN = "index_main", e.FLIGHTS_MAIN = "bd6cd920-6785-45d1-bd75-c0f99b014968", e.CARS_MAIN = "5fdc34ab-5363-4c23-84e2-38236e293038", e.TAXI_MAIN = "e4eaad7a-eb0d-4526-8ca5-097fa1a33bff", e.ATTRACTIONS_MAIN = "2ab36647-883b-41f1-83ab-1a063c432b47", e
            }({});
            const r = {
                    FLIGHTS: a.FLIGHTS_MAIN,
                    STAYS: a.INDEX_MAIN,
                    CARS: a.CARS_MAIN,
                    ATTRACTIONS: a.ATTRACTIONS_MAIN,
                    TAXI: a.TAXI_MAIN
                },
                d = {
                    index_main: e => ({
                        bannerId: "default_banner",
                        type: "solid",
                        titleFirstLine: e.trans((0, i.t)("webcore_hp_hero_title")),
                        subtitle: e.trans((0, i.t)("webcore_hp_hero_subtitle")),
                        colorScheme: "DARK"
                    }),
                    "bd6cd920-6785-45d1-bd75-c0f99b014968": e => ({
                        bannerId: "default_banner_flights",
                        type: "solid",
                        titleFirstLine: e.trans((0, i.t)("index_flights_hero_header_where_to_logged_out")),
                        subtitle: e.trans((0, i.t)("homescreen_hero_flight_subheader")),
                        colorScheme: "DARK"
                    }),
                    "5fdc34ab-5363-4c23-84e2-38236e293038": e => ({
                        bannerId: "default_banner_cars",
                        type: "solid",
                        titleFirstLine: e.trans((0, i.t)("homescreen_hero_cars_header")),
                        subtitle: e.trans((0, i.t)("homescreen_hero_cars_subheader")),
                        colorScheme: "DARK"
                    }),
                    "e4eaad7a-eb0d-4526-8ca5-097fa1a33bff": e => ({
                        bannerId: "default_banner_taxi",
                        type: "solid",
                        titleFirstLine: e.trans((0, i.t)("homescreen_hero_taxi_header")),
                        subtitle: e.trans((0, i.t)("homescreen_hero_taxi_subheader")),
                        colorScheme: "DARK"
                    }),
                    "2ab36647-883b-41f1-83ab-1a063c432b47": e => ({
                        bannerId: "default_banner_attractions",
                        type: "solid",
                        titleFirstLine: e.trans((0, i.t)("homescreen_hero_attractions_header")),
                        subtitle: e.trans((0, i.t)("homescreen_hero_attractions_subheader")),
                        colorScheme: "DARK"
                    })
                }
        },
        "77658c14": (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => Ye
            });
            var i = t("ead71eb0"),
                a = t.n(i),
                r = t("c44dcb0c"),
                d = t("6ff170fe"),
                o = t("41c6c66e"),
                s = t("cedcabf9");
            const l = {},
                c = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "AllowedVerticals"
                        },
                        variableDefinitions: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "allowedVerticalsQuery"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "stay"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "flight"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "car"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "attraction"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "taxi"
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
                        end: 128,
                        source: {
                            body: "\n  query AllowedVerticals {\n    allowedVerticalsQuery {\n      stay\n      flight\n      car\n      attraction\n      taxi\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            const u = () => {
                const {
                    loading: e,
                    data: n,
                    error: t
                } = function(e) {
                    const n = { ...l,
                        ...e
                    };
                    return s.useQuery(c, n)
                }();
                e || null !== n && void 0 !== n && n.allowedVerticalsQuery || t || (0, o.reportWarning)("No result for allowed verticals query"), t && (0, o.reportError)(t);
                const {
                    stay: i,
                    flight: a,
                    car: r,
                    attraction: d,
                    taxi: u
                } = (null === n || void 0 === n ? void 0 : n.allowedVerticalsQuery) || {};
                return {
                    loading: e,
                    stay: i || !1,
                    flight: a || !1,
                    car: r || !1,
                    attraction: d || !1,
                    taxi: u || !1
                }
            };
            var m = t("8486f731"),
                v = t("c9d78bdd"),
                g = t("fa98a3d3"),
                _ = t("db8e2ae4"),
                k = t("0fc8afc9");
            const S = "c848037830",
                p = "ce2a4b2634";
            var N = t("28dbd132"),
                E = t("017725b3");
            const f = "index_main";
            let h = function(e) {
                return e.ON_RENDER = "onRender", e.ON_VIEW = "onView", e.ON_CTA_CLICK = "onCTAClick", e
            }({});
            const I = (e, n) => {
                    var t, i;
                    const a = A(f, n),
                        r = null === a || void 0 === a || null === (t = a.trackingData) || void 0 === t ? void 0 : t.find((n => n.sourceId === e)),
                        d = [],
                        o = [];
                    return null === r || void 0 === r || null === (i = r.goals) || void 0 === i || i.forEach((e => {
                        let {
                            lifecycleEvent: n,
                            experimentHashTag: t,
                            goalNumber: i
                        } = e;
                        n === h.ON_CTA_CLICK ? d.push({
                            experimentHashTag: t,
                            customGoal: i
                        }) : n === h.ON_VIEW && o.push({
                            experimentHashTag: t,
                            customGoal: i
                        })
                    })), {
                        experimentCTAClickGoals: d,
                        experimentViewGoals: o
                    }
                },
                T = e => {
                    if (e) {
                        var n;
                        const t = A(f, e),
                            i = null === t || void 0 === t || null === (n = t.trackingData) || void 0 === n ? void 0 : n.find((e => e.sourceType === E.fFi.REGION)),
                            a = b(h.ON_RENDER, null === i || void 0 === i ? void 0 : i.stages),
                            r = b(h.ON_VIEW, null === i || void 0 === i ? void 0 : i.stages);
                        return {
                            experimentViewStages: C(r),
                            experimentRenderStages: C(a)
                        }
                    }
                },
                A = (e, n) => {
                    var t;
                    return null === n || void 0 === n || null === (t = n.trackingInRegions) || void 0 === t ? void 0 : t.find((n => n.regionId === e))
                },
                b = (e, n) => null === n || void 0 === n ? void 0 : n.filter((n => n.lifecycleEvent === e)),
                C = e => (null === e || void 0 === e ? void 0 : e.map((e => ({
                    experimentHashTag: e.experimentHashTag,
                    stage: e.stageNumber
                })))) || void 0;
            var R = t("239beb17"),
                y = t("81b96a0f"),
                O = t("5245e060"),
                F = t("8badadcf");
            const L = N.exp `NAFLeOeJaMSPdGFdICFHUeUdLOLOLMO`,
                x = [L];
            const D = e => {
                    (0, F.rx)((n => {
                        ! function(e, n) {
                            const {
                                requestContext: t
                            } = n;
                            t.getSiteType() === O.N.WWW && (0, N.trackExperimentStage)(e, 1)
                        }(n, e)
                    }), x)
                },
                P = e => () => {
                    (0, F.rx)((e => (0, N.trackCustomGoal)(e, 1)), [e])
                };
            var M = t("7fa013e2"),
                w = t("9ee7a66b"),
                U = t("c7727e51"),
                H = t("ceab8ca5");
            const V = N.exp `ZXZAVacDNBMPLZQNPcUecUYCMDORMTfLT`,
                B = 7,
                G = 8,
                W = 9;
            var Y = t("a9b16d88"),
                $ = t("279dcf15"),
                K = t("3432e6ca"),
                q = t("43a4d203"),
                j = t("e36d8828");
            const Z = N.exp `cCeIVOOLfOECVVDFRURURHe`,
                X = 1,
                z = 2,
                Q = 3,
                J = () => Z,
                ee = (0, j.Tz)(),
                ne = e => ee && (e => "jp" !== e.getVisitorCountry())(e);
            var te = t("cef5e736"),
                ie = t("af31a115");
            const ae = (e, n, t) => {
                (0, R.isFeatureRunning)(R.feature `cZbRAPPeEfWe`) && (0, y.w7)(y._N.DATA_LAYER, y.Kg.PAGE_VIEW_INDEX, {}), D(e), (0, te.Zk)(e.requestContext), (0, Y.ZJ)(e.requestContext), (e => {
                    const n = J();
                    e.getSiteType() === q.SiteType.WWW && (0, N.trackExperimentStage)(n, X), ne(e) && (0, N.trackExperimentStage)(n, z)
                })(e.requestContext), (0, U.cq)(e.requestContext), (0, ie.ZX)(e.requestContext), (0, K.V2)(e.requestContext, e.userHasUpcomingBookings), (0, $.oL)(e.requestContext, e.userHasUpcomingBookings), (0, H.s)(e), null === t || void 0 === t || t.forEach((e => {
                    let {
                        experimentHashTag: n,
                        stage: t
                    } = e;
                    (0, N.trackExperimentStage)((0, N.exp)(`${n}`), t)
                })), (e => {
                    const n = e.requestContext.getVisitorCountry();
                    "gb" === n && (0, N.trackExperimentStage)(V, B), "de" === n && (0, N.trackExperimentStage)(V, G), "fr" === n && (0, N.trackExperimentStage)(V, W)
                })(e), (0, w.N6)(e), (0, N.trackExperimentStage)(N.exp `EIZEHfdSDSZZDDUZGSRLGKVIFAdKC`, 1), (0, M.A6)()
            };
            var re = t("1ea8ff05"),
                de = t("b52b592d"),
                oe = t("4933a3e7"),
                se = t("78c4f925"),
                le = t("76906457");
            const ce = function(e, n, t, i, a, r) {
                let d = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                (0, oe.z)("Hero banner view", {
                    campaignId: n
                }), (e => {
                    (0, F.rx)((n => {
                        (0, F.ZO)(n, e)
                    }), x)
                })(e), (0, le.UD)(n), (0, te.S6)(e.requestContext), (0, Y.SK)(e.requestContext), (e => {
                    const n = J();
                    ne(e) && (0, N.trackExperimentStage)(n, Q)
                })(e.requestContext), (0, U.Xp)(e.requestContext), (0, ie.pZ)(e.requestContext), (0, K.PL)(e.requestContext), (0, $.u3)(e.requestContext), (0, w.zc)(e, n), null === i || void 0 === i || i.forEach((e => {
                    let {
                        experimentHashTag: n,
                        stage: t
                    } = e;
                    (0, N.trackExperimentStage)((0, N.exp)(n), t)
                })), null === a || void 0 === a || a.forEach((e => {
                    let {
                        experimentHashTag: n,
                        customGoal: t
                    } = e;
                    (0, N.trackCustomGoal)((0, N.exp)(n), t)
                })), (0, se.f)(n, "viewed", 2), (0, re.W_)(e.userHasUpcomingBookings, r, d), (0, re.o0)(d), (0, de.QI)(e.userHasUpcomingBookings, r), (0, M.MZ)()
            };
            var ue = t("9a67ad93"),
                me = t("5a1ec528");
            var ve = t("6222292b");
            const ge = "c444117f38",
                _e = "eef9cd102b",
                ke = "f3ae8b6d34",
                Se = "d5548e5d94",
                pe = "cd92897a1c",
                Ne = () => a().createElement("div", {
                    className: ge,
                    "data-testid": "hero-banner-desktop-loader"
                }, a().createElement("div", {
                    className: _e
                }, a().createElement("div", {
                    className: ke
                }, a().createElement(ve.SkeletonLoader, {
                    variant: "title",
                    tagName: "h1",
                    color: "inherit",
                    className: Se
                }), a().createElement(ve.SkeletonLoader, {
                    variant: "one-line",
                    tagName: "p",
                    color: "inherit",
                    className: pe
                }))));
            var Ee = t("27fe0528"),
                fe = t("2b7f9ef3"),
                he = t("75c11388"),
                Ie = t("b09374dd");
            const Te = "b86292b1-afc2-41c9-b402-e1d57588c1e9",
                Ae = "3d406728-97eb-482b-879d-0957c7eff7d1",
                be = (e, n) => {
                    (0, oe.z)("Hero banner CTA click", {
                        campaignId: e
                    }), Ce[e] && Ce[e](), (0, N.trackGoal)("www_index_hero_cta_click"), (0, le.v6)(e), (0, te.ud)(e), (0, Y.ye)(e), (e => {
                        "ec52e533-6a74-4f32-a112-0cdcc5b40745" === e && (0, N.trackCustomGoal)(J(), 1)
                    })(e), (0, U.HI)(e), (0, ie.Zo)(e), (0, K.OL)(e), (0, $.fD)(e), (0, w.AQ)(e), null === n || void 0 === n || n.forEach((e => {
                        let {
                            experimentHashTag: n,
                            customGoal: t
                        } = e;
                        (0, N.trackCustomGoal)((0, N.exp)(n), t)
                    })), (0, se.f)(e, "cta_clicked", 3)
                },
                Ce = {
                    [Te]: P(L),
                    [Ae]: P(L)
                },
                Re = (e, n) => {
                    if (!e) return;
                    const t = (0, he.zD)(e.targetLanding);
                    return t ? {
                        text: e.text,
                        url: t,
                        ariaLabel: e.ariaLabel,
                        onClickHandler: e => be(e, n)
                    } : void 0
                },
                ye = e => "HeroTextCaption" === (null === e || void 0 === e ? void 0 : e.__typename) ? e.text : "HeroCountdownCaption" === (null === e || void 0 === e ? void 0 : e.__typename) ? (0, Ie.NU)(e.campaignEnd) : void 0,
                Oe = e => {
                    if ("GENIUS" === e) return fe.X.Genius
                },
                Fe = e => ({
                    alt: e.alt,
                    highResolutionImageUrl: e.bigImageUrl,
                    mediumResolutionImageUrl: e.mediumImageUrl,
                    lowResolutionImageUrl: e.smallImageUrl
                }),
                Le = e => ({
                    alt: e.alt,
                    illustrationUrl: e.url
                });
            var xe = t("b5d58d70");
            const De = e => "object" === typeof e && "HeroBanner" === (null === e || void 0 === e ? void 0 : e.__typename),
                Pe = (e, n) => {
                    var t, i;
                    let {
                        loading: a,
                        regionId: r = xe.iu.INDEX_MAIN
                    } = n;
                    const d = null === e || void 0 === e || null === (t = e.merchComponents) || void 0 === t || null === (t = t.regions) || void 0 === t || null === (t = t.find((e => e.id === r))) || void 0 === t || null === (t = t.components) || void 0 === t ? void 0 : t.find(De),
                        o = ((e, n) => {
                            const t = T(n),
                                i = I(e, n);
                            return {
                                etStateBlob: null === n || void 0 === n ? void 0 : n.etStateBlob,
                                ...t,
                                ...i
                            }
                        })(null === d || void 0 === d ? void 0 : d.heroCampaignId, null === e || void 0 === e || null === (i = e.merchComponents) || void 0 === i ? void 0 : i.experimentationTracking);
                    let s = null;
                    if (d) {
                        const {
                            designVariant: e,
                            heroCampaignId: n
                        } = d;
                        if (e) switch (e.__typename) {
                            case "DesktopHeroSolidBg":
                                s = ((e, n, t) => {
                                    const {
                                        caption: i,
                                        titleFirstLine: a,
                                        titleSecondLine: r,
                                        subtitle: d,
                                        colorScheme: o,
                                        cta: s
                                    } = n;
                                    return {
                                        type: "solid",
                                        bannerId: e,
                                        caption: ye(i),
                                        titleFirstLine: a,
                                        titleSecondLine: r || void 0,
                                        subtitle: d || void 0,
                                        cta: Re(s, t),
                                        colorScheme: o
                                    }
                                })(n, e, o.experimentCTAClickGoals);
                                break;
                            case "DesktopHeroFullImage":
                                s = ((e, n, t) => {
                                    const {
                                        caption: i,
                                        titleFirstLine: a,
                                        titleSecondLine: r,
                                        subtitle: d,
                                        colorScheme: o,
                                        cta: s,
                                        backgroundImage: l,
                                        signature: c
                                    } = n;
                                    return {
                                        type: "full-image",
                                        bannerId: e,
                                        caption: ye(i),
                                        titleFirstLine: a,
                                        titleSecondLine: r || void 0,
                                        subtitle: d || void 0,
                                        cta: Re(s, t),
                                        colorScheme: o,
                                        backgroundImage: Fe(l),
                                        signature: Oe(c)
                                    }
                                })(n, e, o.experimentCTAClickGoals);
                                break;
                            case "DesktopHeroIllustration":
                                s = ((e, n, t) => {
                                    const {
                                        caption: i,
                                        titleFirstLine: a,
                                        titleSecondLine: r,
                                        subtitle: d,
                                        colorScheme: o,
                                        cta: s,
                                        illustration: l,
                                        signature: c
                                    } = n;
                                    return {
                                        type: "illustration",
                                        bannerId: e,
                                        caption: ye(i),
                                        titleFirstLine: a,
                                        titleSecondLine: r || void 0,
                                        subtitle: d || void 0,
                                        cta: Re(s, t),
                                        colorScheme: o,
                                        illustration: Le(l),
                                        signature: Oe(c)
                                    }
                                })(n, e, o.experimentCTAClickGoals);
                                break;
                            default:
                                s = null
                        }
                    }
                    return {
                        banner: s,
                        trackingData: o,
                        loading: a
                    }
                },
                Me = (e, n, t) => {
                    const {
                        banner: i,
                        trackingData: a,
                        loading: r
                    } = (0, Ee.Z)(Pe, !1, e);
                    if (null !== i && void 0 !== i && i.bannerId && null !== t && void 0 !== t && t[i.bannerId]) {
                        return {
                            banner: t[i.bannerId](i),
                            trackingData: a
                        }
                    }
                    return i ? (0, oe.z)(`Hero data from Merch Platform for region ${e}`, {
                        banner: i,
                        trackingData: a
                    }) : (0, oe.z)(`Default Hero data for region ${e}`), {
                        banner: i ? ? n,
                        trackingData: a,
                        loading: r
                    }
                };
            var we = t("7ba12574"),
                Ue = t("8e166592");
            const He = ["default_banner", "72478560-7d8c-4411-8ff3-4d6f6379d6b9", "1aefb4da-400b-4f15-92be-256673d6882d", "926ad3ac-90db-4d60-b5d7-b14461ae478c", "82fea64c-4b61-464f-b1c3-e7feffa12761"];
            let Ve = function(e) {
                return e[e.ON_RENDER = 1] = "ON_RENDER", e[e.ON_RENDER_US = 2] = "ON_RENDER_US", e[e.ON_RENDER_UPCOMING_BOOKING = 3] = "ON_RENDER_UPCOMING_BOOKING", e[e.ON_VIEW = 4] = "ON_VIEW", e[e.ON_VIEW_US = 5] = "ON_VIEW_US", e[e.ON_VIEW_UPCOMING_BOOKING = 6] = "ON_VIEW_UPCOMING_BOOKING", e
            }({});
            const Be = N.exp `OABBaJePefFCUWDOULAXeeNRERJBcCcCcCC`,
                Ge = "eb17ed8b9d";
            (0, Ue.dg)();
            const We = e => {
                    let {
                        regionId: n,
                        defaultBannerSchema: t,
                        mutators: r,
                        containerClassName: d,
                        onRenderTracking: o,
                        onViewTracking: s
                    } = e;
                    const l = Me(n, t, r),
                        c = (0, we.r)(),
                        u = (0, m.Z)(),
                        v = ((e, n, t) => e && He.includes(n) && t === xe.iu.INDEX_MAIN)(c, l.banner.bannerId, n);
                    return l.banner.containerClassName = d, (0, i.useEffect)((() => {
                        o && o(l), (0, M.A6)(), v && (e => {
                            (0, N.trackExperimentStage)(Be, Ve.ON_RENDER), "us" === e.requestContext.getVisitorCountry() && (0, N.trackExperimentStage)(Be, Ve.ON_RENDER_US), e.userHasUpcomingBookings && (0, N.trackExperimentStage)(Be, Ve.ON_RENDER_UPCOMING_BOOKING)
                        })(u)
                    }), [l]), l.loading ? a().createElement(Ne, null) : a().createElement(ue.df, {
                        triggerOnce: !0,
                        onChange: e => {
                            e && s && s(l), v && (e => {
                                (0, N.trackExperimentStage)(Be, Ve.ON_VIEW), "us" === e.requestContext.getVisitorCountry() && (0, N.trackExperimentStage)(Be, Ve.ON_VIEW_US), e.userHasUpcomingBookings && (0, N.trackExperimentStage)(Be, Ve.ON_VIEW_UPCOMING_BOOKING)
                            })(u), (0, M.MZ)()
                        }
                    }, v && (0, N.trackExperiment)(Be) ? a().createElement("div", {
                        className: Ge
                    }) : a().createElement(me.G, {
                        banner: l.banner
                    }))
                },
                Ye = () => {
                    var e;
                    const n = (0, r.useI18n)(),
                        t = (0, m.Z)(),
                        o = !(null === (e = (0, k.et)().items) || void 0 === e || !e.length),
                        {
                            loading: s,
                            flight: l
                        } = u(),
                        c = (0, v.J1)(),
                        E = (0, v.Ds)(),
                        [f, h] = (0, i.useState)(xe.iu.INDEX_MAIN),
                        I = (0, g.ZP)().currentTab;
                    (0, i.useEffect)((() => {
                        const e = xe.pT[I];
                        e && h(e)
                    }), [I]);
                    const T = (0, i.useCallback)((e => {
                        let {
                            banner: n,
                            trackingData: i
                        } = e;
                        ce(t, n.bannerId, n, i.experimentViewStages, i.experimentViewGoals, o, !s && l)
                    }), [t, o, l, s]);
                    return a().createElement(a().Fragment, null, a().createElement(_.Z, null), a().createElement(We, {
                        regionId: f,
                        onRenderTracking: e => {
                            let {
                                banner: n,
                                trackingData: i
                            } = e;
                            var a;
                            (a = i.etStateBlob) && (0, N.applyETClientsidePayload)(a), ae(t, 0, i.experimentRenderStages), (0, d.rU)(t.userHasUpcomingBookings, c, E)
                        },
                        onViewTracking: T,
                        mutators: {},
                        containerClassName: `hero-banner-wrapper ${S} ${f===xe.iu.FLIGHTS_MAIN?p:""}`,
                        defaultBannerSchema: xe.Mq[f](n)
                    }))
                }
        },
        "8badadcf": (e, n, t) => {
            "use strict";
            t.d(n, {
                ZO: () => s,
                rx: () => l
            });
            var i = t("28dbd132");
            const a = i.exp `NAFLeOeJcQEcVOdWNeYZdfdbJae`,
                r = new Set(["it", "de", "fr", "gb", "es"]),
                d = new Set([...Array.from(r), "xk", "al", "ad", "am", "at", "az", "by", "be", "ba", "bg", "xy", "hr", "cy", "cz", "dk", "ee", "fo", "fi", "ge", "gi", "gr", "gl", "gg", "hu", "is", "ie", "im", "je", "xk", "lv", "li", "lt", "lu", "mk", "mt", "md", "mc", "me", "nl", "no", "pl", "pt", "ro", "ru", "sm", "rs", "sk", "si", "se", "ch", "ua"]),
                o = new Set(["bd", "bt", "bn", "kh", "cn", "tl", "hk", "in", "id", "jp", "kr", "la", "mo", "my", "mv", "mn", "mm", "np", "ph", "sg", "lk", "tw", "th", "vn"]);

            function s(e, n) {
                const {
                    requestContext: t
                } = n, a = t.getVisitorCountry();
                (0, i.trackExperimentStage)(e, 2), a && (r.has(a) && (0, i.trackExperimentStage)(e, 3), d.has(a) && (0, i.trackExperimentStage)(e, 4), "us" === a && (0, i.trackExperimentStage)(e, 5), o.has(a) && (0, i.trackExperimentStage)(e, 6), "in" === a && (0, i.trackExperimentStage)(e, 7), "au" === a && (0, i.trackExperimentStage)(e, 8))
            }

            function l(e, n) {
                e(a), (0, i.trackExperiment)(a) > 0 && n.forEach(e)
            }
        },
        "9ee7a66b": (e, n, t) => {
            "use strict";
            t.d(n, {
                AQ: () => T,
                N6: () => h,
                zc: () => I
            });
            var i = t("28dbd132"),
                a = t("ad382b9c"),
                r = t("e36d8828");
            const d = i.exp `cCcCcCWKcOMHINPSXeHDAcUYNTTNAVaRKZVVLT`,
                o = i.exp `OOIBTICLBdRAZDBKeWMbQNPcUecGaWXCFafae`,
                s = "7aa9f9a4-46a9-43d7-b127-d1d6ab26c57e",
                l = "6e4797c1-0028-47e8-a74b-97861801fc3c",
                c = 1,
                u = 2,
                m = 3,
                v = 4,
                g = 5,
                _ = 6,
                k = 7,
                S = 8,
                p = 1,
                N = 2,
                E = 2,
                f = e => e.getSiteType() === a.NM.WWW ? d : o,
                h = e => {
                    const n = f(e.requestContext),
                        t = e.requestContext.getVisitorCountry();
                    (0, i.trackExperimentStage)(n, c), (0, r.jl)() ? (0, i.trackExperimentStage)(n, v) : (0, i.trackExperimentStage)(n, m), e.userHasUpcomingBookings && (0, i.trackExperimentStage)(n, g), "us" === t && (0, i.trackExperimentStage)(n, _), (() => {
                        var e;
                        return !("undefined" === typeof window || null === (e = window) || void 0 === e || null === (e = e.B) || void 0 === e || !e.env || !window.B.env.b_returning_status) && window.B.env.b_returning_status === E
                    })() ? (0, i.trackExperimentStage)(n, S) : (0, i.trackExperimentStage)(n, k)
                },
                I = (e, n) => {
                    const t = f(e.requestContext);
                    (0, i.trackExperimentStage)(t, u), n === s && (0, i.trackCustomGoal)(d, p), n === l && (0, i.trackCustomGoal)(o, p)
                },
                T = e => {
                    e === s && (0, i.trackCustomGoal)(d, N), e === l && (0, i.trackCustomGoal)(o, N)
                }
        },
        c7727e51: (e, n, t) => {
            "use strict";
            t.d(n, {
                HI: () => p,
                Xp: () => S,
                cq: () => N
            });
            var i = t("43a4d203"),
                a = t("28dbd132");
            const r = a.exp `cCeIVOAPEbSccEZVACdKNKNKWe`,
                d = a.exp `cCeIVOAPEbSccEZVACCDWOOC`,
                o = 1,
                s = 2,
                l = 3,
                c = 4,
                u = 5,
                m = 1,
                v = ["gb", "fr", "au"],
                g = e => e.getSiteType() === i.SiteType.WWW ? r : d,
                _ = e => "us" === e.getVisitorCountry(),
                k = e => {
                    const n = e.getVisitorCountry();
                    return !!n && v.includes(n)
                },
                S = e => {
                    const n = g(e);
                    _(e) && (0, a.trackExperimentStage)(n, l), k(e) && (0, a.trackExperimentStage)(n, u)
                },
                p = e => {
                    "27cca8cb-2059-417f-94c1-91fb88ac41b0" !== e && "88610169-b50a-4192-b37d-a198926c6679" !== e || (0, a.trackCustomGoal)(d, m), "6986aa56-7b4f-4ec2-8ecc-17478ba2728e" !== e && "4deb6731-608e-4658-b568-b2c3985989e3" !== e || (0, a.trackCustomGoal)(r, m)
                },
                N = e => {
                    const n = g(e);
                    (0, a.trackExperimentStage)(n, o), _(e) && (0, a.trackExperimentStage)(n, s), k(e) && (0, a.trackExperimentStage)(n, c)
                }
        },
        ceab8ca5: (e, n, t) => {
            "use strict";
            t.d(n, {
                s: () => f
            });
            var i = t("24e040c9"),
                a = t.n(i),
                r = t("8da416e8"),
                d = t.n(r),
                o = t("43a4d203"),
                s = t("28dbd132"),
                l = t("e36d8828");
            (0, i.extend)(d());
            const c = s.exp `YTBbNXGJaWePDSSFePXIGaWXCFafdcUYNdHXT`,
                u = s.exp `OOIBTAURAfVaeYPZZZTYRKAVaRKZVVFNTBBFYXO`,
                m = 1,
                v = 2,
                g = 3,
                _ = 4,
                k = 5,
                S = 6,
                p = 7,
                N = 8;
            const E = () => {
                    const e = function() {
                        var e;
                        if ("undefined" !== typeof window && null !== (e = window) && void 0 !== e && null !== (e = e.B) && void 0 !== e && e.env && window.B.env.b_checkin_date) {
                            const e = a().utc(window.B.env.b_checkin_date),
                                n = a().utc(new Date).startOf("day");
                            return e.diff(n, "day")
                        }
                    }();
                    return !!e && (e >= 2 && e <= 14)
                },
                f = e => {
                    const n = e.requestContext.getSiteType() === o.SiteType.WWW ? c : u;
                    (0, s.trackExperimentStage)(n, m), (0, l.jl)() ? (0, s.trackExperimentStage)(n, g) : (0, s.trackExperimentStage)(n, v), e.userHasUpcomingBookings && (0, s.trackExperimentStage)(n, _), "us" === e.requestContext.getVisitorCountry() ? (0, s.trackExperimentStage)(n, p) : (0, s.trackExperimentStage)(n, S), (e => ["ar", "he"].includes(e.getLanguage()))(e.requestContext) && (0, s.trackExperimentStage)(n, N), E() && (0, s.trackExperimentStage)(n, k)
                }
        },
        a9b16d88: (e, n, t) => {
            "use strict";
            t.d(n, {
                SK: () => S,
                ZJ: () => k,
                ye: () => p
            });
            var i = t("5245e060"),
                a = t("28dbd132"),
                r = t("e36d8828");
            const d = a.exp `cCeIVOMPWAEeIcFARSYSbZDQSXaYYfPHe`,
                o = a.exp `cCeIVOMPWAEeIcFARSYSbZDQSXbaTaTaET`,
                s = e => e.getSiteType() === i.N.WWW ? o : d,
                l = 1,
                c = 2,
                u = 3,
                m = 4,
                v = 1,
                g = e => "jp" === e.getVisitorCountry(),
                _ = (0, r.jl)(),
                k = e => {
                    const n = s(e);
                    g(e) && (0, a.trackExperimentStage)(n, l), _ ? (0, a.trackExperimentStage)(n, m) : (0, a.trackExperimentStage)(n, u)
                },
                S = e => {
                    const n = s(e);
                    g(e) && (0, a.trackExperimentStage)(n, c)
                },
                p = e => {
                    "fbde226f-dd5c-47df-a2c2-8ef39493755b" === e && (0, a.trackCustomGoal)(d, v), "c2403524-1245-4b92-b4a2-d85e9180b7cd" === e && (0, a.trackCustomGoal)(o, v)
                }
        },
        "279dcf15": (e, n, t) => {
            "use strict";
            t.d(n, {
                fD: () => p,
                oL: () => k,
                u3: () => S
            });
            var i = t("5245e060"),
                a = t("28dbd132"),
                r = t("e36d8828");
            const d = a.exp `cCHObMPWAdFbXeZfSbZDQSXaYYfPHe`,
                o = a.exp `cCHObMPWAdFbXeZfSbZDQSXbaTaTaET`,
                s = 1,
                l = 2,
                c = 3,
                u = 4,
                m = 5,
                v = e => e.getSiteType() === i.N.WWW ? o : d,
                g = (0, r.jl)(),
                _ = e => (e => "jp" === e.getVisitorCountry())(e),
                k = (e, n) => {
                    const t = v(e);
                    _(e) && ((0, a.trackExperimentStage)(t, s), g ? (0, a.trackExperimentStage)(t, u) : (0, a.trackExperimentStage)(t, c), n && (0, a.trackExperimentStage)(t, m))
                },
                S = e => {
                    const n = v(e);
                    _(e) && (0, a.trackExperimentStage)(n, l)
                },
                p = e => {
                    "304efd2b-1a33-438b-848b-a46885024688" === e && (0, a.trackCustomGoal)(d, 1), "2b4c8d03-f607-49cf-b7d7-71de5436af6a" === e && (0, a.trackCustomGoal)(o, 1)
                }
        },
        "78c4f925": (e, n, t) => {
            "use strict";
            t.d(n, {
                f: () => o
            });
            var i = t("28dbd132");
            let a = function(e) {
                return e.INDEX_MAIN_DESKTOP = "918a3785-440a-431e-a06a-3f49bdde5336", e.INDEX_MAIN_MDOT = "17f51106-a7c2-4d30-8fa6-c96b25ffecd3", e.GLOBAL_ALERTS = "index_global_alerts", e
            }({});
            var r = t("76906457");
            const d = i.exp `EIZEHfdSDSZZDDUZGSRLGKVIFAdKC`,
                o = (e, n, t) => {
                    const o = (0, i.trackExperiment)(d);
                    (0, i.trackExperimentStage)(d, t), 1 === o && (0, r.Iv)(e, a.INDEX_MAIN_DESKTOP, n)
                }
        },
        "3432e6ca": (e, n, t) => {
            "use strict";
            t.d(n, {
                OL: () => p,
                PL: () => S,
                V2: () => k
            });
            var i = t("5245e060"),
                a = t("28dbd132"),
                r = t("e36d8828");
            const d = a.exp `cCHObCDRGJNTBBFYKCDWOOC`,
                o = a.exp `cCHObCDRGJNTBBFYKdKNKNKWe`,
                s = 1,
                l = 2,
                c = 3,
                u = 4,
                m = 5,
                v = e => e.getSiteType() === i.N.WWW ? o : d,
                g = e => "us" === e.getVisitorCountry(),
                _ = (0, r.jl)(),
                k = (e, n) => {
                    const t = v(e);
                    g(e) && ((0, a.trackExperimentStage)(t, s), _ ? (0, a.trackExperimentStage)(t, u) : (0, a.trackExperimentStage)(t, c), n && (0, a.trackExperimentStage)(t, m))
                },
                S = e => {
                    const n = v(e);
                    g(e) && (0, a.trackExperimentStage)(n, l)
                },
                p = e => {
                    "22240a48-7a2b-4eb3-afa2-e348859aca3b" === e && (0, a.trackCustomGoal)(d, 1), "e13336fa-d723-4eef-859a-32291fe6d596" === e && (0, a.trackCustomGoal)(o, 1)
                }
        },
        cef5e736: (e, n, t) => {
            "use strict";
            t.d(n, {
                S6: () => m,
                Zk: () => u,
                ud: () => v
            });
            var i = t("5245e060"),
                a = t("28dbd132"),
                r = t("e36d8828");
            const d = a.exp `cCHObKdBdUHINPSXeHDVBBVYYT`,
                o = a.exp `cCHObKdBdUHINPSXeHDALOLOLMO`,
                s = e => e.getSiteType() === i.N.WWW ? o : d,
                l = e => "us" === e.getVisitorCountry(),
                c = (0, r.jl)(),
                u = e => {
                    const n = s(e);
                    (0, a.trackExperimentStage)(n, 1), l(e) && (0, a.trackExperimentStage)(n, 2), c ? (0, a.trackExperimentStage)(n, 4) : (0, a.trackExperimentStage)(n, 5)
                },
                m = e => {
                    const n = s(e);
                    l(e) && (0, a.trackExperimentStage)(n, 3)
                },
                v = e => {
                    "7b0b89d2-3274-4270-bcce-ee24ce50d6f3" === e && (0, a.trackCustomGoal)(d, 1), "1ce062ef-b033-4304-94be-15a1d38e2dc1" === e && (0, a.trackCustomGoal)(o, 1)
                }
        },
        af31a115: (e, n, t) => {
            "use strict";
            t.d(n, {
                ZX: () => v,
                Zo: () => _,
                pZ: () => g
            });
            var i = t("5245e060"),
                a = t("28dbd132");
            const r = a.exp `cCeIVOKdAICScUYNdHIcCcCcCC`,
                d = a.exp `cCeIVOKdAICScUYNdHIOOIBBO`,
                o = new Set(["de", "be", "fr", "pt", "gb", "es", "tr", "at", "hu", "sk", "al", "dk", "nl", "ro", "ch", "rs", "cz", "it", "si", "hr", "ge", "pl"]),
                s = 1,
                l = 2,
                c = 1,
                u = e => e.getSiteType() === i.N.WWW ? r : d,
                m = e => !!e.getVisitorCountry() && o.has(e.getVisitorCountry()),
                v = e => {
                    const n = u(e);
                    m(e) && (0, a.trackExperimentStage)(n, s)
                },
                g = e => {
                    const n = u(e);
                    m(e) && (0, a.trackExperimentStage)(n, l)
                },
                _ = e => {
                    "79bb56e6-3f9d-4133-92ad-c5ce4eceabcc" === e && (0, a.trackCustomGoal)(d, c), "b59de213-f88f-47a2-b7c5-0fd62eb2769a" === e && (0, a.trackCustomGoal)(r, c)
                }
        },
        76906457: (e, n, t) => {
            "use strict";
            t.d(n, {
                Iv: () => o,
                UD: () => r,
                v6: () => d
            });
            var i = t("8ebac256"),
                a = t("dc6d28ff");
            const r = e => {
                    i.Z.sendEvent({
                        action_name: "webcoreux.hero_component_viewed",
                        action_version: "1.0.0",
                        content: {
                            campaign_id: e
                        }
                    })
                },
                d = e => {
                    i.Z.sendEvent({
                        action_name: "webcoreux.hero_component_ctr_clicked",
                        action_version: "1.0.0",
                        content: {
                            campaign_id: e
                        }
                    })
                },
                o = (e, n, t) => {
                    const r = {
                        placement_id: e,
                        action: t,
                        location: {
                            region_id: n,
                            vertical: (0, a.getRequestContext)().getProduct()
                        }
                    };
                    i.Z.sendEvent({
                        action_name: "merch_platform.merch_platform_action_tracked",
                        action_version: "1.1",
                        content: r
                    })
                }
        },
        "0fc8afc9": (e, n, t) => {
            "use strict";
            t.d(n, {
                et: () => W
            });
            var i = t("43a4d203"),
                a = t("dc6d28ff"),
                r = t("239beb17"),
                d = t("41c6c66e"),
                o = t("017725b3");
            o.pNy.ECONOMY;
            var s = t("d1e54a96");
            const l = () => {
                    const e = "prod" === (0, a.getRequestContext)().getBPlatformEnvironment();
                    return {
                        flightsHostname: e ? "flights.booking.com" : "flights.dqs.booking.com",
                        flightsSearchAutocompleteBaseUrl: e ? "https://flights.booking.com" : "https://flights.dqs.booking.com"
                    }
                },
                c = "ViewFlight",
                u = "Anywhere",
                m = (e, n, t, i, r, o) => {
                    let m;
                    const v = (0, a.getRequestContext)(),
                        g = v.getAffiliate();
                    null !== g && void 0 !== g && g.id || ((0, d.reportWarning)("Flights LP: adding default aid as there was no aid present"), i.set("aid", "304142"));
                    const _ = t.includes("COUNTRY"),
                        k = t.includes(u);
                    if (k && (i.set("to", u), i.set("toCountryCode", u)), _) {
                        const e = t.split(".")[0];
                        i.set("toCountryCode", e), i.set("to", t)
                    }
                    return k || _ ? (o && i.set("ca_source", o), m = (0, s.constructUrl)({
                        pathname: "fly-anywhere/",
                        searchParams: i
                    })) : m = e === c ? (0, s.constructUrl)({
                        pathname: `flights/${n}-${t}/${r}/`,
                        searchParams: i
                    }) : (0, s.constructUrl)({
                        pathname: `flights/${n}-${t}/`,
                        searchParams: i
                    }), v.isRobotRequest() && function(e, n) {
                        const t = new Set;
                        null === n || void 0 === n || n.forEach((function(n, i) {
                            t.has(i) ? e.append(i, n) : (e.set(i, n), t.add(i))
                        }))
                    }(m.searchParams, i), m.host = l().flightsHostname, m.port = "", m.toString()
                };
            var v = t("28dbd132"),
                g = t("dd6086f7"),
                _ = t("2db41414"),
                k = t("b7559b80"),
                S = t("2e53aec9"),
                p = t("eef1968a"),
                N = t("11a12aca");
            const E = "https://paste.booking.com/data/images/g/gvgokh.gif",
                f = (e, n) => e.cards.flatMap((e => h(e, n))).filter((e => P(e))),
                h = (e, n) => {
                    var t, i;
                    const a = e.searchHistoryItem;
                    if (!a) return [];
                    const r = F(a),
                        d = O(a),
                        s = (null === (t = a.destinations) || void 0 === t || null === (t = t[0]) || void 0 === t ? void 0 : t.type) ? ? o.z5K.CITY,
                        {
                            subTitle: l,
                            groupOccupancy: c
                        } = A(e.uxLabels || []);
                    return [{
                        id: a.originalId,
                        vertical: a.vertical,
                        title: r,
                        subTitle: l,
                        groupComposition: c,
                        createdAt: a.createdAt,
                        flightsInfo: d,
                        searchParams: a.searchParams ? ? "",
                        img: {
                            src: n({
                                destType: s,
                                imageUrl: null === a || void 0 === a || null === (i = a.mainImage) || void 0 === i ? void 0 : i.genericUrl
                            })
                        },
                        countryCode: (null === a || void 0 === a ? void 0 : a.countryCode) ? ? "",
                        aspectRatio: N.Lz["1:1"],
                        url: I(a, d)
                    }]
                },
                I = (e, n) => e.vertical === o.ICm.FLIGHTS ? x(e, n) : D(e),
                T = e => {
                    var n;
                    return (null === e || void 0 === e || null === (n = e[0]) || void 0 === n || null === (n = n.uxLabels) || void 0 === n || null === (n = n.find((e => "title" === (null === e || void 0 === e ? void 0 : e.name)))) || void 0 === n ? void 0 : n.value) ? ? ""
                },
                A = e => {
                    var n;
                    if ((0, S.bZ)()) {
                        var t, i;
                        return {
                            subTitle: (null === e || void 0 === e || null === (t = e.find((e => "subtitle_dates" === (null === e || void 0 === e ? void 0 : e.name)))) || void 0 === t ? void 0 : t.value) ? ? "",
                            groupOccupancy: (null === e || void 0 === e || null === (i = e.find((e => "subtitle_occupancy" === (null === e || void 0 === e ? void 0 : e.name)))) || void 0 === i ? void 0 : i.value) ? ? ""
                        }
                    }
                    return {
                        subTitle: (null === e || void 0 === e || null === (n = e.find((e => "subtitle" === (null === e || void 0 === e ? void 0 : e.name)))) || void 0 === n ? void 0 : n.value) ? ? "",
                        groupOccupancy: ""
                    }
                },
                b = e => {
                    var n, t;
                    const i = (0, S.bZ)(),
                        a = (null === e || void 0 === e || null === (n = e.recommendationPlatform) || void 0 === n || null === (n = n.flightsRecommendations) || void 0 === n ? void 0 : n.recommendations) || [],
                        r = (null === e || void 0 === e || null === (t = e.recommendationPlatform) || void 0 === t || null === (t = t.staysRecommendations) || void 0 === t ? void 0 : t.recommendations) || [],
                        d = L(r),
                        o = a.length > 0;
                    return i && o ? {
                        recentSearches: [...r, ...a],
                        lastSearch: d,
                        hasFlightsData: o
                    } : {
                        recentSearches: r,
                        lastSearch: d,
                        hasFlightsData: o
                    }
                },
                C = () => {
                    const e = (0, a.getRequestContext)().getCDNOrigin(),
                        n = (0, S.bZ)() ? "256x256" : "64x64";
                    return t => {
                        const i = (t ? (0, _.Z)(t, n, e) : E) ? ? E;
                        return i === E && (0, k.qe)(), i
                    }
                },
                R = () => {
                    const e = C();
                    return n => (null === n || void 0 === n ? void 0 : n.destType) === o.z5K.AIRPORT ? "https://paste.booking.com/data/images/e/e7uinl.jpg" : e(null === n || void 0 === n ? void 0 : n.imageUrl)
                },
                y = () => {
                    var e;
                    const n = (0, a.getRequestContext)(),
                        t = n.getSiteType() === i.SiteType.MDOT,
                        r = "tablet" === (null === (e = n.getUserAgent()) || void 0 === e ? void 0 : e.deviceType);
                    return t && !r ? N.B.MEDIUM : N.B.LARGE
                },
                O = e => {
                    var n, t;
                    if (e.vertical !== o.ICm.FLIGHTS) return;
                    const i = null === e || void 0 === e || null === (n = e.origins) || void 0 === n ? void 0 : n[0],
                        a = null === e || void 0 === e || null === (t = e.destinations) || void 0 === t ? void 0 : t[0];
                    return i && a && null !== i && void 0 !== i && i.id && null !== a && void 0 !== a && a.id && null !== i && void 0 !== i && i.name && null !== a && void 0 !== a && a.name ? {
                        isRoundTrip: "ROUNDTRIP" === (null === e || void 0 === e ? void 0 : e.type),
                        origin: {
                            title: null === i || void 0 === i ? void 0 : i.name,
                            airports: null === i || void 0 === i ? void 0 : i.id,
                            type: o.z5K.AIRPORT
                        },
                        destination: {
                            title: null === a || void 0 === a ? void 0 : a.name,
                            airports: null === a || void 0 === a ? void 0 : a.id,
                            type: o.z5K.AIRPORT
                        }
                    } : void 0
                },
                F = e => {
                    var n;
                    return e.vertical !== o.ICm.STAYS ? "" : (null === (n = e.destinations) || void 0 === n || null === (n = n[0]) || void 0 === n ? void 0 : n.name) ? ? ""
                },
                L = e => {
                    var n, t, i, a, r, d, o;
                    if (!e || 0 === e.length) return;
                    const s = e[0].cards;
                    if (!s || 0 === s.length) return;
                    const l = s[0].searchHistoryItem;
                    return l ? {
                        checkin: null === l || void 0 === l || null === (n = l.bookingWindow) || void 0 === n ? void 0 : n.checkinDate,
                        checkout: null === l || void 0 === l || null === (t = l.bookingWindow) || void 0 === t ? void 0 : t.checkoutDate,
                        nbAdults: null === l || void 0 === l || null === (i = l.guests) || void 0 === i ? void 0 : i.adults,
                        nbChildren: (null === l || void 0 === l || null === (a = l.guests) || void 0 === a || null === (a = a.children) || void 0 === a ? void 0 : a.length) ? ? 0,
                        nbRooms: null === l || void 0 === l || null === (r = l.rooms) || void 0 === r ? void 0 : r.total,
                        childrenAges: null === l || void 0 === l || null === (d = l.guests) || void 0 === d ? void 0 : d.children,
                        destType: null === l || void 0 === l || null === (o = l.destinations) || void 0 === o || null === (o = o[0]) || void 0 === o ? void 0 : o.type,
                        createdAt: null === l || void 0 === l ? void 0 : l.createdAt
                    } : void 0
                },
                x = (e, n) => {
                    var t;
                    if (!n) return "";
                    const i = new URLSearchParams;
                    null === (t = e.searchParams) || void 0 === t || t.split("&").forEach((e => {
                        const [n, t] = e.split("=");
                        i.set(n, t)
                    })), i.set("locale", (0, a.getRequestContext)().getLanguage()), i.set("sort", "BEST"), i.set("showLoader", "1"), i.set("cabinClass", "ECONOMY");
                    const r = n.origin.airports.replace(/,/g, "_"),
                        d = n.destination.airports.replace(/,/g, "_");
                    return m("SearchResults", `${r}.${n.origin.type}`, `${d}.${n.destination.type}`, i, void 0, void 0)
                },
                D = e => {
                    var n, t, i, a, r, d, o, s, l, c;
                    const u = (null === (n = e.guests) || void 0 === n || null === (n = n.children) || void 0 === n ? void 0 : n.filter((e => "number" === typeof e))) || [];
                    return (0, g.d)({
                        checkin: null === (t = e.bookingWindow) || void 0 === t ? void 0 : t.checkinDate,
                        checkout: null === (i = e.bookingWindow) || void 0 === i ? void 0 : i.checkoutDate,
                        nbAdults: null === (a = e.guests) || void 0 === a ? void 0 : a.adults,
                        nbChildren: null === (r = e.guests) || void 0 === r || null === (r = r.children) || void 0 === r ? void 0 : r.length,
                        nbRooms: null === (d = e.rooms) || void 0 === d ? void 0 : d.total,
                        childrenAges: u,
                        destId: null !== (o = e.destinations) && void 0 !== o && null !== (o = o[0]) && void 0 !== o && o.id ? parseInt(null === (s = e.destinations) || void 0 === s || null === (s = s[0]) || void 0 === s ? void 0 : s.id, 10) : void 0,
                        destType: null === (l = e.destinations) || void 0 === l || null === (l = l[0]) || void 0 === l ? void 0 : l.type,
                        highlightedPropertyId: null !== (c = e.highlightedProducts) && void 0 !== c && c[0] ? parseInt(e.highlightedProducts[0]) : void 0,
                        sorter: e.order ? ? "popularity",
                        selectedFilters: void 0
                    }).toString()
                },
                P = e => !!e.subTitle && (!(e.vertical === o.ICm.STAYS && !e.title) && !(e.vertical === o.ICm.FLIGHTS && (!e.flightsInfo || !e.groupComposition))),
                M = e => e.sort(((e, n) => e.createdAt && n.createdAt ? n.createdAt - e.createdAt : 0));
            var w = t("cedcabf9");
            const U = {},
                H = {
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
            var V = t("e36d8828");
            const B = {
                    source: "index",
                    medium: "web",
                    campaign: "recent_searches_carousel"
                },
                G = function() {
                    const e = !!(!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (0, k.Hg)(),
                        n = (0, r.isFeatureRunning)(r.feature `OABBaJePefWJaWQOcPIQDNYRMeRT`),
                        t = (0, a.getRequestContext)().getSiteType() === i.SiteType.MDOT;
                    return {
                        staysRecommendationInput: {
                            useCase: t ? "mvsf_mdot_stays_recent_searches" : "mvsf_www_stays_recent_searches",
                            strategyIds: ["901"],
                            tracking: B,
                            pagination: {
                                limit: 10
                            }
                        },
                        flightsRecommendationInput: {
                            useCase: t ? "mvsf_mdot_flights_recent_searches" : "mvsf_www_flights_recent_searches",
                            strategyIds: ["902"],
                            tracking: B,
                            pagination: {
                                limit: 10
                            }
                        },
                        includeRecommendations: e,
                        includeFlights: n
                    }
                },
                W = () => {
                    const e = Y(),
                        {
                            loading: n,
                            data: t,
                            error: r
                        } = function(e) {
                            const n = { ...U,
                                ...e
                            };
                            return w.useQuery(H, n)
                        }({
                            variables: G(),
                            skip: e,
                            fetchPolicy: "cache-first",
                            errorPolicy: "all"
                        });
                    return n || t || e || (0, d.reportWarning)("No result for recent searches data query"), r && (0, d.reportError)(r), (0, k.Hg)() ? (e => {
                        let {
                            carouselDML: n,
                            isLoading: t
                        } = e;
                        const r = (0, a.getRequestContext)().getSiteType() === i.SiteType.MDOT,
                            {
                                recentSearches: d,
                                lastSearch: o,
                                hasFlightsData: s
                            } = b(n),
                            l = T(d),
                            c = R(),
                            u = d.flatMap((e => f(e, c)));
                        return {
                            isLoading: t,
                            items: s ? M(u) : u,
                            heading: l,
                            size: y(),
                            isMdot: r,
                            componentId: "4d22cffe-4332-4c0e-ba0e-656240f7ebd8",
                            carouselName: "recent_searches_carousel",
                            hasFlightsData: s,
                            lastSearch: o
                        }
                    })({
                        carouselDML: t,
                        isLoading: n
                    }) : (e => {
                        let {
                            carouselDML: n,
                            isLoading: t
                        } = e;
                        const r = (0, a.getRequestContext)().getSiteType() === i.SiteType.MDOT,
                            d = R(),
                            s = null === n || void 0 === n ? void 0 : n.recentSearches,
                            l = null === s || void 0 === s ? void 0 : s.searches,
                            c = null === s || void 0 === s ? void 0 : s.title,
                            u = [],
                            m = (0, v.trackExperiment)((0, p.uE)());
                        return null === l || void 0 === l || l.forEach((e => {
                            u.push({
                                id: String(e.previousSearchId),
                                title: e.title,
                                subTitle: e.subtitle,
                                vertical: o.ICm.STAYS,
                                createdAt: e.createdAt,
                                groupComposition: e.subtitle2 || "",
                                numFilters: e.numFilters ? ? "",
                                searchParams: m > 0 && e.nflt || void 0,
                                img: {
                                    src: d(e)
                                },
                                countryCode: e.countryCode || "",
                                aspectRatio: N.Lz["1:1"],
                                url: (0, g.d)({
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
                                    selectedFilters: m > 0 ? e.nflt : void 0,
                                    previousSearchId: e.previousSearchId
                                }).toString()
                            })
                        })), {
                            isLoading: t,
                            items: u.length ? u : void 0,
                            heading: c || "",
                            size: y(),
                            isMdot: r,
                            componentId: (null === s || void 0 === s ? void 0 : s.campaignId) || "",
                            carouselName: (null === s || void 0 === s ? void 0 : s.carouselName) || "",
                            lastSearch: l && (null === l || void 0 === l ? void 0 : l.length) > 0 ? l[0] : void 0
                        }
                    })({
                        carouselDML: t,
                        isLoading: n
                    })
                },
                Y = () => !(!(0, k.Hg)() || (0, V.CR)())
        },
        b7559b80: (e, n, t) => {
            "use strict";
            t.d(n, {
                DZ: () => c,
                Hg: () => s,
                OE: () => l,
                qe: () => m
            });
            var i = t("af1e2b38"),
                a = t("28dbd132");
            let r = function(e) {
                    return e[e.ON_RENDER = 1] = "ON_RENDER", e[e.ON_VIEW = 2] = "ON_VIEW", e[e.ON_VIEW_WWW = 3] = "ON_VIEW_WWW", e[e.ON_VIEW_MDOT = 4] = "ON_VIEW_MDOT", e[e.ON_VIEW_ANON = 5] = "ON_VIEW_ANON", e[e.ON_VIEW_GENIUS = 6] = "ON_VIEW_GENIUS", e[e.ON_VIEW_RS_1_3 = 7] = "ON_VIEW_RS_1_3", e[e.ON_VIEW_RS_4_PLUS = 8] = "ON_VIEW_RS_4_PLUS", e
                }({}),
                d = function(e) {
                    return e[e.ONE_RS = 1] = "ONE_RS", e[e.TWO_RS = 2] = "TWO_RS", e[e.THREE_RS = 3] = "THREE_RS", e[e.FOUR_PLUS_RS = 4] = "FOUR_PLUS_RS", e[e.MISSING_IMAGE = 5] = "MISSING_IMAGE", e
                }({});
            const o = () => a.exp `OABBaJXCeZVGFTSJXZUKe`,
                s = () => 1 === (0, a.trackExperiment)(o()),
                l = () => {
                    const e = o();
                    (0, a.trackExperimentStage)(e, r.ON_RENDER)
                },
                c = (e, n, t) => {
                    const d = o();
                    (0, a.trackExperimentStage)(d, r.ON_VIEW), u(n), t === i.NM.MDOT ? (0, a.trackExperimentStage)(d, r.ON_VIEW_MDOT) : (0, a.trackExperimentStage)(d, r.ON_VIEW_WWW), n > 0 && n < 4 && (0, a.trackExperimentStage)(d, r.ON_VIEW_RS_1_3), n >= 4 && (0, a.trackExperimentStage)(d, r.ON_VIEW_RS_4_PLUS), e ? (0, a.trackExperimentStage)(d, r.ON_VIEW_GENIUS) : (0, a.trackExperimentStage)(d, r.ON_VIEW_ANON)
                },
                u = e => {
                    const n = o();
                    1 === e ? (0, a.trackCustomGoal)(n, d.ONE_RS) : 2 === e ? (0, a.trackCustomGoal)(n, d.TWO_RS) : 3 === e ? (0, a.trackCustomGoal)(n, d.THREE_RS) : e > 3 && (0, a.trackCustomGoal)(n, d.FOUR_PLUS_RS)
                },
                m = () => {
                    const e = o();
                    (0, a.trackCustomGoal)(e, d.MISSING_IMAGE)
                }
        },
        "2e53aec9": (e, n, t) => {
            "use strict";
            t.d(n, {
                Xt: () => u,
                bZ: () => l,
                kd: () => c
            });
            var i = t("af1e2b38"),
                a = t("dc6d28ff"),
                r = t("28dbd132");
            let d = function(e) {
                    return e[e.RS_ONRENDER = 1] = "RS_ONRENDER", e[e.RS_ONRENDER_WITH_FLIGHTS = 2] = "RS_ONRENDER_WITH_FLIGHTS", e[e.RS_ONVIEW = 3] = "RS_ONVIEW", e
                }({}),
                o = function(e) {
                    return e[e.FLIGHT_CARD_CLICK = 1] = "FLIGHT_CARD_CLICK", e
                }({});
            const s = e => e === i.NM.MDOT ? r.exp `OABBaJePeaXTeEWGHWYWCGTLBBVYYT` : r.exp `OABBaJePeaXTeEWGHWYWCGTQLOLOLMO`,
                l = () => (e => (0, r.trackExperiment)(s(e)))((0, a.getRequestContext)().getSiteType() || i.NM.WWW) >= 1,
                c = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    const n = (0, a.getRequestContext)().getSiteType() || i.NM.WWW,
                        t = s(n);
                    (0, r.trackExperimentStage)(t, d.RS_ONRENDER), e && (0, r.trackExperimentStage)(t, d.RS_ONRENDER_WITH_FLIGHTS)
                },
                u = () => {
                    const e = (0, a.getRequestContext)().getSiteType() || i.NM.WWW,
                        n = s(e);
                    (0, r.trackCustomGoal)(n, o.FLIGHT_CARD_CLICK)
                }
        },
        eef1968a: (e, n, t) => {
            "use strict";
            t.d(n, {
                $_: () => c,
                uE: () => l,
                yY: () => u
            });
            var i = t("af1e2b38"),
                a = t("28dbd132");
            let r = function(e) {
                    return e[e.ON_VIEW = 1] = "ON_VIEW", e[e.ON_VIEW_ANON = 2] = "ON_VIEW_ANON", e[e.ON_VIEW_GENIUS = 3] = "ON_VIEW_GENIUS", e[e.ON_VIEW_RS_1_3 = 4] = "ON_VIEW_RS_1_3", e[e.ON_VIEW_RS_4_PLUS = 5] = "ON_VIEW_RS_4_PLUS", e[e.ON_VIEW_US_VISITOR = 6] = "ON_VIEW_US_VISITOR", e
                }({}),
                d = function(e) {
                    return e[e.ON_CLICK_WITH_FILTER = 1] = "ON_CLICK_WITH_FILTER", e
                }({});
            const o = a.exp `cCHObKdPHMXCeZVWQIORe`,
                s = a.exp `cCHObKdPHMXCeZVWQIOLBBVYYT`,
                l = () => (0, i.sv)() === i.NM.MDOT ? s : o,
                c = ((0, a.trackExperiment)(l()), (e, n, t) => {
                    const i = l();
                    (0, a.trackExperimentStage)(i, r.ON_VIEW), t > 0 && t < 4 && (0, a.trackExperimentStage)(i, r.ON_VIEW_RS_1_3), t >= 4 && (0, a.trackExperimentStage)(i, r.ON_VIEW_RS_4_PLUS), n && (0, a.trackExperimentStage)(i, r.ON_VIEW_US_VISITOR), e ? (0, a.trackExperimentStage)(i, r.ON_VIEW_GENIUS) : (0, a.trackExperimentStage)(i, r.ON_VIEW_ANON)
                }),
                u = () => {
                    const e = l();
                    (0, a.trackCustomGoal)(e, d.ON_CLICK_WITH_FILTER)
                }
        },
        "11a12aca": (e, n, t) => {
            "use strict";
            t.d(n, {
                B: () => a,
                Lz: () => i,
                fE: () => r
            });
            let i = function(e) {
                    return e["5:4"] = "5:4", e["1:1"] = "1:1", e["3:4"] = "3:4", e["3:2"] = "3:2", e["2:3"] = "2:3", e["4:3"] = "4:3", e["2:1"] = "2:1", e["16:9"] = "16:9", e["21:9"] = "21:9", e["4:5"] = "4:5", e["9:16"] = "9:16", e
                }({}),
                a = function(e) {
                    return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e.LARGER = "larger", e.LARGEST = "largest", e
                }({}),
                r = function(e) {
                    return e.Left = "left", e.Right = "right", e
                }({})
        },
        c8dd5a70: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => o,
                c: () => r
            });
            var i = t("d1e54a96"),
                a = t("017725b3");
            const r = {
                    RegularUserInfo: "RegularUserInfo",
                    EarlyUpdateUserInfo: "EarlyUpdateUserInfo",
                    RemindedUserInfo: "RemindedUserInfo",
                    MotivatedUserInfo: "MotivatedUserInfo",
                    MotivatedSustainedUserInfo: "MotivatedSustainedUserInfo",
                    RenewedUserInfo: "RenewedUserInfo"
                },
                d = e => {
                    const n = (0, i.constructUrl)({
                        host: e.host,
                        pathname: e.action,
                        searchParams: new URLSearchParams(e.searchParams || "")
                    }).toString();
                    return {
                        text: e.title,
                        ariaLabel: e.title,
                        url: n
                    }
                },
                o = (e, n) => {
                    if (n) return;
                    const t = {};
                    if (null !== e && void 0 !== e && e.geniusVipMlp) {
                        var i, r;
                        const {
                            status: n,
                            sustainStatus: d,
                            currentBenefits: o,
                            programId: s,
                            programRegion: l,
                            endedAtFormatted: c,
                            remainDays: u,
                            programBatch: m,
                            cc1: v,
                            userBatchStatusInfo: g
                        } = e.geniusVipMlp, _ = null === o || void 0 === o ? void 0 : o.find((e => e.progressInfo && e.progressInfo.isReachCurrentUpperLimit)), k = null === o || void 0 === o ? void 0 : o.find((e => {
                            var n;
                            return e.progressInfo && (null === (n = e.progressInfo.reservations) || void 0 === n ? void 0 : n.length)
                        })), S = (null === o || void 0 === o || null === (i = o.find((e => {
                            var n;
                            return null === (n = e.progressInfo) || void 0 === n ? void 0 : n.reservations
                        }))) || void 0 === i || null === (i = i.progressInfo) || void 0 === i || null === (i = i.reservations) || void 0 === i ? void 0 : i.length) || 0, p = !Boolean(n === a.zrT.Expired || Boolean(_) && 1 === (null === o || void 0 === o ? void 0 : o.length)), N = null === o || void 0 === o ? void 0 : o.find((e => e.progressInfo && "lastBookedCityWithVipDiscount" in e.progressInfo)), {
                            lastBookedCityWithVipDiscount: E,
                            totalSavedAmountFormatted: f,
                            totalSavedAmountAccumulated: h,
                            isAccumulatedAmountReachUxThreshold: I
                        } = null === N || void 0 === N ? void 0 : N.progressInfo, T = 1 === S && (null === f || void 0 === f ? void 0 : f.amount) === (null === h || void 0 === h ? void 0 : h.amount) && (null === f || void 0 === f ? void 0 : f.currency) === (null === h || void 0 === h ? void 0 : h.currency), A = null === g || void 0 === g || null === (r = g.renewalProgramInfo) || void 0 === r ? void 0 : r.endedAtFormatted, b = null === g || void 0 === g ? void 0 : g.__typename;
                        t.mlp = {
                            programId: s,
                            programRegion: l,
                            endedAtFormatted: c,
                            renewalProgramEndedAtFormatted: A,
                            hasBooking: Boolean(k),
                            isReachCurrentUpperLimit: Boolean(_),
                            status: n,
                            sustainStatus: d,
                            visible: p,
                            currentBenefitsLength: (null === o || void 0 === o ? void 0 : o.length) || 0,
                            hasPriceMatch: !1,
                            priceMatchEndDateFormatted: "",
                            remainDays: u,
                            totalSavedAmountAccumulated: h,
                            lastBookedCityWithVipDiscount: E,
                            isAccumulatedAmountReachUxThreshold: I,
                            programBatch: m,
                            cc1: v,
                            isFirstBookingInProgramMode: T,
                            userStatus: b
                        }
                    }
                    if (null !== e && void 0 !== e && e.geniusVipPriceMatch) {
                        const {
                            status: n,
                            campaignData: i
                        } = e.geniusVipPriceMatch, r = n === a.cP1.ELIGIBLE;
                        r && null !== i && void 0 !== i && i.endsAtFormatted && (t.mlp = { ...t.mlp,
                            hasPriceMatch: r,
                            priceMatchEndDateFormatted: null === i || void 0 === i ? void 0 : i.endsAtFormatted
                        })
                    }
                    if (null !== e && void 0 !== e && e.geniusVipVoucherUI) {
                        const {
                            ui: n,
                            campaignInfo: i
                        } = e.geniusVipVoucherUI;
                        n && (t.voucher = {
                            voucherProgramId: i.programId,
                            visible: !!n.caption,
                            caption: String(n.caption),
                            title: n.title,
                            subtitle: n.subtitle,
                            cta: n.cta && "title" in n.cta ? d(n.cta) : void 0
                        })
                    }
                    return t
                }
        },
        "7fa013e2": (e, n, t) => {
            "use strict";
            t.d(n, {
                $7: () => I,
                $C: () => S,
                $f: () => E,
                A6: () => _,
                Bt: () => C,
                IH: () => D,
                Kq: () => R,
                M$: () => N,
                MZ: () => A,
                Pi: () => k,
                R: () => b,
                Wp: () => h,
                do: () => O,
                eT: () => L,
                gu: () => p,
                hz: () => x,
                kI: () => F,
                lP: () => T,
                yi: () => y,
                zq: () => f
            });
            var i = t("af1e2b38"),
                a = t("28dbd132");
            let r = function(e) {
                    return e[e.RENDER_WHERE_TO_NEXT = 1] = "RENDER_WHERE_TO_NEXT", e[e.RENDER_HERO = 2] = "RENDER_HERO", e[e.RENDER_SECONDARY_BANNERS = 3] = "RENDER_SECONDARY_BANNERS", e[e.RENDER_USPS = 4] = "RENDER_USPS", e[e.RENDER_RECENT_SEARCHES = 5] = "RENDER_RECENT_SEARCHES", e[e.RENDER_RVP = 6] = "RENDER_RVP", e[e.RENDER_PROMO_AREA = 7] = "RENDER_PROMO_AREA", e[e.RENDER_BELOW_SEARCH_AREA = 8] = "RENDER_BELOW_SEARCH_AREA", e[e.RENDER_QUEENMAB = 9] = "RENDER_QUEENMAB", e
                }({}),
                d = function(e) {
                    return e[e.VIEW_WHERE_TO_NEXT = 1] = "VIEW_WHERE_TO_NEXT", e[e.VIEW_HERO = 2] = "VIEW_HERO", e[e.VIEW_SECONDARY_BANNERS = 3] = "VIEW_SECONDARY_BANNERS", e[e.VIEW_USPS = 4] = "VIEW_USPS", e[e.VIEW_RECENT_SEARCHES = 5] = "VIEW_RECENT_SEARCHES", e[e.VIEW_RVP = 6] = "VIEW_RVP", e[e.VIEW_PROMO_AREA = 7] = "VIEW_PROMO_AREA", e[e.VIEW_BELOW_SEARCH_AREA = 8] = "VIEW_BELOW_SEARCH_AREA", e[e.VIEW_QUEENMAB = 9] = "VIEW_QUEENMAB", e
                }({}),
                o = function(e) {
                    return e[e.RENDER_HERO = 1] = "RENDER_HERO", e[e.RENDER_SECONDARY_BANNERS = 2] = "RENDER_SECONDARY_BANNERS", e[e.RENDER_USPS = 3] = "RENDER_USPS", e[e.RENDER_RECENT_SEARCHES = 4] = "RENDER_RECENT_SEARCHES", e[e.RENDER_RVP = 5] = "RENDER_RVP", e[e.RENDER_ABOVE_FEED_AREA = 6] = "RENDER_ABOVE_FEED_AREA", e[e.RENDER_BELOW_SEARCH_AREA = 7] = "RENDER_BELOW_SEARCH_AREA", e[e.RENDER_QUEENMAB = 8] = "RENDER_QUEENMAB", e
                }({}),
                s = function(e) {
                    return e[e.VIEW_HERO = 1] = "VIEW_HERO", e[e.VIEW_SECONDARY_BANNERS = 2] = "VIEW_SECONDARY_BANNERS", e[e.VIEW_USPS = 3] = "VIEW_USPS", e[e.VIEW_RECENT_SEARCHES = 4] = "VIEW_RECENT_SEARCHES", e[e.VIEW_RVP = 5] = "VIEW_RVP", e[e.VIEW_ABOVE_FEED_AREA = 6] = "VIEW_ABOVE_FEED_AREA", e[e.VIEW_BELOW_SEARCH_AREA = 7] = "VIEW_BELOW_SEARCH_AREA", e[e.VIEW_QUEENMAB = 8] = "VIEW_QUEENMAB", e
                }({});
            const l = a.exp `OABBaJePefMPSXHYaYLfDfEFEKCDWOOC`,
                c = a.exp `OABBaJePefMPSXHYaYLfDfEFEKdKNKNKWe`,
                u = a.exp `OABBaJePefMPSXHYaYLfDbdUWBLHIOOIBBO`,
                m = a.exp `OABBaJePefMPSXHYaYLfDbdUWBLHIcCcCcCC`,
                v = () => (0, i.Z6)().isMDOT ? u : m,
                g = () => (0, i.Z6)().isMDOT ? l : c,
                _ = () => {
                    (0, a.trackExperimentStage)(v(), (0, i.Z6)().isMDOT ? r.RENDER_HERO : o.RENDER_HERO)
                },
                k = () => {
                    (0, a.trackExperimentStage)(v(), (0, i.Z6)().isMDOT ? r.RENDER_SECONDARY_BANNERS : o.RENDER_SECONDARY_BANNERS)
                },
                S = () => {
                    (0, a.trackExperimentStage)(v(), (0, i.Z6)().isMDOT ? r.RENDER_USPS : o.RENDER_USPS)
                },
                p = () => {
                    (0, a.trackExperimentStage)(v(), (0, i.Z6)().isMDOT ? r.RENDER_RECENT_SEARCHES : o.RENDER_RECENT_SEARCHES)
                },
                N = () => {
                    (0, a.trackExperimentStage)(v(), (0, i.Z6)().isMDOT ? r.RENDER_RVP : o.RENDER_RVP)
                },
                E = () => {
                    (0, i.Z6)().isMDOT && (0, a.trackExperimentStage)(v(), r.RENDER_WHERE_TO_NEXT)
                },
                f = () => {
                    (0, i.Z6)().isMDOT && (0, a.trackExperimentStage)(v(), r.RENDER_PROMO_AREA)
                },
                h = () => {
                    (0, i.Z6)().isWWW && (0, a.trackExperimentStage)(v(), o.RENDER_QUEENMAB)
                },
                I = () => {
                    (0, i.Z6)().isWWW && (0, a.trackExperimentStage)(v(), o.RENDER_ABOVE_FEED_AREA)
                },
                T = () => {
                    (0, a.trackExperimentStage)(v(), (0, i.Z6)().isMDOT ? r.RENDER_BELOW_SEARCH_AREA : o.RENDER_BELOW_SEARCH_AREA)
                },
                A = () => {
                    (0, a.trackExperimentStage)(g(), (0, i.Z6)().isMDOT ? d.VIEW_HERO : s.VIEW_HERO)
                },
                b = () => {
                    (0, a.trackExperimentStage)(g(), (0, i.Z6)().isMDOT ? d.VIEW_SECONDARY_BANNERS : s.VIEW_SECONDARY_BANNERS)
                },
                C = () => {
                    (0, a.trackExperimentStage)(g(), (0, i.Z6)().isMDOT ? d.VIEW_USPS : s.VIEW_USPS)
                },
                R = () => {
                    (0, a.trackExperimentStage)(g(), (0, i.Z6)().isMDOT ? d.VIEW_RECENT_SEARCHES : s.VIEW_RECENT_SEARCHES)
                },
                y = () => {
                    (0, a.trackExperimentStage)(g(), (0, i.Z6)().isMDOT ? d.VIEW_RVP : s.VIEW_RVP)
                },
                O = () => {
                    (0, i.Z6)().isMDOT && (0, a.trackExperimentStage)(g(), d.VIEW_WHERE_TO_NEXT)
                },
                F = () => {
                    (0, i.Z6)().isMDOT && (0, a.trackExperimentStage)(g(), d.VIEW_PROMO_AREA)
                },
                L = () => {
                    (0, i.Z6)().isWWW && (0, a.trackExperimentStage)(g(), s.VIEW_QUEENMAB)
                },
                x = () => {
                    (0, i.Z6)().isWWW && (0, a.trackExperimentStage)(g(), s.VIEW_ABOVE_FEED_AREA)
                },
                D = () => {
                    (0, a.trackExperimentStage)(g(), (0, i.Z6)().isMDOT ? d.VIEW_BELOW_SEARCH_AREA : s.VIEW_BELOW_SEARCH_AREA)
                }
        },
        "1ea8ff05": (e, n, t) => {
            "use strict";
            t.d(n, {
                UR: () => u,
                W_: () => m,
                X3: () => c,
                o0: () => v
            });
            var i = t("af1e2b38"),
                a = t("dc6d28ff"),
                r = t("28dbd132"),
                d = t("239beb17"),
                o = t("e36d8828");
            const s = ["us", "fr", "ee", "gr", "ae", "ua", "pl", "ph", "hr", "mx", "my", "bg", "co", "qa", "nz", "th", "lu", "rs", "in", "kw", "jp", "ch", "cl", "pe", "dk", "fi", "no", "ro", "se", "bh", "hk", "om", "id", "au", "sa", "at", "be", "de", "ie", "it", "nl", "es", "cz", "hu", "is", "pt", "kz", "za", "mo", "ca", "cy", "mt", "gb", "br", "kr", "sg", "vn"];
            let l = function(e) {
                return e[e.RECENT_SEARCHES = 1] = "RECENT_SEARCHES", e[e.ON_VIEW = 3] = "ON_VIEW", e[e.SIGNED_OUT = 4] = "SIGNED_OUT", e[e.GENIUS = 5] = "GENIUS", e[e.UPCOMING_BOOKING = 6] = "UPCOMING_BOOKING", e[e.US = 8] = "US", e[e.WITHOUT_RECENT_SEARCHES = 9] = "WITHOUT_RECENT_SEARCHES", e
            }({});
            const c = () => (0, i.Z6)().isMDOT ? r.exp `OABBaJePefeeFbMKXTMHTcaWQOcOOIBBO` : r.exp `OABBaJePefeeFbMKXTMHTcaWQOccCcCcCC`,
                u = () => (0, r.trackExperiment)(c()),
                m = function(e, n) {
                    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    const i = (0, a.getRequestContext)().getVisitorCountry() || "";
                    if (!_(i, t)) return;
                    const d = "us" === i,
                        s = (0, o.jl)();
                    (0, r.trackExperimentStage)(c(), l.ON_VIEW), s ? (0, r.trackExperimentStage)(c(), l.GENIUS) : (0, r.trackExperimentStage)(c(), l.SIGNED_OUT), e && (0, r.trackExperimentStage)(c(), l.UPCOMING_BOOKING), d && (0, r.trackExperimentStage)(c(), l.US), n ? (0, r.trackExperimentStage)(c(), l.RECENT_SEARCHES) : (0, r.trackExperimentStage)(c(), l.WITHOUT_RECENT_SEARCHES)
                },
                v = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    const n = (0, a.getRequestContext)().getVisitorCountry() || "";
                    _(n, e) && (0, r.trackExperimentStage)(g(), 1)
                },
                g = () => r.exp `OABBaJePefeeFbMKXTTXaJNVJIeNBLFcCcCcCC`,
                _ = function(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return !!e && ((0, d.isFeatureRunning)(d.feature `aDMWaHYQPPIfIMLefPGLKHAUNSTXe`) ? !!n : s.includes(e))
                }
        },
        b52b592d: (e, n, t) => {
            "use strict";
            t.d(n, {
                LR: () => s,
                QI: () => l,
                d: () => c
            });
            var i = t("af1e2b38"),
                a = t("dc6d28ff"),
                r = t("28dbd132");
            const d = ["us", "fr", "ee", "gr", "ae", "ua", "pl", "ph", "hr", "mx", "my", "bg", "co", "qa", "nz", "th", "lu", "rs", "in", "kw", "jp", "ch", "cl", "pe", "dk", "fi", "no", "ro", "se", "bh", "hk", "om", "id", "au", "sa", "at", "be", "de", "ie", "it", "nl", "es", "cz", "hu", "is", "pt", "kz", "za", "mo", "ca", "cy", "mt", "gb", "br", "kr", "sg", "vn"];
            let o = function(e) {
                return e[e.ON_VIEW = 1] = "ON_VIEW", e[e.SIGNED_OUT = 2] = "SIGNED_OUT", e[e.GENIUS = 3] = "GENIUS", e[e.UPCOMING_BOOKING = 4] = "UPCOMING_BOOKING", e[e.US = 5] = "US", e[e.WITH_RECENT_SEARCH = 6] = "WITH_RECENT_SEARCH", e[e.PPC_TRAFFIC = 7] = "PPC_TRAFFIC", e
            }({});
            const s = () => (0, i.Z6)().isMDOT ? r.exp `OABBaJePefeeFbMKXTMHTcAZTaYYfPHe` : r.exp `OABBaJePefeeFbMKXTMHTcAZTbaTaTaET`,
                l = (e, n) => {
                    var t;
                    const i = (0, a.getRequestContext)(),
                        l = i.getVisitorCountry();
                    if (!l || !d.includes(l)) return;
                    const c = "us" === l,
                        u = Boolean(null === (t = (0, a.getRequestContext)().getUnpackedGuestAccessToken()) || void 0 === t ? void 0 : t.authenticatorAssuranceLevel),
                        {
                            partnerChannelId: m
                        } = i.getAffiliate() ? ? {};
                    (0, r.trackExperimentStage)(s(), o.ON_VIEW), u ? (0, r.trackExperimentStage)(s(), o.GENIUS) : (0, r.trackExperimentStage)(s(), o.SIGNED_OUT), e && (0, r.trackExperimentStage)(s(), o.UPCOMING_BOOKING), c && (0, r.trackExperimentStage)(s(), o.US), n && (0, r.trackExperimentStage)(s(), o.WITH_RECENT_SEARCH), m && [4].includes(m) && (0, r.trackExperimentStage)(s(), o.PPC_TRAFFIC)
                },
                c = () => {
                    (0, r.trackExperiment)(s()) > 0 && (0, r.trackExperimentStage)(s(), 9)
                }
        },
        "52ffbfd1": (e, n, t) => {
            "use strict";
            t.d(n, {
                Bb: () => v,
                W$: () => o,
                XA: () => l,
                Y$: () => s,
                _0: () => m,
                zz: () => u
            });
            var i = t("af1e2b38"),
                a = t("28dbd132");
            const r = a.exp `OABBaJcBHQQWcGHVHNEIMUKVBBVYYT`,
                d = a.exp `OABBaJcBHQQWcGHVHNEIMUKALOLOLMO`,
                o = () => (0, a.trackExperiment)(r) > 0,
                s = () => (0, a.trackExperiment)(d) > 0,
                l = () => {
                    const {
                        isMDOT: e
                    } = (0, i.Z6)();
                    return e ? o() : s()
                },
                c = () => {
                    const {
                        isMDOT: e
                    } = (0, i.Z6)();
                    return e ? r : d
                },
                u = () => {
                    (0, a.trackCustomGoal)(c(), 1)
                },
                m = () => {
                    (0, a.trackCustomGoal)(c(), 2)
                },
                v = () => {
                    if ("undefined" === typeof window || "undefined" === typeof document) return;
                    const e = "js_index_queenmab_rendered_components_count",
                        n = l();
                    setTimeout((function() {
                        n ? t() : i()
                    }), 5e3);
                    const t = () => {
                            const n = Array.from(document.querySelectorAll("[data-widgetid]")).map((e => {
                                var n;
                                return (null === e || void 0 === e || null === (n = e.textContent) || void 0 === n ? void 0 : n.trim()) || ""
                            })).filter((e => e.length > 0)).length;
                            (0, a.trackGoalWithValue)(e, n)
                        },
                        i = () => {
                            const n = Array.from(document.querySelectorAll("[data-qmab-component-id]")).map((e => {
                                var n;
                                return (null === e || void 0 === e || null === (n = e.textContent) || void 0 === n ? void 0 : n.trim()) || ""
                            })).filter((e => e.length > 0)).length;
                            (0, a.trackGoalWithValue)(e, n)
                        }
                }
        },
        "6ff170fe": (e, n, t) => {
            "use strict";
            t.d(n, {
                F0: () => p,
                Ht: () => k,
                M5: () => v,
                UE: () => _,
                fR: () => S,
                rU: () => g
            });
            var i = t("af1e2b38"),
                a = t("dc6d28ff"),
                r = t("28dbd132"),
                d = t("e36d8828");
            const o = () => "us" === (0, a.getRequestContext)().getVisitorCountry(),
                s = r.exp `OABBaJdUBfUaRIfMPePcAFRFGUNTBBSSUFRURURHe`,
                l = r.exp `OABBaJdUBfUaRIfMPePcAFRFGUNTBBSSUWPHDDWe`;
            let c = function(e) {
                    return e[e.NON_BOT_US_USER = 1] = "NON_BOT_US_USER", e[e.COLD_START_US_USER = 2] = "COLD_START_US_USER", e[e.WARM_START_US_USER = 3] = "WARM_START_US_USER", e[e.DIRECT_TRAFFIC = 4] = "DIRECT_TRAFFIC", e[e.PAID_TRAFFIC = 5] = "PAID_TRAFFIC", e[e.GENIUS_USER = 6] = "GENIUS_USER", e[e.QMAB_ON_VIEW = 7] = "QMAB_ON_VIEW", e[e.ELIGIBLE_US_USERS = 8] = "ELIGIBLE_US_USERS", e[e.HAS_UPCOMING_BOOKINGS = 9] = "HAS_UPCOMING_BOOKINGS", e
                }({}),
                u = function(e) {
                    return e[e.ON_CLICK_HOMES_GUESTS_LOVE = 1] = "ON_CLICK_HOMES_GUESTS_LOVE", e[e.ON_CLICK_TRENDING_DESTINATION = 2] = "ON_CLICK_TRENDING_DESTINATION", e[e.ON_CLICK_DOMESTIC_DESTINATION = 3] = "ON_CLICK_DOMESTIC_DESTINATION", e[e.ON_CLICK_WEEKEND_DEALS = 4] = "ON_CLICK_WEEKEND_DEALS", e[e.ON_CLICK_SIGNUP = 5] = "ON_CLICK_SIGNUP", e
                }({});
            const m = () => {
                    const {
                        isWWW: e
                    } = (0, i.Z6)();
                    return e ? s : l
                },
                v = () => (0, r.trackExperiment)(m()) > 0,
                g = (e, n, t) => {
                    const i = m();
                    o() && ((0, r.trackExperimentStage)(i, c.NON_BOT_US_USER), (0, d.jl)() && (0, r.trackExperimentStage)(i, c.GENIUS_USER), n && ((0, r.trackExperimentStage)(i, c.ELIGIBLE_US_USERS), t ? (0, r.trackExperimentStage)(i, c.COLD_START_US_USER) : (0, r.trackExperimentStage)(i, c.WARM_START_US_USER)), (() => {
                        const {
                            partnerChannelId: e
                        } = (0, a.getRequestContext)().getAffiliate() ? ? {};
                        return e && [4, 14].includes(e)
                    })() ? (0, r.trackExperimentStage)(i, c.PAID_TRAFFIC) : (0, r.trackExperimentStage)(i, c.DIRECT_TRAFFIC), e && (0, r.trackExperimentStage)(i, c.HAS_UPCOMING_BOOKINGS))
                },
                _ = () => {
                    o() && (0, r.trackCustomGoal)(m(), u.ON_CLICK_HOMES_GUESTS_LOVE)
                },
                k = () => {
                    o() && (0, r.trackCustomGoal)(m(), u.ON_CLICK_TRENDING_DESTINATION)
                },
                S = () => {
                    o() && (0, r.trackCustomGoal)(m(), u.ON_CLICK_DOMESTIC_DESTINATION)
                },
                p = () => {
                    o() && (0, r.trackCustomGoal)(m(), u.ON_CLICK_WEEKEND_DEALS)
                }
        },
        "27fe0528": (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => E
            });
            var i = t("dc6d28ff"),
                a = t("41c6c66e"),
                r = t("c9d78bdd"),
                d = t("017725b3");
            var o = t("011fe5de");
            const s = {
                    kind: "Document",
                    definitions: (e => {
                        const n = {};
                        return e.filter((e => {
                            if ("FragmentDefinition" !== e.kind) return !0;
                            const t = e.name.value;
                            return !n[t] && (n[t] = !0, !0)
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
                    }].concat(o.u.definitions)),
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
                l = {
                    kind: "Document",
                    definitions: (e => {
                        const n = {};
                        return e.filter((e => {
                            if ("FragmentDefinition" !== e.kind) return !0;
                            const t = e.name.value;
                            return !n[t] && (n[t] = !0, !0)
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
                    }].concat(s.definitions)),
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
                c = {
                    kind: "Document",
                    definitions: (e => {
                        const n = {};
                        return e.filter((e => {
                            if ("FragmentDefinition" !== e.kind) return !0;
                            const t = e.name.value;
                            return !n[t] && (n[t] = !0, !0)
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
                    }].concat(o.u.definitions)),
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
                u = {
                    kind: "Document",
                    definitions: (e => {
                        const n = {};
                        return e.filter((e => {
                            if ("FragmentDefinition" !== e.kind) return !0;
                            const t = e.name.value;
                            return !n[t] && (n[t] = !0, !0)
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
                    }].concat(c.definitions)),
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
            var m = t("cedcabf9");
            const v = {},
                g = {
                    kind: "Document",
                    definitions: (e => {
                        const n = {};
                        return e.filter((e => {
                            if ("FragmentDefinition" !== e.kind) return !0;
                            const t = e.name.value;
                            return !n[t] && (n[t] = !0, !0)
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
                    }], l.definitions, [{
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
                    }], u.definitions, [{
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
            var _ = t("2bb3685b"),
                k = t("4933a3e7");
            const S = () => ["index_global_alerts", "index_main"];
            var p = t("5db8920d"),
                N = t("dfb9cb18");

            function E(e, n, t) {
                var o, s;
                const l = (0, i.getRequestContext)(),
                    c = l.getBasePageUrl(),
                    u = c.toString(),
                    E = c.searchParams,
                    f = E.getAll(_.nh),
                    h = t ? [t] : S(),
                    I = (0, r.Y2)() ? [d.HeM.INDEPENDENCE_DAY] : [],
                    T = (0, N.m)(E),
                    A = {
                        input: {
                            regionsIds: h,
                            testCampaignIds: f,
                            clientEligibility: I
                        }
                    };
                n || (0, k.z)("Calling Merch Platform with variables ", {
                    queryVariables: A
                });
                const {
                    error: b,
                    loading: C,
                    data: R,
                    ...y
                } = function(e) {
                    const n = { ...v,
                        ...e
                    };
                    return m.useQuery(g, n)
                }({
                    skip: n,
                    context: {
                        headers: { ...(0, p.l)(!0),
                            ...(0, N.j)(T)
                        }
                    },
                    variables: A
                });
                return n || (0, k.$)(R, A, {
                    error: b,
                    loading: C,
                    data: R,
                    ...y
                }), n || (0, k.z)("Response from Merch Platform ", {
                    error: b,
                    loading: C,
                    data: R
                }), n || C || "MerchComponentsResult" === (null === R || void 0 === R || null === (o = R.merchComponents) || void 0 === o ? void 0 : o.__typename) || (0, a.reportGrumble)("No result from merch platform", {
                    requestUrl: u
                }), b && (0, a.reportError)(b), "MerchComponentsResult" === (null === R || void 0 === R || null === (s = R.merchComponents) || void 0 === s ? void 0 : s.__typename) ? e(R, {
                    requestContext: l,
                    loading: C,
                    error: b,
                    regionId: t
                }) : e(void 0, {
                    requestContext: l,
                    loading: C,
                    error: b,
                    regionId: t
                })
            }
        },
        "8486f731": (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => v
            });
            var i = t("dc6d28ff"),
                a = t("c44dcb0c"),
                r = t("41c6c66e"),
                d = t("cedcabf9");
            const o = {},
                s = {
                    kind: "Document",
                    definitions: (e => {
                        const n = {};
                        return e.filter((e => {
                            if ("FragmentDefinition" !== e.kind) return !0;
                            const t = e.name.value;
                            return !n[t] && (n[t] = !0, !0)
                        }))
                    })([{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "PromotionalRegionsExternalServices"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "geniusVipInput"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "GeniusVipMinimumLovableProgramInput"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "geniusVipPriceMatchInput"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "GeniusVipPriceMatchInput"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "geniusVipVoucherUIInput"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "GeniusVipVoucherUIInput"
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
                                    value: "geniusVipMlp"
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
                                            value: "geniusVipInput"
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
                                            value: "status"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "programId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "programRegion"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "endedAtFormatted"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "remainDays"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "sustainStatus"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "programBatch"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "cc1"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "currentBenefits"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "rewardPercentage"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "benefitType"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "progressInfo"
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
                                                                value: "MlpProgressInfoInstantDiscount"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isReachCurrentUpperLimit"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "lastBookedCityWithVipDiscount"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isTotalSavedAmountReachUxThreshold"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalSavedAmountFormatted"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "amount"
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
                                                                            value: "formattedString"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isAccumulatedAmountReachUxThreshold"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalSavedAmountAccumulated"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "amount"
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
                                                                            value: "formattedString"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "reservations"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "reservationId"
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
                                            value: "userBatchStatusInfo"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isFirstEntry"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "EarlyUpdateUserInfo"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "renewalProgramInfo"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "RenewalProgramInfoFragment"
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
                                                        value: "MotivatedSustainedUserInfo"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "renewalProgramInfo"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "RenewalProgramInfoFragment"
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
                                                        value: "MotivatedUserInfo"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "renewalProgramInfo"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "RenewalProgramInfoFragment"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "geniusVipPriceMatch"
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
                                            value: "geniusVipPriceMatchInput"
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
                                            value: "status"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "campaignData"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAtFormatted"
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
                                    value: "geniusVipVoucherUI"
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
                                            value: "geniusVipVoucherUIInput"
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
                                            value: "campaignInfo"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "programId"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ui"
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
                                                        value: "GeniusVipVoucherBanner"
                                                    }
                                                },
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
                                                            value: "cta"
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
                                                                        value: "VoucherWebLink"
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
                                                                            value: "host"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "action"
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
                    }].concat([{
                        kind: "FragmentDefinition",
                        name: {
                            kind: "Name",
                            value: "RenewalProgramInfoFragment"
                        },
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ProgramBriefInfo"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "endedAtFormatted"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "lastingDuration"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "inMonths"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "programBenefits"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "benefitType"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }])),
                    loc: {
                        start: 0,
                        end: 2073,
                        source: {
                            body: "\n  query PromotionalRegionsExternalServices(\n    $geniusVipInput: GeniusVipMinimumLovableProgramInput\n    $geniusVipPriceMatchInput: GeniusVipPriceMatchInput\n    $geniusVipVoucherUIInput: GeniusVipVoucherUIInput\n  ) {\n    geniusVipMlp(input: $geniusVipInput) {\n      status\n      programId\n      programRegion\n      endedAtFormatted\n      remainDays\n      sustainStatus\n      programBatch\n      cc1\n      currentBenefits {\n        rewardPercentage\n        benefitType\n        progressInfo {\n          ... on MlpProgressInfoInstantDiscount {\n            isReachCurrentUpperLimit\n            lastBookedCityWithVipDiscount\n            isTotalSavedAmountReachUxThreshold\n            totalSavedAmountFormatted {\n              amount\n              currency\n              formattedString\n            }\n            isAccumulatedAmountReachUxThreshold\n            totalSavedAmountAccumulated {\n              amount\n              currency\n              formattedString\n            }\n            reservations {\n              reservationId\n            }\n          }\n        }\n      }\n      userBatchStatusInfo {\n        isFirstEntry\n        ... on EarlyUpdateUserInfo {\n          renewalProgramInfo {\n            ...RenewalProgramInfoFragment\n          }\n        }\n        ... on MotivatedSustainedUserInfo {\n          renewalProgramInfo {\n            ...RenewalProgramInfoFragment\n          }\n        }\n        ... on MotivatedUserInfo {\n          renewalProgramInfo {\n            ...RenewalProgramInfoFragment\n          }\n        }\n      }\n    }\n    geniusVipPriceMatch(input: $geniusVipPriceMatchInput) {\n      status\n      campaignData {\n        endsAtFormatted\n      }\n    }\n    geniusVipVoucherUI(input: $geniusVipVoucherUIInput) {\n      campaignInfo {\n        programId\n      }\n      ui {\n        ... on GeniusVipVoucherBanner {\n          caption\n          title\n          subtitle\n          cta {\n            ... on VoucherWebLink {\n              title\n              host\n              action\n              searchParams\n            }\n          }\n        }\n      }\n    }\n  }\n  \n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            var l = t("017725b3");

            function c(e) {
                const n = {
                        geniusVipInput: {
                            sourcePage: l.ccX.INDEX
                        },
                        geniusVipPriceMatchInput: {
                            sourcePage: l.ccX.INDEX
                        },
                        geniusVipVoucherUIInput: {
                            sourcePage: l.ccX.INDEX
                        }
                    },
                    {
                        data: t,
                        error: i
                    } = function(e) {
                        const n = { ...o,
                            ...e
                        };
                        return d.useQuery(s, n)
                    }({
                        variables: n
                    });
                return i && (0, r.reportError)(i), e(t, i)
            }
            var u = t("c1a8b9b7"),
                m = t("c8dd5a70");
            const v = () => {
                const e = (0, i.getRequestContext)(),
                    n = (0, a.useI18n)(),
                    t = c(m.Z),
                    {
                        value: r
                    } = (0, u.b)();
                return {
                    requestContext: e,
                    i18n: n,
                    userHasUpcomingBookings: r,
                    geniusVipResponse: t
                }
            }
        },
        "7ba12574": (e, n, t) => {
            "use strict";
            t.d(n, {
                r: () => s
            });
            var i = t("239beb17"),
                a = t("41c6c66e"),
                r = t("cedcabf9");
            const d = {},
                o = {
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
            const s = () => {
                var e;
                const n = !(0, i.isFeatureRunning)(i.feature `OABBaJePefTFBaMJYIPNZFZeaPLfYCeHHQC`),
                    {
                        loading: t,
                        data: s,
                        error: l
                    } = function(e) {
                        const n = { ...d,
                            ...e
                        };
                        return r.useQuery(o, n)
                    }({
                        skip: n
                    });
                return t || s || n || (0, a.reportWarning)("No result for new/returning user status query"), l && (0, a.reportError)(l), 2 === (null === s || void 0 === s || null === (e = s.userReturnTypeQuery) || void 0 === e ? void 0 : e.type)
            }
        },
        c9d78bdd: (e, n, t) => {
            "use strict";
            t.d(n, {
                Ds: () => l,
                J1: () => o,
                Y2: () => s
            });
            var i = t("d0989236"),
                a = t("4f475142"),
                r = t("0fc8afc9"),
                d = t("6ff170fe");
            const o = () => {
                    var e, n, t;
                    const {
                        visitorCountry: d,
                        basePageUrl: o,
                        isInternalIp: s
                    } = (0, i.B)(), l = (0, r.et)();
                    if (s && "1" === (null === o || void 0 === o || null === (e = o.searchParams) || void 0 === e ? void 0 : e.get("debug_us_independence"))) return !0;
                    if ("us" !== d) return !1;
                    if (!l.isLoading && (null === l || void 0 === l || null === (n = l.items) || void 0 === n || !n.length)) return !0;
                    const c = null === l || void 0 === l || null === (t = l.items) || void 0 === t ? void 0 : t[0];
                    if ("us" === (null === c || void 0 === c ? void 0 : c.countryCode)) {
                        const e = new URL(c.url || "https://www.booking.com"),
                            n = (0, a.Xk)(e.searchParams);
                        if (n) {
                            const {
                                checkin: e
                            } = n;
                            return 5 === e.getMonth() && e.getDate() >= 6 || 6 === e.getMonth() && e.getDate() <= 6
                        }
                    }
                    return !1
                },
                s = () => o() && (0, d.M5)(),
                l = () => {
                    var e;
                    const {
                        visitorCountry: n
                    } = (0, i.B)(), t = (0, r.et)();
                    return "us" === n && !(t.isLoading || null !== t && void 0 !== t && null !== (e = t.items) && void 0 !== e && e.length)
                }
        },
        c1a8b9b7: (e, n, t) => {
            "use strict";
            t.d(n, {
                b: () => l
            });
            var i = t("ead71eb0"),
                a = t("41c6c66e"),
                r = t("cedcabf9");
            const d = {},
                o = {
                    kind: "Document",
                    definitions: [{
                        kind: "OperationDefinition",
                        operation: "query",
                        name: {
                            kind: "Name",
                            value: "UpcomingBookings"
                        },
                        variableDefinitions: [{
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "caller"
                                }
                            },
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "String"
                                }
                            },
                            directives: []
                        }, {
                            kind: "VariableDefinition",
                            variable: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "useCase"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "String"
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
                                    value: "timeWindow"
                                }
                            },
                            type: {
                                kind: "NonNullType",
                                type: {
                                    kind: "NamedType",
                                    name: {
                                        kind: "Name",
                                        value: "CDPTimeWindow"
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
                                    value: "cdpUserFeatures"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "caller"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "caller"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "useCases"
                                    },
                                    value: {
                                        kind: "ListValue",
                                        values: [{
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "useCase"
                                            }
                                        }]
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "upcomingBookingExists"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "timeWindow"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "timeWindow"
                                                }
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "CDPBooleanResult"
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
                                                        value: "CDPErrorResult"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "message"
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
                    }],
                    loc: {
                        start: 0,
                        end: 361,
                        source: {
                            body: "\n  query UpcomingBookings(\n    $caller: String\n    $useCase: String!\n    $timeWindow: CDPTimeWindow!\n  ) {\n    cdpUserFeatures(caller: $caller, useCases: [$useCase]) {\n      upcomingBookingExists(timeWindow: $timeWindow) {\n        ... on CDPBooleanResult {\n          value\n        }\n        ... on CDPErrorResult {\n          message\n        }\n      }\n    }\n  }\n",
                            name: "GraphQL request",
                            locationOffset: {
                                line: 1,
                                column: 1
                            }
                        }
                    }
                };
            var s = t("e36d8828");
            const l = () => {
                var e;
                const n = !(0, s.jl)(),
                    {
                        loading: t,
                        data: l,
                        error: c
                    } = function(e) {
                        const n = { ...d,
                            ...e
                        };
                        return r.useQuery(o, n)
                    }({
                        variables: {
                            useCase: "ALL_IndexPage_Flag_ExperimentTracking_UserswithUpcomingBooking",
                            caller: "index-lp-web-mfe",
                            timeWindow: {
                                type: "MOVING",
                                durationInDays: 1e3,
                                offsetInDays: 0
                            }
                        },
                        fetchPolicy: "cache-first",
                        skip: n
                    }),
                    u = null === l || void 0 === l || null === (e = l.cdpUserFeatures) || void 0 === e ? void 0 : e.upcomingBookingExists;
                return (0, i.useEffect)((() => {
                    n || t || (l || (0, a.reportWarning)("No data for upcoming bookings"), c && (0, a.reportError)(c), "CDPErrorResult" === (null === u || void 0 === u ? void 0 : u.__typename) && (0, a.reportWarning)(u.message))
                }), [n, t, l, c, u]), n ? {
                    value: !1,
                    loading: !1
                } : "CDPBooleanResult" === (null === u || void 0 === u ? void 0 : u.__typename) ? {
                    value: u.value,
                    loading: !1
                } : {
                    value: !1,
                    loading: t
                }
            }
        },
        "3d486da1": (e, n, t) => {
            "use strict";
            t.d(n, {
                D6: () => g,
                YV: () => v,
                al: () => m,
                Ie: () => u,
                dU: () => c
            });
            var i = t("dc6d28ff"),
                a = t("c44dcb0c");
            const r = {
                    ar: 1,
                    bg: 1,
                    en: 1,
                    "en-gb": 1,
                    "en-us": 1,
                    "es-mx": 1,
                    he: 1,
                    ja: 1,
                    ko: 1,
                    ms: 1,
                    th: 1,
                    tl: 1,
                    zh: 1,
                    "zh-cn": 1,
                    "zh-tw": 1
                },
                d = {
                    bg: 1,
                    cs: 1,
                    et: 1,
                    fi: 1,
                    fr: 1,
                    hu: 1,
                    lv: 1,
                    lt: 1,
                    no: 1,
                    pl: 1,
                    "pt-pt": 1,
                    ru: 1,
                    sk: 1,
                    sr: 1,
                    sv: 1,
                    uk: 1
                },
                o = /(\d)(?=(\d{3})+(?!\d))/g;

            function s(e, n) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                if (isNaN(e)) return "";
                const i = n in r,
                    a = i ? "." : ",";
                let s = i ? "," : ".";
                n in d && (s = " ");
                const l = Math.pow(10, t),
                    c = (Math.round(e * l) / l).toFixed(t),
                    u = c.split(".")[0],
                    m = c.split(".")[1];
                return u.replace(o, `$1${s}`) + (m ? a + m : "")
            }
            const l = e => {
                    const n = [{
                        from: null,
                        to: 3,
                        copy: (0, a.t)("review_adj_very_poor")
                    }, {
                        from: 3,
                        to: 4,
                        copy: (0, a.t)("review_adj_poor")
                    }, {
                        from: 4,
                        to: 5,
                        copy: (0, a.t)("review_adj_disappointing")
                    }, {
                        from: 5,
                        to: 5.6,
                        copy: (0, a.t)("review_adj_average")
                    }, {
                        from: 5.6,
                        to: 6,
                        copy: (0, a.t)("review_adj_above_average")
                    }, {
                        from: 6,
                        to: 7,
                        copy: (0, a.t)("review_adj_pleasant")
                    }, {
                        from: 7,
                        to: 8,
                        copy: (0, a.t)("review_adj_good")
                    }, {
                        from: 8,
                        to: 8.6,
                        copy: (0, a.t)("review_adj_very_good")
                    }, {
                        from: 8.6,
                        to: 9,
                        copy: (0, a.t)("review_adj_fabulous")
                    }, {
                        from: 9,
                        to: 9.5,
                        copy: (0, a.t)("review_adj_superb")
                    }, {
                        from: 9.5,
                        to: null,
                        copy: (0, a.t)("review_adj_exceptional")
                    }];
                    for (const t of n)
                        if (!(t.from && t.from > e) && !(t.to && t.to <= e)) return {
                            ratingAdjective: t.copy
                        };
                    throw new Error("score range is missed")
                },
                c = () => {
                    const e = (0, i.getRequestContext)().getBPlatformEnvironment();
                    return e && "dev" !== e && "dqs" !== e ? "prod" : "dqs"
                },
                u = (e, n, t) => {
                    if (void 0 !== n && void 0 !== t) return {
                        score: n.toFixed(1),
                        rating: e.trans(l(n).ratingAdjective),
                        reviewCount: e.trans((0, a.t)("num_reviews_sr_page", {
                            variables: {
                                num_reviews: s(t, e.language),
                                num_exception: t || ""
                            }
                        }))
                    }
                },
                m = e => ({
                    formattedScore: (null === e || void 0 === e ? void 0 : e.score) || "",
                    formattedReviewCount: null === e || void 0 === e ? void 0 : e.reviewCount,
                    rating: (null === e || void 0 === e ? void 0 : e.rating) || "",
                    ariaLabel: (null === e || void 0 === e ? void 0 : e.score) || "",
                    ratingReviewAriaLabel: (null === e || void 0 === e ? void 0 : e.rating) || ""
                }),
                v = (e, n) => {
                    if (e) return {
                        text: n.trans((0, a.t)("m_sr_distance_from_centre", {
                            variables: {
                                distanceInKmFromCentre: e
                            }
                        })) || "",
                        iconName: "GeoPinIcon"
                    }
                },
                g = e => [null === e || void 0 === e ? void 0 : e.translatedCityName, null === e || void 0 === e ? void 0 : e.translatedDistrictName].filter(Boolean).join(", ") || ""
        },
        "2bb3685b": (e, n, t) => {
            "use strict";
            t.d(n, {
                Jv: () => d,
                gh: () => r,
                nh: () => i,
                q$: () => a
            });
            const i = "b_merch_test_campaign_id",
                a = "b_genius_data_debug",
                r = ["b-webcore-transactional-content-service", "b-merch-platform-campaign-serving-api"],
                d = {
                    threshold: .2,
                    triggerOnce: !0
                }
        },
        "2db41414": (e, n, t) => {
            "use strict";
            t.d(n, {
                X: () => a,
                Z: () => r
            });
            var i = t("5c4eda5e");
            const a = (e, n, t, a) => {
                    const r = i.J[a][n][t];
                    return e ? {
                        "1x": e.replace("<SIZE>", r["1x"]),
                        "2x": e.replace("<SIZE>", r["2x"])
                    } : null
                },
                r = (e, n, t) => e && t + e.replace("<SIZE>", n)
        },
        "5c4eda5e": (e, n, t) => {
            "use strict";
            t.d(n, {
                J: () => a,
                y: () => i
            });
            let i = function(e) {
                return e.IndexQmabDesktop = "IndexQmabDesktop", e.IndexQmabMdot = "IndexQmabMdot", e
            }({});
            const a = {
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
        fa98a3d3: (e, n, t) => {
            "use strict";
            t.d(n, {
                N8: () => s,
                ZP: () => l
            });
            var i = t("ead71eb0"),
                a = t("d0fefcf5");
            const r = "CAPLA_EVENT_index-lp_web-mfe_LAUNCHPAD_STAYS_TAB_CLICKED",
                d = "CAPLA_EVENT_index-lp_web-mfe_LAUNCHPAD_FLIGHTS_TAB_CLICKED",
                o = "CAPLA_EVENT_index-lp_web-mfe_LAUNCHPAD_CARS_TAB_CLICKED";
            let s = function(e) {
                return e.STAYS = "STAYS", e.FLIGHTS = "FLIGHTS", e.CARS = "CARS", e.ATTRACTIONS = "ATTRACTIONS", e.TAXI = "TAXI", e
            }({});
            const l = () => {
                const [e, n] = (0, i.useState)(s.STAYS);
                return (0, i.useEffect)((() => {
                    const e = {
                            [r]: s.STAYS,
                            [d]: s.FLIGHTS,
                            [o]: s.CARS
                        },
                        t = Object.entries(e).map((e => {
                            let [t, i] = e;
                            return a.eventBus.subscribe(t, (() => n(i)))
                        }));
                    return () => t.forEach((e => a.eventBus.unsubscribe(e)))
                }), []), {
                    currentTab: e
                }
            }
        },
        "4933a3e7": (e, n, t) => {
            "use strict";
            t.d(n, {
                $: () => d,
                z: () => a
            });
            var i = t("dc6d28ff");
            const a = function() {
                const e = (0, i.getRequestContext)(),
                    n = e.getBPlatformEnvironment(),
                    t = e.getBasePageUrl(),
                    a = e.isInternalUser() && "1" === t.searchParams.get("debug");
                if ((!n || "dev" === n || "dqs" === n) && a) {
                    for (var r = arguments.length, d = new Array(r), o = 0; o < r; o++) d[o] = arguments[o];
                    console.log(d)
                }
            };
            let r;

            function d(e, n, t) {
                const a = (0, i.getRequestContext)(),
                    d = a.getBasePageUrl();
                a.isInternalUser() && "1" === d.searchParams.get("debug_merch") && null !== e && void 0 !== e && e.merchComponents && e !== r && (console.groupCollapsed("Merch Platform debug info"), console.log("Merch Platform request variables:", n), console.log("Merch Platform response data:", e), console.log("Metadata:", t), console.groupEnd(), r = e)
            }
        },
        "75c11388": (e, n, t) => {
            "use strict";
            t.d(n, {
                zD: () => r,
                CO: () => d
            });
            var i = t("30190550"),
                a = (t("41c6c66e"), t("d1e54a96"));
            t("ead71eb0"), t("84451606"), t("43a4d203"), t("dc6d28ff");
            t("017725b3");
            const r = e => "LoginLanding" === (null === e || void 0 === e ? void 0 : e.__typename) ? o() : "DeeplinkLanding" === (null === e || void 0 === e ? void 0 : e.__typename) ? s(e) : "DirectLinkLanding" === (null === e || void 0 === e ? void 0 : e.__typename) ? l(e) : "ResolvedLinkLanding" === (null === e || void 0 === e ? void 0 : e.__typename) ? c(e) : "ScrollToAnchor" === (null === e || void 0 === e ? void 0 : e.__typename) ? u(e) : void 0,
                d = e => {
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
                o = () => (0, i.wd)({
                    componentId: i.au.MERCH_PLATFORM_INDEX_CTA,
                    prompt: i.L4.SIGN_IN
                }),
                s = e => {
                    let {
                        urlPath: n,
                        queryParams: t
                    } = e;
                    const i = new URL(n);
                    for (const a of t || []) i.searchParams.set(a.name, a.value);
                    return i.toString()
                },
                l = e => {
                    let {
                        urlPath: n,
                        queryParams: t,
                        role: i,
                        hash: r
                    } = e;
                    const o = new URLSearchParams;
                    for (const a of t || []) o.set(a.name, a.value);
                    return (0, a.constructUrl)({
                        host: i ? d(i) : void 0,
                        pathname: n,
                        searchParams: o,
                        hash: r ? ? void 0
                    }).toString()
                },
                c = e => {
                    let {
                        url: n
                    } = e;
                    return n
                },
                u = e => {
                    let {
                        anchor: n
                    } = e;
                    return `#${n}`
                }
        },
        b09374dd: (e, n, t) => {
            "use strict";
            t.d(n, {
                NU: () => s
            });
            var i = t("ead71eb0"),
                a = t.n(i),
                r = t("8ebe6081"),
                d = t("41c6c66e"),
                o = t("c44dcb0c");
            const s = e => {
                    if ("string" !== typeof e) return void(0, d.reportWarning)("Unknown type is provided for countdown caption. Type - " + typeof e);
                    const n = l(e),
                        t = Math.floor(n / 86400);
                    return n > 172800 ? a().createElement(o.Trans, {
                        tag: "deals_index_hero_blackfriday2022_countdown_days",
                        variables: {
                            num_days: t,
                            num_exception: t
                        }
                    }) : c(n)
                },
                l = e => {
                    const n = new Date;
                    return (new Date(e).getTime() - n.getTime()) / 1e3
                },
                c = e => {
                    const n = new Date,
                        t = new Date;
                    return t.setSeconds(n.getSeconds() + e), a().createElement(o.Trans, {
                        tag: "deals_index_hero_blackfriday2022_countdown_timer",
                        variables: {
                            countdown: "<0/>"
                        },
                        components: [a().createElement(r.Z, {
                            key: "1",
                            expiresAt: t.getTime(),
                            hasSpaceBetween: !1
                        })]
                    })
                }
        },
        e36d8828: (e, n, t) => {
            "use strict";
            t.d(n, {
                CR: () => o,
                Tz: () => s,
                jl: () => d
            });
            var i = t("43a4d203"),
                a = t("dc6d28ff");
            const r = () => (0, a.getRequestContext)().getUnpackedGuestAccessToken(),
                d = () => {
                    var e;
                    const n = null === (e = r()) || void 0 === e ? void 0 : e.authenticatorAssuranceLevel;
                    return !!n && n >= i.AuthenticatorAssuranceLevel.AAL1
                },
                o = () => {
                    var e;
                    return !(null === (e = r()) || void 0 === e || !e.isMarketingTrackingAllowed)
                },
                s = () => !d()
        },
        "5db8920d": (e, n, t) => {
            "use strict";
            t.d(n, {
                l: () => a
            });
            var i = t("3d486da1");
            const a = function() {
                let e = arguments.length > 1 ? arguments[1] : void 0;
                const n = "dqs" === (0, i.dU)() ? 3e4 : 1500;
                return {
                    "X-Booking-Timeout-Ms": e ? ? n,
                    "X-Envoy-Expected-Rq-Timeout-Ms": e ? ? n,
                    "X-Booking-Timeout-Budget-Ms": e ? ? n
                }
            }
        },
        "8e166592": (e, n, t) => {
            "use strict";
            t.d(n, {
                dg: () => d,
                ke: () => o,
                uo: () => s
            });
            var i = t("c66f4a5f"),
                a = t("8ebac256"),
                r = t("dc6d28ff");
            const d = () => {
                var e;
                if ("undefined" === typeof window) return;
                const n = (0, r.getRequestContext)(),
                    t = n.getBPlatformEnvironment(),
                    i = n.getSiteType(),
                    d = String(null === (e = n.getAffiliate()) || void 0 === e ? void 0 : e.id),
                    o = {
                        lang: n.getLanguage(),
                        aid: isNaN(Number(d)) ? void 0 : d,
                        isDev: !t || "dev" === t || "dqs" === t,
                        pageviewId: n.getPageviewId(),
                        platform: null === i || void 0 === i ? void 0 : i.toLowerCase()
                    };
                a.Z.init(o)
            };
            let o = function(e) {
                return e.Click = "CLICK", e.View = "VIEW", e
            }({});
            const s = (e, n) => {
                var t;
                if (!n) return;
                const r = null === (t = n.c360Actions) || void 0 === t ? void 0 : t.find((n => (null === n || void 0 === n ? void 0 : n.actionType) === e));
                if (!r) return;
                let d = {};
                try {
                    d = JSON.parse(r.content)
                } catch (o) {
                    return void(0, i.ZK)("content in C360 tracking action is not a valid JSON")
                }
                a.Z.sendEvent({
                    action_name: r.actionName,
                    action_version: r.actionVersion,
                    content: d
                })
            }
        },
        dfb9cb18: (e, n, t) => {
            "use strict";
            t.d(n, {
                j: () => r,
                m: () => d
            });
            var i = t("3d486da1"),
                a = t("2bb3685b");
            const r = e => 0 === Object.keys(e).length || "prod" === (0, i.dU)() ? {} : {
                    "X-Booking-Dev-Service-Override": JSON.stringify(e)
                },
                d = e => {
                    const n = {};
                    return a.gh.forEach((t => {
                        const i = e.get(`dev_${t}`);
                        i && (n[t] = i)
                    })), n
                }
        },
        "8ebac256": (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => s
            });

            function i(e, n, t, i) {
                return new(t || (t = Promise))((function(a, r) {
                    function d(e) {
                        try {
                            s(i.next(e))
                        } catch (n) {
                            r(n)
                        }
                    }

                    function o(e) {
                        try {
                            s(i.throw(e))
                        } catch (n) {
                            r(n)
                        }
                    }

                    function s(e) {
                        var n;
                        e.done ? a(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                            e(n)
                        }))).then(d, o)
                    }
                    s((i = i.apply(e, n || [])).next())
                }))
            }
            Object.create;
            Object.create;
            class a {
                constructor(e) {
                    this.config = e, this.headers = this.config.API.HEADERS
                }
                get(e, n) {
                    return new Promise(((t, a) => i(this, void 0, void 0, (function*() {
                        try {
                            const i = yield fetch(e, {
                                method: "GET",
                                headers: (null === n || void 0 === n ? void 0 : n.withHeaders) ? this.headers : void 0,
                                credentials: !1 === (null === n || void 0 === n ? void 0 : n.withCredentials) ? "omit" : "include"
                            }), a = yield i.text();
                            t(a ? JSON.parse(a) : null)
                        } catch (i) {
                            return a(i)
                        }
                    }))))
                }
                post(e, n, t) {
                    return new Promise(((a, r) => i(this, void 0, void 0, (function*() {
                        try {
                            const i = yield fetch(e, {
                                method: "POST",
                                headers: (null === t || void 0 === t ? void 0 : t.withHeaders) ? this.headers : void 0,
                                credentials: !1 === (null === t || void 0 === t ? void 0 : t.withCredentials) ? "omit" : "include",
                                body: JSON.stringify(n)
                            }), r = yield i.text();
                            a(r ? JSON.parse(r) : null)
                        } catch (i) {
                            return r(i)
                        }
                    }))))
                }
            }
            var r = new class {
                init(e) {
                    this.client = new a(e)
                }
                get(e) {
                    return i(this, void 0, void 0, (function*() {
                        return this.client.get(e)
                    }))
                }
                post(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return i(this, void 0, void 0, (function*() {
                        return this.client.post(e, n, t)
                    }))
                }
            };
            const d = e => {
                var n = void 0;
                e.platform || (e.platform = ""), e.platform = e.platform.toLowerCase(), "mdot" == e.platform && (n = 2), "ddot" != e.platform && "www" != e.platform || (n = 1);
                return {
                    "Content-Type": "application/json",
                    "X-Booking-Platform": e.platform,
                    "X-Booking-SiteType-Id": n,
                    "X-Booking-Pageview-Id": e.pageviewId,
                    "X-Booking-Session-Id": e.sessionId,
                    "X-Booking-ET-Seed": e.etSeed,
                    "X-Booking-AID": e.aid,
                    "X-Booking-Label": e.label,
                    "X-Booking-CSRF": e.csrfToken,
                    "X-Booking-Language-Code": e.lang
                }
            };
            class o {
                constructor(e, n, t) {
                    this.batchSize = e, this.queueLimit = n, this.queue = [], this.timeoutId = null, this.sendBatchFn = t
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
                    let n = [];
                    n = this.queue.length >= this.queueLimit ? this.queue.splice(0) : this.queue.splice(0, this.batchSize), this.sendBatchFn(n), this.queue.length > 0 ? this.processQueue() : this.timeoutId = null
                }
            }
            const s = new class {
                constructor() {
                    this.trackBatch = e => i(this, void 0, void 0, (function*() {
                        this.track({
                            events: e.map((e => function(e, n, t) {
                                const i = {
                                    local: {
                                        currency: n.currency,
                                        language: n.language
                                    },
                                    page: {},
                                    web: {}
                                };
                                "undefined" != typeof window && (i.page = {
                                    page_referrer: document.referrer,
                                    page_url: window.location.href,
                                    page_title: document.title
                                }, i.web = {
                                    browser_language: window.navigator.language
                                });
                                const a = {
                                    tracker_name: "C360ReactTracker",
                                    tracker_type: "Client",
                                    tracker_version: "0.1.0"
                                };
                                return t && (a.tracker_version = "0.1.1"), Object.assign(Object.assign({}, e), {
                                    context: i,
                                    tracker: a
                                })
                            }(e, this.c360Config, !0)))
                        })
                    }))
                }
                init(e) {
                    this.c360Config = (e => {
                        const n = e.hostname || (e.isDev ? "app.dqs.booking.com" : "www.booking.com");
                        return {
                            IS_DEV: Boolean(e.isDev),
                            API: {
                                HEADERS: d(e)
                            },
                            TRACK_BASE_URL: `https://${n}/c360/v1/track`,
                            language: e.lang,
                            currency: e.currency
                        }
                    })(e), this.httpClient = r, this.c360url = this.c360Config.TRACK_BASE_URL, this.props = e, this.batchQueue = this.batchQueue || new o(10, 1e3, this.trackBatch), r.init(this.c360Config)
                }
                track(e) {
                    return i(this, void 0, void 0, (function*() {
                        this.httpClient.post(this.c360url, e, {
                            withHeaders: !0
                        }).catch((e => {
                            this.props.onErrorCallback && this.props.onErrorCallback(new Error(e))
                        }))
                    }))
                }
                sendEvent(e, n) {
                    return i(this, void 0, void 0, (function*() {
                        this.batchQueue.enqueue(e), n && this.batchQueue.flush()
                    }))
                }
            }
        },
        "81b96a0f": (e, n, t) => {
            "use strict";
            t.d(n, {
                Kg: () => cn,
                _N: () => tn,
                w7: () => Gn
            });
            const i = "no payload is provided as argument",
                a = "publisher argument is not provided",
                r = "event name argument is not provided",
                d = "arguments missing to attachHandler function",
                o = "window object is not defined",
                s = "window and document objects are not defined",
                l = "window.dataLayer is not defined",
                c = "payload wrong type, should be of type object",
                u = "payload failed validation",
                m = "publisher of unknown type",
                v = "default case in publisher switch reached, check type of publisher used.",
                g = "encountered error while publishing event",
                _ = "skip publishing for no-op event",
                k = "encountered error while publishing to datalayer",
                S = "default processor function was selected",
                p = "unable to generate timestamp",
                N = "payload items array is empty or does not exist",
                E = "unable to build property item payload",
                f = "validation failed: payload property not found",
                h = "validation failed: payload property wrong type",
                I = "no payload to log in logger",
                T = "unable to initialize library",
                A = "encountered error while handling photo click",
                b = "encountered error while submitting add_to_cart event on prop page",
                C = "encountered error while submitting add_to_cart_mobile event on prop page",
                R = "no env object defined",
                y = "destination name is not found in env object",
                O = "unable to read values from search prop payload",
                F = "unable to read rooms_available_and_soldout from env",
                L = "unable to read hotel room price and rate conditions on property page",
                x = "unable to create cache store for ga4 tracker in window.booking",
                D = "no key argument is supplied to store in cache",
                P = "store is not ready and cannot be instantiated",
                M = "b_feature_running_GA4_TRACKING_ON",
                w = "b_feature_running_GA4_TRACKING_LOG_ON";
            let U = !1,
                H = !1;

            function V() {
                return new URLSearchParams("undefined" === typeof window || null === window || "object" !== typeof window.location ? "" : window.location.href)
            }

            function B(e) {
                return V().get(e)
            }

            function G(e) {
                return V().has(e)
            }

            function W() {
                ! function() {
                    if (H) return U;
                    if (!G(M)) return U;
                    const e = B(M);
                    U = "1" === e
                }(), H = !0
            }
            let Y = !!G(w) && "1" === B(w) || !1;
            const $ = "GA4_LOGGER: ";

            function K(e) {
                Y && ("undefined" !== typeof e ? console.log(`${$}${e}`) : q(I))
            }

            function q(e) {
                Y && ("undefined" !== typeof e ? console.warn(`${$}${e}`) : q(I))
            }
            const j = "_ga cookies are present";
            var Z, X, z, Q, J;

            function ee(e) {
                return "undefined" !== typeof e && null !== e
            }! function(e) {
                e.B_COM = "Booking.com"
            }(Z || (Z = {})),
            function(e) {
                e.STAYS = "stays", e.FLIGHTS = "flights", e.PACKAGES = "packages", e.CAR_RENTALS = "car_rentals", e.ATTRACTIONS = "attractions", e.AIRPORT_TAXI = "airport_taxi"
            }(X || (X = {})),
            function(e) {
                e.STAYS = "Stays", e.FLIGHTS = "Flights", e.PACKAGES = "Packages", e.CAR_RENTALS = "Car rentals", e.ATTRACTIONS = "Attractions", e.AIRPORT_TAXI = "Airport taxi"
            }(z || (z = {})),
            function(e) {
                e.FLIGHTS = "/flights/", e.ATTRACTIONS = "/attractions/", e.CARS = "/cars/", e.AIRPORT_TAXI = "/taxi/"
            }(Q || (Q = {})),
            function(e) {
                e.DESKTOP = "www", e.MDOT = "mdot"
            }(J || (J = {}));
            const ne = void 0,
                te = "",
                ie = "Yes",
                ae = "No";

            function re(e) {
                let n = !1;
                if ("undefined" === typeof e || null === e) return n;
                if ("undefined" === typeof window || "undefined" === typeof window.location) return n;
                return new URL(window.location.href).pathname.indexOf(e) >= 0 && (n = !0), n
            }

            function de(e) {
                let n = te;
                if (!ee(e)) return n;
                if ("undefined" === typeof window || "undefined" === typeof window.location) return n;
                try {
                    let t = new URL(window.location.href).searchParams.get(e);
                    if (null === t) return n;
                    n = t
                } catch (i) {
                    t = i.toString(), Y && ("undefined" !== typeof t ? console.error(`${$}${t}`) : q(I))
                }
                var t;
                return n
            }
            var oe, se, le, ce, ue;

            function me(e) {
                return ee(e) ? "string" !== typeof e || 0 === e.length ? `${e}` : e.charAt(0).toUpperCase() + e.slice(1) : te
            }

            function ve(e) {
                return ee(e) ? "string" !== typeof e || 0 === e.length ? `${e}` : e.replaceAll("_", "-") : te
            }

            function ge(e) {
                return ee(e) ? "string" !== typeof e || 0 === e.length ? `${e}` : e.replaceAll(" ", "_") : te
            }

            function _e(e, n, t) {
                if (!ee(e)) return te;
                if ("string" !== typeof e || 0 === e.length) return `${e}`;
                if (-1 === e.indexOf(",")) return e;
                let i = e.split(",");
                return t ? i[i.length - 1] : i[n]
            }

            function ke(e) {
                let n = ne;
                return ee(e) ? "string" === typeof e && e.length > 0 && !Number.isNaN(+e) ? +e : "number" === typeof e ? e : n : n
            }! function(e) {
                e.INDEX = "index", e.SEARCH = "searchresults", e.PROPERTY = "hotel", e.CHECKOUT = "book", e.CONFIRMATION = "confirmation"
            }(oe || (oe = {})),
            function(e) {
                e[e.YOUR_SELECTION = 1] = "YOUR_SELECTION", e[e.YOUR_DETAILS = 2] = "YOUR_DETAILS", e[e.FINAL_STEP = 3] = "FINAL_STEP"
            }(se || (se = {})),
            function(e) {
                e.ACTION_NAME = "b_action", e.BOOK_STAGE = "b_book_stage", e.SITE_TYPE = "b_site_type", e.AFFILIATION_ID_V1 = "aid", e.AFFILIATION_ID_V2 = "b_aid", e.UFI = "b_ufi", e.UFI_HOTEL = "hotel_ufi", e.UFI_VISITOR = "b_visitor_ufi", e.UFI_FE = "fe_ufi", e.UFI_MAP_DEST_ID = "b_map_dest_id", e.UFI_DEST_ID = "b_dest_id", e.DESTINATION_FULLNAME = "b_destination_fullname", e.CITY_NAME_URL = "b_urlcity", e.CITY_NAME_EN = "city_name_en", e.MAP_NIGHTS = "b_map_nights", e.CHECKIN_CHECKOUT_INTERVAL = "b_checkin_checkout_interval", e.GROUP_ROOMS_WANTED = "b_group_rooms_wanted", e.TOTAL_ROOMS = "b_total_rooms", e.GROUP_ADULTS = "b_group_adults", e.TOTAL_ADULTS = "b_total_adults", e.GROUP_CHILDREN = "b_group_children", e.TOTAL_CHILDREN = "b_total_children", e.SEARCH_CONFIG = "b_search_config", e.OCCUPANCY = "b_occupancy", e.COMPANY_NAME = "b_companyname", e.ACCOMMODATION_TYPE = "b_acc_type", e.ACC_TYPE_ID = "b_accommodationtype_id", e.USER_GENIUS_STATUS = "b_user_genius_status", e.USER_GENIUS_LEVEL_V1 = "b_genius_level", e.USER_GENIUS_LEVEL_V2 = "genius_level", e.USER_IS_GENIUS_V1 = "b_is_genius", e.USER_IS_GENIUS_V2 = "b_reg_user_is_genius", e.USER_IS_GENIUS_V3 = "is_genius", e.USER_IS_GENIUS_V4 = "b_user_is_genius", e.USER_ID = "b_user_id", e.USER_AUTH = "auth_level", e.USER_AUTH_LVL = "b_user_auth_level", e.USER_AUTH_LVL_H = "b_user_auth_level_is_high", e.USER_AUTH_LVL_LH = "b_user_auth_level_is_low_or_high", e.USER_AUTH_LVL_NONE = "b_user_auth_level_is_none", e.USER_IP_LOCATION = "ip_country", e.USER_GUEST_COUNTRY = "b_guest_country", e.COUNTRY_CODE = "b_countrycode", e.CHECKIN_DATE = "b_checkin_date", e.CHECKOUT_DATE = "b_checkout_date", e.TRAVELLING_FOR_WORK = "fe_pers_purpose", e.HOTEL_CLASS = "b_hotel_class", e.HOTEL_ID = "b_hotel_id", e.HOTEL_NAME = "b_hotel_name", e.ROOMS_AVAILABLE_AND_SOLDOUT = "b_rooms_available_and_soldout", e.ALT_PAYMENT_USER_AMOUNT = "b_alt_payment_user_amount", e.RESERVATION_BOOKNUMBER = "fe_booknumber", e.C360_RES_DETAIL_V1 = "b_c360_reservation_detail", e.C360_RES_DETAIL_V2 = "fe_c360_reservation_detail", e.LANG_BROWSER = "browser_lang", e.LANG_SELECTED = "b_selected_language", e.LANG_PLAIN = "b_lang", e.LANG_LOCALE = "b_locale", e.B_CRUMBS_CTX = "b_bcrumbs_context", e.UTAG_NEWSLETTER_SUBSCRIBED = "is_subscribed_to_newsletter"
            }(le || (le = {})),
            function(e) {
                e.BUSINESS = "business", e.LEISURE = "leisure"
            }(ce || (ce = {})),
            function(e) {
                e.TRAVEL_PURPOSE = "sb_travel_purpose", e.CHECKOUT_INTERESTED_IN_TAXI = "interested_taxi", e.CHECKOUT_INTERESTED_IN_CAR = "interested_car_rentals"
            }(ue || (ue = {}));
            const Se = "booking",
                pe = "env",
                Ne = "utag_data",
                Ee = "ga4_lib_init",
                fe = "ga4_lib_handlers";

            function he() {
                return "undefined" === typeof window ? (q(o), !1) : "undefined" === typeof window[Se] || null === window[Se] ? (q(R), !1) : "undefined" !== typeof window[Se][pe] && null !== window[Se][pe] || (q("no env object defined"), !1)
            }

            function Ie(e) {
                if (!ee(e)) return "";
                if (!he()) return q("window.booking is not ready or does not exit"), "";
                const n = window[Se][pe];
                return ee(n[e]) ? n[e] : (q("property was not found in env object " + e), "")
            }

            function Te(e) {
                return "undefined" !== typeof window && null !== window && "undefined" !== typeof window[Ne] && null !== window[Ne] && ee(e) ? ee(window[Ne][e]) ? window[Ne][e] : ne : ""
            }

            function Ae() {
                return Ie(le.ACTION_NAME)
            }

            function be() {
                const e = ne,
                    n = Ie(le.AFFILIATION_ID_V2),
                    t = Ie(le.AFFILIATION_ID_V1);
                return ee(n) && n !== te ? n : ee(t) && t !== te ? t : (q("affiliate id value is not found in env object"), e)
            }

            function Ce() {
                let e = ne;
                const n = Ie(le.UFI),
                    t = Ie(le.UFI_DEST_ID);
                return ee(n) && n !== te ? n : ee(t) && t !== te ? t : (q("ufi id value is not found in env object"), e)
            }

            function Re() {
                const e = Ie(le.ACC_TYPE_ID);
                if (e !== te) return e;
                const n = Ie(le.ACCOMMODATION_TYPE);
                return n !== te ? n : (q("accommodation type id is not found in env object"), te)
            }

            function ye() {
                let e = ne,
                    n = te;
                const t = Ie(le.USER_GENIUS_STATUS);
                return ee(t) && t !== te && (n = t.b_user_id, ee(t.b_user_id)) ? `${n}` : (q("user_id value is not found in env object"), e)
            }

            function Oe() {
                let e, n = ne;
                const t = Ie(le.USER_GENIUS_STATUS);
                return ee(t) && t !== te && (e = t[le.USER_IS_GENIUS_V1], ee(e) && 1 === e) ? t[le.USER_GENIUS_LEVEL_V1] : (q("genius level is not found in env object"), n)
            }

            function Fe() {
                const e = Ie(le.ACTION_NAME);
                return e === te ? ne : e
            }

            function Le() {
                const e = Ie(le.USER_AUTH),
                    n = Ie(le.USER_AUTH_LVL_NONE),
                    t = Ie(le.USER_AUTH_LVL_H),
                    i = Ie(le.USER_AUTH_LVL_LH);
                return "0" == e || 1 == n ? 0 : "1" == e || "2" == e || 1 == t || 1 == i ? 1 : (q("user logged in data is not found in env object"), 0)
            }

            function xe() {
                const e = [le.LANG_SELECTED, le.LANG_PLAIN, le.LANG_LOCALE, le.LANG_BROWSER];
                let n = ne;
                for (let t = 0; t < e.length; t++) {
                    let i = Ie(e[t]);
                    if (ee(i) && i !== te) {
                        n = i;
                        break
                    }
                }
                return n === ne && q("language was not found in env object"), n
            }

            function De() {
                const e = [le.USER_IP_LOCATION, le.USER_GUEST_COUNTRY];
                let n = ne;
                for (let t = 0; t < e.length; t++) {
                    let i = Ie(e[t]);
                    if (ee(i) && i !== te) {
                        n = i;
                        break
                    }
                }
                return n === ne && q("user country is not found in env object"), n
            }

            function Pe() {
                const e = Te(le.UTAG_NEWSLETTER_SUBSCRIBED);
                return "1" === e || "true" === e || e ? 1 : 0
            }

            function Me() {
                return Ie(le.SITE_TYPE)
            }

            function we() {
                let e = Ie(le.ACTION_NAME);
                return "index" === e || "searchresults" === e ? z.STAYS : "cars" === e ? z.CAR_RENTALS : "taxi" === e ? z.AIRPORT_TAXI : re(Q.FLIGHTS) ? z.FLIGHTS : re(Q.ATTRACTIONS) ? z.ATTRACTIONS : z.STAYS
            }

            function Ue() {
                let e = ne,
                    n = Ie(le.DESTINATION_FULLNAME);
                return n !== te ? e = n : q(y), e
            }

            function He() {
                let e = Ie(le.HOTEL_NAME);
                return e === te ? (q(y), ne) : e
            }

            function Ve() {
                let e = Ie(le.GROUP_ADULTS);
                if (e !== te) return +e;
                let n = Ie(le.OCCUPANCY);
                return ee(n) && "object" === typeof n ? n.adults : (q("adults number not found in env object"), ne)
            }

            function Be() {
                let e = Ie(le.GROUP_CHILDREN);
                if (e !== te) return +e;
                let n = Ie(le.OCCUPANCY);
                return ee(n) && "object" === typeof n ? n.children : (q("children number not found in env object"), ne)
            }

            function Ge() {
                const e = Ie(le.B_CRUMBS_CTX);
                return "string" === typeof e ? {} : ee(e) ? e : {}
            }

            function We() {
                const e = [le.CITY_NAME_URL, le.CITY_NAME_EN, le.DESTINATION_FULLNAME];
                let n = te;
                for (let t = 0; t < e.length; t++) {
                    let i = Ie(e[t]);
                    if (ee(i) && i !== te) {
                        n = i;
                        break
                    }
                }
                return n === te && q("city name not found in env object"), n
            }

            function Ye() {
                const e = Ie(le.COUNTRY_CODE);
                return e === te && q("dest country is not found in env object"), e
            }

            function $e() {
                const e = Ie(le.CHECKIN_DATE);
                return e === te && q("checkin date not found in env object"), e
            }

            function Ke() {
                const e = Ie(le.CHECKOUT_DATE);
                return e === te && q("checkout date not found in env object"), e
            }

            function qe() {
                const e = [le.CHECKIN_CHECKOUT_INTERVAL, le.MAP_NIGHTS];
                let n = ne;
                const t = Ie(e[0]);
                return t !== te && (n = t), n === ne && q("number of nights not found in env object"), n
            }

            function je() {
                const e = [le.SEARCH_CONFIG, le.GROUP_ROOMS_WANTED];
                let n = ne,
                    t = Ie(e[0]),
                    i = Ie(e[1]);
                return ee(t) && "object" === typeof t ? t.b_nr_rooms_needed : ee(i) && i !== te ? i : (q("rooms number not found in env object"), n)
            }

            function Ze() {
                const e = de(ue.TRAVEL_PURPOSE);
                return (e !== te ? e : function() {
                    const e = ne,
                        n = Ie(le.TRAVELLING_FOR_WORK);
                    return ee(n) && n !== te ? n : (q("travel purpose not found in env object"), e)
                }()) === ce.BUSINESS ? ie : ae
            }

            function Xe() {
                const e = Ie(le.HOTEL_CLASS);
                return ee(e) && e !== te ? e : (q("unable to read hotel class/stars rating from env"), ne)
            }

            function ze() {
                const e = Ie(le.HOTEL_ID);
                return ee(e) && e !== te || q("unable to read hotel id from env"), e
            }

            function Qe() {
                let e, n = {
                    rate_conditions: [],
                    price: ne
                };
                if (e = Ie(le.ROOMS_AVAILABLE_AND_SOLDOUT), !ee(e) || e === te) return q(F), n;
                try {
                    if (e.length && 0 === e.length) return q(F), n;
                    let t, i = e[0];
                    null !== i.b_has_room_inventory && i.b_has_room_inventory > 0 && (t = i.b_blocks && i.b_blocks.length > 0 ? i.b_blocks[0] : null, null !== t && (n.price = t.b_raw_price, n.rate_conditions = [], t.b_cancellation_type && n.rate_conditions.push(ve(`${t.b_cancellation_type}`)), t.b_mealplan_included_name && n.rate_conditions.push(ve(`${t.b_mealplan_included_name}`))))
                } catch (t) {
                    q(L)
                }
                return n
            }

            function Je(e) {
                let n, t = te;
                if (!ee(e) || e === te) return t;
                if (n = Ie(le.ROOMS_AVAILABLE_AND_SOLDOUT), !ee(n) || n === te) return q(F), t;
                try {
                    if (n.length && 0 === n.length) return q(F), t;
                    let i = e.split(".").map((e => e - 1)),
                        a = n[i[0]].b_blocks[i[1]];
                    ee(a) && (t = a.b_raw_price)
                } catch (i) {
                    q(L)
                }
                return t
            }

            function en() {
                let e = Ie(le.ALT_PAYMENT_USER_AMOUNT);
                return e === te && (q("price was not found in env on checkout page"), e = ne), e
            }

            function nn() {
                let e = Ie(le.RESERVATION_BOOKNUMBER);
                return e === te && q("reservation id not found in env object"), e
            }
            var tn;
            ! function(e) {
                e.DATA_LAYER = "data_layer"
            }(tn || (tn = {}));
            const an = [
                ["event", "string"],
                ["tsmp", "string"]
            ];
            const rn = "ga4Cache";

            function dn() {
                if ("undefined" === typeof window) return q(o), !1;
                if ("undefined" === typeof window.booking) return q(R), !1;
                if ("undefined" === typeof window.booking[rn]) {
                    if (!("undefined" === typeof window ? (q(o), !1) : "undefined" === typeof window.booking ? (q(R), !1) : ("undefined" === typeof window.booking[rn] && (window.booking[rn] = {}), !0))) return q(x), !1
                }
                return !0
            }

            function on(e, n) {
                if ("undefined" === typeof e) return q(D), !1;
                if ("undefined" === typeof n) return q(i), !1;
                if (!dn()) return q(P), !1;
                try {
                    window.booking[rn][e] = n
                } catch (t) {
                    return q(`${t}`), !1
                }
                return !0
            }

            function sn(e, n) {
                if ("undefined" === typeof e) return q(D), !1;
                if ("undefined" === typeof n) return q(i), !1;
                if (!dn()) return q(P), !1;
                try {
                    "undefined" !== typeof window.booking[rn][e] && null !== window.booking[rn][e] || (window.booking[rn][e] = n)
                } catch (t) {
                    return q(`${t}`), !1
                }
                return !0
            }

            function ln(e) {
                return dn() ? "undefined" === typeof e || null === e ? (q("no key argument is supplied to read from cache"), {}) : window.booking[rn][e] : (q(P), {})
            }
            var cn;
            ! function(e) {
                e.DEFAULT_EVENT_NAME = "default_event_name", e.FILTERS_APPLIED = "filters_applied", e.FILTERS_APPLIED_MOBILE = "filters_applied_mobile", e.SORT_APPLIED = "sort_applied", e.SELECT_ITEM = "select_item", e.SELECT_ITEM_MOBILE = "select_item_mobile", e.VIEW_ITEM_LIST = "view_item_list", e.VIEW_ITEM_LIST_MOBILE = "view_item_list_mobile", e.PAGE_VIEW = "page_view", e.PAGE_VIEW_INDEX = "page_view_index", e.PAGE_VIEW_SEARCH = "page_view_search", e.PAGE_VIEW_SEARCH_MOBILE = "page_view_search_mobile", e.PAGE_VIEW_PROPERTY = "page_view_property", e.PAGE_VIEW_CHECKOUT = "page_view_checkout", e.PAGE_VIEW_CONFIRMATION = "page_view_confirmation", e.NAVIGATION_BAR_INTERACTION = "navigation_bar_interaction", e.SEARCH = "search", e.SEARCH_MOBILE = "search_mobile", e.SEARCH_ERROR = "search_error", e.MAP_OPEN = "map_open", e.MAP_OPEN_MOBILE = "map_open_mobile", e.MAP_CLOSE = "map_close", e.MAP_CLOSE_MOBILE = "map_close_mobile", e.VIEW_ITEM = "view_item", e.PHOTO_CLICK = "photo_click", e.REVIEWS_CLICK = "reviews_click", e.WISHLIST_SAVE = "wishlist_save", e.SOCIAL_SHARE = "social_share", e.SEARCH_CHANGE_DETAILS = "search_change_details", e.ADD_TO_CART = "add_to_cart", e.ADD_TO_CART_MOBILE = "add_to_cart_mobile", e.BEGIN_CHECKOUT = "begin_checkout", e.CHANGE_SELECTION_CHECKOUT = "change_selection_checkout_your_details", e.ADD_PAYMENT_INFO = "add_payment_info", e.PURCHASE = "ga4_purchase", e.CANCELLATION = "cancellation", e.NEWSLETTER_SIGN_UP = "newsletter_sign_up", e.APP_DOWNLOAD = "app_download", e.OPEN_APP = "open_app", e.PAGE_VIEW_CHECKOUT_PROPERTY_CARD = "internal_page_view_checkout_prop_card", e.NO_OP = "no_op_event", e.TEST_EVENT = "test_event"
            }(cn || (cn = {}));
            const un = Object.values(cn);

            function mn(e) {
                if ("undefined" === typeof window) return void q(o);
                if ("undefined" === typeof window.dataLayer) return void q(l);
                const n = function(e) {
                    let n = !0;
                    if ("undefined" === typeof e || null === e) return q(i), !1;
                    if ("object" !== typeof e) return q(c), !1;
                    for (let t = 0; t < an.length; t++) {
                        let i = an[t][0],
                            a = an[t][1];
                        if (!e.hasOwnProperty(i)) {
                            n = !1, q(f);
                            break
                        }
                        if (typeof e[i] !== a) {
                            n = !1, q(h);
                            break
                        }
                    }
                    return n
                }(e);
                if (n) try {
                    window.dataLayer.push(e), e.event && un.includes(e.event) && on(e.event, e)
                } catch (t) {
                    q(t.toString()), q(k)
                } else q(u)
            }

            function vn(e, n) {
                if ("undefined" !== typeof e && null !== e)
                    if ("undefined" !== typeof n)
                        if (n.event !== cn.NO_OP)
                            if (e === tn.DATA_LAYER) mn(n);
                            else q(v);
                else K(_);
                else q(i);
                else q(m)
            }

            function gn(e) {
                return "string" === typeof e || "number" === typeof e ? e < 10 ? `0${e}` : `${e}` : ""
            }

            function _n() {
                try {
                    return `${Date.now()}`
                } catch (e) {
                    q(p)
                }
                return "0"
            }

            function kn(e, n) {
                let t, i, a = ne;
                if ("undefined" === typeof e || null === e) return a;
                if ("undefined" === typeof n || null === n) return a;
                try {
                    t = "string" === typeof e ? new Date(e) : e, i = "string" === typeof n ? new Date(n) : n, a = Math.round((i - t) / 864e5)
                } catch (r) {
                    q(r.toString()), q("unable to calculate difference between two dates")
                }
                return a
            }

            function Sn(e) {
                let n, t, i = ne;
                return "undefined" === typeof e || null === e ? (q("unable to create partition date from date string"), i) : "string" === typeof e ? e.split("T")[0] : "object" === typeof e && e instanceof Date ? (n = gn(e.getMonth() + 1), t = gn(e.getDate()), `${e.getFullYear()}-${n}-${t}`) : i
            }
            var pn, Nn, En;

            function fn(e) {
                if (!ee(e)) return te;
                switch (e) {
                    case En.HOTEL:
                        return "Hotel";
                    case En.BOOKING_HOME:
                        return "Property";
                    default:
                        return `${e}`
                }
            }! function(e) {
                e.ACCOMMODATIONS = "accommodations", e.FLIGHTS = "flights", e.PACKAGES = "packages", e.CARS = "cars", e.ATTRACTIONS = "attractions", e.AIRPORT_TAXIS = "airport_taxis"
            }(pn || (pn = {})),
            function(e) {
                e.ACCOMMODATIONS = "Accommodations", e.FLIGHTS = "Flights", e.PACKAGES = "Packages", e.CARS = "Car rentals", e.ATTRACTIONS = "Attractions", e.AIRPORT_TAXIS = "Airport taxis"
            }(Nn || (Nn = {})),
            function(e) {
                e.HOTEL = "hotel", e.BOOKING_HOME = "booking home"
            }(En || (En = {}));
            const hn = {
                    ad: "Andorra",
                    ae: "United Arab Emirates",
                    af: "Afghanistan",
                    ag: "Antigua and Barbuda",
                    ai: "Anguilla",
                    al: "Albania",
                    am: "Armenia",
                    ao: "Angola",
                    aq: "Antarctica",
                    ar: "Argentina",
                    as: "American Samoa",
                    at: "Austria",
                    au: "Australia",
                    aw: "Aruba",
                    ax: "\xc5land",
                    az: "Azerbaijan",
                    ba: "Bosnia and Herzegovina",
                    bb: "Barbados",
                    bd: "Bangladesh",
                    be: "Belgium",
                    bf: "Burkina Faso",
                    bg: "Bulgaria",
                    bh: "Bahrain",
                    bi: "Burundi",
                    bj: "Benin",
                    bl: "Saint Barth\xe9lemy",
                    bm: "Bermuda",
                    bn: "Brunei",
                    bo: "Bolivia",
                    bq: "Bonaire",
                    br: "Brazil",
                    bs: "Bahamas",
                    bt: "Bhutan",
                    bv: "Bouvet Island",
                    bw: "Botswana",
                    by: "Belarus",
                    bz: "Belize",
                    ca: "Canada",
                    cc: "Cocos [Keeling] Islands",
                    cd: "Democratic Republic of the Congo",
                    cf: "Central African Republic",
                    cg: "Republic of the Congo",
                    ch: "Switzerland",
                    ci: "Ivory Coast",
                    ck: "Cook Islands",
                    cl: "Chile",
                    cm: "Cameroon",
                    cn: "China",
                    co: "Colombia",
                    cr: "Costa Rica",
                    cu: "Cuba",
                    cv: "Cape Verde",
                    cw: "Curacao",
                    cx: "Christmas Island",
                    cy: "Cyprus",
                    cz: "Czech Republic",
                    de: "Germany",
                    dj: "Djibouti",
                    dk: "Denmark",
                    dm: "Dominica",
                    do: "Dominican Republic",
                    dz: "Algeria",
                    ec: "Ecuador",
                    ee: "Estonia",
                    eg: "Egypt",
                    eh: "Western Sahara",
                    er: "Eritrea",
                    es: "Spain",
                    et: "Ethiopia",
                    fi: "Finland",
                    fj: "Fiji",
                    fk: "Falkland Islands",
                    fm: "Micronesia",
                    fo: "Faroe Islands",
                    fr: "France",
                    ga: "Gabon",
                    gb: "United Kingdom",
                    gd: "Grenada",
                    ge: "Georgia",
                    gf: "French Guiana",
                    gg: "Guernsey",
                    gh: "Ghana",
                    gi: "Gibraltar",
                    gl: "Greenland",
                    gm: "Gambia",
                    gn: "Guinea",
                    gp: "Guadeloupe",
                    gq: "Equatorial Guinea",
                    gr: "Greece",
                    gs: "South Georgia and the South Sandwich Islands",
                    gt: "Guatemala",
                    gu: "Guam",
                    gw: "Guinea-Bissau",
                    gy: "Guyana",
                    hk: "Hong Kong",
                    hm: "Heard Island and McDonald Islands",
                    hn: "Honduras",
                    hr: "Croatia",
                    ht: "Haiti",
                    hu: "Hungary",
                    id: "Indonesia",
                    ie: "Ireland",
                    il: "Israel",
                    im: "Isle of Man",
                    in: "India",
                    io: "British Indian Ocean Territory",
                    iq: "Iraq",
                    ir: "Iran",
                    is: "Iceland",
                    it: "Italy",
                    je: "Jersey",
                    jm: "Jamaica",
                    jo: "Jordan",
                    jp: "Japan",
                    ke: "Kenya",
                    kg: "Kyrgyzstan",
                    kh: "Cambodia",
                    ki: "Kiribati",
                    km: "Comoros",
                    kn: "Saint Kitts and Nevis",
                    kp: "North Korea",
                    kr: "South Korea",
                    kw: "Kuwait",
                    ky: "Cayman Islands",
                    kz: "Kazakhstan",
                    la: "Laos",
                    lb: "Lebanon",
                    lc: "Saint Lucia",
                    li: "Liechtenstein",
                    lk: "Sri Lanka",
                    lr: "Liberia",
                    ls: "Lesotho",
                    lt: "Lithuania",
                    lu: "Luxembourg",
                    lv: "Latvia",
                    ly: "Libya",
                    ma: "Morocco",
                    mc: "Monaco",
                    md: "Moldova",
                    me: "Montenegro",
                    mf: "Saint Martin",
                    mg: "Madagascar",
                    mh: "Marshall Islands",
                    mk: "North Macedonia",
                    ml: "Mali",
                    mm: "Myanmar [Burma]",
                    mn: "Mongolia",
                    mo: "Macao",
                    mp: "Northern Mariana Islands",
                    mq: "Martinique",
                    mr: "Mauritania",
                    ms: "Montserrat",
                    mt: "Malta",
                    mu: "Mauritius",
                    mv: "Maldives",
                    mw: "Malawi",
                    mx: "Mexico",
                    my: "Malaysia",
                    mz: "Mozambique",
                    na: "Namibia",
                    nc: "New Caledonia",
                    ne: "Niger",
                    nf: "Norfolk Island",
                    ng: "Nigeria",
                    ni: "Nicaragua",
                    nl: "Netherlands",
                    no: "Norway",
                    np: "Nepal",
                    nr: "Nauru",
                    nu: "Niue",
                    nz: "New Zealand",
                    om: "Oman",
                    pa: "Panama",
                    pe: "Peru",
                    pf: "French Polynesia",
                    pg: "Papua New Guinea",
                    ph: "Philippines",
                    pk: "Pakistan",
                    pl: "Poland",
                    pm: "Saint Pierre and Miquelon",
                    pn: "Pitcairn Islands",
                    pr: "Puerto Rico",
                    ps: "Palestine",
                    pt: "Portugal",
                    pw: "Palau",
                    py: "Paraguay",
                    qa: "Qatar",
                    re: "R\xe9union",
                    ro: "Romania",
                    rs: "Serbia",
                    ru: "Russia",
                    rw: "Rwanda",
                    sa: "Saudi Arabia",
                    sb: "Solomon Islands",
                    sc: "Seychelles",
                    sd: "Sudan",
                    se: "Sweden",
                    sg: "Singapore",
                    sh: "Saint Helena",
                    si: "Slovenia",
                    sj: "Svalbard and Jan Mayen",
                    sk: "Slovakia",
                    sl: "Sierra Leone",
                    sm: "San Marino",
                    sn: "Senegal",
                    so: "Somalia",
                    sr: "Suriname",
                    ss: "South Sudan",
                    st: "S\xe3o Tom\xe9 and Pr\xedncipe",
                    sv: "El Salvador",
                    sx: "Sint Maarten",
                    sy: "Syria",
                    sz: "Swaziland",
                    tc: "Turks and Caicos Islands",
                    td: "Chad",
                    tf: "French Southern Territories",
                    tg: "Togo",
                    th: "Thailand",
                    tj: "Tajikistan",
                    tk: "Tokelau",
                    tl: "East Timor",
                    tm: "Turkmenistan",
                    tn: "Tunisia",
                    to: "Tonga",
                    tr: "Turkey",
                    tt: "Trinidad and Tobago",
                    tv: "Tuvalu",
                    tw: "Taiwan",
                    tz: "Tanzania",
                    ua: "Ukraine",
                    ug: "Uganda",
                    um: "U.S. Minor Outlying Islands",
                    us: "United States",
                    uy: "Uruguay",
                    uz: "Uzbekistan",
                    va: "Vatican City",
                    vc: "Saint Vincent and the Grenadines",
                    ve: "Venezuela",
                    vg: "British Virgin Islands",
                    vi: "U.S. Virgin Islands",
                    vn: "Vietnam",
                    vu: "Vanuatu",
                    wf: "Wallis and Futuna",
                    ws: "Samoa",
                    xk: "Kosovo",
                    ye: "Yemen",
                    yt: "Mayotte",
                    za: "South Africa",
                    zm: "Zambia",
                    zw: "Zimbabwe"
                },
                In = Object.keys(hn);

            function Tn(e) {
                return ee(e) ? "string" === typeof e && 0 === e.length ? ne : "string" === typeof e && "undefined" !== typeof hn[e.toLowerCase()] ? hn[e.toLowerCase()] : e : ne
            }

            function An(e, n, t, i, a) {
                const {
                    id: r,
                    header: d,
                    countryCode: o,
                    accommodationTypeId: s,
                    rateInformation: l
                } = e;
                let c = ne,
                    u = ne,
                    m = ne,
                    v = ne;
                try {
                    c = d && d.propertyName ? d.propertyName : c, u = "undefined" !== typeof t ? t : u, d && d.rating && (m = d.rating), l && "undefined" !== typeof l.priceDisplayInfo && null !== l.priceDisplayInfo && (v = l.priceDisplayInfo.priceBreakdown.headlinePrice.userAmount.rawAmount, v = "number" === typeof v ? v.toFixed(2) : v)
                } catch (g) {
                    q(g.toString()), q(O)
                }
                return {
                    item_id: r,
                    item_name: c,
                    affiliation: a,
                    index: n,
                    item_brand: s || ne,
                    item_category: Nn.ACCOMMODATIONS,
                    item_category2: o,
                    item_category3: i,
                    item_category4: `${u}`,
                    item_category5: fn(En.HOTEL),
                    item_list_name: i,
                    item_variant: m,
                    price: ke(v),
                    quantity: 1
                }
            }

            function bn() {
                return {
                    event: cn.PAGE_VIEW,
                    tsmp: _n(),
                    ai: void 0,
                    action: void 0,
                    ui: void 0,
                    glev: void 0,
                    logged_in: void 0,
                    language: void 0,
                    user_location: void 0,
                    is_subscribed_to_newsletter: void 0,
                    site_section: void 0,
                    dest_name: void 0,
                    adults: void 0,
                    book_window: void 0,
                    children: void 0,
                    city_name: void 0,
                    country_name: void 0,
                    date_in: void 0,
                    date_out: void 0,
                    dest_cc: void 0,
                    dest_ufi: void 0,
                    nights: void 0,
                    rooms: void 0,
                    travelling_for_work: void 0,
                    total_search_pages: void 0,
                    percent_places_unavailable: void 0,
                    search_page_number: void 0,
                    rate_condition: void 0,
                    add_shuttle: void 0,
                    rent_car: void 0,
                    payment_option: void 0,
                    payment_method: void 0
                }
            }

            function Cn(e) {
                let n = {};
                switch (e) {
                    case cn.SORT_APPLIED:
                        const e = ln(cn.SORT_APPLIED);
                        return n = e && e.sort_option ? e.sort_option : ne, n;
                    case cn.FILTERS_APPLIED:
                        const t = ln(cn.FILTERS_APPLIED);
                        n = t ? t.filters : {};
                        break;
                    case cn.PAGE_VIEW_INDEX:
                        n = ln(cn.PAGE_VIEW_INDEX);
                        break;
                    case cn.VIEW_ITEM:
                        n = ln(cn.VIEW_ITEM);
                        break;
                    default:
                        return q("default switch case was triggered in getEventFromStore func"), n
                }
                return "undefined" === typeof n && (n = {}), n
            }

            function Rn(e) {
                const {
                    filtersApplied: n,
                    filtersByField: t
                } = e;
                if (!ee(n) || !ee(t)) return {
                    event: cn.NO_OP,
                    tsmp: _n()
                };
                let i;
                return "object" === typeof t && Object.keys(t).length > 0 ? (i = {}, Object.keys(n).map((e => {
                    let n = e.split("=")[0];
                    if (!t[n]) return;
                    let a = "",
                        r = `filter_${t[n].title}`;
                    if (r = ge(r.toLowerCase()), t[n] && t[n].items) {
                        let i = t[n].items.find((n => n.value === e));
                        i && (a = i.label.toLowerCase())
                    }
                    if (i[r]) {
                        let e = i[r];
                        i[r] = e.concat(",", a)
                    } else i[r] = a
                }))) : q("filter categories object not present in payload"), {
                    event: cn.FILTERS_APPLIED,
                    tsmp: _n(),
                    filters: i || n,
                    sort_option: Cn(cn.SORT_APPLIED)
                }
            }

            function yn(e) {
                const {
                    state: n
                } = e;
                if (!ee(n)) return {
                    event: cn.SEARCH,
                    tsmp: _n()
                };
                const {
                    destination: t,
                    occupancy: i,
                    date: a,
                    travelPurpose: r
                } = n;
                let d = ne,
                    o = ne,
                    s = ne,
                    l = ne,
                    c = ne,
                    u = ne,
                    m = ne,
                    v = ne,
                    g = ne,
                    _ = ne,
                    k = ne,
                    S = te,
                    p = ne,
                    N = ne,
                    E = te;
                a && (d = ee(a.start) ? a.start.date : d, o = ee(a.end) ? a.end.date : o), i && (c = i.adults ? i.adults.value : c, u = i.kids ? i.kids.value : u, m = i.rooms ? i.rooms.value : m), v = r && r.checked ? ie : ae, ee(t) && (k = ee(t.option) ? t.option.destId : k, S = _e(t.value, 0), E = _e(t.value, 0, !0)), k || (k = Ce()), s = kn(d, o), l = kn(new Date, d), g = Sn(d), _ = Sn(o), N = Ye(), N === te ? E !== S && (N = function(e) {
                    if (!ee(e)) return ne;
                    if ("string" !== typeof e || 0 === e.length) return ne;
                    let n = In.find((n => hn[n] === e));
                    return n || ne
                }(E), N && (p = E)) : p = Tn(N);
                const f = S && S === te ? void 0 : S.trim();
                return {
                    event: cn.SEARCH,
                    tsmp: _n(),
                    search_term: f,
                    adults: c,
                    book_window: l < 0 ? 0 : l,
                    children: u,
                    city_name: f,
                    country_name: p,
                    date_in: g,
                    date_out: _,
                    dest_cc: N,
                    dest_ufi: k ? `${k}` : ne,
                    nights: s,
                    rooms: m,
                    travelling_for_work: v
                }
            }

            function On() {
                return "undefined" !== typeof window && null !== window
            }

            function Fn() {
                return "undefined" !== typeof document && null !== document
            }
            const Ln = "[data-city-tax-value]",
                xn = "[data-vat-value]";

            function Dn() {
                let e = 0;
                try {
                    [Ln, xn].map((n => {
                        const t = document.querySelector(n);
                        if (ee(t) && ee(t.dataset)) {
                            let i = n === Ln ? "cityTaxValue" : "vatValue";
                            if (ee(t.dataset[i])) {
                                let n = Number(t.dataset[i]);
                                n > 0 && (e += n)
                            }
                        }
                    }))
                } catch (n) {
                    q(n.toString())
                }
                return `${e}`
            }
            var Pn;

            function Mn() {
                return {
                    event: cn.MAP_OPEN,
                    tsmp: _n(),
                    display_method: "map"
                }
            }

            function wn() {
                return {
                    event: cn.MAP_CLOSE,
                    tsmp: _n(),
                    display_method: "map"
                }
            }! function(e) {
                e.PAYMENT_BY_BOOKING = "Payment by Booking"
            }(Pn || (Pn = {}));
            const Un = {
                [cn.DEFAULT_EVENT_NAME]: Hn,
                [cn.FILTERS_APPLIED]: Rn,
                [cn.FILTERS_APPLIED_MOBILE]: function(e) {
                    const {
                        filtersApplied: n,
                        filtersByField: t
                    } = e;
                    if (!ee(n) || !ee(t)) return {
                        event: cn.NO_OP,
                        tsmp: _n()
                    };
                    let i = {};
                    return Array.isArray(t) && t.map((e => {
                        i[e.field] = e
                    })), Rn({
                        filtersApplied: n,
                        filtersByField: i
                    })
                },
                [cn.SORT_APPLIED]: function(e) {
                    return {
                        event: cn.SORT_APPLIED,
                        sort_option: e || ne,
                        tsmp: _n()
                    }
                },
                [cn.SELECT_ITEM]: function(e) {
                    let n = {};
                    try {
                        n = function(e) {
                            const {
                                item: n,
                                index: t
                            } = e;
                            let i = -1,
                                a = -1,
                                r = te,
                                d = ne,
                                o = te,
                                s = te,
                                l = te,
                                c = te,
                                u = te,
                                m = ne;
                            try {
                                if (i = ee(t) ? t : i, ee(n)) {
                                    const {
                                        displayName: e,
                                        basicPropertyData: t,
                                        location: i,
                                        priceDisplayInfoIrene: v
                                    } = n;
                                    ee(e) && (r = e.text), ee(t) && (a = t.id, d = t.accommodationTypeId, l = `${t.ufi}`, ee(t.location) && (o = t.location.countryCode, s = t.location.city), ee(t.starRating) && (u = `${t.starRating.value}`)), ee(i) && (c = i.displayLocation), ee(v) && (m = v.displayPrice.amountPerStay.amountUnformatted)
                                } else q("no item present in search result incoming payload")
                            } catch (v) {
                                q(v.toString()), q(O)
                            }
                            return {
                                item_id: a,
                                item_name: r,
                                affiliation: be(),
                                index: i,
                                item_brand: d,
                                item_category: Nn.ACCOMMODATIONS,
                                item_category2: Tn(o),
                                item_category3: s,
                                item_category4: l,
                                item_category5: fn(En.HOTEL),
                                item_list_name: c,
                                item_variant: ke(u),
                                price: m,
                                quantity: 1
                            }
                        }(e)
                    } catch (t) {
                        q(t.toString()), q(E)
                    }
                    return {
                        event: cn.SELECT_ITEM,
                        tsmp: _n(),
                        _clear: !0,
                        items: [n],
                        sort_option: Cn(cn.SORT_APPLIED),
                        filters: Cn(cn.FILTERS_APPLIED)
                    }
                },
                [cn.SELECT_ITEM_MOBILE]: function(e) {
                    const {
                        index: n,
                        card: t,
                        searchMeta: i
                    } = e;
                    let a = ne,
                        r = be(),
                        d = ne,
                        o = {},
                        s = ne;
                    try {
                        i && (a = i.searchMeta.destId || Ce(), d = i.destinationFullName, s = i.sorters.find((e => e.isSelected))), t && (o = An(t, n, a, d, r))
                    } catch (l) {
                        q(l.toString()), q(E)
                    }
                    return {
                        event: cn.SELECT_ITEM,
                        tsmp: _n(),
                        _clear: !0,
                        items: [o],
                        sort_option: s ? s.value : ne,
                        filters: Cn(cn.FILTERS_APPLIED)
                    }
                },
                [cn.VIEW_ITEM_LIST]: function(e) {
                    var n;
                    const {
                        items: t,
                        sorters: i,
                        pagination: a,
                        searchMeta: r,
                        destinationFullName: d,
                        status: o
                    } = e;
                    if (ee(o) && "complete" !== o) return {
                        event: cn.NO_OP,
                        tsmp: _n()
                    };
                    let s = [],
                        l = Ce(),
                        c = be(),
                        u = ne,
                        m = ne;
                    const v = i.find((e => e.isSelected));
                    try {
                        ee(r) && (l = (null === r || void 0 === r ? void 0 : r.destId) || l, m = (null === (n = null === r || void 0 === r ? void 0 : r.availabilityInfo) || void 0 === n ? void 0 : n.unavailabilityPercent) || m), "undefined" !== typeof t && t.length > 0 ? s = t.map(((e, n) => function(e, n, t, i, a) {
                            const {
                                id: r,
                                header: d,
                                countryCode: o,
                                availability: s,
                                accommodationTypeId: l
                            } = e;
                            let c = ne,
                                u = ne,
                                m = ne,
                                v = ne,
                                g = ne;
                            try {
                                c = d && d.title ? d.title : c, u = "undefined" !== typeof t ? t : u, "undefined" !== typeof d && null !== d && "undefined" !== typeof d.rating && null !== d.rating && (m = `${d.rating.value}`), s && ("undefined" !== typeof s.priceDisplayInfo && null !== s.priceDisplayInfo ? (v = s.priceDisplayInfo.priceBreakdown.headlinePrice.userAmount.rawAmount, v = "number" === typeof v ? v.toFixed(2) : v) : ("undefined" !== typeof s.rateInformation && null !== s.rateInformation && (g = s.rateInformation.ratePrice, v = g.split(/\s/)[1]), "undefined" === typeof v && (v = g)))
                            } catch (_) {
                                q(_.toString()), q(O)
                            }
                            return {
                                item_id: r,
                                item_name: c,
                                affiliation: a,
                                index: n,
                                item_brand: l || ne,
                                item_category: Nn.ACCOMMODATIONS,
                                item_category2: o,
                                item_category3: i,
                                item_category4: `${u}`,
                                item_category5: fn(En.HOTEL),
                                item_list_name: i,
                                item_variant: ke(m),
                                price: ke(v),
                                quantity: 1
                            }
                        }(e, n, l, d, c))) : q(N)
                    } catch (g) {
                        q(g.toString()), q(E)
                    }
                    return ee(a) && (u = a.currentPageNumber ? a.currentPageNumber : u), {
                        event: cn.VIEW_ITEM_LIST,
                        tsmp: _n(),
                        _clear: !0,
                        items: s,
                        search_page_number: u,
                        percent_places_unavailable: m,
                        sort_option: v ? v.value : ne,
                        filters: Cn(cn.FILTERS_APPLIED)
                    }
                },
                [cn.VIEW_ITEM_LIST_MOBILE]: function(e) {
                    var n;
                    const {
                        items: t,
                        sorters: i,
                        context: a,
                        pagination: r,
                        searchMeta: d,
                        destinationFullName: o,
                        status: s
                    } = e;
                    if (ee(s) && "complete" !== s) return {
                        event: cn.NO_OP,
                        tsmp: _n()
                    };
                    let l = [],
                        c = Ce(),
                        u = be(),
                        m = ne,
                        v = ne,
                        g = {};
                    const _ = i.find((e => e.isSelected));
                    try {
                        if (ee(d) && (c = (null === d || void 0 === d ? void 0 : d.destId) || c, v = (null === (n = null === d || void 0 === d ? void 0 : d.availabilityInfo) || void 0 === n ? void 0 : n.unavailabilityPercent) || v), "undefined" !== typeof t && t.length > 0 ? l = t.map(((e, n) => An(e, n, c, o, u))) : q(N), d.userHasSelectedFilters && a) {
                            const {
                                appliedFilters: e,
                                filters: n
                            } = a;
                            let t = {},
                                i = {};
                            if (n && Array.isArray(n) && n.length > 0 && (n.map((e => {
                                    var n;
                                    t[e.field] = e.options;
                                    let a = null === (n = e.title) || void 0 === n ? void 0 : n.text;
                                    a === te && e.title.translationTag && (a = e.title.translationTag.translation), i[e.field] = a
                                })), e && Array.isArray(e) && e.length > 0)) {
                                e.map((e => e.urlId.split("=")[0])).map((e => {
                                    if (i[e]) {
                                        let n = `filter_${ge(i[e].toLowerCase())}`;
                                        g[n] = t[e].filter((e => e.selected)).map((e => {
                                            var n;
                                            let t = e.value.text.toLowerCase();
                                            return t === te && e.value.translationTag && (t = null === (n = e.value.translationTag) || void 0 === n ? void 0 : n.translation.toLowerCase()), t
                                        }))
                                    }
                                }))
                            }
                        }
                    } catch (k) {
                        q(k.toString()), q(E)
                    }
                    return ee(r) && (m = r.currentPageNumber ? r.currentPageNumber : m), {
                        event: cn.VIEW_ITEM_LIST,
                        tsmp: _n(),
                        _clear: !0,
                        items: l,
                        search_page_number: m,
                        percent_places_unavailable: v,
                        sort_option: _ ? _.value : ne,
                        filters: g || ne
                    }
                },
                [cn.PAGE_VIEW_INDEX]: function() {
                    const e = bn();
                    return e.ai = be(), e.action = Fe(), e.ui = ye(), e.glev = Oe(), e.logged_in = Le(), e.language = xe(), e.user_location = De(), e.is_subscribed_to_newsletter = Pe(), e.site_section = we(), e
                },
                [cn.PAGE_VIEW_SEARCH]: function(e) {
                    var n;
                    let t = $e(),
                        i = ne,
                        a = ne,
                        r = ne,
                        d = ne,
                        o = ne,
                        s = ne;
                    const {
                        pagination: l,
                        searchMeta: c
                    } = e, u = bn();
                    return ee(t) && t !== te && (i = kn(new Date, t)), ee(l) && (a = l.nbAvailablePages, r = l.currentPageNumber), ee(c) && (d = (null === (n = null === c || void 0 === c ? void 0 : c.availabilityInfo) || void 0 === n ? void 0 : n.unavailabilityPercent) || d), o = We(), o = o === te ? ne : o, s = Ye(), u.action = Fe(), u.ai = be(), u.user_location = De(), u.language = xe(), u.ui = ye(), u.glev = Oe(), u.logged_in = Le(), u.site_section = we(), u.is_subscribed_to_newsletter = Pe(), u.dest_name = Ue(), u.adults = Ve(), u.book_window = i, u.children = Be(), u.city_name = o, u.country_name = Tn(s), u.date_in = t, u.date_out = Ke(), u.dest_cc = s, u.dest_ufi = Ce(), u.nights = ke(qe()), u.rooms = ke(je()), u.percent_places_unavailable = d, u.travelling_for_work = Ze(), u.total_search_pages = a, u.search_page_number = r, u
                },
                [cn.PAGE_VIEW_SEARCH_MOBILE]: function(e) {
                    var n, t, i;
                    let a = ne,
                        r = ne,
                        d = ne,
                        o = ne,
                        s = ne,
                        l = ne,
                        c = ne;
                    const {
                        pagination: u,
                        searchMeta: m,
                        destinationFullName: v,
                        destinationCountryCode: g
                    } = e, _ = bn();
                    return m.dates && m.dates.checkin ? (a = m.dates.checkin, r = kn(new Date, m.dates.checkin)) : (a = $e(), r = kn(new Date, a)), ee(u) && (d = u.nbAvailablePages, o = u.currentPageNumber), ee(m) && (s = (null === (n = null === m || void 0 === m ? void 0 : m.availabilityInfo) || void 0 === n ? void 0 : n.unavailabilityPercent) || s), l = We(), l = l === te ? ne : l, c = g || Ye(), _.action = Fe(), _.ai = be(), _.user_location = De(), _.language = xe(), _.ui = ye(), _.glev = Oe(), _.logged_in = Le(), _.site_section = we(), _.is_subscribed_to_newsletter = Pe(), _.dest_name = v, _.adults = m.nbAdults, _.book_window = r, _.children = m.nbChildren, _.city_name = l, _.country_name = Tn(c), _.date_in = a, _.date_out = (null === (t = m.dates) || void 0 === t ? void 0 : t.checkout) || Ke(), _.dest_cc = c, _.dest_ufi = Ce(), _.nights = (null === (i = m.dates) || void 0 === i ? void 0 : i.lengthOfStayInDays) || ke(qe()), _.rooms = ee(m.nbRooms) ? m.nbRooms : ke(je()), _.percent_places_unavailable = s, _.travelling_for_work = Ze(), _.total_search_pages = d, _.search_page_number = o, _
                },
                [cn.PAGE_VIEW_PROPERTY]: function() {
                    let e = ne,
                        n = ne,
                        t = $e(),
                        i = ne,
                        a = ne;
                    const r = bn(),
                        d = Qe(),
                        o = Ge();
                    return ee(t) && t !== te && (n = t, e = kn(new Date, n)), i = We(), i = i === te ? o.b_hotel_city : me(i), a = Ye(), r.action = Fe(), r.ai = be(), r.user_location = De(), r.language = xe(), r.ui = ye(), r.glev = Oe(), r.logged_in = Le(), r.site_section = we(), r.is_subscribed_to_newsletter = Pe(), r.dest_name = Ue() || i, r.adults = Ve(), r.book_window = e, r.children = Be(), r.city_name = i, r.country_name = Tn(a), r.date_in = n, r.date_out = Ke(), r.dest_cc = a, r.dest_ufi = Ce(), r.nights = ke(qe()), r.rooms = ke(je()), r.travelling_for_work = Ze(), r.price = ke(d.price) || ne, r.rate_condition = d.rate_conditions || ne, r.is_subscribed_to_newsletter = Pe(), r
                },
                [cn.PAGE_VIEW_CHECKOUT]: function() {
                    const e = bn(),
                        n = function() {
                            let e = ae,
                                n = ae,
                                t = Ie("b_this_url");
                            return t === te && (t = Ie("b_analytics_tracking_string")), t.indexOf("interested_taxi") > 0 && (e = ie), t.indexOf("interested_car_rentals") > 0 && (n = ie), {
                                interested_taxi: e,
                                interested_car_rentals: n
                            }
                        }();
                    return e.add_shuttle = n.interested_taxi, e.rent_car = n.interested_car_rentals, e
                },
                [cn.PAGE_VIEW_CONFIRMATION]: function(e) {
                    var n;
                    if (!ee(e) || !ee(null === e || void 0 === e ? void 0 : e.hotelName)) return q("no data payload in confirmation page view event"), {
                        event: cn.NO_OP,
                        tsmp: _n()
                    };
                    const t = bn(),
                        {
                            stayInfo: i,
                            roomCountInfo: a
                        } = e;
                    let r = ne,
                        d = ne,
                        o = ne,
                        s = ne,
                        l = ne;
                    return i && (s = null === i || void 0 === i ? void 0 : i.numberOfNights, s = s && s > 0 ? s : ke(qe()), o = i.checkInDate || $e(), o && (r = kn(new Date, o))), a && (l = a.numberOfConfirmedRoom), d = null === e || void 0 === e ? void 0 : e.totalPriceInfo.hotelCountryCode, t.action = Fe() || oe.CONFIRMATION, t.ai = be(), t.user_location = Tn(null === (n = null === e || void 0 === e ? void 0 : e.totalPriceInfo) || void 0 === n ? void 0 : n.bookerCountry) || De(), t.language = xe(), t.ui = ye(), t.glev = Oe(), t.logged_in = Le(), t.site_section = z.STAYS, t.is_subscribed_to_newsletter = Pe(), t.dest_name = Ue(), t.adults = Ve(), t.book_window = r, t.children = Be(), t.city_name = null === e || void 0 === e ? void 0 : e.hotelCity, t.country_name = Tn(d), t.date_in = o, t.date_out = Ke(), t.dest_cc = d, t.dest_ufi = Ce(), t.nights = s, t.rooms = l || ke(je()), t.travelling_for_work = Ze(), t.payment_option = function() {
                        const e = [le.C360_RES_DETAIL_V1, le.C360_RES_DETAIL_V2];
                        let n = Ie(e[0]),
                            t = Ie(e[1]);
                        return ee(n) && n !== te ? 1 === n.payment_by_booking : ee(t) && t !== te ? 1 === t.payment_by_booking : (q("payment_by_booking value was not found on confirmation page"), !1)
                    }() ? Pn.PAYMENT_BY_BOOKING : ne, t.payment_method = function() {
                        let e = ne;
                        try {
                            const n = document.querySelector("[data-payment-method]");
                            if (ee(n) && ee(n.dataset)) {
                                let t = "paymentMethod";
                                ee(n.dataset[t]) && (e = n.dataset[t])
                            }
                        } catch (n) {
                            q(n.toString())
                        }
                        return e
                    }(), t
                },
                [cn.NAVIGATION_BAR_INTERACTION]: function(e) {
                    const {
                        navigation_element: n
                    } = e, t = "undefined" !== typeof n ? n : "value_not_set";
                    return {
                        event: cn.NAVIGATION_BAR_INTERACTION,
                        tsmp: _n(),
                        navigation_element: t
                    }
                },
                [cn.SEARCH]: yn,
                [cn.SEARCH_MOBILE]: function(e) {
                    const {
                        state: n
                    } = e;
                    if (!ee(n)) return {
                        event: cn.SEARCH,
                        tsmp: _n()
                    };
                    const {
                        destination: t,
                        occupancy: i,
                        date: a,
                        travelPurpose: r
                    } = n;
                    let d = ne,
                        o = ne,
                        s = ne,
                        l = ne,
                        c = ne,
                        u = ne,
                        m = ne,
                        v = ne,
                        g = ne,
                        _ = ne,
                        k = ne,
                        S = ne,
                        p = ne,
                        N = ne,
                        E = ne;
                    if (t) {
                        if (t.value && t.value !== te ? S = t.value ? t.value : S : t.option && (S = t.option.valueForInput ? t.option.valueForInput : S), t.option && t.option.destId && t.option.title !== te) k = t.option.destId, p = t.option.title, E = t.option.cc1;
                        else if (t.optionsShown && t.options && t.options.length > 0) {
                            const e = t.options[0],
                                n = t.options[1];
                            e && e.isAroundMe ? (k = n.destId, p = n.title, E = n.cc1) : e && (k = e.destId, p = e.title, E = e.cc1)
                        }
                        N = Tn(E)
                    }
                    return a && (d = a.start ? a.start.date : d, o = a.end ? a.end.date : o), s = kn(d, o), l = kn(new Date, d), g = Sn(d), _ = Sn(o), i && (c = i.adults ? i.adults.value : c, u = i.kids ? i.kids.value : u, m = i.rooms ? i.rooms.value : m), v = r && r.checked ? ie : ae, {
                        event: cn.SEARCH,
                        tsmp: _n(),
                        search_term: S ? S.trim() : S,
                        adults: c,
                        book_window: l < 0 ? 0 : l,
                        children: u,
                        city_name: p,
                        country_name: N,
                        date_in: g,
                        date_out: _,
                        dest_cc: E,
                        dest_ufi: `${k}`,
                        nights: s,
                        rooms: m,
                        travelling_for_work: v
                    }
                },
                [cn.SEARCH_ERROR]: function(e) {
                    let n = ne,
                        t = ne;
                    const {
                        errors: i,
                        state: a
                    } = e;
                    if (ee(i) && (n = "object" === typeof i ? Object.keys(i)[0] : i), !ee(a)) return {
                        event: cn.SEARCH_ERROR,
                        tsmp: _n(),
                        error_type: n
                    };
                    const r = yn(e);
                    return t = ee(a.date) ? a.date.maxLOS : t, Object.assign(r, {
                        event: cn.SEARCH_ERROR,
                        tsmp: _n(),
                        error_type: n,
                        max_length_of_stay: t
                    })
                },
                [cn.MAP_OPEN]: Mn,
                [cn.MAP_OPEN_MOBILE]: function() {
                    return Mn()
                },
                [cn.MAP_CLOSE]: wn,
                [cn.MAP_CLOSE_MOBILE]: function() {
                    return wn()
                },
                [cn.VIEW_ITEM]: function(e) {
                    const {
                        starRating: n
                    } = e, t = Qe(), i = He(), a = n || Xe(), r = Ge();
                    let d = We();
                    d = d === te ? r.b_hotel_city : me(d);
                    let o = Re();
                    return o = o === te ? ne : o, {
                        event: cn.VIEW_ITEM,
                        tsmp: _n(),
                        _clear: !0,
                        items: [{
                            item_id: ke(ze()),
                            item_name: i && i.length > 0 ? i : Ue(),
                            affiliation: be(),
                            index: ne,
                            item_brand: ke(o),
                            item_category: Nn.ACCOMMODATIONS,
                            item_category2: Tn(Ye()),
                            item_category3: d,
                            item_category4: Ce(),
                            item_category5: fn(En.HOTEL),
                            item_list_name: d,
                            item_variant: ke(a),
                            price: ke(t.price),
                            quantity: 1
                        }]
                    }
                },
                [cn.PHOTO_CLICK]: function() {
                    return {
                        event: cn.PHOTO_CLICK,
                        tsmp: _n()
                    }
                },
                [cn.REVIEWS_CLICK]: function(e) {
                    const {
                        raw: n,
                        formatted: t
                    } = e;
                    let i = ne,
                        a = ne;
                    return a = ee(t) ? t.score : a, i = ee(n) ? n.count : i, {
                        event: cn.REVIEWS_CLICK,
                        tsmp: _n(),
                        review_number: i,
                        review_score: a
                    }
                },
                [cn.WISHLIST_SAVE]: function() {
                    return {
                        event: cn.WISHLIST_SAVE,
                        tsmp: _n()
                    }
                },
                [cn.SOCIAL_SHARE]: function(e) {
                    const {
                        channel: n
                    } = e;
                    return {
                        event: cn.SOCIAL_SHARE,
                        tsmp: _n(),
                        social_media_name: ee(n) ? me(n) : ne
                    }
                },
                [cn.SEARCH_CHANGE_DETAILS]: function(e) {
                    if (Ae() !== oe.PROPERTY) return K("page is not property page, skipping processing"), {
                        event: cn.NO_OP,
                        tsmp: _n()
                    };
                    const {
                        state: n
                    } = e;
                    if (!ee(n)) return K("no payload is present for processing processSearchChangeDetailsTS"), {
                        event: cn.NO_OP,
                        tsmp: _n()
                    };
                    const {
                        date: t,
                        occupancy: i
                    } = n;
                    let a = ne,
                        r = ne,
                        d = ne,
                        o = ne,
                        s = ne,
                        l = ne,
                        c = ne,
                        u = ne,
                        m = ne,
                        v = ne,
                        g = ne,
                        _ = ne,
                        k = Ge();
                    try {
                        a = de(ue.TRAVEL_PURPOSE), a = a === ce.BUSINESS ? ie : ae, t && (ee(t.start) && (r = t.start.date), ee(t.end) && (l = t.end.date), c = kn(r, l), u = kn(new Date, r) || Ie("days_to_checkin")), i && (o = ee(i.kids) ? i.kids.value : o, d = ee(i.adults) ? i.adults.value : d, s = ee(i.rooms) ? i.rooms.value : s), k && Object.keys(k).length > 0 && (m = k.city_name, v = k.country_name, g = k.b_countrycode, _ = k.b_ufi)
                    } catch (S) {
                        q(S.toString())
                    }
                    return {
                        event: cn.SEARCH_CHANGE_DETAILS,
                        tsmp: _n(),
                        dest_name: Ue() || m || Tn(Ye()),
                        adults: d,
                        book_window: u,
                        children: o,
                        city_name: me(We()),
                        country_name: v || Tn(Ye()),
                        date_in: Sn(r),
                        date_out: Sn(l),
                        dest_cc: g || Ye(),
                        dest_ufi: _ || Ce(),
                        nights: c,
                        rooms: s,
                        travelling_for_work: a
                    }
                },
                [cn.ADD_TO_CART]: function(e) {
                    const {
                        rt_pos_final: n,
                        rt_pos_selected: t,
                        hotel_id: i,
                        rt_selected_total_price: a,
                        aid: r
                    } = e;
                    let d = ne,
                        o = 0,
                        s = te,
                        l = ne,
                        c = te,
                        u = ne,
                        m = ne;
                    s = me(We()), l = Ue() || Te("destination_name"), c = He(), u = Xe() || Te("hotel_class"), m = i || ze();
                    let v = Re();
                    v = v === te ? ne : v;
                    const g = Cn(cn.VIEW_ITEM);
                    let _ = g && g.items ? g.items[0] : ne;
                    if (ee(t)) try {
                        d = t.split("_").length, a ? o = Number(a) : n.split(",").map((e => {
                            o += parseFloat(Je(e))
                        })), o && (o = parseFloat(o.toFixed(2)))
                    } catch (k) {
                        q(b), q(k.toString())
                    }
                    return _ ? _.price = o : _ = {
                        item_id: ke(m),
                        item_name: c || l,
                        affiliation: r || be(),
                        index: ne,
                        item_brand: ke(v),
                        item_category: Nn.ACCOMMODATIONS,
                        item_category2: Tn(Ye()),
                        item_category3: s,
                        item_category4: Ce(),
                        item_category5: fn(En.HOTEL),
                        item_list_name: s || l,
                        item_variant: ke(u),
                        price: 0 === o ? ne : o,
                        quantity: d
                    }, {
                        event: cn.ADD_TO_CART,
                        tsmp: _n(),
                        _clear: !0,
                        items: [_]
                    }
                },
                [cn.ADD_TO_CART_MOBILE]: function(e) {
                    const {
                        rt_pos_final: n,
                        rt_pos_selected: t,
                        hotel_id: i,
                        rt_selected_total_price: a,
                        aid: r
                    } = e;
                    let d = ne,
                        o = 0,
                        s = te,
                        l = ne,
                        c = te,
                        u = ne,
                        m = ne;
                    s = me(We()), l = Ue() || Te("destination_name"), c = He(), u = Xe() || Te("hotel_class"), m = i || ze();
                    let v = Re();
                    v = v === te ? ne : v;
                    const g = Cn(cn.VIEW_ITEM);
                    let _ = g && g.items ? g.items[0] : ne;
                    if (ee(t)) try {
                        d = t.split("_").length, a ? o = Number(a) : n.split(",").map((e => {
                            o += parseFloat(Je(e))
                        })), o && (o = parseFloat(o.toFixed(2)))
                    } catch (k) {
                        q(b), q(k.toString())
                    }
                    return _ ? _.price = o : _ = {
                        item_id: ke(m),
                        item_name: c || l,
                        affiliation: r || be(),
                        index: ne,
                        item_brand: ke(v),
                        item_category: Nn.ACCOMMODATIONS,
                        item_category2: Tn(Ye()),
                        item_category3: s,
                        item_category4: Ce(),
                        item_category5: fn(En.HOTEL),
                        item_list_name: s || l,
                        item_variant: ke(u),
                        price: 0 === o ? ne : o,
                        quantity: d
                    }, {
                        event: cn.ADD_TO_CART,
                        tsmp: _n(),
                        _clear: !0,
                        items: [_]
                    }
                },
                [cn.BEGIN_CHECKOUT]: function(e) {
                    const {
                        propertyDetails: n
                    } = e;
                    if (!ee(n)) return q("no propertyDetails payload in begin checkout processing func"), {
                        event: cn.NO_OP,
                        tsmp: _n()
                    };
                    let {
                        id: t,
                        name: i,
                        location: a,
                        accommodationType: r,
                        starRating: d
                    } = n;
                    const o = (null === r || void 0 === r ? void 0 : r.type) ? me(`${null===r||void 0===r?void 0:r.type}`.toLowerCase()) : fn(En.HOTEL);
                    return {
                        event: cn.BEGIN_CHECKOUT,
                        tsmp: _n(),
                        _clear: !0,
                        items: [{
                            item_id: t,
                            item_name: i,
                            affiliation: be(),
                            index: ne,
                            item_brand: (null === r || void 0 === r ? void 0 : r.id) || ne,
                            item_category: Nn.ACCOMMODATIONS,
                            item_category2: Tn(null === a || void 0 === a ? void 0 : a.countryCode),
                            item_category3: (null === a || void 0 === a ? void 0 : a.city) || We(),
                            item_category4: (null === a || void 0 === a ? void 0 : a.ufi) || Ce(),
                            item_category5: o,
                            item_list_name: (null === a || void 0 === a ? void 0 : a.city) || (null === a || void 0 === a ? void 0 : a.formattedAddress) || ne,
                            item_variant: (null === d || void 0 === d ? void 0 : d.value) || ne,
                            price: en(),
                            quantity: 1
                        }]
                    }
                },
                [cn.CHANGE_SELECTION_CHECKOUT]: function() {
                    return {
                        event: cn.CHANGE_SELECTION_CHECKOUT,
                        tsmp: _n()
                    }
                },
                [cn.ADD_PAYMENT_INFO]: function() {
                    return {
                        event: cn.ADD_PAYMENT_INFO,
                        tsmp: _n(),
                        _clear: !0
                    }
                },
                [cn.PURCHASE]: function(e) {
                    var n, t, i, a;
                    if (!ee(e) || !ee(null === e || void 0 === e ? void 0 : e.hotelName)) return q("no data payload in purchase event"), {
                        event: cn.NO_OP,
                        tsmp: _n()
                    };
                    let r, d, o = be(),
                        s = (null === e || void 0 === e ? void 0 : e.hotelName) || He(),
                        l = s && s.length > 0 ? s : Ue(),
                        c = null === e || void 0 === e ? void 0 : e.totalPriceInfo.totalPrice,
                        u = Ie("fe_trans_total_price_euro"),
                        m = ne,
                        v = Xe() || Te("hotel_class");
                    if ((null === e || void 0 === e ? void 0 : e.hotelCity) || (d = We(), d = d === te ? ne : me(d)), (null === (n = null === e || void 0 === e ? void 0 : e.roomCountInfo) || void 0 === n ? void 0 : n.roomReservations) && (null === (t = null === e || void 0 === e ? void 0 : e.roomCountInfo) || void 0 === t ? void 0 : t.roomReservations[0]) && (m = null === (a = null === (i = null === e || void 0 === e ? void 0 : e.roomCountInfo) || void 0 === i ? void 0 : i.roomReservations[0]) || void 0 === a ? void 0 : a.roomReservationId), r = Te("ttv") || c || u, r = `${r}`.trim(), r.indexOf(" ") > 0) {
                        r.split(" ").map((e => {
                            Number(e) > 0 && (r = Number(e))
                        }))
                    }
                    return {
                        event: cn.PURCHASE,
                        tsmp: _n(),
                        _clear: !0,
                        rid: m || nn() || Te("rid"),
                        ttv: r,
                        ai: o,
                        tax: Dn() || ne,
                        items: [{
                            item_id: (null === e || void 0 === e ? void 0 : e.hotelId) || ze(),
                            item_name: l,
                            affiliation: o,
                            index: ne,
                            item_brand: (null === e || void 0 === e ? void 0 : e.roomCountInfo.accommodationTypeId) || Re(),
                            item_category: Nn.ACCOMMODATIONS,
                            item_category2: Tn(null === e || void 0 === e ? void 0 : e.totalPriceInfo.hotelCountryCode),
                            item_category3: (null === e || void 0 === e ? void 0 : e.hotelCity) || d,
                            item_category4: Ce(),
                            item_category5: (null === e || void 0 === e ? void 0 : e.isBookingHome) ? fn(En.BOOKING_HOME) : fn(En.HOTEL),
                            item_list_name: Te("destination_name") || (null === e || void 0 === e ? void 0 : e.hotelCity) || (null === e || void 0 === e ? void 0 : e.hotelAddress),
                            item_variant: ke(v),
                            price: ke(r),
                            quantity: 1
                        }]
                    }
                },
                [cn.CANCELLATION]: function() {
                    return {
                        event: cn.CANCELLATION,
                        tsmp: _n(),
                        cancellation_hotel_name: He() || Te("hotel_name") || ze(),
                        cancellation_dest_name: We() || Te("city_name")
                    }
                },
                [cn.NEWSLETTER_SIGN_UP]: function() {
                    return {
                        event: cn.NEWSLETTER_SIGN_UP,
                        tsmp: _n(),
                        is_subscribed_to_newsletter: Pe()
                    }
                },
                [cn.APP_DOWNLOAD]: function() {
                    return {
                        event: cn.APP_DOWNLOAD,
                        tsmp: _n()
                    }
                },
                [cn.OPEN_APP]: function() {
                    return {
                        event: cn.OPEN_APP,
                        tsmp: _n()
                    }
                },
                [cn.PAGE_VIEW_CHECKOUT_PROPERTY_CARD]: function(e) {
                    return ee(e) && on(cn.PAGE_VIEW_CHECKOUT_PROPERTY_CARD, e), {
                        event: cn.NO_OP,
                        tsmp: _n()
                    }
                }
            };

            function Hn(e) {
                return q(S), {
                    event: cn.NO_OP,
                    tsmp: _n()
                }
            }
            const Vn = "_ga";

            function Bn() {
                if (!On() || !Fn()) return !1;
                try {
                    return function() {
                        if (!On() || !Fn()) return !1;
                        if (!ee(document.cookie)) return !1;
                        let e = !1;
                        try {
                            document.cookie.split("; ").find((e => e.startsWith(Vn))) && (e = !0)
                        } catch (n) {
                            q(n.toString())
                        }
                        return K(`${j}: ${e}`), e
                    }()
                } catch (e) {
                    q(e.toString())
                }
                return !1
            }

            function Gn(e, n, t) {
                if (Bn())
                    if ("undefined" !== typeof e)
                        if ("undefined" !== typeof n)
                            if ("undefined" !== typeof t) try {
                                const i = function(e) {
                                    return "undefined" !== typeof Un[e] ? Un[e] : Hn
                                }(n);
                                vn(e, i(t))
                            } catch (d) {
                                q(d.toString()), q(g)
                            } else q(i);
                            else q(r);
                else q(a)
            }
            var Wn, Yn;

            function $n(e, n, t, i) {
                let a = null;
                if (On() && Fn())
                    if (ee(e))
                        if (ee(n))
                            if (ee(t))
                                if (ee(i)) {
                                    switch (e) {
                                        case Wn.CLASS:
                                            let e = document.getElementsByClassName(n);
                                            a = ee(e[0]) ? e[0] : a;
                                            break;
                                        case Wn.ID:
                                            a = document.getElementById(n);
                                            break;
                                        case Wn.ATTRIBUTE:
                                            a = document.querySelector(n);
                                            break;
                                        default:
                                            q("default case was run in attachHandler function")
                                    }
                                    if ("undefined" !== typeof a && null !== a) try {
                                        a.removeEventListener(t, i), a.addEventListener(t, i)
                                    } catch (r) {
                                        q(r.toString()), q("error while trying to add event listener")
                                    } else q("elem is null in attach handler")
                                } else q(`${d}: handler func`);
                else q(`${d}: handler func type`);
                else q(`${d}: element identifier`);
                else q(`${d}: element identifier type`);
                else q(s)
            }

            function Kn() {
                Ae() === oe.SEARCH ? $n(Wn.CLASS, "map_full_overlay__close", Yn.CLICK, (function() {
                    Gn(tn.DATA_LAYER, cn.MAP_CLOSE, {})
                })) : K("current page is not searchresults, skipping searchresults handlers")
            }

            function qn() {
                Ae() === oe.PROPERTY ? (Me().toLowerCase() === J.DESKTOP && (! function() {
                    function e(e) {
                        try {
                            const {
                                target: n
                            } = e;
                            if (ee(n)) {
                                let e = n;
                                e.classList && (e.classList.contains("bh-photo-grid-item") || e.classList.contains("bh-photo-grid-thumb-more") || e.classList.contains("bh-photo-grid-thumb-more-inner") || e.classList.contains("bh-photo-grid-thumb-more-inner-2") || e.classList.contains("bh-photo-modal-grid-image")) && Gn(tn.DATA_LAYER, cn.PHOTO_CLICK, {})
                            }
                        } catch (e) {
                            q(A), q(e.toString())
                        }
                    }
                    $n(Wn.CLASS, "bh-photo-grid", Yn.CLICK, e), $n(Wn.CLASS, "bh-photo-modal", Yn.CLICK, e)
                }(), $n(Wn.ATTRIBUTE, 'form[id="hprt-form"]', Yn.SUBMIT, (function(e) {
                    const {
                        target: n
                    } = e;
                    let t, i;
                    if (ee(n)) try {
                        t = new FormData(n), i = Object.fromEntries(t), Gn(tn.DATA_LAYER, cn.ADD_TO_CART, i)
                    } catch (e) {
                        q(b), q(e.toString())
                    }
                }))), Me().toLowerCase() === J.MDOT && ($n(Wn.ID, "hotel-photos", Yn.TOUCHEND, (function(e) {
                    try {
                        const {
                            target: n
                        } = e;
                        if (ee(n)) {
                            let e = n;
                            e.classList && (e.classList.contains("swpg_prev") || e.classList.contains("swpg__next") || e.classList.contains("swpg__button")) && Gn(tn.DATA_LAYER, cn.PHOTO_CLICK, {})
                        }
                    } catch (e) {
                        q(A), q(e.toString())
                    }
                })), $n(Wn.ID, "bookForm", Yn.FORMDATA, (function(e) {
                    const {
                        target: n
                    } = e;
                    if (n) {
                        let e = n;
                        try {
                            const n = ["rt_pos_final", "rt_pos_selected", "hotel_id", "rt_selected_total_price", "aid"],
                                t = {
                                    aid: te,
                                    hotel_id: te,
                                    rt_pos_final: te,
                                    rt_pos_selected: te,
                                    rt_pos_selected_within_room: te,
                                    rt_selected_total_price: te
                                };
                            e && e.children && n.map((n => {
                                e.children[n] && (t[n] = e.children[n].value)
                            })), Gn(tn.DATA_LAYER, cn.ADD_TO_CART_MOBILE, t)
                        } catch (t) {
                            q(C), q(t.toString())
                        }
                    } else q(C + ": no formdata target")
                })))) : K("current page is not hotel (property), skipping hotel page handlers")
            }

            function jn() {
                const e = Object.keys(Un);
                for (const n of e) sn(n, {});
                K("store init complete")
            }! function(e) {
                e.CLASS = "class", e.ID = "id", e.ATTRIBUTE = "attribute"
            }(Wn || (Wn = {})),
            function(e) {
                e.CLICK = "click", e.SUBMIT = "submit", e.TOUCHEND = "touchend", e.FORMDATA = "formdata"
            }(Yn || (Yn = {}));
            const Zn = {
                handlersInitDelay: 5 * Math.round(100 * Math.random()) + 100
            };

            function Xn() {
                try {
                    if (function() {
                            let e = ne;
                            return !(!he() || (e = window[Se][pe][Ee], !e))
                        }()) return void K("an instance of the lib is up");
                    W(), jn(), he() && window[Se][pe][fe] || setTimeout((() => {
                        he() && (window[Se][pe][fe] = !0), On() && Fn() ? (Kn(), qn(), K("handlers init complete")) : q(s)
                    }), Zn.handlersInitDelay), he() && (window[Se][pe][Ee] = !0), K("library init complete")
                } catch (e) {
                    q(T)
                }
            }! function() {
                try {
                    if (!Bn()) return void K("consent was not granted by the user");
                    Xn()
                } catch (e) {
                    q(e.toString()), q(T)
                }
            }()
        },
        ad382b9c: (e, n, t) => {
            "use strict";
            t.d(n, {
                Ar: () => U,
                N2: () => H,
                NM: () => g,
                yp: () => V
            });
            var i = t("6222292b"),
                a = t("ead71eb0"),
                r = t("daaaaed0"),
                d = t.n(r),
                o = t("9bcc1cd2"),
                s = t.n(o),
                l = t("ba1316c3"),
                c = t.n(l),
                u = t("bad7dee5"),
                m = t.n(u),
                v = t("2cb5c3c4"),
                g = (t("ebca7d7d"), (e => (e.UNKNOWN = "UNKNOWN", e.WWW = "WWW", e.MDOT = "MDOT", e.TDOT = "TDOT", e.ANDROID = "ANDROID", e.IOS = "IOS", e.XML = "XML", e.MG_FAMILY = "MG_FAMILY", e.AFFILIATE_BASE = "AFFILIATE_BASE", e.EMK_FAMILY = "EMK_FAMILY", e.JOINAPP = "JOINAPP", e.PULSE = "PULSE", e.EXTRANET = "EXTRANET", e.CHAT2BOOK = "CHAT2BOOK", e))(g || {})),
                _ = {
                    traveller: c(),
                    traveller_ex: m(),
                    rentalcars: s(),
                    legacy: d()
                },
                k = e => {
                    let n, {
                        siteType: t,
                        isRTL: i,
                        buiTheme: a
                    } = e;
                    switch (t) {
                        case "ANDROID":
                        case "IOS":
                        case "MDOT":
                            n = "small";
                            break;
                        case "TDOT":
                            n = "medium";
                            break;
                        default:
                            n = "large"
                    }
                    return {
                        defaultViewportSize: n,
                        defaultRTL: i,
                        theme: _[a || "traveller"]
                    }
                },
                S = (0, a.createContext)({
                    mainHtmlId: "main"
                }),
                p = {
                    skipNav: "skip_nav_skipNav"
                };

            function N(e) {
                let {
                    text: n,
                    mainHtmlId: t
                } = e;
                const r = (0, a.useRef)(),
                    d = (0, a.useCallback)((() => {
                        var e;
                        return null === (e = r.current) || void 0 === e ? void 0 : e.focus()
                    }), []);
                return (0, v.jsx)(i.Box, {
                    padding: 4,
                    backgroundColor: "elevation_one",
                    className: p.skipNav,
                    attributes: {
                        tabIndex: 0,
                        onFocus: d
                    },
                    children: (0, v.jsx)(i.Link, {
                        href: `#${t}`,
                        attributes: {
                            ref: r,
                            tabIndex: 0
                        },
                        children: n
                    })
                })
            }
            var E = {
                    LAYOUT_BLOCK: {
                        s: 4,
                        l: 6
                    },
                    LAYOUT_AREA: {
                        s: 4,
                        l: 6
                    },
                    REGION: {
                        s: 4,
                        l: 6
                    },
                    CONNECTED_PATTERN: {
                        s: 4,
                        l: 6
                    }
                },
                f = "base",
                h = "main";

            function I(e) {
                let {
                    htmlId: n = h,
                    children: t,
                    gap: r
                } = e;
                const d = (0, a.useMemo)((() => ({
                    id: n
                })), [n]);
                return (0, v.jsx)(i.Stack, {
                    alignItems: "stretch",
                    attributes: d,
                    tagName: "main",
                    gap: r,
                    children: a.Children.map(t, ((e, n) => (0, v.jsx)(i.Stack.Item, {
                        className: "cxc-shell-container-wrapper",
                        children: e
                    }, n)))
                })
            }

            function T(e) {
                let {
                    gap: n,
                    children: t
                } = e;
                return (0, v.jsx)(i.Stack, {
                    gap: n,
                    className: "cxc-shell-layout-stack",
                    children: a.Children.map(t, (e => (null === e || void 0 === e ? void 0 : e.type) === I ? (0, a.cloneElement)(e, { ...e.props,
                        gap: n
                    }) : (0, v.jsx)(i.Stack.Item, {
                        className: "cxc-shell-layout-stack-wrapper",
                        children: e
                    })))
                })
            }
            var A = function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    return n.reduce(((e, n) => !e && n ? n : n ? `${e} ${n}` : e), "")
                },
                b = "container_root",
                C = "container_root--full-width",
                R = "container_root--without-padding",
                y = "container_root--with-padding";

            function O(e) {
                const {
                    fullWidth: n,
                    children: t,
                    className: i,
                    attributes: a,
                    withoutPadding: r
                } = e, d = A(b, n && C, r ? R : y, i), o = { ...a,
                    style: { ...null === a || void 0 === a ? void 0 : a.style
                    }
                };
                return (0, v.jsx)("div", { ...o,
                    className: d,
                    children: t
                })
            }

            function F() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                return n.map((e => e ? "string" === typeof e ? e : Array.isArray(e) ? F(...e) : "object" === typeof e ? Object.entries(e).filter((e => {
                    let [n, t] = e;
                    return t
                })).map((e => {
                    let [n] = e;
                    return n
                })).join(" ") : "" : "")).join(" ").trim()
            }

            function L(e, n) {
                return function(e) {
                    return null !== e && "object" === typeof e && "s" in e
                }(e) ? {
                    s: n(e.s, "s"),
                    m: e.m ? n(e.m, "m") : void 0,
                    l: e.l ? n(e.l, "l") : void 0,
                    xl: e.xl ? n(e.xl, "xl") : void 0
                } : n(e, "s")
            }
            "undefined" !== typeof window && window.requestIdleCallback && window.requestIdleCallback.bind(window), "undefined" !== typeof window && window.cancelIdleCallback && window.cancelIdleCallback.bind(window);
            var x = "layout_blockOnlyScreen",
                D = "layout_blockOnlyPrint",
                P = "layout_bodyContainerBgBase",
                M = "layout_bodyContainerBgBaseAlt",
                w = e => {
                    const n = {
                            "0-12": [12],
                            "3-9": [3, 9],
                            "9-3": [9, 3],
                            "4-8": [4, 8],
                            "8-4": [8, 4]
                        },
                        t = [12];
                    switch (e.pattern) {
                        case "one-column":
                            return [12];
                        case "two-column":
                            return n[e.columns ? ? "3-9"] ? ? t;
                        default:
                            return t
                    }
                };
            var U = {
                BodyContainer: function(e) {
                    let {
                        children: n,
                        gap: t = E.LAYOUT_BLOCK,
                        backgroundColor: i = f,
                        hideRegionsIfEmpty: r = !1
                    } = e;
                    const d = (0, a.useMemo)((() => F({
                        [P]: "base" === i,
                        [M]: "base_alt" === i,
                        "react-shell-root-hide-area-if-empty": r
                    }) || P), [i, r]);
                    return (0, v.jsx)(O, {
                        className: d,
                        fullWidth: !0,
                        withoutPadding: !0,
                        children: (0, v.jsx)(T, {
                            gap: t,
                            children: n
                        })
                    })
                },
                Transient: function(e) {
                    return e.children
                },
                Block: function(e) {
                    let {
                        children: n = [],
                        composite: t,
                        size: r,
                        gap: d,
                        mixin: o,
                        fullWidth: s = !1,
                        media: l = "all"
                    } = e;
                    const c = L(r, w),
                        u = a.Children.map(n, ((e, n) => {
                            const {
                                props: t
                            } = e;
                            return (0, a.cloneElement)(e, { ...t,
                                key: n,
                                columnSize: L(c, (e => e[n] ? ? e[0]))
                            })
                        })),
                        m = F({
                            [x]: "screen" === l,
                            [D]: "print" === l
                        });
                    return (0, v.jsx)(O, {
                        className: m,
                        fullWidth: s,
                        withoutPadding: s,
                        attributes: {
                            "data-testid": "layout-block"
                        },
                        children: (0, v.jsx)(i.Grid, {
                            gap: { ...E.LAYOUT_BLOCK,
                                ...d
                            },
                            mixin: o,
                            children: t ? t(u) : u
                        })
                    })
                },
                Area: function(e) {
                    let {
                        columnSize: n,
                        children: t,
                        gap: a = E.REGION
                    } = e;
                    return (0, v.jsx)(i.Grid.Column, {
                        size: n,
                        className: "cxc-grid-column",
                        children: (0, v.jsx)(T, {
                            gap: a,
                            children: t
                        })
                    })
                },
                Main: I
            };

            function H(e) {
                let {
                    children: n,
                    buiTheme: t,
                    a11y: {
                        skipNavText: r
                    },
                    shellComponents: d,
                    siteType: o,
                    isRTL: s = !1
                } = e;
                const l = (0, a.useMemo)((() => ({
                        mainHtmlId: "main"
                    })), []),
                    c = (0, a.useMemo)((() => k({
                        siteType: o,
                        isRTL: s,
                        buiTheme: t
                    })), [t, s, o]);
                return (0, v.jsx)(S.Provider, {
                    value: l,
                    children: (0, v.jsxs)(i.BUIProvider, { ...c,
                        children: [(0, v.jsx)(N, {
                            text: r,
                            mainHtmlId: l.mainHtmlId
                        }), a.Children.map(n, (e => {
                            if ((null === e || void 0 === e ? void 0 : e.type) === U.BodyContainer || (null === e || void 0 === e ? void 0 : e.type) === U.Transient) return e;
                            console.warn("[react-shell] Shell component only accepts BodyContainer as a child")
                        })), d]
                    })
                })
            }

            function V(e) {
                let {
                    children: n,
                    gap: t
                } = e;
                return (0, v.jsx)(T, {
                    gap: t,
                    children: n
                })
            }
        },
        b1f34e95: (e, n, t) => {
            "use strict";
            t.d(n, {
                $O: () => r,
                G1: () => l,
                Oq: () => o,
                RS: () => m,
                _Q: () => c,
                _g: () => s,
                ge: () => a,
                jP: () => d,
                mT: () => i,
                yn: () => u
            });
            const i = "nflt",
                a = ";",
                r = "ac_meta",
                d = "previous_search_id",
                o = {
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
                s = ["offset", "activeTab", "sb", "src_elem", "hstrmdl"],
                l = "min",
                c = "max",
                u = new RegExp(`^.+-(${l}|[0-9]+)-(${c}|[0-9]+)-1`, "i"),
                m = "sr_sfu"
        },
        dd6086f7: (e, n, t) => {
            "use strict";
            t.d(n, {
                d: () => o
            });
            var i = t("dc6d28ff"),
                a = t("d1e54a96"),
                r = t("67934118"),
                d = t("b1f34e95");

            function o(e) {
                let {
                    ucfac: n,
                    ucfgff: t,
                    ffsau: o,
                    highlightedPropertyId: s,
                    tripThemeId: l,
                    destType: c,
                    destId: u,
                    isAroundme: m,
                    latitude: v,
                    longitude: g,
                    travelPurpose: _,
                    sorter: k,
                    selectedFilters: S,
                    checkin: p,
                    checkout: N,
                    nbAdults: E,
                    nbChildren: f,
                    childrenAges: h,
                    nbRooms: I,
                    postcard: T,
                    sleepingRoomMatch: A,
                    showApartHotels: b,
                    loginRedirect: C,
                    fromSearchHistorySearchbox: R,
                    lpThemeId: y,
                    previousSearchId: O,
                    srView: F,
                    sourceLabel: L
                } = e;
                const x = (0, i.getRequestContext)().getLanguage(),
                    D = (0, a.constructUrl)({
                        pathname: `/searchresults${"en-us"===x?"":"."+x}.html`
                    }),
                    P = D.searchParams;
                if (p && N && (P.set("checkin", p), P.set("checkout", N)), u && c && (P.set("dest_id", String(u)), P.set("dest_type", String(c).toLowerCase())), "boolean" === typeof m && P.set("is_aroundme", m ? "1" : "0"), "undefined" !== typeof v && "undefined" !== typeof g && (P.set("latitude", String(v)), P.set("longitude", String(g))), "undefined" !== typeof _) {
                    const e = (0, r.DT)(parseInt(String(_), 10));
                    e && P.set(r.w3, e)
                }
                return S && P.set(d.mT, S), k && P.set("order", k), "undefined" !== typeof E && (P.set("group_adults", String(E)), P.set("req_adults", String(E))), "undefined" !== typeof I && P.set("no_rooms", String(I)), "undefined" !== typeof f && (P.set("group_children", String(f)), P.set("req_children", String(f))), h && h.forEach((e => {
                    P.append("age", String(e)), P.append("req_age", String(e))
                })), s && P.set("highlighted_hotels", String(s)), l && P.set("trip_theme", String(l)), n && P.set("ucfac", n), t && P.set("ucfgff", t), o && P.set("ffsau", o), T && P.set("postcard", T), A && P.set("slp_r_match_to", A), b && P.set("shw_aparth", b), C && P.set("login_redirect", C), R && P.set("fshsb", "1"), y && P.set("theme_id", String(y)), O && P.set(d.jP, O), F && P.set("sr_view", F), L && P.set("source_label", L), D
            }
        },
        "4f475142": (e, n, t) => {
            "use strict";
            t.d(n, {
                Gr: () => g,
                Xk: () => v
            });
            var i = t("24e040c9"),
                a = t.n(i),
                r = t("e65db334"),
                d = t.n(r),
                o = t("7fd19181"),
                s = t.n(o),
                l = t("8da416e8"),
                c = t.n(l);
            (0, i.extend)(c()), (0, i.extend)(s()), (0, i.extend)(d());
            const u = "YYYY-MM-DD";

            function m(e, n, t) {
                const i = n.get(t ? "checkout_year_month" : "checkin_year_month");
                if (!i) return e;
                if (!Number(e.month) || !Number(e.year)) {
                    const [n, t] = i.split("-");
                    return { ...e,
                        year: n,
                        month: t
                    }
                }
                return e
            }

            function v(e) {
                if (!e) return null;
                const n = m({
                        year: e.get("checkin_year"),
                        month: e.get("checkin_month"),
                        day: e.get("checkin_monthday")
                    }, e),
                    t = m({
                        year: e.get("checkout_year"),
                        month: e.get("checkout_month"),
                        day: e.get("checkout_monthday")
                    }, e, !0);
                let i = a().utc([n.year, n.month, n.day].join("-"), "YYYY-M-D");
                i.isValid() || (i = a().utc(e.get("checkin") || "", "YYYY-M-D"));
                let r = a().utc([t.year, t.month, t.day].join("-"), "YYYY-M-D");
                if (r.isValid() || (r = a().utc(e.get("checkout") || "", "YYYY-M-D")), i.isValid()) {
                    const n = parseInt(String(e.get("interval")), 10);
                    !isNaN(n) && n > 0 && (r = i.add(n, "day"))
                }
                return i.isValid() && r.isValid() ? {
                    checkin: i.toDate(),
                    checkout: r.toDate()
                } : null
            }

            function g(e) {
                return a().utc(e).format(u)
            }
        },
        67934118: (e, n, t) => {
            "use strict";
            t.d(n, {
                C3: () => s,
                DT: () => l,
                H: () => i,
                w3: () => r
            });
            const i = "business",
                a = "leisure",
                r = "sb_travel_purpose",
                d = 1,
                o = 2;

            function s(e) {
                return e.get(r) === i
            }

            function l(e) {
                return e === d ? i : e === o ? a : void 0
            }
        },
        "24e040c9": function(e) {
            e.exports = function() {
                "use strict";
                var e = "millisecond",
                    n = "second",
                    t = "minute",
                    i = "hour",
                    a = "day",
                    r = "week",
                    d = "month",
                    o = "quarter",
                    s = "year",
                    l = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
                    c = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    u = function(e, n, t) {
                        var i = String(e);
                        return !i || i.length >= n ? e : "" + Array(n + 1 - i.length).join(t) + e
                    },
                    m = {
                        s: u,
                        z: function(e) {
                            var n = -e.utcOffset(),
                                t = Math.abs(n),
                                i = Math.floor(t / 60),
                                a = t % 60;
                            return (n <= 0 ? "+" : "-") + u(i, 2, "0") + ":" + u(a, 2, "0")
                        },
                        m: function(e, n) {
                            var t = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                                i = e.clone().add(t, d),
                                a = n - i < 0,
                                r = e.clone().add(t + (a ? -1 : 1), d);
                            return Number(-(t + (n - i) / (a ? i - r : r - i)) || 0)
                        },
                        a: function(e) {
                            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                        },
                        p: function(l) {
                            return {
                                M: d,
                                y: s,
                                w: r,
                                d: a,
                                D: "date",
                                h: i,
                                m: t,
                                s: n,
                                ms: e,
                                Q: o
                            }[l] || String(l || "").toLowerCase().replace(/s$/, "")
                        },
                        u: function(e) {
                            return void 0 === e
                        }
                    },
                    v = {
                        name: "en",
                        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                    },
                    g = "en",
                    _ = {};
                _[g] = v;
                var k = function(e) {
                        return e instanceof E
                    },
                    S = function(e, n, t) {
                        var i;
                        if (!e) return g;
                        if ("string" == typeof e) _[e] && (i = e), n && (_[e] = n, i = e);
                        else {
                            var a = e.name;
                            _[a] = e, i = a
                        }
                        return !t && i && (g = i), i || !t && g
                    },
                    p = function(e, n) {
                        if (k(e)) return e.clone();
                        var t = "object" == typeof n ? n : {};
                        return t.date = e, t.args = arguments, new E(t)
                    },
                    N = m;
                N.l = S, N.i = k, N.w = function(e, n) {
                    return p(e, {
                        locale: n.$L,
                        utc: n.$u,
                        $offset: n.$offset
                    })
                };
                var E = function() {
                    function u(e) {
                        this.$L = this.$L || S(e.locale, null, !0), this.parse(e)
                    }
                    var m = u.prototype;
                    return m.parse = function(e) {
                        this.$d = function(e) {
                            var n = e.date,
                                t = e.utc;
                            if (null === n) return new Date(NaN);
                            if (N.u(n)) return new Date;
                            if (n instanceof Date) return new Date(n);
                            if ("string" == typeof n && !/Z$/i.test(n)) {
                                var i = n.match(l);
                                if (i) return t ? new Date(Date.UTC(i[1], i[2] - 1, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, i[7] || 0)) : new Date(i[1], i[2] - 1, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, i[7] || 0)
                            }
                            return new Date(n)
                        }(e), this.init()
                    }, m.init = function() {
                        var e = this.$d;
                        this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                    }, m.$utils = function() {
                        return N
                    }, m.isValid = function() {
                        return !("Invalid Date" === this.$d.toString())
                    }, m.isSame = function(e, n) {
                        var t = p(e);
                        return this.startOf(n) <= t && t <= this.endOf(n)
                    }, m.isAfter = function(e, n) {
                        return p(e) < this.startOf(n)
                    }, m.isBefore = function(e, n) {
                        return this.endOf(n) < p(e)
                    }, m.$g = function(e, n, t) {
                        return N.u(e) ? this[n] : this.set(t, e)
                    }, m.year = function(e) {
                        return this.$g(e, "$y", s)
                    }, m.month = function(e) {
                        return this.$g(e, "$M", d)
                    }, m.day = function(e) {
                        return this.$g(e, "$W", a)
                    }, m.date = function(e) {
                        return this.$g(e, "$D", "date")
                    }, m.hour = function(e) {
                        return this.$g(e, "$H", i)
                    }, m.minute = function(e) {
                        return this.$g(e, "$m", t)
                    }, m.second = function(e) {
                        return this.$g(e, "$s", n)
                    }, m.millisecond = function(n) {
                        return this.$g(n, "$ms", e)
                    }, m.unix = function() {
                        return Math.floor(this.valueOf() / 1e3)
                    }, m.valueOf = function() {
                        return this.$d.getTime()
                    }, m.startOf = function(e, o) {
                        var l = this,
                            c = !!N.u(o) || o,
                            u = N.p(e),
                            m = function(e, n) {
                                var t = N.w(l.$u ? Date.UTC(l.$y, n, e) : new Date(l.$y, n, e), l);
                                return c ? t : t.endOf(a)
                            },
                            v = function(e, n) {
                                return N.w(l.toDate()[e].apply(l.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n)), l)
                            },
                            g = this.$W,
                            _ = this.$M,
                            k = this.$D,
                            S = "set" + (this.$u ? "UTC" : "");
                        switch (u) {
                            case s:
                                return c ? m(1, 0) : m(31, 11);
                            case d:
                                return c ? m(1, _) : m(0, _ + 1);
                            case r:
                                var p = this.$locale().weekStart || 0,
                                    E = (g < p ? g + 7 : g) - p;
                                return m(c ? k - E : k + (6 - E), _);
                            case a:
                            case "date":
                                return v(S + "Hours", 0);
                            case i:
                                return v(S + "Minutes", 1);
                            case t:
                                return v(S + "Seconds", 2);
                            case n:
                                return v(S + "Milliseconds", 3);
                            default:
                                return this.clone()
                        }
                    }, m.endOf = function(e) {
                        return this.startOf(e, !1)
                    }, m.$set = function(r, o) {
                        var l, c = N.p(r),
                            u = "set" + (this.$u ? "UTC" : ""),
                            m = (l = {}, l[a] = u + "Date", l.date = u + "Date", l[d] = u + "Month", l[s] = u + "FullYear", l[i] = u + "Hours", l[t] = u + "Minutes", l[n] = u + "Seconds", l[e] = u + "Milliseconds", l)[c],
                            v = c === a ? this.$D + (o - this.$W) : o;
                        if (c === d || c === s) {
                            var g = this.clone().set("date", 1);
                            g.$d[m](v), g.init(), this.$d = g.set("date", Math.min(this.$D, g.daysInMonth())).toDate()
                        } else m && this.$d[m](v);
                        return this.init(), this
                    }, m.set = function(e, n) {
                        return this.clone().$set(e, n)
                    }, m.get = function(e) {
                        return this[N.p(e)]()
                    }, m.add = function(e, o) {
                        var l, c = this;
                        e = Number(e);
                        var u = N.p(o),
                            m = function(n) {
                                var t = p(c);
                                return N.w(t.date(t.date() + Math.round(n * e)), c)
                            };
                        if (u === d) return this.set(d, this.$M + e);
                        if (u === s) return this.set(s, this.$y + e);
                        if (u === a) return m(1);
                        if (u === r) return m(7);
                        var v = (l = {}, l[t] = 6e4, l[i] = 36e5, l[n] = 1e3, l)[u] || 1,
                            g = this.$d.getTime() + e * v;
                        return N.w(g, this)
                    }, m.subtract = function(e, n) {
                        return this.add(-1 * e, n)
                    }, m.format = function(e) {
                        var n = this;
                        if (!this.isValid()) return "Invalid Date";
                        var t = e || "YYYY-MM-DDTHH:mm:ssZ",
                            i = N.z(this),
                            a = this.$locale(),
                            r = this.$H,
                            d = this.$m,
                            o = this.$M,
                            s = a.weekdays,
                            l = a.months,
                            u = function(e, i, a, r) {
                                return e && (e[i] || e(n, t)) || a[i].substr(0, r)
                            },
                            m = function(e) {
                                return N.s(r % 12 || 12, e, "0")
                            },
                            v = a.meridiem || function(e, n, t) {
                                var i = e < 12 ? "AM" : "PM";
                                return t ? i.toLowerCase() : i
                            },
                            g = {
                                YY: String(this.$y).slice(-2),
                                YYYY: this.$y,
                                M: o + 1,
                                MM: N.s(o + 1, 2, "0"),
                                MMM: u(a.monthsShort, o, l, 3),
                                MMMM: u(l, o),
                                D: this.$D,
                                DD: N.s(this.$D, 2, "0"),
                                d: String(this.$W),
                                dd: u(a.weekdaysMin, this.$W, s, 2),
                                ddd: u(a.weekdaysShort, this.$W, s, 3),
                                dddd: s[this.$W],
                                H: String(r),
                                HH: N.s(r, 2, "0"),
                                h: m(1),
                                hh: m(2),
                                a: v(r, d, !0),
                                A: v(r, d, !1),
                                m: String(d),
                                mm: N.s(d, 2, "0"),
                                s: String(this.$s),
                                ss: N.s(this.$s, 2, "0"),
                                SSS: N.s(this.$ms, 3, "0"),
                                Z: i
                            };
                        return t.replace(c, (function(e, n) {
                            return n || g[e] || i.replace(":", "")
                        }))
                    }, m.utcOffset = function() {
                        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                    }, m.diff = function(e, l, c) {
                        var u, m = N.p(l),
                            v = p(e),
                            g = 6e4 * (v.utcOffset() - this.utcOffset()),
                            _ = this - v,
                            k = N.m(this, v);
                        return k = (u = {}, u[s] = k / 12, u[d] = k, u[o] = k / 3, u[r] = (_ - g) / 6048e5, u[a] = (_ - g) / 864e5, u[i] = _ / 36e5, u[t] = _ / 6e4, u[n] = _ / 1e3, u)[m] || _, c ? k : N.a(k)
                    }, m.daysInMonth = function() {
                        return this.endOf(d).$D
                    }, m.$locale = function() {
                        return _[this.$L]
                    }, m.locale = function(e, n) {
                        if (!e) return this.$L;
                        var t = this.clone(),
                            i = S(e, n, !0);
                        return i && (t.$L = i), t
                    }, m.clone = function() {
                        return N.w(this.$d, this)
                    }, m.toDate = function() {
                        return new Date(this.valueOf())
                    }, m.toJSON = function() {
                        return this.isValid() ? this.toISOString() : null
                    }, m.toISOString = function() {
                        return this.$d.toISOString()
                    }, m.toString = function() {
                        return this.$d.toUTCString()
                    }, u
                }();
                return p.prototype = E.prototype, p.extend = function(e, n) {
                    return e(n, E, p), p
                }, p.locale = S, p.isDayjs = k, p.unix = function(e) {
                    return p(1e3 * e)
                }, p.en = _[g], p.Ls = _, p
            }()
        },
        e65db334: function(e) {
            e.exports = function() {
                "use strict";
                var e, n = /(\[[^[]*\])|([-:/.()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
                    t = /\d\d/,
                    i = /\d\d?/,
                    a = /\d*[^\s\d-:/()]+/,
                    r = function(e) {
                        return function(n) {
                            this[e] = +n
                        }
                    },
                    d = [/[+-]\d\d:?\d\d/, function(e) {
                        var n, t;
                        (this.zone || (this.zone = {})).offset = 0 === (t = 60 * (n = e.match(/([+-]|\d\d)/g))[1] + +n[2]) ? 0 : "+" === n[0] ? -t : t
                    }],
                    o = function(n) {
                        var t = e[n];
                        return t && (t.indexOf ? t : t.s.concat(t.f))
                    },
                    s = {
                        A: [/[AP]M/, function(e) {
                            this.afternoon = "PM" === e
                        }],
                        a: [/[ap]m/, function(e) {
                            this.afternoon = "pm" === e
                        }],
                        S: [/\d/, function(e) {
                            this.milliseconds = 100 * +e
                        }],
                        SS: [t, function(e) {
                            this.milliseconds = 10 * +e
                        }],
                        SSS: [/\d{3}/, function(e) {
                            this.milliseconds = +e
                        }],
                        s: [i, r("seconds")],
                        ss: [i, r("seconds")],
                        m: [i, r("minutes")],
                        mm: [i, r("minutes")],
                        H: [i, r("hours")],
                        h: [i, r("hours")],
                        HH: [i, r("hours")],
                        hh: [i, r("hours")],
                        D: [i, r("day")],
                        DD: [t, r("day")],
                        Do: [a, function(n) {
                            var t = e.ordinal,
                                i = n.match(/\d+/);
                            if (this.day = i[0], t)
                                for (var a = 1; a <= 31; a += 1) t(a).replace(/\[|\]/g, "") === n && (this.day = a)
                        }],
                        M: [i, r("month")],
                        MM: [t, r("month")],
                        MMM: [a, function(e) {
                            var n = o("months"),
                                t = (o("monthsShort") || n.map((function(e) {
                                    return e.substr(0, 3)
                                }))).indexOf(e) + 1;
                            if (t < 1) throw new Error;
                            this.month = t % 12 || t
                        }],
                        MMMM: [a, function(e) {
                            var n = o("months").indexOf(e) + 1;
                            if (n < 1) throw new Error;
                            this.month = n % 12 || n
                        }],
                        Y: [/[+-]?\d+/, r("year")],
                        YY: [t, function(e) {
                            e = +e, this.year = e + (e > 68 ? 1900 : 2e3)
                        }],
                        YYYY: [/\d{4}/, r("year")],
                        Z: d,
                        ZZ: d
                    },
                    l = function(e, t, i) {
                        try {
                            var a = function(e) {
                                    for (var t = e.match(n), i = t.length, a = 0; a < i; a += 1) {
                                        var r = t[a],
                                            d = s[r],
                                            o = d && d[0],
                                            l = d && d[1];
                                        t[a] = l ? {
                                            regex: o,
                                            parser: l
                                        } : r.replace(/^\[|\]$/g, "")
                                    }
                                    return function(e) {
                                        for (var n = {}, a = 0, r = 0; a < i; a += 1) {
                                            var d = t[a];
                                            if ("string" == typeof d) r += d.length;
                                            else {
                                                var o = d.regex,
                                                    s = d.parser,
                                                    l = e.substr(r),
                                                    c = o.exec(l)[0];
                                                s.call(n, c), e = e.replace(c, "")
                                            }
                                        }
                                        return function(e) {
                                            var n = e.afternoon;
                                            if (void 0 !== n) {
                                                var t = e.hours;
                                                n ? t < 12 && (e.hours += 12) : 12 === t && (e.hours = 0), delete e.afternoon
                                            }
                                        }(n), n
                                    }
                                }(t)(e),
                                r = a.year,
                                d = a.month,
                                o = a.day,
                                l = a.hours,
                                c = a.minutes,
                                u = a.seconds,
                                m = a.milliseconds,
                                v = a.zone,
                                g = new Date,
                                _ = o || (r || d ? 1 : g.getDate()),
                                k = r || g.getFullYear(),
                                S = 0;
                            r && !d || (S = d > 0 ? d - 1 : g.getMonth());
                            var p = l || 0,
                                N = c || 0,
                                E = u || 0,
                                f = m || 0;
                            return v ? new Date(Date.UTC(k, S, _, p, N, E, f + 60 * v.offset * 1e3)) : i ? new Date(Date.UTC(k, S, _, p, N, E, f)) : new Date(k, S, _, p, N, E, f)
                        } catch (e) {
                            return new Date("")
                        }
                    };
                return function(n, t, i) {
                    var a = t.prototype,
                        r = a.parse;
                    a.parse = function(n) {
                        var t = n.date,
                            a = n.utc,
                            d = n.args;
                        this.$u = a;
                        var o = d[1];
                        if ("string" == typeof o) {
                            var s = !0 === d[2],
                                c = !0 === d[3],
                                u = s || c,
                                m = d[2];
                            c && (m = d[2]), s || (e = m ? i.Ls[m] : this.$locale()), this.$d = l(t, o, a), this.init(), m && !0 !== m && (this.$L = this.locale(m).$L), u && t !== this.format(o) && (this.$d = new Date(""))
                        } else if (o instanceof Array)
                            for (var v = o.length, g = 1; g <= v; g += 1) {
                                d[1] = o[g - 1];
                                var _ = i.apply(this, d);
                                if (_.isValid()) {
                                    this.$d = _.$d, this.$L = _.$L, this.init();
                                    break
                                }
                                g === v && (this.$d = new Date(""))
                            } else r.call(this, n)
                    }
                }
            }()
        },
        "7fd19181": function(e) {
            e.exports = function() {
                "use strict";
                return function(e, n) {
                    n.prototype.isSameOrBefore = function(e, n) {
                        return this.isSame(e, n) || this.isBefore(e, n)
                    }
                }
            }()
        },
        "8da416e8": function(e) {
            e.exports = function() {
                "use strict";
                return function(e, n, t) {
                    var i = (new Date).getTimezoneOffset(),
                        a = n.prototype;
                    t.utc = function(e) {
                        return new n({
                            date: e,
                            utc: !0,
                            args: arguments
                        })
                    }, a.utc = function() {
                        return t(this.toDate(), {
                            locale: this.$L,
                            utc: !0
                        })
                    }, a.local = function() {
                        return t(this.toDate(), {
                            locale: this.$L,
                            utc: !1
                        })
                    };
                    var r = a.parse;
                    a.parse = function(e) {
                        e.utc && (this.$u = !0), this.$utils().u(e.$offset) || (this.$offset = e.$offset), r.call(this, e)
                    };
                    var d = a.init;
                    a.init = function() {
                        if (this.$u) {
                            var e = this.$d;
                            this.$y = e.getUTCFullYear(), this.$M = e.getUTCMonth(), this.$D = e.getUTCDate(), this.$W = e.getUTCDay(), this.$H = e.getUTCHours(), this.$m = e.getUTCMinutes(), this.$s = e.getUTCSeconds(), this.$ms = e.getUTCMilliseconds()
                        } else d.call(this)
                    };
                    var o = a.utcOffset;
                    a.utcOffset = function(e) {
                        var n = this.$utils().u;
                        if (n(e)) return this.$u ? 0 : n(this.$offset) ? o.call(this) : this.$offset;
                        var t, a = Math.abs(e) <= 16 ? 60 * e : e;
                        return 0 !== e ? (t = this.local().add(a + i, "minute")).$offset = a : t = this.utc(), t
                    };
                    var s = a.format;
                    a.format = function(e) {
                        var n = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                        return s.call(this, n)
                    }, a.valueOf = function() {
                        var e = this.$utils().u(this.$offset) ? 0 : this.$offset + i;
                        return this.$d.valueOf() - 6e4 * e
                    }, a.isUTC = function() {
                        return !!this.$u
                    }, a.toISOString = function() {
                        return this.toDate().toISOString()
                    }, a.toString = function() {
                        return this.toDate().toUTCString()
                    };
                    var l = a.toDate;
                    a.toDate = function(e) {
                        return "s" === e && this.$offset ? t(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this)
                    }
                }
            }()
        },
        "8521b397": (e, n) => {
            var t;
            ! function() {
                "use strict";
                var i = {}.hasOwnProperty;

                function a() {
                    for (var e = "", n = 0; n < arguments.length; n++) {
                        var t = arguments[n];
                        t && (e = d(e, r(t)))
                    }
                    return e
                }

                function r(e) {
                    if ("string" === typeof e || "number" === typeof e) return e;
                    if ("object" !== typeof e) return "";
                    if (Array.isArray(e)) return a.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                    var n = "";
                    for (var t in e) i.call(e, t) && e[t] && (n = d(n, t));
                    return n
                }

                function d(e, n) {
                    return n ? e ? e + " " + n : e + n : e
                }
                e.exports ? (a.default = a, e.exports = a) : void 0 === (t = function() {
                    return a
                }.apply(n, [])) || (e.exports = t)
            }()
        },
        "9a67ad93": (e, n, t) => {
            "use strict";
            t.d(n, {
                YD: () => v,
                df: () => m
            });
            var i = t("ead71eb0"),
                a = Object.defineProperty,
                r = (e, n, t) => (((e, n, t) => {
                    n in e ? a(e, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    }) : e[n] = t
                })(e, "symbol" !== typeof n ? n + "" : n, t), t),
                d = new Map,
                o = new WeakMap,
                s = 0,
                l = void 0;

            function c(e) {
                return Object.keys(e).sort().filter((n => void 0 !== e[n])).map((n => {
                    return `${n}_${"root"===n?(t=e.root,t?(o.has(t)||(s+=1,o.set(t,s.toString())),o.get(t)):"0"):e[n]}`;
                    var t
                })).toString()
            }

            function u(e, n) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l;
                if ("undefined" === typeof window.IntersectionObserver && void 0 !== i) {
                    const a = e.getBoundingClientRect();
                    return n(i, {
                        isIntersecting: i,
                        target: e,
                        intersectionRatio: "number" === typeof t.threshold ? t.threshold : 0,
                        time: 0,
                        boundingClientRect: a,
                        intersectionRect: a,
                        rootBounds: a
                    }), () => {}
                }
                const {
                    id: a,
                    observer: r,
                    elements: o
                } = function(e) {
                    const n = c(e);
                    let t = d.get(n);
                    if (!t) {
                        const i = new Map;
                        let a;
                        const r = new IntersectionObserver((n => {
                            n.forEach((n => {
                                var t;
                                const r = n.isIntersecting && a.some((e => n.intersectionRatio >= e));
                                e.trackVisibility && "undefined" === typeof n.isVisible && (n.isVisible = r), null == (t = i.get(n.target)) || t.forEach((e => {
                                    e(r, n)
                                }))
                            }))
                        }), e);
                        a = r.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), t = {
                            id: n,
                            observer: r,
                            elements: i
                        }, d.set(n, t)
                    }
                    return t
                }(t), s = o.get(e) || [];
                return o.has(e) || o.set(e, s), s.push(n), r.observe(e),
                    function() {
                        s.splice(s.indexOf(n), 1), 0 === s.length && (o.delete(e), r.unobserve(e)), 0 === o.size && (r.disconnect(), d.delete(a))
                    }
            }
            var m = class extends i.Component {
                constructor(e) {
                    super(e), r(this, "node", null), r(this, "_unobserveCb", null), r(this, "handleNode", (e => {
                        this.node && (this.unobserve(), e || this.props.triggerOnce || this.props.skip || this.setState({
                            inView: !!this.props.initialInView,
                            entry: void 0
                        })), this.node = e || null, this.observeNode()
                    })), r(this, "handleChange", ((e, n) => {
                        e && this.props.triggerOnce && this.unobserve(),
                            function(e) {
                                return "function" !== typeof e.children
                            }(this.props) || this.setState({
                                inView: e,
                                entry: n
                            }), this.props.onChange && this.props.onChange(e, n)
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
                        root: n,
                        rootMargin: t,
                        trackVisibility: i,
                        delay: a,
                        fallbackInView: r
                    } = this.props;
                    this._unobserveCb = u(this.node, this.handleChange, {
                        threshold: e,
                        root: n,
                        rootMargin: t,
                        trackVisibility: i,
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
                            inView: n,
                            entry: t
                        } = this.state;
                        return e({
                            inView: n,
                            entry: t,
                            ref: this.handleNode
                        })
                    }
                    const {
                        as: n,
                        triggerOnce: t,
                        threshold: a,
                        root: r,
                        rootMargin: d,
                        onChange: o,
                        skip: s,
                        trackVisibility: l,
                        delay: c,
                        initialInView: u,
                        fallbackInView: m,
                        ...v
                    } = this.props;
                    return i.createElement(n || "div", {
                        ref: this.handleNode,
                        ...v
                    }, e)
                }
            };

            function v() {
                let {
                    threshold: e,
                    delay: n,
                    trackVisibility: t,
                    rootMargin: a,
                    root: r,
                    triggerOnce: d,
                    skip: o,
                    initialInView: s,
                    fallbackInView: l,
                    onChange: c
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                var m;
                const [v, g] = i.useState(null), _ = i.useRef(), [k, S] = i.useState({
                    inView: !!s,
                    entry: void 0
                });
                _.current = c, i.useEffect((() => {
                    if (o || !v) return;
                    let i;
                    return i = u(v, ((e, n) => {
                        S({
                            inView: e,
                            entry: n
                        }), _.current && _.current(e, n), n.isIntersecting && d && i && (i(), i = void 0)
                    }), {
                        root: r,
                        rootMargin: a,
                        threshold: e,
                        trackVisibility: t,
                        delay: n
                    }, l), () => {
                        i && i()
                    }
                }), [Array.isArray(e) ? e.toString() : e, v, r, a, d, o, t, l, n]);
                const p = null == (m = k.entry) ? void 0 : m.target,
                    N = i.useRef();
                v || !p || d || o || N.current === p || (N.current = p, S({
                    inView: !!s,
                    entry: void 0
                }));
                const E = [g, k.inView, k.entry];
                return E.ref = E[0], E.inView = E[1], E.entry = E[2], E
            }
        }
    }
]);
//# sourceMappingURL=https://istatic.booking.com/internal-static/capla/static/js/c62ef267.12e88f81.chunk.js.map