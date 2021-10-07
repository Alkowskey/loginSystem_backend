export declare const genRandomString: (length: number) => string;
export declare const saltHashPassword: (password: string) => {
    salt: string;
    passwordHash: string;
};
export declare const comparePasswords: ({ password, hash, salt, }: {
    password: string;
    hash: string;
    salt: string;
}) => boolean;
