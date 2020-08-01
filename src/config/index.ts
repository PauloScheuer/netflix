const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3333/'
  : '';
export default URL;
