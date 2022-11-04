import { ReactComponent as HomeLogo } from '../../assets/images/home-logo.svg';
import Login from '../../components/Login';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <HomeLogo />
      </div>
      <div className="auth-form-container">
        <Login />
      </div>
    </div>
  );
};
export default Home;
