import { Fuel } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-black">
        <MaxWidthWrapper>
          <div className="">
            <div className="flex h-16 items-center">
              {/* TODO:mobile nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/" className="flex gap-2">
                  <Fuel color="#ffffff" />{" "}
                  <h2 className="text-white">711Lock</h2>
                </Link>
              </div>
              <div className="ml-auto flex items-center">
                <div className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                  <Link href="/login">Login</Link>
                </div>
                <div className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                  <Link href="/register">Register</Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};
export default Navbar;
