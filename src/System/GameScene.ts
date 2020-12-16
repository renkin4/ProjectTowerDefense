import { Engine, Scene, SceneOptions, Vector3 } from "@babylonjs/core";
import { Level } from "./Level";

interface IGameObject {
    position: Vector3;
    rotation: Vector3;
    scale: Vector3;

    OnRegistered(): void;
    BeforeRender(delta: number): void;
    AfterRender(delta: number): void;
    Update(delta: number): void;
    Dispose() : void;
}

/**
 * This class is to handle the Scene of Game
 * This class will also handle Every gameobject's Update
 */
class GameScene extends Scene {
    private m_GameObjects: IGameObject[];
    private static s_Instance: GameScene;

    public static get instance(): GameScene { return GameScene.s_Instance; }

    private m_Canvas : HTMLCanvasElement;
    public get canvas() : HTMLCanvasElement { return this.m_Canvas; }

    private m_Level : Level;
    public get level() :Level { return this.m_Level; }

    constructor(engine: Engine, canvas : HTMLCanvasElement, options?: SceneOptions) {
        super(engine, options);
        
        this.m_Canvas = canvas;

        if (GameScene.s_Instance == null) {
            GameScene.s_Instance = this;
        } else {
            throw new Error("Erm Please don't instantiate this class anymore");
        }

        this.m_Level = new Level();

        this.m_GameObjects = [];
        this.Init();
    }

    private Init(): void {
        this.registerBeforeRender(() => {
            let deltaTime: number = (1 / this.getEngine().getFps());

            for (let i = 0; i < (this.m_GameObjects?.length ?? 0); ++i) {
                const element = this.m_GameObjects[i];

                element.BeforeRender(deltaTime);
            }
        });

        this.registerAfterRender(() => {
            let deltaTime: number = (1 / this.getEngine().getFps());

            for (let i = 0; i < (this.m_GameObjects?.length ?? 0); ++i) {
                const element = this.m_GameObjects[i];

                element.AfterRender(deltaTime);
            }
        });
    }

    public RegisterGameObject(gameObject: IGameObject) {
        this.m_GameObjects.push(gameObject);
        gameObject.OnRegistered();
    }

    public Update(delta: number): void {
        for (let i = 0; i < (this.m_GameObjects?.length ?? 0); ++i) {
            const element = this.m_GameObjects[i];

            element.Update(delta);
        }
    }

    public OnResizeWindow(innerWidth: number, innerHeight: number): void {
        // console.log(innerWidth, innerHeight);
    }
}

export { IGameObject, GameScene }