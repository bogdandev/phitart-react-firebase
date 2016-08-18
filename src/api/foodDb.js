const reportPath = 'http://api.nal.usda.gov/ndb/reports/?type=b&format=json&api_key=wYlJohN77wYYqOtV7F6gHRj3TCEF48W33mQVOkI2&ndbno=';
const searchPath = 'http://api.nal.usda.gov/ndb/search/?format=json&api_key=wYlJohN77wYYqOtV7F6gHRj3TCEF48W33mQVOkI2&q=';

export const searchFood = searchInput => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
      resolve(JSON.parse(xhr.response));
    };
    xhr.onerror = reject;
    xhr.open('GET', searchPath + searchInput);
    xhr.send();
  });
};

export const getDetails = dbno => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
      resolve(JSON.parse(xhr.response));
    };
    xhr.onerror = reject;
    xhr.open('GET', reportPath + dbno);
    xhr.send();
  });
};
