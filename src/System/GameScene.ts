import { Engine, Scene, SceneOptions, Vector3 } from "@babylonjs/core";

interface IGameObject {
    position: Vector3;
    rotation: Vector3;
    scale: Vector3;

    OnRegistered(): void;
    BeforeRender(delta: number): void;
    AfterRender(delta: number): void;
    Update(delta: number): void;
}

/**
 * This class is to handle the Scene of Game
 * This class will also handle Every gameobject's Update
 */
class GameScene extends Scene {
    private m_GameObjects: IGameObject[];
    private static s_Instance: GameScene;

    public static get instance() { return GameScene.s_Instance; }

    constructor(engine: Engine, options?: SceneOptions) {
        super(engine, options);

        if (GameScene.s_Instance == null) {
            GameScene.s_Instance = this;
        } else {
            throw new Error("Erm Please don't instantiate this class anymore");
        }

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