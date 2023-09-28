import Hero from "@/components/Hero/Hero";
import styles from "./homePage.module.css";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";

type NavItem = {
  id: number;
  title: string;
  url: string;
};

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
