export class Country {
  public countryName: string;
  public population: string;
  public capital: string;
  public region: string;
  public flagImgUrl: string;

  constructor(
    countryName: string,
    region: string,
    population: string,
    capital: string,
    flagImgUrl: string
  ) {
    this.countryName = countryName;
    this.region = region;
    this.population = population;
    this.capital = capital;
    this.flagImgUrl = flagImgUrl;
  }
}
