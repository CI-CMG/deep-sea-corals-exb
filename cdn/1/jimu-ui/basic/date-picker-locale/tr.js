System.register([],(function(a,e){return{execute:function(){a((()=>{"use strict";var a={d:(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(a,e)=>Object.prototype.hasOwnProperty.call(a,e),r:a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},e={};a.r(e),a.d(e,{default:()=>h});var t={lessThanXSeconds:{one:"bir saniyeden az",other:"{{count}} saniyeden az"},xSeconds:{one:"1 saniye",other:"{{count}} saniye"},halfAMinute:"yar\u0131m dakika",lessThanXMinutes:{one:"bir dakikadan az",other:"{{count}} dakikadan az"},xMinutes:{one:"1 dakika",other:"{{count}} dakika"},aboutXHours:{one:"yakla\u015f\u0131k 1 saat",other:"yakla\u015f\u0131k {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 g\xfcn",other:"{{count}} g\xfcn"},aboutXWeeks:{one:"yakla\u015f\u0131k 1 hafta",other:"yakla\u015f\u0131k {{count}} hafta"},xWeeks:{one:"1 hafta",other:"{{count}} hafta"},aboutXMonths:{one:"yakla\u015f\u0131k 1 ay",other:"yakla\u015f\u0131k {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"yakla\u015f\u0131k 1 y\u0131l",other:"yakla\u015f\u0131k {{count}} y\u0131l"},xYears:{one:"1 y\u0131l",other:"{{count}} y\u0131l"},overXYears:{one:"1 y\u0131ldan fazla",other:"{{count}} y\u0131ldan fazla"},almostXYears:{one:"neredeyse 1 y\u0131l",other:"neredeyse {{count}} y\u0131l"}};const n=function(a,e,n){var i,r=t[a];return i="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?i+" sonra":i+" \xf6nce":i};function i(a){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width?String(e.width):a.defaultWidth;return a.formats[t]||a.formats[a.defaultWidth]}}const r={date:i({formats:{full:"d MMMM y EEEE",long:"d MMMM y",medium:"d MMM y",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:i({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:i({formats:{full:"{{date}} 'saat' {{time}}",long:"{{date}} 'saat' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var o={lastWeek:"'ge\xe7en hafta' eeee 'saat' p",yesterday:"'d\xfcn saat' p",today:"'bug\xfcn saat' p",tomorrow:"'yar\u0131n saat' p",nextWeek:"eeee 'saat' p",other:"P"};const s=function(a,e,t,n){return o[a]};function l(a){return function(e,t){var n;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,r=null!=t&&t.width?String(t.width):i;n=a.formattingValues[r]||a.formattingValues[i]}else{var o=a.defaultWidth,s=null!=t&&t.width?String(t.width):a.defaultWidth;n=a.values[s]||a.values[o]}return n[a.argumentCallback?a.argumentCallback(e):e]}}const u={ordinalNumber:function(a,e){return Number(a)+"."},era:l({values:{narrow:["M\xd6","MS"],abbreviated:["M\xd6","MS"],wide:["Milattan \xd6nce","Milattan Sonra"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["1\xc7","2\xc7","3\xc7","4\xc7"],wide:["\u0130lk \xe7eyrek","\u0130kinci \xc7eyrek","\xdc\xe7\xfcnc\xfc \xe7eyrek","Son \xe7eyrek"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:l({values:{narrow:["O","\u015e","M","N","M","H","T","A","E","E","K","A"],abbreviated:["Oca","\u015eub","Mar","Nis","May","Haz","Tem","A\u011fu","Eyl","Eki","Kas","Ara"],wide:["Ocak","\u015eubat","Mart","Nisan","May\u0131s","Haziran","Temmuz","A\u011fustos","Eyl\xfcl","Ekim","Kas\u0131m","Aral\u0131k"]},defaultWidth:"wide"}),day:l({values:{narrow:["P","P","S","\xc7","P","C","C"],short:["Pz","Pt","Sa","\xc7a","Pe","Cu","Ct"],abbreviated:["Paz","Pzt","Sal","\xc7ar","Per","Cum","Cts"],wide:["Pazar","Pazartesi","Sal\u0131","\xc7ar\u015famba","Per\u015fembe","Cuma","Cumartesi"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"\xf6\xf6",pm:"\xf6s",midnight:"gy",noon:"\xf6",morning:"sa",afternoon:"\xf6s",evening:"ak",night:"ge"},abbreviated:{am:"\xd6\xd6",pm:"\xd6S",midnight:"gece yar\u0131s\u0131",noon:"\xf6\u011fle",morning:"sabah",afternoon:"\xf6\u011fleden sonra",evening:"ak\u015fam",night:"gece"},wide:{am:"\xd6.\xd6.",pm:"\xd6.S.",midnight:"gece yar\u0131s\u0131",noon:"\xf6\u011fle",morning:"sabah",afternoon:"\xf6\u011fleden sonra",evening:"ak\u015fam",night:"gece"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\xf6\xf6",pm:"\xf6s",midnight:"gy",noon:"\xf6",morning:"sa",afternoon:"\xf6s",evening:"ak",night:"ge"},abbreviated:{am:"\xd6\xd6",pm:"\xd6S",midnight:"gece yar\u0131s\u0131",noon:"\xf6\u011flen",morning:"sabahleyin",afternoon:"\xf6\u011fleden sonra",evening:"ak\u015famleyin",night:"geceleyin"},wide:{am:"\xf6.\xf6.",pm:"\xf6.s.",midnight:"gece yar\u0131s\u0131",noon:"\xf6\u011flen",morning:"sabahleyin",afternoon:"\xf6\u011fleden sonra",evening:"ak\u015famleyin",night:"geceleyin"}},defaultFormattingWidth:"wide"})};function d(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.width,i=n&&a.matchPatterns[n]||a.matchPatterns[a.defaultMatchWidth],r=e.match(i);if(!r)return null;var o,s=r[0],l=n&&a.parsePatterns[n]||a.parsePatterns[a.defaultParseWidth],u=Array.isArray(l)?function(a,e){for(var t=0;t<a.length;t++)if(e(a[t]))return t;return}(l,(function(a){return a.test(s)})):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&e(a[t]))return t;return}(l,(function(a){return a.test(s)}));return o=a.valueCallback?a.valueCallback(u):u,{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(s.length)}}}var m,c={ordinalNumber:(m={matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}},function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.match(m.matchPattern);if(!t)return null;var n=t[0],i=a.match(m.parsePattern);if(!i)return null;var r=m.valueCallback?m.valueCallback(i[0]):i[0];return{value:r=e.valueCallback?e.valueCallback(r):r,rest:a.slice(n.length)}}),era:d({matchPatterns:{narrow:/^(m\xf6|ms)/i,abbreviated:/^(m\xf6|ms)/i,wide:/^(milattan \xf6nce|milattan sonra)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(^m\xf6|^milattan \xf6nce)/i,/(^ms|^milattan sonra)/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\xe7/i,wide:/^((i|\u0130)lk|(i|\u0130)kinci|\xfc\xe7\xfcnc\xfc|son) \xe7eyrek/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i],abbreviated:[/1\xe7/i,/2\xe7/i,/3\xe7/i,/4\xe7/i],wide:[/^(i|\u0130)lk \xe7eyrek/i,/(i|\u0130)kinci \xe7eyrek/i,/\xfc\xe7\xfcnc\xfc \xe7eyrek/i,/son \xe7eyrek/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:d({matchPatterns:{narrow:/^[o\u015fmnhtaek]/i,abbreviated:/^(oca|\u015fub|mar|nis|may|haz|tem|a\u011fu|eyl|eki|kas|ara)/i,wide:/^(ocak|\u015fubat|mart|nisan|may\u0131s|haziran|temmuz|a\u011fustos|eyl\xfcl|ekim|kas\u0131m|aral\u0131k)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^o/i,/^\u015f/i,/^m/i,/^n/i,/^m/i,/^h/i,/^t/i,/^a/i,/^e/i,/^e/i,/^k/i,/^a/i],any:[/^o/i,/^\u015f/i,/^mar/i,/^n/i,/^may/i,/^h/i,/^t/i,/^a\u011f/i,/^ey/i,/^ek/i,/^k/i,/^ar/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^[ps\xe7c]/i,short:/^(pz|pt|sa|\xe7a|pe|cu|ct)/i,abbreviated:/^(paz|pzt|sal|\xe7ar|per|cum|cts)/i,wide:/^(pazar(?!tesi)|pazartesi|sal\u0131|\xe7ar\u015famba|per\u015fembe|cuma(?!rtesi)|cumartesi)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^p/i,/^p/i,/^s/i,/^\xe7/i,/^p/i,/^c/i,/^c/i],any:[/^pz/i,/^pt/i,/^sa/i,/^\xe7a/i,/^pe/i,/^cu/i,/^ct/i],wide:[/^pazar(?!tesi)/i,/^pazartesi/i,/^sal\u0131/i,/^\xe7ar\u015famba/i,/^per\u015fembe/i,/^cuma(?!rtesi)/i,/^cumartesi/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{narrow:/^(\xf6\xf6|\xf6s|gy|\xf6|sa|\xf6s|ak|ge)/i,any:/^(\xf6\.?\s?[\xf6s]\.?|\xf6\u011fleden sonra|gece yar\u0131s\u0131|\xf6\u011fle|(sabah|\xf6\u011f|ak\u015fam|gece)(leyin))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\xf6\.?\xf6\.?/i,pm:/^\xf6\.?s\.?/i,midnight:/^(gy|gece yar\u0131s\u0131)/i,noon:/^\xf6\u011f/i,morning:/^sa/i,afternoon:/^\xf6\u011fleden sonra/i,evening:/^ak/i,night:/^ge/i}},defaultParseWidth:"any"})};const h={code:"tr",formatDistance:n,formatLong:r,formatRelative:s,localize:u,match:c,options:{weekStartsOn:1,firstWeekContainsDate:1}};return e})())}}}));