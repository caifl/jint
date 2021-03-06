// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * No matter how control leaves the embedded 'Statement',
 * the scope chain is always restored to its former state
 *
 * @path ch12/12.10/S12.10_A3.8_T3.js
 * @description Declaring function constructor within "with" statement, leading to normal completion by "return"
 * @noStrict
 */

this.p1 = 1;

var result = "result";

var myObj = {
  p1: 'a', 
  value: 'myObj_value',
  valueOf : function(){return 'obj_valueOf';}
}

with(myObj){
  var __FACTORY = function(){
    return value;
    p1 = 'x1';
  }
  var obj = new __FACTORY;
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(p1 !== 1){
  $ERROR('#1: p1 === 1. Actual:  p1 ==='+ p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(myObj.p1 !== "a"){
  $ERROR('#2: myObj.p1 === "a". Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

