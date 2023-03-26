export function countryList({ flags, name }) {
  return `<li class="country-list__item">
<img class = "country-list__img" src="${flags.svg}" alt="flag" width=30 height=20>
<p class = "country-list__text">${name.official}</p>
    </li>`;
}

export function countryInfo({ name, capital, population, flags, languages }) {
  return `<div class="country-card">
    <h2 class="country-title">${name.official}</h2>
      <div class = country-info>
      <img class = "country-info__img" src="${
        flags.svg
      }" alt="flag" width=230 height=160>
    <ul class="country-info__list list">
        <li class="country-info__item">
            <p class="capital">Capital: ${capital}</p>
        </li>
        <li class="country-info__item">
            <p class="population">Population: ${population}</p>
        </li>
          <li class="country-info__item">
            <p class="languages">Languages: ${Object.values(languages)}</p>
        </li>
    </ul> </div>
</div>`;
}
