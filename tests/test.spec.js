import { test, expect } from '@playwright/test';
import testData from '../testDetails.json' with {type:'json'}

// console.log("json number of elements " + testData.length)
for (let testcase=0; testcase <testData.length; testcase +=1)
{
  test(`printing objects ${testcase}`, async() => {
  //console.log("object details " + testData[testcase])
  for(const data in testData[testcase]){
    console.log("each key is " + data)
    console.log("each data is " + testData[testcase][data])
  }
});
}
