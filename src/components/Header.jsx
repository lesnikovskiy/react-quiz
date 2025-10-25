import quizLogoImg from '../assets/quiz-logo.png';

export default function Header() {
  return (
    <header>
      <img src={quizLogoImg} alt="Quiz" />
      <h1>React Quiz</h1>
    </header>
  );
}
