import {Router} from 'express';
import TestModel from '../models/test';

export default ({db}) => {
  let api = Router();
  const model = TestModel(db.sequelize, db.Sequelize);

  api.get('/', ({params}, res) => {
    model.findAll({
      attributes: ['name'],
      where: {
        busId: params.id
      }
    }).then(results => {
      res.send(results);
    });
  });

  return api;
};
