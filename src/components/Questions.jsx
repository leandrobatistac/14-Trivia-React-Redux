import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions } from '../fetchAPI';
import Timer from './Timer';
import Next from './Next';
import '../questions.css';
import { addScore } from '../redux/actions';

const NUMBER_THREE = 3;
const NUMBER_FIVE = 5;
const NUMBER_TEN = 10;

class Questions extends React.Component {
  state = {
    questionsObject: {},
    index: 0,
    answerArray: [],
    seconds: 30,
    answered: false,
    score: 0,
    assertions: 1,
  };

  async componentDidMount() {
    this.questionsAPI();
    const { responseCode, history } = this.props;
    if (responseCode === NUMBER_THREE) {
      history.push('/');
      localStorage.setItem('token', '');
    }
    this.setSeconds();
  }

  componentWillUnmount() {
    clearInterval(this.gameTimerInterval);
  }

  setSeconds = () => {
    const timerInterval = 1000;
    this.gameTimerInterval = setInterval(() => {
      const { seconds } = this.state;
      if (seconds > 0) {
        this.setState((prevState) => ({
          seconds: prevState.seconds - 1,
        }));
      }
      if (seconds === 0) {
        clearInterval(this.gameTimerInterval);
      }
    }, timerInterval);
  };

  questionsAPI = async () => {
    const token = localStorage.getItem('token');
    const questions = await getQuestions(token);
    if (questions.response_code !== 0) {
      const { history } = this.props;
      localStorage.clear();
      history.push('/');
    } else {
      const { index } = this.state;

      const arrayOriginal = [...questions.results[index].incorrect_answers,
        questions.results[index].correct_answer];

      for (let i = arrayOriginal.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayOriginal[i], arrayOriginal[j]] = [arrayOriginal[j], arrayOriginal[i]];
      }

      this.setState({
        questionsObject: questions.results,
        answerArray: arrayOriginal,
      });
    }
  };

  handleButton = ({ target }) => {
    const { dispatch } = this.props;
    const { questionsObject, index, seconds, score, assertions } = this.state;
    const nomeDificuldade = questionsObject[index].difficulty;
    const numeroDificuldade = {
      hard: 3,
      medium: 2,
      easy: 1,
    };

    const errado = target.className.includes('wrong-answer');
    const dificuldadePontos = Number(numeroDificuldade[nomeDificuldade]);

    const pontuacaoTotal = NUMBER_TEN + (seconds * dificuldadePontos);

    if (!errado) {
      const scoreTotal = score + pontuacaoTotal;
      this.setState(
        { score: scoreTotal, assertions: assertions + 1 },
        () => dispatch(addScore(scoreTotal, assertions)),
      );
    }

    this.setState({ answered: true });
  };

  handleNext = () => {
    const { index, questionsObject } = this.state;
    const { history } = this.props;
    const novoIndex = index + 1;

    if (novoIndex === NUMBER_FIVE) {
      history.push('/feedback');
    } else {
      const arrayOrdenado = [...questionsObject[novoIndex].incorrect_answers,
        questionsObject[novoIndex].correct_answer];

      for (let i = arrayOrdenado.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayOrdenado[i], arrayOrdenado[j]] = [arrayOrdenado[j], arrayOrdenado[i]];
      }

      this.setState({
        answerArray: arrayOrdenado,
      });
      this.setState({ index: novoIndex, answered: false, seconds: 30 });
    }
  };

  render() {
    const { questionsObject, index, answerArray, seconds, answered } = this.state;
    return (
      <div>
        <Timer seconds={ seconds } />
        { !questionsObject.length > 0 ? '...Carregando'
          : (
            <div>
              <p data-testid="question-category">
                { questionsObject[index].category }
              </p>
              <p data-testid="question-text">
                { questionsObject[index].question }
              </p>
              <div>
                { answerArray.map((e, index2) => (
                  <div key={ index2 } data-testid="answer-options">
                    <button
                      key={ index2 }
                      type="button"
                      onClick={ this.handleButton }
                      data-testid={
                        (e === questionsObject[index].correct_answer)
                          ? 'correct-answer' : `wrong-answer-${index2}`
                      }
                      className={
                        (e === questionsObject[index].correct_answer)
                          ? 'correct-answer' : 'wrong-answer'
                      }
                      disabled={ seconds === 0 }
                    >
                      { e }
                    </button>
                  </div>
                ))}
              </div>
              { answered && <Next click={ this.handleNext } />}
            </div>
          ) }

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  responseCode: state.token.response,
  seconds: state.timer,
});

Questions.propTypes = {
  responseCode: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Questions);
