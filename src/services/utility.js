// Функція отримує код вибраного елемента обрізає нулі і повертає число
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
// Функція отримує проп із назвою поточного рівня вкладеності повертає колір із констант
export const setBgColor = ({ level, theme }) => {
  // console.log("theme: ", theme);
  switch (level) {
    case 1 || 2:
      return theme.colors.mainLevelColor;
    case 3:
      return theme.colors.firstLevelColor;
    case 4:
      return theme.colors.secondLevelColor;
    case 5:
      return theme.colors.thirdLevelColor;
    case 6:
      return theme.colors.fourLevelColor;
    case 7:
      return theme.colors.fiveLevelColor;
    case 8:
      return theme.colors.materialColor;
    case 9:
      return theme.colors.materialColor;
    default:
      return theme.colors.mainLevelColor;
  }
};
// Функція отримує проп із назвою ролі користувача і повертає колір із констант
export const setRoleColor = ({ role, theme }) => {
  // console.log("role: ", role);
  // console.log(theme);
  switch (role) {
    case "admin":
      return theme.colors.mainLevelColor;
    case "user":
      return theme.colors.firstLevelColor;
    case "designer":
      return theme.colors.secondLevelColor;
    case "creator":
      return theme.colors.thirdLevelColor;
    case "service":
      return theme.colors.fourLevelColor;
    case "rental":
      return theme.colors.fiveLevelColor;
    default:
      return theme.colors.muted;
  }
};

export const validationColor = (errors, values, defaultColor = "#000000") => {
  // console.log("values: ", values);
  // console.log("errors: ", errors);
  if (
    errors === "Your password is little secure. Add a number!" ||
    errors === "Your password is little secure. Add a letter!"
  ) {
    return "#F6C23E";
  }
  // console.log(values ? (errors && "#E74A3B") || "#3CBC81" : defaultColor);
  // Перевіряє чи є щось у інпуті, якщо є то перевіряємо чи є помилка
  return values ? (errors && "#E74A3B") || "#3CBC81" : defaultColor;
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
  // Якщо код починається з нуля то потрібно додати цей нуль, щоб отримати правильний результат пошуку
  if (query.startsWith("0")) {
    // console.log("with zero", "0".concat(Number.parseInt(query)));
    return "0".concat(Number.parseInt(query));
  } else return Number.parseInt(query);
}

// Функція підфарбовує слово в результатах пошуку
export function hiLight(query, text) {
  const regex = new RegExp(`(${query})`, "gi");
  // console.log("regex: ", regex);

  const parts = text.split(regex);
  // console.log("parts: ", parts);

  const result = parts.map((part, index) =>
    regex.test(part) ? <mark key={index}>{part}</mark> : part
  );
  // console.log("result: ", result);

  return result;
}

// Функція створює опції для реакт селекта

export function makeOptions(array) {
  if (array.length < 1) {
    // console.log("масив пустий");
    return;
  }
  return array.map((category) => ({
    value: category,
    label: category.DescriptionUA,
  }));
}

// Функція для створення списку options
export const createOptionsFromUnits = (materials) => {
  // Об'єкт для зіставлення значень Unit з мітками
  const unitLabels = {
    category: "Категорія",
    "pcs.": "Штука",
    m: "Метр погонний",
    m2: "Метр квадратний",
    m3: "Метр кубічний",
    t: "Тона",
    kg: "Кілограм",
  };
  // Створюємо об'єкт для зберігання унікальних значень поля Unit
  const uniqueUnits = {};

  // Проходимо через всі матеріали
  materials.forEach((material) => {
    const unit = material.Unit;
    if (unit && !uniqueUnits[unit]) {
      // Додаємо унікальні значення в об'єкт
      uniqueUnits[unit] = true;
    }
  });

  // Перетворюємо унікальні значення в масив об'єктів формату { value: "unit", label: "label" }
  const options = Object.keys(uniqueUnits).map((unit) => {
    // Отримуємо мітку для поточного unit з об'єкта unitLabels, або використовуємо сам unit як мітку за замовчуванням
    const label = unitLabels[unit] || unit;
    return { value: unit, label: label };
  });

  return options;
};
