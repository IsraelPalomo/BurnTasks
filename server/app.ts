import express from 'express';

const app = express();

app.listen(3000);
const PORT = process.env.PORT || 3000;

console.log(`Server on Port ${PORT} 🔌`);
