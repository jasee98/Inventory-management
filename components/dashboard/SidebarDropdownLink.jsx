import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { BaggageClaim, ChevronRight } from "lucide-react";
import React from "react";
import CollapsibleLink from "./CollapsibleLink";

export default function SidebarDropdownLink({
  title,
  items,
  icon: Icon,
  setShowSidebar,
}) {
  // const Icon = icon;
  return (
    <Collapsible>
      <CollapsibleTrigger className="p-2 flex justify-between items-center w-full">
        <div className=" p-2 flex items-center space-x-2">
          <Icon className="w-4 h-4" />
          <span>{title}</span>
        </div>
        <ChevronRight className="w-4 h-4" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        {items?.map((item, i) => {
          return (
            <CollapsibleLink
              setShowSidebar={setShowSidebar}
              key={i}
              href={item.href}
              title={item.title}
            />
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
