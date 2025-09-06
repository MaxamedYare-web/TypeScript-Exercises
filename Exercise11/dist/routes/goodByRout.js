"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const goodByControls_1 = require("../controllers/goodByControls");
const router = express_1.default.Router();
router.get("/", goodByControls_1.sayGoodBye);
exports.default = router;
//# sourceMappingURL=goodByRout.js.map