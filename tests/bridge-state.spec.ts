import { expect, test } from "@playwright/test";
import { BuzzTransitionDetector } from "../src/bridge.js";

test("arms only after an empty buzzer state and emits transitions once", () => {
  const detector = new BuzzTransitionDetector();

  expect(detector.update(true)).toEqual([]);
  expect(detector.isArmed()).toBe(false);
  expect(detector.update(false)).toEqual([{ type: "clear" }]);
  expect(detector.isArmed()).toBe(true);
  expect(detector.update(true)).toEqual([{ type: "buzz" }]);
  expect(detector.update(true)).toEqual([]);
  expect(detector.update(false)).toEqual([{ type: "clear" }]);
});

test("starts armed when BuzzIn is already clear", () => {
  const detector = new BuzzTransitionDetector();
  expect(detector.update(false)).toEqual([]);
  expect(detector.isArmed()).toBe(true);
  expect(detector.update(true)).toEqual([{ type: "buzz" }]);
});
