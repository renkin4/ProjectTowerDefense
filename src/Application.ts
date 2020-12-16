import { Engine } from "@babylonjs/core";
import { GameScene } from "./System/GameScene";

export class Application {
    private m_Engine : Engine;
    private m_Scene : GameScene;
    
    constructor(canvas : HTMLCanvasElement){
        this.m_Engine = new Engine(canvas);
        this.m_Scene = new GameScene(this.m_Engine);

        this.UpdateTicks();
    }

    private UpdateTicks() :void{
        // Render every frame
        this.m_Engine.runRenderLoop(() => {
            let deltaTime: number = (1 / this.m_Engine.getFps());
            this.m_Scene.Update(deltaTime);
            this.m_Scene.render();
        });

        // the canvas/window resize event handler
        window.addEventListener('resize', (event) => {
            this.m_Scene.OnResizeWindow(window?.innerWidth ?? 0, window?.innerHeight ?? 0);
            this.m_Engine.resize();
        });
    }
}