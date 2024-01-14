import { useContext, useState } from "react";
import { UglyThingsContext } from "../UglyThingsContext";

function UglyThing({ thing }) {
  // State to manage form data for the Ugly Thing
  const [uglyFormData, setUglyFormData] = useState({
    title: thing.title,
    description: thing.description,
    imgUrl: thing.imgUrl,
  });
// State to toggle between edit and view modes
  const [toggleEdit, setToggleEdit] = useState(false);
  /// Access the deleteUglyThing and editUglyThing functions from UglyThingsContext
  const { deleteUglyThing, editUglyThing } = useContext(UglyThingsContext);


  // Function to handle toggling between edit and view modes
  function handleToggleEdit() {

    // Toggle the value of toggleEdit
    // if toggle edit is true, call editUglyThing
    if (toggleEdit) {
      editUglyThing(thing._id, uglyFormData);
    }

    // change toggle edit
    setToggleEdit((prevToggleEdit) => !prevToggleEdit);
  }
// Function to handle input changes in the form
  function handleInputChange(e) {
    const { name, value } = e.target;
    setUglyFormData((prevUglyFormData) => ({
      ...prevUglyFormData,
      [name]: value,
    }));
  }

  return (
// {/* Render input for title or display title in view mode */}
    
    <div className="ugly-thing">
      {toggleEdit ? (
        <input
          name="title"
          value={uglyFormData.title}
          type="text"
          onChange={handleInputChange}
          className="ugly--input"
        />
      ) : (
        <h3>{thing.title}</h3>
      )}
{/* Render input for description or display description in view mode */}
      
      {toggleEdit ? (
        <input
          name="description"
          value={uglyFormData.description}
          type="text"
          onChange={handleInputChange}
          className="ugly--input"
        />
      ) : (
        <p>{thing.description}</p>
      )}


{/* buttons for delete, save (in edit mode), and toggle edit * */}
      <div className="buttons">
        <button onClick={() => deleteUglyThing(thing._id)} className="btn">
          Delete
        </button>
        <button onClick={handleToggleEdit} className="btn">
          {toggleEdit ? "Save" : "Edit"}
        </button>
      </div>
      {/* Display image in view mode or input for image URL in edit mode */}
      <div
        style={{ backgroundImage: `url(${thing.imgUrl})` }}
        className="ugly-thing--img"
      >
        {toggleEdit ? (
          <input
            name="imgUrl"
            value={uglyFormData.imgUrl}
            type="text"
            onChange={handleInputChange}
            className="ugly--input"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default UglyThing;
