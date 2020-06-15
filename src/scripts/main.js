function main() {
  const fetchData = async (country = null) => {
    try {
      if (country == null) {
        const response = await fetch("https://covid19.mathdro.id/api");
        const responseJson = await response.json();
        return fillCard(responseJson);
      }
      const response = await fetch(`https://covid19.mathdro.id/api/countries/${country}`);
      const responseJson = await response.json();
      return fillCard(responseJson);
    } catch (error) {
      alert('Data yang anda cari tidak ada!');
      return fillCard({recovered: {value: 0}, deaths: {value: 0}, confirmed: {value: 0} })
    }
  };

  const fillCard = (info) => {
    document.getElementById('date').innerHTML = Date(info.lastUpdate); // update tanggal terakhir diperbarui
    
    const cards = document.querySelector('.cards');
    
    cards.innerHTML = `
      <div class='columns'>
        <div class='column'>
          <card-info title='Confirmed' counts='${info.confirmed.value}'></card-info>
        </div>
        <div class='column'>
          <card-info title='Recovered' counts='${info.recovered.value}'></card-info>
        </div>
        <div class='column'>
          <card-info title='Deaths' counts='${info.deaths.value}'></card-info>
        </div>
      </div>
    `
  }

  const searchCountry = () => {
    const country = document.getElementById("country").value;
    const title = document.getElementById("country-title");
    if (country.length < 1) {
      return;
    }
    fetchData(country);
    title.innerHTML = country;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const countryButton = document.querySelector("#search-button");
    countryButton.addEventListener("click", () => {
      searchCountry();
    });
  });

  fetchData();
}

export default main;
