import { useContext, useState } from "react";
import { UglyThingsContext } from "../UglyThingsContext";
// Access the createUglyThing function from the UglyThingsContext
function Form() {
  const { createUglyThing } = useContext(UglyThingsContext);
  
  
  //State to store form data with default values
  const [formData, setFormData] = useState({
    title: "",
    // Generating a random image URL using the picsum.photos service
    img: `https://picsum.photos/seed/${Math.floor(Math.random() * 99)}/200/200`,
    description: "",
  });
 
 
  // Handle input changes and update the formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


   // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    createUglyThing(formData);


    // Call the createUglyThing function from the context with the formData
    setFormData({
      title: "",
      img: "",
      description: "",
    });
  };

  return (
    <>
    {/* Form for creating an Ugly Thing */}
      <form onSubmit={handleSubmit} className="create--ugly">
        <h2>Create an Ugly Thing!</h2>
        <div className="inputs">

           {/* Input for the title */}
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            //  {/* Input for the image URL (with default random image) */}

            type="text"
            name="img"
            id="img"
            placeholder="Image"
            value={formData.img}
            onChange={handleChange}
          />
          <input
            //  {/* Input for the image URL (with default random image) */}
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* Submit button */}
        <button className="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
