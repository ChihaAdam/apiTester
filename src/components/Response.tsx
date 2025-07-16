import JSONPretty from "react-json-pretty"
const lightTheme = {
  main: "line-height: 1.5; color: #000;",
  key: "color: #d73a49;",
  string: "color: #032f62;",
  value: "color: #005cc5;",
  boolean: "color: #6f42c1;",
  null: "color: #e36209;",
}

const darkTheme = {
  main: "line-height: 1.5; color: #f8fafc;",
  key: "color: #ffb4b4;",
  string: "color: #7dd3fc;",
  value: "color: #38bdf8;",
  boolean: "color: #c4b5fd;",
  null: "color: #fdba74;",
}

function Response({ response }: { response: string }) {
  const isDark = document.documentElement.classList.contains("dark");
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Response:</h2>
      <JSONPretty
        data={response}
        className="p-4 border-input border-1 rounded-md overflow-auto h-120 resize-none dark:bg-input/30"
        theme={isDark ? darkTheme : lightTheme}
      />
    </div>
  )
}

export default Response
