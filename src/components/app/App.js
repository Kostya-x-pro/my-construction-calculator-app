import MainPage from '../pages/mainPage/MainPage';
import PricesPage from '../pages/pricesPage/PricePage';
import AuthorizationPage from '../pages/authorizationPage/AuthorizationPage';

import './app.scss';

const App = () => {
  return (
    <main className="app">
      <div className="content">
        <MainPage/>
        {/* <PricesPage/> */}
        {/* <AuthorizationPage/> */}
      </div>
    </main>
  )
}

export default App;