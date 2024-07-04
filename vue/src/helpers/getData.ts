export async function getData(url: string) {
  let reponse = await fetch(url);

  return await reponse.json();
}
