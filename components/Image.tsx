import type { JSX } from "preact";
interface imageProps extends JSX.HTMLAttributes<HTMLImageElement> {
  height: string | number;
  width: string | number;
}
export default function Image(props: imageProps) {
  const { loading = "lazy", ...rest } = props;
  return <img {...rest} loading={loading} />;
}
