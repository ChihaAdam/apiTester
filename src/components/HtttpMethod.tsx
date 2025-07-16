import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function HttpMethod({
  handleMethodChange,
}: {
  handleMethodChange: (method: string) => void;
}) {
  return (
    <Select defaultValue="GET" onValueChange={handleMethodChange}>
      <SelectTrigger className="w-[180px] max-md:w-full" >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="font-bold">
          <SelectLabel className="font-semibold">methods</SelectLabel>
          <SelectItem value="GET" className="text-green-800">
            GET
          </SelectItem>
          <SelectItem value="POST" className="text-yellow-800">
            POST
          </SelectItem>
          <SelectItem value="PUT" className="text-blue-800">
            PUT
          </SelectItem>
          <SelectItem value="PATCH" className="text-purple-800">
            PATCH
          </SelectItem>
          <SelectItem value="DELETE" className="text-red-600">
            DELETE
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
export default HttpMethod;
