import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import {
  findUserById,
  IDecodedUser,
  verifyUser,
  parseToken,
  addPost,
  posts,
  sleep,
  updatePost,
} from './fakedb';

const port = 8085;
const app = express();
app.use(cors());
app.use(express.json());

// TODO: Obviously use a more secure signing key than "secret"
app.post('/api/user/login', (req, res) => {
  try {
    const { email, password } = req.body;
    const user = verifyUser(email, password);
    const token = jwt.sign({ id: user.id }, 'secret', {
      expiresIn: '2 days',
    });
    res.json({ result: { user, token } });
  } catch (error) {
    res.status(401).json({ error });
  }
});

app.post('/api/user/validation', (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const token = parseToken(authHeader, res);
    const decodedUser = jwt.verify(token, 'secret');
    const user = findUserById((decodedUser as IDecodedUser).id);
    res.json({ result: { user, token } });
  } catch (error) {
    res.status(401).json({ error });
  }
});

app.get('/api/posts', async (req, res) => {
  // Sleep delay goes here
  await sleep(5000);
  res.json(posts);
});

// ✅ TODO: Implement this yourself
app.get('/api/posts/:id', (req, res) => {
  const id = req.params.id;
  const post = posts.find((p) => p.id === Number(id));
  if (!post) return res.json({});

  try {
    const user = findUserById(post.userId);
    const userName = user.email.slice(0, user.email.indexOf('@'));
    res.json({ ...post, ...{ author: userName } });
  } catch (e) {
    return res.json({});
  }
});

/**
 * Problems with this:
 * (1) Authorization Issues:
 *     What if you make a request to this route WITHOUT a token?
 *     What if you make a request to this route WITH a token but
 *     it's invalid/expired?
 * (2) Server-Side Validation Issues:
 *     What if you make a request to this route with a valid token but
 *     with an empty/incorrect payload (post)
 */
app.post('/api/posts', (req, res) => {
  const incomingPost = req.body;
  addPost(incomingPost);
  res.status(200).json({ success: true });
});

app.put('/api/posts/:id', (req, res) => {
  const id = req.params.id;
  const incomingPost = req.body;
  try {
    const updatedPost = updatePost(Number(id), incomingPost);
    res.status(200).json(updatedPost);
  } catch (e) {
    console.log(e);
    res.status(400).json({ success: false });
  }
});

app.listen(port, () => console.log('Server is running'));
