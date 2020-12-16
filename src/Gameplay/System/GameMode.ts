import { PlayerController } from "../Player/PlayerController";
import { Entity } from "../../Core";

export class GameMode extends Entity{
    private m_PlayerController : PlayerController;

    constructor(){
        super();
        this.m_PlayerController = new PlayerController();
    }
    
}