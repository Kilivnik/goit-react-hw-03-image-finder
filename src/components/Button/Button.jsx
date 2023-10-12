import s from '../Button/Button.module.css';

export default function Button({ changePage }) {
  return (
    <button type="button" onClick={changePage} className={s.Button}>
      Load more
    </button>
  );
}
