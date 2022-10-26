export class CountryFilter {
  public countryName: string;
  public region: string;

  constructor(countryName: string, region: string) {
    this.countryName = countryName;
    this.region = region;
  }
}
