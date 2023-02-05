const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '67552c704d1235e1e78b53ccb23b6d85',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
