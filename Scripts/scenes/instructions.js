var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Instructions = /** @class */ (function (_super) {
        __extends(Instructions, _super);
        // public properties
        // constructors
        function Instructions() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Instructions.prototype.Main = function () {
            this.addChild(this._background);
            this.addChild(this._panel);
            this.addChild(this._player);
            this.addChild(this._playerlbl);
            this.addChild(this._bullet);
            this.addChild(this._enemy1);
            this.addChild(this._enemy2);
            this.addChild(this._enemy3);
            this.addChild(this._enemylbl);
            this.addChild(this._meteor1);
            this.addChild(this._meteor2);
            this.addChild(this._meteorlbl);
            // adds ocean to the stage
            this.addChild(this._backButton);
            this.addChild(this._startGame);
            this.addChild(this._welcomeLabel);
            // event listeners
            // starts the play scene
            this._backButton.on("click", function () {
                managers.Game.currentState = config.Scene.START;
            });
            this._startGame.on("click", function () {
                managers.Game.currentState = config.Scene.LEVEL1;
            });
        };
        Instructions.prototype.Start = function () {
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
            this.SetupInput();
            this.Main();
        };
        Instructions.prototype.SetupInput = function () {
            document.addEventListener("keydown", managers.Input.EnterPress);
            document.addEventListener("keydown", managers.Input.GoBack);
        };
        Instructions.prototype.Update = function () {
        };
        Instructions.prototype.Reset = function () {
        };
        Instructions.prototype.Destroy = function () {
            this.removeAllChildren();
            document.removeEventListener("keydown", managers.Input.EnterPress);
            document.removeEventListener("keydown", managers.Input.GoBack);
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map