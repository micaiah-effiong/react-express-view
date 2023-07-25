"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const server_1 = __importDefault(require("react-dom/server"));
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    fs_1.default.readFile(path_1.default.resolve(__dirname, 'pages/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('An error occurred');
        }
        const a = require('./views/vercel');
        return res.end(server_1.default.renderToString(a.default({ name: 'boy', title: 'good' })));
    });
});
app.use(express_1.default.static(path_1.default.resolve(__dirname, '.', 'dist'), { maxAge: '30d' }));
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
