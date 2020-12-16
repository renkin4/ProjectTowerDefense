import { Engine, Scene } from "@babylonjs/core";

export class Application {
    private m_Engine : Engine;
    private m_Scene : Scene;
    
    constructor(canvas : HTMLCanvasElement){
        this.m_Engine = new Engine(canvas);
        this.m_Scene = new Scene(this.m_Engine);

        // Render every frame
        this.m_Engine.runRenderLoop(() => {
            this.m_Scene.render();
        });
    }
}