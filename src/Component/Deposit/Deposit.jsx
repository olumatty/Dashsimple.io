import { LuMoreVertical } from "react-icons/lu";
import { transactions } from "../../data/data";
import "./Deposit.css";
const Deposit = () => {
  return (
    <div className="Main-grid grid-common1 c3">
      <div className="title">
        <h4>Deposit Terakhir</h4>
        <LuMoreVertical className="icons" />
      </div>
      <div className="grid-content">
        <div className="grid-items">
          {transactions.map((transaction) => (
            <div className="grid-item" key={transaction.id}>
              <div className="grid-item-l">
                <div className="grid-square">
                  {transaction.square}
                </div>
                <p >
                  <span className="text">{transaction.description} </span><span>{transaction.mail}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-scarlet">$ {transaction.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p>Show more</p>
    </div>
  );
};

export default Deposit;
