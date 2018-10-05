export default function deputies() {
  return {
    // search - List and search for deputies according to criteria - sorted by name
    search: (name) => {
      const query = encodeURIComponent(name);
      return this.request(`${this.apiURL}/deputados?nome=${query}&ordem=ASC&ordenarPor=nome`);
    },
    details: ID => (
      this.request(`${this.apiURL}/deputados/${ID}`)
    ),
    expenses: ID => (
      this.request(`${this.apiURL}/deputados/${ID}/despesas?ordem=ASC&ordenarPor=ano`)
    ),
    events: ID => (
      this.request(`${this.apiURL}/deputados/${ID}/eventos?ordem=ASC&ordenarPor=dataHoraInicio`)
    ),
    agencies: ID => (
      this.request(`${this.apiURL}/deputados/${ID}/orgaos?ordem=ASC&ordenarPor=dataInicio`)
    ),
    board: ID => (
      this.request(`${this.apiURL}/legislaturas/${ID}/mesa`)
    ),
  };
}
