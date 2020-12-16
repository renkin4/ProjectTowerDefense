import { Vector3 } from "@babylonjs/core";
import { IGameObject } from "../System/GameScene";

abstract class Entity implements IGameObject{
    public position: Vector3;
    public rotation: Vector3;
    public scale: Vector3;

    constructor(){
        this.position = new Vector3();
        this.rotation = new Vector3();
        this.scale = new Vector3();
    }
    
    OnRegistered(): void {}
    BeforeRender(delta: number): void {}
    AfterRender(delta: number): void {}
    Update(delta: number): void {}
}

export { Entity , IGameObject }