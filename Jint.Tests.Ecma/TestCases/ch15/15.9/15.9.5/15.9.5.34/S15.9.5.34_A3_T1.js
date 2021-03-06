// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * The Date.prototype.setHours property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @path ch15/15.9/15.9.5/15.9.5.34/S15.9.5.34_A3_T1.js
 * @description Checking ReadOnly attribute
 */

x = Date.prototype.setHours.length;
Date.prototype.setHours.length = 1;
if (Date.prototype.setHours.length !== x) {
  $ERROR('#1: The Date.prototype.setHours.length has the attribute ReadOnly');
}


