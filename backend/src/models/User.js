import { DataTypes } from 'sequelize';
import db from '../database/conn.js';

const User = db.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  confirmPassword: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});

export default User;
