import { test, expect } from '@playwright/test';

const { chromium } = require('playwright');

let browser;
let page;

beforeAll(async () => {
  browser = await chromium.launch();
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

test('Home Page', async () => {
  await page.goto('http://localhost:3000');
  expect(await page.title()).toBe('My Next.js App');
});

test('Subpage', async () => {
  await page.goto('http://localhost:3000/subpage');
  expect(await page.title()).toBe('Subpage');
});
