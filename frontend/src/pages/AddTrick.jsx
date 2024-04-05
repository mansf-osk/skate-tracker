import { useState } from "react";
import { apiPostTrick } from "../api/ApiFunctions";

// Initial form state
const INITIAL_STATE = {
  type: "flip",
  name: "",
  difficulty: "easy",
  clip: "",
  learned: false,
};

// Handles the form for adding a trick.
// Manages state for when the form is submitted.
function AddTrick() {
  const [form, setForm] = useState(INITIAL_STATE);

  // Writes form values to form variable
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // Writes checkbox state to form variable
  const handleCheckbox = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.checked,
    });
  }

  // Handles form submission by calling the respecting POST endpoint and resetting the form to initial state.
  const handleSubmit = (event) => {
    event.preventDefault();

    let endpoint = "";

    if (form.type === "flip") {
      endpoint = "/v1/flips";
    };
    if (form.type === "gs") {
      endpoint = "/v1/grinds-and-slides";
    };

    apiPostTrick(endpoint, form)
      .catch((error) => {
        console.log("Error fetching data: ", error);
      })

    setForm(INITIAL_STATE);
  };

  // HTML for the form.
  return (
    <>
      <h2>Add a new trick by filling the form below!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="select-type">Select type of trick:</label>
        <select id="select-type" name="type" value={form.type} onChange={handleChange}>
          <option value="flip">Flip Trick</option>
          <option value="gs">Grind or Slide</option>
        </select>
        <br />

        <label htmlFor="name">Trick name:</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
        <br />

        <label htmlFor="select-difficulty">Select difficulty:</label>
        <select id="select-difficulty" name="difficulty" value={form.difficulty} onChange={handleChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <br />

        <label htmlFor="clip">Youtube clip ID:
          <span className="info">&#9432;
            <span className="tooltip">
              <p>Please input the youtube video ID.</p>
              <p>e.g. for the video at <br />
                https://www.youtube.com/watch?v=AbCDeFG <br />
                enter AbCDeFG</p>
            </span>
          </span>
        </label>
        <input type="text" id="clip" name="clip" value={form.clip} onChange={handleChange} />
        <br />

        <label className="checkbox" htmlFor="learned">Have you learned the trick?</label>
        <input type="checkbox" id="learned" name="learned" checked={form.learned} onChange={handleCheckbox} />
        <br />

        <button type="submit">Add new trick!</button>
      </form>
    </>
  );
};

export default AddTrick;
