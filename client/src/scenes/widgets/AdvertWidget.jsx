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
        // src="https://th.bing.com/th/id/OIP.yD8KXpIh_I6ltLB5vj6mgAHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        // src="https://th.bing.com/th/id/R.eac7c1a84856ff86c772099fb86a7b26?rik=xKFQV0XctJl%2fuQ&riu=http%3a%2f%2fwww.rumormillnews.com%2fpix8%2fdeep_mind_art.jpg&ehk=fmFWSWInTYPXoZzLllm0wMKqP6FX%2bAkGDjGxmXFieSk%3d&risl=&pid=ImgRaw&r=0"
        src="https://th.bing.com/th/id/OIP.UD5syYmzUO3npXdECTBj-gHaD9?pid=ImgDet&rs=1"
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
