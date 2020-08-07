import React, { useState, useRef } from 'react';
import useOnClickOutside from '../useOnClickOutside';
import { Close } from '@material-ui/icons';

const SubmitPup = props => {
  const ref = useRef();
  const [imgUrl, setImgUrl] = useState(null);
  const [input, setInput] = useState({ 
    name: '',
    dob: '',
    hometown: '',
    gender: '',
    breed: '',
    about: ''
  });

  useOnClickOutside(ref, () => {
    props.setAdderActive(false);
    document.body.style.overflow = "scroll";
  });

  const uploadFile = async event => {
    console.log('uploading file . . .');
    const files = event.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'puppyAPI');

    const response = await fetch('https://api.cloudinary.com/v1_1/robpwatkins/image/upload', {
      method: 'Post',
      body: data
    });
    const file = await response.json();
    console.log(file);
    setImgUrl(file.secure_url);
  }

  const postToPups = async input => {
    console.log(input.name);
    const response = await fetch('/pups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: input.name,
        dob: input.dob,
        hometown: input.hometown,
        gender: input.gender,
        breed: input.breed,
        about: input.about,
        img_url: imgUrl
      })
    })
    const body = await response.json();
    return body;
  }

  const handleChange = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    postToPups(input);
    window.location.replace('/');
  }
  // console.log(input.name);
  return (
    <div className="submit-pup-container" ref={ref}>
      <Close className="submit-pup-closer" fontSize="small" />
      <form className="submit-pup" onSubmit={handleSubmit}>
        <fieldset /* disabled={loading} aria-busy={loading} */>
          {!imgUrl &&
            <input 
            type="file" 
            id="file" 
            name="file" 
            placeholder="Upload an image" 
            required 
            onChange={uploadFile}
          />}
          {imgUrl &&
            <div className="img-preview">
            {imgUrl && <img width="200" src={imgUrl} alt="Upload Preview" />}
          </div>}
          <br />
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Name" 
            required 
            value={input.name ? input.name : ''}
            onChange={handleChange}
            autoComplete="off"
            />
          <br />
          <input 
            type="text" 
            id="DOB" 
            name="dob" 
            placeholder="Date of birth" 
            required 
            value={input.dob ? input.dob : ''}
            onChange={handleChange}
            autoComplete="off"
            />
          <br />
          <input 
            type="text" 
            id="hometown" 
            name="hometown" 
            placeholder="Hometown" 
            required 
            value={input.hometown ? input.hometown : ''}
            onChange={handleChange}
            autoComplete="off"
            />
          <br />
          <input 
            type="text" 
            id="gender" 
            name="gender" 
            placeholder="Gender" 
            required 
            value={input.gender ? input.gender : ''}
            onChange={handleChange}
            autoComplete="off"
            />
          <br />
          <input 
            type="text" 
            id="breed" 
            name="breed" 
            placeholder="Breed" 
            required 
            value={input.breed ? input.breed : ''}
            onChange={handleChange}
            autoComplete="off"
            />
          <br />
          <textarea 
            rows="3"
            type="text" 
            id="about" 
            name="about" 
            placeholder="One or two sentences about your pup." 
            required 
            value={input.about ? input.about : ''}
            onChange={handleChange}
            autoComplete="off"
            />
          <br />
          <button type="submit">SUBMIT</button>
        </fieldset>
      </form>
    </div>
  )
}

export default SubmitPup;