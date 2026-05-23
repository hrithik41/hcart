"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const prisma_1 = __importDefault(require("../lib/prisma"));
const jwt_1 = require("../utils/jwt");
const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Authorization header is required' });
        }
        const token = authHeader.split(' ')[1];
        const decodedToken = (0, jwt_1.verifyAccessRefreshToken)(token, "access");
        const user = await prisma_1.default.user.findUnique({ where: { id: decodedToken.id } });
        if (!user) {
            return res.status(401).json({ error: 'User no longer exists' });
        }
        req.userId = decodedToken.id;
        req.user = user;
        next();
    }
    catch (error) {
        console.log("PS=>", error);
        return res.status(401).json({ error: 'Failed to authenticate user' });
    }
};
exports.authMiddleware = authMiddleware;
