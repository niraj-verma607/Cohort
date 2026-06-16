import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  function fetchData() {
    axios.get("https://cohort-8iq2.onrender.com/api/notes").then((res) => {
      console.log(res.data);
      setNotes(res.data.note);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { title, description } = e.target.elements;
    console.log(e.target.elements);

    // console.log(title.value, description.value);

    axios
      .post("https://cohort-8iq2.onrender.com/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data);

        fetchData();
      });
  }

  function handleDeleteNote(noteId) {
    axios
      .delete(`https://cohort-8iq2.onrender.com/api/notes/${noteId}`)
      .then((res) => {
        console.log(res.data);
        fetchData();
      });
  }

  function handleEdit(noteId, newDescription) {
    axios.patch(`https://cohort-8iq2.onrender.com/api/notes/${noteId}`, {
      description: newDescription,
    });

    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="note-create-form">
        <input name="title" type="text" placeholder="Enter title" required />
        <input
          name="description"
          type="text"
          placeholder="Enter description"
          required
        />
        <button type="submit">Create Note</button>
      </form>

      <div className="notes">
        {notes.map((note) => (
          <div className="note" key={note._id}>
            <h1>{note.title}</h1>
            <p>{note.description}</p>

            <div className="note-actions">
              <button
                onClick={() => {
                  const newDesc = prompt("Edit description", note.description);
                  if (newDesc) {
                    handleEdit(note._id, newDesc);
                    fetchData();
                  }
                }}
                className="edit-btn"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  handleDeleteNote(note._id);
                }}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
