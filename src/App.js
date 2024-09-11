import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [valor, setValor] = useState(1); // Valor inicial
  const [moeda, setMoeda] = useState("USD"); // Moeda de conversão
  const [taxas, setTaxas] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obterTaxas = async () => {
      try {
        const response = await axios.get(
          "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL,AUD-BRL,CAD-BRL,CHF-BRL,CNY-BRL,ARS-BRL,TRY-BRL,BTC-BRL,ETH-BRL"
        );

        const dados = response.data;

        // Extraindo as taxas de conversão corretamente
        const taxasExtraidas = {
          USD: dados.USDBRL.bid,
          EUR: dados.EURBRL.bid,
          GBP: dados.GBPBRL.bid,
          JPY: dados.JPYBRL.bid,
          AUD: dados.AUDBRL.bid,
          CAD: dados.CADBRL.bid,
          CHF: dados.CHFBRL.bid,
          CNY: dados.CNYBRL.bid,
          ARS: dados.ARSBRL.bid,
          TRY: dados.TRYBRL.bid,
          BTC: dados.BTCBRL.bid,
          ETH: dados.ETHBRL.bid,
        };
        setTaxas(taxasExtraidas);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar taxas de câmbio", error);
        setLoading(false);
      }
    };
    obterTaxas();
  }, []);

  const converter = () => {
    if (!taxas[moeda]) return "0.00";
    const resultado = valor / taxas[moeda];
    return moeda === "BTC" || moeda === "ETH"
      ? resultado.toFixed(7)
      : resultado.toFixed(2);
  };

  return (
    <div className="App">
      <div className="converter-box">
        <h1>Conversor de Moedas (BRL)</h1>
        {loading ? (
          <p>Carregando taxas de câmbio...</p>
        ) : (
          <>
            <div>
              <label>Valor em R$: </label>
              <input
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </div>
            <div>
              <label>Converter para: </label>
              <select value={moeda} onChange={(e) => setMoeda(e.target.value)}>
                <option value="USD">Dólar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="GBP">Libra (GBP)</option>
                <option value="JPY">Iene (JPY)</option>
                <option value="AUD">Dólar Australiano (AUD)</option>
                <option value="CAD">Dólar Canadense (CAD)</option>
                <option value="CHF">Franco Suíço (CHF)</option>
                <option value="CNY">Yuan Chinês (CNY)</option>
                <option value="ARS">Peso Argentino (ARS)</option>
                <option value="TRY">Lira Turca (TRY)</option>
                <option value="BTC">Bitcoin (BTC)</option>
                <option value="ETH">Ethereum (ETH)</option>
              </select>
            </div>
            <div>
              <h2>
                Resultado: {converter()} {moeda}
              </h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
