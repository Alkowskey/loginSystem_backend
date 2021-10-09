import {
  genRandomString,
  comparePasswords,
  saltHashPassword,
} from "./userMiddleware";

const PASSWORD = "123123";

it("Testing genRandomString function", () => {
  expect(genRandomString(15).length).toEqual(15);
});
it("Testing password functions", () => {
  const { salt, passwordHash } = saltHashPassword(PASSWORD);
  expect(comparePasswords({ password: PASSWORD, hash: passwordHash, salt }))
    .toBeTruthy;
});
