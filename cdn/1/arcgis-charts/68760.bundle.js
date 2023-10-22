"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[68760],{68760:(a,i,t)=>{t.r(i),t.d(i,{additionalProperty:()=>c,anyOfValues:()=>$,bubbleChartValidateMsg:()=>h,default:()=>V,defaultError:()=>e,defaultInvalidChart:()=>n,duplicateSeriesID:()=>d,enumValues:()=>C,gaugeCannotExceedLimit:()=>x,histogramEmptyField:()=>z,invalidSeriesType:()=>I,layerLoadFailure:()=>l,lineChartMarkersCannotExceedLimit:()=>y,lineChartSeriesAndMarkersCannotExceedLimit:()=>E,maxItems:()=>g,minItems:()=>p,minLength:()=>j,negativeValueInDataForLogTransformation:()=>m,negativeValueInDataForSqrtTransformation:()=>u,nonNumericAggregation:()=>v,or:()=>f,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:()=>P,pieChartSlicesCannotExceedLimit:()=>S,queryError:()=>L,requiredProperty:()=>k,threePlusSeriesBarCountCannotExceedLimit:()=>o,twoSeriesBarCountCannotExceedLimit:()=>s,uniqueSeriesBarCountCannotExceedLimit:()=>r,whiteSpacePattern:()=>b});const e="Ielādējot diagrammu, radās kļūda.",r="Šajā diagrammā ir pavisam ${ elementCount } joslas. Joslu diagrammām ar vienu sēriju ir joslu skaita ierobežojums: ${ totalLimit } joslas. Izvēlieties lauku Kategorija ar mazāku unikālo vērtību skaitu vai piemērojiet datiem filtru.",s="Joslu diagrammām ar divām sērijām ir joslu skaita ierobežojums: ${ totalLimit } joslas vai ${ seriesLimit } joslas katrā sērijā. Izvēlieties lauku Kategorija ar mazāku unikālo vērtību skaitu vai piemērojiet datiem filtru.",o="Joslu diagrammām ar trīs vai vairāk sērijām ir joslu skaita ierobežojums: ${ totalLimit } joslas vai ${ seriesLimit } joslas katrā sērijā. Izvēlieties lauku Kategorija ar mazāku unikālo vērtību skaitu vai piemērojiet datiem filtru.",n="Izveidojot diagrammu, radās kļūda.",m="Žurnālfaila transformāciju nevar piemērot negatīvām vai nulles vērtībām.",u="Kvadrātsaknes transformāciju nevar lietot negatīvām vērtībām.",l="Ielādējot slāni, radās kļūda. Vietrādis (URL) = ${ url }. Portāla vienības ID = ${ portalItemId }.",d="${ dataPath } jābūt unikālam. Sērijai ar nosaukumu ${ seriesName } ir ID (${ seriesID }), ko jau izmanto cita sērija.",v="${ dataPath } nevar veikt apkopošanu laukā, kurā nav skaitlisku vērtību.",k="${ dataPath } trūkst parametra ar nosaukumu ${ missingProperty }.",j="${ dataPath } nedrīkst būt īsāks par ${ limit } rakstzīmēm.",p="${ dataPath } nedrīkst būt mazāk par ${ limit } vienībām.",g="${ dataPath } nedrīkst būt vairāk par ${ limit } vienībām.",b="${ dataPath } jābūt vismaz vienai rakstzīmei, kas nav atstarpe.",c="${ dataPath } nedrīkst būt ${ additionalProperty }.",C="${ dataPath } jābūt vienādam ar kādu no šīm atļautajām vērtībām: ${ allowedValues }.",$="${ dataPath } jāatbilst kādai no šādām shēmām: ${ schemaOptions }.",h="Izkliedes laukumi ar proporcionāliem simboliem netiek atbalstīti. Ticis piemērots noklusējuma simbola izmērs.",L="Neizdevās nolasīt ievades datus.",z="Histogrammām nepieciešamas vismaz divas skaitliskas vērtības.",I="Indeksa ${ seriesIndex } prognozētais sērijas veids ir “${ expectedType }”, bet tā vietā tika saņemts “${ receivedType }”",f="vai",P="Nodrošina, ka izvēlētā(-o) skaitliskā(-o) lauka(-u) kopsumma atgriež visas pozitīvās vērtības vai visas negatīvās vērtības.",S="Šajā diagrammā ir pavisam ${ sliceCount } sektori. Sektoru diagrammas ir ierobežotas līdz ${ totalLimit } sektoriem. Izvēlieties lauku Kategorija ar mazāku unikālo vērtību skaitu, pievienojiet mazāk skaitlisko lauku vai lietojiet datiem filtru.",x="Elementos balstītas mērierīces ir ierobežotas līdz ${ totalLimit } elementiem. Filtrēt datus.",E="Šajā diagrammā kopumā ir ${ seriesCount } sērijas un ${ elementCount } datu punkti. Līniju diagrammām ir ${ seriesLimit } sēriju un ${ totalLimit } datu punktu ierobežojums. Samaziniet sēriju skaitu un/vai atkārtoti apkopojiet vai filtrējiet datus.",y="Līniju diagrammām ir ${ totalLimit } datu punktu ierobežojums. Filtrējiet vai atkārtoti apkopojiet datus un mēģiniet vēlreiz.";var V={defaultError:"Ielādējot diagrammu, radās kļūda.",uniqueSeriesBarCountCannotExceedLimit:r,twoSeriesBarCountCannotExceedLimit:s,threePlusSeriesBarCountCannotExceedLimit:o,defaultInvalidChart:"Izveidojot diagrammu, radās kļūda.",negativeValueInDataForLogTransformation:"Žurnālfaila transformāciju nevar piemērot negatīvām vai nulles vērtībām.",negativeValueInDataForSqrtTransformation:"Kvadrātsaknes transformāciju nevar lietot negatīvām vērtībām.",layerLoadFailure:l,duplicateSeriesID:d,nonNumericAggregation:v,requiredProperty:k,minLength:j,minItems:p,maxItems:g,whiteSpacePattern:b,additionalProperty:"${ dataPath } nedrīkst būt ${ additionalProperty }.",enumValues:C,anyOfValues:$,bubbleChartValidateMsg:h,queryError:L,histogramEmptyField:z,invalidSeriesType:I,or:"vai",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Nodrošina, ka izvēlētā(-o) skaitliskā(-o) lauka(-u) kopsumma atgriež visas pozitīvās vērtības vai visas negatīvās vērtības.",pieChartSlicesCannotExceedLimit:S,gaugeCannotExceedLimit:x,lineChartSeriesAndMarkersCannotExceedLimit:E,lineChartMarkersCannotExceedLimit:y}}}]);