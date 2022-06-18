import React from 'react';
import NotFound from '../pages/NotFound';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 04 - Componente <NotFound.js /> ', () => {
  test('Se a pagina contém um h2 com o texto not found', () => {
    const { getByRole } = renderWithRouter(<NotFound />);
    expect(getByRole('heading', { name: /Page requested not found/i },
      { level: 2 })).toBeInTheDocument();
  });

  test('Se a pagina mostra a imagem com url expecifica', () => {
    const { getByAltText } = renderWithRouter(<NotFound />);
    expect(getByAltText(/Pikachu crying because the page requested was not found/i).src)
      .toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
