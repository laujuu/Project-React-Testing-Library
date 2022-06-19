import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 05 - Componente <Pokedex.js /> ', () => {
  test('Se a pagina contém um h2 com o texto Encountered pokémons', () => {
    const { getByRole } = renderWithRouter(<App />);
    expect(getByRole('heading', { name: /Encountered pokémons/i },
      { level: 2 })).toBeInTheDocument();
  });

  test('Pokémons devem ser mostradado um a um ao clicar sucessivamente no botão', () => {
    const { getByText, getByRole } = renderWithRouter(<App />);
    userEvent.click(getByRole('button', { name: /Próximo pokémon/i }));
    expect(getByText(/Charmander/i)).toBeInTheDocument();

    userEvent.click(getByRole('button', { name: /Próximo pokémon/i }));
    expect(getByText(/Caterpie/i)).toBeInTheDocument();

    userEvent.click(getByRole('button', { name: /Próximo pokémon/i }));
    expect(getByText(/Ekans/i)).toBeInTheDocument();

    userEvent.click(getByRole('button', { name: /Próximo pokémon/i }));
    expect(getByText(/Alakazam/i)).toBeInTheDocument();

    userEvent.click(getByRole('button', { name: /Próximo pokémon/i }));
    expect(getByText(/Mew/i)).toBeInTheDocument();

    userEvent.click(getByRole('button', { name: /Próximo pokémon/i }));
    expect(getByText(/Rapidash/i)).toBeInTheDocument();

    userEvent.click(getByRole('button', { name: /Próximo pokémon/i }));
    expect(getByText(/Snorlax/i)).toBeInTheDocument();

    userEvent.click(getByRole('button', { name: /Próximo pokémon/i }));
    expect(getByText(/Dragonair/i)).toBeInTheDocument();
  });

  test('Se é mostrado apenas um pokemon por vez', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText('Pikachu')).toBeInTheDocument();
  });

  test('Texto do botão tem quer o tipo do pokemon expecificado', () => {
    const { getAllByRole } = renderWithRouter(<App />);
    expect(getAllByRole('button', { name: /Electric/i })).toHaveLength(1);
    expect(getAllByRole('button', { name: /Fire/i })).toHaveLength(1);
    expect(getAllByRole('button', { name: /Bug/i })).toHaveLength(1);
    expect(getAllByRole('button', { name: /Poison/i })).toHaveLength(1);
    expect(getAllByRole('button', { name: /Psychic/i })).toHaveLength(1);
    expect(getAllByRole('button', { name: /Normal/i })).toHaveLength(1);
    expect(getAllByRole('button', { name: /Dragon/i })).toHaveLength(1);
  });

  test('Se filtro contém somente pokemons daquele tipo', () => {
    const { getByText, getByRole } = renderWithRouter(<App />);

    userEvent.click(getByRole('button', { name: /Electric/i }));
    expect(getByText(/Pikachu/i)).toBeInTheDocument();

    userEvent.click(getByRole('button', { name: /Fire/i }));
    expect(getByText(/Charmander/i)).toBeInTheDocument();

    userEvent.click(getByRole('button', { name: /Bug/i }));
    expect(getByText(/Caterpie/i)).toBeInTheDocument();

    userEvent.click(getByRole('button', { name: /Poison/i }));
    expect(getByText(/Ekans/i)).toBeInTheDocument();

    userEvent.click(getByRole('button', { name: /Psychic/i }));
    expect(getByText(/Alakazam/i)).toBeInTheDocument();

    userEvent.click(getByRole('button', { name: /Normal/i }));
    expect(getByText(/Snorlax/i)).toBeInTheDocument();

    userEvent.click(getByRole('button', { name: /Dragon/i }));
    expect(getByText(/Dragonair/i)).toBeInTheDocument();
  });

  test('Se o botão all esta disponível e reseta a pesquisa', () => {
    const { getByText, getByRole } = renderWithRouter(<App />);
    userEvent.click(getByRole('button', { name: /All/i }));
    expect(getByText(/Pikachu/i)).toBeInTheDocument();
  });

  test('Verifica se todos botões de tipo estão presentes', () => {
    const seven = 7;
    const { getAllByTestId } = renderWithRouter(<App />);
    expect(getAllByTestId('pokemon-type-button')).toHaveLength(seven);
  });
});
