import { createContext, useState ,useEffect, } from 'react';
import { categories } from '../utils/constants.jsx'
import { getData } from '../utils/helpers.js';

export const YoutubeContext = createContext();

export function YoutubeProvider({ children }) {
    const [selectedCategory, setSelectedCategory] = useState(
        categories[0]
    );
  
    //videoları tutar
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        //api den videolar alınır
        if(selectedCategory.type === 'home'||
           selectedCategory.type === 'trending'
         ) {
        // yardımcı fonksiyonu kullanıp api isteği atma
            getData(`/${selectedCategory.type}`).then((res) =>
                 setVideos(res.data.data)
        );
       }

       // tip kategoriyse o kategori için istek at
       if(selectedCategory.type === 'category') {
        getData(
            `/search?query=${selectedCategory.name}&type=video`
        ).then((res) => setVideos(res.data.data));
       }
        
    } , [selectedCategory]);

    return (
        <YoutubeContext.Provider
        value={{selectedCategory, setSelectedCategory, videos}}
        >
            {children}
        </YoutubeContext.Provider>
    );
}

