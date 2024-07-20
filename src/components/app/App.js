import MainPage from '../pages/mainPage/MainPage';
import PricesPage from '../pages/pricesPage/PricePage';
import './app.scss';

const App = () => {
  return (
    <main className="app">
      <div className="content">
        <MainPage/>
        {/* <PricesPage/> */}
      </div>
    </main>
  )
}

export default App;