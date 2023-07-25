import MD5 from "crypto-js/md5";

const API_URL = process.env.REACT_APP_BASE_URL;

const getHash = (ts, secretKey, PublickKey) => {
  return MD5(ts + secretKey + PublickKey).toString();
};

const fetchHeroes = async (value) => {
  const heroUrl = `${API_URL}/v1/public/characters`;

  const ts = Date.now().toString();
  const apiKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
  const hash = getHash(ts, privateKey, apiKey);

  const url = `${heroUrl}?ts=${ts}&apiKey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;

  try {
    const response = await fetch(url);
    console.log(data);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return;
  }
};

export { fetchHeroes };
