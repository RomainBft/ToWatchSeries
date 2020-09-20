module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: env('DATABASE_URI', 'mongodb://localhost:3000'),
      },
      options: {
        ssl: true,
        debug : true
      },
    },
  },
});