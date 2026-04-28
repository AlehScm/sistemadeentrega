export type PendingDeliveryRow = {
  id: string;
  chegada: string;
  morador: string;
  unidade: string;
  produto: string;
};

/** Dados de demonstração até a API estar ligada. */
export const MOCK_PENDING_DELIVERIES: PendingDeliveryRow[] = [
  { id: "1", chegada: "Hoje · 14:32", morador: "Maria Silva", unidade: "Bloco A · 102", produto: "Pacote — transportadora" },
  { id: "2", chegada: "Hoje · 11:05", morador: "João Pereira", unidade: "Bloco B · 804", produto: "Encomenda grande" },
  { id: "3", chegada: "Ontem · 17:48", morador: "Ana Costa", unidade: "Bloco A · 210", produto: "Correspondência" },
  { id: "4", chegada: "Ontem · 15:20", morador: "Carlos Mendes", unidade: "Bloco C · 45", produto: "Mercado — sacolas" },
  { id: "5", chegada: "Ontem · 09:10", morador: "Fernanda Lima", unidade: "Bloco A · 304", produto: "Livros" },
  { id: "6", chegada: "2 dias atrás · 16:00", morador: "Ricardo Souza", unidade: "Bloco B · 1201", produto: "Eletrônicos" },
  { id: "7", chegada: "2 dias atrás · 11:22", morador: "Patrícia Alves", unidade: "Bloco A · 88", produto: "Farmácia" },
  { id: "8", chegada: "3 dias atrás · 18:05", morador: "Lucas Oliveira", unidade: "Bloco C · 902", produto: "Móveis (caixa)" },
  { id: "9", chegada: "3 dias atrás · 10:30", morador: "Mariana Rocha", unidade: "Bloco B · 56", produto: "Pequeno volume" },
  { id: "10", chegada: "4 dias atrás · 14:15", morador: "Bruno Cardoso", unidade: "Bloco A · 1505", produto: "Documentos" },
  { id: "11", chegada: "4 dias atrás · 08:40", morador: "Juliana Freitas", unidade: "Bloco C · 210", produto: "Vestuário" },
  { id: "12", chegada: "5 dias atrás · 17:00", morador: "Felipe Nunes", unidade: "Bloco B · 403", produto: "Bebidas" },
  { id: "13", chegada: "5 dias atrás · 12:18", morador: "Camila Dias", unidade: "Bloco A · 701", produto: "Cosméticos" },
  { id: "14", chegada: "6 dias atrás · 09:55", morador: "Gabriel Martins", unidade: "Bloco C · 1108", produto: "Caixa média" },
  { id: "15", chegada: "6 dias atrás · 08:12", morador: "Larissa Barros", unidade: "Bloco B · 22", produto: "Presente" },
  { id: "16", chegada: "1 semana · 15:30", morador: "Thiago Ribeiro", unidade: "Bloco A · 609", produto: "Equipamento esportivo" },
  { id: "17", chegada: "1 semana · 11:00", morador: "Beatriz Campos", unidade: "Bloco C · 777", produto: "Importação — alfândega" },
  { id: "18", chegada: "1 semana · 07:45", morador: "André Gomes", unidade: "Bloco B · 1001", produto: "TV / monitor" },
];
