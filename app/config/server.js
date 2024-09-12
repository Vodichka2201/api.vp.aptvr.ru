module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ff3042eccf3120ff0fcfc8884ba8db01'),
    },
  },
  pagination: {
    enabled: true,
    defaultLimit: 25,
    maxLimit: 100,
    page: 1,
    pageParam: '_page',
    limitParam: '_limit',
    orderBy: { id: 'desc' },
  },
});
