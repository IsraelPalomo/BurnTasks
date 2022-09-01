"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const database_1 = require("./database");
(0, database_1.StartDB)();
index_1.default.listen(3000);
const PORT = process.env.PORT || 3000;
console.log(`Server on Port ${PORT} 🔌`);
