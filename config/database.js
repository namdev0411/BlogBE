module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-50-19-210-145.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ddashk2sftmmv9'),
      user: env('DATABASE_USERNAME', 'ywmbkdkvbonhgb'),
      password: env('DATABASE_PASSWORD', 'c09eb0bcc54da84a1984226656f19a9aff771e9c496f1e69c781637520d4995c'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
  },
});
