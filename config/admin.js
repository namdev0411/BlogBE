module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c8374d258c09790bebc171ea7b811c8e'),
  },
});
