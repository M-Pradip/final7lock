import { Frequency } from "@/components/Frequency";
import FuelPrice from "@/components/FuelPrice";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-6xl">
          711 <span className="text-blue-600">Lock</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground ">
          Welcome to 711 lock for best price.
        </p>
      </div>
      <div className="flex mx-auto mb-10 gap-6">
        <div className="">
          <FuelPrice />
        </div>
        <div>
          <Frequency />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
