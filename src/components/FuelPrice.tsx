import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const data = [
  {
    name: "E10",
    price: 1.89,
  },
  {
    name: "E85",
    price: 1.67,
  },
  {
    name: "Diesel",
    price: 1.99,
  },
  {
    name: "Premium",
    price: 2.89,
  },
  {
    name: "Premium",
    price: 2.89,
  },
  {
    name: "Premium",
    price: 2.89,
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function FuelPrice({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Live Fuel Price</CardTitle>
        <CardDescription>Get your best fuel price.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 ">
        <div className="px-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between space-x-6 space-y-2  mb-4 grid-cols-[25px_1fr]  pb-2 last:mb-0 last:pb-0"
            >
              <div className="">
                <p className="text-xl font-medium leading-none font-mono ">
                  {item.name}
                </p>
              </div>
              <div className="border-b-2 bg-slate-400 py-2 px-6 rounded ">
                <p className="text-2xl ">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
export default FuelPrice;
