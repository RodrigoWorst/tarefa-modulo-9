import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import { getTokenData, isAuthenticated } from '../../util/auth';
import { removeAuthData } from '../../util/storage';
import history from '../../util/history';
import './styles.css';

function Navbar() {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h2>MovieFlix</h2>
        </Link>
        <div className="nav-login-logout">
          {authContextData.authenticated && (
            <button type="submit" onClick={handleLogoutClick}>
              Sair
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
