import MainNavigator from "./components/MainNav";
import AuthProvider from "./screens/context/AuthContext";
import ProDucts from "./screens/ProDucts";

export default function App() {
  return (
    <AuthProvider>
      <MainNavigator />
    </AuthProvider>

  );
}
