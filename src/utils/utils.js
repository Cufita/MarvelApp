/*All this code was made with the purpose of making it the safest way, due to some problem it doesn't work because the MD5 library doesnt give me the correct hashcode, so, i opted for the second option :) */
import MD5 from "crypto-js/md5";

const API_URL = "https://gateway.marvel.com";
const getHash = (ts, secretKey, PublicKey) => {
  return MD5(ts + secretKey + PublicKey).toString();
};

const fetchHeroes = async (value) => {
  const heroUrl = `${API_URL}/v1/public/characters`;

  const ts = 1;
  const apiKey = "e3d83ba42a698c09825cd29e31b7cf19 ";
  const privateKey = "3545bbfc9a0a112484650ea4880ea77e0756e13c";
  const hash = getHash(ts, privateKey, apiKey);
  const url = `${heroUrl}?ts=${ts}&apiKey=${apiKey}&hash=${hash}`;

  /*This second Option */

  const hashOnline = "cb7180257c1d7a69c533200be688ea67";

  const url1 =
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e3d83ba42a698c09825cd29e31b7cf19&hash=cb7180257c1d7a69c533200be688ea67&nameStartsWith=" +
    value;

  try {
    const response = await fetch(url1);
    const data = await response.json();
    console.log(data.data.results);
    return data.data.results;
  } catch (err) {
    console.log(err);
    return;
  }
};

const fetchHero = async (id) => {
  const url =
    "https://gateway.marvel.com/v1/public/characters/" +
    id +
    "?ts=1&apikey=e3d83ba42a698c09825cd29e31b7cf19&hash=cb7180257c1d7a69c533200be688ea67";

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data.results);
    return data.data.results;
  } catch (err) {
    console.log(err);
    return;
  }
};

export { fetchHeroes, fetchHero };
