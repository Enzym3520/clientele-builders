import { Helmet } from "react-helmet";

const RESULT_ORIGIN =
  "https://clientele-builders-static.vercel.app/diagnostic/distribution-leak-v11.html";

const DistributionLeakResults = () => {
  const query = typeof window === "undefined" ? "" : window.location.search;

  return (
    <>
      <Helmet>
        <title>Your Distribution Condition | Clientele Builders</title>
        <meta name="robots" content="noindex,nofollow,noarchive" />
      </Helmet>
      <iframe
        src={`${RESULT_ORIGIN}${query}`}
        title="Your Clientele Builders Distribution Leak Diagnostic results"
        style={{ width: "100%", height: "100vh", border: 0, display: "block" }}
      />
    </>
  );
};

export default DistributionLeakResults;
