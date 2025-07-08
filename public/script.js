const getDataFromBackend = async () => {
  const res = await fetch("http://localhost:8000/myName");
  const data = await res.json();
  console.log(data);
};
getDataFromBackend();
