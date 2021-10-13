export const Food = ({ menu }) => {
  console.log(menu);
  return (
    <div>
      <h3>오늘의 메뉴는</h3>
      <ul>
        <li>
          오늘의 메뉴는 <b>{menu[0].name}</b> 이고 사이드메뉴는 {menu[0].side}
          이다
        </li>
        <li>
          오늘의 메뉴는 <b>{menu[1].name}</b> 이고 사이드메뉴는 {menu[1].side}
          이다
        </li>
        <li>
          오늘의 메뉴는 <b>{menu[2].name}</b> 이고 사이드메뉴는 {menu[2].side}
          이다
        </li>
        <li>
          오늘의 메뉴는 <b>{menu[3].name}</b> 이고 사이드메뉴는 {menu[3].side}
          이다
        </li>
        <li>
          오늘의 메뉴는 <b>{menu[4].name}</b> 이고 사이드메뉴는 {menu[4].side}
          이다
        </li>
      </ul>
    </div>
  );
};
