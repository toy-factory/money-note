import Layout from '#/components/Layout';
import NoteMain from '#/components/NoteMain';
import c from './index.module.scss';

const Main = () => (
  <Layout className={c.container}>
    <aside />
    <NoteMain />
    <aside />
  </Layout>
);

export default Main;
