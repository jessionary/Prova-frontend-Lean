import React, { useState } from 'react';

type Address = {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
};

const AddressLookup: React.FC = () => {
  const [cep, setCep] = useState<string>('');
  const [address, setAddress] = useState<Address | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLookup = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data: Address = await response.json();

      if (data.erro) {
        setError('CEP não encontrado');
        setAddress(null);
      } else {
        setAddress(data);
        setError(null);
      }
    } catch (error) {
      console.error('Erro ao buscar endereço:', error);
      setAddress(null);
      setError('Erro ao buscar endereço');
    }
  };

  return (
    <div>
      <h1>Consulta de Endereço por CEP</h1>
      <label>
        Insira o CEP:
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite um CEP"
        />
      </label>
      <button onClick={handleLookup}>Consultar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {address && !error && (
        <div>
          <h2>Resultado:</h2>
          <p>CEP: {address.cep}</p>
          <p>Logradouro: {address.logradouro}</p>
          <p>Bairro: {address.bairro}</p>
          <p>Localidade: {address.localidade}</p>
          <p>UF: {address.uf}</p>
        </div>
      )}
    </div>
  );
};

export default AddressLookup;
