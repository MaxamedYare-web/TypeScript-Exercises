"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const goodBy_Controls_1 = require("../controllers/goodBy.Controls");
const router = express_1.default.Router();
router.get("/", goodBy_Controls_1.sayGoodBye);
exports.default = router;
//# sourceMappingURL=good.ByRout.js.map