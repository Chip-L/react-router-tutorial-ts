import { getErrorMessage } from "./ErrorWithMessage";

type ErrorWithStatusText = {
  statusText: string;
};

function isErrorWithStatusText(error: unknown): error is ErrorWithStatusText {
  return (
    typeof error === "object" &&
    error !== null &&
    "statusText" in error &&
    typeof (error as Record<string, unknown>).statusText === "string"
  );
}

export function getErrorWithStatusTextOrMessage(error: unknown) {
  if (isErrorWithStatusText(error)) return error.statusText;

  return getErrorMessage(error);
}
