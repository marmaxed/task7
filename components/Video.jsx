import VideoView from "./VideoView";

const DateTime = ({ date }) => <p className="date">{date}</p>;
const PrettyVideo = VideoView(DateTime);

export default function Video({ url, date }) {
  return (
    <div className="video">
      <iframe src={url} allow="autoplay; encrypted-media" allowFullScreen title="video" />
      <PrettyVideo date={date} />
    </div>
  );
}