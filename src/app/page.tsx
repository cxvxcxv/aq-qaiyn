import { About } from '@/components/About';
import { Activities } from '@/components/Activities';
import { AntlerTherapy } from '@/components/AntlerTherapy';
import { Benefits } from '@/components/Benefits';
import { Description } from '@/components/Desciption';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Prices } from '@/components/Prices';

export default function Home() {
  return (
    <main>
      <Header />
      <section className="my-24 px-xs sm:px-sm md:px-md lg:px-lg">
        <Benefits />
        <AntlerTherapy />
        <About />
        <Description />
        <Prices />
        <Activities />
      </section>
      <Footer />
    </main>
  );
}
