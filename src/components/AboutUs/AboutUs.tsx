import { IconClockBolt, IconEar, IconPlant } from "@tabler/icons-react";
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import "./AboutUs.css";

const mockdata = [
  {
    title: "Extreme performance",
    description:
      "You can be rest assured that every purchase makes a real impact. For each order, a plant is planted, and to make it tangible, a picture of the seed next to your unique order number is shipped along with your product.",
    icon: IconPlant,
  },
  {
    title: "We hear you",
    description:
      "We hear you. Every question, suggestion, and concern matters to us, and we’re committed to listening and acting. Your voice shapes how we improve, ensuring every experience with us is better than the last.",
    icon: IconEar,
  },
  {
    title: "Quick and hassle-free deliveries",
    description:
      "Reliable delivery means your plans never have to wait. Whether it’s something you need every day or a special item for a big moment, count on us.",
    icon: IconClockBolt,
  },
];

export default function AboutUs() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={"card"}
      padding="xl"
    >
      <feature.icon size={50} stroke={1.5} color={theme.colors.green[6]} />
      <Text fz="lg" fw={500} className={"cardTitle"} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Best company ever
        </Badge>
      </Group>

      <Title order={2} className={"titlexx"} ta="center" mt="sm"></Title>

      <Text c="dimmed" className={"descriptionxxx"} ta="center" mt="md">
        Your words, not ours!
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
