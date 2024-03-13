import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import styles from './HeroImageBackground.module.css';

export function HeroImageBackground() {
  return (
    <div className={styles.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={styles.inner}>
        <Title className={styles.title}>
          Ready to showcase your work?{' '}
          <Text component="span" inherit className={styles.highlight}>
            Post
          </Text>{' '}
          your best shots,{' '}
          <Text component="span" inherit className={styles.highlight}>
            share
          </Text>{' '}
          your stories, and let your images resonate with our audience.
        </Title>

        <Container size={480}>
          <Text size="lg" className={styles.description}>
            Thank you for being part of our visual journey. Let’s paint the
            pixels with passion and light!
          </Text>
        </Container>

        <div className={styles.controls}>
          <Button className={styles.control} variant="white" size="lg">
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}
