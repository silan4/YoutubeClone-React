import millify from 'millify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video ,type }) => {
    
    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate();
  
  
    return (
        <div 
            onClick={() => navigate(`/watch/${video.videoId}`)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={`cursor-pointer ${type && "row"} `}
        >
            {/* Resim kısmı */}
            <div>
                <img
                    className={`rounded-lg w-full h-full 
                     ${type && "w-[168px h-[94px"}  `}
                    src={
                        isHover && video.richThumbnail && video.richThumbnail.length > 0
                        ? video.richThumbnail[0].url // Hover'sa ve gif thumbnail varsa bu basılır
                        : video.thumbnail && video.thumbnail.length > 0
                        ? video.thumbnail[0].url // değilse bu basılır
                        : '' // Herhangi bir veri yoksa boş bir string
                    }
                    alt={video.title || 'Video thumbnail'}
                />
            </div>
            {/* Detay alanı */}
            <div className='flex gap-4 mt-5'>
                <img 
                    className={`w-14 h-14 rounded-full ${type &&
                        "hidden"}`} 
                    src={video.channelThumbnail && video.channelThumbnail.length > 0 
                        ? video.channelThumbnail[0].url 
                        : ''} 
                    alt={video.channelTitle || 'Channel thumbnail'} 
                />
                <div>
                    <h4 className={`font-bold ${type && "truncate"}`}>{video.title || 'Unknown Title'}</h4>
                    <p>{video.channelTitle || 'Unknown Channel'}</p>

                    <div className='flex gap-2'>
                        <p>{video.viewCount ? millify(video.viewCount) : 'N/A'}</p>
                        <p>{video.publishedTimeText || 'Unknown Time'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
