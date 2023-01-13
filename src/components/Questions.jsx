import React from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../fetchAPI';

class Questions extends React.Component {
  state = {
    questionsObject: {},
    index: 0,
    answerArray: [],
  };

  async componentDidMount() {
    // const { responseCode, history } = this.props;
    await this.questionsAPI();
    // if (responseCode === 3) {
    //   history.push('/');
    //   localStorage.setItem('token', '');
    // }
  }

  questionsAPI = async () => {
    const token = localStorage.getItem('token');
    const questions = await getQuestions(token);
    const { index } = this.state;
    this.setState({
      questionsObject: questions.results,
      answerArray: [...questions.results[index].incorrect_answers,
        questions.results[index].correct_answer],
    });
  };

  handleButton = () => {
    const { index, questionsObject } = this.state;
    const novoIndex = index + 1;
    this.setState({
      answerArray: [...questionsObject[novoIndex].incorrect_answers,
        questionsObject[novoIndex].correct_answer],
    });
    this.setState({ index: novoIndex });
  };

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  render() {
    const { questionsObject, index, answerArray } = this.state;
    this.shuffleArray(answerArray);
    return (
      <div>
        { !questionsObject.length > 0 ? '...Carregando'
          : (
            <div>
              <p data-testid="question-category">
                { questionsObject[index].category }
              </p>
              <p data-testid="question-text">
                { questionsObject[index].question }
              </p>
              <div data-testid="answer-options">
                { answerArray.map((e, index2) => (
                  <button
                    key={ index2 }
                    type="button"
                    onClick={ this.handleButton }
                    data-testid={
                      (e === questionsObject[index].correct_answer)
                        ? 'correct-answer' : `wrong-answer-${index2}`
                    }
                  >
                    { e }
                  </button>
                ))}
              </div>
            </div>
          ) }

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  responseCode: state.token.response,
});

export default connect(mapStateToProps)(Questions);
