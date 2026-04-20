//Import creatRoot
import { createRoot } from "react-dom/client";
//Import components
import FirstComponent from "./components/FirstComponent";
import Image from "./components/Image";

//Show components
createRoot(document.getElementById("root")).render(
    <Image />
);