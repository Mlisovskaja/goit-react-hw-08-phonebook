import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import UserRoutes from './UserRoutes';
import NavBar from './NavBar/NavBar';

import { store } from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <NavBar />
        <UserRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
