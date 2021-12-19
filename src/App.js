import { useState } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import Section from "./components/Section";
import "./App.css";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonsOption = ["good", "neutral", "bad"];

  const onClickButton = (option) => {
    switch (option) {
      case buttonsOption[0]:
        setGood((state) => state + 1);
        break;
      case buttonsOption[1]:
        setNeutral((state) => state + 1);
        break;
      case buttonsOption[2]:
        setBad((state) => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={buttonsOption}
          onLeaveFeedback={onClickButton}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistic">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
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
