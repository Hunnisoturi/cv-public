import Danxios from './danxios';

const send = ({ name, company, email, message }) => (
  Danxios.post('/send', { name, company, email, message })
);

export default {
  send,
};
