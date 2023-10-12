import axios from 'axios';

export const fetchImages = async (q, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${q}&page=${page}&key=28248023-dbaca864bf44e8898997f45b7`
  );
  return data;
};
