import React, { useState } from "react";

function CreateArea(props) {
  const [titleText, setTitleText] = useState("");
  const [noteText, setNoteText] = useState("");

  function handleTitle(event) {
    setTitleText(event.target.value);
  }

  function handleNoteText(event) {
    setNoteText(event.target.value);
  }

  function addNote(event) {
    event.preventDefault(); // Prevents form submission from refreshing the page
    props.onAdd(titleText, noteText);
    setTitleText("");
    setNoteText("");
  }

  return (
    <div>
      <form>
        <input
          onChange={handleTitle}
          value={titleText}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleNoteText}
          value={noteText}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
