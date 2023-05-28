import { useState } from "react";

enum DataFetchState {
  IDLE = "idle",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed"
}

export function useDataFetcherState() {
  const [state, setState] = useState<DataFetchState>(DataFetchState.IDLE)

  return {
    inProgress: () => setState(DataFetchState.IN_PROGRESS),
    completed: () => setState(DataFetchState.COMPLETED),
    isIdle: () => state === DataFetchState.IDLE,
    isCompleted: () => state === DataFetchState.COMPLETED,
    isInProgress: () => state === DataFetchState.IN_PROGRESS
  }
}