module scenes{
    export class Instructions extends objects.Scene{
        // private instance variables
        
        private _background:objects.Background;
        private _backButton:objects.Button;
        private _startGame:objects.Button;
        private _playerlbl:objects.Label;
        private _enemylbl:objects.Label;
        private _meteorlbl:objects.Label;
        private _bomblbl:objects.Label;

        private _welcomeLabel:objects.Label;
        private _player:objects.BitmapGameObject;
        private _bullet:objects.BitmapGameObject;
        private _enemy1:objects.BitmapGameObject;
        private _enemy2:objects.BitmapGameObject;
        private _enemy3:objects.BitmapGameObject;
        private _meteor1:objects.BitmapGameObject;
        private _meteor2:objects.BitmapGameObject;
        private _meteor3:objects.BitmapGameObject;
        private _bomb:objects.BitmapGameObject; 
        private _panel:objects.Board;

        // public properties

        // constructors

        constructor() {
            super();

            this.Start();
        }

        // private methods


        // public methods

        public Main(): void {
            
            this.addChild(this._background);
            this.addChild(this._panel);
            this.addChild(this._player);
            this.addChild(this._playerlbl);

            this.addChild(this._bullet);
            this.addChild(this._enemy1);
            this.addChild(this._enemy2);
            this.addChild(this._enemy3);
            this.addChild(this._enemylbl);

            this.addChild(this._bomb);   //add bombs
            this.addChild(this._bomblbl);//add bombs label

            this.addChild(this._meteor1); //Water add life lv 1
            this.addChild(this._meteor2); //Meteorite add life lv 2
            this.addChild(this._meteor3); //Heart add life lv 3
            this.addChild(this._meteorlbl);

            // adds ocean to the stage
            this.addChild(this._backButton);
            this.addChild(this._startGame);
            this.addChild(this._welcomeLabel);

            // event listeners

            // starts the play scene
            this._backButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.START;
            })
            this._startGame.on("click", ()=>{
                managers.Game.currentState = config.Scene.LEVEL1;
            })
        }        
        public Start(): void {
            // Instantiates objects
            // TODO Change string when back button added
            this._welcomeLabel = new objects.Label("Galaxy Guardian", "37px", "fantasy", "#FFFF00", 775, 70, true);
            this._backButton = new objects.Button("menuButton", 780, 235, true);
            this._startGame = new objects.Button("startButton", 780, 385, true);
            this._background = new objects.Background("instructionsBackground");
            this._panel = new objects.Board("panel", config.Constants.verticalPlaySpeed);
            this._player = new objects.BitmapGameObject("player");
            this._player.x = 20;
            this._player.y = 20;
            this._playerlbl = new objects.Label("Use your arrows or W,A,S,D to move your ship, and Spacebar or left click to shoot", "20px", "planet", "#FFFF00", 90, 40, false, 350);

            this._bullet = new objects.BitmapGameObject("bullet");
            this._bullet.x = 50;
            this._bullet.y = 190;
            this._enemy1 = new objects.BitmapGameObject("enemyLvl01_01");
            this._enemy1.x = 100;
            this._enemy1.y = 160;
            this._enemy2 = new objects.BitmapGameObject("enemies");
            this._enemy2.x = 100;
            this._enemy2.y = 95;
            this._enemy3 = new objects.BitmapGameObject("enemyLvl03_01");
            this._enemy3.x = 30;
            this._enemy3.y = 110;
            this._enemylbl = new objects.Label("Colliding with enemies and bullets makes you lose a life", "20px", "planet", "#FFFF00", 190, 130, false, 350);
                        
            this._bomb = new objects.BitmapGameObject("bomb");
            this._bomb.x = 40;
            this._bomb.y = 230;
            this._bomblbl = new objects.Label("Collect bomb then Press B to activate bomb to destroy enemy bullets.", "20px", "planet", "#FFFF00", 85, 230, false, 350);
            
            this._meteor1 = new objects.BitmapGameObject("meteorite");
            this._meteor1.x = 90;
            this._meteor1.y = 320;
            this._meteor2 = new objects.BitmapGameObject("water");
            this._meteor2.x = 10;
            this._meteor2.y = 300;
            this._meteor3 = new objects.BitmapGameObject("life");
            this._meteor3.x = 160;
            this._meteor3.y = 310;
            this._meteorlbl = new objects.Label("Collect Water/Meteorite/Heart to gain lives and points", "20px", "planet", "#FFFF00", 290, 320, false, 350);
            
            this.SetupInput();
            this.Main();
        }
        public SetupInput(): void {
            document.addEventListener("keydown", managers.Input.EnterPress);
            document.addEventListener("keydown", managers.Input.GoBack);
        }
        
        public Update(): void {

        }
        public Reset(): void {
            
        }
        public Destroy(): void {
            this.removeAllChildren();
            document.removeEventListener("keydown", managers.Input.EnterPress);
            document.removeEventListener("keydown", managers.Input.GoBack);
        }


    }
}