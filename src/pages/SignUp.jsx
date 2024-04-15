import React, { useState } from "react";
import { register, loginWithGithub } from '../api/firebase';
import { uploadImage } from "../api/cloudinary";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [userInfo, setUserInfo] = useState({email:'', password:'', name:'', photo:''});
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const handleChange = e => {
    setUserInfo({...userInfo, [e.target.name]: e.target.value});
  }
  const handleSubmit = e => {
    e.preventDefault();
    register(userInfo);
    navigate('/signIn');
  }
  const handleGithub = e => {
    loginWithGithub();
    navigate(-1);
  }
  const handleUpload = e => {
    setFile(e.target.files[0]);
    uploadImage(e.target.files[0])
      .then(url => setUserInfo({...userInfo, ['photo']: url}));
  }
  

  return(
    <div style={{margin: '20px'}}>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={userInfo.email} placeholder="메일"
          onChange={handleChange} /><br />
        <input type="password" name="password" value={userInfo.password} placeholder="암호"
          onChange={handleChange} /><br />
        <input type="text" name="name" value={userInfo.name} placeholder="이름"
          onChange={handleChange} /><br />
        <input type="file" accept="image/*" name="file" onChange={handleUpload} /><br />
        <button onClick={handleSubmit}>사용자 등록</button>
      </form><br />
      <span>계정은?</span>
      <Link to='/signIn'>사용자 등록</Link><br /><br />
      <button onClick={handleGithub}>Github 로그인</button>
      <br /><br />
      {/* {user && <p>accessToken={user.accessToken}</p>}
      {user && <p>email={user.email}</p>}
      {user && <p>uid={user.uid}</p>}
      {user && user.displayName && <p>displayName={user.displayName}</p>}
      {user && user.photoURL && (
        <img src={user.photoURL} alt={user.displayName} width={200} />
      )} */}
    </div>
  )
}