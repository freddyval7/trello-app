"use client";

import { AuditLog } from "@prisma/client";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { generateLogMessage } from "@/lib/generate-log-message";
import { format } from "date-fns";

interface ActivityItemProps {
  data: AuditLog;
}

export function ActivityItem({ data }: ActivityItemProps) {
  return (
    <li className="flex items-center gap-x-3">
      <Avatar className="w-8 h-8">
        <AvatarImage src={data.userImage} alt={data.userName} />
      </Avatar>
      <div className="flex flex-col space-y-0.5">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold lowercase text-neutral-700">
            {data.userName}
          </span> {generateLogMessage(data)}
        </p>
        <p className="text-xs text-muted-foreground">
            {format(new Date(data.createdAt), "MMM d, yyyy 'at' h:mm a")}
        </p>
      </div>
    </li>
  );
}
