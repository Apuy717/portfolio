// react
import * as React from "react";
// next
import { useRouter } from "next/router";
// @mui
import { Box, Grid, Grow, Typography } from "@mui/material";
// custom component
import ContainerGrid from "components/common/ContainerGrid";
import TypingEffect from "components/common/TypingEffect";
// custom context
import ConstantsContext from "context/constantsContext";
import ProjectCard from "components/common/ProjectCard";
import calcArrayOfObj from "utility/calcArrayOfObj";
import Filter, { FilterOption } from "components/common/Filter";
import sortArrayOfObj from "utility/sortArrayOfObj";
import { Project } from "constants/projectsData";
// type
interface ProjectsSectionProps {}

const ProjectsSection: React.FunctionComponent<ProjectsSectionProps> = (props) => {
  const { projects } = React.useContext(ConstantsContext);
  const [projectsToRender, setProjectsToRender] = React.useState(projects);
  const router = useRouter();

  const options = [{ label: "Most Recent", active: true }, { label: "Web" }, { label: "Mobile" }];

  const handleFilterOptionClick = (option: FilterOption) => {
    if (projectsToRender) {
      const newProjectsArray: Project[] = Object.assign([], projects);

      switch (option.label) {
        case "Most Recent":
          sortArrayOfObj(newProjectsArray, "date", "desc");
          setProjectsToRender(newProjectsArray);
          break;
        case "Web":
          const photographyProjects = newProjectsArray.filter((project) => project.category.includes("web"));
          setProjectsToRender(photographyProjects);
          break;
        case "Mobile":
          const designProjects = newProjectsArray.filter((project) => project.category.includes("mobile"));
          setProjectsToRender(designProjects);
          break;
      }
    }
  };

  return (
    <>
      <Typography component="h2" variant="h3" textAlign="center" marginTop="20%">
        My Projects
      </Typography>
      <Box color="white" sx={{ textAlign: "center", marginTop: "1rem" }}>
        <TypingEffect staticText="as a" text={["web application", "mobile application"]} />
      </Box>
      <Filter onOptionClick={handleFilterOptionClick} options={options} />
      <ContainerGrid
        justifyContent={projectsToRender?.length === 1 ? "center" : "flex-start"}
        sx={{
          padding: {
            xs: "0 1rem",
            sm: "0 2rem",
          },
        }}
      >
        {projectsToRender
          ? projectsToRender.map((project, index) => (
              <Grow in={true} key={project.title + index} timeout={(index + 1) * 500}>
                <Grid item xs={12} sm={6} md={4} xl={3}>
                  <ProjectCard
                    imageAlt={project.images[0].alt}
                    imageSrc={project.images[0].src}
                    title={project.title}
                    likes={calcArrayOfObj(project.images, "likes")}
                    onButtonClick={() => router.push(`/projects/${project.id}`)}
                    sx={{
                      maxWidth: "21rem",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </Grid>
              </Grow>
            ))
          : "no project"}
      </ContainerGrid>
    </>
  );
};

export default ProjectsSection;
