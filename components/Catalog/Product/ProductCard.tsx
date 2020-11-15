interface PropsType {
  title: string;
}

export default function ProductCard({ title }: PropsType) {
  return <span>{title}</span>;
}
