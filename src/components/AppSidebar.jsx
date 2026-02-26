import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

function AppSidebar() {
  return (
    <div className="w-64 bg-background border-r p-6">
      <h2 className="text-xl font-bold mb-8">⏳ TimeCapsule</h2>

      <div className="space-y-4">
        <Link to="/">
          <Button variant="ghost" className="w-full justify-start">
            Create Capsule
          </Button>
        </Link>

        <Link to="/memories">
          <Button variant="ghost" className="w-full justify-start">
            Memories
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default AppSidebar