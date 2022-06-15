export default function HourlyCodnitionsTable(props: any) {
  const { items } = props;

  return (
    <div>
      {items?.map((item: any, index: number) => {
        return <div key={index}>{item.dt}</div>;
      })}
    </div>
  );
}
