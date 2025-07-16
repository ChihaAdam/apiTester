import { Textarea } from "./ui/textarea";

interface bodyProps {
    handleBodyChange: (body: string) => void;
    isActive: boolean;
    }
function RequestBody({ handleBodyChange, isActive }: bodyProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Request Body:</h2>
      <Textarea
        placeholder="Enter request body in JSON format"
        className=" p-4 rounded-md overflow-auto h-120 resize-none"
        onChange={(e) => handleBodyChange(e.target.value)}
        disabled={!isActive}
      />
    </div>
  );
}
export default RequestBody;