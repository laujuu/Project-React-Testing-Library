import React from 'react';
import FavoritePokemons from '../pages/FavoritePokemons';
import App from '../App';

import renderWithRouter from '../renderWithRouter';
import userEvent from '@testing-library/user-event';

describe('Requisito 01 - Componente <About.js /> ', () => {
  test('Se exibe "No favorite pokemon found" caso vazio', () => {
    const { getByText } = renderWithRouter(<FavoritePokemons />);
    expect(getByText(/No favorite pokemon found/i)).toBeInTheDocument();
  });

  test('Se são exibidos todos os cards favoritados', () => {
    const { container, getByRole, history } = renderWithRouter(<App />);

    userEvent.click(getByRole('link', { name: /More details/i }));
    userEvent.click(getByRole('checkbox', { name: /Pokémon favoritado?/i }));
    history.push('/favorites');

    expect(container.getElementsByClassName('favorite-pokemon').length).toBe(1);
  });
});
