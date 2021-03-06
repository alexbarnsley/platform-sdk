import { Coins, Contracts } from "@arkecosystem/platform-sdk";

import { deriveKeyPair, deriveWallet } from "./utils";

export class Keys implements Contracts.Keys {
	readonly #config: Coins.Config;

	public constructor(config: Coins.Config) {
		this.#config = config;
	}

	public async fromMnemonic(mnemonic: string): Promise<Contracts.KeyPair> {
		const { publicKey, privateKey } = deriveWallet(mnemonic, this.#config.get<number>("network.crypto.slip44"));

		return { publicKey, privateKey };
	}

	public async fromPrivateKey(privateKey: string): Promise<Contracts.KeyPair> {
		return deriveKeyPair(privateKey);
	}

	public async fromWIF(wif: string): Promise<Contracts.KeyPair> {
		return deriveKeyPair(wif);
	}
}
