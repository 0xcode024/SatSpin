export interface IWallet {
  ordinalsAddress: string;
  ordinalsPublicKey: string;
  paymentAddress: string;
  paymentPublicKey: string;
  wallet: SUPPORTED_WALLETS;
}

export interface IAuthContext {
  loginWithWallet: (wallet: IWallet) => void;
  logout: () => void;
  wallet: IWallet | null;
  bitcoinPrice: string;
  feeRateData: any;
}

export enum SUPPORTED_WALLETS {
  XVERSE = 'xverse',
  LEATHER = 'leather',
  PHANTOM = 'phantom',
  OKX = 'okx',
  UNISAT = 'unisat',
}
