import React from 'react'

const Input = ({ label, type, onChildData }) => {
  const [credential, setCredential]  = React.useState(null)

  const change_value_handler = (e) =>{
    if (e.target.id === "username"){
      setCredential({username: e.target.value});
    }else{
      setCredential({password: e.target.value});
    }
    
  };
  onChildData({credential, label})
  return (
    <label className="block px-5 mb-5 font-sans">
        <span htmlFor={label.toLowerCase()} className='text-white text-sans'>{label}</span>
        <input type={type} name={label} id={label.toLowerCase()} onKeyUp={change_value_handler} className="form-input rounded mt-1 block w-full" />
    </label>
  )
}

export default Input