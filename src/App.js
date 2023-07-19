// import logo from "./logo.svg";
import "./App.css";
// import ChildComponent from "./child";
// import TimerComponent from "./timer";
import MainPage from "./main";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  // const text = "인프런 수강생 여러분 화이팅!";
  // const sayHello = function () {
  //   return <h3>인프런 강의 너무 좋아</h3>;
  // };
  // const sayHello2 = function () {
  //   alert("안녕하세요");
  // };
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //     <div>
  //       <h1>안녕하세요!</h1>
  //       <h2>{text}</h2>
  //       {sayHello()}
  //       <div onClick={sayHello2}>클릭해주세요</div>
  //       <TimerComponent />
  //       <ChildComponent name="그랩" age={27} />
  //       <ChildComponent name="민수" age={25} />
  //       <ChildComponent name="철수" age={30} />
  //     </div>
  //   </div>
  // );
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPage />
          </Route>
          <Route exact={true} path="/product/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
