import { useState } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
import Section from './components/Section';
import './App.css';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};
const buttonsOption = ['good', 'neutral', 'bad'];
const App = () => {
  const [state, setState] = useState(initialState);

  const onClickButton = feedbackType => {
    setState({ ...state, [feedbackType]: state[feedbackType] + 1 });
  };
  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={buttonsOption} onLeaveFeedback={onClickButton}></FeedbackOptions>
      </Section>
      <Section title="Statistic">
        {countTotalFeedback() ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
};

export default App;
