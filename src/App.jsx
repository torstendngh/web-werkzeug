import SnippitsScreen from './screens/SnippitsScreen/SnippitsScreen'
import UUIDGeneratorScreen from './screens/UUIDGeneratorScreen/UUIDGeneratorScreen'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './screens/AppLayout/AppLayout'
import NotFoundScreen from './screens/NotFoundScreen/NotFoundScreen'
import snippitCategories from './constants/snippits'
import SnippitsList from './screens/SnippitsScreen/SnippitsList'
import FlexToolScreen from './screens/FlexToolScreen/FlexToolScreen'
import IconsScreen from './screens/IconsScreen/IconsScreen'

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route index element={<Navigate to="/home" replace={true} />} />
        <Route path='*' element={<NotFoundScreen/>}/>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path='/snippits' element={<SnippitsScreen/>}>
          <Route index element={<Navigate to={snippitCategories[0].path} replace={true} />} />
          {
            snippitCategories.map((category, index) => <Route key={index} path={category.path} element={<SnippitsList snippits={category.snippits}/>}/>)
          }
        </Route>
        <Route path='/uuid-generator' element={<UUIDGeneratorScreen/>}/>
        <Route path='/flex-tool' element={<FlexToolScreen/>}/>
        <Route path='/icons' element={<IconsScreen/>}/>
      </Route>
    </Routes>
  )
}

export default App
