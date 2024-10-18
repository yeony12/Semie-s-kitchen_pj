//// 회원가입 페이지 컴포넌트 - member.jsx

import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";



import "../../css/member.scss";

// 로컬 스토리지 생성 JS
import { initData } from "../func/mem_fn";


function Member() {
  // 라우터 이동 네비게이트
  const goNav = useNavigate();
  

  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");
  const [chkPwd, setChkPwd] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");


  const [userIdError, setUserIdError] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [chkPwdError, setChkPwdError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);



  const msgId = [
    "아이디를 최소 5글자 이상 입력해주세요",
    "이미 사용중인 아이디입니다.",
    "That's a great ID!",
  ];


  const msgEtc = {
    pwd: " 5~15자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.",
    confPwd: "비밀번호가 일치하지않습니다.",
    req: "필수 항목입니다.",
    email: "올바른 형식의 이메일이 아닙니다.",
  }; ///// msgEtc ///////


  // [3] 에러메시지 상태변수 : 초기값 msgId[0]
  const [idMsg, setIdMsg] = useState(msgId[0]);


  
  const changeUserId = e => {
    // 입력된 값 읽기
    let val = e.target.value;

    // 아이디 유효성 검사식
    const valid = /^[A-Za-z0-9+]{5,}$/;
   
    // 에러상태 분기하기

    if (valid.test(val)){
  
        initData();
    
        let memData = localStorage.getItem("mem-data");

        memData = JSON.parse(memData);
        
        
        let isT = memData.some((v) => v.uid === val);
      
        // true일 경우 중복데이터 메시지 표시 
        if(isT){
            // 에러메세지 업데이트
            setIdMsg(msgId[1]);
            // 에러상태값 업데이트
            setUserIdError(true);
            
        } /// if ////
        // false일 경우 성공 메시지 표시
        else{
        
            // 에러상태값 업데이트 : 에러가 아님(false)
            setUserIdError(false); 
        }
     
    }
    
    // 에러일 때 : 유효성 검사 에러
    else{
        // 에러메세지 업데이트
        setIdMsg(msgId[0]);
        // 아이디 에러상태 업데이트(true)
        setUserIdError(true);
    } // else

    // 실제 userId 상태변수값이 업데이트 되어야만 화면에 출력된다
    setUserId(val);

  }; ////// changeUserId 함수

  // 2. 비밀번호 유효성 검사 ///////////
  const changePwd = (e) => {
    // 입력된 값 읽기
    let val = e.target.value;

    // 비밀번호 유효성 검사식
    const valid = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    // 에러에 따른 상태값 변경
    if (valid.test(val)) setPwdError(false);
    else setPwdError(true);

    // 기존 입력 값 반영하기
    setPwd(val);
  }; ///////// changePwd 함수 //////////



  //  비밀번호 확인 유효성 검사 ///////////
  const changeChkPwd = (e) => {
    // 입력된 값 읽기
    let val = e.target.value;
    
    //  비밀번호 입력 내용과 일치 여부 확인
    if (pwd === val) setChkPwdError(false);
    else setChkPwdError(true);

    //  기존 입력값 반영하기
    setChkPwd(val);
  }; ///////// changeChkPwd 함수 //////////



  // 사용자이름 유효성 검사 ///////////
  const changeUserName = (e) => {
    // 입력된 값읽기
    let val = e.target.value;
    
    // 1. 빈값체크
    if (val !== "") setUserNameError(false);
    else setUserNameError(true);

    // 2. 기존입력값 반영하기
    setUserName(val);
  }; ///////// changeUserName 함수 //////////



  //  이메일 유효성 검사 ///////////
  const changeEmail = (e) => {
    // 입력된 값읽기
    let val = e.target.value;
    
    // 이메일 유효성 검사식
    const valid =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;


    //  에러에 따른 상태값 변경
    if (valid.test(val)) setEmailError(false);
    else setEmailError(true);

    //  기존입력값 반영하기
    setEmail(val);
  }; ///////// changeEmail 함수 //////////



    // [ 전체 유효성검사 체크함수 ] ///////////
    const totalValid = () => {
    // 1. 모든 상태변수에 빈값일때 에러상태값 업데이트!
    if (!userId) setUserIdError(true);
    if (!pwd) setPwdError(true);
    if (!chkPwd) setChkPwdError(true);
    if (!userName) setUserNameError(true);
    if (!email) setEmailError(true);

    // 2. 통과시 true, 불통과시 false 리턴처리
    // 통과조건 : 빈값아님 + 에러후크변수가 모두 false
    if (
      userId &&
      pwd &&
      chkPwd &&
      userName &&
      email &&
      !userIdError &&
      !pwdError &&
      !chkPwdError &&
      !userNameError &&
      !emailError
    )
      return true;
    // 하나라도 false이면 false를 리턴함!
    else return false;
  }; /////////// totalValid 함수 ///////////


  // [submit 기능 함수]
  const onSubmit = e =>{
    /// 1. 기본 서브밋 막기 
    e.preventDefault();

    console.log("최종검사:", totalValid());

    // 2. 유효성검사 전체 통과시
    if(totalValid()){
      
        initData();

        // 2. 로컬스토리지 변수할당
        let memData = localStorage.getItem("mem-data");

        // 3. 로컬스토리지 객체변환
        memData = JSON.parse(memData);
        
        // 최대수를 위한 배열값 뽑기 (idx항목)
        let temp = memData.map(v=>v.idx);
        // 다음 번호는 항상 최대수 +1이다

        // 4. 새로운 데이터 구성하기
        let newData = {
            idx : Math.max(...temp)+1,
                uid : userId,
                pwd : pwd,
                unm: userName,
                eml: email,
        };

        // 5. 데이터 추가하기 : 배열에 데이터 추가 push()
        memData.push(newData);

        // 6. 로컬스토리지에 반영하기 : 문자화해서 넣어야함
        localStorage.setItem("mem-data", JSON.stringify(memData));


        // 7. 회원가입환영 메시지  + 로그인 페이지 이동 
        // 버튼 텍스트에 환영메시지
        document.querySelector(".sbtn").innerText = "반갑습니다 가입을 환영합니다!";
        // 1초후 페이지 이동 
        setTimeout(()=>{
            goNav("/login");
        }, 1000); 

    } ///// if /////
    // 3. 불통과시
    else{
        alert("입력값을 확인해주세요");

    } ///// onSubmit 함수 ///////////////////

  }; /////////// onSubmit 함수 /////////////


  // 코드 리턴 구역
  return (
    <div className="outbx">
      <section className="membx">
        <div className="memicon"></div>
        <h2>회원가입</h2>
        <h1>함께 하는 순간을 기다리고 있었습니다 :-)</h1>
        <form action="process.php" method="post">
          <ul>
            <li>
                {/* 1. 아이디 */}
              <label>ID : </label>
              <input type="text" maxLength="20" placeholder="아이디를 입력해주세요" 
              // defaultValue={gg} -> 기본으로 씀
              value={userId} onChange={changeUserId}/>
              {
              /* 에러일 경우 메시지 출력 */
              // 조건문 && 출력요소
              userIdError &&(
              <div className="msg">
                <small style={{color:"red", fontSize:"11px"}}>{idMsg}</small>
              </div>
              )
              }
              {
              /* 통과시 메시지 출력 */
              // 조건문 && 출력요소
              // 조건 추가 : userId가 입력 전일 때 안보임처리
              // userId가 입력전엔 false로 리턴됨
                !userIdError && userId &&(
                <div className="msg">
                    <small style={{color:"green", fontSize:"11px"}}>{msgId[2]}</small>
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
              // 조건문 && 출력요소
              pwdError &&(
              <div className="msg">
                <small style={{color:"red", fontSize:"11px"}}>{msgEtc.pwd}</small>
              </div>
              )
              }
            </li>
            <li>
              <label>Confirm Password : </label>
              <input
                type="password"
                maxLength="20"
                placeholder="비밀번호를 한번 더 입력해주세요"
                value={chkPwd} onChange={changeChkPwd}
              />
               {
              /* 에러일 경우 메시지 출력 */
              // 조건문 && 출력요소
              chkPwdError &&(
              <div className="msg">
                <small style={{color:"red", fontSize:"11px"}}>{msgEtc.confPwd}</small>
              </div>
              )
              }
            </li>
            <li>
              <label>User Name : </label>
              <input type="text" maxLength="20" placeholder="이름을 입력해주세요" value={userName} onChange={changeUserName} />
              {
              /* 에러일 경우 메시지 출력 */
              // 조건문 && 출력요소
             userNameError  &&(
              <div className="msg">
                <small style={{color:"red", fontSize:"11px"}}>{msgEtc.req}</small>
              </div>
              )
              }
            </li>
            <li>
              <label>Email : </label>
              <input type="text" maxLength="50" placeholder="이메일을 입력해주세요" value={email} onChange={changeEmail} />
              {
              /* 에러일 경우 메시지 출력 */
              // 조건문 && 출력요소
              emailError  &&(
              <div className="msg">
                <small style={{color:"red", fontSize:"11px"}}>{msgEtc.email}</small>
              </div>
              )
              }
            </li>
            <li style={{ overflow: "hidden" }}>
              <button className="sbtn" onClick={onSubmit}>회원가입</button>
            </li>
            <li>
              이미 회원이신가요?<Link to="/login">로그인하기</Link>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
}

export default Member;
