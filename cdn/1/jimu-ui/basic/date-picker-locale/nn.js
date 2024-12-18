System.register([],(function(t,e){return{execute:function(){t((()=>{"use strict";var t={97980:(t,e)=>{e.buildFormatLongFn=function(t){return(e={})=>{const a=e.width?String(e.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}}},46746:(t,e)=>{e.buildLocalizeFn=function(t){return(e,a)=>{let n;if("formatting"===(a?.context?String(a.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=a?.width?String(a.width):e;n=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=a?.width?String(a.width):t.defaultWidth;n=t.values[r]||t.values[e]}return n[t.argumentCallback?t.argumentCallback(e):e]}}},20640:(t,e)=>{e.buildMatchFn=function(t){return(e,a={})=>{const n=a.width,r=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;const o=i[0],d=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(d)?function(t,e){for(let a=0;a<t.length;a++)if(e(t[a]))return a;return}(d,(t=>t.test(o))):function(t,e){for(const a in t)if(Object.prototype.hasOwnProperty.call(t,a)&&e(t[a]))return a;return}(d,(t=>t.test(o)));let u;u=t.valueCallback?t.valueCallback(l):l,u=a.valueCallback?a.valueCallback(u):u;return{value:u,rest:e.slice(o.length)}}}},2528:(t,e)=>{e.buildMatchPatternFn=function(t){return(e,a={})=>{const n=e.match(t.matchPattern);if(!n)return null;const r=n[0],i=e.match(t.parsePattern);if(!i)return null;let o=t.valueCallback?t.valueCallback(i[0]):i[0];o=a.valueCallback?a.valueCallback(o):o;return{value:o,rest:e.slice(r.length)}}}},9724:(t,e)=>{e.formatDistance=void 0;const a={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein m\xe5nad",other:"omtrent {{count}} m\xe5nader"},xMonths:{one:"ein m\xe5nad",other:"{{count}} m\xe5nader"},aboutXYears:{one:"omtrent eitt \xe5r",other:"omtrent {{count}} \xe5r"},xYears:{one:"eitt \xe5r",other:"{{count}} \xe5r"},overXYears:{one:"over eitt \xe5r",other:"over {{count}} \xe5r"},almostXYears:{one:"nesten eitt \xe5r",other:"nesten {{count}} \xe5r"}},n=["null","ein","to","tre","fire","fem","seks","sju","\xe5tte","ni","ti","elleve","tolv"];e.formatDistance=(t,e,r)=>{let i;const o=a[t];return i="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e<13?n[e]:String(e)),r?.addSuffix?r.comparison&&r.comparison>0?"om "+i:i+" sidan":i}},6325:(t,e,a)=>{e.formatLong=void 0;var n=a(97980);e.formatLong={date:(0,n.buildFormatLongFn)({formats:{full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,n.buildFormatLongFn)({formats:{full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,n.buildFormatLongFn)({formats:{full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})}},75523:(t,e)=>{e.formatRelative=void 0;const a={lastWeek:"'f\xf8rre' eeee 'kl.' p",yesterday:"'i g\xe5r kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"};e.formatRelative=(t,e,n,r)=>a[t]},24747:(t,e,a)=>{e.localize=void 0;var n=a(46746);e.localize={ordinalNumber:(t,e)=>Number(t)+".",era:(0,n.buildLocalizeFn)({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["f\xf8r Kristus","etter Kristus"]},defaultWidth:"wide"}),quarter:(0,n.buildLocalizeFn)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:(0,n.buildLocalizeFn)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},defaultWidth:"wide"}),day:(0,n.buildLocalizeFn)({values:{narrow:["S","M","T","O","T","F","L"],short:["su","m\xe5","ty","on","to","fr","lau"],abbreviated:["sun","m\xe5n","tys","ons","tor","fre","laur"],wide:["sundag","m\xe5ndag","tysdag","onsdag","torsdag","fredag","laurdag"]},defaultWidth:"wide"}),dayPeriod:(0,n.buildLocalizeFn)({values:{narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 etterm.",evening:"p\xe5 kvelden",night:"p\xe5 natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"p\xe5 morg.",afternoon:"p\xe5 etterm.",evening:"p\xe5 kvelden",night:"p\xe5 natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"p\xe5 morgonen",afternoon:"p\xe5 ettermiddagen",evening:"p\xe5 kvelden",night:"p\xe5 natta"}},defaultWidth:"wide"})}},99371:(t,e,a)=>{e.match=void 0;var n=a(20640),r=a(2528);e.match={ordinalNumber:(0,r.buildMatchPatternFn)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)}),era:(0,n.buildMatchFn)({matchPatterns:{narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(f\xf8r Kristus|f\xf8r v\xe5r tid|etter Kristus|v\xe5r tid)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^f/i,/^e/i]},defaultParseWidth:"any"}),quarter:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.buildMatchFn)({matchPatterns:{narrow:/^[smtofl]/i,short:/^(su|m\xe5|ty|on|to|fr|la)/i,abbreviated:/^(sun|m\xe5n|tys|ons|tor|fre|laur)/i,wide:/^(sundag|m\xe5ndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.buildMatchFn)({matchPatterns:{narrow:/^(midnatt|middag|(p\xe5) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(p\xe5) (morgonen|ettermiddagen|kvelden|natta))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},defaultParseWidth:"any"})}}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,a),i.exports}var n={};return(()=>{var t=n;t.nn=void 0;var e=a(9724),r=a(6325),i=a(75523),o=a(24747),d=a(99371);t.nn={code:"nn",formatDistance:e.formatDistance,formatLong:r.formatLong,formatRelative:i.formatRelative,localize:o.localize,match:d.match,options:{weekStartsOn:1,firstWeekContainsDate:4}}})(),n})())}}}));