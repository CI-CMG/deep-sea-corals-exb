/*! For license information please see 89469.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[89469],{89469:(e,t,a)=>{a.r(t),a.d(t,{additionalProperty:()=>p,anyOfValues:()=>x,bubbleChartValidateMsg:()=>y,default:()=>q,defaultError:()=>i,defaultInvalidChart:()=>l,duplicateSeriesID:()=>u,enumValues:()=>P,gaugeCannotExceedLimit:()=>b,histogramEmptyField:()=>S,invalidSeriesType:()=>I,layerLoadFailure:()=>m,lineChartMarkersCannotExceedLimit:()=>k,lineChartSeriesAndMarkersCannotExceedLimit:()=>D,maxItems:()=>L,minItems:()=>c,minLength:()=>h,negativeValueInDataForLogTransformation:()=>s,negativeValueInDataForSqrtTransformation:()=>d,nonNumericAggregation:()=>C,or:()=>f,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:()=>v,pieChartSlicesCannotExceedLimit:()=>V,queryError:()=>E,requiredProperty:()=>$,threePlusSeriesBarCountCannotExceedLimit:()=>o,twoSeriesBarCountCannotExceedLimit:()=>n,uniqueSeriesBarCountCannotExceedLimit:()=>r,whiteSpacePattern:()=>g});const i="เกิดข้อผิดพลาดขึ้นขณะโหลดแผนภูมิ",r="มีทั้งหมด ${ elementCount } แท่งในแผนภูมินี้ แผนภูมิแท่งที่มีหนึ่งซีรีส์ จะถูกจำกัดจำนวนไว้ที่ ${ totalLimit } แท่ง เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ",n="แผนภูมิแท่งที่มีสองซีรีส์ จะถูกจำกัดจำนวนไว้ที่ ${ totalLimit } แท่ง หรือ ${ seriesLimit } แท่งต่อซีรีส์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ",o="แผนภูมิแท่งที่มีอย่างน้อยสามซีรีส์ จะถูกจำกัดจำนวนไว้ที่ ${ totalLimit } แท่ง หรือ ${ seriesLimit } แท่งต่อซีรีส์ เลือกฟิลด์ Category ที่มีค่าเฉพาะน้อยลงหรือใช้ตัวกรองกับข้อมูลของคุณ",l="เกิดข้อผิดพลาดขึ้นขณะสร้างแผนภูมิ",s="ไม่สามารถใช้การแปลงค่า log กับค่าติดลบหรือศูนย์ได้",d="ไม่สามารถใช้การแปลงรากที่สองกับค่าติดลบได้",m="เกิดข้อผิดพลาดขึ้นขณะโหลดชั้นข้อมูล URL = ${ url } ID รายการพอร์ทัล = ${ portalItemId }",u="${ dataPath } ต้องไม่ซ้ำกัน ซีรีส์ที่ชื่อ ${ seriesName } มี ID (${ seriesID }) ที่ซีรีส์อื่นใช้งานอยู่แล้ว",C="${ dataPath } ไม่สามารถดำเนินการรวมแบบไม่นับกับฟิลด์ที่ไม่ใช่ตัวเลขได้",$="${ dataPath } ไม่มีชื่อคุณสมบัติ ${ missingProperty }",h="${ dataPath } ต้องมีความยาวมากกว่า ${ limit } อักขระ",c="${ dataPath } ต้องมีไม่น้อยกว่า ${ limit } รายการ",L="${ dataPath } ต้องมีไม่เกิน ${ limit } รายการ",g="${ dataPath } ต้องมีอย่างน้อยหนึ่งอักขระที่ไม่ใช่ไวท์สเปซ",p="${ dataPath } ต้องไม่มี ${ additionalProperty }",P="${ dataPath } ต้องเท่ากับหนึ่งในค่าที่อนุญาตเหล่านี้: ${ allowedValues }",x="${ dataPath } ต้องตรงกับรูปแบบของหนึ่งในรายการเหล่านี้: ${ schemaOptions }",y="ไม่รองรับการกระจายพล็อตด้วยสัญลักษณ์ตามสัดส่วน ใช้ขนาดสัญลักษณ์เริ่มต้นแล้ว",E="ไม่สามารถอ่านข้อมูลขาเข้า",S="ฮิสโตแกรมต้องการอย่างน้อยสองค่าตัวเลข",I="ประเภทซีรีส์ที่คาดหวังที่ดัชนี ${ seriesIndex } คือ '${ expectedType }' แต่ได้รับ '${ receivedType }' แทน",f="หรือ",v="ตรวจสอบให้แน่ใจว่าผลรวมทั้งหมดของฟิลด์ตัวเลขที่เลือก ส่งคืนค่าบวกทั้งหมดหรือค่าลบทั้งหมด",V="มีทั้งหมด ${ sliceCount } สไลซ์ในแผนภูมินี้ แผนภูมิวงกลมจะถูกจำกัดไว้ที่ ${ totalLimit } สไลซ์ เลือกฟิลด์ หมวดหมู่ ที่มีค่าที่ไม่ซ้ำกันในจำนวนที่น้อยลง เพิ่มฟิลด์ตัวเลขที่น้อยลง หรือใช้ตัวกรองกับข้อมูลของคุณ",b="เกจแบบอิงฟีเจอร์จะถูกจำกัดไว้ที่ ${ totalLimit } ฟีเจอร์ กรองข้อมูลของคุณ",D="มีทั้งหมด ${ seriesCount } ซีรีส์ และ ${ elementCount } จุดข้อมูลในแผนภูมินี้ แผนภูมิเส้นจะถูกจำกัดไว้ที่ ${ seriesLimit } ซีรีส์ และ ${ totalLimit } จุดข้อมูล ลดจำนวนของซีรีส์ และ/หรือรวมข้อมูลใหม่ หรือกรองข้อมูลของคุณ",k="แผนภูมิเส้นจะถูกจำกัดไว้ที่ ${ totalLimit } จุดข้อมูล กรองหรือรวมข้อมูลของคุณใหม่ แล้วลองอีกครั้ง",q={defaultError:"เกิดข้อผิดพลาดขึ้นขณะโหลดแผนภูมิ",uniqueSeriesBarCountCannotExceedLimit:r,twoSeriesBarCountCannotExceedLimit:n,threePlusSeriesBarCountCannotExceedLimit:o,defaultInvalidChart:"เกิดข้อผิดพลาดขึ้นขณะสร้างแผนภูมิ",negativeValueInDataForLogTransformation:"ไม่สามารถใช้การแปลงค่า log กับค่าติดลบหรือศูนย์ได้",negativeValueInDataForSqrtTransformation:"ไม่สามารถใช้การแปลงรากที่สองกับค่าติดลบได้",layerLoadFailure:m,duplicateSeriesID:u,nonNumericAggregation:C,requiredProperty:$,minLength:h,minItems:c,maxItems:L,whiteSpacePattern:g,additionalProperty:"${ dataPath } ต้องไม่มี ${ additionalProperty }",enumValues:P,anyOfValues:x,bubbleChartValidateMsg:y,queryError:"ไม่สามารถอ่านข้อมูลขาเข้า",histogramEmptyField:"ฮิสโตแกรมต้องการอย่างน้อยสองค่าตัวเลข",invalidSeriesType:I,or:"หรือ",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"ตรวจสอบให้แน่ใจว่าผลรวมทั้งหมดของฟิลด์ตัวเลขที่เลือก ส่งคืนค่าบวกทั้งหมดหรือค่าลบทั้งหมด",pieChartSlicesCannotExceedLimit:V,gaugeCannotExceedLimit:b,lineChartSeriesAndMarkersCannotExceedLimit:D,lineChartMarkersCannotExceedLimit:"แผนภูมิเส้นจะถูกจำกัดไว้ที่ ${ totalLimit } จุดข้อมูล กรองหรือรวมข้อมูลของคุณใหม่ แล้วลองอีกครั้ง"}}}]);