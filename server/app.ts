import app from './index';
import { StartDB } from './database';

StartDB();
app.listen(3000);
const PORT = process.env.PORT || 3000;
console.log(`Server on Port ${PORT} 🔌`);
