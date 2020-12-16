import { Vector3 } from "@babylonjs/core";
import { GameScene, IGameObject } from "../System/GameScene";

abstract class Entity implements IGameObject{
    public position: Vector3;
    public rotation: Vector3;
    public scale: Vector3;

    constructor(){
        this.position = new Vector3();
        this.rotation = new Vector3();
        this.scale = new Vector3();
        
        this.RegisterToScene();
    }

    Dispose(): void {}
    OnRegistered(): void {}
    BeforeRender(delta: number): void {}
    AfterRender(delta: number): void {}
    Update(delta: number): void {}

    RegisterToScene() :void {
        GameScene.instance.RegisterGameObject(this);
    }
}

export { Entity , IGameObject }