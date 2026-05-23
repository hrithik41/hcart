"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard = async (req, res) => {
    try {
        const user = req.user;
        return res.status(200).json({ message: "Dashboard", user });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Failed to get user' });
    }
};
exports.default = dashboard;
