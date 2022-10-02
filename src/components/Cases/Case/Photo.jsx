import React from "react"
import VideoPlayer from "react-video-js-player";
const Photo = ({photos}) =>{
    console.log(photos)
    function ext(name) {
        return name.match(/\.([^.]+)$|$/)[1];
      }
    const PhotosData = ({pic})=>{
        return (
                <img src={"http://" + pic.url} />
        )
    }
    const DocsData = ({pic})=>{
        return (
                <a target="_blank" href={"http://" + pic.url}>{pic.title}</a>
        )
    }
    const VideoData = ({pic})=>{
        return (
                <VideoPlayer src={"http://" + pic.url}/>
        )
    }
    let casePost = "";
    const PhotosMap = (pos)=>{
        if(pos.length < 1) return;
           casePost =  pos.map((pic,index)=>{
                let rozsh = ext(pic.url);
                rozsh = rozsh.toLowerCase()
                switch(rozsh){
                    case "mp4" || "mkv":{
                        return(
                            <VideoData key={index} pic = {pic} />
                        )
                    }
                    case "jpg" || "png":{
                        return(
                            <PhotosData key={index} pic={pic}/>
                        )
                    }
                    case "pdf" || "xls" || "xlsx" :{
                        return(
                            <DocsData key={index} pic={pic}/>
                        )
                    }
                }
            

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