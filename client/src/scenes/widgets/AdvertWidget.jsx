import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://th.bing.com/th/id/OIP.yD8KXpIh_I6ltLB5vj6mgAHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>LeapAI</Typography>
        <Typography color={medium}>LeapAI.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Your personal AI assistant for your business needs. Get started today!
        We are hiring!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
