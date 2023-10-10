// Importe as dependências necessárias
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddressLookup from './AddressLookup';

describe('AddressLookup Component', () => {
  it('deve acionar a função ao clicar no botão', () => {
    const handleLookup = jest.fn();

    const { getByText } = render(<AddressLookup />);

    const button = getByText('Consultar');

    fireEvent.click(button);

    expect(handleLookup).toHaveBeenCalled();
  });
});
