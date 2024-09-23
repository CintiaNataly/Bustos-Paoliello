import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import novedadesRoutes from './routes/novedadesRoutes.js'; 
import funcionesRoutes from './routes/funcionesRoutes.js';

const app = express();
const port = 3000;

const __fileName = fileURLToPath(import.meta.url);
app.use(express.json());
app.use(express.static(path.join(path.dirname(__fileName), 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(path.dirname(__fileName), 'public', 'index.html'));
})

app.use('/novedades', novedadesRoutes);
app.use('/funciones', funcionesRoutes); 

app.listen(port, () => console.log(`http://localhost:${port}`));
