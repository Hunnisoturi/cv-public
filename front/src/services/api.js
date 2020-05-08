import Danxios from './danxios';

const send = ({ name, company, email }) => (
  Danxios.post('/send', { name, company, email })
);

export default {
  send,
};
