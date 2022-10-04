import { Button, TextField } from "@mui/material";
import * as React from "react";
import { useState } from "react";

export default function NoteForm() {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSave = { title, description };
    if (title && description) {
      console.log(dataToSave);
      setTitle([]);
      setDescription("");
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: dataToSave.title, description: dataToSave.description }),
    };
    fetch("https://llfixidlgb.execute-api.us-east-1.amazonaws.com/dev/", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <form sx={{ m: 2 }} onSubmit={handleSubmit}>
      <TextField
        label="Title goes here"
        variant="outlined"
        fullWidth
        sx={{ m: 2 }}
        onChange={(e) => setTitle(e.target.value)}
        required
        value={title}
      />
      <TextField
        label="Description goes here"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        sx={{ m: 2 }}
        onChange={(e) => setDescription(e.target.value)}
        required
        value={description}
      />
      <Button variant="contained" type="submit" sx={{ m: 2 }}>
        Create Note
      </Button>
    </form>
  );
}
