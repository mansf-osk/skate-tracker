import { useState } from "react";
import { apiPostTrick } from "../api/ApiFunctions";

const INITIAL_STATE = {
  type: "flip",
  name: "",
  difficulty: "easy",
  clip: "",
  learned: false,
};

function AddTrick() {
  const [form, setForm] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckbox = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.checked,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let endpoint = "";

    if (form.type === "flip") {
      endpoint = "/v1/flips";
    };
    if (form.type === "gs") {
      endpoint = "/v1/grinds-and-slides";
    };

    console.log(form)
    apiPostTrick(endpoint, form)
      .catch((error) => {
        console.log("Error fetching data: ", error);
      })

    setForm(INITIAL_STATE);
  };

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

        <label htmlFor="clip">Clip link:
          <span className="info">&#9432;
            <span className="tooltip">
              <p>It is recommended to use Youtube embedded links!</p>
              <p>e.g. youtube.com/embed/ABCDEFG</p>
              <p>(with ABCDEFG being the video ID like in https://www.youtube.com/watch?v=ABCDEFG)</p>
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
