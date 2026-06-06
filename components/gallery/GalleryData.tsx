export interface GalleryItem {
  id: number;
  title: string;
  location: string;
  image: string;
  quote: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "The First Smile",
    location: "Hyderabad",
    image: "/photos/img1.jpeg",
    quote: "The beginning of forever.",
  },
  {
    id: 2,
    title: "A Beautiful Conversation",
    location: "Hyderabad",
    image: "/photos/img2.jpeg",
    quote: "Some stories start quietly.",
  },
  {
    id: 3,
    title: "Moments Between Moments",
    location: "Hyderabad",
    image: "/photos/img3.jpeg",
    quote: "The memories nobody planned.",
  },
  {
    id: 4,
    title: "The Journey",
    location: "Together",
    image: "/photos/img4.jpeg",
    quote: "Every step brought us closer.",
  },
];