export interface Transaction {
  id: string;
  createdAt: string;
  amount: number;
  destination: {
    user: {
      team: {
        cartolaName: string;
      }
    }
  };
  origin: {
    user: {
      team: {
        cartolaName: string;
      }
    }
  };
}
