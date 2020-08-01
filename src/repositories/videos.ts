import URL from '../config';

const insertVideo = async (obj: object) => {
  try {
    const res = await fetch(URL + 'videos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    if (res.ok) {
      const response = await res.json();
      return response;
    }
    throw new Error('Erro na requisição');
  } catch (err) {
    return err;
  }
};

export default insertVideo;
