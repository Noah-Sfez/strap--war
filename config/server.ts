export default ({ env }) => ({
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    app: {
        keys: env.array(
            "JU1E7/8ZLQnfXZCz/1oHqg==,2XuV6zvaq/lQ1ptRX2F6YQ==,fE/+iQwJkZswpoMQNPijDg==,tP6h0CEKZLGN6ID/RLfeGg=="
        ),
    },
});
