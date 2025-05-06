// PAGES
import { AuthPage } from "./pages";

export default function App() {

  const isLogedIn: boolean = false;

  if (isLogedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-svh">
        Hello world! You are logged in.
      </div>
    )
  }

  return (
    <AuthPage />
  )
}
