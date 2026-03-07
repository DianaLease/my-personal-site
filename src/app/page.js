import Intro from '../components/Intro';
import Experience from '../components/Experience';

export default function Home() {
  return (
    <div style={{ overflowY: 'scroll', height: '100vh' }}>
      <Intro />
      <Experience />
    </div>
  );
}
