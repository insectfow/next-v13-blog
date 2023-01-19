import { setDate } from './moment';

export const Table = ({ list, titleList }) => {

  const onDelete = () => {

  }

  const onFix = () => {

  }

  return (
    <ul className="listWrap">
      { list.map(({ idx, comments, date }) => (
        <li key={idx}>
          <span>{ idx }</span>
          <span>{ comments }</span>
          <span>{setDate(date)}</span>
          <button onClick={onFix}>수정</button>
          <button onClick={onDelete}>삭제</button>
        </li>
      ))}
    </ul>
  )
}