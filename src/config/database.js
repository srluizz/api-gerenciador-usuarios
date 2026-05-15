export default {
  dialect: "postgres",
  host: "127.0.0.1",
  username: "postgres",
  port: 5433,
  password: "postgres",
  database: "usersdb",
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
