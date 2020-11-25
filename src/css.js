const string = `.skin * {margin: 0;padding: 0;box-sizing: border-box;}
.skin *::before, .skin *::after {box-sizing: border-box}
.skin {
  background-color: #ffdb00;
  position: relative;
}
.nose {
  position: absolute;
  left: 50%;
  top: 130px;
  margin-left: -14px;
  border: 14px solid transparent;
  border-top-color: #000;
  border-radius: 14px;;
}
.nose:hover {
  animation: wave 500ms infinite linear;
}
.eye {
  width: 64px;
  height: 64px;
  border: 2px solid black;
  background-color: #2e2e2e;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  border-radius: 50%;
}
.eye::before {
  content: "";
  border: 3px solid black;
  width: 28px;
  height: 28px;
  display: block;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  left: 10px;
}
.eye.left {
  transform: translateX(-120px);
}
.eye.right {
  transform: translateX(120px);
}
.mouth {
  width: 180px;
  height: 100px;
  position: absolute;
  top: 164px;
  left: 50%;
  transform: translateX(-50%);
}
.mouth .up {
  position: relative;
  top: 0;
  z-index: 1;
}
.mouth .up .lip {
  width: 88px;
  height: 40px;
  border: 3px solid black;
  background-color: #ffdb00;
  position: absolute;
  top: -10px;
  box-shadow: 0 -5px 0 #ffdb00;
}
.mouth .up .lip.right {
  right: 0;
}
.mouth .up .lip.left {
  left: 0;
  border-bottom-left-radius: 82px 40px;
  border-top: none;
  border-right: none;
  border-bottom: 3px solid black;
  border-left: 3px solid black;
  transform: rotate(-35deg);
}
.mouth .up .lip.right {
  border-bottom-right-radius: 82px 40px;
  border-top: none;
  border-left: none;
  border-right: 3px solid black;
  border-bottom: 3px solid black;
  transform: rotate(35deg);
}
.mouth .up .lip.left::before,
.mouth .up .lip.right::before {
  content: "";
  width: 88px;
  height: 2px;
  background-color: #ffdb00;
  position: absolute;
}
.mouth .up .lip.left::before {
  top: -1px;
  left: 0;
}
.mouth .up .lip.right::before {
  top: -1px;
  left: -3px;
}
.mouth .up .lip.left::after,
.mouth .up .lip.right::after{
  content: "";
  width: 2px;
  height: 40px;
  background-color: #ffdb00;
  position: absolute;
}
.mouth .up .lip.left::after {
  top: -3px;
  right: -1px;
}
.mouth .up .lip.right::after {
  top: -3px;
  left: -1px;
}
.mouth .down {
  height: 170px;
  width: 100%;
  position: absolute;
  top: 0;
  overflow: hidden;
}
.mouth .down .outside {
  border: 3px solid black;
  width: 100%;
  height: 800px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 102px / 425px;
  background-color: #a71008;
  overflow: hidden;
}
.mouth .down .outside .inside {
  background-color: #ff5b5d;
  width: 140px;
  height: 130px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}
.face {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 84px;
  height: 84px;
  border: 3px solid black;
  background-color: #fe1800;
  border-radius: 50%;
  top: 210px;
  z-index: 1;
}
.face.left {
  margin-left: -170px;
}
.face.right {
  margin-left: 170px;
}
`
export default string