import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Frequency() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose Your Travel Frequency</CardTitle>
      </CardHeader>
      <CardContent>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Frequency" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/* <SelectLabel>Frequency</SelectLabel> */}
              <SelectItem value="Weekly">Weekly</SelectItem>
              <SelectItem value="Fort">Fortnight</SelectItem>
              <SelectItem value="Multiple Times">Multiple Times</SelectItem>
              <SelectItem value="Instantly">Instantly</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
