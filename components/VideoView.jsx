import moment from "moment";

export default function VideoView(Component) {
  return function(props) {
    const now = moment();
    const time = moment(props.date);
    const diffMins = now.diff(time, "minutes");
    const diffHours = now.diff(time, "hours");
    const diffDays = now.diff(time, "days");

    let prettyDate = "";
    if (diffMins < 60) {
      prettyDate = `${diffMins} мин. назад`;
    } else if (diffHours < 24) {
      prettyDate = `${diffHours} час. назад`;
    } else {
      prettyDate = `${diffDays} дн. назад`;
    }

    return <Component {...props} date={prettyDate} />;
  };
}