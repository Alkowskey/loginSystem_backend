import crypto from "crypto";

export const genRandomString = (length: number) =>
  crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);

export const saltHashPassword = (password: string) => {
  const salt = genRandomString(16); /** Gives us salt of length 16 */
  return sha512(password, salt);
};

const sha512 = (password: string, salt: string) => {
  const hash = crypto.createHmac("sha512", salt);
  hash.update(password);
  const passwordHash = hash.digest("hex");
  return {
    salt,
    passwordHash,
  };
};

export const comparePasswords = ({
  password,
  hash,
  salt,
}: {
  password: string;
  hash: string;
  salt: string;
}) => {
  return hash === sha512(password, salt).passwordHash;
};
