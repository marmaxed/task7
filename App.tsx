import VideoList from "./components/VideoList";

export default function App() {
  const list = [
    {
      url: "https://www.youtube.com/SomeVideo1",
      date: "2025-07-11 12:10:00"
    },
    {
      url: "https://www.youtube.com/SomeVideo2",
      date: "2025-07-11 07:30:00"
    },
    {
      url: "https://www.youtube.com/SomeVideo3",
      date: "2025-07-09 14:15:00"
    }
  ];

  return <VideoList list={list} />;
}