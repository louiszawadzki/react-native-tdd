import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Code Faster",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        A shorter feedback loop and more information on why things break will
        enable you to deliver faster.
      </>
    ),
  },
  {
    title: "Better Tests",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        By putting the tests first, you will have to grow your knowledge and
        make them easier to use.
      </>
    ),
  },
  {
    title: "Better Maintainability",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        By writing code that is easy to test, you will end up with code that is
        easy to change.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
