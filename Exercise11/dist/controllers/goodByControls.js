"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayGoodBye = void 0;
const sayGoodBye = (req, res) => {
    const name = req.query.name;
    res.status(200).json({
        message: `you query is ${name}`
    });
};
exports.sayGoodBye = sayGoodBye;
//# sourceMappingURL=goodByControls.js.map