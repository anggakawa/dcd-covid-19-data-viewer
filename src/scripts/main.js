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
      alert('ada kesalahan');
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

  fetchData();
}

export default main;
