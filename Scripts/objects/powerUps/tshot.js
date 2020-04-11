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
var objects;
(function (objects) {
    var TShot = /** @class */ (function (_super) {
        __extends(TShot, _super);
        // public variables
        // constructors
        function TShot() {
            var _this = _super.call(this, "tshot") || this;
            _this.Start();
            return _this;
        }
        // private methods
        TShot.prototype._move = function () {
            this.y += this._verticalSpeed;
        };
        TShot.prototype._checkBounds = function () {
            if (this.y > config.Constants.canvasHeight + this.Height) {
                this.Reset();
            }
        };
        // public methods
        // Adds a bomb to player when picked up. Max 3 bombs
        TShot.prototype.Collected = function () {
            managers.Game.player.TripleShot = true;
            this.IsInPlay = false;
        };
        TShot.prototype.Start = function () {
            this.Reset();
            _super.prototype.Start.call(this);
        };
        TShot.prototype.Update = function () {
            this._move();
            this._checkBounds();
            _super.prototype.Update.call(this);
        };
        TShot.prototype.Reset = function () {
            this.x = -10000;
            this.y = -10000;
            this._verticalSpeed = Math.floor((Math.random() * 2) + 2); // speed from 2 to 4
            _super.prototype.Reset.call(this);
        };
        TShot.prototype.Destroy = function () {
        };
        return TShot;
    }(objects.PowerUp));
    objects.TShot = TShot;
})(objects || (objects = {}));
//# sourceMappingURL=tshot.js.map