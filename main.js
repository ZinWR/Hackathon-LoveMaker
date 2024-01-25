// let allLine;

async function fetched() {
  const url =
    "https://nerdy-pickup-lines1.p.rapidapi.com/cheesy-pickup-lines/random";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "71044ec259mshc583b240f639463p13518bjsn2f93a7631bd2",
      "X-RapidAPI-Host": "nerdy-pickup-lines1.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  document.getElementById("line").innerText = await result[
    "random_cheesy_pickup_line"
  ];
}

async function fetched2() {
  const url = "https://nerdy-pickup-lines1.p.rapidapi.com/pickup_lines/random";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "71044ec259mshc583b240f639463p13518bjsn2f93a7631bd2",
      "X-RapidAPI-Host": "nerdy-pickup-lines1.p.rapidapi.com",
    },
  };

  const response2 = await fetch(url, options);
  const result2 = await response2.json();

  document.getElementById("line2").innerText = await result2[
    "random_pickup_line"
  ];
}

fetched();
fetched2();
