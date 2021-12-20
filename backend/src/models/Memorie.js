import { DataTypes } from 'sequelize';
import db from '../database/conn.js';

const Memorie = db.define('Memorie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  descripton: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});

export default Memorie;
