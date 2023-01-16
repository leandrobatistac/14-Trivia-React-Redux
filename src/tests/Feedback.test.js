import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Feedback from '../pages/Feedback';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';

describe('Verifica se a Página de Feedback', () => {
  test(' possui o botão de Play Again', () => {
    renderWithRouterAndRedux(<Feedback />);
    const buttonPlayAgain = screen.getByTestId('btn-play-again');
    expect(buttonPlayAgain).toBeInTheDocument();
  });

  test(' possui o botão de Ranking', () => {
    renderWithRouterAndRedux(<Feedback />);
    const buttonRanking = screen.getByTestId('btn-ranking');
    expect(buttonRanking).toBeInTheDocument();
  });

  test(' possui o header com título "FEEDBACK"', () => {
    renderWithRouterAndRedux(<Feedback />);
    const feedbackText = screen.getByTestId('feedback-text');
    expect(feedbackText).toBeInTheDocument();
  });

  test(' possui a imagem do Gravatar', () => {
    renderWithRouterAndRedux(<Feedback />);
    const gravatarImage = screen.getByTestId('header-profile-picture');
    expect(gravatarImage).toBeInTheDocument();
  });

  test(' possui o campo de perguntas acertadas', () => {
    renderWithRouterAndRedux(<Feedback />);
    const assertions = screen.getByTestId('feedback-total-question');
    expect(assertions).toBeInTheDocument();
  });

  test(' possui o campo de Score', () => {
    renderWithRouterAndRedux(<Feedback />);
    const score = screen.getByTestId('header-score');
    expect(score).toBeInTheDocument();
  });

  test(' possui o campo de Nome', () => {
    renderWithRouterAndRedux(<Feedback />);
    const name = screen.getByTestId('header-player-name');
    expect(name).toBeInTheDocument();
  });
});
