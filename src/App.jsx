import SnippitsScreen from './screens/SnippitsScreen/SnippitsScreen'
import UUIDGeneratorScreen from './screens/UUIDGeneratorScreen/UUIDGeneratorScreen'
import ColorAlphaScreen from './screens/ColorAlphaScreen/ColorAlphaScreen'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './screens/AppLayout/AppLayout'
import NotFoundScreen from './screens/NotFoundScreen/NotFoundScreen'

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='*' element={<NotFoundScreen/>}/>
        <Route path='/color-alpha' element={<ColorAlphaScreen/>}/>
        <Route path='/snippits' element={<SnippitsScreen/>}/>
        <Route path='/uuid-generator' element={<UUIDGeneratorScreen/>}/>
      </Route>
    </Routes>
  )
}

export default App
