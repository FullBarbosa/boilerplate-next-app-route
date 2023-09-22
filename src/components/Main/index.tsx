import * as S from './styles'

export const Main: React.FC<{ text: string }> = ({ text }) => {
  return (
    <S.Wrapper>
      <h1>{text}</h1>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</h2>
    </S.Wrapper>
  )
}
