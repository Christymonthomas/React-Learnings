import Accordion from "./Components/Accordion";

function App() {
  const items = [
    {
      id: 1,
      label: "Can I use React on a project?",
      content:
        "You can use React on any project u want.You can use React on any project u want..You can use React on any project u want.",
    },
    {
      id: 2,
      label: "Can I use Javascript on a project?",
      content:
        "You can use React on any project u want.You can use React on any project u want.",
    },
    {
      id: 3,
      label: "Can I use CSS on a project?",
      content: "You can use React on any project u want.",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
