
interface ChildInterface{
  count:number,
  increaseCount:()=>void,
  resetCount:()=>void
}

const Child: React.FC<ChildInterface>=({ count,increaseCount, resetCount }) => {
  return (
    <div>
      <h3>Count :</h3>
      <p>{count}</p>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
};

export default Child;
