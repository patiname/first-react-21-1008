import { Component } from "react";

export class ClassComponent extends Component {
  render() {
    // console.log(this.props.nickName);
    // const props = this.props;
    const nickName = this.props.nickName;
    const age = this.props.age;

    console.log(this.props.menu);

    return (
      <>
        <div>클래스 함수 컴포넌트!</div>
        <h3>
          안녕 내이름은 {nickName} 나이는 {age} 살!!
        </h3>
        <li>
          오늘의 메뉴는 <b>{this.props.menu[0].name}</b> 이고 사이드메뉴는
          {this.props.menu[0].side}
          이다
        </li>
      </>
    );
  }
}

// export default ClassComponent;
