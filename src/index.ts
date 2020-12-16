import { Application } from "./Application";

window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("renderCanvas");
    let app = new Application(<HTMLCanvasElement>canvas);
});