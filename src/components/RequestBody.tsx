import { Textarea } from "./ui/textarea";
import { useBodyStore } from "../context/bodyStore";
import { useHttpMethodStore } from "../context/httpMethodStore";
function RequestBody() {
  const {setBody} = useBodyStore();
  const {method} = useHttpMethodStore();
  return (
      <Textarea
        placeholder="Enter request body in JSON format"
        className=" p-4 rounded-md overflow-auto h-full resize-none"
        onChange={(e) => setBody(e.target.value)}
        disabled={method === "GET" || method === "DELETE"}
      />
  );
}
export default RequestBody;