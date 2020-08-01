const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3333/'
  : 'https://netflix-p.herokuapp.com/';
export default URL;
