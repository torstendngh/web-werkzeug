import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AppLayout from "./screens/AppLayout/AppLayout";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen/NotFoundScreen";
import SnippetsScreen from "./screens/SnippetsScreen/SnippetsScreen";
import SnippetsList from "./screens/SnippetsScreen/SnippetsList";
import UUIDGeneratorScreen from "./screens/UUIDGeneratorScreen/UUIDGeneratorScreen";
import FlexToolScreen from "./screens/FlexToolScreen/FlexToolScreen";
import IconsScreen from "./screens/IconsScreen/IconsScreen";
import TutorialsScreen from "./screens/TutorialsScreen/TutorialsScreen";
import TutorialScreen from "./screens/TutorialsScreen/TutorialScreen/TutorialScreen";
import snippetCategories from "./constants/snippets";
import SettingsScreen from "./screens/SettingsScreen/SettingsScreen";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage(true, "isDarkTheme");

  useEffect(() => {
    if (isDarkTheme) {
      import("./themes/dark.css")
    } else {
      import("./themes/light.css")
    }
  }, [isDarkTheme])


  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/home" replace={true} />} />
        <Route path="*" element={<NotFoundScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/snippets" element={<SnippetsScreen />}>
          <Route
            index
            element={<Navigate to={snippetCategories[0].path} replace={true} />}
          />
          {snippetCategories.map((category, index) => (
            <Route
              key={index}
              path={category.path}
              element={<SnippetsList snippets={category.snippets} />}
            />
          ))}
        </Route>
        <Route path="/uuid-generator" element={<UUIDGeneratorScreen />} />
        <Route path="/flex-tool" element={<FlexToolScreen />} />
        <Route path="/icons" element={<IconsScreen />} />
        <Route path="/tutorials" element={<TutorialsScreen />} />
        <Route
          path="/tutorials/:tutorialId/:slug"
          element={<TutorialScreen />}
        />
        <Route path="/settings" element={<SettingsScreen />} />
      </Route>
    </Routes>
  );
};

export default App;
