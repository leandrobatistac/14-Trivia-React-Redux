import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Login from '../pages/Login';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('Verifica se a Página de Login', () => {
  test(' possui o input de Email', () => {
    renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByTestId('input-gravatar-email');
    expect(inputEmail).toBeInTheDocument();
  });

  test(' possui o input de Nome', () => {
    renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByTestId('input-player-name');
    expect(inputEmail).toBeInTheDocument();
  });

  test(' possui um Botão de Play', () => {
    renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByTestId('btn-play');
    expect(inputEmail).toBeInTheDocument();
  });

  test(' possui um Botão de Configurações', () => {
    renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByTestId('btn-settings');
    expect(inputEmail).toBeInTheDocument();
  });

  test(' desabilita/habilita o botão ao incluir Email/Nome', () => {
    renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByTestId('input-gravatar-email');
    const inputName = screen.getByTestId('input-player-name');
    const botaoPlay = screen.getByRole('button', { name: /Play/i });

    userEvent.type(inputEmail, 'leandro@gmail.com');
    userEvent.type(inputName, 'Leandro');
    userEvent.click(botaoPlay);
    expect(botaoPlay.disabled).toBe(false);
  });
});
