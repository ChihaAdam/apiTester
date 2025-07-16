
import { Textarea } from './ui/textarea'

function Error({error}: {error: string}) {
  return (
    <Textarea readOnly className="text-red-500 h-40 resize-none mt-4 text-lg font-semibold"
      value={error}
      placeholder="no errors yet"
    />
  )
}

export default Error