import { Layout } from "widgets/layout";
import { Routing } from "./providers/routing/ui/Routing";
import "./styles/index.css";

function App() {
  return (
    <div className="bg-gray-200 h-screen">
      <Layout>
        <Routing />
      </Layout>
    </div>
  );
}

export default App;
