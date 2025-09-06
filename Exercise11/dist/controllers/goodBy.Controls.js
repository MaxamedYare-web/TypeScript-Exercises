"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayGoodBye = void 0;
const sayGoodBye = (req, res) => {
    const name = req.query.name;
    if (!name) {
        return res.status(400).json({
            message: "query 'name' must be string",
        });
    }
    return res.status(200).json({
        firewell: `GoodBye ${name}`,
    });
};
exports.sayGoodBye = sayGoodBye;
//# sourceMappingURL=goodBy.Controls.js.map