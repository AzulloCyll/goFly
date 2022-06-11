export default function CurrentConditionsTable(props) {
  const { maxwind_kph } = props.day;
  const { last_updated } = props.current;
  return (
    <div>
      <p>Last updated: {last_updated}</p>
      <p>Wind: {maxwind_kph} kph</p>
    </div>
  );
}
