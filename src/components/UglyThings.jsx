import { useContext } from "react";
import UglyThing from "./UglyThing";
import { UglyThingsContext } from "../UglyThingsContext";

function UglyThings() {

  // Access the uglyThings array from UglyThingsContext
  const { uglyThings } = useContext(UglyThingsContext);


  // map through uglythigns array and create ugly thigns components for each item 
  const uglyThingsJsx = uglyThings.map((thing) => (
    <UglyThing key={thing._id} thing={thing} />
  ));

  return (
    <>

    {/* Heading for the Ugly Things section */}
      <div className="heading">
        <h2>My Ugly Things</h2>
      </div>

      {/* Container to display UglyThing components or a message if no items exist */}
      <div className="ugly-things--container">

        {/* Check if there are any uglyThings */}
        {uglyThingsJsx.length > 0
          ? uglyThingsJsx
          : "Create ugly things with the form above!"}
      </div>
    </>
  );
}

export default UglyThings;
