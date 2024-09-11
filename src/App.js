import React, { useState, useEffect } from "react"; 
import axios from "axios"; 
import "./App.css"; 

function App() {
  // Estados iniciais: valor a ser convertido e moeda selecionada
  const [valor, setValor] = useState(1);  // Estado para o valor inserido pelo usuário
  const [moeda, setMoeda] = useState("USD"); // Estado para a moeda selecionada
  const [taxas, setTaxas] = useState({}); // Estado para armazenar as taxas de câmbio
  const [loading, setLoading] = useState(true); // Estado para gerenciar o carregamento da API

  // useEffect para buscar as taxas de câmbio na primeira renderização do componente
  useEffect(() => {
    const obterTaxas = async () => {
      try {
        const response = await axios.get(
          // API que retorna as cotações das moedas
          "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,JPY-BRL,AUD-BRL,CAD-BRL,CHF-BRL,CNY-BRL,ARS-BRL,TRY-BRL,BTC-BRL,ETH-BRL"
        );

        const dados = response.data;

        // Extração das taxas de conversão para as moedas relevantes
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
        setTaxas(taxasExtraidas); // Atualiza o estado com as taxas obtidas
        setLoading(false); // Remove o estado de carregamento
      } catch (error) {
        console.error("Erro ao buscar taxas de câmbio", error); // Captura erros na requisição
        setLoading(false); 
      }
    };

    obterTaxas(); // Chama a função assim que o componente é montado
  }, []);

  // Função que realiza a conversão da moeda
  const converter = () => {
    if (!taxas[moeda]) return "0.00"; // Verifica se a moeda selecionada tem taxa válida
    const resultado = valor / taxas[moeda]; // Realiza a conversão
    // Ajusta o número de casas decimais dependendo da moeda
    return moeda === "BTC" || moeda === "ETH" ? resultado.toFixed(7) : resultado.toFixed(2);
  };

  return (
    <div className="App">
      <div className="converter-box">
        <h1>Conversor de Moedas (BRL)</h1>
        {loading ? (
          <p>Carregando taxas de câmbio...</p> // Mostra mensagem de carregamento enquanto espera pela API
        ) : (
          <>
            {/* Input para valor em reais */}
            <div>
              <label>Valor em R$: </label>
              <input
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </div>

            {/* Seletor para escolher a moeda de conversão */}
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

            {/* Resultado da conversão */}
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
