import SnippetsScreen from './screens/SnippetsScreen/SnippetsScreen'
import UUIDGeneratorScreen from './screens/UUIDGeneratorScreen/UUIDGeneratorScreen'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './screens/AppLayout/AppLayout'
import NotFoundScreen from './screens/NotFoundScreen/NotFoundScreen'
import snippetCategories from './constants/snippets'
import SnippetsList from './screens/SnippetsScreen/SnippetsList'
import FlexToolScreen from './screens/FlexToolScreen/FlexToolScreen'
import IconsScreen from './screens/IconsScreen/IconsScreen'

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route index element={<Navigate to="/home" replace={true} />} />
        <Route path='*' element={<NotFoundScreen/>}/>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route path='/snippets' element={<SnippetsScreen/>}>
          <Route index element={<Navigate to={snippetCategories[0].path} replace={true} />} />
          {
            snippetCategories.map((category, index) => <Route key={index} path={category.path} element={<SnippetsList snippets={category.snippets}/>}/>)
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
