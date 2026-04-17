export interface Video {
  id: string;
  title: string;
}

export interface Photo {
  src: string;
  alt: string;
}

export const pianoVideos: Video[] = [
  { id: "JS9NuP3pAIo", title: "My Neighbor Totoro" },
  { id: "-xm4QMR2E9c", title: "Pirates of the Caribbean" },
  { id: "QIpcUm9j9tg", title: "Super Mario" },
  { id: "EGBz0ZjGC_Q", title: "Ponyo On The Cliff" },
  { id: "nGdU0ipazQA", title: "Suzume OST" },
];

export const bakingPhotos: Photo[] = [];

export const photographyPhotos: Photo[] = [];
