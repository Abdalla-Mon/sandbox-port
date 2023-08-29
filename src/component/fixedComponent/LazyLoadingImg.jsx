import { Skeleton } from "@mui/material";

export default function LazyImg({ width = "100%", height = 300 }) {
  return <Skeleton variant="rounded" width={width} height={height} />;
}
