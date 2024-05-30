import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
export default function CriticScore({ score }: Props) {
  const color = score > 85 ? "green" : score > 70 ? "yellow" : "";
  return (
    <Badge colorScheme={color} w={8} paddingX={2} borderRadius={5}>
      {score}
    </Badge>
  );
}
