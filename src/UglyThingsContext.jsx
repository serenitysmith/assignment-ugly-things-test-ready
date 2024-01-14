import { useState, createContext, useEffect } from "react";
import {
  deleteThing,
  editThing,
  getAllThings,
  postData,
} from "./handlers/handlers";


// Context Creation:

// UglyThingsContext: A context created using createContext(). This context will be used to share state and functions related to "ugly things" between components.
const UglyThingsContext = createContext();

function UglyThingsContextProvider(props) {
  const [uglyThings, setUglyThings] = useState([]);



  // Uses useEffect to trigger the getAllThings function when the component mounts. This function fetches the initial data of "ugly things" from the server and updates the state.

  // on load hit db and grab ugly things
  useEffect(() => {
    getAllThings(setUglyThings);
  }, []);

  // State:
  // uglyThings: State variable to store an array of "ugly things."

  
  const createUglyThing = (formData) => {
    postData(formData, setUglyThings);
  };

  const deleteUglyThing = (id) => {
    deleteThing(id, setUglyThings);
  };

  const editUglyThing = (id, formData) => {
    editThing(id, formData, setUglyThings);
  };


//   Context Provider Component (UglyThingsContextProvider):

// This component is responsible for providing the context value and managing the state and operations related to "ugly things."
  return (
    <UglyThingsContext.Provider
      value={{ uglyThings, createUglyThing, deleteUglyThing, editUglyThing }}
    >
      {props.children}
    </UglyThingsContext.Provider>
  );
}

export { UglyThingsContext, UglyThingsContextProvider };



// Functions:
// createUglyThing(formData): Calls the postData function to create a new "ugly thing" and updates the state.
// deleteUglyThing(id): Calls the deleteThing function to delete a "ugly thing" with the specified id and updates the state.
// editUglyThing(id, formData): Calls the editThing function to edit a "ugly thing" with the specified id using the provided formData and updates the state.
// Context Provider Rendering:
// Renders the UglyThingsContext.Provider component with a value prop containing the state and functions to be shared.
// Renders props.children to include the child components that will consume this context.