import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import style from './ForbesListItem.module.css';

const ForbesListItem = ({ avatar, name, capital, isIncrease }) => {
  return (
    <>
      <img className={style.avatar} src={avatar} alt={name} />
      <h3 className={style.title}>{name}</h3>
      <span className={style.capital}>
        {capital} <BiDollarCircle key="0" color="#2196f3" size={22} />
        {isIncrease ? <FcBullish key="1" /> : <FcBearish key="2" />}
      </span>
    </>
  );
};

export default ForbesListItem;
