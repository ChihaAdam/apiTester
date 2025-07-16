import RequestBody from "./RequestBody";
import  RequestHeaders from "./RequestHeaders";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

function RequestInfo() {
  return (
    <Tabs defaultValue="body" className="h-130">
      <TabsList>
        <TabsTrigger value="body" className="cursor-pointer">Body</TabsTrigger>
        <TabsTrigger value="headers" className="cursor-pointer">Headers</TabsTrigger>
      </TabsList>
      <TabsContent value="body">
        <RequestBody />
      </TabsContent>
      <TabsContent value="headers">
        <RequestHeaders  />
      </TabsContent>
    </Tabs>
  );
}

export default RequestInfo;