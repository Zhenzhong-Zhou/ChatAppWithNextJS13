import {Inter} from 'next/font/google'
import {db} from "@/lib/db";
import Button from "@/components/ui/Button";


const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
    await db.set("hello", "hello");
    return (
        <Button variant={"ghost"}>Hello World</Button>
    )
}
