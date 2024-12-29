export interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  adLinks?: AdLink[];
  status:string
}

export interface AdLink {
  url: string;
  title: string;
}

export interface BlogFormData {
  title: string;
  prompt: string;
  image: File | null;
  adLinks: AdLink[];
}