# 🍽️ 새미네 부엌 프로젝트 🍱

<br />

<p align="center">
  <img src="https://github.com/user-attachments/assets/5cd6e13a-67a8-4d48-b5b5-57934d30648d" width="500" height="300">
</p>

<br />

<div align=center> 
  
  ## 💻 프로젝트 소개 
  <p>새미네 부엌_개인 프로젝트(1인 개발) </p>
  <p>개발 기간 : 2024.05.30 - 2024.07.22 </p> <br />
  <p> 두번째 개인프로젝트로 요리 레시피 정보 사이트입니다. <br /> 기존 사이트에서 제가 사용자로써 불편한 점을 개선하여 만든 사이트입니다.</p>
  베이킹이라는 취미로 생긴 관심과 <br />
  요리를 좋아하시는 어머니를 위해, 더 편리하게 이용하실 수 있기를 바라는 마음으로 이 프로젝트를 제작하게 되었습니다.
  
 자세한 내용은 [링크](https://www.notion.so/_-1-503ca1ff9d1245038a41eeda5ee7da34) 에서 확인하실 수 있습니다. 


<br />

<br />

<br />

## 🔧 Stacks
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white"/> <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white"/>


<br />
<br />

## 🖥️ 기획 의도
1. 기존 사이트의 주 이용자가 40대 이상 여성임을 고려하여, 화려한 기술보다는 **사용하기 쉽고 간편하게 이용**할 수 있도록 제작하였습니다.
2. 기존 사이트의 반복되는 슬라이드 구성에 지루함을 덜고자 **각각 다른 이미지 구성**을 주어 구현하였습니다.
3. 데이터 수집 후 구조화하였고, 정렬 및 검색을 통해 사용자들의 **편리성** 효과를 높였습니다.
4. 기존 사이트의 정보 부족을 해소하고자 '새미네 부엌'이라는 서브페이지를 추가했습니다. <br />
   이를 통해 사용자들에게 **브랜드를 강조 및 소개하고 더 많은 정보를 제공**하도록 제작했습니다.
6. 로그인, 회원가입 기능(Local storage를 이용) / 게시판 기능 / 스크랩 기능을 구현하였습니다.


<br />
<br />

## 🗂️ 아키텍처
### 디렉토리 구조

</div>

```
📦sk-app
 ┣ 📂build
 ┃ ┗ 📜index.html
 ┣ 📂node_modules
 ┣ 📂public
 ┃ ┣ 📂image
 ┃ ┃ ┣ 📂sub1
 ┃ ┃ ┣ 📂sub2
 ┃ ┃ ┣ 📂sub3
 ┃ ┃ ┃ ┣ 📂detail
 ┃ ┃ ┣ 📂sub4
 ┃ ┣ 📂uploads
 ┃ ┗ 📜index.html
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂data : 데이터 파일들
 ┃ ┃ ┣ 📂func : 기능 구현의 함수 
 ┃ ┃ ┣ 📂layout : 레이아웃 컴포넌트
 ┃ ┃ ┣ 📂modules : 페이지 컴포넌트 내부 부분 컴포넌트
 ┃ ┃ ┣ 📂pages : 페이지 컴포넌트
 ┃ ┃ ┗ 📂plugin : swiper를 이용한 플러그인
 ┃ ┃ ┃ ┣ 📂css : 플러그인의 css
 ┃ ┣ 📂css
 ┃ ┣ 📂static
 ┃ ┃ ┗ 📂fonts : 사이트 폰트 파일
 ┃ ┗ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┗ 📜package.json
```
