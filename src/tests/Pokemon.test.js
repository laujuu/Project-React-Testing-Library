import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 06 - Componente <Pokemon.js /> ', () => {
  test('Se é renderizado um card com as informações de determinado pokémon:', () => {
    const { getByTestId, getAllByText, getByRole } = renderWithRouter(<App />);
    userEvent.click(getByRole('button', { name: /Psychic/i }));
    expect(getByTestId(/pokemon-name/i)).toHaveTextContent('Alakazam');
    expect(getAllByText(/Psychic/i)).toHaveLength(2);
    expect(getByTestId(/pokemon-weight/i)).toHaveTextContent('Average weight');

    const { getByAltText } = renderWithRouter(<App />);
    expect(getByAltText(/Alakazam sprite/i).src).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png');
  });

  test(`Se o card do pokémon indicado na Pokédex
   contém um link de navegação para exibir detalhes deste pokémon`, () => {
    const { getByRole, history } = renderWithRouter(<App />);
    userEvent.click(getByRole('button', { name: /Psychic/i }));
    userEvent.click(getByRole('link', { name: /More details/i }));
    expect(history.location.pathname).toBe('/pokemons/65');
  });

  test('Se existe um ícone de estrela nos pokémons favoritados', () => {
    const { getByRole, history } = renderWithRouter(<App />);
    userEvent.click(getByRole('button', { name: /Psychic/i }));
    userEvent.click(getByRole('link', { name: /More details/i }));
    userEvent.click(getByRole('checkbox', { name: /Pokémon favoritado?/i }));
    history.push('/favorites');
    expect(getByRole(
      'img', { name: /alakazam is marked as favorite/i },
    )).toBeInTheDocument();
    expect(getByRole(
      'img', { name: /alakazam is marked as favorite/i },
    ).src).toContain('/star-icon.svg');
  });
});
