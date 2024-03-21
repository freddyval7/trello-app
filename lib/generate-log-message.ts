import { ACTION, AuditLog } from "@prisma/client";

export const generateLogMessage = (log: AuditLog) => {
  const { action, entityTitle, entityType, userName } = log;

  switch (action) {
    case ACTION.CREATE:
      return `${userName} created ${entityType.toLowerCase()} "${entityTitle}"`;
    case ACTION.DELETE:
      return `${userName} updated ${entityType.toLowerCase()} "${entityTitle}"`;
    case ACTION.DELETE:
      return `${userName} deleted ${entityType.toLowerCase()} "${entityTitle}"`;
    default:
      return `${userName} unknown action ${entityType.toLowerCase()} "${entityTitle}"`;
  }
};
