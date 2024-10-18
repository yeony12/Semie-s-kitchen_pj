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
  <p> 두번째 개인프로젝트 사이트입니다. <br /> 기존 사이트를 제가 사용자로써 불편한 점을 개선하여 만든 사이트입니다.</p>
  
 자세한 내용은 [링크](https://www.notion.so/_-1-503ca1ff9d1245038a41eeda5ee7da34) 에서 확인하실 수 있습니다. 


<br />

<br />

<br />

## 🔧 Stacks
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white"/> <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white"/>


<br />
<br />

## 🖥️ 기획 의도



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
 ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┣ 📜board.json
 ┃ ┃ ┃ ┣ 📜combodata.js
 ┃ ┃ ┃ ┣ 📜cook_board.json
 ┃ ┃ ┃ ┣ 📜cookarea.js
 ┃ ┃ ┃ ┣ 📜gnb.js
 ┃ ┃ ┃ ┣ 📜headerarea.js
 ┃ ┃ ┃ ┣ 📜intro.js
 ┃ ┃ ┃ ┣ 📜mainarea.js
 ┃ ┃ ┃ ┣ 📜sub1.js
 ┃ ┃ ┃ ┣ 📜sub2_1.js
 ┃ ┃ ┃ ┣ 📜sub2_2.js
 ┃ ┃ ┃ ┣ 📜sub3.js
 ┃ ┃ ┃ ┣ 📜sub3_detail.js
 ┃ ┃ ┃ ┗ 📜sub4.js
 ┃ ┃ ┣ 📂func
 ┃ ┃ ┃ ┣ 📜board_fn.js
 ┃ ┃ ┃ ┣ 📜detail_letter.js
 ┃ ┃ ┃ ┣ 📜function.js
 ┃ ┃ ┃ ┣ 📜header.js
 ┃ ┃ ┃ ┣ 📜intro_letter.js
 ┃ ┃ ┃ ┣ 📜maincook.js
 ┃ ┃ ┃ ┗ 📜mem_fn.js
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┣ 📜FooterArea.jsx
 ┃ ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┃ ┣ 📜MainArea.jsx
 ┃ ┃ ┃ ┗ 📜TopArea.jsx
 ┃ ┃ ┣ 📂modules
 ┃ ┃ ┃ ┣ 📜Cookpic.jsx
 ┃ ┃ ┃ ┣ 📜Scrap.jsx
 ┃ ┃ ┃ ┣ 📜Searching.jsx
 ┃ ┃ ┃ ┣ 📜SearchingData.jsx
 ┃ ┃ ┃ ┣ 📜Showmenu.jsx
 ┃ ┃ ┃ ┣ 📜dCon.jsx
 ┃ ┃ ┃ ┗ 📜mainlab.jsx
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┣ 📜CookCook.jsx
 ┃ ┃ ┃ ┣ 📜CookEvent.jsx
 ┃ ┃ ┃ ┣ 📜CookGuide.jsx
 ┃ ┃ ┃ ┣ 📜CookLab.jsx
 ┃ ┃ ┃ ┣ 📜CookQnA.jsx
 ┃ ┃ ┃ ┣ 📜CookSol.jsx
 ┃ ┃ ┃ ┣ 📜Intro.jsx
 ┃ ┃ ┃ ┣ 📜LabDetail.jsx
 ┃ ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┃ ┣ 📜Member.jsx
 ┃ ┃ ┃ ┣ 📜SearchPage.jsx
 ┃ ┃ ┃ ┗ 📜main.jsx
 ┃ ┃ ┗ 📂plugin
 ┃ ┃ ┃ ┣ 📂css
 ┃ ┃ ┃ ┃ ┣ 📜swiper.scss
 ┃ ┃ ┃ ┃ ┗ 📜swiper_guide.scss
 ┃ ┃ ┃ ┣ 📜SwiperEvent.jsx
 ┃ ┃ ┃ ┣ 📜SwiperGuide.jsx
 ┃ ┃ ┃ ┗ 📜SwiperLab.jsx
 ┃ ┣ 📂css
 ┃ ┃ ┣ 📜board_file.scss
 ┃ ┃ ┣ 📜cookcook.scss
 ┃ ┃ ┣ 📜cookevent.scss
 ┃ ┃ ┣ 📜cookguide.scss
 ┃ ┃ ┣ 📜cooklab.scss
 ┃ ┃ ┣ 📜cookpic.scss
 ┃ ┃ ┣ 📜cookqna.scss
 ┃ ┃ ┣ 📜cooksol.scss
 ┃ ┃ ┣ 📜core.scss
 ┃ ┃ ┣ 📜detail.scss
 ┃ ┃ ┣ 📜footer_area.scss
 ┃ ┃ ┣ 📜index.scss
 ┃ ┃ ┣ 📜intro.scss
 ┃ ┃ ┣ 📜main.scss
 ┃ ┃ ┣ 📜member.scss
 ┃ ┃ ┣ 📜reset.scss
 ┃ ┃ ┣ 📜scrap.scss
 ┃ ┃ ┣ 📜searching.scss
 ┃ ┃ ┗ 📜top_area.scss
 ┃ ┣ 📂static
 ┃ ┃ ┗ 📂fonts
 ┃ ┗ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┗ 📜package.json
```
