"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Taks_1 = __importDefault(require("../models/Taks"));
const router = (0, express_1.Router)();
router.get('/task', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield Taks_1.default.find();
    res.send(task);
}));
router.post('/task', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    const task = new Taks_1.default({ title, description });
    yield task.save();
    res.json(task);
}));
router.get('/task/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Taks_1.default.findById(req.params.id);
        res.send(task);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
router.delete('/task/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Taks_1.default.findByIdAndDelete(req.params.id);
        res.json(task);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
router.put('/task/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Taks_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(task);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
exports.default = router;
