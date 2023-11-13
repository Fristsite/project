import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mydatabase', 'postgres', 'vibes2223', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});

export { sequelize };
