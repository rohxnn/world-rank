export class CountryListing {
  name: { common: string; official: string };
  capital: string[];
  population: number;
  area: number;
  flag: string;
  borders: any[];
  region: string;
  independent: boolean;
  unMember: boolean; // Assuming 'unmember' refers to UN membership status
  subregion: string;
  languages: { [code: string]: string }; // Object for language codes and names
  currencies: { [code: string]: { name: string; symbol: string } }; // Object for currency codes and names
  continents: string[];

  constructor(data: any) {
    this.name = data.name;
    this.capital = data.capital || [];
    this.population = data.population;
    this.area = data.area;
    this.flag = data.flags.png;
    this.borders = data.borders || [];
    this.region = data.region;
    this.independent = data.independent;
    this.unMember = data.unMember; // Assuming 'unmember' refers to UN membership status
    this.subregion = data.subregion;
    this.languages = data.languages || {}; // Handle cases where languages might be missing
    this.currencies = data.currencies || {}; // Handle cases where currencies might be missing
    this.continents = data.continents || [];
  }
}
