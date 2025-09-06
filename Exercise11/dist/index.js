"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const good_ByRout_1 = __importDefault(require("./routes/good.ByRout"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/hello", good_ByRout_1.default);
app.listen(5000, () => {
    console.log("service is running 5000");
});
//# sourceMappingURL=index.js.map