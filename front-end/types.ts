type ProjectImages = {
  projectid: number;
  link: string;
}

export type Project = {
  projectid: number;
  title: string;
  icon: string;
  description: string;
  link: string;
  projectimages: ProjectImages[];
}

export type Skill = {
  skillid: number;
  title: string;
  icon: string;
  certificate: string;
}

export type Experience = {
  experienceid: number;
  title: string;
  icon: string;
  description: string;
  link: string;
}
