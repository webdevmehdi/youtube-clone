import React from 'react';
import VideoPreview from './VideoPreview/VideoPreview';
import styles from '../VideosContainer/VideoGrid.module.css'



const VideosContainer =() => {
return (
<div className={styles.VideoGrid}>
<VideoPreview/>
<VideoPreview/>
<VideoPreview/>
<VideoPreview/>
<VideoPreview/>
<VideoPreview/>

</div>

)
}

export default VideosContainer;