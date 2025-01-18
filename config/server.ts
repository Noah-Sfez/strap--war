module.exports = ({ env }) => {
    const host = env("HOST", "0.0.0.0");
    const port = process.env.PORT || env.int("PORT", 1337);

    console.log(`Strapi is running on host: ${host} and port: ${port}`);

    return {
        host,
        port,
        app: {
            keys: env.array("APP_KEYS"),
        },
    };
};
