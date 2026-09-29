import { test, expect } from '@playwright/test';
import testData from '../testDetails.json' with {type:'json'}

console.log("json number of elements " + testData.length)
for (let testcase=0; testcase <testData.length; testcase +=1)
{

let data = testData[testcase];
test(`test ${data.testName}`, async ({ page }) => {
  await launchBrowser(page,'https://www.saucedemo.com/');
  await Login(page,data.userName,data.passWord);
  await validateMsg(page,data.testMsg)
});
};

test(`success test case`, async ({ page }) => {
  await launchBrowser(page,'https://www.saucedemo.com/');
  await Login(page,"standard_user","secret_sauce");
});


  async function launchBrowser(page,url) {
  await page.goto(url);  
  }
  async function enterUserName(page,uName) {
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(uName);
  }
  async function enterUserPassword(page,uPass) {
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(uPass);  
  }
  async function clickSignInButton(page) {
  await page.locator('[data-test="login-button"]').click();  
  }

  
  async function validateMsg(page, errMsgTest) {
  let errMsg = await page.locator('.error-message-container.error').textContent();
  console.log('error message is ' + errMsg)
  expect(errMsg).toBe(errMsgTest);  
  }
  
 async function Login(page,uName,uPass) {
  await enterUserName(page,uName);
  await enterUserPassword(page,uPass);
  await clickSignInButton(page);
 }