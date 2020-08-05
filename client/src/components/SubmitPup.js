import React, { useState, useRef } from 'react';
import useOnClickOutside from '../useOnClickOutside';

const SubmitPup = props => {
  const ref = useRef();
  const [imgUrl, setImgUrl] = useState(null);
  const [input, setInput] = useState({ 
    name: '',
    dob: '',
    hometown: '',
    about: ''
  });

  useOnClickOutside(ref, () => {
    props.setAdderActive(false);
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

  const postToPups = async (name, imgUrl) => {
    const response = await fetch('/pups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        img_url: imgUrl
      })
    })
    const body = await response.json();
    return body;
  }

  const handleChange = event => {
    setInput({ ...input, name: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    let { name } = input;
    postToPups(name, imgUrl);
    window.location.replace('/');
  }
  // console.log(input.name);
  return (
    <div className="submit-pup-container" ref={ref}>
      <form className="submit-pup" onSubmit={handleSubmit}>
        <fieldset /* disabled={loading} aria-busy={loading} */>
          <input 
            type="file" 
            id="file" 
            name="file" 
            placeholder="Upload an image" 
            required 
            onChange={uploadFile}
          />
          <div className="img-preview">
            {imgUrl && <img width="200" src={imgUrl} alt="Upload Preview" />}
          </div>
          <br />
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Name" 
            required 
            value={input.name ? input.name : ''}
            onChange={handleChange}
          />
          <br />
          <input 
            type="number" 
            id="DOB" 
            name="DOB" 
            placeholder="Date of birth" 
            required 
            value={input.dob ? input.dob : ''}
            onChange={handleChange}
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
          />
          <br />
          <textarea 
            type="text" 
            id="about" 
            name="about" 
            placeholder="Tell us about your pup . . ." 
            required 
            value={input.about ? input.about : ''}
            onChange={handleChange}
          />
          <br />
          <button type="submit">SUBMIT</button>
        </fieldset>
      </form>
    </div>
  )
}

export default SubmitPup;