import { DataTypes } from 'sequelize';
import { sequelize } from '../../api/utils/db.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
        len: [3, 20],
      },
  
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      len: [5, 50], 
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [8, 20],
      },
  },
});

export default User;
