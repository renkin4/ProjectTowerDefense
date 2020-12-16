import { Engine, Scene, FreeCamera, Vector3, HemisphericLight, Mesh } from "@babylonjs/core";

export class Application {
    private m_Engine : Engine;
    private m_Scene : Scene;
    
    constructor(canvas : HTMLCanvasElement){
        this.m_Engine = new Engine(canvas);
        this.m_Scene = new Scene(this.m_Engine);

        let camera = new FreeCamera("camera1", new Vector3(0,5,-10), this.m_Scene);
        camera.setTarget(Vector3.Zero());
        camera.attachControl(canvas, true);

        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new HemisphericLight("light1", new Vector3(0, 1, 0), this.m_Scene);
        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;
        
        // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
        var sphere = Mesh.CreateSphere("sphere1", 16, 2, this.m_Scene);

        // Render every frame
        this.m_Engine.runRenderLoop(() => {
            this.m_Scene.render();
        });
    }
}