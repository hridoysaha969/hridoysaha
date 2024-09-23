// pages/robots.txt.js
export const getServerSideProps = ({ res }) => {
  res.setHeader("Content-Type", "text/plain");
  res.write(`User-agent: *
        Disallow: /admin
        Allow: /login
        Allow: /`);

  res.end();

  return {
    props: {},
  };
};

const Robots = () => {
  return null; // Since this is just a robots.txt file, no need to render anything
};

export default Robots;
