import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Loading from "../../Loading/Loading";
import { useState } from "react";
import { serverAddres } from "../../Functions/serverAddres";



const PhotosForm = (props)=>{
    const {register, handleSubmit,formState: { errors }} = useForm();
    const [loading, setLoading] = useState({timer:"",message:"",active:""});
    const onSubmit = (data) =>{
        const formData = new FormData();
        for(let i=0; i<data.pic.length; i++){
            formData.append(`images[${i}]`, data.pic[i])
        }
        formData.append("id",window.location.search.slice(1))
        formData.append("title",data.title)
        axios({
            url: serverAddres("upload-img.php"),
            method: "POST",
            header : {'Content-Type': 'multipart/form-data'},
            data : formData,
            onUploadProgress: event => {
                setLoading({
                    timer: Math.round(event.loaded * 100 / event.total) + "%",
                    message: "LOADING",
                    active: "active"
                })
                console.log(Math.round(event.loaded * 100 / event.total))
            }
        })
        .then((data)=>{
            setLoading({active:""})
            window.location.reload()
        })
        .catch((error)=>console.log(error))     
    } 
    return(
        <>
           
            <form className="form__add__media" onSubmit={handleSubmit(onSubmit)}>
                <h3>Додати медіа файли</h3>
                <input multiple type="file" {...register("pic", { required: true })}/>
                <input type="text" {...register('title', { required: true })} placeholder="Назва файлу"/>
                <button>Надіслати</button>
                <div>
                {errors.pic && <span>Оберіть файл для завантаження</span>}
                {errors.title && <span>Введіть ім'я завантаженого файлу</span>}
                </div>
            </form>
            <Loading timer={loading.timer} message={loading.message} active={loading.active}/>
        </>
    )
}

export default PhotosForm;