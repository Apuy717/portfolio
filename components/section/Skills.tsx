// react
import * as React from "react";
// @mui
import { Container, ContainerProps, Grid, GridProps, Typography, styled, Card } from "@mui/material";
// custom component
import ContainerGrid from "components/common/ContainerGrid";
import SkillProgress from "components/common/SkillProgress";
// custom icons
import IllustratorCCIcon from "components/icon/IllustratorCC";
import LightroomCCIcon from "components/icon/LightroomCC";
import PhotoshopIcon from "components/icon/Photoshop";
// context
import ComponentsContext from "context/componentsContext";
import ProgressBar from "components/progress/progressBar";
// type
interface SkillsProps {}

const CustomContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  marginBottom: "5rem",
  marginTop: "5rem",
  scrollMarginTop: "2rem",
}));

const CustomGridItem = styled(Grid)<GridProps>(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  marginBottom: "2rem",
}));

const Skills: React.FunctionComponent<SkillsProps> = (props) => {
  const { containerMaxWidth } = React.useContext(ComponentsContext);

  const skills = [
    {
      Icon: <PhotoshopIcon bgColor="white" textColor="tomato" fontSize="large" />,
      title: "Photoshop",
      progressValue: 78,
    },
    {
      Icon: <LightroomCCIcon bgColor="white" textColor="tomato" fontSize="large" />,
      title: "Lightroom",
      progressValue: 83,
    },
    {
      Icon: <IllustratorCCIcon bgColor="white" textColor="tomato" fontSize="large" />,
      title: "Illustrator",
      progressValue: 97,
    },
  ];

  const testData: Array<{ title: string; bgcolor: string; completed: number }> = [
    { title: "HTML5", bgcolor: "#11468F", completed: 95 },
    { title: "CSS", bgcolor: "#11468F", completed: 80 },
    { title: "SASS", bgcolor: "#11468F", completed: 80 },
    { title: "Bootstrap", bgcolor: "#11468F", completed: 80 },
    { title: "Tailwind CSS", bgcolor: "#11468F", completed: 80 },
    { title: "jQuery", bgcolor: "#11468F", completed: 80 },
    { title: "ReactJs", bgcolor: "#11468F", completed: 90 },
    { title: "React Native", bgcolor: "#11468F", completed: 85 },
    { title: "PHP", bgcolor: "#11468F", completed: 80 },
    { title: "Laravel", bgcolor: "#11468F", completed: 80 },
    { title: "Node Js", bgcolor: "#11468F", completed: 80 },
    { title: "Express js", bgcolor: "#11468F", completed: 90 },
    { title: "Mysql", bgcolor: "#11468F", completed: 95 },
    { title: "MongoDB", bgcolor: "#11468F", completed: 90 },
  ];
  return (
    <>
      <CustomContainer id="skills" maxWidth={"xl"}>
        <Card>
          <Typography component="h2" variant="h4" textAlign="center" style={{ marginTop: 50 }}>
            My Skills
          </Typography>
          <ContainerGrid marginTop="2rem">
            {testData.map((i, k) => (
              <ProgressBar key={k} title={`${i.title}`} bgcolor={i.bgcolor} completed={i.completed} />
            ))}
            <div style={{ marginTop: 50, width: "100%" }} />
          </ContainerGrid>
        </Card>
      </CustomContainer>
    </>
  );
};

export default Skills;
