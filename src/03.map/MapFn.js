import { brands } from "./api";

export const MapFn = () => {
  //   const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  //   const food = "๋์ฅ์ฐ๊ฐ";

  //   const newNum = nums.map((x) => x + "๐");
  //   =>๊ธฐ์กด๋ฐฐ์ด์ ๋ณ๊ฒฝํ์ง์๊ณ  ์๋ก์ด ๋ฐฐ์ด๋ก ๋ฐํ์์ผ์ค
  //   =>๋ถ๋ณ์ฑ์ ์ ์ง ์์ผ์ค
  //   console.log(nums);
  //   console.log(newNum);

  //   const newNum = nums.map((num) => num * 2);
  //   console.log(newNum);

  return (
    <div>
      {/* {nums.map((num) => (
        <div key={num}>{num}๋ฒ์งธ ๊ฒ์๋ฌผ</div>
      ))} */}

      <h2>๋ธ๋๋</h2>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
            ๋ธ๋๋: {brand.name}, ๋ชจ๋ํฐ: {brand.monitor}
          </li>
        ))}
      </ul>
    </div>
  );
};
