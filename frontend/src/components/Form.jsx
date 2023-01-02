import axios from "axios";
import { useRef } from "react";

export default function Form() {
  const inputRef = useRef();
  const hSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);

    axios.post("http://localhost:5001/api/avatar", formData);
  };

  return (
    <form encType="multipart/form-data" onSubmit={hSubmit}>
      <input type="file" name="avatar" ref={inputRef} />
      <button type="submit">Envoyer</button>
    </form>
  );
}
