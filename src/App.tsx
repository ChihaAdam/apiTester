import UrlEnter from "./components/UrlEnter";
import { useState } from "react";
import Response from "./components/Response";
import RequestBody from "./components/RequestBody";
import { Moon } from "lucide-react";
import useFetch from "./hooks/useFetch";
import {
  ResizableHandle,
  ResizablePanelGroup,
  ResizablePanel,
} from "./components/ui/resizable";
import Error from "./components/Error";
function App() {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleUrlChange = (newUrl: string) => {
    setUrl(newUrl);
  };
  const handleMethodChange = (method: string) => {
    setMethod(method);
  };
  const { fetchData, loading, error, response } = useFetch(url, method, body);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0F0F0F] text-gray-800 dark:text-gray-200 p-4 transition-all duration-200 ease-in-out">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold select-none">simple RESTful API Tester</h1>
        <Moon
          className="cursor-pointer"
          onClick={toggleDarkMode}
          size={24}
          color={isDarkMode ? "white" : "black"}
        />
      </div>
      <p className="text-gray-600 mb-4 select-none">
        Enter a URL to test the API endpoint.
      </p>
      <UrlEnter
        handleUrlChange={handleUrlChange}
        handleMethodChange={handleMethodChange}
        handleRequest={fetchData}
        isLoading={loading}
      />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="w-1/2">
          <RequestBody
            handleBodyChange={setBody}
            isActive={method !== "GET" && method !== "DELETE"}
          />
        </ResizablePanel>
        <ResizableHandle className="mx-1" />
        <ResizablePanel className="w-1/2">
          <Response response={response} />
        </ResizablePanel>
      </ResizablePanelGroup>
      <Error error={error} />
    </div>
  );
}

export default App;
