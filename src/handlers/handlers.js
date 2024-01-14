import axios from "axios";

const url = "https://api.vschool.io/SerenitySmith/thing";


//  Fetches all "things" from the API and updates the state using setUglyThings.
export const getAllThings = async (setUglyThings) => {
  const res = await axios.get(url);
  // set ugly things to the res.data value (array of ugly things)
  console.log(res);
  setUglyThings(res.data);
};


// Edits a specific "thing" identified by its id with the provided formData and updates the state.

export const editThing = async (id, formData, setUglyThings) => {
  const res = await axios.put(`${url}/${id}`, formData);

  if (res.status === 200) {
    getAllThings(setUglyThings);
  } else {
    alert("Unable to update thing");
  }
};

// Deletes a specific "thing" identified by its id and updates the state.
// Steps:

export const deleteThing = async (id, setUglyThings) => {
  const res = await axios.delete(`${url}/${id}`);

  if (res.status === 200) {
    // If successful getAllThings to keep state in sync with db
    getAllThings(setUglyThings);
  } else {
    // Error handling
    alert("Unable to delete thing");
  }
};




// Purpose: Posts new data (a new "ugly thing") to the API and updates the state.

export const postData = async (formData, setUglyThings) => {
  const data = {
    title: formData.title,
    description: formData.description,
    imgUrl: formData.img,
  };
  // post new data to API
  const res = await axios.post(url, data);

  if (res.status === 200) {
    // If successful getAllThings to keep state in sync with db
    getAllThings(setUglyThings);
  } else {
    // Error handling
    alert("Error creating Ugly Thing");
  }
};
// these functions encapsulate common CRUD (Create, Read, Update, Delete) operations for interacting with the API endpoint specified by the url. They are designed to update the state (setUglyThings) based on the results of the API requests.