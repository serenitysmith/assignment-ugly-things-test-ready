import { useState } from "react";
import Form from "./components/Form";
import UglyThings from "./components/UglyThings";
import { UglyThingsContextProvider } from "./UglyThingsContext";

// IMAGE -- https://picsum.photos/200/300

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UglyThingsContextProvider>
        <Form />
        <UglyThings />
      </UglyThingsContextProvider>
    </>
  );
}

export default App;
// npm run dev