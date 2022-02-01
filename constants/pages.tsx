// type
export interface Page {
  title?: string;
  description?: string;
}

export interface Pages {
  [key: string]: Page;
}

const pages: Pages = {
  home: {
    title: 'Abdul Gopur',
    description:
      'my portfolio',
  },
  projects: {
    title: 'Projects',
    description:
      'You can see all my projects as a designer and photographer in this page.',
  },
  hireMe: {
    title: 'Hire me',
    description:
      'I am available as freelancer to do your projects, fill the form to contact to me.',
  },
};

export default pages;
