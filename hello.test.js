/**
 * @jest-environment jsdom
 */

import hello from './hello.js';

describe("My hello", () => {
  test("works", () => {
    expect(hello()).toEqual("Hello World!");
  });
});