// 게시판을 위한 로컬스토리지 생성 JS

/************************************ 
    [ 게시판 기본 데이터 구조 ]
    1. 기본키(유일키) : idx
    2. 제목 : tit
    3. 내용 : cont
    4. 첨부파일 : att
    5. 입력날짜 : date
    6. 작성자아이디 : uid
    7. 작성자이름 : unm
    8. 조회수 : cnt
************************************/

// 기초 데이터 제이슨 불러오기
import orgData from "../data/board.json";


// [ 로컬스토리지 클리어 ] /////////
const clearBoardData = () => {
    localStorage.removeItem("board-data");
  }; /////////// clearData //////////////
  
  // [ 로컬스토리지 초기체크셋팅 ] ////////////
  const initBoardData = () => {
    
    if (localStorage.getItem("board-data") === null) {
      localStorage.setItem(
        "board-data", JSON.stringify(orgData)
      );
    }
  }; ///////////// initData /////////////////
  
  export { clearBoardData, initBoardData };
  