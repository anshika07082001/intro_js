import { FlexChild, FlexLayout } from "@cedcommerce/ounce-ui";
import "./App.css";
import BodyComp from "./components/BodyComp";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Hints, Steps } from "intro.js-react";
import { useState } from "react";
import "intro.js/introjs.css";

function App() {
  const step = [
    { title: "Intro", intro: "Let's Get Started with ounce Components!!" },
    {
      element: ".inte__Topbar--Inner",
      intro: "Ounce Topbar component is used here.",
    },
    {
      element: ".inte__SidebarItems ",
      intro: "ounce sidebar component is used",
    },
    { element: ".inte-Grid", intro: "ounce grid component is used" },
    { element: ".inte-btn--Primary", intro: "ounce button component is used" },
    { title: "Intro", intro: "Completed Steps!!" },
  ];
  const [state, setState] = useState({
    initialStep: 0,
    stepsEnabled: true,
    steps: step,
    hints: [
      {
        element: ".hello",
        hint: "Hello hint",
        hintPosition: "middle-right",
      },
    ],
  });
  return (
    <>
      <Steps
        initialStep={state.initialStep}
        onExit={() => ""}
        steps={state.steps}
        enabled={state.stepsEnabled}
        options={{ doneLabel: "Completed" }}
      />
      <Hints hints={state.hints} />
      <Navbar />
      <FlexLayout>
        <FlexChild desktopWidth="20">
          <Sidebar />
        </FlexChild>
        <FlexChild desktopWidth="80">
          <BodyComp />
        </FlexChild>
      </FlexLayout>
    </>
  );
}

export default App;
