import URL from '../config';

const searchCategories = async () => {
  const res = await fetch(URL + 'categories?_embed=videos');
  const json = await res.json();
  console.log(json);
  return [...json];
};

export default searchCategories;
