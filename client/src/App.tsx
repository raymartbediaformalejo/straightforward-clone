import { Suspense } from "react";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AppRouter />
    </Suspense>
  );
}

export default App;
