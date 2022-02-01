// dayjs
import dayjs, { Dayjs } from "dayjs";
// type
import { ImageProps } from "types/imageType";
import { ProjectCategory } from "types/categoryType";

export interface ProjectDetails {
  category: ProjectCategory[];
  date: Dayjs;
  id: string;
  images: ImageProps[];
  postFileName: string;
  title: string;
}

export interface Project extends ProjectDetails {
  likes: number;
}

const ProjectConstructor = (props: ProjectDetails): Project => {
  const { category, date, id, images, postFileName, title } = props;

  return {
    category,
    date,
    id,
    title,
    images,
    postFileName,
    get likes() {
      let totalLikes = 0;
      if (this.images.length === 0) return 0;

      this.images.forEach((image) => (totalLikes += image.likes));
      return totalLikes;
    },
  };
};

const projectsData: Project[] = [
  ProjectConstructor({
    category: ["web"],
    date: dayjs().subtract(4, "week"),
    id: "mediaedukasiborneo",
    postFileName: "mediaedukasiborneo",
    title: "mediaedukasiborneo",
    images: [
      {
        alt: "White and green labeled soft hair mask tube",
        height: 3903,
        likes: 100,
        src: "/projects/borneo/1.png",
        width: 3741,
      },
      {
        alt: "mediaedukasiborneosc",
        height: 4000,
        likes: 0,
        src: "/projects/borneo/2.png",
        width: 5193,
      },
      {
        alt: "mediaedukasiborneosc",
        height: 4000,
        likes: 0,
        src: "/projects/borneo/3.jpg",
        width: 5193,
      },
      {
        alt: "mediaedukasiborneosc",
        height: 4000,
        likes: 0,
        src: "/projects/borneo/4.jpg",
        width: 5193,
      },
    ],
  }),
  ProjectConstructor({
    category: ["web"],
    date: dayjs().subtract(4, "week"),
    id: "peradiorg",
    postFileName: "peradiorg",
    title: "peradi",
    images: [
      {
        alt: "peradi",
        height: 3903,
        likes: 100,
        src: "/projects/peradi/1.png",
        width: 3741,
      },
      {
        alt: "mediaedukasiborneosc",
        height: 4000,
        likes: 0,
        src: "/projects/peradi/2.png",
        width: 5193,
      },
      {
        alt: "mediaedukasiborneosc",
        height: 4000,
        likes: 0,
        src: "/projects/peradi/3.jpg",
        width: 5193,
      },
      {
        alt: "mediaedukasiborneosc",
        height: 4000,
        likes: 0,
        src: "/projects/peradi/4.jpg",
        width: 5193,
      },
    ],
  }),
  ProjectConstructor({
    category: ["web"],
    date: dayjs().subtract(4, "week"),
    id: "sufiproject",
    postFileName: "sufiproject",
    title: "sufi (sumber informasi)",
    images: [
      {
        alt: "sufi-image",
        height: 3903,
        likes: 100,
        src: "/projects/sufi/1.png",
        width: 3741,
      },
      {
        alt: "sufi-image",
        height: 4000,
        likes: 0,
        src: "/projects/sufi/2.png",
        width: 5193,
      },
    ],
  }),
  ProjectConstructor({
    category: ["mobile"],
    date: dayjs().subtract(19, "week"),
    id: "marketposapp",
    postFileName: "marketposapp",
    title: "POS Mobile App",
    images: [
      {
        alt: "market-app",
        height: 6000,
        likes: 100,
        src: "/projects/market/1.jpg",
        width: 4000,
      },
      {
        alt: "market-app",
        height: 5897,
        likes: 0,
        src: "/projects/market/2.jpg",
        width: 3999,
      },
      {
        alt: "market-app",
        height: 6000,
        likes: 0,
        src: "/projects/market/3.jpg",
        width: 4000,
      },
      {
        alt: "market-app",
        height: 6000,
        likes: 0,
        src: "/projects/market/4.jpg",
        width: 4000,
      },
      {
        alt: "market-app",
        height: 6000,
        likes: 0,
        src: "/projects/market/5.jpg",
        width: 4000,
      },
    ],
  }),
];

export default projectsData;
