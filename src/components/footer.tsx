import { Zap } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="flex justify-center items-center "> Made with <Zap className="mx-2 text-yellow-300" /> by <Link className="mx-2 text-yellow-300" href="https://twitter.com/theanuragdev">Anurag</Link> </div>
    )
}
