import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import SearchBar from "./SearchBar";


const Navbar = () => {
    return (
        <nav className="w-full flex justify-center items-center px-6">
            <div className="max-w-4xl flex items-center gap-10">

            <Image
                src="/logo2.png"
                alt="Podsy logo"
                width={380}
                height={380}
                priority
                className="w-20 h-20 object-cover object-center"
            />

            <div>
                <SearchBar />
            </div>


            <div className="px-4 py-2 font-medium">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
            </div>

        </nav>
    );
}

export default Navbar;