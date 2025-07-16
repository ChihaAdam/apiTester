import HttpMethod from "./HtttpMethod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
interface UrlEnterProps {
  handleUrlChange: (url: string) => void;
  handleRequest: () => void;
  isLoading: boolean;
}
function UrlEnter({
  handleUrlChange,
  handleRequest,
  isLoading,
}: UrlEnterProps) {
  return (
    <div className="flex items-center gap-2 max-md:flex-col max-md:items-start my-2">
      <HttpMethod />
      <Input
        type="text"
        placeholder="Enter URL"
        className="md:w-full"
        onChange={(e) => handleUrlChange(e.target.value)}
      />
      <Button
        className="dark:bg-white dark:text-black hover:dark:bg-gray-200 hover:bg-gray-600 cursor-pointer disabled:cursor-not-allowed transition-all duration-200 ease-in-out max-md:w-full"
        onClick={handleRequest}
        disabled={isLoading}
      >
        {isLoading ? "wait a minute" : "Send Request"}
      </Button>
    </div>
  );
}
export default UrlEnter;
