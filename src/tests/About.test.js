import React from 'react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 01 - Componente <About.js /> ', () => {
  test('Se a pagina contém informações sobre a pokedéx', () => {
    const { getByRole } = renderWithRouter(<About />);
    expect(getByRole('heading', { name: /About Pokédex/i })).toBeInTheDocument();
  });

  test('Se a pagina contém um h2 com o texto About Pokédex', () => {
    const { getByRole } = renderWithRouter(<About />);
    expect(getByRole('heading', { name: /About Pokédex/i },
      { level: 2 })).toBeInTheDocument();
  });

  test('Se a pagina contém dois paragráfos com o texto sobre a pokédex', () => {
    const { getAllByText } = renderWithRouter(<About />);
    expect(getAllByText(/pokémons/i)).toHaveLength(2);
  });

  test('Se a pagina contém uma imagem com url expecifica', () => {
    const { getByAltText } = renderWithRouter(<About />);
    expect(getByAltText(/Pokédex/i).src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
