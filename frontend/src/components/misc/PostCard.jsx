import { Card, Image, Text } from '@mantine/core';
import styles from '../misc/PostCard.module.css';
export function PostCard({ title, image, content }) {
  return (
    <Card shadow="xl" padding="xl" component="div">
      <Card.Section>
        <Image src={image} h={300} w="auto" fit="contain" alt={title} />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        {title}
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        {content}
      </Text>
    </Card>
  );
}
