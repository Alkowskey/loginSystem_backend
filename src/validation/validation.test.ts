import { isValidPassword, isValidUsername } from "./validation";
it("Testing for valid usernames", () => {
  expect(isValidUsername("Norm")).toBeFalsy;
  expect(isValidUsername("Nor m")).toBeFalsy;
  expect(isValidUsername("Konon%wicz")).toBeFalsy;
  expect(isValidUsername("Kononowicz")).toBeTruthy;
});
it("Testing for valid passwords", () => {
  expect(isValidPassword("123456")).toBeFalsy;
  expect(isValidPassword("123456a")).toBeFalsy;
  expect(isValidPassword("A12345")).toBeFalsy;
  expect(isValidPassword("PoteznyWarmianin1")).toBeTruthy;
});
