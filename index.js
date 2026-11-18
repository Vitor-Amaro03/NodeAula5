import express from 'express';
import calcularDobro from './calculo.js';

const app = express();
const port = 3000;

app.use (express.static('public'));

app.listen(port, () => {
    console.log(`Projeto rodando em https://localhost:${port}`);
})

app.get('/dobro', (req, res) => {
    const numeroFrontEnd = Number(req.query.valor);
    const resultado = calcularDobro(numeroFrontEnd);
    const resultadoDobro = calcularDobro(numeroFrontEnd);
    res.json({ dobro: resultadoDobro, numeroEnviado: numeroFrontEnd });
});