import React from 'react';
import Input from '@components/Input';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios';

const url = 'http://127.0.0.1:8000/login'

const Card = ({flagHandle}) => {
    const [username, setUsername] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [content, setContent] = React.useState(null);
    const [title, setTitle] = React.useState(null);
    

    const handleChildData = (data) => {
        if (data.label === 'Username') {
            setUsername(data.credential);
        }
        else {
            setPassword(data.credential);
        }
    }

    const send_credential = () => {
        setLoading(!loading)
        if (username === null || password === null) {
            setLoading(false)
            setOpen(true)
            setContent("Mohon mengisi username atau password");
            setTitle("Login Gagal")
            return;
        }

        axios.post(url, {
            username: username['username'],
            password: password['password'],
        },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(response => {
                console.log(response);
                setContent(response.data.message);
                setTitle("Login Berhasil")
            }).catch(err => {
                const response = err.response
                if (response.status === 403) {
                    console.log(response.data.message);                
                    setContent(response.data.message);
                    setTitle("Login Gagal")
                }
                else {
                    console.log(err);
                    setContent(response.data.message);
                    setTitle("Login Gagal")
                }
            }).finally(() =>{
                setLoading(false);
                setOpen(true);
            })
    }

   
    flagHandle({open, content, title})
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className="bg-slate-500 shadow-2xl  border-black w-[550px] divide-y h-auto rounded-xl">
                <h1 className='p-5 text-left font-sans text-white text-4xl '>Login</h1>
                <div>
                    <Input label={'Username'} type={'text'} onChildData={handleChildData}></Input>
                    <Input label={'Password'} type={'password'} onChildData={handleChildData}></Input>
                </div>
                <div className="w-full p-5">
                    <LoadingButton onClick={send_credential} variant='contained' loading={loading} loadingIndicator="Loading..." size="large">Login</LoadingButton>
                </div>
            </div>
        </div>
    )
}

export default Card