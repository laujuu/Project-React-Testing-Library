import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe(' Requisito 01 - Componente <App.js /> ', () => {
  test('Topo da aplicação contém os links: Home, About e Favorite Pokémons', () => {
    renderWithRouter(<App />);

    const homeLinkNav = screen.getByRole('link', { name: /Home/i });
    const aboutLinkNav = screen.getByRole('link', { name: /About/i });
    const FavpokeLinkNav = screen.getByRole('link', { name: /Favorite Pokémons/i });

    expect(homeLinkNav).toBeInTheDocument();
    expect(aboutLinkNav).toBeInTheDocument();
    expect(FavpokeLinkNav).toBeInTheDocument();
  });

  test('Verifica se a aplicação e redirecionada para as devidas paginas', () => {
    const { getByText, history } = renderWithRouter(<App />);

    fireEvent.click(getByText('Home'));
    expect(history.location.pathname).toBe('/');

    fireEvent.click(getByText('About'));
    expect(history.location.pathname).toBe('/about');

    fireEvent.click(getByText('Favorite Pokémons'));
    expect(history.location.pathname).toBe('/favorites');
  });

  test('Verifica se ao acessar rotas não existente é redirecionado para NotFound', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/xablau');
    expect(getByText(/Page requested not found/i)).toBeInTheDocument();
  });
});
