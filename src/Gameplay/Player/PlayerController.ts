import { ArcRotateCamera, Camera, Vector3 } from "@babylonjs/core";
import { Entity } from "../../Core";
import { GameScene } from "../../System/GameScene";

export class PlayerController extends Entity { 
    private m_Camera : Camera;

    /**
     *
     */
    constructor() {
        super();
        const gameScene = GameScene.instance;

        this.m_Camera = new ArcRotateCamera("Camera",0,  Math.PI / 2, 5, Vector3.Zero(), gameScene);
        this.m_Camera.attachControl(gameScene.canvas, true);
    }


}