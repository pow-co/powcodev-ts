
import { SmartContract, prop, PubKeyHash } from 'scrypt-ts';

export class GithubIssueWorkContract extends SmartContract {

    //@ts-ignore
    @prop()
    readonly contractorPubkey: PubKeyHash;
    readonly contracteePubkey: PubKeyHash;
    readonly arbiterPubkey: PubKeyHash;
    readonly platformPubkey: PubKeyHash;
    readonly githubOrg: string;
    readonly githubRepo: string;
    readonly githubIssueId: number;

    constructor({
        contractorPubkey,
        contracteePubkey,
        arbiterPubkey,
        platformPubkey,
        githubOrg,
        githubRepo,
        githubIssueId
    }: {
        contractorPubkey: PubKeyHash,
        contracteePubkey: PubKeyHash,
        arbiterPubkey: PubKeyHash,
        platformPubkey: PubKeyHash,
        githubOrg: string,
        githubRepo: string,
        githubIssueId: number,
    }) {
        super(contracteePubkey, contracteePubkey, arbiterPubkey, platformPubkey, githubOrg, githubRepo, githubIssueId)
        this.contractorPubkey = contractorPubkey;
        this.contracteePubkey = contracteePubkey;
        this.arbiterPubkey = arbiterPubkey;
        this.platformPubkey = platformPubkey;
        this.githubOrg = githubOrg;
        this.githubRepo = githubRepo;
        this.githubIssueId = githubIssueId;        
    }
}
