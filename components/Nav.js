import Link from "next/link";

export default function Nav() {
    return (

        <nav className="bg-yellow-600 flex align-middle justify-between px-10 py-5 lg:px-20">
            <div>
                <Link href={'/'}>
                    <h1 className="text-3xl font-mono font-bold">Olivia</h1>
                </Link>
            </div>

            <div className="">
                <button className="bg-transparent border-solid border-2 border-black rounded-full text-white bg-black py-1 px-5">Get Started</button>
            </div>
        </nav>
    )
}