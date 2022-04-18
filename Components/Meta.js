import Head from "next/head";
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Base2Brand | Portfolio",
  keywords: "Marketing, Web Design, Animation, Ui/Ux, Animation",
  description:
    "Let’s Build something Digital together Web Mobile Marketing Leading Innovative Partner for Start-ups and Enterprises",
};

export default Meta;
