(() => {
    var __webpack_modules__ = {
        436: module => {
            (function(factory) {
                if (true && module.exports) module.exports = factory(); else window.intlTelInput = factory();
            })((() => {
                var factoryOutput = (() => {
                    var __defProp = Object.defineProperty;
                    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
                    var __getOwnPropNames = Object.getOwnPropertyNames;
                    var __hasOwnProp = Object.prototype.hasOwnProperty;
                    var __export = (target, all) => {
                        for (var name in all) __defProp(target, name, {
                            get: all[name],
                            enumerable: true
                        });
                    };
                    var __copyProps = (to, from, except, desc) => {
                        if (from && typeof from === "object" || typeof from === "function") for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                            get: () => from[key],
                            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                        });
                        return to;
                    };
                    var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
                        value: true
                    }), mod);
                    var intl_tel_input_exports = {};
                    __export(intl_tel_input_exports, {
                        Iti: () => Iti,
                        default: () => intl_tel_input_default
                    });
                    var rawCountryData = [ [ "af", "93" ], [ "ax", "358", 1 ], [ "al", "355" ], [ "dz", "213" ], [ "as", "1", 5, [ "684" ] ], [ "ad", "376" ], [ "ao", "244" ], [ "ai", "1", 6, [ "264" ] ], [ "ag", "1", 7, [ "268" ] ], [ "ar", "54" ], [ "am", "374" ], [ "aw", "297" ], [ "ac", "247" ], [ "au", "61", 0, null, "0" ], [ "at", "43" ], [ "az", "994" ], [ "bs", "1", 8, [ "242" ] ], [ "bh", "973" ], [ "bd", "880" ], [ "bb", "1", 9, [ "246" ] ], [ "by", "375" ], [ "be", "32" ], [ "bz", "501" ], [ "bj", "229" ], [ "bm", "1", 10, [ "441" ] ], [ "bt", "975" ], [ "bo", "591" ], [ "ba", "387" ], [ "bw", "267" ], [ "br", "55" ], [ "io", "246" ], [ "vg", "1", 11, [ "284" ] ], [ "bn", "673" ], [ "bg", "359" ], [ "bf", "226" ], [ "bi", "257" ], [ "kh", "855" ], [ "cm", "237" ], [ "ca", "1", 1, [ "204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "879", "902", "905" ] ], [ "cv", "238" ], [ "bq", "599", 1, [ "3", "4", "7" ] ], [ "ky", "1", 12, [ "345" ] ], [ "cf", "236" ], [ "td", "235" ], [ "cl", "56" ], [ "cn", "86" ], [ "cx", "61", 2, [ "89164" ], "0" ], [ "cc", "61", 1, [ "89162" ], "0" ], [ "co", "57" ], [ "km", "269" ], [ "cg", "242" ], [ "cd", "243" ], [ "ck", "682" ], [ "cr", "506" ], [ "ci", "225" ], [ "hr", "385" ], [ "cu", "53" ], [ "cw", "599", 0 ], [ "cy", "357" ], [ "cz", "420" ], [ "dk", "45" ], [ "dj", "253" ], [ "dm", "1", 13, [ "767" ] ], [ "do", "1", 2, [ "809", "829", "849" ] ], [ "ec", "593" ], [ "eg", "20" ], [ "sv", "503" ], [ "gq", "240" ], [ "er", "291" ], [ "ee", "372" ], [ "sz", "268" ], [ "et", "251" ], [ "fk", "500" ], [ "fo", "298" ], [ "fj", "679" ], [ "fi", "358", 0 ], [ "fr", "33" ], [ "gf", "594" ], [ "pf", "689" ], [ "ga", "241" ], [ "gm", "220" ], [ "ge", "995" ], [ "de", "49" ], [ "gh", "233" ], [ "gi", "350" ], [ "gr", "30" ], [ "gl", "299" ], [ "gd", "1", 14, [ "473" ] ], [ "gp", "590", 0 ], [ "gu", "1", 15, [ "671" ] ], [ "gt", "502" ], [ "gg", "44", 1, [ "1481", "7781", "7839", "7911" ], "0" ], [ "gn", "224" ], [ "gw", "245" ], [ "gy", "592" ], [ "ht", "509" ], [ "hn", "504" ], [ "hk", "852" ], [ "hu", "36" ], [ "is", "354" ], [ "in", "91" ], [ "id", "62" ], [ "ir", "98" ], [ "iq", "964" ], [ "ie", "353" ], [ "im", "44", 2, [ "1624", "74576", "7524", "7924", "7624" ], "0" ], [ "il", "972" ], [ "it", "39", 0 ], [ "jm", "1", 4, [ "876", "658" ] ], [ "jp", "81" ], [ "je", "44", 3, [ "1534", "7509", "7700", "7797", "7829", "7937" ], "0" ], [ "jo", "962" ], [ "kz", "7", 1, [ "33", "7" ], "8" ], [ "ke", "254" ], [ "ki", "686" ], [ "xk", "383" ], [ "kw", "965" ], [ "kg", "996" ], [ "la", "856" ], [ "lv", "371" ], [ "lb", "961" ], [ "ls", "266" ], [ "lr", "231" ], [ "ly", "218" ], [ "li", "423" ], [ "lt", "370" ], [ "lu", "352" ], [ "mo", "853" ], [ "mg", "261" ], [ "mw", "265" ], [ "my", "60" ], [ "mv", "960" ], [ "ml", "223" ], [ "mt", "356" ], [ "mh", "692" ], [ "mq", "596" ], [ "mr", "222" ], [ "mu", "230" ], [ "yt", "262", 1, [ "269", "639" ], "0" ], [ "mx", "52" ], [ "fm", "691" ], [ "md", "373" ], [ "mc", "377" ], [ "mn", "976" ], [ "me", "382" ], [ "ms", "1", 16, [ "664" ] ], [ "ma", "212", 0, null, "0" ], [ "mz", "258" ], [ "mm", "95" ], [ "na", "264" ], [ "nr", "674" ], [ "np", "977" ], [ "nl", "31" ], [ "nc", "687" ], [ "nz", "64" ], [ "ni", "505" ], [ "ne", "227" ], [ "ng", "234" ], [ "nu", "683" ], [ "nf", "672" ], [ "kp", "850" ], [ "mk", "389" ], [ "mp", "1", 17, [ "670" ] ], [ "no", "47", 0 ], [ "om", "968" ], [ "pk", "92" ], [ "pw", "680" ], [ "ps", "970" ], [ "pa", "507" ], [ "pg", "675" ], [ "py", "595" ], [ "pe", "51" ], [ "ph", "63" ], [ "pl", "48" ], [ "pt", "351" ], [ "pr", "1", 3, [ "787", "939" ] ], [ "qa", "974" ], [ "re", "262", 0, null, "0" ], [ "ro", "40" ], [ "ru", "7", 0, null, "8" ], [ "rw", "250" ], [ "ws", "685" ], [ "sm", "378" ], [ "st", "239" ], [ "sa", "966" ], [ "sn", "221" ], [ "rs", "381" ], [ "sc", "248" ], [ "sl", "232" ], [ "sg", "65" ], [ "sx", "1", 21, [ "721" ] ], [ "sk", "421" ], [ "si", "386" ], [ "sb", "677" ], [ "so", "252" ], [ "za", "27" ], [ "kr", "82" ], [ "ss", "211" ], [ "es", "34" ], [ "lk", "94" ], [ "bl", "590", 1 ], [ "sh", "290" ], [ "kn", "1", 18, [ "869" ] ], [ "lc", "1", 19, [ "758" ] ], [ "mf", "590", 2 ], [ "pm", "508" ], [ "vc", "1", 20, [ "784" ] ], [ "sd", "249" ], [ "sr", "597" ], [ "sj", "47", 1, [ "79" ] ], [ "se", "46" ], [ "ch", "41" ], [ "sy", "963" ], [ "tw", "886" ], [ "tj", "992" ], [ "tz", "255" ], [ "th", "66" ], [ "tl", "670" ], [ "tg", "228" ], [ "tk", "690" ], [ "to", "676" ], [ "tt", "1", 22, [ "868" ] ], [ "tn", "216" ], [ "tr", "90" ], [ "tm", "993" ], [ "tc", "1", 23, [ "649" ] ], [ "tv", "688" ], [ "ug", "256" ], [ "ua", "380" ], [ "ae", "971" ], [ "gb", "44", 0, null, "0" ], [ "us", "1", 0 ], [ "uy", "598" ], [ "vi", "1", 24, [ "340" ] ], [ "uz", "998" ], [ "vu", "678" ], [ "va", "39", 1, [ "06698" ] ], [ "ve", "58" ], [ "vn", "84" ], [ "wf", "681" ], [ "eh", "212", 1, [ "5288", "5289" ], "0" ], [ "ye", "967" ], [ "zm", "260" ], [ "zw", "263" ] ];
                    var allCountries = [];
                    for (let i = 0; i < rawCountryData.length; i++) {
                        const c = rawCountryData[i];
                        allCountries[i] = {
                            name: "",
                            iso2: c[0],
                            dialCode: c[1],
                            priority: c[2] || 0,
                            areaCodes: c[3] || null,
                            nodeById: {},
                            nationalPrefix: c[4] || null
                        };
                    }
                    var data_default = allCountries;
                    var countryTranslations = {
                        ad: "Andorra",
                        ae: "United Arab Emirates",
                        af: "Afghanistan",
                        ag: "Antigua & Barbuda",
                        ai: "Anguilla",
                        al: "Albania",
                        am: "Armenia",
                        ao: "Angola",
                        ar: "Argentina",
                        as: "American Samoa",
                        at: "Austria",
                        au: "Australia",
                        aw: "Aruba",
                        ax: "Åland Islands",
                        az: "Azerbaijan",
                        ba: "Bosnia & Herzegovina",
                        bb: "Barbados",
                        bd: "Bangladesh",
                        be: "Belgium",
                        bf: "Burkina Faso",
                        bg: "Bulgaria",
                        bh: "Bahrain",
                        bi: "Burundi",
                        bj: "Benin",
                        bl: "St. Barthélemy",
                        bm: "Bermuda",
                        bn: "Brunei",
                        bo: "Bolivia",
                        bq: "Caribbean Netherlands",
                        br: "Brazil",
                        bs: "Bahamas",
                        bt: "Bhutan",
                        bw: "Botswana",
                        by: "Belarus",
                        bz: "Belize",
                        ca: "Canada",
                        cc: "Cocos (Keeling) Islands",
                        cd: "Congo - Kinshasa",
                        cf: "Central African Republic",
                        cg: "Congo - Brazzaville",
                        ch: "Switzerland",
                        ci: "Côte d’Ivoire",
                        ck: "Cook Islands",
                        cl: "Chile",
                        cm: "Cameroon",
                        cn: "China",
                        co: "Colombia",
                        cr: "Costa Rica",
                        cu: "Cuba",
                        cv: "Cape Verde",
                        cw: "Curaçao",
                        cx: "Christmas Island",
                        cy: "Cyprus",
                        cz: "Czechia",
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
                        gt: "Guatemala",
                        gu: "Guam",
                        gw: "Guinea-Bissau",
                        gy: "Guyana",
                        hk: "Hong Kong SAR China",
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
                        kn: "St. Kitts & Nevis",
                        kp: "North Korea",
                        kr: "South Korea",
                        kw: "Kuwait",
                        ky: "Cayman Islands",
                        kz: "Kazakhstan",
                        la: "Laos",
                        lb: "Lebanon",
                        lc: "St. Lucia",
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
                        mf: "St. Martin",
                        mg: "Madagascar",
                        mh: "Marshall Islands",
                        mk: "North Macedonia",
                        ml: "Mali",
                        mm: "Myanmar (Burma)",
                        mn: "Mongolia",
                        mo: "Macao SAR China",
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
                        pm: "St. Pierre & Miquelon",
                        pr: "Puerto Rico",
                        ps: "Palestinian Territories",
                        pt: "Portugal",
                        pw: "Palau",
                        py: "Paraguay",
                        qa: "Qatar",
                        re: "Réunion",
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
                        sh: "St. Helena",
                        si: "Slovenia",
                        sj: "Svalbard & Jan Mayen",
                        sk: "Slovakia",
                        sl: "Sierra Leone",
                        sm: "San Marino",
                        sn: "Senegal",
                        so: "Somalia",
                        sr: "Suriname",
                        ss: "South Sudan",
                        st: "São Tomé & Príncipe",
                        sv: "El Salvador",
                        sx: "Sint Maarten",
                        sy: "Syria",
                        sz: "Eswatini",
                        tc: "Turks & Caicos Islands",
                        td: "Chad",
                        tg: "Togo",
                        th: "Thailand",
                        tj: "Tajikistan",
                        tk: "Tokelau",
                        tl: "Timor-Leste",
                        tm: "Turkmenistan",
                        tn: "Tunisia",
                        to: "Tonga",
                        tr: "Turkey",
                        tt: "Trinidad & Tobago",
                        tv: "Tuvalu",
                        tw: "Taiwan",
                        tz: "Tanzania",
                        ua: "Ukraine",
                        ug: "Uganda",
                        us: "United States",
                        uy: "Uruguay",
                        uz: "Uzbekistan",
                        va: "Vatican City",
                        vc: "St. Vincent & Grenadines",
                        ve: "Venezuela",
                        vg: "British Virgin Islands",
                        vi: "U.S. Virgin Islands",
                        vn: "Vietnam",
                        vu: "Vanuatu",
                        wf: "Wallis & Futuna",
                        ws: "Samoa",
                        ye: "Yemen",
                        yt: "Mayotte",
                        za: "South Africa",
                        zm: "Zambia",
                        zw: "Zimbabwe"
                    };
                    var countries_default = countryTranslations;
                    var interfaceTranslations = {
                        selectedCountryAriaLabel: "Selected country",
                        noCountrySelected: "No country selected",
                        countryListAriaLabel: "List of countries",
                        searchPlaceholder: "Search",
                        zeroSearchResults: "No results found",
                        oneSearchResult: "1 result found",
                        multipleSearchResults: "${count} results found",
                        ac: "Ascension Island",
                        xk: "Kosovo"
                    };
                    var interface_default = interfaceTranslations;
                    var allTranslations = {
                        ...countries_default,
                        ...interface_default
                    };
                    var en_default = allTranslations;
                    for (let i = 0; i < data_default.length; i++) data_default[i].name = en_default[data_default[i].iso2];
                    var id = 0;
                    var defaults = {
                        allowDropdown: true,
                        autoPlaceholder: "polite",
                        containerClass: "",
                        countryOrder: null,
                        countrySearch: true,
                        customPlaceholder: null,
                        dropdownContainer: null,
                        excludeCountries: [],
                        fixDropdownWidth: true,
                        formatAsYouType: true,
                        formatOnDisplay: true,
                        geoIpLookup: null,
                        hiddenInput: null,
                        i18n: {},
                        initialCountry: "",
                        loadUtils: null,
                        nationalMode: true,
                        onlyCountries: [],
                        placeholderNumberType: "MOBILE",
                        showFlags: true,
                        separateDialCode: false,
                        strictMode: false,
                        useFullscreenPopup: typeof navigator !== "undefined" && typeof window !== "undefined" ? /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 500 : false,
                        validationNumberTypes: [ "MOBILE" ]
                    };
                    var regionlessNanpNumbers = [ "800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889" ];
                    var getNumeric = s => s.replace(/\D/g, "");
                    var normaliseString = (s = "") => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                    var isRegionlessNanp = number => {
                        const numeric = getNumeric(number);
                        if (numeric.charAt(0) === "1") {
                            const areaCode = numeric.substr(1, 3);
                            return regionlessNanpNumbers.includes(areaCode);
                        }
                        return false;
                    };
                    var translateCursorPosition = (relevantChars, formattedValue, prevCaretPos, isDeleteForwards) => {
                        if (prevCaretPos === 0 && !isDeleteForwards) return 0;
                        let count = 0;
                        for (let i = 0; i < formattedValue.length; i++) {
                            if (/[+0-9]/.test(formattedValue[i])) count++;
                            if (count === relevantChars && !isDeleteForwards) return i + 1;
                            if (isDeleteForwards && count === relevantChars + 1) return i;
                        }
                        return formattedValue.length;
                    };
                    var createEl = (name, attrs, container) => {
                        const el = document.createElement(name);
                        if (attrs) Object.entries(attrs).forEach((([key, value]) => el.setAttribute(key, value)));
                        if (container) container.appendChild(el);
                        return el;
                    };
                    var forEachInstance = (method, ...args) => {
                        const {instances} = intlTelInput;
                        Object.values(instances).forEach((instance => instance[method](...args)));
                    };
                    var Iti = class {
                        constructor(input, customOptions = {}) {
                            this.id = id++;
                            this.telInput = input;
                            this.highlightedItem = null;
                            this.options = Object.assign({}, defaults, customOptions);
                            this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
                        }
                        _init() {
                            if (this.options.useFullscreenPopup) this.options.fixDropdownWidth = false;
                            if (this.options.onlyCountries.length === 1) this.options.initialCountry = this.options.onlyCountries[0];
                            if (this.options.separateDialCode) this.options.nationalMode = false;
                            if (this.options.allowDropdown && !this.options.showFlags && !this.options.separateDialCode) this.options.nationalMode = false;
                            if (this.options.useFullscreenPopup && !this.options.dropdownContainer) this.options.dropdownContainer = document.body;
                            this.isAndroid = typeof navigator !== "undefined" ? /Android/i.test(navigator.userAgent) : false;
                            this.isRTL = !!this.telInput.closest("[dir=rtl]");
                            const showOnDefaultSide = this.options.allowDropdown || this.options.separateDialCode;
                            this.showSelectedCountryOnLeft = this.isRTL ? !showOnDefaultSide : showOnDefaultSide;
                            if (this.options.separateDialCode) if (this.isRTL) this.originalPaddingRight = this.telInput.style.paddingRight; else this.originalPaddingLeft = this.telInput.style.paddingLeft;
                            this.options.i18n = {
                                ...en_default,
                                ...this.options.i18n
                            };
                            const autoCountryPromise = new Promise(((resolve, reject) => {
                                this.resolveAutoCountryPromise = resolve;
                                this.rejectAutoCountryPromise = reject;
                            }));
                            const utilsScriptPromise = new Promise(((resolve, reject) => {
                                this.resolveUtilsScriptPromise = resolve;
                                this.rejectUtilsScriptPromise = reject;
                            }));
                            this.promise = Promise.all([ autoCountryPromise, utilsScriptPromise ]);
                            this.selectedCountryData = {};
                            this._processCountryData();
                            this._generateMarkup();
                            this._setInitialState();
                            this._initListeners();
                            this._initRequests();
                        }
                        _processCountryData() {
                            this._processAllCountries();
                            this._processDialCodes();
                            this._translateCountryNames();
                            this._sortCountries();
                        }
                        _sortCountries() {
                            if (this.options.countryOrder) this.options.countryOrder = this.options.countryOrder.map((country => country.toLowerCase()));
                            this.countries.sort(((a, b) => {
                                const {countryOrder} = this.options;
                                if (countryOrder) {
                                    const aIndex = countryOrder.indexOf(a.iso2);
                                    const bIndex = countryOrder.indexOf(b.iso2);
                                    const aIndexExists = aIndex > -1;
                                    const bIndexExists = bIndex > -1;
                                    if (aIndexExists || bIndexExists) {
                                        if (aIndexExists && bIndexExists) return aIndex - bIndex;
                                        return aIndexExists ? -1 : 1;
                                    }
                                }
                                return a.name.localeCompare(b.name);
                            }));
                        }
                        _addToDialCodeMap(iso2, dialCode, priority) {
                            if (dialCode.length > this.dialCodeMaxLen) this.dialCodeMaxLen = dialCode.length;
                            if (!this.dialCodeToIso2Map.hasOwnProperty(dialCode)) this.dialCodeToIso2Map[dialCode] = [];
                            for (let i = 0; i < this.dialCodeToIso2Map[dialCode].length; i++) if (this.dialCodeToIso2Map[dialCode][i] === iso2) return;
                            const index = priority !== void 0 ? priority : this.dialCodeToIso2Map[dialCode].length;
                            this.dialCodeToIso2Map[dialCode][index] = iso2;
                        }
                        _processAllCountries() {
                            const {onlyCountries, excludeCountries} = this.options;
                            if (onlyCountries.length) {
                                const lowerCaseOnlyCountries = onlyCountries.map((country => country.toLowerCase()));
                                this.countries = data_default.filter((country => lowerCaseOnlyCountries.includes(country.iso2)));
                            } else if (excludeCountries.length) {
                                const lowerCaseExcludeCountries = excludeCountries.map((country => country.toLowerCase()));
                                this.countries = data_default.filter((country => !lowerCaseExcludeCountries.includes(country.iso2)));
                            } else this.countries = data_default;
                        }
                        _translateCountryNames() {
                            for (let i = 0; i < this.countries.length; i++) {
                                const iso2 = this.countries[i].iso2.toLowerCase();
                                if (this.options.i18n.hasOwnProperty(iso2)) this.countries[i].name = this.options.i18n[iso2];
                            }
                        }
                        _processDialCodes() {
                            this.dialCodes = {};
                            this.dialCodeMaxLen = 0;
                            this.dialCodeToIso2Map = {};
                            for (let i = 0; i < this.countries.length; i++) {
                                const c = this.countries[i];
                                if (!this.dialCodes[c.dialCode]) this.dialCodes[c.dialCode] = true;
                                this._addToDialCodeMap(c.iso2, c.dialCode, c.priority);
                            }
                            for (let i = 0; i < this.countries.length; i++) {
                                const c = this.countries[i];
                                if (c.areaCodes) {
                                    const rootIso2Code = this.dialCodeToIso2Map[c.dialCode][0];
                                    for (let j = 0; j < c.areaCodes.length; j++) {
                                        const areaCode = c.areaCodes[j];
                                        for (let k = 1; k < areaCode.length; k++) {
                                            const partialAreaCode = areaCode.substr(0, k);
                                            const partialDialCode = c.dialCode + partialAreaCode;
                                            this._addToDialCodeMap(rootIso2Code, partialDialCode);
                                            this._addToDialCodeMap(c.iso2, partialDialCode);
                                        }
                                        this._addToDialCodeMap(c.iso2, c.dialCode + areaCode);
                                    }
                                }
                            }
                        }
                        _generateMarkup() {
                            this.telInput.classList.add("iti__tel-input");
                            if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) this.telInput.setAttribute("autocomplete", "off");
                            const {allowDropdown, separateDialCode, showFlags, containerClass, hiddenInput, dropdownContainer, fixDropdownWidth, useFullscreenPopup, countrySearch, i18n} = this.options;
                            let parentClass = "iti";
                            if (allowDropdown) parentClass += " iti--allow-dropdown";
                            if (showFlags) parentClass += " iti--show-flags";
                            if (containerClass) parentClass += ` ${containerClass}`;
                            if (!useFullscreenPopup) parentClass += " iti--inline-dropdown";
                            const wrapper = createEl("div", {
                                class: parentClass
                            });
                            this.telInput.parentNode?.insertBefore(wrapper, this.telInput);
                            if (allowDropdown || showFlags || separateDialCode) {
                                this.countryContainer = createEl("div", {
                                    class: "iti__country-container"
                                }, wrapper);
                                if (this.showSelectedCountryOnLeft) this.countryContainer.style.left = "0px"; else this.countryContainer.style.right = "0px";
                                if (allowDropdown) {
                                    this.selectedCountry = createEl("button", {
                                        type: "button",
                                        class: "iti__selected-country",
                                        "aria-expanded": "false",
                                        "aria-label": this.options.i18n.selectedCountryAriaLabel,
                                        "aria-haspopup": "true",
                                        "aria-controls": `iti-${this.id}__dropdown-content`,
                                        role: "combobox"
                                    }, this.countryContainer);
                                    if (this.telInput.disabled) this.selectedCountry.setAttribute("disabled", "true");
                                } else this.selectedCountry = createEl("div", {
                                    class: "iti__selected-country"
                                }, this.countryContainer);
                                const selectedCountryPrimary = createEl("div", {
                                    class: "iti__selected-country-primary"
                                }, this.selectedCountry);
                                this.selectedCountryInner = createEl("div", {
                                    class: "iti__flag"
                                }, selectedCountryPrimary);
                                this.selectedCountryA11yText = createEl("span", {
                                    class: "iti__a11y-text"
                                }, this.selectedCountryInner);
                                if (allowDropdown) this.dropdownArrow = createEl("div", {
                                    class: "iti__arrow",
                                    "aria-hidden": "true"
                                }, selectedCountryPrimary);
                                if (separateDialCode) this.selectedDialCode = createEl("div", {
                                    class: "iti__selected-dial-code"
                                }, this.selectedCountry);
                                if (allowDropdown) {
                                    const extraClasses = fixDropdownWidth ? "" : "iti--flexible-dropdown-width";
                                    this.dropdownContent = createEl("div", {
                                        id: `iti-${this.id}__dropdown-content`,
                                        class: `iti__dropdown-content iti__hide ${extraClasses}`
                                    });
                                    if (countrySearch) {
                                        this.searchInput = createEl("input", {
                                            type: "text",
                                            class: "iti__search-input",
                                            placeholder: i18n.searchPlaceholder,
                                            role: "combobox",
                                            "aria-expanded": "true",
                                            "aria-label": i18n.searchPlaceholder,
                                            "aria-controls": `iti-${this.id}__country-listbox`,
                                            "aria-autocomplete": "list",
                                            autocomplete: "off"
                                        }, this.dropdownContent);
                                        this.searchResultsA11yText = createEl("span", {
                                            class: "iti__a11y-text"
                                        }, this.dropdownContent);
                                    }
                                    this.countryList = createEl("ul", {
                                        class: "iti__country-list",
                                        id: `iti-${this.id}__country-listbox`,
                                        role: "listbox",
                                        "aria-label": i18n.countryListAriaLabel
                                    }, this.dropdownContent);
                                    this._appendListItems();
                                    if (countrySearch) this._updateSearchResultsText();
                                    if (dropdownContainer) {
                                        let dropdownClasses = "iti iti--container";
                                        if (useFullscreenPopup) dropdownClasses += " iti--fullscreen-popup"; else dropdownClasses += " iti--inline-dropdown";
                                        this.dropdown = createEl("div", {
                                            class: dropdownClasses
                                        });
                                        this.dropdown.appendChild(this.dropdownContent);
                                    } else this.countryContainer.appendChild(this.dropdownContent);
                                }
                            }
                            wrapper.appendChild(this.telInput);
                            this._updateInputPadding();
                            if (hiddenInput) {
                                const telInputName = this.telInput.getAttribute("name") || "";
                                const names = hiddenInput(telInputName);
                                if (names.phone) {
                                    const existingInput = this.telInput.form?.querySelector(`input[name="${names.phone}"]`);
                                    if (existingInput) this.hiddenInput = existingInput; else {
                                        this.hiddenInput = createEl("input", {
                                            type: "hidden",
                                            name: names.phone
                                        });
                                        wrapper.appendChild(this.hiddenInput);
                                    }
                                }
                                if (names.country) {
                                    const existingInput = this.telInput.form?.querySelector(`input[name="${names.country}"]`);
                                    if (existingInput) this.hiddenInputCountry = existingInput; else {
                                        this.hiddenInputCountry = createEl("input", {
                                            type: "hidden",
                                            name: names.country
                                        });
                                        wrapper.appendChild(this.hiddenInputCountry);
                                    }
                                }
                            }
                        }
                        _appendListItems() {
                            for (let i = 0; i < this.countries.length; i++) {
                                const c = this.countries[i];
                                const extraClass = i === 0 ? "iti__highlight" : "";
                                const listItem = createEl("li", {
                                    id: `iti-${this.id}__item-${c.iso2}`,
                                    class: `iti__country ${extraClass}`,
                                    tabindex: "-1",
                                    role: "option",
                                    "data-dial-code": c.dialCode,
                                    "data-country-code": c.iso2,
                                    "aria-selected": "false"
                                }, this.countryList);
                                c.nodeById[this.id] = listItem;
                                let content = "";
                                if (this.options.showFlags) content += `<div class='iti__flag iti__${c.iso2}'></div>`;
                                content += `<span class='iti__country-name'>${c.name}</span>`;
                                content += `<span class='iti__dial-code'>+${c.dialCode}</span>`;
                                listItem.insertAdjacentHTML("beforeend", content);
                            }
                        }
                        _setInitialState(overrideAutoCountry = false) {
                            const attributeValue = this.telInput.getAttribute("value");
                            const inputValue = this.telInput.value;
                            const useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
                            const val = useAttribute ? attributeValue : inputValue;
                            const dialCode = this._getDialCode(val);
                            const isRegionlessNanpNumber = isRegionlessNanp(val);
                            const {initialCountry, geoIpLookup} = this.options;
                            const isAutoCountry = initialCountry === "auto" && geoIpLookup;
                            if (dialCode && !isRegionlessNanpNumber) this._updateCountryFromNumber(val); else if (!isAutoCountry || overrideAutoCountry) {
                                const lowerInitialCountry = initialCountry ? initialCountry.toLowerCase() : "";
                                const isValidInitialCountry = lowerInitialCountry && this._getCountryData(lowerInitialCountry, true);
                                if (isValidInitialCountry) this._setCountry(lowerInitialCountry); else if (dialCode && isRegionlessNanpNumber) this._setCountry("us"); else this._setCountry();
                            }
                            if (val) this._updateValFromNumber(val);
                        }
                        _initListeners() {
                            this._initTelInputListeners();
                            if (this.options.allowDropdown) this._initDropdownListeners();
                            if ((this.hiddenInput || this.hiddenInputCountry) && this.telInput.form) this._initHiddenInputListener();
                        }
                        _initHiddenInputListener() {
                            this._handleHiddenInputSubmit = () => {
                                if (this.hiddenInput) this.hiddenInput.value = this.getNumber();
                                if (this.hiddenInputCountry) this.hiddenInputCountry.value = this.getSelectedCountryData().iso2 || "";
                            };
                            this.telInput.form?.addEventListener("submit", this._handleHiddenInputSubmit);
                        }
                        _initDropdownListeners() {
                            this._handleLabelClick = e => {
                                if (this.dropdownContent.classList.contains("iti__hide")) this.telInput.focus(); else e.preventDefault();
                            };
                            const label = this.telInput.closest("label");
                            if (label) label.addEventListener("click", this._handleLabelClick);
                            this._handleClickSelectedCountry = () => {
                                if (this.dropdownContent.classList.contains("iti__hide") && !this.telInput.disabled && !this.telInput.readOnly) this._openDropdown();
                            };
                            this.selectedCountry.addEventListener("click", this._handleClickSelectedCountry);
                            this._handleCountryContainerKeydown = e => {
                                const isDropdownHidden = this.dropdownContent.classList.contains("iti__hide");
                                if (isDropdownHidden && [ "ArrowUp", "ArrowDown", " ", "Enter" ].includes(e.key)) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    this._openDropdown();
                                }
                                if (e.key === "Tab") this._closeDropdown();
                            };
                            this.countryContainer.addEventListener("keydown", this._handleCountryContainerKeydown);
                        }
                        _initRequests() {
                            let {loadUtils, initialCountry, geoIpLookup} = this.options;
                            if (loadUtils && !intlTelInput.utils) {
                                this._handlePageLoad = () => {
                                    window.removeEventListener("load", this._handlePageLoad);
                                    intlTelInput.attachUtils(loadUtils)?.catch((() => {}));
                                };
                                if (intlTelInput.documentReady()) this._handlePageLoad(); else window.addEventListener("load", this._handlePageLoad);
                            } else this.resolveUtilsScriptPromise();
                            const isAutoCountry = initialCountry === "auto" && geoIpLookup;
                            if (isAutoCountry && !this.selectedCountryData.iso2) this._loadAutoCountry(); else this.resolveAutoCountryPromise();
                        }
                        _loadAutoCountry() {
                            if (intlTelInput.autoCountry) this.handleAutoCountry(); else if (!intlTelInput.startedLoadingAutoCountry) {
                                intlTelInput.startedLoadingAutoCountry = true;
                                if (typeof this.options.geoIpLookup === "function") this.options.geoIpLookup(((iso2 = "") => {
                                    const iso2Lower = iso2.toLowerCase();
                                    const isValidIso2 = iso2Lower && this._getCountryData(iso2Lower, true);
                                    if (isValidIso2) {
                                        intlTelInput.autoCountry = iso2Lower;
                                        setTimeout((() => forEachInstance("handleAutoCountry")));
                                    } else {
                                        this._setInitialState(true);
                                        forEachInstance("rejectAutoCountryPromise");
                                    }
                                }), (() => {
                                    this._setInitialState(true);
                                    forEachInstance("rejectAutoCountryPromise");
                                }));
                            }
                        }
                        _openDropdownWithPlus() {
                            this._openDropdown();
                            this.searchInput.value = "+";
                            this._filterCountries("", true);
                        }
                        _initTelInputListeners() {
                            const {strictMode, formatAsYouType, separateDialCode, formatOnDisplay, allowDropdown, countrySearch} = this.options;
                            let userOverrideFormatting = false;
                            if (/\p{L}/u.test(this.telInput.value)) userOverrideFormatting = true;
                            this._handleInputEvent = e => {
                                if (this.isAndroid && e?.data === "+" && separateDialCode && allowDropdown && countrySearch) {
                                    const currentCaretPos = this.telInput.selectionStart || 0;
                                    const valueBeforeCaret = this.telInput.value.substring(0, currentCaretPos - 1);
                                    const valueAfterCaret = this.telInput.value.substring(currentCaretPos);
                                    this.telInput.value = valueBeforeCaret + valueAfterCaret;
                                    this._openDropdownWithPlus();
                                    return;
                                }
                                if (this._updateCountryFromNumber(this.telInput.value)) this._triggerCountryChange();
                                const isFormattingChar = e?.data && /[^+0-9]/.test(e.data);
                                const isPaste = e?.inputType === "insertFromPaste" && this.telInput.value;
                                if (isFormattingChar || isPaste && !strictMode) userOverrideFormatting = true; else if (!/[^+0-9]/.test(this.telInput.value)) userOverrideFormatting = false;
                                const disableFormatOnSetNumber = e?.detail && e.detail["isSetNumber"] && !formatOnDisplay;
                                if (formatAsYouType && !userOverrideFormatting && !disableFormatOnSetNumber) {
                                    const currentCaretPos = this.telInput.selectionStart || 0;
                                    const valueBeforeCaret = this.telInput.value.substring(0, currentCaretPos);
                                    const relevantCharsBeforeCaret = valueBeforeCaret.replace(/[^+0-9]/g, "").length;
                                    const isDeleteForwards = e?.inputType === "deleteContentForward";
                                    const formattedValue = this._formatNumberAsYouType();
                                    const newCaretPos = translateCursorPosition(relevantCharsBeforeCaret, formattedValue, currentCaretPos, isDeleteForwards);
                                    this.telInput.value = formattedValue;
                                    this.telInput.setSelectionRange(newCaretPos, newCaretPos);
                                }
                            };
                            this.telInput.addEventListener("input", this._handleInputEvent);
                            if (strictMode || separateDialCode) {
                                this._handleKeydownEvent = e => {
                                    if (e.key && e.key.length === 1 && !e.altKey && !e.ctrlKey && !e.metaKey) {
                                        if (separateDialCode && allowDropdown && countrySearch && e.key === "+") {
                                            e.preventDefault();
                                            this._openDropdownWithPlus();
                                            return;
                                        }
                                        if (strictMode) {
                                            const value = this.telInput.value;
                                            const alreadyHasPlus = value.charAt(0) === "+";
                                            const isInitialPlus = !alreadyHasPlus && this.telInput.selectionStart === 0 && e.key === "+";
                                            const isNumeric = /^[0-9]$/.test(e.key);
                                            const isAllowedChar = separateDialCode ? isNumeric : isInitialPlus || isNumeric;
                                            const newValue = value.slice(0, this.telInput.selectionStart) + e.key + value.slice(this.telInput.selectionEnd);
                                            const newFullNumber = this._getFullNumber(newValue);
                                            const coreNumber = intlTelInput.utils.getCoreNumber(newFullNumber, this.selectedCountryData.iso2);
                                            const hasExceededMaxLength = this.maxCoreNumberLength && coreNumber.length > this.maxCoreNumberLength;
                                            let isChangingDialCode = false;
                                            if (alreadyHasPlus) {
                                                const currentCountry = this.selectedCountryData.iso2;
                                                const newCountry = this._getCountryFromNumber(newFullNumber);
                                                isChangingDialCode = newCountry !== currentCountry;
                                            }
                                            if (!isAllowedChar || hasExceededMaxLength && !isChangingDialCode && !isInitialPlus) e.preventDefault();
                                        }
                                    }
                                };
                                this.telInput.addEventListener("keydown", this._handleKeydownEvent);
                            }
                        }
                        _cap(number) {
                            const max = parseInt(this.telInput.getAttribute("maxlength") || "", 10);
                            return max && number.length > max ? number.substr(0, max) : number;
                        }
                        _trigger(name, detailProps = {}) {
                            const e = new CustomEvent(name, {
                                bubbles: true,
                                cancelable: true,
                                detail: detailProps
                            });
                            this.telInput.dispatchEvent(e);
                        }
                        _openDropdown() {
                            const {fixDropdownWidth, countrySearch} = this.options;
                            if (fixDropdownWidth) this.dropdownContent.style.width = `${this.telInput.offsetWidth}px`;
                            this.dropdownContent.classList.remove("iti__hide");
                            this.selectedCountry.setAttribute("aria-expanded", "true");
                            this._setDropdownPosition();
                            if (countrySearch) {
                                const firstCountryItem = this.countryList.firstElementChild;
                                if (firstCountryItem) {
                                    this._highlightListItem(firstCountryItem, false);
                                    this.countryList.scrollTop = 0;
                                }
                                this.searchInput.focus();
                            }
                            this._bindDropdownListeners();
                            this.dropdownArrow.classList.add("iti__arrow--up");
                            this._trigger("open:countrydropdown");
                        }
                        _setDropdownPosition() {
                            if (this.options.dropdownContainer) this.options.dropdownContainer.appendChild(this.dropdown);
                            if (!this.options.useFullscreenPopup) {
                                const inputPosRelativeToVP = this.telInput.getBoundingClientRect();
                                const inputHeight = this.telInput.offsetHeight;
                                if (this.options.dropdownContainer) {
                                    this.dropdown.style.top = `${inputPosRelativeToVP.top + inputHeight}px`;
                                    this.dropdown.style.left = `${inputPosRelativeToVP.left}px`;
                                    this._handleWindowScroll = () => this._closeDropdown();
                                    window.addEventListener("scroll", this._handleWindowScroll);
                                }
                            }
                        }
                        _bindDropdownListeners() {
                            this._handleMouseoverCountryList = e => {
                                const listItem = e.target?.closest(".iti__country");
                                if (listItem) this._highlightListItem(listItem, false);
                            };
                            this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
                            this._handleClickCountryList = e => {
                                const listItem = e.target?.closest(".iti__country");
                                if (listItem) this._selectListItem(listItem);
                            };
                            this.countryList.addEventListener("click", this._handleClickCountryList);
                            let isOpening = true;
                            this._handleClickOffToClose = () => {
                                if (!isOpening) this._closeDropdown();
                                isOpening = false;
                            };
                            document.documentElement.addEventListener("click", this._handleClickOffToClose);
                            let query = "";
                            let queryTimer = null;
                            this._handleKeydownOnDropdown = e => {
                                if ([ "ArrowUp", "ArrowDown", "Enter", "Escape" ].includes(e.key)) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    if (e.key === "ArrowUp" || e.key === "ArrowDown") this._handleUpDownKey(e.key); else if (e.key === "Enter") this._handleEnterKey(); else if (e.key === "Escape") this._closeDropdown();
                                }
                                if (!this.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
                                    e.stopPropagation();
                                    if (queryTimer) clearTimeout(queryTimer);
                                    query += e.key.toLowerCase();
                                    this._searchForCountry(query);
                                    queryTimer = setTimeout((() => {
                                        query = "";
                                    }), 1e3);
                                }
                            };
                            document.addEventListener("keydown", this._handleKeydownOnDropdown);
                            if (this.options.countrySearch) {
                                const doFilter = () => {
                                    const inputQuery = this.searchInput.value.trim();
                                    if (inputQuery) this._filterCountries(inputQuery); else this._filterCountries("", true);
                                };
                                let keyupTimer = null;
                                this._handleSearchChange = () => {
                                    if (keyupTimer) clearTimeout(keyupTimer);
                                    keyupTimer = setTimeout((() => {
                                        doFilter();
                                        keyupTimer = null;
                                    }), 100);
                                };
                                this.searchInput.addEventListener("input", this._handleSearchChange);
                                this.searchInput.addEventListener("click", (e => e.stopPropagation()));
                            }
                        }
                        _searchForCountry(query) {
                            for (let i = 0; i < this.countries.length; i++) {
                                const c = this.countries[i];
                                const startsWith = c.name.substr(0, query.length).toLowerCase() === query;
                                if (startsWith) {
                                    const listItem = c.nodeById[this.id];
                                    this._highlightListItem(listItem, false);
                                    this._scrollTo(listItem);
                                    break;
                                }
                            }
                        }
                        _filterCountries(query, isReset = false) {
                            let noCountriesAddedYet = true;
                            this.countryList.innerHTML = "";
                            const normalisedQuery = normaliseString(query);
                            for (let i = 0; i < this.countries.length; i++) {
                                const c = this.countries[i];
                                const normalisedCountryName = normaliseString(c.name);
                                const countryInitials = c.name.split(/[^a-zA-ZÀ-ÿа-яА-Я]/).map((word => word[0])).join("").toLowerCase();
                                const fullDialCode = `+${c.dialCode}`;
                                if (isReset || normalisedCountryName.includes(normalisedQuery) || fullDialCode.includes(normalisedQuery) || c.iso2.includes(normalisedQuery) || countryInitials.includes(normalisedQuery)) {
                                    const listItem = c.nodeById[this.id];
                                    if (listItem) this.countryList.appendChild(listItem);
                                    if (noCountriesAddedYet) {
                                        this._highlightListItem(listItem, false);
                                        noCountriesAddedYet = false;
                                    }
                                }
                            }
                            if (noCountriesAddedYet) this._highlightListItem(null, false);
                            this.countryList.scrollTop = 0;
                            this._updateSearchResultsText();
                        }
                        _updateSearchResultsText() {
                            const {i18n} = this.options;
                            const count = this.countryList.childElementCount;
                            let searchText;
                            if (count === 0) searchText = i18n.zeroSearchResults; else if (count === 1) searchText = i18n.oneSearchResult; else searchText = i18n.multipleSearchResults.replace("${count}", count.toString());
                            this.searchResultsA11yText.textContent = searchText;
                        }
                        _handleUpDownKey(key) {
                            let next = key === "ArrowUp" ? this.highlightedItem?.previousElementSibling : this.highlightedItem?.nextElementSibling;
                            if (!next && this.countryList.childElementCount > 1) next = key === "ArrowUp" ? this.countryList.lastElementChild : this.countryList.firstElementChild;
                            if (next) {
                                this._scrollTo(next);
                                this._highlightListItem(next, false);
                            }
                        }
                        _handleEnterKey() {
                            if (this.highlightedItem) this._selectListItem(this.highlightedItem);
                        }
                        _updateValFromNumber(fullNumber) {
                            let number = fullNumber;
                            if (this.options.formatOnDisplay && intlTelInput.utils && this.selectedCountryData) {
                                const useNational = this.options.nationalMode || number.charAt(0) !== "+" && !this.options.separateDialCode;
                                const {NATIONAL, INTERNATIONAL} = intlTelInput.utils.numberFormat;
                                const format = useNational ? NATIONAL : INTERNATIONAL;
                                number = intlTelInput.utils.formatNumber(number, this.selectedCountryData.iso2, format);
                            }
                            number = this._beforeSetNumber(number);
                            this.telInput.value = number;
                        }
                        _updateCountryFromNumber(fullNumber) {
                            const iso2 = this._getCountryFromNumber(fullNumber);
                            if (iso2 !== null) return this._setCountry(iso2);
                            return false;
                        }
                        _ensureHasDialCode(number) {
                            const {dialCode, nationalPrefix} = this.selectedCountryData;
                            const alreadyHasPlus = number.charAt(0) === "+";
                            if (alreadyHasPlus || !dialCode) return number;
                            const hasPrefix = nationalPrefix && number.charAt(0) === nationalPrefix && !this.options.separateDialCode;
                            const cleanNumber = hasPrefix ? number.substring(1) : number;
                            return `+${dialCode}${cleanNumber}`;
                        }
                        _getCountryFromNumber(fullNumber) {
                            const plusIndex = fullNumber.indexOf("+");
                            let number = plusIndex ? fullNumber.substring(plusIndex) : fullNumber;
                            const selectedIso2 = this.selectedCountryData.iso2;
                            const selectedDialCode = this.selectedCountryData.dialCode;
                            number = this._ensureHasDialCode(number);
                            const dialCodeMatch = this._getDialCode(number, true);
                            const numeric = getNumeric(number);
                            if (dialCodeMatch) {
                                const dialCodeMatchNumeric = getNumeric(dialCodeMatch);
                                const iso2Codes = this.dialCodeToIso2Map[dialCodeMatchNumeric];
                                if (!selectedIso2 && this.defaultCountry && iso2Codes.includes(this.defaultCountry)) return this.defaultCountry;
                                const alreadySelected = selectedIso2 && iso2Codes.includes(selectedIso2) && (numeric.length === dialCodeMatchNumeric.length || !this.selectedCountryData.areaCodes);
                                const isRegionlessNanpNumber = selectedDialCode === "1" && isRegionlessNanp(numeric);
                                if (!isRegionlessNanpNumber && !alreadySelected) for (let j = 0; j < iso2Codes.length; j++) if (iso2Codes[j]) return iso2Codes[j];
                            } else if (number.charAt(0) === "+" && numeric.length) return ""; else if ((!number || number === "+") && !this.selectedCountryData.iso2) return this.defaultCountry;
                            return null;
                        }
                        _highlightListItem(listItem, shouldFocus) {
                            const prevItem = this.highlightedItem;
                            if (prevItem) {
                                prevItem.classList.remove("iti__highlight");
                                prevItem.setAttribute("aria-selected", "false");
                            }
                            this.highlightedItem = listItem;
                            if (this.highlightedItem) {
                                this.highlightedItem.classList.add("iti__highlight");
                                this.highlightedItem.setAttribute("aria-selected", "true");
                                const activeDescendant = this.highlightedItem.getAttribute("id") || "";
                                this.selectedCountry.setAttribute("aria-activedescendant", activeDescendant);
                                if (this.options.countrySearch) this.searchInput.setAttribute("aria-activedescendant", activeDescendant);
                            }
                            if (shouldFocus) this.highlightedItem.focus();
                        }
                        _getCountryData(iso2, allowFail) {
                            for (let i = 0; i < this.countries.length; i++) if (this.countries[i].iso2 === iso2) return this.countries[i];
                            if (allowFail) return null;
                            throw new Error(`No country data for '${iso2}'`);
                        }
                        _setCountry(iso2) {
                            const {separateDialCode, showFlags, i18n} = this.options;
                            const prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                            this.selectedCountryData = iso2 ? this._getCountryData(iso2, false) || {} : {};
                            if (this.selectedCountryData.iso2) this.defaultCountry = this.selectedCountryData.iso2;
                            if (this.selectedCountryInner) {
                                let flagClass = "";
                                let a11yText = "";
                                if (iso2 && showFlags) {
                                    flagClass = `iti__flag iti__${iso2}`;
                                    a11yText = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`;
                                } else {
                                    flagClass = "iti__flag iti__globe";
                                    a11yText = i18n.noCountrySelected;
                                }
                                this.selectedCountryInner.className = flagClass;
                                this.selectedCountryA11yText.textContent = a11yText;
                            }
                            this._setSelectedCountryTitleAttribute(iso2, separateDialCode);
                            if (separateDialCode) {
                                const dialCode = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : "";
                                this.selectedDialCode.innerHTML = dialCode;
                                this._updateInputPadding();
                            }
                            this._updatePlaceholder();
                            this._updateMaxLength();
                            return prevCountry.iso2 !== iso2;
                        }
                        _updateInputPadding() {
                            if (this.selectedCountry) {
                                const selectedCountryWidth = this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth();
                                const inputPadding = selectedCountryWidth + 6;
                                if (this.showSelectedCountryOnLeft) this.telInput.style.paddingLeft = `${inputPadding}px`; else this.telInput.style.paddingRight = `${inputPadding}px`;
                            }
                        }
                        _updateMaxLength() {
                            const {strictMode, placeholderNumberType, validationNumberTypes} = this.options;
                            const {iso2} = this.selectedCountryData;
                            if (strictMode && intlTelInput.utils) if (iso2) {
                                const numberType = intlTelInput.utils.numberType[placeholderNumberType];
                                let exampleNumber = intlTelInput.utils.getExampleNumber(iso2, false, numberType, true);
                                let validNumber = exampleNumber;
                                while (intlTelInput.utils.isPossibleNumber(exampleNumber, iso2, validationNumberTypes)) {
                                    validNumber = exampleNumber;
                                    exampleNumber += "0";
                                }
                                const coreNumber = intlTelInput.utils.getCoreNumber(validNumber, iso2);
                                this.maxCoreNumberLength = coreNumber.length;
                                if (iso2 === "by") this.maxCoreNumberLength = coreNumber.length + 1;
                            } else this.maxCoreNumberLength = null;
                        }
                        _setSelectedCountryTitleAttribute(iso2 = null, separateDialCode) {
                            if (!this.selectedCountry) return;
                            let title;
                            if (iso2 && !separateDialCode) title = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}`; else if (iso2) title = this.selectedCountryData.name; else title = "Unknown";
                            this.selectedCountry.setAttribute("title", title);
                        }
                        _getHiddenSelectedCountryWidth() {
                            if (this.telInput.parentNode) {
                                const containerClone = this.telInput.parentNode.cloneNode(false);
                                containerClone.style.visibility = "hidden";
                                document.body.appendChild(containerClone);
                                const countryContainerClone = this.countryContainer.cloneNode();
                                containerClone.appendChild(countryContainerClone);
                                const selectedCountryClone = this.selectedCountry.cloneNode(true);
                                countryContainerClone.appendChild(selectedCountryClone);
                                const width = selectedCountryClone.offsetWidth;
                                document.body.removeChild(containerClone);
                                return width;
                            }
                            return 0;
                        }
                        _updatePlaceholder() {
                            const {autoPlaceholder, placeholderNumberType, nationalMode, customPlaceholder} = this.options;
                            const shouldSetPlaceholder = autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && autoPlaceholder === "polite";
                            if (intlTelInput.utils && shouldSetPlaceholder) {
                                const numberType = intlTelInput.utils.numberType[placeholderNumberType];
                                let placeholder = this.selectedCountryData.iso2 ? intlTelInput.utils.getExampleNumber(this.selectedCountryData.iso2, nationalMode, numberType) : "";
                                placeholder = this._beforeSetNumber(placeholder);
                                if (typeof customPlaceholder === "function") placeholder = customPlaceholder(placeholder, this.selectedCountryData);
                                this.telInput.setAttribute("placeholder", placeholder);
                            }
                        }
                        _selectListItem(listItem) {
                            const countryChanged = this._setCountry(listItem.getAttribute("data-country-code"));
                            this._closeDropdown();
                            this._updateDialCode(listItem.getAttribute("data-dial-code"));
                            this.telInput.focus();
                            if (countryChanged) this._triggerCountryChange();
                        }
                        _closeDropdown() {
                            this.dropdownContent.classList.add("iti__hide");
                            this.selectedCountry.setAttribute("aria-expanded", "false");
                            this.selectedCountry.removeAttribute("aria-activedescendant");
                            if (this.highlightedItem) this.highlightedItem.setAttribute("aria-selected", "false");
                            if (this.options.countrySearch) this.searchInput.removeAttribute("aria-activedescendant");
                            this.dropdownArrow.classList.remove("iti__arrow--up");
                            document.removeEventListener("keydown", this._handleKeydownOnDropdown);
                            if (this.options.countrySearch) this.searchInput.removeEventListener("input", this._handleSearchChange);
                            document.documentElement.removeEventListener("click", this._handleClickOffToClose);
                            this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
                            this.countryList.removeEventListener("click", this._handleClickCountryList);
                            if (this.options.dropdownContainer) {
                                if (!this.options.useFullscreenPopup) window.removeEventListener("scroll", this._handleWindowScroll);
                                if (this.dropdown.parentNode) this.dropdown.parentNode.removeChild(this.dropdown);
                            }
                            if (this._handlePageLoad) window.removeEventListener("load", this._handlePageLoad);
                            this._trigger("close:countrydropdown");
                        }
                        _scrollTo(element) {
                            const container = this.countryList;
                            const scrollTop = document.documentElement.scrollTop;
                            const containerHeight = container.offsetHeight;
                            const containerTop = container.getBoundingClientRect().top + scrollTop;
                            const containerBottom = containerTop + containerHeight;
                            const elementHeight = element.offsetHeight;
                            const elementTop = element.getBoundingClientRect().top + scrollTop;
                            const elementBottom = elementTop + elementHeight;
                            const newScrollTop = elementTop - containerTop + container.scrollTop;
                            if (elementTop < containerTop) container.scrollTop = newScrollTop; else if (elementBottom > containerBottom) {
                                const heightDifference = containerHeight - elementHeight;
                                container.scrollTop = newScrollTop - heightDifference;
                            }
                        }
                        _updateDialCode(newDialCodeBare) {
                            const inputVal = this.telInput.value;
                            const newDialCode = `+${newDialCodeBare}`;
                            let newNumber;
                            if (inputVal.charAt(0) === "+") {
                                const prevDialCode = this._getDialCode(inputVal);
                                if (prevDialCode) newNumber = inputVal.replace(prevDialCode, newDialCode); else newNumber = newDialCode;
                                this.telInput.value = newNumber;
                            }
                        }
                        _getDialCode(number, includeAreaCode) {
                            let dialCode = "";
                            if (number.charAt(0) === "+") {
                                let numericChars = "";
                                for (let i = 0; i < number.length; i++) {
                                    const c = number.charAt(i);
                                    if (!isNaN(parseInt(c, 10))) {
                                        numericChars += c;
                                        if (includeAreaCode) {
                                            if (this.dialCodeToIso2Map[numericChars]) dialCode = number.substr(0, i + 1);
                                        } else if (this.dialCodes[numericChars]) {
                                            dialCode = number.substr(0, i + 1);
                                            break;
                                        }
                                        if (numericChars.length === this.dialCodeMaxLen) break;
                                    }
                                }
                            }
                            return dialCode;
                        }
                        _getFullNumber(overrideVal) {
                            const val = overrideVal || this.telInput.value.trim();
                            const {dialCode} = this.selectedCountryData;
                            let prefix;
                            const numericVal = getNumeric(val);
                            if (this.options.separateDialCode && val.charAt(0) !== "+" && dialCode && numericVal) prefix = `+${dialCode}`; else prefix = "";
                            return prefix + val;
                        }
                        _beforeSetNumber(fullNumber) {
                            let number = fullNumber;
                            if (this.options.separateDialCode) {
                                let dialCode = this._getDialCode(number);
                                if (dialCode) {
                                    dialCode = `+${this.selectedCountryData.dialCode}`;
                                    const start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
                                    number = number.substr(start);
                                }
                            }
                            return this._cap(number);
                        }
                        _triggerCountryChange() {
                            this._trigger("countrychange");
                        }
                        _formatNumberAsYouType() {
                            const val = this._getFullNumber();
                            const result = intlTelInput.utils ? intlTelInput.utils.formatNumberAsYouType(val, this.selectedCountryData.iso2) : val;
                            const {dialCode} = this.selectedCountryData;
                            if (this.options.separateDialCode && this.telInput.value.charAt(0) !== "+" && result.includes(`+${dialCode}`)) {
                                const afterDialCode = result.split(`+${dialCode}`)[1] || "";
                                return afterDialCode.trim();
                            }
                            return result;
                        }
                        handleAutoCountry() {
                            if (this.options.initialCountry === "auto" && intlTelInput.autoCountry) {
                                this.defaultCountry = intlTelInput.autoCountry;
                                const hasSelectedCountryOrGlobe = this.selectedCountryData.iso2 || this.selectedCountryInner.classList.contains("iti__globe");
                                if (!hasSelectedCountryOrGlobe) this.setCountry(this.defaultCountry);
                                this.resolveAutoCountryPromise();
                            }
                        }
                        handleUtils() {
                            if (intlTelInput.utils) {
                                if (this.telInput.value) this._updateValFromNumber(this.telInput.value);
                                if (this.selectedCountryData.iso2) {
                                    this._updatePlaceholder();
                                    this._updateMaxLength();
                                }
                            }
                            this.resolveUtilsScriptPromise();
                        }
                        destroy() {
                            const {allowDropdown, separateDialCode} = this.options;
                            if (allowDropdown) {
                                this._closeDropdown();
                                this.selectedCountry.removeEventListener("click", this._handleClickSelectedCountry);
                                this.countryContainer.removeEventListener("keydown", this._handleCountryContainerKeydown);
                                const label = this.telInput.closest("label");
                                if (label) label.removeEventListener("click", this._handleLabelClick);
                            }
                            const {form} = this.telInput;
                            if (this._handleHiddenInputSubmit && form) form.removeEventListener("submit", this._handleHiddenInputSubmit);
                            this.telInput.removeEventListener("input", this._handleInputEvent);
                            if (this._handleKeydownEvent) this.telInput.removeEventListener("keydown", this._handleKeydownEvent);
                            this.telInput.removeAttribute("data-intl-tel-input-id");
                            if (separateDialCode) if (this.isRTL) this.telInput.style.paddingRight = this.originalPaddingRight; else this.telInput.style.paddingLeft = this.originalPaddingLeft;
                            const wrapper = this.telInput.parentNode;
                            wrapper?.parentNode?.insertBefore(this.telInput, wrapper);
                            wrapper?.parentNode?.removeChild(wrapper);
                            delete intlTelInput.instances[this.id];
                        }
                        getExtension() {
                            if (intlTelInput.utils) return intlTelInput.utils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
                            return "";
                        }
                        getNumber(format) {
                            if (intlTelInput.utils) {
                                const {iso2} = this.selectedCountryData;
                                return intlTelInput.utils.formatNumber(this._getFullNumber(), iso2, format);
                            }
                            return "";
                        }
                        getNumberType() {
                            if (intlTelInput.utils) return intlTelInput.utils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
                            return -99;
                        }
                        getSelectedCountryData() {
                            return this.selectedCountryData;
                        }
                        getValidationError() {
                            if (intlTelInput.utils) {
                                const {iso2} = this.selectedCountryData;
                                return intlTelInput.utils.getValidationError(this._getFullNumber(), iso2);
                            }
                            return -99;
                        }
                        isValidNumber() {
                            if (!this.selectedCountryData.iso2) return false;
                            const val = this._getFullNumber();
                            const alphaCharPosition = val.search(/\p{L}/u);
                            if (alphaCharPosition > -1) {
                                const beforeAlphaChar = val.substring(0, alphaCharPosition);
                                const beforeAlphaIsValid = this._utilsIsPossibleNumber(beforeAlphaChar);
                                const isValid = this._utilsIsPossibleNumber(val);
                                return beforeAlphaIsValid && isValid;
                            }
                            return this._utilsIsPossibleNumber(val);
                        }
                        _utilsIsPossibleNumber(val) {
                            return intlTelInput.utils ? intlTelInput.utils.isPossibleNumber(val, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null;
                        }
                        isValidNumberPrecise() {
                            if (!this.selectedCountryData.iso2) return false;
                            const val = this._getFullNumber();
                            const alphaCharPosition = val.search(/\p{L}/u);
                            if (alphaCharPosition > -1) {
                                const beforeAlphaChar = val.substring(0, alphaCharPosition);
                                const beforeAlphaIsValid = this._utilsIsValidNumber(beforeAlphaChar);
                                const isValid = this._utilsIsValidNumber(val);
                                return beforeAlphaIsValid && isValid;
                            }
                            return this._utilsIsValidNumber(val);
                        }
                        _utilsIsValidNumber(val) {
                            return intlTelInput.utils ? intlTelInput.utils.isValidNumber(val, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null;
                        }
                        setCountry(iso2) {
                            const iso2Lower = iso2?.toLowerCase();
                            const currentCountry = this.selectedCountryData.iso2;
                            const isCountryChange = iso2 && iso2Lower !== currentCountry || !iso2 && currentCountry;
                            if (isCountryChange) {
                                this._setCountry(iso2Lower);
                                this._updateDialCode(this.selectedCountryData.dialCode);
                                this._triggerCountryChange();
                            }
                        }
                        setNumber(number) {
                            const countryChanged = this._updateCountryFromNumber(number);
                            this._updateValFromNumber(number);
                            if (countryChanged) this._triggerCountryChange();
                            this._trigger("input", {
                                isSetNumber: true
                            });
                        }
                        setPlaceholderNumberType(type) {
                            this.options.placeholderNumberType = type;
                            this._updatePlaceholder();
                        }
                        setDisabled(disabled) {
                            this.telInput.disabled = disabled;
                            if (disabled) this.selectedCountry.setAttribute("disabled", "true"); else this.selectedCountry.removeAttribute("disabled");
                        }
                    };
                    var attachUtils = source => {
                        if (!intlTelInput.utils && !intlTelInput.startedLoadingUtilsScript) {
                            let loadCall;
                            if (typeof source === "function") try {
                                loadCall = Promise.resolve(source());
                            } catch (error) {
                                return Promise.reject(error);
                            } else return Promise.reject(new TypeError(`The argument passed to attachUtils must be a function that returns a promise for the utilities module, not ${typeof source}`));
                            intlTelInput.startedLoadingUtilsScript = true;
                            return loadCall.then((module => {
                                const utils = module?.default;
                                if (!utils || typeof utils !== "object") throw new TypeError("The loader function passed to attachUtils did not resolve to a module object with utils as its default export.");
                                intlTelInput.utils = utils;
                                forEachInstance("handleUtils");
                                return true;
                            })).catch((error => {
                                forEachInstance("rejectUtilsScriptPromise", error);
                                throw error;
                            }));
                        }
                        return null;
                    };
                    var intlTelInput = Object.assign(((input, options) => {
                        const iti = new Iti(input, options);
                        iti._init();
                        input.setAttribute("data-intl-tel-input-id", iti.id.toString());
                        intlTelInput.instances[iti.id] = iti;
                        return iti;
                    }), {
                        defaults,
                        documentReady: () => document.readyState === "complete",
                        getCountryData: () => data_default,
                        getInstance: input => {
                            const id2 = input.getAttribute("data-intl-tel-input-id");
                            return id2 ? intlTelInput.instances[id2] : null;
                        },
                        instances: {},
                        attachUtils,
                        startedLoadingUtilsScript: false,
                        startedLoadingAutoCountry: false,
                        version: "25.3.0"
                    });
                    var intl_tel_input_default = intlTelInput;
                    return __toCommonJS(intl_tel_input_exports);
                })();
                return factoryOutput.default;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            if (bodyLockStatus) {
                const lockPaddingElements = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    lockPaddingElements.forEach((lockPaddingElement => {
                        lockPaddingElement.style.paddingRight = "";
                    }));
                    document.body.style.paddingRight = "";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            if (bodyLockStatus) {
                const lockPaddingElements = document.querySelectorAll("[data-lp]");
                const lockPaddingValue = window.innerWidth - document.body.offsetWidth + "px";
                lockPaddingElements.forEach((lockPaddingElement => {
                    lockPaddingElement.style.paddingRight = lockPaddingValue;
                }));
                document.body.style.paddingRight = lockPaddingValue;
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        if (spollersBlock.classList.contains("_spoller-init")) {
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        }
                    }));
                }));
            }
        }
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay = 0) {
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis = "x") {
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend(...args) {
            const to = Object(args[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < args.length; i += 1) {
                const nextSource = args[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll({swiper, targetPosition, side}) {
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_elementChildren(element, selector = "") {
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function utils_createElement(tag, classes = []) {
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : [ classes ]);
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function utils_elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice({userAgent} = {}) {
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides = {}) {
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            return {
                isSafari: needPerspectiveFix || isSafari(),
                needPerspectiveFix,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize({swiper, on, emit}) {
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((({contentBoxSize, contentRect, target}) => {
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer({swiper, extendParams, on, emit}) {
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = (target, options = {}) => {
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.el);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.el, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler(...args) {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit(...args) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? utils_elementOuterSize(slide, "width", true) : utils_elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + params.spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + params.spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (params.spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides.filter((el => parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index))[0];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset;
        }
        function updateSlidesProgress(translate = this && this.translate || 0) {
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el => el.getAttribute("data-swiper-slide-index") === "0"))[0]);
                const lastSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el => el.getAttribute("data-swiper-slide-index") * 1 === swiper.slides.length - 1))[0]);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (swiper.slides[activeIndex]) realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10); else realIndex = activeIndex;
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = e.closest(`.${params.slideClass}, swiper-slide`);
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis = (this.isHorizontal() ? "x" : "y")) {
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit({swiper, runCallbacks, direction, step}) {
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else newIndex = swiper.getSlideIndex(swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === newIndex))[0]);
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = .5) {
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            slides.forEach(((el, index) => {
                el.setAttribute("data-swiper-slide-index", index);
            }));
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix({slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = {}) {
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
            let loopedSlides = params.loopedSlides || slidesPerView;
            if (loopedSlides % params.slidesPerGroup !== 0) loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
            swiper.loopedSlides = loopedSlides;
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el => el.classList.contains("swiper-slide-active")))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            if (activeSlideIndex < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    prependSlidesIndexes.push(slides.length - index - 1);
                }
            } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
                slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    appendSlidesIndexes.push(index);
                }
            }
            if (isPrev) prependSlidesIndexes.forEach((index => {
                slidesEl.prepend(swiper.slides[index]);
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                slidesEl.append(swiper.slides[index]);
            }));
            swiper.recalcSlides();
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                    }
                } else if (setTranslate) swiper.slideToLoop(slideRealIndex, 0, false, true);
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                }
            } else swiper.slideToLoop(slideRealIndex, 0, false, true);
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    slideTo: false,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (c.params.loop) c.loopFix(loopParams);
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix(loopParams);
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {slides, params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base = this) {
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            data.evCache.push(event);
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if (edgeSwipeDetection === "prevent") event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === e.pointerId));
            if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
            const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        prevX: swiper.touches.currentX,
                        prevY: swiper.touches.currentY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            if (!data.isMoved) {
                if (isLoop) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
                swiper.loopFix({
                    direction: swiper.swipeDirection,
                    setTranslate: true
                });
                loopFixed = true;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === event.pointerId));
            if (pointerIndex >= 0) data.evCache.splice(pointerIndex, 1);
            if ([ "pointercancel", "pointerout", "pointerleave" ].includes(event.type)) {
                const proceed = event.type === "pointercancel" && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        let timeout;
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(timeout);
                timeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                const lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (lazyEl) lazyEl.remove();
            }
        };
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            swiper.update();
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            if (!dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base = "window", containerEl) {
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopedSlides: null,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj = {}) {
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes
        };
        const extendedDefaults = {};
        class core_Swiper {
            constructor(...args) {
                let el;
                let params;
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: utils_now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: []
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view = "current", exact = false) {
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate = true) {
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.shadowEl) swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement ? el : wrapperEl,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                swiper.initialized = true;
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance = true, cleanStyles = true) {
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!core_Swiper.prototype.__modules__) core_Swiper.prototype.__modules__ = [];
                const modules = core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => core_Swiper.installModule(m)));
                    return core_Swiper;
                }
                core_Swiper.installModule(module);
                return core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        core_Swiper.use([ Resize, Observer ]);
        const core = core_Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation({swiper, extendParams, on, emit}) {
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            const makeElementsArray = el => {
                if (!Array.isArray(el)) el = [ el ].filter((e => !!e));
                return el;
            };
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.shadowRoot.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList[swiper.enabled ? "remove" : "add"](swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function initSliders() {
            if (document.querySelector(".swiper")) new core(".swiper", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 15,
                speed: 1e3,
                navigation: {
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next"
                },
                on: {}
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        class DynamicAdapt {
            constructor(type) {
                this.type = type;
            }
            init() {
                this.оbjects = [];
                this.daClassname = "_dynamic_adapt_";
                this.nodes = [ ...document.querySelectorAll("[data-da]") ];
                this.nodes.forEach((node => {
                    const data = node.dataset.da.trim();
                    const dataArray = data.split(",");
                    const оbject = {};
                    оbject.element = node;
                    оbject.parent = node.parentNode;
                    оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
                    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.оbjects.push(оbject);
                }));
                this.arraySort(this.оbjects);
                this.mediaQueries = this.оbjects.map((({breakpoint}) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)).filter(((item, index, self) => self.indexOf(item) === index));
                this.mediaQueries.forEach((media => {
                    const mediaSplit = media.split(",");
                    const matchMedia = window.matchMedia(mediaSplit[0]);
                    const mediaBreakpoint = mediaSplit[1];
                    const оbjectsFilter = this.оbjects.filter((({breakpoint}) => breakpoint === mediaBreakpoint));
                    matchMedia.addEventListener("change", (() => {
                        this.mediaHandler(matchMedia, оbjectsFilter);
                    }));
                    this.mediaHandler(matchMedia, оbjectsFilter);
                }));
            }
            mediaHandler(matchMedia, оbjects) {
                if (matchMedia.matches) оbjects.forEach((оbject => {
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                })); else оbjects.forEach((({parent, element, index}) => {
                    if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
                }));
            }
            moveTo(place, element, destination) {
                element.classList.add(this.daClassname);
                if (place === "last" || place >= destination.children.length) {
                    destination.append(element);
                    return;
                }
                if (place === "first") {
                    destination.prepend(element);
                    return;
                }
                destination.children[place].before(element);
            }
            moveBack(parent, element, index) {
                element.classList.remove(this.daClassname);
                if (parent.children[index] !== void 0) parent.children[index].before(element); else parent.append(element);
            }
            indexInParent(parent, element) {
                return [ ...parent.children ].indexOf(element);
            }
            arraySort(arr) {
                if (this.type === "min") arr.sort(((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return -1;
                        if (a.place === "last" || b.place === "first") return 1;
                        return 0;
                    }
                    return a.breakpoint - b.breakpoint;
                })); else {
                    arr.sort(((a, b) => {
                        if (a.breakpoint === b.breakpoint) {
                            if (a.place === b.place) return 0;
                            if (a.place === "first" || b.place === "last") return 1;
                            if (a.place === "last" || b.place === "first") return -1;
                            return 0;
                        }
                        return b.breakpoint - a.breakpoint;
                    }));
                    return;
                }
            }
        }
        const da = new DynamicAdapt("max");
        da.init();
        var intlTelInput = __webpack_require__(436);
        function tasksList() {
            const columnBtn = document.querySelector(".tasks__column-btn");
            const rowBtn = document.querySelector(".tasks__row-btn");
            const tasksList = document.querySelector(".tasks__list");
            if (rowBtn) rowBtn.addEventListener("click", (() => {
                tasksList.classList.remove("column");
                tasksList.classList.add("row");
                columnBtn.classList.remove("active");
                rowBtn.classList.add("active");
            }));
            if (columnBtn) columnBtn.addEventListener("click", (() => {
                tasksList.classList.remove("row");
                tasksList.classList.add("column");
                rowBtn.classList.remove("active");
                columnBtn.classList.add("active");
            }));
        }
        function inpTel() {
            const input = document.querySelector("#number");
            if (input) intlTelInput(input, {
                initialCountry: "sk",
                separateDialCode: true,
                utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
            });
        }
        function initUserNavbar() {
            const usersBtns = document.querySelectorAll(".actions-auth__link-user");
            for (const userBtn of usersBtns) userBtn.addEventListener("click", (() => {
                userBtn.nextElementSibling.classList.toggle("v-hidden");
            }));
        }
        function asideMenuOpen() {
            const btn = document.querySelector(".hire__show-aside-btn");
            const menu = document.querySelector(".hire__aside");
            if (btn && menu) btn.addEventListener("click", (() => {
                menu.classList.toggle("aside-open");
                btn.classList.toggle("aside-open");
            }));
        }
        window.onload = () => {
            tasksList();
            inpTel();
            initUserNavbar();
            asideMenuOpen();
        };
        window["FLS"] = true;
        menuInit();
        spollers();
    })();
})();