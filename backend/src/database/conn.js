import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mimemories', 'gbr', 'Gbr1234!', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  define: {
    timestamp: true,
    underscored: true,
  },
});

try {
  sequelize.authenticate();
  console.log('Conectado co banco de dados com sucesso!');
} catch (err) {
  console.log(`Falha ao conectar com o banco de dados: ${err}`);
}

export default sequelize;
