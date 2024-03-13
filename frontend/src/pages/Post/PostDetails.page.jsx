import DOMAIN from '../../services/endpoint';
import axios from 'axios';
import { useLoaderData, Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Image,
  Stack,
  Title,
  Text,
  Button,
} from '@mantine/core';

function PostDetailsPage() {
  const postDetails = useLoaderData();

  return (
    <>
      <Container my="md">
        <Grid>
          <Grid.Col span={4}>
            <Stack h={300} bg="var(--mantine-color-body)">
              <Container>
                <Text size="xl" c="blue">
                  {postDetails.author}
                </Text>
              </Container>
              <Container>
                <Title size="h3">{postDetails.title}</Title>
              </Container>
              <Container>
                <Text size="l" c="dimmed">
                  {postDetails.category}
                </Text>
              </Container>
              <Container>
                <Text size="sm">{postDetails.content}</Text>
              </Container>
            </Stack>
          </Grid.Col>
          <Grid.Col span={8}>
            <Image radius="md" src={postDetails.image} />
          </Grid.Col>
          <Grid.Col span={12}>
            <Button component={Link} to={`/posts/edit/${postDetails.id}`}>
              Edit
            </Button>
          </Grid.Col>
        </Grid>
        <Button variant="outline" component={Link} to="/posts">
          Back to Posts
        </Button>
      </Container>
    </>
  );
}

export const postDetailsLoader = async ({ params }) => {
  const res = await axios.get(`${DOMAIN}/api/posts/${params.id}`);
  return res.data;
};

export default PostDetailsPage;
