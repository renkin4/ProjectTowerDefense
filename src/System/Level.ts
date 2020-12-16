import { GameMode } from "../Gameplay/System/GameMode";

class Level{
    private m_GameMode : GameMode;

    public get gameMode() : GameMode { return this.gameMode; }

    /**
     *
     */
    constructor() {
        this.m_GameMode = new GameMode();
    }

}


export {Level};