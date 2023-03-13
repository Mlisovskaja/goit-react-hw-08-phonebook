import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AuthLayout from './AuthLayout/AuthLayout';
import UserRoutes from './UserRoutes';
import NavBar from './NavBar/NavBar';

import { store } from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <AuthLayout>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <NavBar />
          <UserRoutes />
        </BrowserRouter>
      </AuthLayout>
    </Provider>
  );
}

export default App;
