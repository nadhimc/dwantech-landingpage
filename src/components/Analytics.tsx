import GoogleAnalytics from "./GoogleAnalytics";
import MicrosoftClarity from "./MicrosoftClarity";

interface AnalyticsProps {
  gaId?: string;
  clarityId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({
  gaId = process.env.NEXT_PUBLIC_GA_ID,
  clarityId = process.env.NEXT_PUBLIC_CLARITY_ID,
}) => {
  return (
    <>
      {gaId && <GoogleAnalytics measurementId={gaId} />}
      {clarityId && <MicrosoftClarity clarityId={clarityId} />}
    </>
  );
};

export default Analytics;
