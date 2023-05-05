import { HashRouter, Route, Routes } from 'react-router-dom'
import routes from './config/routes'
import { Provider } from 'react-redux'
import { store } from './redux/slices/store'
import AltNavbar from './components/Navbar'
import AuthChecker from './auth/AuthChecker'
import Footer from './components/Footer'


function App() {


  return (
    <HashRouter>
      <AltNavbar />
        <Provider store={store}>
          <Routes>
            { routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.protected ? (
                <AuthChecker>
                  <route.component/>
                    </AuthChecker>
                      ):(
                  <route.component />
                )
              }
            />
          ))}
        </Routes>
        <Footer/>
      </Provider>
    </HashRouter>
  )
}

export default App
