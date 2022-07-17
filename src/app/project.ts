export interface Collaborator {
  name: string;
  link: string;
}

export interface LinkableText {
  description: string;
  link: string;
}

export interface Project {
  title: string;
  description: string;
  collaborators: Collaborator[];
  related: LinkableText[];
  image: string;
  link: string;
  skills: string[];
}
