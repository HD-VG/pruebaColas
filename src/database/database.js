import { Sequelize } from 'sequelize';

// Configura Sequelize para usar MySQL
export const sequelize = new Sequelize('bd_prueba', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

  
// export const sequelize = new Sequelize(
//  "projectsdb",SIS324,
//  "postgres",postgres,
//  "mysecretpassword",
//  {
//    host: "localhost",
//    dialect: "sqlite",
//     pool: {
//       max: 5,
//       min: 0,
//       require: 30000,
//       idle: 10000,
//     },
//     logging: false,
//  }
// );