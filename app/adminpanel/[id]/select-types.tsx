"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type CallbackFunction = (value: string) => void;

interface SelectItemProps {
  value: string;
  onSelect: CallbackFunction;
  children: React.ReactNode;
}

interface SelectTypeProps {
  callback: CallbackFunction;
}

const SelectType: React.FC<SelectTypeProps> = ({ callback }) => {
  return (
    <div>
      <Select onValueChange={(e) => callback(e)}>
        <SelectTrigger className="w-fit">
          <SelectValue placeholder="Types" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="w-fit">Select One</SelectLabel>
            <SelectItem defaultChecked value="OTT">
              OTT
            </SelectItem>
            <SelectItem value="Featured">Featured</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectType;
