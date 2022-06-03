/* User Preference
Authors:
        A01378688 Daniel Garcia Barajas*/

//Import Modules
import i18n from "../i18n";

export const loadUserPreferences = (id) => {
  let theme;
  let txtSize;

  const body = document.body;

  // Fetch
  const myHeadersToken = new Headers();
  myHeadersToken.append(
    "Authorization",
    `Bearer ${window.localStorage.getItem("token")}`
  );

  const requestOptions = {
    method: "GET",
    headers: myHeadersToken,
  };

  fetch(
    `https://backtest.bankonnect.link/userConfig/getUserConfig?id=${id}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      const resultJSON = JSON.parse(result);

      theme = localStorage.getItem("theme");
      body.classList.replace(theme, resultJSON.color);
      localStorage.setItem("theme", resultJSON.color);

      txtSize = localStorage.getItem("txtSize");
      body.classList.replace(txtSize, resultJSON.textSize);
      localStorage.setItem("txtSize", resultJSON.textSize);

      i18n.changeLanguage(resultJSON.language);
    })
    .catch((error) => console.log("error", error));

  // Theme
  const lightTheme = "light";
  const darkTheme = "dark";
  const darkTheme_Protanopia = "dark_protanopia";
  const darkTheme_Deuteranopia = "dark_deuteranopia";
  const darkTheme_Tritanopia = "dark_tritanopia";
  const darkTheme_Protanomaly = "dark_protanomaly";
  const darkTheme_Deuteranomaly = "dark_deuteranomaly";
  const darkTheme_Tritanomaly = "dark_tritanomaly";

  // Text Size
  const smallTxtSize = "small";
  const mediumTxtSize = "medium";
  const bigTxtSize = "big";

  // Check in local  storage
  if (localStorage) {
    theme = localStorage.getItem("theme");
    txtSize = localStorage.getItem("txtSize");
  }

  // Add Text Size
  if (
    txtSize === smallTxtSize ||
    txtSize === mediumTxtSize ||
    txtSize === bigTxtSize
  ) {
    body.classList.add(txtSize);
  } else {
    body.classList.add(mediumTxtSize);
  }

  // Add Theme
  if (
    theme === lightTheme ||
    theme === darkTheme ||
    theme === darkTheme_Protanopia ||
    theme === darkTheme_Deuteranopia ||
    theme === darkTheme_Tritanopia ||
    theme === darkTheme_Protanomaly ||
    theme === darkTheme_Deuteranomaly ||
    theme === darkTheme_Tritanomaly
  ) {
    body.classList.add(theme);
  } else {
    body.classList.add(darkTheme);
  }
};
