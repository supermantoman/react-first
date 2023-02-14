// 컴포넌트 묶기
export function Modal(props) {
  return (
    <div className="modal" style={{background:props.color}}>
      <h4>{props.title[0]}</h4>
      <p>2022.2.3</p>
      <p>오늘부터 서비스 정책이 변경됩니다.</p>
      <button onClick={props.onClick}>글수정</button>
    </div>
  )
} 