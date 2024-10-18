//// 로그인 페이지 컴포넌트 - login.jsx

import React, { useContext, useEffect, useState } from "react";

import "../../css/member.scss";
import { initData } from "../func/mem_fn";
import { dCon } from "../modules/dCon";




function Login() {
  /////// [상태관리 변수]  ////////////
  // 컨텍스트 확인
    const myCon = useContext(dCon);
    console.log(myCon.loginSts);


  // [1] 입력요소 상태변수

  // 1. 아이디변수
  const [userId, setUserId] = useState("");
  // 2. 비밀번호변수
  const [pwd, setPwd] = useState("");


  // [2] 에러상태관리 변수 -> 에러상태값 초기값은 에러아님(false)
  // 1. 아이디변수
  const [userIdError, setUserIdError] = useState(false);
  // 2. 비밀번호변수
  const [pwdError, setPwdError] = useState(false);


  // [ 아이디관련 메시지 프리셋 ] ////
  const msgId = [
    //필수입력
   "필수 항목입니다.", 
   "아이디가 존재하지 않습니다.", 
  ];

  // [ 비밀번호관련 메시지 프리셋 ] ////
  const msgPwd = [
    //필수입력
   "필수 항목입니다.", 
   "비밀번호가 일치하지 않습니다.", 
  ];



  // [3] 에러메시지 상태변수 : 초기값 msgId[0] -> 기본 메시지가 출력됨
  const [idMsg, setIdMsg] = useState(msgId[0]);
  const [pwdMsg, setPwdMsg] = useState(msgPwd[0]);




  // [유효성 검사 함수]
  // [1]. 아이디 유효성 검사
  const changeUserId = (e) => {
    // 입력된 값 읽기
    let val = e.target.value;
    

    // 1. 빈값 체크 
    // 1-1. 빈값아니면 에러아님(false)
    if (val !== "") setUserIdError(false);
    // 1-2. 빈값이면 에러
    else {
        // (1) 메세지 띄우기(필수입력 메세지)
        setIdMsg(msgId[0]);
        // (2) 에러상태값 변경하기
        setUserIdError(true); 
    };

    // 실제 userId 상태변수값이 업데이트 되어야만 화면에 출력된다
    setUserId(val);
  }; ////// changeUserId 함수



  // 2. 비밀번호 유효성 검사 ///////////
  const changePwd = (e) => {
    // 입력된 값 읽기
    let val = e.target.value;

    // 1. 빈값 체크 
    // 1-1. 빈값아니면 에러아님(false)
    if (val !== "") setPwdError(false);
    // 1-2. 빈값이면 에러
    else {
        // (1) 메세지 띄우기(필수입력 메세지)
        setPwdMsg(msgPwd[0]);
        // (2) 에러상태값 변경하기
        setPwdError(true);
        
    };

    // 2. 기존입력값 반영하기
    setPwd(val);
  }; ///////// changePwd 함수 //////////




  // [ 전체 유효성검사 체크함수 ] ///////////
  const totalValid = () => {
    // 1. 모든 상태변수에 빈값일때 에러상태값 업데이트!
    if (!userId) setUserIdError(true);
    if (!pwd) setPwdError(true);
   

    // 2. 통과시 true, 불통과시 false 리턴처리
    // 통과조건 : 빈값아님 + 에러후크변수가 모두 false
    if (
      userId &&
      pwd &&
      !userIdError &&
      !pwdError 
    )
      return true;
    // 하나라도 false이면 false를 리턴함!
    else return false;
  }; /////////// totalValid 함수 ///////////

  // [submit 기능 함수]
  const onSubmit = (e) => {
    /// 1. 기본 서브밋 막기
    e.preventDefault();

    console.log("최종검사:", totalValid());

    // 2. 유효성검사 전체 통과시
    if (totalValid()) {

      // [회원정보를 로컬스토리지에 저장하기]

      // 1. 로컬스토리지 체크함수 호출(없으면 생성)
      initData();

      // 2. 로컬스토리지 변수할당
      let memData = localStorage.getItem("mem-data");

      // 3. 로컬스토리지 객체변환
      memData = JSON.parse(memData);
      console.log(memData);


      // 4. 아이디 존재 여부 검사하기

      let result = memData.find(v=>{
        if(v.uid === userId) return true;
      });
      console.log("결과:", result);
      

      // 4-1. 결과값이 없으면 메시지 보이기
      if(!result){
        // (1) 에러메시지 선택하기
        setIdMsg(msgId[1]);
        // (2) 에러메시지 보이기
        setUserIdError(true);
    } //// if ////////////
    
    // 4-2. 결과값이 있으면 비밀번호검사
    else{
        // (1) 아이디 에러메시지 숨기기
        setUserIdError(false);
        // (2) 비밀번호 검사 : 입력비번 == 결과 비번
        // -> 원래 비밀번호는 암호화되어 있으므로 백엔드 비밀번호 검사 모듈로 대부분 검사한다
        if (pwd === result.pwd){
            // 같을 경우 로그인 성공처리 


            /********************** [로그인 후 세팅작업] **********************/
            // 1. 로그인한 회원정보를 세션스토리지에 세팅
            sessionStorage.setItem("minfo", JSON.stringify(result));

            // 2. 컨텍스트 API의 로그인상태 업데이트 
            myCon.setLoginSts(sessionStorage.getItem("minfo"));
            // -> 업데이트된 minfo 세션스토리지값을 넣음


            // 3. 로그인 환영메시지 세팅함수 호출
            myCon.makeMsg(result.unm);


            // 4. 로그인 성공 메시지 버튼에 출력하기
            document.querySelector(".sbtn").innerText = "로그인되었습니다!";
       


            // 5. 라우팅 페이지 이동
            // 1초후 메인 페이지 이동
            setTimeout(() => {
                myCon.goPage("/");
            }, 1000);






        } /// if ////
        // 로그인 실패시 메시지 출력
        else {
            // (1) 비밀번호 에러 메시지 선택하기
            setPwdMsg(msgPwd[1]);
            // (2) 비밀번호 에러 메시지 보이기
            setPwdError(true);
        } /// else ///


      } /// else //////

      
    } ///// if /////

    // 3. 불통과시
    else {
      alert("가입하지 않았거나 비밀번호가 틀립니다. 로그인 정보를 확인해주세요");
    } ///// onSubmit 함수 ///////////////////
  }; /////////// onSubmit 함수 /////////////


  // 화면 랜더링 구역 /////////
  useEffect(()=>{
    // 아이디 입력창 포커스
    document.querySelector("#user-id").focus();
  },[]);

  return (
    <div className="outbx" style={{marginTop: "16%"}}>
      <section className="membx" style={{ minHeight: "400px" }}>
        <div className="logicon"></div>
        <h2>로그인</h2>
        <form method="post" action="process.php">
          <ul>
            <li>
              <label>ID : </label>
              <input id="user-id" type="text" maxLength="20" placeholder="아이디를 입력해주세요" value={userId} onChange={changeUserId} />
              {
              /* 에러일 경우 메시지 출력 */
              userIdError  &&(
              <div className="msg">
                <small style={{color:"red", fontSize:"11px"}}>{idMsg}</small>
              </div>
              )
              }
            </li>
            <li>
              <label>Password : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="비밀번호를 입력해주세요"
                value={pwd} onChange={changePwd}
              />
              {
              /* 에러일 경우 메시지 출력 */
              pwdError  &&(
              <div className="msg">
                <small style={{color:"red", fontSize:"11px"}}>{pwdMsg}</small>
              </div>
              )
              }
            </li>
            <li style={{ overflow: "hidden" }}>
              <button className="sbtn" onClick={onSubmit}>로그인</button>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
}

export default Login;
