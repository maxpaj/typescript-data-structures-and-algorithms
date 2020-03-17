import { IKey } from "../data-structures/hashtable/hashtable";

export class KeyNumber implements IKey<KeyNumber> {
    private key: number;

    constructor(n: number) {
        this.key = n;
    }

    equals(n: KeyNumber): boolean {
        return this.key === n.key;
    }

    hashCode(): number {
        return this.key;
    }
}

export class KeyString implements IKey<KeyString> {
    private key: string;

    constructor(str: string) {
        this.key = str;
    }

    equals(s: KeyString): boolean {
        return s.key === this.key;
    }

    hashCode(): number {
        return this.key
            .split("")
            .reduce((sum, curr) => sum + curr.charCodeAt(0), 0);
    }
}
