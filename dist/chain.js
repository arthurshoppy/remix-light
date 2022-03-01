"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.sendTx = exports.init = exports.web3Instance = exports.EMPTY = void 0;
var remix_simulator_1 = require("@remix-project/remix-simulator");
// ugly web3 🤮
// eslint-disable-next-line @typescript-eslint/no-var-requires
var Web3 = require('web3');
exports.EMPTY = '0x';
var chain = new remix_simulator_1.Provider({ fork: 'london' });
var web3;
function web3Instance() {
    return web3;
}
exports.web3Instance = web3Instance;
function init() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, chain.init()];
                case 1:
                    _a.sent();
                    web3 = new Web3(chain);
                    (0, remix_simulator_1.extend)(web3);
                    return [2 /*return*/];
            }
        });
    });
}
exports.init = init;
function sendTx(args) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, web3.eth.sendTransaction(__assign({ data: exports.EMPTY, gasLimit: '0x2dc6c0', timestamp: Date.now() }, args))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.sendTx = sendTx;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY2hhaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrRUFBa0U7QUFJbEUsZUFBZTtBQUNmLDhEQUE4RDtBQUM5RCxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFHaEIsUUFBQSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBRTFCLElBQU0sS0FBSyxHQUFHLElBQUksMEJBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBRS9DLElBQUksSUFVRCxDQUFDO0FBQ0osU0FBZ0IsWUFBWTtJQUMxQixPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFGRCxvQ0FFQztBQUVELFNBQXNCLElBQUk7Ozs7d0JBQ3hCLHFCQUFNLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQTs7b0JBQWxCLFNBQWtCLENBQUM7b0JBQ25CLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkIsSUFBQSx3QkFBTSxFQUFDLElBQUksQ0FBQyxDQUFDOzs7OztDQUNkO0FBSkQsb0JBSUM7QUFFRCxTQUFzQixNQUFNLENBQUMsSUFFNUI7Ozs7d0JBQ1EscUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLFlBQ25DLElBQUksRUFBRSxhQUFLLEVBQ1gsUUFBUSxFQUFFLFVBQVUsRUFDcEIsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFFbEIsSUFBSSxFQUNQLEVBQUE7d0JBTkYsc0JBQU8sU0FNTCxFQUFDOzs7O0NBQ0o7QUFWRCx3QkFVQyJ9