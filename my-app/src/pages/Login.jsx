import React from 'react'
import Card from '@components/Card'
import Modal from '@components/Modal'


const Login = () => {
    const [open, setOpen] = React.useState(false);
    const [content, setContent] = React.useState(null);
    const [title, setTitle] = React.useState(null);
    const [flag, setFlag] = React.useState(null);

    const fillData = (data) =>{
        setOpen(data.open);
        setContent(data.content)
        setTitle(data.title)
        if (data.title === null){
            return
        }else{
            if (data.title.split(" ")[1] === "Berhasil"){
                setFlag(true);
            }
            else{
                setFlag(false);
            }
        }
    }
    
    return (
        <div className='bg-blue-400'>
            <Card flagHandle={fillData}/>
            <Modal openModal={open} content={content} title={title} flag={flag} />
        </div>
    )
}

export default Login