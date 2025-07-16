import HttpMethod from "./HtttpMethod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
interface UrlEnterProps {
    handleUrlChange: (url: string) => void;
    handleMethodChange: (method: string) => void;
    handleRequest: () => void;
    isLoading: boolean;
    }
function UrlEnter({handleUrlChange, handleMethodChange, handleRequest,isLoading}: UrlEnterProps) {
 
  return (
      <div className="flex items-center gap-2">
        <HttpMethod handleMethodChange={handleMethodChange}/>
        <Input
          type="text"
          placeholder="Enter URL"
          className="w-full"
          onChange={(e) => handleUrlChange(e.target.value)}
        />
        <Button
          className="dark:bg-white dark:text-black hover:dark:bg-gray-200 hover:bg-gray-600 cursor-pointer disabled:cursor-not-allowed transition-all duration-200 ease-in-out"
          onClick={handleRequest}
          disabled={isLoading}
        >
          {isLoading ? "wait a minute" : "Send Request"}
        </Button>
      </div>
  );
}
export default UrlEnter;
