System.register([],(function(e,t){return{execute:function(){e((()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>y});var n={lessThanXSeconds:{one:"meno di un secondo",other:"meno di {{count}} secondi"},xSeconds:{one:"un secondo",other:"{{count}} secondi"},halfAMinute:"alcuni secondi",lessThanXMinutes:{one:"meno di un minuto",other:"meno di {{count}} minuti"},xMinutes:{one:"un minuto",other:"{{count}} minuti"},aboutXHours:{one:"circa un'ora",other:"circa {{count}} ore"},xHours:{one:"un'ora",other:"{{count}} ore"},xDays:{one:"un giorno",other:"{{count}} giorni"},aboutXWeeks:{one:"circa una settimana",other:"circa {{count}} settimane"},xWeeks:{one:"una settimana",other:"{{count}} settimane"},aboutXMonths:{one:"circa un mese",other:"circa {{count}} mesi"},xMonths:{one:"un mese",other:"{{count}} mesi"},aboutXYears:{one:"circa un anno",other:"circa {{count}} anni"},xYears:{one:"un anno",other:"{{count}} anni"},overXYears:{one:"più di un anno",other:"più di {{count}} anni"},almostXYears:{one:"quasi un anno",other:"quasi {{count}} anni"}};function a(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const i={date:a({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:a({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:a({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};function o(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var u={};function d(){return u}function l(e,t){var n,a,i,u,l,m,s,c;o(1,arguments);var g=d(),f=function(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}(null!==(n=null!==(a=null!==(i=null!==(u=null==t?void 0:t.weekStartsOn)&&void 0!==u?u:null==t||null===(l=t.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==i?i:g.weekStartsOn)&&void 0!==a?a:null===(s=g.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=function(e){o(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===r(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}(e),v=h.getUTCDay(),b=(v<f?7:0)+v-f;return h.setUTCDate(h.getUTCDate()-b),h.setUTCHours(0,0,0,0),h}function m(e,t,n){o(2,arguments);var a=l(e,n),i=l(t,n);return a.getTime()===i.getTime()}var s=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"];function c(e){return"'"+s[e]+" alle' p"}var g={lastWeek:function(e,t,n){var a=e.getUTCDay();return m(e,t,n)?c(a):function(e){return 0===e?"'domenica scorsa alle' p":"'"+s[e]+" scorso alle' p"}(a)},yesterday:"'ieri alle' p",today:"'oggi alle' p",tomorrow:"'domani alle' p",nextWeek:function(e,t,n){var a=e.getUTCDay();return m(e,t,n)?c(a):function(e){return 0===e?"'domenica prossima alle' p":"'"+s[e]+" prossimo alle' p"}(a)},other:"P"};function f(e){return function(t,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var r=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;a=e.values[u]||e.values[r]}return a[e.argumentCallback?e.argumentCallback(t):t]}}const h={ordinalNumber:function(e,t){var n=Number(e);return String(n)},era:f({values:{narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["avanti Cristo","dopo Cristo"]},defaultWidth:"wide"}),quarter:f({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:f({values:{narrow:["G","F","M","A","M","G","L","A","S","O","N","D"],abbreviated:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],wide:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"]},defaultWidth:"wide"}),day:f({values:{narrow:["D","L","M","M","G","V","S"],short:["dom","lun","mar","mer","gio","ven","sab"],abbreviated:["dom","lun","mar","mer","gio","ven","sab"],wide:["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"]},defaultWidth:"wide"}),dayPeriod:f({values:{narrow:{am:"m.",pm:"p.",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"},abbreviated:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"},wide:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"}},defaultWidth:"wide",formattingValues:{narrow:{am:"m.",pm:"p.",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"},abbreviated:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"},wide:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"}},defaultFormattingWidth:"wide"})};function v(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,i=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],o=t.match(i);if(!o)return null;var r,u=o[0],d=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(u))return n}(d):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(u))return n}(d);return r=e.valueCallback?e.valueCallback(l):l,{value:r=n.valueCallback?n.valueCallback(r):r,rest:t.slice(u.length)}}}var b,p={ordinalNumber:(b={matchPattern:/^(\d+)(º)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(b.matchPattern);if(!n)return null;var a=n[0],i=e.match(b.parsePattern);if(!i)return null;var o=b.valueCallback?b.valueCallback(i[0]):i[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(a.length)}}),era:v({matchPatterns:{narrow:/^(aC|dC)/i,abbreviated:/^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,wide:/^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^a/i,/^(d|e)/i]},defaultParseWidth:"any"}),quarter:v({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](º)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:v({matchPatterns:{narrow:/^[gfmalsond]/i,abbreviated:/^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,wide:/^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^g/i,/^f/i,/^m/i,/^a/i,/^m/i,/^g/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ge/i,/^f/i,/^mar/i,/^ap/i,/^mag/i,/^gi/i,/^l/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:v({matchPatterns:{narrow:/^[dlmgvs]/i,short:/^(do|lu|ma|me|gi|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|gio|ven|sab)/i,wide:/^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^g/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^g/i,/^v/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:v({matchPatterns:{narrow:/^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,any:/^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mezza/i,noon:/^mezzo/i,morning:/mattina/i,afternoon:/pomeriggio/i,evening:/sera/i,night:/notte/i}},defaultParseWidth:"any"})};const y={code:"it",formatDistance:function(e,t,a){var i,o=n[e];return i="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"tra "+i:i+" fa":i},formatLong:i,formatRelative:function(e,t,n,a){var i=g[e];return"function"==typeof i?i(t,n,a):i},localize:h,match:p,options:{weekStartsOn:1,firstWeekContainsDate:4}};return t})())}}}));