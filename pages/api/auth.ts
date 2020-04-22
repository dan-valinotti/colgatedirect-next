import { login } from '../../services/auth';

export default (req, res) => {
  if (req.method === 'POST') {
    login(req, res).catch((error) => console.log(error));
  } else {
    res.status(404).end();
  }
};
