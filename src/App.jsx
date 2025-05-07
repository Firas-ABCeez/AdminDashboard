// PAGES
import { AuthPage, DashboardPage } from "./pages";

// GLOBAL STORES
import { useIsUserSignedup } from "./stores";

export default function App() {

  // Get the user signup state from the global store
  const { isUserSignedup } = useIsUserSignedup();

  return isUserSignedup ? (
    <DashboardPage />
  ) : (
    <AuthPage />
  );

}
