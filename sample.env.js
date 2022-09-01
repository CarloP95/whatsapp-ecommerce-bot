const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT,
    Meta_WA_VerifyToken: process.env.VERIFY_TOKEN,
    Meta_WA_accessToken: process.env.ACCESS_TOKEN,
    Meta_WA_SenderPhoneNumberId: process.env.PHONE_ID,
    Meta_WA_wabaId: process.env.WA_BI_ID,
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    if (environment === 'production') {
        return production;
    } else if (environment === 'development') {
        return development;
    } else {
        return fallback;
    }
};
