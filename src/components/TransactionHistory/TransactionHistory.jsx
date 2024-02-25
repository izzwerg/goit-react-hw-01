import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({items}) => {
  return (
    <table className={styles.transactionTable}>
      <thead className={styles.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
            return(
            <tr key={item.id} className={styles.rowStyle}>
              <td>{capitalizeText(item.type)}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
            );
        })}
      </tbody>
    </table>
  );
};

function capitalizeText(text) {
    if (!text.length) {
      return '';
    }
    const firstLetter = text.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = text.slice(1);
    return firstLetterCap + remainingLetters;
  }

export default TransactionHistory;
