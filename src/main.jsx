//Import creatRoot
import { createRoot } from "react-dom/client";
//Import components
import FirstComponent from "./components/FirstComponent";
import Image from "./components/Image";
import Style from "./components/Style";

//Show components
createRoot(document.getElementById("root")).render(
    <Style />
);