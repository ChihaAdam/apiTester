import { Button } from "./ui/button";
import { useHeadersStore } from "../context/headersStore";
import { Input } from "./ui/input";
function RequestHeaders() {
  const {headers,addHeader,removeHeader,updateHeaderKey,updateHeaderValue} = useHeadersStore();
  return (
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-col gap-2">
          {Object.entries(headers).map(([key, value], index) => (
            <div key={index} className="flex items-center gap-2">
              <Input
                type="text"
                placeholder="Header Key"
                value={key}
                onChange={(e)=> updateHeaderKey(index, e.target.value)}
              />
              <Input
                type="text"
                placeholder="Header Value"
                value={value}
                onChange={(e) => updateHeaderValue(index, e.target.value)}
              />
              <Button variant="destructive" onClick={() => removeHeader(index)}>
                Remove
              </Button>
            </div>
          ))}
          </div>
        <Button className="mb-2 cursor-pointer"  variant="outline" onClick={() => addHeader("", "")}>
          Add Header
        </Button>
      </div>
  );
}
export default RequestHeaders;