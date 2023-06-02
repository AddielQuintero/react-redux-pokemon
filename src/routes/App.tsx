import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@redux'
import { NavBar } from '@components'
import { Favorite, Home, NotFound } from '@pages'
import { NavigateProps } from '@types'

const navigation: NavigateProps = [
  { name: 'Home', to: '/', private: false },
  { name: 'Favorite', to: '/favorite', private: false },
]

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar navigation={navigation} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </BrowserRouter>
      </Provider>
    </>
  )
}
