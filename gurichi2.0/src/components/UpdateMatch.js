import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const BackGround = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #2a2a2a;
  opacity: 0.8;
`;

const Form = styled.form`
  margin-left: 5%;
  position: fixed;
  top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
  width: 350px;
  height: 450px;
  padding: 10px;
  border-radius: 10%;
  box-shadow: 3px 3px 30px 10px #dfdedf;
  background: white;
`;
const Button = styled.button`
  position: relative;
  bottom: -5%;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  border: 0 none;
  border-radius: 20px;
  padding: 10px 20px;
  color: #fff;
  background-color: #18b3d1;
  margin-left: 1rem;
  margin-right: 1.5rem;
`;

const UpdateMatch = ({ onSetInsertToggle, data: d }) => {
  const [data, setData] = useState(d);
  const navigate = useNavigate();

  const dayRef = useRef(null);
  const competitorRef = useRef(null);
  const resultRef = useRef(null);
  const mvpRef = useRef(null);
  const scoreRef = useRef(null);

  const onChange = (e) => {
    return null;
  };
  const onUpdataMatch = (e) => {
    e.preventDefault();
    axios
      .put(`https://gurichi-teampage-data.run.goorm.io/data/${data.id}`, {
        day: dayRef.current.value,
        competitor: competitorRef.current.value,
        result: resultRef.current.value,
        mvp: mvpRef.current.value,
        scored: scoreRef.current.value,
      })
      .then((res) => {
        const newData = Object.assign(data, res.data);
        setData(newData);
        onSetInsertToggle();
      });
  };

  return (
    <div>
      <BackGround onClick={onSetInsertToggle} />
      <Form>
        <div>
          <label>경기날짜</label>
          <input
            type="text"
            placeholder="2022년 00월 00일"
            defaultValue={data.day}
            ref={dayRef}
          />
        </div>
        <div>
          <label>경기상대</label>
          <input
            type="text"
            placeholder="FC구리치"
            defaultValue={data.competitor}
            ref={competitorRef}
          />
        </div>
        <div>
          <label>경기결과</label>
          <input
            type="text"
            placeholder="ex) 12:1 승, 3:0 패"
            defaultValue={data.result}
            ref={resultRef}
          />
        </div>
        <div>
          <label>경기MOM</label>
          <input
            type="text"
            placeholder="심성보"
            defaultValue={data.mvp}
            ref={mvpRef}
          />
        </div>
        <div>
          <label>득점자</label>
          <input
            type="text"
            placeholder="심성보 2골, 박광윤 3골 ..."
            defaultValue={data.scored}
            ref={scoreRef}
          />
        </div>
        <Button onClick={onUpdataMatch}>수정 하기</Button>
      </Form>
    </div>
  );
};

export default UpdateMatch;
