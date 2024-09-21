import axios from 'axios';

//istek  ile göndermemiz gereken kimliğimiz
const options = {
  params: {
    geo: 'TR',
    lang: 'tr',
  },

  headers: {
    'x-rapidapi-key':
      '3d45d83137msh24edfc2c9111846p1b6df8jsn93ebc5ad438d',
    'x-rapidapi-host': 'yt-api.p.rapidapi.com'
  }
};


// todo base url tanımla 
//bütün istekklerin (baseurl) başlangıcında olan url'i tanmlama
axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com';



// API ye verdiğimiz endpoint için
// istek atıp verileri döndüren bir fonk

export const getData = async (url) => {
  try {
    const response = await axios.get(url, options);
    return response;
  } catch (err) {
    console.log('verileri çekerken hata oluştu')
  }

};