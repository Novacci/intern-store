import HowItWorks from './components/HowItWorks';
import Intro from './components/Intro';
import MainImage from './components/MainImage';
import YoutubeSection from './components/YoutubeSection';

export default function Home() {
  return (
    <>
      <MainImage />
      <Intro />
      <HowItWorks />
      <YoutubeSection />
    </>
  );
}
