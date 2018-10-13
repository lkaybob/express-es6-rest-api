import { version } from '../../package.json';
import { Router } from 'express';
import test from 'test';

export default ({ db, passport }) => {
  let api = Router();

  // mount the facets resource
  api.use('/test', test({ db }));

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version });
  });

  api.post('/login',
    passport.authenticate('local', {
      successRedirect: '/api', failureFlash: true
    })
  );

  return api;
}
