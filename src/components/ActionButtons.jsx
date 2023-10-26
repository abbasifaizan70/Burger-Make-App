import { Button } from './Button';

function ActionButton({items, PerfromAction}){
  const itemArray = Object.entries(items).map((entry) => ({ [entry[0]]: entry[1] }));

  return(
    <div>
      {
        itemArray.map((item) => {
          console.log(item);
          return (
          <>
            <Button
              key={Object.keys(item)[0]}
              defaultValue={Object.values(item)[0]}
              PerfromAction={PerfromAction}
              text={Object.keys(item)[0]}
              currentValue={Object.values(item)[0]}
            />
            <br />
          </>
        )})
      }
    </div>
  )
}

export default ActionButton;