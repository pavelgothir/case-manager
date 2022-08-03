import React from "react"
import VideoPlayer from "react-video-js-player";
const Photo = ({photos}) =>{
    function ext(name) {
        return name.match(/\.([^.]+)$|$/)[1];
      }
    const PhotosData = ({pic})=>{
        return (
                <img src={"http://" + pic} />
        )
    }
    const VideoData = ({pic})=>{
        return (
                <VideoPlayer src={"http://" + pic}/>
        )
    }
    let casePost = "";
    const PhotosMap = (pos)=>{
        if(pos.length < 1) return;
           casePost =  pos.map((pic,index)=>{
                let img = true;
                if(ext(pic) == "mkv" || ext(pic) == "mp4"){
                    img = false;
                }else{
                    
                }
                console.log(ext(pic))
                return img ? (
                <PhotosData key={index} pic={pic}/>
                ):(
                    <VideoData key={index} pic = {pic} />
                )

        })  
    }
    return photos.length > 0 ?(
        <>
            {
               PhotosMap(photos)
            }
            {
                casePost
            }
        </>
        
    ):(
        <>
            <h1>Немає завантажених фото</h1>
            {console.log(photos)}
        </>
    )
}
export default Photo;