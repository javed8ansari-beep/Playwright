import { test, expect } from '@playwright/test';
import testData from '../testDetails.json' with {type:'json'}

console.log("json number of elements " + testData.length)
for (let testcase=0; testcase <testData.length; testcase +=1)
{

let data = testData[testcase];
test(`test ${data.testName}`, async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  //await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').fill(data.userName);
  await page.locator('[data-test="password"]').click();
  //await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').fill(data.passWord);
  await page.locator('[data-test="login-button"]').click();
  //let errMsg = await page.locator('#login_button_container > div > form > div.error-message-container.error').textContent();
  let errMsg = await page.locator('.error-message-container.error').textContent();
  console.log('error message is ' + errMsg)
  // console.log("error message is " + errMsg);
  // console.log("error type is " + typeof(errMsg))
  // let errMsg1 = await page.locator('#login_button_container > div > form > div.error-message-container.error').allTextContents();
  // console.log("error message is " + errMsg1)
  // console.log("error type is " + typeof(errMsg1))
  expect(errMsg).toBe(data.testMsg);
 });
}