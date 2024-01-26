// Функція отримує код вибраного елемента обрізає нулі і записує в стейт
export const cutCpvCode = (code) => {
  const cpvCode = [];

  for (let index = 0; index < code.length; index++) {
    if (code[index] === "0" && index !== 0) {
      break;
    }
    if (code[index] === "-") {
      break;
    } else {
      cpvCode.push(code[index]);
    }
  }

  const stringCpvCode = cpvCode.join("");
  // console.log("stringCpvCode: ", stringCpvCode);
  return stringCpvCode;
};

// Функція створення змінної (кількості нулів) для регулярного виразу
export function createQueryString(code) {
  // Задає початковий рядок
  // 00000000-0
  const query = ["0", "0", "0", "0", "0", "0", "0", "0", "-", "."];

  // Заміна елементів у масиві початкового рядка заданим числом
  // eslint-disable-next-line no-unused-vars
  const replacedCode = query.splice(0, code.length, ...code);
  // console.log("replacedCode: ", query);

  // eslint-disable-next-line no-unused-vars
  const replacedZero = query.splice(code.length, 1, ".");
  // console.log("replacedDot: ", query);

  const queryString = query.join("");
  // console.log("queryString: ", queryString);

  return queryString;
}

// Функція фільтрує елементи для наступної підкатегорії
export function filterNextLevelItems(subCategories, selectedCode) {
  if (subCategories.length > 0) {
    const querry = createQueryString(selectedCode);
    // console.log("querry: ", querry);

    const regex = new RegExp(`^${querry}`);
    // console.log("regex: ", regex);

    const currentLevelItems = subCategories.filter(
      (item) => item.Code.search(regex) !== -1
    );
    // console.log("currentLevelItems: ", currentLevelItems);
    return currentLevelItems;
  }
}

// Колір _____________________________________________________________________________________
// Функція створює css клас в залежності від довжини cpvКоду
export function createLevel(code) {
  // console.log("code: ", code);

  var level = "";
  switch (code.length) {
    case 1:
      level = "main";
      break;
    case 2:
      level = "main";
      break;
    case 3:
      level = "first";
      break;
    case 4:
      level = "second";
      break;
    case 5:
      level = "third";
      break;
    case 6:
      level = "four";
      break;
    case 7:
      level = "five";
      break;
    case 8:
      level = "six";
      break;
    case 9:
      level = "seven";
      break;
    default:
      level = "default";
      break;
  }
  return level;
}
// Функція отримує проп із назвою поточного рівня вкладеності повертає колір із констант
export const setBgColor = ({ level, theme }) => {
  // console.log(theme);
  switch (level) {
    case "main":
      return theme.colors.mainLevelColor;
    case "first":
      return theme.colors.firstLevelColor;
    case "second":
      return theme.colors.secondLevelColor;
    case "third":
      return theme.colors.thirdLevelColor;
    case "four":
      return theme.colors.materialColor;
    case "five":
      return theme.colors.materialColor;
    case "six":
      return theme.colors.materialColor;
    case "seven":
      return theme.colors.materialColor;
    default:
      return theme.colors.mainLevelColor;
  }
};

// Пошук _____________________________________________________________________________________
// Функція перевіряє чи користувач ввів число чи слово
export function checkIsString(query) {
  const isString = Number.isNaN(Number.parseInt(query));

  // console.log("isString: ", isString);
  return isString;
}

// Функція повертає число із введеного користувачем рядка
export function parseNumber(query) {
  const number = Number.parseInt(query);

  // console.log("number: ", number);
  return number;
}

// Функція фільтрує категорії із результату пошуку
export function onLyCategory(items) {
  const categorys = items.filter(
    (element) => cutCpvCode(element.Code).length <= 5
  );
  // console.log("categorys: ", categorys);
  return categorys;
}

// Функція фільтрує матеріали  із результату пошуку
export function onLyMaterial(items) {
  const materials = items.filter(
    (element) => cutCpvCode(element.Code).length >= 6
  );
  // console.log("materials: ", materials);
  return materials;
}
// Функція підфарбовує слово в результатах пошуку
export function hiLight(query, text) {
  const regex = new RegExp(`(${query})`, "gi");
  console.log("regex: ", regex);

  const parts = text.split(regex);
  console.log("parts: ", parts);

  const result = parts.map((part, index) =>
    regex.test(part) ? <mark key={index}>{part}</mark> : part
  );
  console.log("result: ", result);

  return result;
}
