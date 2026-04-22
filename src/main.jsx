//Import creatRoot
import { createRoot } from "react-dom/client";
//Import components
import FirstComponent from "./components/FirstComponent";
import Image from "./components/Image";
import Style from "./components/Style";
import Conditional from "./components/Conditional";
import Choice from "./components/Choice";
import Listing from "./components/Listing";
import Events from "./components/Events";
import Functions from "./components/Functions";
import State from "./components/State";
import Container from "./components/Container";

//Show components
createRoot(document.getElementById("root")).render(
    <Container />
);