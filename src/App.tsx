// PAGES
import { AuthPage } from "./pages";

// GLOBAL STORES
import { useIsUserSignedup } from "./stores";

export default function App() {

  // Get the user signup state from the global store
  const { isUserSignedup } = useIsUserSignedup();

  return isUserSignedup ? (
    <div className="flex flex-col items-center justify-center min-h-svh">
        Hello world! You are logged in.
      </div>
    ) : (
    <AuthPage />
  );

}
