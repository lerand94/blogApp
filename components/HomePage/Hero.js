import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <Image
        className={classes.image}
        src="/images/site/max.png"
        alt="An image showing Max"
        width={300}
        height={300}
      />
      <h1>Hi, I'm Max</h1>
      <p>
        I blog about web dev - especially frontend frameworks like Angular or
        React
      </p>
    </section>
  );
};

export default Hero;
