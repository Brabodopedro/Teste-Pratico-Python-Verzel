import styled from "styled-components";

export const Container = styled.div`
  padding: 200px 150px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url('https://media.istockphoto.com/id/1744546629/pt/foto/japanese-park-parking-lot.jpg?s=2048x2048&w=is&k=20&c=fn61HGiyybTcX0fv1eCXl0koOLzmiThJbOWtZazrlm0=');
  background-color: rgba(0, 0, 0,);
`
export const Text = styled.div`
width: 55%;
position: relative;
z-index: 1;
h2{
  color: var(--white);
  font-size:62px;
  font-weight: 700;
  margin-bottom: 35px;
}
p{
  color: var(--black);
  margin-bottom: 25px;
  font-weight: 700;
  font-size:20px;
}
span{
  background-color: var(--white);
  border: 0;
  color: var(--black);
  font-size: 16px;
  font-weight: 600;
  padding: 12px 120px;
  line-height: 24px;
  border-radius: 3px;
  cursor: pointer;
}
`