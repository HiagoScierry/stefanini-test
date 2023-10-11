import { DataSource } from "typeorm";

const connect = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_USER_HOSTNAME,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
});

export { connect };
