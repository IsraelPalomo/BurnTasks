"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TaskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        require: true,
        unique: true,
    },
    description: {
        type: String,
        require: true,
        unique: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
}, { versionKey: false });
exports.default = (0, mongoose_1.model)('Task', TaskSchema);
