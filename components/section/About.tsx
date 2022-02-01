// react
import * as React from "react";
// next
import Image from "next/image";
// @mui
import {
  Box,
  BoxProps,
  Card,
  CardActions,
  CardActionsProps,
  CardProps,
  Grid,
  Skeleton,
  Typography,
  styled,
  CardContent,
  Collapse,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// custom component
import FacebookIconLink from "components/common/FacebookIconLink";
import InstagramIconLink from "components/common/InstagramIconLink";
import TwitterIconLink from "components/common/TwitterIconLink";
import ContainerGrid from "components/common/ContainerGrid";
import ExpandMoreIconButton from "components/common/ExpandMoreIconButton";

//icon
import PersonIcon from "@mui/icons-material/Person";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
// type
interface AboutProps {}

const ImageWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "21rem",
  [theme.breakpoints.up(350)]: {
    height: "26rem",
  },
  [theme.breakpoints.up("sm")]: {
    height: "50vh",
  },
  [theme.breakpoints.up("md")]: {
    height: "100%",
  },
}));

const CustomContainer = styled(Box)<BoxProps>(({ theme }) => ({
  scrollMarginTop: "1rem",
  [theme.breakpoints.up("sm")]: {
    scrollMarginTop: "2rem",
  },
}));

const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: "1rem",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    margin: "2rem",
  },
  [theme.breakpoints.up("md")]: {
    height: "fit-content",
  },
  [theme.breakpoints.up("lg")]: {
    height: "90vh",
  },
}));

const CustomCardActions = styled(CardActions)<CardActionsProps>(({ theme }) => ({
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
  },
  [theme.breakpoints.up("lg")]: {
    position: "absolute",
    bottom: 0,
  },
}));

const About: React.FunctionComponent<AboutProps> = (props) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);

  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));

  React.useEffect(() => {
    if (isUpMd) setShowMore(true);
    else setShowMore(false);
  }, [isUpMd]);

  const biodataChild = (icon: any, title: string, value: string) => {
    return (
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          {icon}
          <p style={{ marginLeft: 10 }}>{title}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <p>{value}</p>
        </div>
      </div>
    );
  };

  return (
    <CustomContainer id="about">
      <CustomCard>
        <ContainerGrid sx={{ marginTop: 0, height: "100%" }}>
          <Grid item xs={12} md={6} style={{ padding: 0 }}>
            <ImageWrapper>
              <Image
                alt="abdul gopur"
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                onLoad={() => setIsLoaded(true)}
                src="/profile.jpg"
              />
              {!isLoaded && (
                <Skeleton
                  variant="rectangular"
                  sx={{
                    backgroundColor: "currentcolor",
                    height: "100%",
                    position: "absolute",
                    width: "100%",
                  }}
                />
              )}
            </ImageWrapper>
          </Grid>
          <Grid item xs={12} md={6} style={{ padding: "1rem", position: "relative" }}>
            <Card sx={{ boxShadow: "none", height: "100%", position: "relative" }}>
              <Typography component="h2" variant="h5" fontWeight="bold" style={{ marginLeft: "1rem" }}>
                About Me
              </Typography>
              <CardContent>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {biodataChild(<PersonIcon />, "Name", "Abdul Gopur")}
                  {biodataChild(<InsertInvitationIcon />, "Date of birth", "june 23th 1999")}
                  {biodataChild(<LocalPhoneIcon />, "Phone", "+628980354641")}
                  {biodataChild(<AlternateEmailIcon />, "Email", "abdulgopur2306@gmail.com")}
                  {biodataChild(<FmdGoodIcon />, "Address", "Purwakarta, Indonesia")}
                </div>
                <Collapse
                  in={showMore}
                  sx={{
                    p: {
                      marginTop: "0.5rem",
                    },
                  }}
                  timeout="auto"
                  unmountOnExit
                >
                  <Typography component="p" variant="body1">
                    Gopur is an undergraduate informatics student at Universitas Wahidiyah with a strong passion for web developer. He is a
                    fast-learner. Skilled in programming language (such as JavaScript, Typescript, PHP), framework (such as Laravel, Express Js,
                    React-native, React Js, Next Js), etc (such as Git Versions Control, Docker, Mongodb, MySQL). Currently create and maintain a
                    Youtube Channel called Apuy Stereo for web programming tutorials.
                  </Typography>
                </Collapse>
              </CardContent>
              <CustomCardActions disableSpacing>
                {!isUpMd && (
                  <ExpandMoreIconButton
                    open={showMore}
                    onClick={() => setShowMore(!showMore)}
                    sx={{
                      justifySelf: "flex-start",
                    }}
                  />
                )}
                <div>
                  <FacebookIconLink href="https://www.facebook.com/apuystero.monoreceiver" />
                  <InstagramIconLink href="https://www.instagram.com/apuy.stereo/" />
                  <TwitterIconLink href="https://www.youtube.com/channel/UCheIJxPuQ9YZeOlOTDO6QTw" />
                </div>
              </CustomCardActions>
            </Card>
          </Grid>
        </ContainerGrid>
      </CustomCard>
    </CustomContainer>
  );
};

export default About;
