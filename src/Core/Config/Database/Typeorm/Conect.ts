import { DataSource } from "typeorm";

const connect = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "admin",
  database: "test",
  synchronize: true,
  logging: false,
});

export { connect };
